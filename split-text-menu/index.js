const links = document.querySelectorAll('.link');

for (let i = 0; i < links.length; i++) {
    addClass(links[i], i);
}

function addClass(el, time) {
    setTimeout(() => {
        el.classList.add('demo');
        removeClass(el);
    }, time * 750);
}

function removeClass(el) {
    setTimeout(() => {
        link.classList.remove('demo');
    }, 750);
}
