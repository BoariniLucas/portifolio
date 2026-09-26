const translations = {

    pt: {
        // Header
        "nav.home": "Início",
        "nav.solutions": "Soluções",
        "nav.projects": "Projetos",
        "nav.about": "Sobre",
        "nav.contact": "Vamos conversar",

        // Hero
        "hero.label": "Especialista em Soluções Digitais",

        "hero.titleStart": "Tecnologia para",
        "hero.titleHighlight": "simplificar",
        "hero.titleEnd": "o seu negócio.",

        "hero.description":
            "Desenvolvo sites, dashboards e automações que ajudam pequenos negócios a digitalizar processos, economizar tempo e trabalhar de forma mais eficiente.",

        "hero.available": "Disponível para novos projetos",

        "hero.projects": "Conheça meus projetos",
        "hero.contact": "Vamos conversar",

        "hero.cardTitle": "Feito sob medida",
        "hero.cardDescription": "Soluções pensadas para o seu negócio",

        //Solutions
        solutionsLabel: "COMO POSSO APOIAR",

        solutionsTitleMain: "Soluções digitais para tornar",

        solutionsTitleHighlight: "seu negócio mais eficiente.",

        solutionsDescription:
            "Tecnologia prática para pequenos negócios que querem economizar tempo, organizar processos e trabalhar de forma mais eficiente.",

        solutionWebTitle: "Sites profissionais",

        solutionWebDescription:
            "Sites modernos, responsivos e pensados para apresentar seu negócio de forma profissional e transformar visitantes em clientes.",

        solutionDashboardTitle: "Dashboards & Gestão",

        solutionDashboardDescription:
            "Organize informações importantes do seu negócio e transforme dados em uma visão clara para acompanhar resultados e tomar decisões.",

        solutionAutomationTitle: "Automações",

        solutionAutomationDescription:
            "Simplifique tarefas repetitivas e conecte seus processos para economizar tempo e reduzir trabalho manual.",

        viewProjects: "Ver projetos",
    },

    en: {
        // Header
        "nav.home": "Home",
        "nav.solutions": "Solutions",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.contact": "Let's talk",

        // Hero
        "hero.label": "Digital Solutions Specialist",

        "hero.titleStart": "Technology to",
        "hero.titleHighlight": "simplify",
        "hero.titleEnd": "your business.",

        "hero.description":
            "I develop websites, dashboards and automations that help small businesses digitalise processes, save time and work more efficiently.",

        "hero.available": "Available for new projects",

        "hero.projects": "View my projects",
        "hero.contact": "Let's talk",

        "hero.cardTitle": "Tailored solutions",
        "hero.cardDescription": "Designed around your business",

        //Solutions
        solutionsLabel: "HOW I CAN HELP",

        solutionsTitleMain: "Digital solutions to simplify",

        solutionsTitleHighlight: "your business",

        solutionsDescription:
            "Practical technology for small businesses looking to save time, streamline processes and work more efficiently.",

        solutionWebTitle: "Professional Websites",

        solutionWebDescription:
            "Modern, responsive websites designed to present your business professionally and turn visitors into customers.",

        solutionDashboardTitle: "Dashboards & Management",

        solutionDashboardDescription:
            "Organise important business information and turn your data into clear insights to track results and make better decisions.",

        solutionAutomationTitle: "Automation",

        solutionAutomationDescription:
            "Simplify repetitive tasks and connect your processes to save time and reduce manual work.",

        viewProjects: "View projects",
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