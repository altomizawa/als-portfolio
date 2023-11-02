const menuItems = document.querySelectorAll('.menu__item');

setTimeout(() => {
  menuItems.forEach((item) => {
    const randomPlace = Math.floor(Math.random() * (-10 - -60) - 50);
    item.style.transition = 'cubic-bezier(0.68,-0.55,0.27,1.55) 1000ms';
    item.style.transform = `translateY(${randomPlace}%)`;
  });
}, 500);
