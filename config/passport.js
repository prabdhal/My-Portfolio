const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ email: 'email' }, async (email, password, done) => {
      // Match User
      const email = await User.findOne({ email });
      if (!user)
        return done(null, false, { message: 'email is not registered' });

      await bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) return done(null, user);
        else return done(null, false, { message: 'Password is incorrect' });
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
