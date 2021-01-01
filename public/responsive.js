const divMargin = document.querySelector('div.mb-20'); 
const heroHeaderMargin = document.getElementById('remove-margin');
const navBar = document.querySelector('header');
const logoText = document.querySelector('.logo-text');
const navLinks = document.querySelector('.nav-links');
const navLinksListItem = document.querySelectorAll('.nav-links li');
const navLink = document.querySelectorAll('.nav-link');
const menuLines = document.querySelectorAll('.line');
const menuBtn = document.querySelector('.menu-btn');
const dropContent = document.querySelectorAll('.dropdown-content');
const dropLink = document.querySelectorAll('.drop-link');
const projectsNavLink = document.querySelector('[data-projects-nav-link]')
const projectsDropDown = document.querySelector('[data-projects-drop-down]')
let x = window.matchMedia("(max-width: 1100px)");


mediaQuery(x);
x.addEventListener('change', mediaQuery)

window.onscroll = function changeNavBarColor() {
  "use strict";
  if (navLinks.classList.contains("open")) return;

  // changes colors the navbar, logotext, navlink and menu button 
  // when user scrolls down from top
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navBar.classList.add('secondary-bg-color');
    logoText.classList.add('primary-color');
    logoText.classList.remove('secondary-color');
    navLink.forEach(link => {
      link.classList.add('nav-link-alt');
      link.classList.remove('nav-link');
    });
    menuLines.forEach(line => {
      line.classList.add('primary-bg-color');
      line.classList.remove('secondary-bg-color');
    });
    dropContent.forEach(content => {
      content.classList.add('dropdown-content-alt');
      content.classList.remove('dropdown-content');
    });
    dropLink.forEach(link => {
      link.classList.add('drop-link-alt');
      link.classList.remove('drop-link');
    });
    // changes colors of the navbar, logotext, navlink and menu button 
    // when user scrolls all the way to the top of the page
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
    dropContent.forEach(content => {
      content.classList.add('dropdown-content');
      content.classList.remove('dropdown-content-alt');
    });
    dropLink.forEach(link => {
      link.classList.add('drop-link');
      link.classList.remove('drop-link-alt');
    });
  };
};

// Toggles menu background and handles menu button colors
// depending on the nav bars position
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  navLinksListItem.forEach(listItem => {
    listItem.classList.toggle("fade");
  });
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
  link.addEventListener('click', () => {
    navLinks.classList.remove("open");
    navLinksListItem.forEach(listItem => {
    listItem.classList.remove("fade");
  });
  });
});

// removes margin-left styling from hero div and text
// for better responsive fit at max width 1100px
function mediaQuery(x) {
  if (divMargin == null) return;
  if (x.matches) {
    divMargin.classList.remove('ml-100');
    heroHeaderMargin.classList.remove('ml-100');
  } else {
    divMargin.classList.add('ml-100');
    heroHeaderMargin.classList.add('ml-100');
  }
}

projectsNavLink.addEventListener('mouseover', openDropDown);
projectsNavLink.addEventListener('mouseout', closeDropDown);
projectsDropDown.addEventListener('mouseover', openDropDown);
projectsDropDown.addEventListener('mouseout', closeDropDown);

function openDropDown() {
  projectsDropDown.classList.add('open-dropdown');
}
function closeDropDown() {
  projectsDropDown.classList.remove('open-dropdown');
}