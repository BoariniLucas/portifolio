const languageAssetsUrl = new URL("img/flags/", document.currentScript.src);

const translations = {

    pt: {
        // Controles do carrossel de seções.
        "case.chaptersLabel": "Seções do estudo de caso",
        "case.previousSection": "Seção anterior",
        "case.nextSection": "Próxima seção",
        "case.goToSection": "Ir para a seção",
        "case.currentSection": "Seção atual",

        // Estudo de caso — Controle Financeiro
        "case.seoTitle": "Controle Financeiro | Estudo de caso — Lucas Boarini",
        "case.seoDescription": "Conheça o Controle Financeiro: dashboard e interface de lançamentos com Google Sheets e Apps Script, apresentados neste estudo de caso de Lucas Boarini.",
        "case.back": "Voltar aos projetos",
        "case.backShort": "Projetos",
        "case.skip": "Ir para o conteúdo",
        "case.title": "Controle Financeiro",
        "case.intro": "Dashboard e interface de lançamentos para centralizar informações financeiras, acompanhar saldos, investimentos e indicadores em uma visão clara e organizada.",
        "case.problemLabel": "O problema",
        "case.problemTitle": "Dificuldade em acompanhar todas as informações",
        "case.problemText": "Informações distribuídas entre contas, moedas e registros manuais dificultam uma visão clara das finanças. O desafio do projeto foi reunir esses dados e organizar o acompanhamento de gastos, investimentos e patrimônio.",
        "case.problem1": "Informações financeiras em registros separados",
        "case.problem2": "Lançamentos manuais e repetitivos",
        "case.problem3": "Visão fragmentada do patrimônio",
        "case.problem4": "Dificuldade para identificar padrões de gastos",
        "case.solutionLabel": "A solução",
        "case.solutionTitle": "Um sistema centralizado e automatizado",
        "case.solutionText": "Desenvolvi um dashboard integrado ao Google Sheets por meio do Apps Script, com uma interface web para organizar lançamentos e visualizar informações financeiras em um só lugar.",
        "case.solution1": "Informações reunidas em um único painel",
        "case.solution2": "Interface prática para registrar movimentações",
        "case.solution3": "Gráficos e indicadores para acompanhar as finanças",
        "case.solution4": "Visão de saldos, patrimônio e investimentos",
        "case.featuresLabel": "Funcionalidades",
        "case.featuresTitle": "Principais recursos do projeto",
        "case.feature1Title": "Dashboard completo",
        "case.feature1Text": "Visão geral de saldos, receitas, despesas, investimentos e patrimônio.",
        "case.feature2Title": "Lançamentos rápidos",
        "case.feature2Text": "Interface para registrar movimentações financeiras de forma organizada.",
        "case.feature3Title": "Categorização",
        "case.feature3Text": "Organização dos lançamentos por categorias e subcategorias.",
        "case.feature4Title": "Investimentos",
        "case.feature4Text": "Acompanhamento dos investimentos e dos valores consolidados.",
        "case.feature5Title": "Indicadores",
        "case.feature5Text": "Gráficos e métricas para apoiar a análise financeira.",
        "case.technologiesLabel": "Tecnologias",
        "case.technologiesTitle": "Ferramentas utilizadas",
        "case.sheetsText": "Organização e armazenamento dos dados.",
        "case.appsText": "Integração entre planilha e interface, com automações.",
        "case.htmlText": "Estrutura das interfaces.",
        "case.cssText": "Estilização e responsividade.",
        "case.jsText": "Interações e lógica da aplicação.",
        "case.chartText": "Gráficos e visualização de dados.",
        "case.visualLabel": "Demonstração visual",
        "case.visualTitle": "Interface do sistema",
        "case.desktopCaption": "Dashboard principal (Desktop)",
        "case.mobileCaption": "Interface de lançamento (Mobile)",
        "case.desktopAlt": "Dashboard do Controle Financeiro com saldos, investimentos, patrimônio e gráficos de receitas e despesas, utilizando dados fictícios.",
        "case.mobileAlt": "Interface mobile de lançamento com campos de moeda, valor, banco, operação, subcategoria, descrição e tipo de conta.",
        "case.openDesktop": "Abrir imagem do dashboard em tamanho original, em nova aba",
        "case.openMobile": "Abrir imagem da interface mobile em tamanho original, em nova aba",
        "case.visualNote": "Screenshots com dados fictícios. Selecione uma imagem para vê-la em tamanho original.",
        "case.footer": "Estudo de caso de um projeto pessoal.",


        // SEO e compartilhamento
        "seo.title": "Lucas Boarini | Websites, Automação e Dashboards",
        "seo.description": "Criação de websites, automações e dashboards para pequenos negócios. Transforme processos manuais em soluções digitais eficientes. Dublin, Irlanda.",
        "seo.locale": "pt_BR",
        "seo.localeAlternate": "en_IE",

        // Header
        "nav.home": "Início",
        "nav.menu": "Menu de navegação",
        "nav.solutions": "Soluções",
        "nav.projects": "Projetos",
        "nav.about": "Sobre",
        "nav.technologies": "Tecnologias",
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
        "hero.cardDescriptionStart": "Soluções pensadas",
        "hero.cardDescriptionEnd": "para o seu negócio",

        //Solutions
        solutionsLabel: "Como posso apoiar",
        solutionsGoToWeb: "Ver solução: Sites profissionais",
        solutionsGoToDashboard: "Ver solução: Dashboards & Gestão",
        solutionsGoToAutomation: "Ver solução: Automações",

        solutionsTitleMain: "Soluções digitais para tornar",

        solutionsTitleHighlight: "seu negócio mais eficiente.",

        solutionsDescription:
            "Da presença online à organização dos processos, desenvolvo soluções simples e sob medida para as necessidades do seu negócio.",

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
        projectsGoToDelivery: "Ver projeto: Delivery Calculator",
        projectsGoToWebsite: "Ver projeto: Website profissional",
        projectsTitleMain: "Soluções que já",
        projectsTitleHighlight: "coloquei em prática.",
        projectsDescription:
            "Projetos desenvolvidos para resolver problemas reais através de tecnologia, organização e automação.",

        financeFeatured: "PROJETO EM DESTAQUE",
        financeTitle: "Controle Financeiro",
        financeDashboardAlt: "Dashboard do Controle Financeiro",
        financeMobileAlt: "Lançamento mobile do Controle Financeiro",
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
        websiteImageAlt: "Website desenvolvido",

        websiteDescription:
            "Website responsivo desenvolvido para apresentar serviços de forma profissional e facilitar o contato entre o negócio e seus clientes.",

        viewProject: "Ver projeto",

        // About
        aboutLabel: "SOBRE MIM",
        aboutTitleMain: "Negócios, tecnologia e soluções que",
        aboutTitleHighlight: "fazem sentido na prática.",
        aboutParagraph1: "Minha trajetória profissional combina duas áreas que sempre fizeram parte da minha experiência: negócios e tecnologia. Tenho mais de 10 anos de experiência trabalhando diretamente com clientes, vendas e necessidades reais de negócios, e sou formado em Análise e Desenvolvimento de Sistemas desde 2018.",
        aboutParagraph2: "Desde então, venho desenvolvendo projetos pessoais e explorando desenvolvimento web, dados e automação como ferramentas para transformar problemas do dia a dia em soluções mais simples e eficientes.",
        aboutParagraph3: "Hoje, uno essa experiência prática de negócios à minha formação em tecnologia para desenvolver websites, dashboards e automações pensados não apenas para funcionar, mas para resolver necessidades reais de quem os utiliza.",
        aboutHighlight1Title: "10+ anos",
        aboutHighlight1Description: "Experiência com clientes e negócios",
        aboutHighlight2Title: "Desde 2018",
        aboutHighlight2Description: "Formação e projetos em tecnologia ",
        aboutHighlight3Title: "Tech + Business",
        aboutHighlight3Description: "Tecnologia com visão de negócio",

        // Technologies
        technologiesLabel: "TECNOLOGIAS & FERRAMENTAS",
        technologiesGoToWeb: "Ver tecnologias: Desenvolvimento Web",
        technologiesGoToData: "Ver tecnologias: Automação & Dados",
        technologiesGoToDevelopment: "Ver tecnologias: Ferramentas de Desenvolvimento",
        technologiesTitle: "Tecnologias & Ferramentas",
        technologiesDescription: "Ferramentas que utilizo para transformar ideias em soluções digitais.",
        technologiesWebTitle: "Desenvolvimento Web",
        technologiesWebDescription: "Tecnologias utilizadas para criar sites e interfaces modernas.",
        technologiesDataTitle: "Automação & Dados",
        technologiesDataDescription: "Ferramentas para automatizar processos e organizar informações.",
        technologiesDevelopmentTitle: "Ferramentas de Desenvolvimento",
        technologiesDevelopmentDescription: "Ferramentas utilizadas no desenvolvimento e na organização dos projetos.",

        // Contact
        contactLabel: "CONTATO",
        contactTitle: "Vamos conversar?",
        contactSubtitle: "Tem um projeto em mente?",
        contactDescription: "Se você precisa de um website, quer automatizar processos ou organizar melhor as informações do seu negócio, vamos conversar sobre como posso ajudar.",
        contactWhatsApp: "WhatsApp",
        contactWhatsAppDescription: "Temporariamente indisponível.",
        contactEmail: "E-mail",
        contactEmailDescription: "Envie sua mensagem.",
        contactLocation: "Dublin, Irlanda",
        contactLocationDescription: "Atendimento remoto para Irlanda, Brasil e outros países.",
        contactImageAlt: "Ambiente de trabalho com notebook, caderno e uma caneca sobre a mesa.",
        contactCtaTitle: "Prefere conversar primeiro sobre sua ideia?",
        contactCtaDescription: "Me conte um pouco do que você precisa. Será um prazer entender seu projeto.",
        contactCtaButton: "Vamos conversar",
        contactWhatsAppMessage: "Olá, Lucas! Encontrei seu portfólio e gostaria de conversar sobre um projeto.",

        // Footer
        footerDescription: "Desenvolvendo soluções digitais para pequenos negócios que querem crescer de forma simples e eficiente.",
        footerLocationDescription: "Atendimento remoto para o Brasil e outros países.",
        footerNavigation: "Navegação",
        footerContact: "Contato",
        footerRights: "Todos os direitos reservados.",
        footerBackToTop: "Voltar ao topo",
    },

    en: {
        // Controles do carrossel de seções.
        "case.chaptersLabel": "Case study sections",
        "case.previousSection": "Previous section",
        "case.nextSection": "Next section",
        "case.goToSection": "Go to section",
        "case.currentSection": "Current section",

        // Estudo de caso — Controle Financeiro
        "case.seoTitle": "Financial Management | Case Study — Lucas Boarini",
        "case.seoDescription": "Explore Financial Management: a dashboard and transaction-entry interface built with Google Sheets and Apps Script, in this case study by Lucas Boarini.",
        "case.back": "Back to projects",
        "case.backShort": "Projects",
        "case.skip": "Skip to content",
        "case.title": "Financial Management",
        "case.intro": "A dashboard and transaction-entry interface that brings financial information together, with a clear overview of balances, investments and key indicators.",
        "case.problemLabel": "The problem",
        "case.problemTitle": "Keeping track of scattered financial information",
        "case.problemText": "Information spread across accounts, currencies and manual records makes finances harder to understand. The project focused on bringing that data together and organising the overview of spending, investments and net worth.",
        "case.problem1": "Financial information stored in separate records",
        "case.problem2": "Repetitive manual transaction entry",
        "case.problem3": "A fragmented view of net worth",
        "case.problem4": "Difficulty identifying spending patterns",
        "case.solutionLabel": "The solution",
        "case.solutionTitle": "A centralised, automated system",
        "case.solutionText": "I developed a dashboard connected to Google Sheets through Apps Script, with a web interface for organising transaction entry and viewing financial information in one place.",
        "case.solution1": "Financial information brought together in one dashboard",
        "case.solution2": "A practical interface for recording transactions",
        "case.solution3": "Charts and indicators for tracking finances",
        "case.solution4": "An overview of balances, net worth and investments",
        "case.featuresLabel": "Features",
        "case.featuresTitle": "Key project features",
        "case.feature1Title": "Financial dashboard",
        "case.feature1Text": "An overview of balances, income, expenses, investments and net worth.",
        "case.feature2Title": "Quick transaction entry",
        "case.feature2Text": "An interface for recording financial transactions in an organised way.",
        "case.feature3Title": "Categorisation",
        "case.feature3Text": "Transactions organised by categories and subcategories.",
        "case.feature4Title": "Investments",
        "case.feature4Text": "An overview of investments and consolidated values.",
        "case.feature5Title": "Indicators",
        "case.feature5Text": "Charts and metrics to support financial analysis.",
        "case.technologiesLabel": "Technologies",
        "case.technologiesTitle": "Tools used",
        "case.sheetsText": "Data organisation and storage.",
        "case.appsText": "Integration and automation between the spreadsheet and interface.",
        "case.htmlText": "Interface structure.",
        "case.cssText": "Styling and responsive layouts.",
        "case.jsText": "Application logic and interactions.",
        "case.chartText": "Charts and data visualisation.",
        "case.visualLabel": "Visual walkthrough",
        "case.visualTitle": "The system interface",
        "case.desktopCaption": "Main dashboard (Desktop)",
        "case.mobileCaption": "Transaction-entry interface (Mobile)",
        "case.desktopAlt": "Financial Management dashboard showing balances, investments, net worth, and income and expense charts with fictional data.",
        "case.mobileAlt": "Mobile transaction-entry interface with fields for currency, amount, bank, transaction type, subcategory, description and account type.",
        "case.openDesktop": "Open the full-size dashboard image in a new tab",
        "case.openMobile": "Open the full-size mobile interface image in a new tab",
        "case.visualNote": "Screenshots show the Portuguese interface with fictional data. Select an image to view it at full size.",
        "case.footer": "A case study of a personal project.",


        // SEO e compartilhamento
        "seo.title": "Lucas Boarini | Websites, Automation & Dashboards",
        "seo.description": "Websites, automation and dashboards for small businesses. Turn manual processes into efficient digital solutions. Based in Dublin, Ireland.",
        "seo.locale": "en_IE",
        "seo.localeAlternate": "pt_BR",

        // Header
        "nav.home": "Home",
        "nav.menu": "Navigation menu",
        "nav.solutions": "Solutions",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.technologies": "Technologies",
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
        "hero.cardDescriptionStart": "Designed around",
        "hero.cardDescriptionEnd": "your business",

        //Solutions
        solutionsLabel: "HOW I CAN HELP",
        solutionsGoToWeb: "View solution: Professional Websites",
        solutionsGoToDashboard: "View solution: Dashboards & Management",
        solutionsGoToAutomation: "View solution: Automation",

        solutionsTitleMain: "Digital solutions to simplify",

        solutionsTitleHighlight: "your business",

        solutionsDescription:
            "From your online presence to streamlining workflows, I build simple, tailored solutions for your business.",

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
        projectsGoToDelivery: "View project: Delivery Calculator",
        projectsGoToWebsite: "View project: Professional Website",
        projectsTitleMain: "Solutions I've",
        projectsTitleHighlight: "brought to life.",
        projectsDescription:
            "Projects developed to solve real problems through technology, organisation and automation.",

        financeFeatured: "FEATURED PROJECT",
        financeTitle: "Financial Management",
        financeDashboardAlt: "Financial Management dashboard",
        financeMobileAlt: "Mobile entry screen for Financial Management",
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
        websiteImageAlt: "Preview of the professional website",

        websiteDescription:
            "A responsive website designed to showcase services professionally and make it easier for businesses to connect with their customers.",

        viewProject: "View project",

        // About
        aboutLabel: "ABOUT ME",
        aboutTitleMain: "Business, technology and solutions that",
        aboutTitleHighlight: "make a real difference.",
        aboutParagraph1: "My professional background brings together business and technology. I have over 10 years of experience working directly with customers, sales and real business needs, and I graduated in Systems Analysis and Development in 2018.",
        aboutParagraph2: "Since then, I have been building personal projects and exploring web development, data and automation to turn everyday challenges into simpler, more efficient solutions.",
        aboutParagraph3: "Today, I combine hands-on business experience with my technical background to build websites, dashboards and automations that address the real needs of the people who use them.",
        aboutHighlight1Title: "10+ years",
        aboutHighlight1Description: "Experience with customers and businesses",
        aboutHighlight2Title: "Since 2018",
        aboutHighlight2Description: "Technical education and projects",
        aboutHighlight3Title: "Tech + Business",
        aboutHighlight3Description: "Technology with a business perspective",

        // Technologies
        technologiesLabel: "TECHNOLOGIES & TOOLS",
        technologiesGoToWeb: "View technologies: Web Development",
        technologiesGoToData: "View technologies: Automation & Data",
        technologiesGoToDevelopment: "View technologies: Development Tools",
        technologiesTitle: "Technologies & Tools",
        technologiesDescription: "Tools I use to turn ideas into digital solutions.",
        technologiesWebTitle: "Web Development",
        technologiesWebDescription: "Technologies for building modern websites and interfaces.",
        technologiesDataTitle: "Automation & Data",
        technologiesDataDescription: "Tools for automating workflows and organising information.",
        technologiesDevelopmentTitle: "Development Tools",
        technologiesDevelopmentDescription: "Tools I use to develop and organise my projects.",

        // Contact
        contactLabel: "CONTACT",
        contactTitle: "Let’s talk!",
        contactSubtitle: "Have a project in mind?",
        contactDescription: "Whether you need a website, want to automate processes or organise your business information, let’s talk about how I can help.",
        contactWhatsApp: "WhatsApp",
        contactWhatsAppDescription: "Temporarily unavailable.",
        contactEmail: "Email",
        contactEmailDescription: "Send me a message.",
        contactLocation: "Dublin, Ireland",
        contactLocationDescription: "Working remotely with clients in Ireland, Brazil and beyond.",
        contactImageAlt: "Workspace with a laptop, notebook and mug on a desk.",
        contactCtaTitle: "Would you like to talk through your idea first?",
        contactCtaDescription: "Tell me a little about what you need. I’d be happy to learn more about your project.",
        contactCtaButton: "Let’s talk",
        contactWhatsAppMessage: "Hi Lucas! I found your portfolio and would like to discuss a project.",

        // Footer
        footerDescription: "Building digital solutions for small businesses that want to grow simply and efficiently.",
        footerLocationDescription: "Working remotely with clients in Brazil and beyond.",
        footerNavigation: "Navigation",
        footerContact: "Contact",
        footerRights: "All rights reserved.",
        footerBackToTop: "Back to top",
    }

};

