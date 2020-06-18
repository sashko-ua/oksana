document.addEventListener("DOMContentLoaded", function (event) {
    window.addEventListener('DOMContentLoaded', () => {
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
    })
});