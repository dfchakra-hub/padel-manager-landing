(function () {
  const STORAGE_KEY = "pm-landing-lang";

  const T = {
    it: {
      meta: {
        title: "Padel Manager · Sistema operativo per circoli padel",
        description:
          "Unifica operations, competizioni e player intelligence in un unico OS per circoli padel — MVP avanzato, fase pilot, nato da esperienza operativa reale.",
        ogTitle: "Padel Manager · Sistema operativo per circoli padel",
        ogDescription:
          "Infrastruttura B2B per circoli moderni: non solo booking, non solo torneo — layer operativo e competitivo con player intelligence.",
      },
      brand: { subtitle: "Sistema operativo per circoli" },
      nav: {
        problem: "Problema",
        platform: "Piattaforma",
        intelligence: "Intelligence",
        status: "Stato",
        contact: "Contatti",
      },
      hero: {
        pill: "Infrastruttura competitiva per circoli",
        title: "Il sistema operativo per i circoli padel moderni.",
        lead:
          "Operations, competizioni amatoriali e player intelligence in un unico layer — al posto di WhatsApp, Excel e app che non si parlano.",
        ctaPrimary: "Parla di un pilot",
        ctaSecondary: "Esplora la piattaforma",
        badge1: "MVP avanzato",
        badge2: "Fase pilot",
        badge3: "Nato da operations reali in circolo",
        osTitle: "Padel Manager OS",
        osSub: "Operations · competizioni · intelligence",
        osToolbar: "Club OS · superficie live",
        chip1: "Live club cockpit",
        chip2: "AI assisted",
        chip3: "Competition runtime",
        chip4: "Player intelligence",
      },
      modules: {
        club: "Circolo",
        calendar: "Calendario",
        comp: "Competizioni",
        matches: "Partite",
        lessons: "Lezioni",
        players: "Giocatori",
        pay: "Pagamenti",
        loyalty: "Loyalty",
        ai: "AI",
      },
      problem: {
        eyebrow: "Il problema",
        title: "Il circolo lavora ancora su strumenti frammentati.",
        lead:
          "Tabelloni, iscrizioni, campi e pagamenti vivono su canali diversi. Ogni cambio richiede coordinamento manuale tra persone e file.",
        p1title: "WhatsApp come back-office",
        p1body: "Bracket, cambi campo e comunicazioni urgenti in thread che non scalano.",
        p2title: "Excel come database",
        p2body: "Iscrizioni, livelli e incassi in fogli che divergono dalla realtà del campo.",
        p3title: "App scollegate",
        p3body: "Booking, torneo e lezioni in silos — nessun contesto giocatore condiviso.",
      },
      solution: {
        eyebrow: "La soluzione",
        title: "Un OS unico — non un’altra app monotask.",
        lead:
          "Padel Manager è infrastruttura operativa e competitiva: collega calendario, runtime torneo e intelligence giocatore nella stessa superficie di lavoro.",
        c1: "Cockpit operativo e calendario unificato",
        c2: "Runtime competizioni con meno frizione manuale",
        c3: "Player intelligence per abbinamenti e planning",
        c4: "AI come assistente operativo nel contesto del circolo",
      },
      pillars: {
        eyebrow: "Tre pilastri",
        title: "Più di booking. Più di tabellone.",
        lead: "Tre capacità che i circoli oggi gestiscono con tool separati — qui convivono nello stesso OS.",
        p1tag: "Competizioni",
        p1title: "Tornei, leghe e circuiti",
        p1body:
          "Tabelloni, ranking e finali in un flusso operativo — senza rifare il draw su un foglio ogni weekend.",
        p2tag: "Operations",
        p2title: "Campi, lezioni e attività",
        p2body:
          "Un modello calendario per pianificare il circolo — non tre strumenti che non concordano mai.",
        p3tag: "Economia circolo",
        p3title: "Pagamenti e continuità",
        p3body:
          "Incassi, pacchetti e loyalty collegati all’attività reale — non solo alla prenotazione del campo.",
      },
      modGrid: {
        eyebrow: "Moduli",
        title: "Nove domini integrati nell’OS.",
        lead: "Modulare nel design, unificato nell’uso quotidiano del circolo.",
      },
      mod: {
        m1: "Circolo",
        s1: "Profilo · impostazioni",
        m2: "Calendario",
        s2: "Campi · slot",
        m3: "Partite",
        s3: "Social · open",
        m4: "Lezioni",
        s4: "Academy · clinic",
        m5: "Giocatori",
        s5: "Roster · livelli",
        m6: "Loyalty",
        s6: "Ranking · benefit",
      },
      intelligence: {
        eyebrow: "Differenziante",
        title: "Player intelligence",
        lead:
          "Il layer che distingue Padel Manager da booking generico o software torneo isolato: segnali su livello, disponibilità, comportamento e preferenze per abbinamenti più equi e planning più fluido.",
        b1: "Match-fit per partite e eventi sociali",
        b2: "Suggerimenti lezione e clinic coerenti con il profilo",
        b3: "Contesto giocatore condiviso tra competizione e operations",
        b4: "Base dati per AI operativa — non buzzword da slide",
        stat1: "Segnali",
        stat1v: "Livello · disponibilità · stile",
        stat2: "Output",
        stat2v: "Abbinamenti · planning · retention",
      },
      business: {
        eyebrow: "Modello commerciale",
        title: "Percorsi B2B per circoli e partner.",
        lead: "Struttura pensata per pilot club, gruppi multi-sede e partnership evento.",
        b1: "SaaS mensile per operations di circolo",
        b2: "Licenza enterprise per gruppi e federazioni",
        b3: "Licenza evento per tornei e circuiti",
        b4: "Layer AI e analytics premium nel tempo",
      },
      why: {
        eyebrow: "Perché ora",
        title: "Il padel cresce più in fretta dell’infrastruttura dei circoli.",
        b1: "Più campi → più complessità operativa da gestire",
        b2: "Competizioni amatoriali più frequenti e più esigenti",
        b3: "Serve software specialistico — non export tabellone da booking",
      },
      traction: {
        eyebrow: "Stato attuale",
        title: "MVP avanzato — preparazione pilot.",
        lead:
          "Infrastruttura core funzionante. Focus su validazione pilot e refinement operativo — senza claim di clienti paganti o scala.",
        step1: "MVP avanzato",
        step1d: "Superficie operativa e moduli core integrati",
        step2: "Fase pilot",
        step2d: "Conversazioni con circoli selezionati",
        step3: "Prossimo",
        step3d: "Refinement da feedback operativo reale",
        pilot: "Conversazioni pilot in corso",
        p1: "Monopoli Padel Club",
        p2: "BS Padel",
        p3: "Lion’s Padel",
      },
      founder: {
        eyebrow: "Founder",
        title: "Costruito dentro circoli reali.",
        p1: "Daniele Francesco Cavallo — avvocato, ex imprenditore e consulente (HR e gestione operativa), con direzione diretta di circoli padel.",
        p2: "Da quel lavoro: metodologia BPM e Padel Manager come infrastruttura competitiva — non demo da pitch deck.",
        linkedin: "Profilo LinkedIn",
      },
      contact: {
        eyebrow: "Prossimo passo",
        title: "Parliamo di pilot, partnership o investimento early-stage.",
        lead:
          "Cerchiamo circoli per validazione operativa, partner strategici sul territorio e conversazioni con investitori che capiscono B2B sport & venue.",
        audience1: "Circoli pilot",
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
        rights: "© Padel Manager · MVP avanzato · fase pilot",
      },
    },
    en: {
      meta: {
        title: "Padel Manager · Operating system for padel clubs",
        description:
          "Unifies club operations, competitions and player intelligence in one OS — advanced MVP, pilot phase, built from real club operations.",
        ogTitle: "Padel Manager · Operating system for padel clubs",
        ogDescription:
          "B2B infrastructure for modern clubs: not just booking, not just tournaments — operational and competitive layer with player intelligence.",
      },
      brand: { subtitle: "Club operating system" },
      nav: {
        problem: "Problem",
        platform: "Platform",
        intelligence: "Intelligence",
        status: "Status",
        contact: "Contact",
      },
      hero: {
        pill: "Competitive club infrastructure",
        title: "The operating system for modern padel clubs.",
        lead:
          "Operations, amateur competitions and player intelligence in one layer — instead of WhatsApp, Excel and apps that do not talk to each other.",
        ctaPrimary: "Discuss a pilot",
        ctaSecondary: "Explore the platform",
        badge1: "Advanced MVP",
        badge2: "Pilot phase",
        badge3: "Built from real club operations",
        osTitle: "Padel Manager OS",
        osSub: "Operations · competitions · intelligence",
        osToolbar: "Club OS · live surface",
        chip1: "Live club cockpit",
        chip2: "AI assisted",
        chip3: "Competition runtime",
        chip4: "Player intelligence",
      },
      modules: {
        club: "Club",
        calendar: "Calendar",
        comp: "Competitions",
        matches: "Matches",
        lessons: "Lessons",
        players: "Players",
        pay: "Payments",
        loyalty: "Loyalty",
        ai: "AI",
      },
      problem: {
        eyebrow: "The problem",
        title: "Clubs still run on fragmented tools.",
        lead:
          "Brackets, registrations, courts and payments live on different channels. Every change means manual coordination between people and files.",
        p1title: "WhatsApp as back-office",
        p1body: "Brackets, court changes and urgent comms in threads that do not scale.",
        p2title: "Excel as database",
        p2body: "Registrations, levels and payments in sheets that drift from what happens on court.",
        p3title: "Disconnected apps",
        p3body: "Booking, tournament and lessons in silos — no shared player context.",
      },
      solution: {
        eyebrow: "The solution",
        title: "One OS — not another single-purpose app.",
        lead:
          "Padel Manager is operational and competitive infrastructure: calendar, tournament runtime and player intelligence on the same working surface.",
        c1: "Operational cockpit and unified calendar",
        c2: "Competition runtime with less manual friction",
        c3: "Player intelligence for pairings and planning",
        c4: "AI as an operational assistant in club context",
      },
      pillars: {
        eyebrow: "Three pillars",
        title: "More than booking. More than brackets.",
        lead: "Three capabilities clubs today split across tools — here they live in one OS.",
        p1tag: "Competitions",
        p1title: "Tournaments, leagues and circuits",
        p1body:
          "Brackets, rankings and finals in one operational flow — without rebuilding the draw in a spreadsheet every weekend.",
        p2tag: "Operations",
        p2title: "Courts, lessons and activities",
        p2body:
          "One calendar model to run the club — not three tools that never agree.",
        p3tag: "Club economics",
        p3title: "Payments and continuity",
        p3body:
          "Revenue, packages and loyalty tied to real activity — not only court booking.",
      },
      modGrid: {
        eyebrow: "Modules",
        title: "Nine domains integrated in the OS.",
        lead: "Modular by design, unified in daily club use.",
      },
      mod: {
        m1: "Club profile",
        s1: "Profile · settings",
        m2: "Calendar",
        s2: "Courts · slots",
        m3: "Matches",
        s3: "Social · open",
        m4: "Lessons",
        s4: "Academy · clinic",
        m5: "Players",
        s5: "Roster · levels",
        m6: "Loyalty",
        s6: "Ranking · perks",
      },
      intelligence: {
        eyebrow: "Differentiator",
        title: "Player intelligence",
        lead:
          "The layer that sets Padel Manager apart from generic booking or isolated tournament software: signals on level, availability, behaviour and preferences for fairer pairings and smoother planning.",
        b1: "Match-fit for matches and social events",
        b2: "Lesson and clinic suggestions aligned with player profile",
        b3: "Shared player context across competition and operations",
        b4: "Data foundation for operational AI — not a buzzword slide",
        stat1: "Signals",
        stat1v: "Level · availability · style",
        stat2: "Output",
        stat2v: "Pairings · planning · retention",
      },
      business: {
        eyebrow: "Commercial model",
        title: "B2B paths for clubs and partners.",
        lead: "Structured for pilot clubs, multi-venue groups and event partnerships.",
        b1: "Monthly SaaS for club operations",
        b2: "Enterprise licensing for groups and federations",
        b3: "Event licensing for tournaments and circuits",
        b4: "Premium AI and analytics layers over time",
      },
      why: {
        eyebrow: "Why now",
        title: "Padel grows faster than club infrastructure.",
        b1: "More courts → more operational complexity to manage",
        b2: "Amateur competitions more frequent and harder to run",
        b3: "Clubs need specialised software — not bracket export from booking",
      },
      traction: {
        eyebrow: "Current status",
        title: "Advanced MVP — pilot preparation.",
        lead:
          "Core infrastructure is functional. Focus on pilot validation and operational refinement — no paying-customer or scale claims.",
        step1: "Advanced MVP",
        step1d: "Operational surface and integrated core modules",
        step2: "Pilot phase",
        step2d: "Conversations with selected clubs",
        step3: "Next",
        step3d: "Refinement from real operational feedback",
        pilot: "Pilot conversations in progress",
        p1: "Monopoli Padel Club",
        p2: "BS Padel",
        p3: "Lion’s Padel",
      },
      founder: {
        eyebrow: "Founder",
        title: "Built inside real clubs.",
        p1: "Daniele Francesco Cavallo — lawyer, former entrepreneur and consultant (HR and operations), with direct padel club leadership.",
        p2: "From that work: BPM methodology and Padel Manager as competitive infrastructure — not a pitch-deck demo.",
        linkedin: "LinkedIn profile",
      },
      contact: {
        eyebrow: "Next step",
        title: "Let’s talk pilots, partnerships or early-stage investment.",
        lead:
          "We are looking for clubs for operational validation, strategic partners on the ground, and investors who understand B2B sport & venue software.",
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
