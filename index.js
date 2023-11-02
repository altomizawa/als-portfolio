const menuButton = document.querySelector('.header__button');
const header = document.querySelector('.header__menu-wrapper');

function openMenu() {
  menuButton.classList.add('header__button_active');
  menuButton.removeEventListener('click', openMenu);
  menuButton.addEventListener('click', closeMenu);
  header.style.transform = 'translateX(0%)';
}

function closeMenu() {
  menuButton.classList.remove('header__button_active');
  menuButton.addEventListener('click', openMenu);
  header.style.transform = 'translateX(100%)';
}

menuButton.addEventListener('click', openMenu);
