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