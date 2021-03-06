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