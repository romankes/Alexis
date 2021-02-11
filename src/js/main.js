'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = new require('./module/__hamburger'),
        menu = new require('./module/__menu'),
        tabs = new require('./module/__tabs');

    hamburger('.menu', '.menu__hamburger', 'span');
    menu('.menu__link', 'section');
    tabs('.team__item', '.team__about', 'active', 'bb');


});
