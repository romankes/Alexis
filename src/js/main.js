'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.menu__hamburger'),
    items = hamburger.querySelectorAll('span');

    let check = false;

    function closeMenu(e){
        console.log(e.target);
        if(e.target != menu && menu.classList.contains('menu_active')) {
            let check = true;
            items.forEach((item) => {
                if(e.target == item) {
                    check = false;
                }
            });
            if(check == true && e.target != hamburger) {
                hamburger.classList.toggle('menu__hamburger_active');
                menu.classList.toggle('menu_active');
                document.removeEventListener('click', closeMenu);
            }
        }
    };

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu__hamburger_active');
        menu.classList.toggle('menu_active');
        document.addEventListener('click', closeMenu);
    });


});