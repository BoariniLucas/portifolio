// A navegação completa é inicializada apenas nas páginas que possuem o menu.
if (document.querySelector(".nav") && document.querySelector(".menu-toggle")) {
    const navLinks = document.querySelectorAll(".nav a");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");


    // O estado visual e o estado acessível do menu são atualizados juntos.
    function setNavigationOpen(open, returnFocus = false) {
        nav.classList.toggle("open", open);
        menuToggle.classList.toggle("active", open);
        menuToggle.setAttribute("aria-expanded", String(open));

        if (returnFocus) menuToggle.focus({ preventScroll: true });
        if (open) {
            // Aguarda a visibilidade do menu antes de mover o foco.
            requestAnimationFrame(() => requestAnimationFrame(() => {
                if (nav.classList.contains("open")) {
                    navLinks[0].focus({ preventScroll: true });
                }
            }));
        }
    }

    // Observa uma faixa abaixo do header, sem reescrever a URL durante a rolagem.
    const navigationSections = Array.from(document.querySelectorAll("main section[id]"));
    let navigationObserver;

    function updateActiveNavigation(anchor) {
        navLinks.forEach(link => {
            const active = link.getAttribute("href") === anchor;
            link.classList.toggle("active", active);
            if (active) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    function updateVisibleNavigation() {
        const activationLine = document.querySelector(".header").offsetHeight + 24;
        const section = navigationSections.slice().reverse().find(section =>
            section.getBoundingClientRect().top <= activationLine
        ) || navigationSections[0];
        if (section) updateActiveNavigation(`#${section.id}`);
    }

    function observeNavigationSections() {
        if (navigationObserver) navigationObserver.disconnect();
        const activationLine = document.querySelector(".header").offsetHeight + 24;
        navigationObserver = new IntersectionObserver(updateVisibleNavigation, {
            rootMargin: `-${activationLine}px 0px -${Math.max(0, window.innerHeight - activationLine - 1)}px 0px`,
            threshold: 0
        });
        navigationSections.forEach(section => navigationObserver.observe(section));
        updateVisibleNavigation();
    }

    window.addEventListener("hashchange", () => requestAnimationFrame(updateVisibleNavigation));
    window.addEventListener("pageshow", observeNavigationSections);
    window.addEventListener("resize", observeNavigationSections);
    updateActiveNavigation(window.location.hash || "#home");
    observeNavigationSections();

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            const wasOpen = nav.classList.contains("open");
            setNavigationOpen(false);

            if (wasOpen) {
                // O destino recebe o foco sem impedir a navegação nativa pela âncora.
                const target = document.querySelector(this.getAttribute("href"));
                target.setAttribute("tabindex", "-1");
                target.focus({ preventScroll: true });
                target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
            }
        });
    });

    // Em reaberturas rápidas, confirma o foco após a transição de visibilidade.
    nav.addEventListener("transitionend", event => {
        if (event.target === nav && nav.classList.contains("open") && document.activeElement === menuToggle) {
            navLinks[0].focus({ preventScroll: true });
        }
    });

    menuToggle.addEventListener("click", () => {
        const open = !nav.classList.contains("open");
        setNavigationOpen(open);
    });

    document.addEventListener("keydown", event => {
        if (event.defaultPrevented || event.key !== "Escape" || !nav.classList.contains("open")) return;
        event.preventDefault();
        setNavigationOpen(false, true);
    });

    const compactNavigation = window.matchMedia("(max-width: 1100px)");
    compactNavigation.addEventListener("change", event => {
        if (!event.matches) {
            const toggleHadFocus = document.activeElement === menuToggle;
            setNavigationOpen(false);
            if (toggleHadFocus) navLinks[0].focus({ preventScroll: true });
        } else if (nav.contains(document.activeElement)) {
            menuToggle.focus({ preventScroll: true });
        }
    });

}

// Configuração central dos canais de contato.
const contactConfig = {
    whatsappNumber: "353838987893", // Código do país e número, somente dígitos.
    email: "contact@boarinilucas.com"
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
            if (link.dataset.contact === "whatsapp") {
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            } else {
                link.removeAttribute("target");
                link.removeAttribute("rel");
            }
            link.removeAttribute("aria-disabled");
            link.removeAttribute("tabindex");
        } else {
            link.removeAttribute("href");
            link.removeAttribute("target");
            link.removeAttribute("rel");
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
