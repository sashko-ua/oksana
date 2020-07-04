document.addEventListener("DOMContentLoaded", function (event) {
  // __________TYPED.JS__________
  const typed = new Typed("#typed", {
    strings: [
      "Почни вдосконалювати<br>свій голос просто зараз!",
      "Давай зробимо<br>з нього цукерочку!",
    ],
    typeSpeed: 80,
    backSpeed: 30,
    smartBackspace: true,
    loop: true,
  });

  // __________SLICK__________
  $(document).ready(function () {
    $(".slick").slick({
      adaptiveHeight: true,
      autoplay: true,
    });
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
