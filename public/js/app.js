'use strict';

//consulted https://dev.to/vaishnavme/simple-dark-light-toggle-with-vanillajs-2cbj for dark mode
//  https://stackoverflow.com/questions/64251413/setting-up-a-dark-mode-toggle-button-dynamically-with-vanilla-js

const darkModeToggle = document.querySelector('#darkmodetoggle');
darkModeToggle.addEventListener('click', darkLight);

function checkTheme() {
  const currentTheme = localStorage.getItem('currenttheme');
  if (currentTheme) {
    document.body.setAttribute('class', currentTheme);
  }
}

function darkLight() {
  const el = document.body;
  el.classList.toggle('lightmode');
  const currentTheme = localStorage.getItem('currenttheme');
  if (currentTheme === 'light') {
    localStorage.setItem('currenttheme', 'dark');
  } else {
    localStorage.setItem('currenttheme', 'light');
  }
}


//this is the keystone of our project
function addFooter() {
  $('footer').append('<section>This app uses standard GET and POST methods to retrieve information from API URL\'s it\'s provided. Use API URL\'s that contain API keys at your own risk and DO NOT SAVE THEM to the database.</section>');

}

addFooter();

checkTheme();
