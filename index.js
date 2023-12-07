// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

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

menuLinks.forEach(function(link) {

    var linkElement = document.createElement('a');
    linkElement.textContent = link.text;
    linkElement.href = link.href;
    topMenuEl.appendChild(linkElement);
});