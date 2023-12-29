let mainEl = document.querySelector('main');
let topMenuEl = document.getElementById('top-menu');
console.log(mainEl);

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

for (var link of menuLinks) {
    let newElt = document.createElement('a');
    newElt.setAttribute('href', link.href);
    newElt.textContent = link.text;
    topMenuEl.appendChild(newElt);
}
// End of Menu Links
if (mainEl) {
    var mainBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
    mainEl.style.backgroundColor = mainBackgroundColor;
    mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
    mainEl.classList.add('flex-ctr');
} else {
    console.error('Element with id "mainEl" not found.');
}

if (topMenuEl) {
    topMenuEl.style.height = '100%';
    topMenuEl.classList.add('flex-around');
    var topBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg').trim();
} else {
    console.error('Element with id "topMenuEl" not found.');
}