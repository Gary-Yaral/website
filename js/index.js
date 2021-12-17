const BTN_MENU = document.querySelector('.toggle');
const BARS = BTN_MENU.querySelectorAll('div');
const LINKS = document.querySelector('.menu__routes');
const NAV_INFO = document.querySelector('.nav__info');
const LIMIT = NAV_INFO.offsetTop - 25;
const NAVBAR = document.querySelector('.nav__menu');
function openMenu(lines,links){
  lines[0].classList.toggle('bar1');
  lines[1].classList.toggle('bar2');
  links.classList.toggle('menu-hidden');
}

BTN_MENU.onclick = (e) => {
  e.preventDefault();
  openMenu(BARS, LINKS);
}


window.onscroll = ()=>{
  if (window.scrollY >= LIMIT) {
    NAVBAR.classList.add('non-opacity');
  } else {
    NAVBAR.classList.remove('non-opacity');
  }
}