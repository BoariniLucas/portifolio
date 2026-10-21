// Carrossel exclusivo do estudo de caso; os carrosséis do portfólio não são alterados.
const caseChapters = document.querySelector("#case-chapters");

if (caseChapters) {
    const slides = Array.from(caseChapters.children);
    const controls = document.querySelector(".case-carousel-controls");
    const indicators = Array.from(controls.querySelectorAll("button"));
    const navigation = document.querySelector(".case-chapter-navigation");
    const previous = navigation.querySelector("[data-case-previous]");
    const next = navigation.querySelector("[data-case-next]");
    const positions = document.querySelectorAll("[data-case-position]");
    const mobile = window.matchMedia("(max-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activeIndex = 0;
    let settleTimer;
    let heightFrame;
    let resizeFrame;
    let touching = false;

    function updateHeight() {
        if (!mobile.matches) return;
        const height = Math.ceil(slides[activeIndex].getBoundingClientRect().height);
        if (caseChapters.style.height !== `${height}px`) caseChapters.style.height = `${height}px`;
    }

    function scheduleHeight() {
        if (heightFrame) return;
        heightFrame = requestAnimationFrame(() => {
            heightFrame = null;
            updateHeight();
        });
    }

    function revealStart() {
        const headerBottom = document.querySelector(".header").getBoundingClientRect().bottom;
        if (caseChapters.getBoundingClientRect().top < headerBottom) {
            caseChapters.scrollIntoView({
                block: "start",
                behavior: reducedMotion.matches ? "instant" : "smooth"
            });
        }
    }

    function updateAccessibility() {
        slides.forEach((slide, index) => {
            const inactive = mobile.matches && index !== activeIndex;
            if (inactive && slide.contains(document.activeElement)) {
                caseChapters.focus({ preventScroll: true });
            }
            slide.inert = inactive;
            if (inactive) slide.setAttribute("aria-hidden", "true");
            else slide.removeAttribute("aria-hidden");
        });
        indicators.forEach((indicator, index) => {
            indicator.setAttribute("aria-current", String(index === activeIndex));
        });
        // Mantém o foco em um controle disponível ao alcançar as extremidades.
        if (mobile.matches && activeIndex === 0 && document.activeElement === previous) next.focus({ preventScroll: true });
        if (mobile.matches && activeIndex === slides.length - 1 && document.activeElement === next) previous.focus({ preventScroll: true });
        previous.disabled = activeIndex === 0;
        next.disabled = activeIndex === slides.length - 1;
        const positionText = `${String(activeIndex + 1).padStart(2, "0")} / 05`;
        positions.forEach(position => {
            if (position.textContent !== positionText) position.textContent = positionText;
        });
    }

    function settleSlide() {
        if (!mobile.matches || touching) return;
        const left = caseChapters.getBoundingClientRect().left;
        let closest = 0;
        let distance = Infinity;
        slides.forEach((slide, index) => {
            const delta = Math.abs(slide.getBoundingClientRect().left - left);
            if (delta < distance) {
                closest = index;
                distance = delta;
            }
        });
        if (closest === activeIndex) return;
        const nextHeight = slides[closest].getBoundingClientRect().height;
        const headerBottom = document.querySelector(".header").getBoundingClientRect().bottom;
        // Se o visitante está abaixo do conteúdo do novo slide, mantém seu início acessível.
        if (caseChapters.getBoundingClientRect().top + nextHeight < headerBottom + 80) revealStart();
        activeIndex = closest;
        updateAccessibility();
        updateHeight();
    }

    function scheduleSettle() {
        clearTimeout(settleTimer);
        settleTimer = setTimeout(settleSlide, 140);
    }

    function goToSlide(index) {
        if (!mobile.matches) return;
        // O foco acompanha o conteúdo revelado, em vez de ficar nos controles fora da tela.
        if (controls.contains(document.activeElement)) caseChapters.focus({ preventScroll: true });
        revealStart();
        caseChapters.scrollTo({
            left: slides[index].offsetLeft - slides[0].offsetLeft,
            behavior: reducedMotion.matches ? "instant" : "smooth"
        });
        // Também sincroniza quando o destino já está alinhado e não há evento scroll.
        scheduleSettle();
    }

    function keyboardIndex(event, index) {
        if (event.key === "ArrowRight") return Math.min(index + 1, slides.length - 1);
        if (event.key === "ArrowLeft") return Math.max(index - 1, 0);
        if (event.key === "Home") return 0;
        if (event.key === "End") return slides.length - 1;
    }

    previous.addEventListener("click", () => goToSlide(Math.max(0, activeIndex - 1)));
    next.addEventListener("click", () => goToSlide(Math.min(slides.length - 1, activeIndex + 1)));

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => goToSlide(index));
        indicator.addEventListener("keydown", event => {
            if (!mobile.matches) return;
            const next = keyboardIndex(event, index);
            if (next === undefined) return;
            event.preventDefault();
            indicators[next].focus({ preventScroll: true });
            goToSlide(next);
        });
    });

    caseChapters.addEventListener("keydown", event => {
        if (!mobile.matches || event.target !== caseChapters) return;
        const next = keyboardIndex(event, activeIndex);
        if (next === undefined) return;
        event.preventDefault();
        goToSlide(next);
    });

    caseChapters.addEventListener("scroll", scheduleSettle, { passive: true });
    caseChapters.addEventListener("touchstart", () => { touching = true; }, { passive: true });
    function finishTouch() {
        touching = false;
        scheduleSettle();
    }
    caseChapters.addEventListener("touchend", finishTouch, { passive: true });
    caseChapters.addEventListener("touchcancel", finishTouch, { passive: true });

    function updateLayout() {
        clearTimeout(settleTimer);
        caseChapters.classList.toggle("is-carousel", mobile.matches);
        controls.hidden = !mobile.matches;
        navigation.hidden = !mobile.matches;
        if (mobile.matches) {
            caseChapters.setAttribute("tabindex", "0");
            updateHeight();
            caseChapters.scrollTo({
                left: slides[activeIndex].offsetLeft - slides[0].offsetLeft,
                behavior: "instant"
            });
        } else {
            if (document.activeElement === caseChapters || controls.contains(document.activeElement) || navigation.contains(document.activeElement)) {
                slides[activeIndex].setAttribute("tabindex", "-1");
                slides[activeIndex].focus();
                slides[activeIndex].addEventListener("blur", () => {
                    slides.forEach(slide => slide.removeAttribute("tabindex"));
                }, { once: true });
            }
            caseChapters.removeAttribute("tabindex");
            caseChapters.style.removeProperty("height");
            caseChapters.scrollLeft = 0;
        }
        updateAccessibility();
    }

    const sizeObserver = new ResizeObserver(scheduleHeight);
    slides.forEach(slide => sizeObserver.observe(slide));
    caseChapters.querySelectorAll("img").forEach(image => image.addEventListener("load", scheduleHeight));
    window.addEventListener("resize", () => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(updateLayout);
    });
    mobile.addEventListener("change", updateLayout);
    window.addEventListener("pageshow", updateLayout);
    updateLayout();
}
