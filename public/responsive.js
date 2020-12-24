const divMargin = document.querySelector('div.mb-20'); 
const heroHeaderMargin = document.getElementById('remove-margin');
const navBar = document.querySelector('header');
const logoText = document.querySelector('.logo-text');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
const menuLines = document.querySelectorAll('.line');
const menuBtn = document.querySelector('.menu-btn');

window.onscroll = function changeNavBarColor() {
  "use strict";
  if (navLinks.classList.contains("open")) return;

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navBar.classList.add('secondary-bg-color');
    logoText.classList.add('primary-color');
    logoText.classList.remove('secondary-color');
    navLink.forEach(link => {
      link.classList.remove('nav-link');
      link.classList.add('nav-link-alt');
    });
    menuLines.forEach(line => {
      line.classList.add('primary-bg-color');
      line.classList.remove('secondary-bg-color');
    });
  } else if (document.body.scrollTop <= 0 || document.documentElement.scrollTop <= 0) {
    navBar.classList.remove('secondary-bg-color');
    logoText.classList.add('secondary-color');
    logoText.classList.remove('primary-color');
    navLink.forEach(link => {
      link.classList.add('nav-link');
      link.classList.remove('nav-link-alt');
    });
    menuLines.forEach(line => {
      line.classList.add('secondary-bg-color');
      line.classList.remove('primary-bg-color');
    });
  };
};

// Toggles menu background
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  menuLines.forEach(line => {
    if (!navLinks.classList.contains("open") && !navBar.classList.contains('secondary-bg-color')
    || !navLinks.classList.contains("open") && !navBar.classList.contains('secondary-bg-color')) {
      line.classList.add('secondary-bg-color');
      line.classList.remove('primary-bg-color');
    } 
    else if (!navLinks.classList.contains("open") && navBar.classList.contains('secondary-bg-color') 
    || !navLinks.classList.contains("open") && navBar.classList.contains('secondary-bg-color') > 0) {
      line.classList.add('primary-bg-color');
      line.classList.remove('secondary-bg-color');
    } else {
      line.classList.add('primary-bg-color');
      line.classList.remove('secondary-bg-color');
    }
  });
});

// turns off menu background after clicking a link
navLink.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// removes margin-left styling from hero div and text
// for better responsive fit at max width 1100px
function mediaQuery(x) {
  if (x.matches) {
    divMargin.classList.remove('ml-100');
    heroHeaderMargin.classList.remove('ml-100');
  } else {
    divMargin.classList.add('ml-100');
    heroHeaderMargin.classList.add('ml-100');
  }
}

let x = window.matchMedia("(max-width: 1100px)");
mediaQuery(x);
x.addEventListener("change", mediaQuery)