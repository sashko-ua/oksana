document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll('a[href*="#"]');for(let e of t)e.addEventListener("click",function(t){t.preventDefault();const n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})})});