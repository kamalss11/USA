// navbar - toggle

const navbar = document.querySelector(".nav-bar");
const side_bar = document.querySelector(".sidebar");


navbar.addEventListener('click',() => {
    if(!side_bar.classList.add("toggle")){
        side_bar.classList.add("toggle")
    }
    else{
        side_bar.classList.remove("toggle")
    }
})