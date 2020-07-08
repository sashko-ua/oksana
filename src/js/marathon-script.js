
$(document).ready(function () {
    // __________HAMBURGER__________
    const menu = document.querySelector('.marathon-nav__wrapper'),
        menuItem = document.querySelectorAll('.marathon-nav__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('marathon-nav__wrapper_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('marathon-nav__wrapper_active');
        })
    })

    // __________SLICK__________
    $('.slick').slick({
        adaptiveHeight: true,
        autoplay: true,
    });

    // __________SMOOTH SCROLLING__________
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute("href").substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }
});
