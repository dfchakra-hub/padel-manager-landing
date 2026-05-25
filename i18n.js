(function () {
  const STORAGE_KEY = "pm-landing-lang";

  const T = {
    it: {
      meta: {
        title: "Padel Manager · Sistema operativo per circoli padel",
        description:
          "Padel Manager unifica operatività, competizioni, calendario, giocatori, pagamenti e AI in un unico sistema operativo per circoli padel.",
        ogTitle: "Padel Manager · Sistema operativo per circoli padel",
        ogDescription:
          "Padel Manager unifica operatività, competizioni, calendario, giocatori, pagamenti e AI in un unico sistema operativo per circoli padel.",
      },
      brand: { subtitle: "Sistema operativo per circoli" },
      nav: {
        problem: "Problema",
        solution: "Soluzione",
        intelligence: "Intelligenza",
        platform: "Piattaforma",
        status: "Stato",
        contact: "Contatti",
      },
      hero: {
        pill: "Infrastruttura competitiva per circoli padel",
        title: "Il sistema operativo per i circoli padel moderni.",
        lead:
          "Padel Manager unifica operatività del circolo, competizioni amatoriali, calendario, giocatori, pagamenti e intelligenza AI in un’unica piattaforma.",
        ctaPrimary: "Parla di un pilota",
        ctaSecondary: "Esplora la piattaforma",
        badge1: "MVP avanzato",
        badge2: "Fase pilota",
        badge3: "Nato da operatività reale in circolo",
        aside:
          "Non è solo prenotazione campi o tabellone: è il sistema operativo competitivo del circolo.",
      },
      problem: {
        eyebrow: "Il problema",
        title: "Il circolo lavora ancora su strumenti frammentati.",
        lead:
          "Competizioni, iscrizioni, campi, pagamenti e comunicazioni vivono su canali diversi. Ogni cambio richiede coordinamento manuale.",
        b1: "WhatsApp come segreteria operativa",
        b2: "Excel come database",
        b3: "App scollegate",
        b4: "Nessuna gestione live",
        b5: "Continuo coordinamento manuale",
      },
      solution: {
        eyebrow: "La soluzione",
        title: "Dal caos operativo a una regia live del circolo.",
        lead:
          "Calendario, campi, attività, competizioni e notifiche in una sola superficie operativa.",
        c1: "Calendario unico",
        c2: "Competizioni sincronizzate",
        c3: "Operatività assistita dall’AI",
      },
      intelligence: {
        eyebrow: "Differenziante",
        title: "Il sistema capisce chi dovrebbe giocare insieme.",
        lead:
          "Disponibilità, livello, preferenze e comportamento diventano segnali utili per suggerire partite, lezioni, partner torneo e riempimento slot.",
        note:
          "La schermata mostra il motore di compatibilità: input giocatore, segnali e output operativi per il circolo.",
        b1: "Compatibilità per partite",
        b2: "Suggerimenti per lezioni e gruppi",
        b3: "Partner torneo",
        b4: "Riempimento slot",
        b5: "Contesto giocatore condiviso",
      },
      domains: {
        eyebrow: "Piattaforma",
        title: "Un solo OS, nove domini operativi.",
        lead: "Moduli integrati per la gestione quotidiana e competitiva del circolo.",
        m1: "Circolo",
        m2: "Calendario",
        m3: "Competizioni",
        m4: "Partite",
        m5: "Lezioni",
        m6: "Giocatori",
        m7: "Pagamenti",
        m8: "Loyalty",
        m9: "AI",
      },
      ai: {
        eyebrow: "AI operativa",
        title: "AI operativa, non solo chatbot.",
        lead:
          "L’assistente lavora nel contesto del circolo: controlla conflitti, ricalcola pianificazioni, prepara notifiche e protegge il flusso competitivo.",
        d1: "Competizioni",
        d2: "Pianificazione",
        d3: "Calendario",
        d4: "Giocatori",
        d5: "Notifiche",
      },
      vision: {
        eyebrow: "Visione",
        title: "Dal software di circolo a un ecosistema competitivo connesso.",
        lead:
          "Padel Manager nasce per diventare il livello operativo e competitivo dei circoli padel moderni.",
      },
      mobile: {
        eyebrow: "Esperienza mobile",
        title: "Tutto ciò che serve al circolo, in una sola esperienza.",
        lead:
          "Competizioni, campi, pagamenti, ranking, academy e AI in una superficie mobile coerente.",
      },
      business: {
        eyebrow: "Modello commerciale",
        title: "Percorsi B2B per circoli e partner.",
        b1: "SaaS mensile per operatività di circolo",
        b2: "Licenza enterprise per gruppi e federazioni",
        b3: "Licenza evento per tornei e circuiti",
        b4: "Layer AI e analytics premium nel tempo",
      },
      why: {
        eyebrow: "Perché ora",
        title: "Il padel cresce più in fretta dell’infrastruttura dei circoli.",
        b1: "Più campi → più complessità operativa",
        b2: "Competizioni amatoriali più frequenti ed esigenti",
        b3: "Serve software specialistico, non export tabellone da prenotazione",
      },
      traction: {
        eyebrow: "Stato attuale",
        title: "MVP avanzato — preparazione pilota.",
        lead:
          "Infrastruttura core funzionante. Focus su validazione pilota — senza claim di clienti paganti o scala.",
        step1: "MVP avanzato",
        step1d: "Superficie operativa e moduli core integrati",
        step2: "Fase pilota",
        step2d: "Conversazioni con circoli selezionati",
        step3: "Prossimo",
        step3d: "Miglioramenti da feedback operativo reale",
        pilot: "Conversazioni pilota in corso",
        p1: "Monopoli Padel Club",
        p2: "BS Padel",
        p3: "Lion’s Padel",
      },
      founder: {
        eyebrow: "Founder",
        title: "Costruito dentro circoli reali.",
        p1: "Daniele Francesco Cavallo — avvocato, ex imprenditore e consulente (HR e gestione operativa), con direzione diretta di circoli padel.",
        p2: "Da quel lavoro: metodologia BPM e Padel Manager come infrastruttura competitiva.",
        linkedin: "Profilo LinkedIn",
      },
      contact: {
        eyebrow: "Prossimo passo",
        title: "Parliamo di pilota, partnership o investimento in fase iniziale.",
        lead:
          "Cerchiamo circoli per validazione operativa, partner strategici e investitori che capiscono SaaS sport & venue.",
        audience1: "Circoli pilota",
        audience2: "Partner strategici",
        audience3: "Investitori early",
        ctaPrimary: "Scrivi a bpm@padelmanageros.com",
        ctaSecondary: "Vedi stato progetto",
        emailLabel: "Email",
        phoneLabel: "Telefono",
        linkedinLabel: "LinkedIn",
        note: "Risposta diretta dal founder — nessun form, nessun claim di scala.",
      },
      footer: {
        tagline: "Sistema operativo per circoli padel moderni.",
        rights: "© Padel Manager · MVP avanzato · fase pilota",
      },
    },
    en: {
      meta: {
        title: "Padel Manager · Operating system for padel clubs",
        description:
          "Padel Manager unifies club operations, competitions, calendar, players, payments and AI in one operating system for padel clubs.",
        ogTitle: "Padel Manager · Operating system for padel clubs",
        ogDescription:
          "Padel Manager unifies club operations, competitions, calendar, players, payments and AI in one operating system for padel clubs.",
      },
      brand: { subtitle: "Club operating system" },
      nav: {
        problem: "Problem",
        solution: "Solution",
        intelligence: "Intelligence",
        platform: "Platform",
        status: "Status",
        contact: "Contact",
      },
      hero: {
        pill: "Competitive infrastructure for padel clubs",
        title: "The operating system for modern padel clubs.",
        lead:
          "Padel Manager unifies club operations, amateur competitions, calendar, players, payments and AI intelligence in one platform.",
        ctaPrimary: "Discuss a pilot",
        ctaSecondary: "Explore the platform",
        badge1: "Advanced MVP",
        badge2: "Pilot phase",
        badge3: "Built from real club operations",
        aside:
          "Not just court booking or brackets: the club’s competitive operating system.",
      },
      problem: {
        eyebrow: "The problem",
        title: "Clubs still run on fragmented tools.",
        lead:
          "Competitions, registrations, courts, payments and comms live on different channels. Every change means manual coordination.",
        b1: "WhatsApp as operational inbox",
        b2: "Excel as database",
        b3: "Disconnected apps",
        b4: "No live management layer",
        b5: "Constant manual coordination",
      },
      solution: {
        eyebrow: "The solution",
        title: "From operational chaos to live club orchestration.",
        lead:
          "Calendar, courts, activities, competitions and notifications on one operational surface.",
        c1: "Single calendar",
        c2: "Synchronised competitions",
        c3: "AI-assisted operations",
      },
      intelligence: {
        eyebrow: "Differentiator",
        title: "The system understands who should play together.",
        lead:
          "Availability, level, preferences and behaviour become signals for matches, lessons, tournament partners and slot fill.",
        note:
          "The screen shows the compatibility engine: player inputs, signals and operational outputs for the club.",
        b1: "Match compatibility",
        b2: "Lesson and group suggestions",
        b3: "Tournament partners",
        b4: "Slot fill",
        b5: "Shared player context",
      },
      domains: {
        eyebrow: "Platform",
        title: "One OS, nine operational domains.",
        lead: "Integrated modules for daily and competitive club management.",
        m1: "Club",
        m2: "Calendar",
        m3: "Competitions",
        m4: "Matches",
        m5: "Lessons",
        m6: "Players",
        m7: "Payments",
        m8: "Loyalty",
        m9: "AI",
      },
      ai: {
        eyebrow: "Operational AI",
        title: "Operational AI, not just a chatbot.",
        lead:
          "The assistant works in club context: checks conflicts, replans schedules, prepares notifications and protects the competitive flow.",
        d1: "Competitions",
        d2: "Planning",
        d3: "Calendar",
        d4: "Players",
        d5: "Notifications",
      },
      vision: {
        eyebrow: "Vision",
        title: "From club software to a connected competitive ecosystem.",
        lead:
          "Padel Manager is built to become the operational and competitive layer for modern padel clubs.",
      },
      mobile: {
        eyebrow: "Mobile experience",
        title: "Everything the club needs, in one experience.",
        lead:
          "Competitions, courts, payments, rankings, academy and AI in one coherent mobile surface.",
      },
      business: {
        eyebrow: "Commercial model",
        title: "B2B paths for clubs and partners.",
        b1: "Monthly SaaS for club operations",
        b2: "Enterprise licensing for groups and federations",
        b3: "Event licensing for tournaments and circuits",
        b4: "Premium AI and analytics layers over time",
      },
      why: {
        eyebrow: "Why now",
        title: "Padel grows faster than club infrastructure.",
        b1: "More courts → more operational complexity",
        b2: "Amateur competitions more frequent and demanding",
        b3: "Clubs need specialised software, not bracket export from booking",
      },
      traction: {
        eyebrow: "Current status",
        title: "Advanced MVP — pilot preparation.",
        lead:
          "Core infrastructure is functional. Focus on pilot validation — no paying-customer or scale claims.",
        step1: "Advanced MVP",
        step1d: "Operational surface and integrated core modules",
        step2: "Pilot phase",
        step2d: "Conversations with selected clubs",
        step3: "Next",
        step3d: "Improvements from real operational feedback",
        pilot: "Pilot conversations in progress",
        p1: "Monopoli Padel Club",
        p2: "BS Padel",
        p3: "Lion’s Padel",
      },
      founder: {
        eyebrow: "Founder",
        title: "Built inside real clubs.",
        p1: "Daniele Francesco Cavallo — lawyer, former entrepreneur and consultant (HR and operations), with direct padel club leadership.",
        p2: "From that work: BPM methodology and Padel Manager as competitive infrastructure.",
        linkedin: "LinkedIn profile",
      },
      contact: {
        eyebrow: "Next step",
        title: "Let’s talk pilots, partnerships or early-stage investment.",
        lead:
          "We are looking for clubs for operational validation, strategic partners and investors who understand sport & venue SaaS.",
        audience1: "Pilot clubs",
        audience2: "Strategic partners",
        audience3: "Early investors",
        ctaPrimary: "Email bpm@padelmanageros.com",
        ctaSecondary: "View project status",
        emailLabel: "Email",
        phoneLabel: "Phone",
        linkedinLabel: "LinkedIn",
        note: "Direct reply from the founder — no form, no scale claims.",
      },
      footer: {
        tagline: "Operating system for modern padel clubs.",
        rights: "© Padel Manager · Advanced MVP · pilot phase",
      },
    },
  };

  function get(obj, path) {
    return path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : null), obj);
  }

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "it") return saved;
    return "it";
  }

  function applyLang(lang) {
    const pack = T[lang] || T.it;
    document.documentElement.lang = lang;
    document.title = pack.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pack.meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pack.meta.ogTitle || pack.meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pack.meta.ogDescription || pack.meta.description);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = get(pack, el.getAttribute("data-i18n"));
      if (v != null) el.textContent = v;
    });

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
    });
    applyLang(detectLang());
  });
})();