function changeLanguage(language) {
    if (language !== "pt" && language !== "en") return;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (element.hasAttribute("data-i18n-text")) {
            // Traduz o texto inicial sem substituir o destaque interno do título.
            const textNode = Array.from(element.childNodes).find(node =>
                node.nodeType === Node.TEXT_NODE && node.textContent.trim()
            );

            if (textNode) {
                textNode.textContent = translations[language][key] + " ";
            }
        } else {
            element.textContent = translations[language][key];
        }

    });

    // Atributos descritivos, acessíveis e metadados usam o mesmo dicionário dos textos.
    ["alt", "aria-label", "title", "content"].forEach(attribute => {
        const binding = `data-i18n-${attribute}`;
        document.querySelectorAll(`[${binding}]`).forEach(element => {
            const key = element.getAttribute(binding);
            element.setAttribute(attribute, translations[language][key]);
        });
    });

    if (typeof updateContactLinks === "function") {
        updateContactLinks(language);
    }

    document.documentElement.lang =
        language === "pt" ? "pt-BR" : "en-IE";

    languageFlag.src = new URL(language === "pt" ? "br.svg" : "ie.svg", languageAssetsUrl).href;
    languageFlag.alt = language === "pt" ? "Português" : "English";
    languageLabel.textContent = language === "pt" ? "PT" : "EN";

    // Apenas os links marcados transportam o idioma entre as duas páginas.
    document.querySelectorAll("a[data-language-link]").forEach(link => {
        const destination = new URL(link.href);
        if (language === "en") destination.searchParams.set("lang", "en");
        else destination.searchParams.delete("lang");
        link.href = destination.href;
    });

    const pageUrl = new URL(window.location.href);
    if (language === "en") pageUrl.searchParams.set("lang", "en");
    else pageUrl.searchParams.delete("lang");
    if (pageUrl.href !== window.location.href) {
        window.history.replaceState(window.history.state, "", pageUrl.href);
    }

}

