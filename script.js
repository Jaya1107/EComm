/*const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}*/

/*
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}*/

/*function myFunction(){
    var x=document.getElementById('navbar');
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}*/


/*
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})*/

/*--------------------------------------- 10/09/22 ---------------------------------------------------------*/

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".heaader");
const toggleNavbar = () => {

    nav_header.classList.toggle("navbar-link")
    /*alert("HELLO EVERYONE!!");*/
};

mobile_nav.addEventListener("click", () => toggleNavbar());
