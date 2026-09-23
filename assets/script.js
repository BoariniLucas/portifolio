const navLinks = document.querySelectorAll(".nav a");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


// Menu active
navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");


        // Fecha o menu mobile
        nav.classList.remove("open");
        menuToggle.classList.remove("active");

    });

});


// Abre e fecha menu mobile
menuToggle.addEventListener("click", () => {

    nav.classList.toggle("open");
    menuToggle.classList.toggle("active");

});