const languageButton = document.querySelector("#language-button");
const languageMenu = document.querySelector("#language-menu");
const languageFlag = document.querySelector("#language-flag");
const languageLabel = document.querySelector("#language-label");


function setLanguageMenuOpen(open, returnFocus = false) {
    languageMenu.classList.toggle("open", open);
    languageButton.setAttribute("aria-expanded", String(open));
    if (returnFocus) languageButton.focus({ preventScroll: true });
}

// O foco permanece no botão ao abrir; Tab acessa as opções seguintes.
languageButton.addEventListener("click", () => {
    setLanguageMenuOpen(!languageMenu.classList.contains("open"));
});

document.addEventListener("keydown", event => {
    if (event.key !== "Escape" || !languageMenu.classList.contains("open")) return;
    event.preventDefault();
    setLanguageMenuOpen(false, true);
});

// Fecha o dropdown ao clicar fora
document.addEventListener("click", (event) => {

    const clickedOutside =
        !languageButton.contains(event.target) &&
        !languageMenu.contains(event.target);

    if (clickedOutside) {
        setLanguageMenuOpen(false);
    }

});


// Seleciona idioma
document.querySelectorAll("[data-lang]").forEach(button => {

    button.addEventListener("click", () => {

        const language = button.dataset.lang;

        changeLanguage(language);

        setLanguageMenuOpen(false, true);

    });

});
// Uma URL sem idioma (ou com valor não suportado) começa em português.
function restorePageLanguage() {
    const language = new URLSearchParams(window.location.search).get("lang");
    changeLanguage(language === "en" ? "en" : "pt");
}

restorePageLanguage();
window.addEventListener("popstate", restorePageLanguage);
window.addEventListener("pageshow", restorePageLanguage);
