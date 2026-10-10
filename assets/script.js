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


// Carrosséis mobile: cada grade controla apenas seus próprios cards e indicadores.
document.querySelectorAll("[data-mobile-carousel]").forEach(carousel => {
    const cards = Array.from(carousel.children);
    const controls = document.querySelector(`[data-carousel-controls="${carousel.id}"]`);
    const indicators = Array.from(controls.querySelectorAll(".carousel-indicator"));
    const mobileCarousel = window.matchMedia("(max-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scrollFrame = null;

    function updateCarouselIndicator() {
        const carouselLeft = carousel.getBoundingClientRect().left;
        let activeIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
            const distance = Math.abs(card.getBoundingClientRect().left - carouselLeft);
            if (distance < closestDistance) {
                closestDistance = distance;
                activeIndex = index;
            }
        });

        indicators.forEach((indicator, index) => {
            indicator.setAttribute("aria-current", String(index === activeIndex));
        });
    }

    function goToCard(index) {
        if (!mobileCarousel.matches) return;

        carousel.scrollTo({
            left: cards[index].offsetLeft - cards[0].offsetLeft,
            behavior: reducedMotion.matches ? "instant" : "smooth"
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => goToCard(index));
    });

    carousel.addEventListener("scroll", () => {
        if (scrollFrame !== null) return;
        scrollFrame = window.requestAnimationFrame(() => {
            updateCarouselIndicator();
            scrollFrame = null;
        });
    }, { passive: true });

    carousel.addEventListener("keydown", event => {
        if (!mobileCarousel.matches || event.target !== carousel) return;
        const currentIndex = indicators.findIndex(indicator =>
            indicator.getAttribute("aria-current") === "true"
        );
        let nextIndex;
        if (event.key === "ArrowRight") nextIndex = Math.min(currentIndex + 1, cards.length - 1);
        if (event.key === "ArrowLeft") nextIndex = Math.max(currentIndex - 1, 0);
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = cards.length - 1;
        if (nextIndex === undefined) return;
        event.preventDefault();
        goToCard(nextIndex);
    });

    function updateCarouselLayout() {
        if (mobileCarousel.matches) {
            carousel.setAttribute("tabindex", "0");
        } else {
            carousel.removeAttribute("tabindex");
        }
        updateCarouselIndicator();
    }

    new ResizeObserver(updateCarouselLayout).observe(carousel);
    mobileCarousel.addEventListener("change", updateCarouselLayout);
    updateCarouselLayout();
});
