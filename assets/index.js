const navToggle = document.querySelector(".nav__toggle")
const navMenu = document.querySelector(".menu__links")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu__links__visible")
}) 
