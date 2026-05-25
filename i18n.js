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
      brand: { name: "Padel Manager", subtitle: "Sistema operativo per circoli" },
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
        eyebrow: "Intelligenza sui giocatori",
        title: "Il sistema capisce chi dovrebbe giocare insieme.",
        lead:
          "Disponibilità, livello, preferenze e comportamento diventano segnali utili per suggerire partite, lezioni, partner torneo e riempimento slot.",
        note:
          "La schermata mostra il motore di compatibilità: input giocatore, segnali e output per il circolo.",
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
        eyebrow: "Esperienza reale sul campo",
        title: "Nato dentro la gestione quotidiana dei circoli.",
        lead:
          "Padel Manager non nasce da un pitch deck o da un’idea teorica, ma da anni di esperienza diretta nel mondo del padel: gestione operativa di circoli, organizzazione competizioni, attività in campo e coordinamento quotidiano di giocatori, staff e calendario.",
        p1:
          "L’esperienza maturata tra direzione di club, attività sportiva e sviluppo di metodologie organizzative ha portato alla creazione del modello BPM (Business Padel Management): una visione operativa pensata specificamente per le esigenze reali dei centri padel moderni.",
        p2:
          "Da questa esperienza nasce Padel Manager: un sistema operativo competitivo progettato per semplificare operatività, competizioni, pianificazione e relazione con i giocatori in un’unica piattaforma.",
        b1: "5+ anni nel settore padel",
        b2: "Direzione operativa club",
        b3: "Metodologia BPM",
        b4: "Esperienza reale sul campo",
        linkedin: "Profilo professionale",
      },
      contact: {
        eyebrow: "Prossimo passo",
        title: "Parliamo di pilota, partnership o investimento in fase iniziale.",
        lead:
          "Cerchiamo circoli per validazione operativa, partner strategici e investitori che capiscono SaaS sport & venue.",
        audience1: "Circoli pilota",
        audience2: "Partner strategici",
        audience3: "Investitori in fase iniziale",
        ctaPrimary: "Scrivi a bpm@padelmanageros.com",
        ctaSecondary: "Vedi stato progetto",
        emailLabel: "Email",
        phoneLabel: "Telefono",
        linkedinLabel: "LinkedIn",
        note: "Risposta diretta, senza form e senza affermazioni non validate.",
      },
      alt: {
        hero: "Dashboard operativa Padel Manager",
        problem: "Strumenti frammentati nella gestione di un circolo padel",
        solution: "Regia live del circolo con calendario e attività",
        intelligence: "Motore di compatibilità giocatori",
        domains: "Nove domini operativi di Padel Manager",
        ai: "Assistente AI operativo per competizioni",
        runtime: "Gestione live delle competizioni",
        vision: "Ecosistema competitivo connesso",
        mobile: "Esperienza mobile del circolo",
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
      brand: { name: "Padel Manager", subtitle: "Club operating system" },
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
        eyebrow: "Real field experience",
        title: "Born inside day-to-day club management.",
        lead:
          "Padel Manager was not born from a pitch deck or a theoretical idea, but from years of direct experience in padel: club operations, competition organisation, on-court activity and daily coordination of players, staff and calendar.",
        p1:
          "Experience across club leadership, sports activity and organisational methodology development led to the BPM model (Business Padel Management): an operational vision built specifically for modern padel centres.",
        p2:
          "From that experience comes Padel Manager: a competitive operating system designed to simplify operations, competitions, planning and player relationships in one platform.",
        b1: "5+ years in padel",
        b2: "Club operational leadership",
        b3: "BPM methodology",
        b4: "Real field experience",
        linkedin: "Professional profile",
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
        note: "Direct reply, no forms and no unvalidated scale claims.",
      },
      alt: {
        hero: "Padel Manager operational dashboard",
        problem: "Fragmented tools in padel club management",
        solution: "Live club orchestration with calendar and activities",
        intelligence: "Player compatibility engine",
        domains: "Nine Padel Manager operational domains",
        ai: "Operational AI assistant for competitions",
        runtime: "Live competition management",
        vision: "Connected competitive ecosystem",
        mobile: "Club mobile experience",
      },
      footer: {
        tagline: "Operating system for modern padel clubs.",
        rights: "© Padel Manager · Advanced MVP · pilot phase",
      },
    },
    es: {
      meta: {
        title: "Padel Manager · Sistema operativo para clubes de pádel",
        description:
          "Padel Manager unifica operativa del club, competiciones, calendario, jugadores, pagos e IA en un único sistema operativo para clubes de pádel.",
        ogTitle: "Padel Manager · Sistema operativo para clubes de pádel",
        ogDescription:
          "Padel Manager unifica operativa del club, competiciones, calendario, jugadores, pagos e IA en un único sistema operativo para clubes de pádel.",
      },
      brand: { name: "Padel Manager", subtitle: "Sistema operativo para clubes" },
      nav: {
        problem: "Problema",
        solution: "Solución",
        intelligence: "Inteligencia",
        platform: "Plataforma",
        status: "Estado",
        contact: "Contacto",
      },
      hero: {
        pill: "Infraestructura competitiva para clubes de pádel",
        title: "El sistema operativo para clubes de pádel modernos.",
        lead:
          "Padel Manager unifica la operativa del club, competiciones amateur, calendario, jugadores, pagos e inteligencia IA en una sola plataforma.",
        ctaPrimary: "Hablar de un piloto",
        ctaSecondary: "Explorar la plataforma",
        badge1: "MVP avanzado",
        badge2: "Fase piloto",
        badge3: "Nacido de operativa real en club",
        aside:
          "No es solo reserva de pistas o cuadro: es el sistema operativo competitivo del club.",
      },
      problem: {
        eyebrow: "El problema",
        title: "El club sigue trabajando con herramientas fragmentadas.",
        lead:
          "Competiciones, inscripciones, pistas, pagos y comunicaciones viven en canales distintos. Cada cambio exige coordinación manual.",
        b1: "WhatsApp como secretaría operativa",
        b2: "Excel como base de datos",
        b3: "Apps desconectadas",
        b4: "Sin gestión en vivo",
        b5: "Coordinación manual constante",
      },
      solution: {
        eyebrow: "La solución",
        title: "Del caos operativo a una dirección en vivo del club.",
        lead:
          "Calendario, pistas, actividades, competiciones y notificaciones en una sola superficie operativa.",
        c1: "Calendario único",
        c2: "Competiciones sincronizadas",
        c3: "Operativa asistida por IA",
      },
      intelligence: {
        eyebrow: "Inteligencia sobre jugadores",
        title: "El sistema entiende quién debería jugar junto.",
        lead:
          "Disponibilidad, nivel, preferencias y comportamiento se convierten en señales útiles para sugerir partidos, clases, parejas de torneo y ocupación de slots.",
        note:
          "La pantalla muestra el motor de compatibilidad: inputs del jugador, señales y outputs para el club.",
        b1: "Compatibilidad para partidos",
        b2: "Sugerencias para clases y grupos",
        b3: "Parejas de torneo",
        b4: "Ocupación de slots",
        b5: "Contexto de jugador compartido",
      },
      domains: {
        eyebrow: "Plataforma",
        title: "Un solo OS, nueve dominios operativos.",
        lead: "Módulos integrados para la gestión diaria y competitiva del club.",
        m1: "Club",
        m2: "Calendario",
        m3: "Competiciones",
        m4: "Partidos",
        m5: "Clases",
        m6: "Jugadores",
        m7: "Pagos",
        m8: "Loyalty",
        m9: "IA",
      },
      ai: {
        eyebrow: "IA operativa",
        title: "IA operativa, no solo chatbot.",
        lead:
          "El asistente trabaja en el contexto del club: detecta conflictos, replanifica, prepara notificaciones y protege el flujo competitivo.",
        d1: "Competiciones",
        d2: "Planificación",
        d3: "Calendario",
        d4: "Jugadores",
        d5: "Notificaciones",
      },
      vision: {
        eyebrow: "Visión",
        title: "Del software de club a un ecosistema competitivo conectado.",
        lead:
          "Padel Manager nace para convertirse en la capa operativa y competitiva de los clubes de pádel modernos.",
      },
      mobile: {
        eyebrow: "Experiencia móvil",
        title: "Todo lo que el club necesita, en una sola experiencia.",
        lead:
          "Competiciones, pistas, pagos, ranking, academy e IA en una superficie móvil coherente.",
      },
      business: {
        eyebrow: "Modelo comercial",
        title: "Recorridos B2B para clubes y partners.",
        b1: "SaaS mensual para operativa de club",
        b2: "Licencia enterprise para grupos y federaciones",
        b3: "Licencia evento para torneos y circuitos",
        b4: "Capas premium de IA y analytics en el tiempo",
      },
      why: {
        eyebrow: "Por qué ahora",
        title: "El pádel crece más rápido que la infraestructura de los clubes.",
        b1: "Más pistas → más complejidad operativa",
        b2: "Competiciones amateur más frecuentes y exigentes",
        b3: "Hace falta software especializado, no exportar cuadros desde reservas",
      },
      traction: {
        eyebrow: "Estado actual",
        title: "MVP avanzado — preparación piloto.",
        lead:
          "Infraestructura core funcional. Foco en validación piloto — sin claims de clientes de pago ni escala.",
        step1: "MVP avanzado",
        step1d: "Superficie operativa y módulos core integrados",
        step2: "Fase piloto",
        step2d: "Conversaciones con clubes seleccionados",
        step3: "Próximo",
        step3d: "Mejoras a partir de feedback operativo real",
        pilot: "Conversaciones piloto en curso",
        p1: "Monopoli Padel Club",
        p2: "BS Padel",
        p3: "Lion’s Padel",
      },
      founder: {
        eyebrow: "Experiencia real sobre el terreno",
        title: "Nacido dentro de la gestión diaria de clubes.",
        lead:
          "Padel Manager no nace de un pitch deck ni de una idea teórica, sino de años de experiencia directa en el mundo del pádel: gestión operativa de clubes, organización de competiciones, actividad en pista y coordinación diaria de jugadores, staff y calendario.",
        p1:
          "La experiencia acumulada entre dirección de club, actividad deportiva y desarrollo de metodologías organizativas llevó al modelo BPM (Business Padel Management): una visión operativa pensada específicamente para las necesidades reales de los centros de pádel modernos.",
        p2:
          "De esa experiencia nace Padel Manager: un sistema operativo competitivo diseñado para simplificar operativa, competiciones, planificación y relación con jugadores en una sola plataforma.",
        b1: "5+ años en el sector pádel",
        b2: "Dirección operativa de club",
        b3: "Metodología BPM",
        b4: "Experiencia real sobre el terreno",
        linkedin: "Perfil profesional",
      },
      contact: {
        eyebrow: "Próximo paso",
        title: "Hablemos de piloto, partnership o inversión en fase inicial.",
        lead:
          "Buscamos clubes para validación operativa, partners estratégicos e inversores que entiendan SaaS sport & venue.",
        audience1: "Clubes piloto",
        audience2: "Partners estratégicos",
        audience3: "Inversores en fase inicial",
        ctaPrimary: "Escribe a bpm@padelmanageros.com",
        ctaSecondary: "Ver estado del proyecto",
        emailLabel: "Email",
        phoneLabel: "Teléfono",
        linkedinLabel: "LinkedIn",
        note: "Respuesta directa, sin formularios ni afirmaciones no validadas.",
      },
      alt: {
        hero: "Dashboard operativo de Padel Manager",
        problem: "Herramientas fragmentadas en la gestión de un club de pádel",
        solution: "Dirección en vivo del club con calendario y actividades",
        intelligence: "Motor de compatibilidad de jugadores",
        domains: "Nueve dominios operativos de Padel Manager",
        ai: "Asistente IA operativo para competiciones",
        runtime: "Gestión en vivo de competiciones",
        vision: "Ecosistema competitivo conectado",
        mobile: "Experiencia móvil del club",
      },
      footer: {
        tagline: "Sistema operativo para clubes de pádel modernos.",
        rights: "© Padel Manager · MVP avanzado · fase piloto",
      },
    },
  };

  function get(obj, path) {
    return path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : null), obj);
  }

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "it" || saved === "es") return saved;
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

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const v = get(pack, el.getAttribute("data-i18n-alt"));
      if (v != null) el.setAttribute("alt", v);
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
