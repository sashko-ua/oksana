document.addEventListener("DOMContentLoaded", function (event) {
    // __________HAMBURGER__________
    // window.addEventListener('DOMContentLoaded', () => {
    //     const menu = document.querySelector('.marathon-nav__wrapper'),
    //         menuItem = document.querySelectorAll('.marathon-nav__item'),
    //         hamburger = document.querySelector('.hamburger');

    //     hamburger.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('marathon-nav__wrapper_active');
    //     });

    //     menuItem.forEach(item => {
    //         item.addEventListener('click', () => {
    //             hamburger.classList.toggle('hamburger_active');
    //             menu.classList.toggle('marathon-nav__wrapper_active');
    //         })
    //     })
    // })


    // __________TYPED.JS__________
    const typed = new Typed('#typed', {
        strings: [
            'Почни вдосконалювати<br>свій голос просто зараз!',
            'Давай зробимо<br>з нього цукерочку!',
        ],
        typeSpeed: 80,
        backSpeed: 30,
        smartBackspace: true,
        loop: true
    });

    // __________SLICK__________
    $(document).ready(function(){
        $('.slick').slick({
            adaptiveHeight: true,
            // autoplay: true,
            dots: true,
        });
    });
});