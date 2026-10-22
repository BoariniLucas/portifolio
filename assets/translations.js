const languageAssetsUrl = new URL("img/flags/", document.currentScript.src);

const translations = {

    pt: {

        // Consentimento opcional de métricas.
        "consent.title": "Sua privacidade importa",
        "consent.text": "Utilizamos métricas opcionais para entender as visitas e melhorar este site. Você pode aceitar ou recusar e alterar sua escolha a qualquer momento.",
        "consent.decline": "Recusar",
        "consent.accept": "Aceitar",
        "consent.preferences": "Preferências de privacidade",
        "consent.storageError": "Não foi possível salvar a escolha solicitada. As métricas permanecem bloqueadas nesta página. Verifique o armazenamento do navegador antes de tentar novamente.",
        "consent.revocationError": "As métricas foram bloqueadas nesta página, mas não foi possível salvar a recusa. Outras páginas ou recarregamentos podem reutilizar a autorização antiga. Limpe os dados deste site nas configurações do navegador antes de continuar a navegação.",
        // Política de Privacidade.
        "privacy.link": "Política de Privacidade",
        "privacy.seoTitle": "Política de Privacidade | Lucas Boarini",
        "privacy.seoDescription": "Informações sobre contatos, serviços externos e privacidade no portfólio de Lucas Boarini, operado a partir da Irlanda.",
        "privacy.back": "Voltar ao início",
        "privacy.backShort": "Início",
        "privacy.skip": "Ir para o conteúdo",
        "privacy.intro": "Esta página explica como os contatos profissionais e os recursos deste portfólio se relacionam com seus dados pessoais. O site é operado por Lucas Boarini a partir da Irlanda.",
        "privacy.updatedLabel": "Última atualização:",
        "privacy.updatedDate": "22 de outubro de 2026",
        "privacy.transferNoticeTitle": "Processamento internacional de dados",
        "privacy.transferNoticeText": "A Hostinger informa que o servidor de hospedagem está no Brasil e os backups nos Estados Unidos. O processamento internacional é descrito abaixo, incluindo as salvaguardas previstas no DPA da Hostinger e as informações que ainda não foram confirmadas.",
        "privacy.controllerTitle": "1. Responsável pelo site",
        "privacy.controllerText": "Lucas Boarini é o responsável por este portfólio pessoal de serviços digitais. Para dúvidas sobre privacidade ou solicitações relacionadas a seus dados, utilize o e-mail profissional abaixo.",
        "privacy.siteLabel": "Site:",
        "privacy.emailLabel": "E-mail:",
        "privacy.contactTitle": "2. Dados fornecidos ao entrar em contato",
        "privacy.contactText": "Você pode entrar em contato voluntariamente por e-mail ou WhatsApp. Nessas conversas, podem ser recebidos seu nome, endereço de e-mail, número de telefone e informações que você compartilhe sobre um possível projeto. Este site não possui formulário de contato.",
        "privacy.contactChoice": "A decisão de iniciar uma conversa é sua. Compartilhe apenas as informações necessárias para apresentar sua solicitação; não envie senhas, credenciais ou dados financeiros pessoais nos contatos iniciais.",
        "privacy.purposeTitle": "3. Finalidades e bases legais",
        "privacy.purposeText": "Os contatos profissionais destinam-se a responder solicitações, conversar sobre possíveis projetos, preparar propostas e acompanhar essas conversas. O código do portfólio não implementa marketing automatizado, perfis de visitantes ou venda de dados.",
        "privacy.basisText": "As bases legais são consideradas conforme a finalidade e a relação com o visitante. Iniciar uma conversa não equivale a consentimento para qualquer uso dos dados.",
        "privacy.servicesTitle": "4. Serviços externos e dados técnicos",
        "privacy.fontsText": "Google Fonts: a fonte Manrope é carregada diretamente dos servidores do Google. Isso gera solicitações externas que podem transmitir dados técnicos, como endereço IP e informações do navegador. Não há cópia local da fonte nesta versão.",
        "privacy.analyticsText": "Cloudflare Web Analytics, fornecido pela Cloudflare, Inc., é utilizado, mediante consentimento, para compreender o tráfego e melhorar o desempenho do portfólio. Após a aceitação, o script envia métricas de carregamento e informações de navegação, como a página visitada e a origem da visita, ao fornecedor. As conexões externas também expõem dados técnicos, incluindo endereço IP e informações do navegador. Não enviamos deliberadamente nomes, e-mails ou mensagens de contato à ferramenta.",
        "privacy.analyticsDetails": "Os dados desse serviço são processados pela Cloudflare, separadamente da hospedagem Hostinger, e podem envolver tratamento internacional. Os locais e prazos internos de retenção específicos desta configuração não foram confirmados. A documentação do fornecedor não equivale a uma verificação individual desses fluxos nem estabelece, por si só, dispensa de consentimento ou uma avaliação concluída de interesse legítimo.",
        "privacy.analyticsLink": "Informações sobre o Cloudflare Web Analytics",
        "privacy.analyticsPrivacyLink": "Política de Privacidade da Cloudflare",
        "privacy.whatsappText": "WhatsApp: ao selecionar um link de contato, você é direcionado ao serviço com uma mensagem inicial editável. Nenhuma mensagem é enviada automaticamente. Um link para o WhatsApp não equivale à instalação de um rastreador do WhatsApp no portfólio; o uso do serviço está sujeito às condições e informações de privacidade do próprio provedor.",
        "privacy.hostingText": "Hostinger fornece a hospedagem do site e o e-mail contact@boarinilucas.com. Os registros técnicos necessários à operação e segurança do site são gerenciados pelo provedor e podem incluir endereço IP, horário, requisição e informações do dispositivo e do navegador.",
        "privacy.transfersText": "O portfólio é operado a partir da Irlanda. Conforme informado pela Hostinger, o servidor de hospedagem está no Brasil e os backups nos Estados Unidos. Isso envolve processamento internacional. Essas localizações não descrevem necessariamente todos os locais de processamento do e-mail, Google Fonts, WhatsApp ou dos demais serviços e suboperadores.",
        "privacy.externalLinksText": "Links de projetos e outros destinos externos levam a sites com funcionamento e informações de privacidade próprios. Consulte essas informações ao utilizar tais serviços.",
        "privacy.cookiesTitle": "5. Cookies e tecnologias semelhantes",
        "privacy.cookiesText": "O idioma é indicado pela URL, por exemplo ?lang=en. Para registrar a preferência de métricas, usamos localStorage e o cookie funcional portfolio_analytics_consent, compartilhados entre as páginas deste domínio. Ambos guardam somente aceita ou recusada, sem identificadores de visitantes ou histórico. O cookie dura até um ano; o localStorage permanece até ser alterado ou limpo. A recusa em qualquer um prevalece; a aceitação exige confirmação nos dois. Sem confirmação válida, pedimos nova escolha e não carregamos Analytics. Segundo a Cloudflare, o Web Analytics não usa cookies analíticos ou fingerprinting; isso não significa que nenhuma informação pessoal seja tratada nas conexões. Google Analytics e Google Tag Manager não estão instalados.",
        "privacy.cookiesHosting": "Conforme orientação recebida do suporte da Hostinger, a hospedagem por si só normalmente não adiciona cookies de rastreamento aos visitantes. Isso não comprova a ausência de cookies no domínio publicado. O Cloudflare Web Analytics só carrega com autorização explícita confirmada. Você pode aceitar, recusar ou revogar nas Preferências de privacidade do rodapé. Aceitar inicia nova navegação por recarregamento, sem enviar métricas retroativas. Revogar bloqueia novos envios ao endpoint do Analytics antes de salvar a recusa e recarregar. Se só um mecanismo salvar a recusa, ela prevalece sobre a autorização antiga. Se nenhum conseguir salvar, a página permanece bloqueada e um aviso explica que outras navegações podem reutilizar a autorização antiga; nesse caso, limpe os dados do site antes de continuar. Nenhuma persistência é garantida se o navegador a impedir. Os bloqueios não recuperam requisições já transmitidas ou enfileiradas, nem apagam dados enviados durante autorização anterior.",
        "privacy.retentionTitle": "6. Conservação e proteção dos dados",
        "privacy.retentionText": "Contatos que não resultem em contratação: as mensagens e os dados pessoais de potenciais clientes serão conservados por até 12 meses após o último contato. A revisão será feita periodicamente de forma manual. Após esse período, os dados deverão ser excluídos ou anonimizados, salvo obrigação legal ou outra justificativa válida para conservação adicional. Não há exclusão automática.",
        "privacy.securityText": "A autenticação em duas etapas (2FA) está ativada no e-mail profissional e na conta Hostinger. Essas medidas não garantem segurança absoluta.",
        "privacy.rightsTitle": "7. Seus direitos",
        "privacy.rightsText": "Conforme o GDPR e as condições aplicáveis a cada situação, você pode solicitar acesso aos dados, correção, apagamento, restrição do tratamento, portabilidade e oposição. Quando um tratamento se basear em consentimento, é possível retirá-lo sem afetar a licitude do tratamento anterior à retirada.",
        "privacy.requestsText": "Solicitações relacionadas à privacidade podem ser enviadas a contact@boarinilucas.com. Você também pode apresentar uma reclamação à Data Protection Commission (DPC), autoridade de proteção de dados da Irlanda, ou à autoridade de supervisão competente.",
        "privacy.dpcLink": "Data Protection Commission da Irlanda",
        "privacy.updatesTitle": "8. Atualizações desta política",
        "privacy.updatesText": "Esta página poderá ser atualizada quando o funcionamento do portfólio, os serviços utilizados ou as práticas de tratamento forem alterados ou esclarecidos. A data de atualização será indicada no início do documento.",
        "privacy.footer": "Privacidade e transparência no portfólio pessoal.",

        "privacy.contactStorage": "As mensagens permanecem nas respectivas plataformas de e-mail e WhatsApp. Não existe CRM nem banco de dados próprio do portfólio para armazenar essas conversas.",
        "privacy.basisContract": "Solicitações de projetos e propostas feitas por uma pessoa que poderá contratar o serviço: medidas pré-contratuais solicitadas pelo titular e, quando houver contratação, execução do contrato, nos termos do artigo 6.º, n.º 1, alínea b), do GDPR, na medida necessária a essas atividades.",
        "privacy.basisLegal": "Documentos e informações necessários ao cumprimento de obrigações legais aplicáveis: artigo 6.º, n.º 1, alínea c), do GDPR. Essa base não se aplica automaticamente a todas as mensagens recebidas.",
        "privacy.basisInterests": "Comunicações profissionais que não se enquadrem em medidas pré-contratuais, contatos de representantes de empresas e acompanhamento proporcional de conversas: interesse legítimo em responder solicitações e gerir relações profissionais, nos termos do artigo 6.º, n.º 1, alínea f), sujeito à necessidade, proporcionalidade e aos direitos e expectativas do titular.",
        "privacy.basisTechnical": "Funcionamento, apresentação legível e segurança do portfólio: interesse legítimo em disponibilizar e proteger o site, nos termos do artigo 6.º, n.º 1, alínea f), apenas quando necessário e sem prevalecer sobre os direitos do visitante. Esse interesse não autoriza rastreamento ou cookies não essenciais sem o consentimento exigível.",
        "privacy.logsText": "Os logs de acesso ficam disponíveis para consulta no hPanel da Hostinger por até sete dias e podem ser baixados manualmente. O prazo total de retenção interna desses registros pela Hostinger não foi confirmado; os sete dias de disponibilidade no painel não representam um prazo confirmado de exclusão. Lucas Boarini não baixa nem arquiva esses logs rotineiramente e não mantém uma base própria de logs dos visitantes.",
        "privacy.safeguardsText": "O Brasil consta da lista de países com decisão de adequação da Comissão Europeia, dentro do âmbito dessa decisão. O DPA da Hostinger, revisado em 29/09/2026, prevê cláusulas contratuais-tipo da União Europeia, nos módulos 2 e 3, quando aplicáveis. Essa previsão contratual não equivale à comprovação individual do mecanismo utilizado por cada suboperador. A adequação de um destino não cobre automaticamente os demais fluxos.",
        "privacy.hostingerDpaLink": "Consultar o DPA da Hostinger",
        "privacy.adequacyLink": "Consultar as decisões de adequação da Comissão Europeia",
        "privacy.clientRetention": "Clientes que contratem serviços: as informações necessárias à execução de contratos e ao cumprimento de obrigações legais poderão ser conservadas por períodos diferentes, conforme a finalidade e a legislação aplicável. Não se aplica um prazo universal a documentos contratuais ou fiscais.",
        "privacy.accessText": "O acesso aos contatos é restrito a Lucas Boarini e à equipe envolvida no atendimento profissional, que inclui sua esposa. As plataformas utilizadas também processam as mensagens conforme seus serviços e condições aplicáveis.",
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
        contactWhatsAppDescription: "Converse diretamente comigo.",
        contactEmail: "E-mail",
        contactEmailDescription: "Envie sua mensagem.",
        contactLocation: "Dublin, Irlanda",
        contactLocationDescription: "Atendimento remoto para Irlanda, Brasil e outros países.",
        contactImageAlt: "Ambiente de trabalho com notebook, caderno e uma caneca sobre a mesa.",
        contactCtaTitle: "Prefere conversar primeiro sobre sua ideia?",
        contactCtaDescription: "Me conte um pouco do que você precisa. Será um prazer entender seu projeto.",
        contactCtaButton: "Vamos conversar",
        contactWhatsAppMessage: "Olá! Visitei seu portfólio e gostaria de conversar sobre um projeto.",

        // Footer
        footerDescription: "Desenvolvendo soluções digitais para pequenos negócios que querem crescer de forma simples e eficiente.",
        footerLocationDescription: "Atendimento remoto para o Brasil e outros países.",
        footerNavigation: "Navegação",
        footerContact: "Contato",
        footerRights: "Todos os direitos reservados.",
        footerBackToTop: "Voltar ao topo",
    },

    en: {

        // Consentimento opcional de métricas.
        "consent.title": "Your privacy matters",
        "consent.text": "We use optional analytics to understand visits and improve this website. You can accept or decline and change your choice at any time.",
        "consent.decline": "Decline",
        "consent.accept": "Accept",
        "consent.preferences": "Privacy preferences",
        "consent.storageError": "The requested choice could not be saved. Analytics remains blocked on this page. Check your browser storage settings before trying again.",
        "consent.revocationError": "Analytics has been blocked on this page, but the refusal could not be saved. Other pages or reloads may reuse the old permission. Clear this site’s data in your browser settings before continuing to browse.",
        // Política de Privacidade.
        "privacy.link": "Privacy Policy",
        "privacy.seoTitle": "Privacy Policy | Lucas Boarini",
        "privacy.seoDescription": "Information about contact enquiries, external services and privacy on Lucas Boarini’s portfolio, operated from Ireland.",
        "privacy.back": "Back to home",
        "privacy.backShort": "Home",
        "privacy.skip": "Skip to content",
        "privacy.intro": "This page explains how professional enquiries and the resources used by this portfolio relate to your personal data. The website is operated by Lucas Boarini from Ireland.",
        "privacy.updatedLabel": "Last updated:",
        "privacy.updatedDate": "22 October 2026",
        "privacy.transferNoticeTitle": "International processing of personal data",
        "privacy.transferNoticeText": "Hostinger has confirmed that the hosting server is in Brazil and backups are in the United States. International processing is described below, including the safeguards provided for in Hostinger’s DPA and information that has not yet been confirmed.",
        "privacy.controllerTitle": "1. Website operator",
        "privacy.controllerText": "Lucas Boarini is responsible for this personal digital services portfolio. For privacy questions or requests concerning your data, use the professional email address below.",
        "privacy.siteLabel": "Website:",
        "privacy.emailLabel": "Email:",
        "privacy.contactTitle": "2. Information you provide when contacting me",
        "privacy.contactText": "You may voluntarily contact me by email or WhatsApp. These conversations may include your name, email address, telephone number and information you share about a potential project. This website does not have a contact form.",
        "privacy.contactChoice": "It is your choice whether to start a conversation. Share only the information needed to explain your enquiry; do not send passwords, credentials or personal financial information in initial enquiries.",
        "privacy.purposeTitle": "3. Purposes and lawful bases",
        "privacy.purposeText": "Professional enquiries are used to respond to requests, discuss potential projects, prepare proposals and follow up on those conversations. The portfolio code does not implement automated marketing, visitor profiling or the sale of data.",
        "privacy.basisText": "Lawful bases are considered according to the purpose and the relationship with the visitor. Starting a conversation does not amount to consent for any use of personal data.",
        "privacy.servicesTitle": "4. External services and technical data",
        "privacy.fontsText": "Google Fonts: the Manrope font is loaded directly from Google’s servers. This creates external requests that may transmit technical data, such as your IP address and browser information. This version does not host the font locally.",
        "privacy.analyticsText": "Cloudflare Web Analytics, provided by Cloudflare, Inc., is used with consent to understand traffic and improve the portfolio’s performance. After acceptance, the script sends loading metrics and navigation information, such as the visited page and referring source, to the provider. External connections also expose technical data, including IP addresses and browser information. We do not deliberately send names, email addresses or contact messages to the tool.",
        "privacy.analyticsDetails": "Data for this service is processed by Cloudflare separately from Hostinger hosting and may involve international processing. The specific processing locations and internal retention periods for this configuration have not been confirmed. The provider’s documentation is not an individual verification of these flows and does not, by itself, establish a consent exemption or a completed legitimate interests assessment.",
        "privacy.analyticsLink": "About Cloudflare Web Analytics",
        "privacy.analyticsPrivacyLink": "Cloudflare Privacy Policy",
        "privacy.whatsappText": "WhatsApp: selecting a contact link takes you to the service with an editable initial message. No message is sent automatically. A WhatsApp link is not the same as installing a WhatsApp tracker on the portfolio; use of the service is subject to the provider’s own terms and privacy information.",
        "privacy.hostingText": "Hostinger provides the website hosting and contact@boarinilucas.com email service. Technical logs needed for the website’s operation and security are managed by the provider and may include IP addresses, timestamps, requests, and device and browser information.",
        "privacy.transfersText": "The portfolio is operated from Ireland. According to Hostinger, the hosting server is in Brazil and backups are in the United States. This involves international processing. These locations do not necessarily describe every processing location for email, Google Fonts, WhatsApp or other services and subprocessors.",
        "privacy.externalLinksText": "Project links and other external destinations lead to websites with their own functionality and privacy information. Review that information when using those services.",
        "privacy.cookiesTitle": "5. Cookies and similar technologies",
        "privacy.cookiesText": "The language is indicated in the URL, for example ?lang=en. To record the analytics preference, we use localStorage and the functional portfolio_analytics_consent cookie, shared between pages on this domain. Both store only accepted or declined, with no visitor identifiers or history. The cookie lasts up to one year; localStorage remains until changed or cleared. A refusal in either takes precedence; acceptance requires confirmation in both. Without valid confirmation, we ask for a new choice and do not load Analytics. Cloudflare states that Web Analytics uses no analytics cookies or fingerprinting; this does not mean that no personal information is processed in connections. Google Analytics and Google Tag Manager are not installed.",
        "privacy.cookiesHosting": "According to guidance received from Hostinger support, hosting alone does not normally add visitor tracking cookies. This does not establish that the published domain is cookie-free. Cloudflare Web Analytics loads only with confirmed explicit permission. You can accept, decline or withdraw permission through Privacy preferences in the footer. Accepting starts a new navigation by reloading, without sending retrospective metrics. Withdrawal blocks new transmissions to the Analytics endpoint before saving the refusal and reloading. If only one mechanism saves the refusal, it overrides the old permission. If neither can save it, the current page remains blocked and a warning explains that other navigations may reuse the old permission; in that case, clear site data before continuing. Persistence cannot be guaranteed if the browser prevents it. The guards cannot retrieve requests already transmitted or queued, or erase data sent during earlier permission.",
        "privacy.retentionTitle": "6. Retention and protection of data",
        "privacy.retentionText": "Enquiries that do not lead to an engagement: messages and personal data of prospective clients will be retained for up to 12 months after the last contact. Contacts will be reviewed manually at periodic intervals. After that period, the data should be deleted or anonymised, unless a legal obligation or another valid justification requires further retention. Deletion is not automated.",
        "privacy.securityText": "Two-factor authentication (2FA) is enabled for the professional email and Hostinger account. These measures do not guarantee absolute security.",
        "privacy.rightsTitle": "7. Your rights",
        "privacy.rightsText": "Under the GDPR and the conditions applicable to each situation, you may request access, rectification, erasure, restriction of processing and portability, and you may object to processing. Where processing relies on consent, you may withdraw it without affecting the lawfulness of processing carried out before withdrawal.",
        "privacy.requestsText": "Privacy-related requests may be sent to contact@boarinilucas.com. You may also lodge a complaint with Ireland’s Data Protection Commission (DPC) or the competent supervisory authority.",
        "privacy.dpcLink": "Ireland’s Data Protection Commission",
        "privacy.updatesTitle": "8. Updates to this policy",
        "privacy.updatesText": "This page may be updated when the portfolio’s functionality, services or processing practices change or are clarified. The revision date will be shown at the start of the document.",
        "privacy.footer": "Privacy and transparency for a personal portfolio.",

        "privacy.contactStorage": "Messages remain on the respective email and WhatsApp platforms. The portfolio does not have its own CRM or database for storing these conversations.",
        "privacy.basisContract": "Project enquiries and proposals requested by an individual who may engage the service: steps taken at the individual’s request before entering into a contract and, where services are engaged, performance of the contract under Article 6(1)(b) GDPR, to the extent necessary for those activities.",
        "privacy.basisLegal": "Documents and information needed to comply with applicable legal obligations: Article 6(1)(c) GDPR. This basis does not automatically apply to every message received.",
        "privacy.basisInterests": "Professional communications outside pre-contractual steps, contacts with business representatives and proportionate follow-up: the legitimate interest in responding to enquiries and managing professional relationships under Article 6(1)(f) GDPR, subject to necessity, proportionality and the individual’s rights and expectations.",
        "privacy.basisTechnical": "Operation, readable presentation and security of the portfolio: the legitimate interest in providing and protecting the website under Article 6(1)(f) GDPR, only where necessary and not overridden by visitors’ rights. This interest does not permit tracking or non-essential cookies without any required consent.",
        "privacy.logsText": "Access logs are available for viewing in Hostinger’s hPanel for up to seven days and can be downloaded manually. Hostinger’s total internal retention period for these records has not been confirmed; the seven-day availability in the panel is not a confirmed deletion deadline. Lucas Boarini does not routinely download or archive these logs and does not maintain a separate database of visitor logs.",
        "privacy.safeguardsText": "Brazil appears on the European Commission’s list of countries with an adequacy decision, within that decision’s scope. Hostinger’s DPA, revised on 29 September 2026, provides for European Union standard contractual clauses, modules 2 and 3, where applicable. This contractual provision does not constitute individual verification of the mechanism used by each subprocessor. Adequacy for one destination does not automatically cover other flows.",
        "privacy.hostingerDpaLink": "Read Hostinger’s DPA",
        "privacy.adequacyLink": "Read the European Commission’s adequacy decisions",
        "privacy.clientRetention": "Clients who engage services: information needed to perform contracts and meet legal obligations may be retained for different periods according to the purpose and applicable law. There is no universal retention period for contractual or tax documents.",
        "privacy.accessText": "Access to enquiries is restricted to Lucas Boarini and the team handling professional enquiries, including his wife. The platforms used also process messages under their services and applicable terms.",
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
        contactWhatsAppDescription: "Get in touch directly.",
        contactEmail: "Email",
        contactEmailDescription: "Send me a message.",
        contactLocation: "Dublin, Ireland",
        contactLocationDescription: "Working remotely with clients in Ireland, Brazil and beyond.",
        contactImageAlt: "Workspace with a laptop, notebook and mug on a desk.",
        contactCtaTitle: "Would you like to talk through your idea first?",
        contactCtaDescription: "Tell me a little about what you need. I’d be happy to learn more about your project.",
        contactCtaButton: "Let’s talk",
        contactWhatsAppMessage: "Hello! I visited your portfolio and would like to discuss a project.",

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
        const translatedText = translations[language]?.[key];
        // Uma versão incompleta do dicionário nunca apaga o conteúdo de fallback.
        if (typeof translatedText !== "string" || !translatedText.trim()) return;

        if (element.hasAttribute("data-i18n-text")) {
            // Traduz o texto inicial sem substituir o destaque interno do título.
            const textNode = Array.from(element.childNodes).find(node =>
                node.nodeType === Node.TEXT_NODE && node.textContent.trim()
            );

            if (textNode) {
                textNode.textContent = translatedText + " ";
            }
        } else {
            element.textContent = translatedText;
        }

    });

    // Atributos descritivos, acessíveis e metadados usam o mesmo dicionário dos textos.
    ["alt", "aria-label", "title", "content"].forEach(attribute => {
        const binding = `data-i18n-${attribute}`;
        document.querySelectorAll(`[${binding}]`).forEach(element => {
            const key = element.getAttribute(binding);
            const translatedAttribute = translations[language]?.[key];
            if (typeof translatedAttribute === "string") {
                element.setAttribute(attribute, translatedAttribute);
            }
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

    // Apenas os links marcados transportam o idioma entre as páginas.
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
