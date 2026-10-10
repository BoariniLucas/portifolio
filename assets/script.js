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

// CONTACT CONFIGURATION — Lucas: preencha estes dois campos para ativar os links.
const contactConfig = {
    whatsappNumber: "", // PREENCHER: número com código do país, somente dígitos.
    email: "" // PREENCHER: endereço de e-mail profissional.
};

function updateContactLinks(language) {
    const whatsappNumber = contactConfig.whatsappNumber.trim();
    const email = contactConfig.email.trim();
    const message = translations[language].contactWhatsAppMessage;
    const links = {
        whatsapp: /^\d{7,15}$/.test(whatsappNumber)
            ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
            : "",
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            ? `mailto:${email}`
            : ""
    };

    document.querySelectorAll("[data-contact]").forEach(link => {
        const href = links[link.dataset.contact];

        if (href) {
            link.href = href;
            link.removeAttribute("aria-disabled");
            link.removeAttribute("tabindex");
        } else {
            link.removeAttribute("href");
            link.setAttribute("aria-disabled", "true");
            link.setAttribute("tabindex", "-1");
        }
    });
}

updateContactLinks(document.documentElement.lang.startsWith("pt") ? "pt" : "en");


// Ano do rodapé, separado do texto traduzido para preservar as trocas de idioma.
const copyrightYear = document.querySelector("#copyright-year");

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}
