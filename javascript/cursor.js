const cursor = document.querySelector('.custom-cursor');

const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');
const footer = document.querySelector('.footer');

//-----------CONTROL CUSTOM CURSOR MOVEMENT-----------------
const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener('mousemove', moveCursor);

//-----------CHANGE CURSOR WHEN OVER LINKS AND BUTTONS -----------------
function cursorActive() {
  cursor.classList.add('custom-cursor_active');
  cursor.style.opacity = 0.2;
}
function cursorInactive() {
  cursor.classList.remove('custom-cursor_active');
  cursor.style.opacity = 0.8;
}

links.forEach((link) => {
  link.addEventListener('mouseenter', cursorActive);
  link.addEventListener('mouseleave', cursorInactive);
});

buttons.forEach((button) => {
  button.addEventListener('mouseenter', cursorActive);
  button.addEventListener('mouseleave', cursorInactive);
});

//---------------CHANGE CUSTOM CURSOR COLOR OVER FOOTER ---------------------
function enterFooter() {
  console.log('entered');
  cursor.style.color = 'blue';
}

function leaveFooter() {
  cursor.style.color = 'orange';
}

footer.addEventListener('mouseenter', enterFooter);
