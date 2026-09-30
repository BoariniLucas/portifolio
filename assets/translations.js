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

        //Projects
        projectsLabel: "PROJETOS",
        projectsTitleMain: "Soluções que já",
        projectsTitleHighlight: "coloquei em prática.",
        projectsDescription:
            "Projetos desenvolvidos para resolver problemas reais através de tecnologia, organização e automação.",

        financeFeatured: "PROJETO EM DESTAQUE",
        financeTitle: "Controle Financeiro",
        financeCategory: "Dashboard & Automação",

        financeDescription:
            "Sistema desenvolvido para centralizar e organizar informações financeiras, acompanhar o patrimônio e facilitar os lançamentos do dia a dia.",

        financeFeature1: "Dashboard financeiro interativo",
        financeFeature2: "Lançamentos rápidos pelo celular",
        financeFeature3: "Controle financeiro Real e Euro",
        financeFeature4: "Investimentos e patrimônio",
        financeFeature5: "Automações com Apps Script",

        deliveryCategory: "WEB APP",
        deliveryTitle: "Delivery Calculator",

        deliveryDescription:
            "Calculadora desenvolvida para ajudar entregadores a estimar ganhos líquidos considerando taxas e custos relacionados às entregas.",
        
        websiteCategory: "WEBSITE",
        websiteTitle: "Website profissional",

        websiteDescription:
            "Website responsivo desenvolvido para apresentar serviços de forma profissional e facilitar o contato entre o negócio e seus clientes.",

        viewProject: "Ver projeto",
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

        //Projects
        projectsLabel: "PROJECTS",
        projectsTitleMain: "Solutions I've",
        projectsTitleHighlight: "brought to life.",
        projectsDescription:
            "Projects developed to solve real problems through technology, organisation and automation.",

        financeFeatured: "FEATURED PROJECT",
        financeTitle: "Financial Management",
        financeCategory: "Dashboard & Automation",

        financeDescription:
            "A system developed to centralise and organise financial information, track net worth and simplify everyday financial entries.",

        financeFeature1: "Interactive financial dashboard",
        financeFeature2: "Quick mobile entries",
        financeFeature3: "Financial management across Real and Euro",
        financeFeature4: "Investment and net worth tracking",
        financeFeature5: "Automation with Apps Script",

        deliveryCategory: "WEB APP",
        deliveryTitle: "Delivery Calculator",

        deliveryDescription:
            "A calculator designed to help delivery riders estimate their net earnings by considering fees and delivery-related costs.",
        
        websiteCategory: "WEBSITE",
        websiteTitle: "Professional Website",

        websiteDescription:
            "A responsive website designed to showcase services professionally and make it easier for businesses to connect with their customers.",

        viewProject: "View project",
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