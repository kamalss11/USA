// navbar - toggle

const navbar = document.querySelector(".nav-bar");
const side_bar = document.querySelector(".sidebar");
const main_cnt = document.querySelector(".main-content");
const main_hdr = document.querySelector(".main-content header");


navbar.addEventListener('click',() => {
    if(!side_bar.classList.contains("toggle")){
        side_bar.classList.add("toggle");
        main_cnt.classList.add("toggle");
        main_hdr.classList.add("toggle");
    }
    else{
        side_bar.classList.remove("toggle");
        main_cnt.classList.remove("toggle");
        main_hdr.classList.remove("toggle");
    }
})

const pro = document.querySelector(".name");
const pro_li = document.querySelector(".name ul")

pro.addEventListener('click',()=>{
    if(!pro.classList.contains("open")){
        pro.classList.add("open");
    }
    else{
        pro.classList.remove("open");
    }
})

//  clock

function clock(){
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.querySelector(".ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = 'AM';
    
    //  convert 24 hour format to 12 hour format with am/pm indicator
    if(h>12){
        h = h - 12;
        var am = 'PM';
    }

    //  add 0 to the begining if hour < 10
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

}

var interval = setInterval(clock, 1000);