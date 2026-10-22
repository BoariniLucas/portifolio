// Preferência compartilhada entre as páginas; nenhuma identificação de visitante.
(() => {
    if (window.__portfolioPrivacyConsentInitialized) return;
    window.__portfolioPrivacyConsentInitialized = true;
    const storageKey = "portfolio.analytics-consent.v1";
    const cookieKey = "portfolio_analytics_consent";
    const beaconUrl = "https://static.cloudflareinsights.com/beacon.min.js";
    let consent = null;
    let initialized = false;
    let returnFocus = null;
    const pendingRequests = new Set();

    function readLocalPreference() {
        try {
            return localStorage.getItem(storageKey);
        } catch {
            return null;
        }
    }

    function readCookiePreference() {
        try {
            return document.cookie.split(";").map(item => item.trim())
                .find(item => item.startsWith(cookieKey + "="))?.slice(cookieKey.length + 1) || null;
        } catch {
            return null;
        }
    }

    function readPreference() {
        const local = readLocalPreference();
        const cookie = readCookiePreference();
        // Uma recusa confirmada prevalece, inclusive sobre uma aceitação antiga.
        if (local === "declined" || cookie === "declined") return "declined";
        return local === "accepted" && cookie === "accepted" ? "accepted" : null;
    }

    function savePreference(value) {
        // Operações independentes: a falha de uma não impede a tentativa da outra.
        try { localStorage.setItem(storageKey, value); } catch { /* Verificar abaixo. */ }
        try {
            const secure = location.protocol === "https:" ? "; Secure" : "";
            document.cookie = `${cookieKey}=${value}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
        } catch { /* Verificar abaixo. */ }
        // Nunca considerar uma escrita bem-sucedida sem reler o resultado.
        return readPreference() === value;
    }

    function isAnalyticsRequest(value) {
        try {
            const url = new URL(value, location.href);
            // Endpoint da instalação MANUAL. Outros hosts e caminhos não são interceptados.
            return url.origin === "https://cloudflareinsights.com" &&
                url.pathname.replace(/\/$/, "") === "/cdn-cgi/rum";
        } catch {
            return false;
        }
    }

    function allowed() {
        return consent === "accepted" && readPreference() === "accepted";
    }

    function installNetworkGuards() {
        // Instalados somente quando o beacon será carregado, antes de sua execução.
        // Protegem novos envios, inclusive no encerramento da página. Não recuperam
        // dados já transmitidos ou sendBeacon já enfileirado pelo navegador.
        const sendBeacon = navigator.sendBeacon?.bind(navigator);
        if (sendBeacon) navigator.sendBeacon = (url, data) => {
            if (isAnalyticsRequest(url) && !allowed()) return false;
            return sendBeacon(url, data);
        };
        const originalFetch = window.fetch.bind(window);
        window.fetch = (input, options) => {
            if (!isAnalyticsRequest(typeof input === "string" || input instanceof URL ? input : input.url)) {
                return originalFetch(input, options);
            }
            if (!allowed()) return Promise.reject(new DOMException("Analytics consent withdrawn", "AbortError"));
            const controller = new AbortController();
            const signal = options?.signal || input?.signal;
            const abort = () => controller.abort();
            if (signal?.aborted) abort();
            else signal?.addEventListener("abort", abort, { once: true });
            pendingRequests.add(controller);
            return originalFetch(input, { ...options, signal: controller.signal }).finally(() => {
                pendingRequests.delete(controller);
                signal?.removeEventListener("abort", abort);
            });
        };
        const open = XMLHttpRequest.prototype.open;
        const send = XMLHttpRequest.prototype.send;
        const analyticsRequests = new WeakSet();
        XMLHttpRequest.prototype.open = function(method, url, ...options) {
            analyticsRequests.delete(this);
            if (isAnalyticsRequest(url)) analyticsRequests.add(this);
            return open.call(this, method, url, ...options);
        };
        XMLHttpRequest.prototype.send = function(...args) {
            if (analyticsRequests.has(this)) {
                if (!allowed()) {
                    this.abort();
                    return;
                }
                pendingRequests.add(this);
                this.addEventListener("loadend", () => pendingRequests.delete(this), { once: true });
            }
            return send.apply(this, args);
        };
    }

    // Conteúdo inicial legível mesmo se o dicionário estiver lento ou indisponível.
    // Inglês e alternância de idioma continuam exclusivamente em translations.js.
    const fallbackText = {
        "consent.title": "Sua privacidade importa",
        "consent.text": "Utilizamos métricas opcionais para entender as visitas e melhorar este site. Você pode aceitar ou recusar e alterar sua escolha a qualquer momento.",
        "consent.decline": "Recusar",
        "consent.accept": "Aceitar",
        "consent.preferences": "Preferências de privacidade",
        "privacy.link": "Política de Privacidade",
        "consent.storageError": "Não foi possível salvar a escolha solicitada. As métricas permanecem bloqueadas nesta página. Verifique o armazenamento do navegador antes de tentar novamente.",
        "consent.revocationError": "As métricas foram bloqueadas nesta página, mas não foi possível salvar a recusa. Outras páginas ou recarregamentos podem reutilizar a autorização antiga. Limpe os dados deste site nas configurações do navegador antes de continuar a navegação."
    };

    function translateConsent() {
        if (typeof changeLanguage !== "function") return;
        try {
            changeLanguage(document.documentElement.lang === "en-IE" ? "en" : "pt");
        } catch (error) {
            // A indisponibilidade da tradução não impede escolher ou revogar consentimento.
            console.warn("Privacy consent: translation unavailable; keeping fallback text.", error);
        }
    }

    function element(tag, className, key) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (key) {
            node.dataset.i18n = key;
            node.textContent = fallbackText[key] || "";
        }
        return node;
    }
    const panel = element("section", "privacy-consent");
    panel.hidden = true;
    panel.id = "privacy-consent";
    panel.setAttribute("aria-labelledby", "privacy-consent-title");
    const copy = element("div", "privacy-consent-copy");
    const title = element("h2", "", "consent.title");
    title.id = "privacy-consent-title";
    const text = element("p", "", "consent.text");
    const policy = element("a", "privacy-consent-policy", "privacy.link");
    policy.href = new URL("../privacy-policy.html", document.currentScript.src).href;
    policy.setAttribute("data-language-link", "");
    const status = element("p", "privacy-consent-status", "consent.storageError");
    status.hidden = true;
    status.setAttribute("role", "status");
    copy.append(title, text, policy, status);
    const actions = element("div", "privacy-consent-actions");
    const decline = element("button", "privacy-consent-choice", "consent.decline");
    const accept = element("button", "privacy-consent-choice", "consent.accept");
    decline.type = accept.type = "button";
    actions.append(decline, accept);
    panel.append(copy, actions);
    document.body.append(panel);
    const preferences = element("button", "footer-privacy-link privacy-preferences", "consent.preferences");
    preferences.type = "button";
    preferences.setAttribute("aria-controls", panel.id);
    preferences.setAttribute("aria-expanded", "false");
    document.querySelector(".footer-privacy-link").after(preferences);

    function showPanel(show, focus = false) {
        panel.hidden = !show;
        preferences.setAttribute("aria-expanded", String(show));
        if (show && focus) {
            returnFocus = document.activeElement;
            decline.focus({ preventScroll: true });
        } else if (!show && panel.contains(document.activeElement)) {
            // Só devolver foco ao acionador real. A primeira escolha não vai ao rodapé.
            if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
            else document.activeElement.blur();
        }
        if (!show) returnFocus = null;
    }

    function showStorageError(key) {
        status.dataset.i18n = key;
        status.textContent = fallbackText[key];
        translateConsent();
        status.hidden = false;
    }

    function stopAnalytics() {
        consent = "declined";
        for (const request of pendingRequests) request.abort();
        pendingRequests.clear();
    }

    preferences.addEventListener("click", () => showPanel(panel.hidden, true));
    panel.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            event.preventDefault();
            showPanel(false);
        }
    });
    accept.addEventListener("click", () => {
        if (allowed()) {
            showPanel(false);
            return;
        }
        // Reiniciar cria uma nova Navigation Timing, sem métricas pré-consentimento.
        if (savePreference("accepted")) location.reload();
        else {
            stopAnalytics();
            savePreference("declined");
            showStorageError("consent.storageError");
        }
    });
    decline.addEventListener("click", () => {
        const wasInitialized = initialized;
        stopAnalytics();
        const saved = savePreference("declined");
        if (wasInitialized && saved) location.reload();
        else if (!saved) {
            // Sem persistência confiável, manter esta página bloqueada, sem reiniciar.
            // Nenhum mecanismo confirmou a recusa: não recarregar nem alegar persistência.
            showStorageError("consent.revocationError");
        } else showPanel(false);
    });

    window.addEventListener("storage", event => {
        if (event.key !== storageKey && event.key !== null) return;
        if (readPreference() !== "accepted") {
            stopAnalytics();
            if (initialized) location.reload();
            else showPanel(readPreference() === null);
        }
        // Aceitar em outra aba não autoriza métricas retroativas nesta página.
    });
    window.addEventListener("pageshow", event => {
        if (event.persisted && (initialized || readPreference() === "accepted")) {
            stopAnalytics();
            location.reload();
        }
    });

    translateConsent();
    consent = readPreference();
    showPanel(consent === null);
    if (allowed() && !initialized) {
        initialized = true;
        installNetworkGuards();
        const script = document.createElement("script");
        script.type = "module";
        script.src = beaconUrl;
        script.dataset.cfBeacon = '{"token": "ab03e95ea92a49fb9d4af83f80ad5b0b"}';
        document.body.append(script);
    }
})();
