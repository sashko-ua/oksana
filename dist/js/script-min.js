"use strict";const typed=new Typed("#typed",{strings:["Почни вдосконалювати<br>свій голос просто зараз!","Давай зробимо<br>з нього цукерочку!"],typeSpeed:30,backSpeed:15,smartBackspace:!0,loop:!0});$(document).ready(function(){$(".slick").slick({adaptiveHeight:!0,autoplay:!0})});const anchors=document.querySelectorAll('a[href*="#"]');for(let e of anchors)e.addEventListener("click",function(t){t.preventDefault();const o=e.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})});(new WOW).init();