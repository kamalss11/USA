//  Nav scroll

window.addEventListener("scroll",function(){
    var nav = document.querySelector(".container nav");
    nav.classList.toggle("sticky",window.scrollY > 150);

})

//  nav bar
const nav_bar = document.querySelector(".nav-bars");
const navmenu = document.querySelector(".menu");

nav_bar.addEventListener("click",navtoggleclick);

function navtoggleclick(){
	nav_bar.classList.toggle("open-navbar");
	navmenu.classList.toggle("open");
}