/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/module/__hamburger.js":
/*!**********************************!*\
  !*** ./js/module/__hamburger.js ***!
  \**********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/module/__menu.js":
/*!*****************************!*\
  !*** ./js/module/__menu.js ***!
  \*****************************/
/***/ ((module) => {

function menu(selectorLink, selectorSection) {
    const links = document.querySelectorAll(selectorLink),
        sections = document.querySelectorAll(selectorSection);

    let sumHeights = sections[0].offsetHeight,
        linkNum = 0,
        sectionNum = 0,
        prevPosition = 0;

    links.forEach((link, ) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const blockName = link.getAttribute('href');
            document.querySelector(blockName).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        });
    });

    function scrollDown(nowPosition) {
        if(nowPosition > sumHeights - 1) {
            if(sectionNum != sections.length -1) {
                sumHeights += sections[sectionNum+1].offsetHeight;
                const blockName = links[linkNum].getAttribute('href');

                if(document.querySelector(blockName) == sections[sectionNum]) {
                    links[linkNum+1].classList.add('active');
                    links[linkNum].classList.remove('active');
                    linkNum++;
                }

                sectionNum++;  
            } else {
                links[sections.length -1].classList.add('active');
                links[sections.length -2].classList.remove('active');
                linkNum = sections.length -1;
            }
        }
    }

    function scrollUp(nowPosition) {
        if(nowPosition < sumHeights) {
            sumHeights -= sections[sectionNum].offsetHeight;

            if(linkNum > 0) {
                const blockName = links[linkNum].getAttribute('href');

                if(document.querySelector(blockName) != sections[sectionNum]) {
                    links[linkNum-1].classList.add('active'); 
                    links[linkNum].classList.remove('active');
                    linkNum--;
                }

                sectionNum--;
            } else {
                links[0].classList.add('active'); 
                links[1].classList.remove('active');
                linkNum--;
            }
        }
    } 

    window.addEventListener('scroll', () =>{
        const nowPosition = window.scrollY;
        if(nowPosition>prevPosition) {
            scrollDown(nowPosition);
        } else {
            scrollUp(nowPosition);
        }

        prevPosition = nowPosition;
    });
}

module.exports = menu;

/***/ }),

/***/ "./js/module/__tabs.js":
/*!*****************************!*\
  !*** ./js/module/__tabs.js ***!
  \*****************************/
/***/ ((module) => {

function tabs(cardsSelector, contentSelector, classActive, classInactive) {
    const cards = document.querySelectorAll(cardsSelector),
        contentBlocks = document.querySelectorAll(contentSelector);

    cards.forEach((card, cardNum) => {
        function addClass() {
            if(!card.classList.contains(classActive)) {
                card.classList.add(classInactive);
            }
        }

        function removeClass() {
            if(!card.classList.contains(classActive)) {
                card.classList.remove(classInactive);
            }
        }

        card.addEventListener('click',  () => {
            card.classList.remove(classInactive);
            card.classList.add(classActive);

            contentBlocks[cardNum].classList.add(classActive);

            cards.forEach(cardForAddInactive => {
                if(cardForAddInactive != card) {
                    cardForAddInactive.classList.remove(classActive);
                    cardForAddInactive.classList.add(classInactive);

                }
            });

            contentBlocks.forEach(contentBlock => {
                if(contentBlock != contentBlocks[cardNum]) {
                    contentBlock.classList.remove(classActive); 
                }
            });
        });

        card.addEventListener('mouseover', removeClass);
        card.addEventListener('mouseout', addClass); 
    });
}

module.exports = tabs;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
"use strict";
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = new __webpack_require__(/*! ./module/__hamburger */ "./js/module/__hamburger.js"),
        menu = new __webpack_require__(/*! ./module/__menu */ "./js/module/__menu.js"),
        tabs = new __webpack_require__(/*! ./module/__tabs */ "./js/module/__tabs.js");

    hamburger('.menu', '.menu__hamburger', 'span');
    menu('.menu__link', 'section');
    tabs('.team__item', '.team__about', 'active', 'bb');


});

})();

/******/ })()
;
//# sourceMappingURL=script.js.map