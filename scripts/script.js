const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});


let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menu.onClick = ()=>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
    console.log("Button clicked");
}


menu.scroll = ()=>{
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
    console.log("Button clicked");
}