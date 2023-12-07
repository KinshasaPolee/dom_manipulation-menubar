import "./styles.css";
const mainEl = document.querySelector('main');
var mainBgColor = getComputedStyle(document.documentElement).getPropertyValue('main-bg');
mainEl.style.backgroundColor = 'var(' + mainBgColor + ')';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
var topMenuBgColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');
topMenuBgColor.style.backgroundColor = topMenuBgColor;
topMenuEl.classList.add('flex-around');