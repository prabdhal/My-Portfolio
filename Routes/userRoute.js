const bcrypt = require('bcrypt');
const User = require('../models/user');
const VerifyAccount = require('../models/verify');
const { checkAuthenticated, checkNotAuthenticated } = require('../config/auth');
const passport = require('passport');
const transporter = require('../config/mailer');

const router = require('express').Router();

// login page
router.get('/register', checkNotAuthenticated, async (req, res) => {
  let errors = [];
  res.render('register', { errors, user: req.user });
});

// register page
router.get('/login', checkNotAuthenticated, (req, res) => {
  let errors = [];
  res.render('login', { errors, user: req.user });
});

// verifies user account
router.get('/verify-account/:userId/:verifyCode', async (req, res) => {
  const user = await User.findOne({ _id: req.params.userId });

  // verification code does not exist
  const verify = await VerifyAccount.findOne({ email: user.email });
  if (!verify) {
    req.flash(
      'error_msg',
      'Your activation link is invalid, try sending a new validation code'
    );
    return res.redirect('/');
  }

  // verification code does not match
  if (verify.code !== req.params.verifyCode) {
    req.flash(
      'error_msg',
      'Verification code does not match, try sending a new validation code'
    );

    return res.redirect('/');
  }

  // user account active
  user.active = true;
  await user.save();
  await VerifyAccount.findOneAndDelete({ email: user.email });

  req.flash('success_msg', 'You have successfully verified your account');
  res.redirect('/login');
});

// account recovery page where user enters email to reset account
router.get('/account-recovery', (req, res) => {
  res.render('accountRecovery', { user: req.user });
});

// takes user to reset password page if user verification passes
router.get('/account-recovery/:userId/:code', async (req, res) => {
  const user = await User.findOne({ _id: req.params.userId });

  // verification code does not exist
  const verify = await VerifyAccount.findOne({ email: user.email });
  if (!verify) {
    req.flash('error_msg', 'Your activation link is invalid');
    return res.redirect('/account-recovery');
  }

  // verification code does not match
  if (verify.code !== req.params.code) {
    req.flash('error_msg', 'Your verification code does not match');
    return res.redirect('/account-recovery');
  }

  req.flash('success_msg', 'You have successfully verified your account');
  res.redirect(`/reset-password/${user._id}/${verify.code}`);
});

// reset password page [Got to add auth]
router.get('/reset-password/:id/:code', async (req, res) => {
  const user = await User.findById(req.params.id);

  res.render('resetPassword', { user });
});

// registration form submittion
router.post('/register', checkNotAuthenticated, async (req, res) => {
  const { displayName, email, password, confirmPassword } = req.body;

  let errors = [];
  let admin = false;

  // validate user registration information
  if (!displayName || !email || !password || !confirmPassword)
    errors.push('Not all fields have been entered');
  if (displayName.length <= 5)
    errors.push('Display name must contain at least 6 characters');
  if (password.length <= 7)
    errors.push('Password must contain at least 8 characters');
  if (password.search(/[a-z]/i) < 0)
    errors.push('Password must contain at least one letter');
  if (password.search(/[0-9]/) < 0)
    errors.push('Password must contain at least one digit');
  if (password !== confirmPassword) errors.push('Passwords do not match');
  if (password === displayName || password === email)
    errors.push('Password can not match your display name or email');

  const displayNameExists = await User.findOne({ displayName });
  if (displayNameExists)
    errors.push('Display name already exists, use a different Display name');

  const emailExists = await User.findOne({ email });
  if (emailExists) errors.push('Email already exists, use a different email');

  // return out if there are any errors with validation
  if (errors.length > 0) {
    return res.render('register', {
      errors,
      user: req.user,
    });
  }

  // hash passwords
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    displayName,
    email,
    password: hashedPassword,
  });
  const verifyCode = new VerifyAccount({
    email,
    code: makeid(6),
  });

  mailVerificationCode(user, verifyCode, email);

  const savedUser = await user.save();
  const savedCode = await verifyCode.save();

  req.flash(
    'success_msg',
    'Verification code has been sent to your registered email'
  );
  res.redirect('/login');
});

// login form submittion
router.post('/login', checkNotAuthenticated, async (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  })(req, res, next);
});

