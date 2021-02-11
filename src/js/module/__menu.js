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