const menuButton = document.querySelector('.header__button');
const header = document.querySelector('.header__menu-wrapper');
const headerMenu = document.querySelector('.header__menu');

function openMenu() {
  menuButton.classList.add('header__button_active');
  menuButton.removeEventListener('click', openMenu);
  menuButton.addEventListener('click', closeMenu);
  header.style.transform = 'translateX(0%)';
  headerMenu.style.zIndex = '10';
}

function closeMenu() {
  menuButton.classList.remove('header__button_active');
  menuButton.addEventListener('click', openMenu);
  header.style.transform = 'translateX(100%)';
  headerMenu.style.zIndex = '0';
}

menuButton.addEventListener('click', openMenu);
