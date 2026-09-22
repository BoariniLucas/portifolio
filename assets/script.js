const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        // Remove active de todos os links
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // Adiciona active ao link clicado
        this.classList.add("active");
    });
});