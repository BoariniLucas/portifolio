const translations = {

    pt: {
        "nav.home": "Início",
        "nav.solutions": "Soluções",
        "nav.projects": "Projetos",
        "nav.about": "Sobre",
        "nav.contact": "Vamos conversar"
    },

    en: {
        "nav.home": "Home",
        "nav.solutions": "Solutions",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.contact": "Let's talk"
    }

};

function changeLanguage(language) {

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        element.textContent = translations[language][key];

    });

    document.documentElement.lang = 
        language === "pt" ? "pt-BR" : "en-IE";

}

const languageButton = document.querySelector("#language-button");
const languageMenu = document.querySelector("#language-menu");
const languageFlag = document.querySelector("#language-flag");
const languageLabel = document.querySelector("#language-label");


// Abre e fecha o dropdown
languageButton.addEventListener("click", () => {
    languageMenu.classList.toggle("open");
});

// Fecha o dropdown ao clicar fora
document.addEventListener("click", (event) => {

    const clickedOutside =
        !languageButton.contains(event.target) &&
        !languageMenu.contains(event.target);

    if (clickedOutside) {
        languageMenu.classList.remove("open");
    }

});


// Seleciona idioma
document.querySelectorAll("[data-lang]").forEach(button => {

    button.addEventListener("click", () => {

        const language = button.dataset.lang;

        changeLanguage(language);

        if (language === "pt") {
            languageFlag.src = "assets/img/flags/br.svg";
            languageFlag.alt = "Português";
            languageLabel.textContent = "PT";
        } else {
            languageFlag.src = "assets/img/flags/ie.svg";
            languageFlag.alt = "English";
            languageLabel.textContent = "EN";
        }

        languageMenu.classList.remove("open");

    });

});