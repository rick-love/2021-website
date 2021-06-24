// SELECT DOM ITEMS
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navBranding = document.querySelector('.nav-branding');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

// SET STATE OF MENU
let showMenu = false;

// EVENT LISTENERS
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    nav.classList.add('show');
    navList.classList.add('show');
    navBranding.classList.add('show');

    navItems.forEach((navItem) => {
      navItem.classList.add('show');
    });

    // SET MENU STATE
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    nav.classList.remove('show');
    navList.classList.remove('show');
    navBranding.classList.remove('show');

    navItems.forEach((navItem) => {
      navItem.classList.remove('show');
    });

    // SET MENU STATE
    showMenu = false;
  }
}