// resend verification code for account validation
router.post('/resend/verification-code/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  // delete old verification codes
  await VerifyAccount.deleteMany({ email: user.email });

  // create new verification code
  const verify = new VerifyAccount({
    email: user.email,
    code: makeid(6),
  });

  await verify.save();
  mailVerificationCode(user, verify, user.email);

  req.flash(
    'success_msg',
    'A new verification code has been successfully sent to your email'
  );
  res.redirect('/');
});

// resend verification code for password reset
router.post('/account-recovery', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    req.flash('error_msg', 'An account with that email does not exist');
    return res.redirect('/account-recovery');
  }

  // delete old verification codes
  await VerifyAccount.deleteMany({ email: user.email });

  const verify = new VerifyAccount({
    email,
    code: makeid(6),
  });

  await verify.save();

  mailResetPassword(user, verify, email);

  req.flash('success_msg', 'Verification code has been sent to your email');
  res.redirect('/account-recovery');
});

router.put('/reset-password/:id', async (req, res) => {
  const { password, confirmPassword } = req.body;
  let user = await User.findById(req.params.id);

  let errors = [];

  if (!password || !confirmPassword)
    errors.push('Not all fields have been entered');
  if (password.length <= 7)
    errors.push('Password must contain at least 8 characters');
  if (password.search(/[a-z]/i) < 0)
    errors.push('Password must contain at least one letter');
  if (password.search(/[0-9]/) < 0)
    errors.push('Password must contain at least one digit');
  if (password !== confirmPassword) errors.push('Passwords do not match');
  if (password === user.displayName || password === user.email)
    errors.push('Password can not match your display name or email');

  // return out if there are any errors with validation
  if (errors.length > 0) {
    return res.render('resetPassword', {
      errors,
      user,
    });
  }

  // hash passwords
  const hashedPassword = await bcrypt.hash(password, 10);

  user.password = hashedPassword;

  await user.save((err, result) => {
    if (err) {
      res.render('resetPassword', { title: 'Reset Password', user });
    } else {
      res.redirect('/login');
    }
  });
});

// user logout
router.get('/logout', checkAuthenticated, async (req, res) => {
  req.logout();
  req.flash('success_msg', 'You have successfully logged out');
  res.redirect('/login');
});

// delete account
router.delete('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.redirect('/');
});

// make random id
function makeid(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// mail verfication code for account validation
function mailVerificationCode(user, verify, email) {
  let link = `https://localhost:3000/${user._id}/${verify.code}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    cc: 'hello',
    subject: `Email verification for Prab's Portfolio`,
    text: ``,
    html: `<h4>Dear ${user.displayName},</h4>
    <br/>
    <p>To validate your account, click the link below:</p> 
    <p>${link}</p><br/><p>Your account information:</p> 
    <p>Display Name: ${user.username}</p>
    <br/>
    <p>Should you have any questions or concerns, please contact me at 
    prab.dhaliwal95@gmail.com or leave a comment on my tutorial blog on 
    bLogPoster and I will get back to you.</p><br/><p>Sincerely,</p>
    <p>Prabdeep Dhaliwal</p><p>https://blogposter-website.herokuapp.com/bLogPoster/view/how-to-use-blogposter</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
    } else {
    }
  });
}

// mail verfication code for password reset
function mailResetPassword(user, verify, email) {
  let link = `https://localhost:3000/${user._id}/${verify.code}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: `${email}`,
    subject: `Email verification for Prab's Portfolio`,
    text: ``,
    html: `<h4>Dear ${user.displayName},</h4>
    <br/>
    <p>To reset your password to your bLogPoster account, click the link below:</p> 
    <p>${link}</p>
    <br/>
    <p>Your account information:</p>
    <p>Username: ${user.username}</p>
    <br/>
    <p>Should you have any questions or concerns, please contact me at prab.dhaliwal95@gmail.com 
    or leave a comment on my tutorial blog on bLogPoster and I will get back to you.</p>
    <br/>
    <p>Sincerely,</p><p>Prabdeep Dhaliwal</p>
    <p>https://blogposter-website.herokuapp.com/bLogPoster/view/how-to-use-blogposter</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = router;
