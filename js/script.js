const header = document.querySelector('header');
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  navlist.classList.toggle('open');
};

window.onscroll = () => {
  navlist.classList.remove('open');
};

document.querySelector('.year').textContent = new Date().getFullYear();
