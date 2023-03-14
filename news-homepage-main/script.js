let mobileMenu = document.querySelector(".nav-links");
let menuBtn = document.querySelector(".acc-icon");
let closeBtn = document.querySelector(".icon-close");
let overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function(){
    mobileMenu.classList.toggle("active");
    closeBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    menuBtn.classList.remove("active");
});

closeBtn.addEventListener("click", function(){
    menuBtn.classList.toggle("active");
    closeBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

});