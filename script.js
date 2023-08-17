const openmenuicon = document.querySelector(".open-menu");
const closemenuicon = document.querySelector(".close-menu")
const navMenu = document.querySelector(".nav-menu");

openmenuicon.addEventListener("click", mobileMenu);
closemenuicon.addEventListener("click", mobileMenu);

function mobileMenu() {
    openmenuicon.classList.toggle("active");
    closemenuicon.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    openmenuicon.classList.remove("active");
    closemenuicon.classList.remove("active")
    navMenu.classList.remove("active");
}