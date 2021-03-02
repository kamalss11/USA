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

//  sliders

const slides = document.querySelector(".slider-inner-container").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicators = document.querySelector(".indicators");

let index = 0;

function autoPlay(){
    nextslide();
    updateDotIndicator();
}

function nextslide(){
    if(index ==  slides.length - 1){
        index = 0;
    }
    else{
        index++;
    }
    changeslide();
}

function changeslide(){
    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

let timer = setInterval(autoPlay,5000);

function prevslide(){
    if(index == 0){
        index = slides.length - 1;
    }

    else{
        index--;
    }
    changeslide();
}

prev.addEventListener("click",function(){
    prevslide();
    updateDotIndicator();
    resetTimer();
})

next.addEventListener("click",function(){
    nextslide();
    updateDotIndicator();
    resetTimer();
})

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoPlay,5000);
}

dotIndicator();
function dotIndicator(){
    for(let i=0;i<slides.length;i++){
        const div = document.createElement("div");
        div.setAttribute("onclick","indicateSlide(this)");
        div.id = i;
        if(i == 0){
            div.className = "active";
        }
        indicators.appendChild(div);
    }
}

function indicateSlide(element){
    index = element.id;
    changeslide();
    updateDotIndicator();
    resetTimer();
}

function updateDotIndicator(){
    for(let i=0;i<indicators.children.length;i++){
        indicators.children[i].classList.remove("active");
    }
    indicators.children[index].classList.add("active");
}