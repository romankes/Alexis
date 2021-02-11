function hamburger(menuSelector, humburgerSelector, itemsSelector) {
    const menu = document.querySelector(menuSelector),
    hamburger = document.querySelector(humburgerSelector),
    items = hamburger.querySelectorAll(itemsSelector);

    function closeMenu(e){
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

}

module.exports = hamburger;