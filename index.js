import "./styles.css";
const mainEl = document.querySelector('main');
var mainBgColor = getComputedStyle(document.documentElement).getPropertyValue('main-bg');
mainEl.style.backgroundColor = 'var(' + mainBgColor + ')';
