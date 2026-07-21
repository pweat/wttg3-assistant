/**
 * WTTG3 Assistant
 * Welcome to the Game III – site tracker, miners & smart notebook
 */

/* ==========================================================================
   DATABASE (from raw community / chart data)
   ========================================================================== */

const WEBSITES = [
  // —— Always available (Deep Wiki 1) ——
  { name: "Blushing Brides", status: "always", deepWiki: 1, window: null },
  { name: "Cavity Lease", status: "always", deepWiki: 1, time: null },
  { name: "Crisis Calls", status: "always", deepWiki: 1, time: null },
  { name: "Doctor Murder", status: "always", deepWiki: 1, time: null },
  { name: "Dont Waste It", status: "always", deepWiki: 1, time: null },
  { name: "Doughy", status: "always", deepWiki: 1, time: null },
  { name: "Encrave", status: "always", deepWiki: 1, time: null },
  { name: "Forever Friend", status: "always", deepWiki: 1, time: null },
  { name: "Jakobs Sink", status: "always", deepWiki: 1, time: null },
  { name: "LostTapes", status: "always", deepWiki: 1, time: null },
  { name: "Oneless", status: "always", deepWiki: 1, time: null },
  { name: "Prohibited Stockpile", status: "always", deepWiki: 1, time: null },
  { name: "Red Triangle", status: "always", deepWiki: 1, time: null },
  { name: "Ring Ring", status: "always", deepWiki: 1, time: null },
  { name: "Symphoros Chosen", status: "always", deepWiki: 1, time: null },
  { name: "Synapse Decay", status: "always", deepWiki: 1, time: null },
  { name: "Tango Down", status: "always", deepWiki: 1, time: null },
  { name: "Thanks For Visiting!", status: "always", deepWiki: 1, time: null },
  { name: "The Bomb Maker", status: "careful", deepWiki: 1, time: null },
  { name: "The Hole", status: "always", deepWiki: 1, time: null },
  { name: "The Light Within", status: "always", deepWiki: 1, time: null },
  { name: "The Loogaroo", status: "always", deepWiki: 1, time: null },
  { name: "Time Sharing", status: "always", deepWiki: 1, time: null },
  { name: "TRACK06", status: "always", deepWiki: 1, time: null },
  { name: "VoluVision", status: "always", deepWiki: 1, time: null },
  { name: "World Wide Workers", status: "always", deepWiki: 1, time: null },

  // —— Time-limited :00–:14 (Deep Wiki 2) ——
  { name: "FindLove", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },
  { name: "Forsaken Gifts", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },
  { name: "Mors N More Market", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },
  { name: "Order Of Nine", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },
  { name: "The Prey", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },

  // —— Time-limited :00–:29 (Deep Wiki 2) ——
  { name: "Blackhat Post", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "Drug Tickets", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "Kill For Me", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "MamaBruguglio", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "Red Handed", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "ViaMarisRoute", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },

  // —— Time-limited :15–:29 (Deep Wiki 2) ——
  { name: "Building A Future", status: "timed", deepWiki: 2, time: { start: 15, end: 29 } },
  { name: "Eat My ♥♥♥♥", status: "timed", deepWiki: 2, time: { start: 15, end: 29 } },
  { name: "Overnight Success", status: "timed", deepWiki: 2, time: { start: 15, end: 29 } },

  // —— Time-limited :30–:44 (Deep Wiki 3) ——
  { name: "Bizzare Propagation", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "Crystal Guild", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "I Am Here", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "Keep Sake", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "Shelter", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "You There?", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },

  // —— Time-limited :30–:59 (Deep Wiki 3) ——
  { name: "Chevron", status: "timed", deepWiki: 3, time: { start: 30, end: 59 } },
  { name: "finalStanding", status: "timed", deepWiki: 3, time: { start: 30, end: 59 } },
  { name: "Lab Monkey", status: "timed", deepWiki: 3, time: { start: 30, end: 59 } },
  { name: "The Grey", status: "timed", deepWiki: 3, time: { start: 30, end: 59 } },

  // —— Time-limited :45–:59 (Deep Wiki 3) ——
  { name: "The Hall", status: "timed", deepWiki: 3, time: { start: 45, end: 59 } },

  // —— Permanently dead ——
  { name: "Abyssal Chat", status: "dead", deepWiki: 3, time: null },
  { name: "Bathroom Cams", status: "dead", deepWiki: 3, time: null },
  { name: "Bone Altar", status: "dead", deepWiki: 3, time: null },
  { name: "Carrion Stage", status: "dead", deepWiki: 3, time: null },
  { name: "Corpses For Sale", status: "dead", deepWiki: 3, time: null },
  { name: "Crimson Bazaar", status: "dead", deepWiki: 3, time: null },
  { name: "Crimson Relay", status: "dead", deepWiki: 3, time: null },
  { name: "Dread Signal", status: "dead", deepWiki: 3, time: null },
  { name: "Drone Spy", status: "dead", deepWiki: 3, time: null },
  { name: "Echo Vault", status: "dead", deepWiki: 3, time: null },
  { name: "Eternal Loop", status: "dead", deepWiki: 3, time: null },
  { name: "Father Donald", status: "dead", deepWiki: 3, time: null },
  { name: "Flicker Stream", status: "dead", deepWiki: 3, time: null },
  { name: "Foot Doctor", status: "dead", deepWiki: 3, time: null },
  { name: "Forgive Me", status: "dead", deepWiki: 3, time: null },
  { name: "Ghost Proxy", status: "dead", deepWiki: 3, time: null },
  { name: "Gloom Archive", status: "dead", deepWiki: 3, time: null },
  { name: "Iron Ledger", status: "dead", deepWiki: 3, time: null },
  { name: "Lost Signals", status: "dead", deepWiki: 3, time: null },
  { name: "Murk Lair", status: "dead", deepWiki: 3, time: null },
  { name: "Mutilation", status: "dead", deepWiki: 3, time: null },
  { name: "My Gut", status: "dead", deepWiki: 3, time: null },
  { name: "Noir Gallery", status: "dead", deepWiki: 3, time: null },
  { name: "Obsidian Trade", status: "dead", deepWiki: 3, time: null },
  { name: "Phantom Lot", status: "dead", deepWiki: 3, time: null },
  { name: "Red Veil", status: "dead", deepWiki: 3, time: null },
  { name: "Rust Network", status: "dead", deepWiki: 3, time: null },
  { name: "Secure Drop", status: "dead", deepWiki: 3, time: null },
  { name: "Shade Broker", status: "dead", deepWiki: 3, time: null },
  { name: "Shadow Cache", status: "dead", deepWiki: 3, time: null },
  { name: "Specter Hub", status: "dead", deepWiki: 3, time: null },
  { name: "The Black Waves", status: "dead", deepWiki: 3, time: null },
  { name: "The End Of NY", status: "dead", deepWiki: 3, time: null },
  { name: "Veiled Eyes", status: "dead", deepWiki: 3, time: null },
  { name: "Void Library", status: "dead", deepWiki: 3, time: null },
  { name: "Wraith Cam", status: "dead", deepWiki: 3, time: null },

  // —— Permanently dead (formerly "probably") ——
  { name: "Backrooms", status: "dead", deepWiki: 3, time: null },
  { name: "Deep Journal", status: "dead", deepWiki: 3, time: null },
  { name: "Hollow Key", status: "dead", deepWiki: 3, time: null },
  { name: "Silent Auction", status: "dead", deepWiki: 3, time: null },
  { name: "The Butcher", status: "dead", deepWiki: 3, time: null },

  // —— FBI seized ——
  { name: "Cryptic Forge", status: "fbi", deepWiki: 3, time: null },
  { name: "Dusk Haven", status: "fbi", deepWiki: 3, time: null },
  { name: "Evidence Locker", status: "fbi", deepWiki: 3, time: null },
  { name: "Hidden Pleasures", status: "fbi", deepWiki: 3, time: null },
  { name: "Iron Mask", status: "fbi", deepWiki: 3, time: null },
  { name: "Is Evil", status: "fbi", deepWiki: 3, time: null },
  { name: "Pale Market", status: "fbi", deepWiki: 3, time: null },
  { name: "Roses Destruction", status: "fbi", deepWiki: 3, time: null },
];

const MINERS = {
  tier1: {
    label: "Tier I",
    costKey: "minerCostTier1",
    computers: [
      { name: "WebTyk", rate: 1.84 },
      { name: "UserJyx", rate: 1.8 },
      { name: "NetVorn", rate: 1.45 },
      { name: "CloudFuz", rate: 0.88 },
      { name: "SysBlip", rate: 0.87 },
      { name: "DevQuix", rate: 0.64 },
      { name: "IT_Kwez", rate: 0.42 },
      { name: "DataRax", rate: 0.32 },
      { name: "WorkZap", rate: 0.31 },
      { name: "CodePlix", rate: 0.3 },
    ],
  },
  tier2: {
    label: "Tier II",
    costKey: "minerCostTier2",
    computers: [
      { name: "OpsHax", rate: 3.23 },
      { name: "SecErux", rate: 2.73 },
      { name: "GameDrux", rate: 2.57 },
      { name: "PrintYis", rate: 2.43 },
      { name: "FileNuz", rate: 1.88 },
      { name: "Prod Glin", rate: 1.8 },
      { name: "VM_Wekl", rate: 1.74 },
      { name: "BackShiv", rate: 1.49 },
      { name: "TestXor", rate: 1.36 },
      { name: "LabBzop", rate: 0.48 },
    ],
  },
  tier3: {
    label: "Tier III",
    costKey: "minerCostTier3",
    computers: [
      { name: "Phoenix", rate: 4.79 },
      { name: "MediaVlu", rate: 3.93 },
      { name: "QA_Pivz", rate: 3.58 },
      { name: "HR_Treq", rate: 3.42 },
      { name: "VPN_Qwer", rate: 3.38 },
      { name: "SalesMiv", rate: 3.21 },
      { name: "ChatEzk", rate: 3.17 },
      { name: "EngZolp", rate: 2.63 },
      { name: "LogJuk", rate: 0.3 },
    ],
  },
};

/* ==========================================================================
   i18n
   ========================================================================== */

const STORAGE_FLAGS = "wttg3_site_flags";
const STORAGE_NOTES = "wttg3_notes";
const STORAGE_WIKI_TABS = "wttg3_wiki_tabs";
const STORAGE_ACTIVE_WIKI = "wttg3_active_wiki";
const STORAGE_LANG = "wttg3_lang";
const STORAGE_BOMB_SPOILER = "wttg3_bomb_spoiler";

const I18N = {
  pl: {
    online: "Online",
    trackerTitle: "Tracker stron",
    minersTitle: "Koparki",
    notebookTitle: "Smart notatnik",
    infoTitle: "Instrukcja / Zagrożenia",
    deepWikiAria: "Deep Wiki",
    infoAria: "Informacje",
    siteInputLabel: "Lista stron z gry",
    analyzeBtn: "Przeanalizuj strony",
    clearTabBtn: "Wyczyść zakładkę",
    tabHelp: "Jak używać",
    tabFaq: "FAQ",
    tabThreats: "Zagrożenia",
    sitePlaceholder:
      "Deep Wiki {n} — wklej listę ze gry, np.\nChevron - Leaked military mission logs.\nFindLove - You don't have to be alone.",
    notebookPlaceholder:
      "Notatki, kody, klucze…\nKlucze (np. A1B2C3D4E5F6) zostaną podświetlone.",
    emptyTab: "Deep Wiki {n}: wklej listę stron i kliknij „Przeanalizuj strony”.",
    unknownSection: "Inne / Nieznane",
    colSite: "Strona",
    colTime: "Okno czasowe",
    colStatus: "Status",
    colProgress: "Postęp",
    flagVisited: "Odwiedzono",
    flagReviewed: "Przejrzano dokładnie",
    flagKey: "Znaleziono klucz",
    activeNow: "Aktywna teraz",
    timeAlways: "Zawsze (24/7)",
    timeHourly: "co godz. :{start} – :{end}",
    matchSummary: "DW{n}: {matched}/{total}",
    unknownCount: " · nieznane: {n}",
    detectedKeys: "Wykryte klucze:",
    status_always: "Zawsze",
    status_timed: "Czasowa",
    status_careful: "Ostrożnie",
    status_dead: "Martwa",
    status_fbi: "FBI seized",
    status_unknown: "Nieznana",
    minerCostTier1: "od początku",
    minerCostTier2: "75 DOS",
    minerCostTier3: "250 DOS",
    threatsIntro: "Główne zagrożenia — sygnał dźwiękowy i jak się bronić:",
    threatColThreat: "Zagrożenie",
    threatColCue: "Sygnał",
    threatColCounter: "Obrona",
    spoilerLabel: "SPOILER",
    spoilerHidden: "Ukryte — kliknij, jeśli akceptujesz spoilery dotyczące The Bomb Maker.",
    spoilerAccept: "Pokaż spoiler",
    spoilerHide: "Ukryj ponownie",
    help: [
      ["Zakładki:", "najpierw Deep Wiki 1 — wklej listę i przeanalizuj. Potem przełącz na DW2 / DW3 i wklej osobno."],
      ["Format:", "Nazwa - opis — liczy się tylko tekst przed myślnikiem."],
      ["Checkboxy:", "Odwiedzono / Przejrzano / Klucz — zapis lokalny w przeglądarce."],
      ["Okna czasowe:", "strony timed działają w podanych minutach każdej godziny (np. :00–:14)."],
      ["Koparki:", "wybieraj najwyższe DOS/min w odblokowanym tierze VM Grid."],
      ["Notatnik:", "ciągi 8–20 znaków alfanumerycznych są wykrywane jako klucze."],
      ["Język:", "przełącznik PL / EN w prawym górnym rogu."],
    ],
    faq: [
      {
        q: "Czy hazard się opłaca?",
        a: "Zwykle nie. To ryzykowny sposób na DOS — nie warto na nim polegać.",
      },
      {
        q: "Czy zawsze nosić metamfetaminę?",
        a: "Tak, ale tylko jedną torebkę.",
      },
      {
        q: "Czy wchodzić wcześnie na The Bomb Maker?",
        a: "Nie. Unikaj aktywacji, dopóki progresja tego nie wymaga.",
      },
      {
        q: "Czy sprawdzać kod źródłowy stron?",
        a: "Tak. Mogą być tam ukryte wskazówki i elementy zagadek.",
      },
      {
        q: "Czy mogę „pauzować” przy komputerze?",
        a: "Nie. Zagrożenia działają także podczas przeglądania — uważaj na otoczenie.",
      },
    ],
    threats: [
      {
        name: "Tanner",
        cue: "Cichy odgłos szurania",
        counter:
          "Zamykaj drzwi, sprawdzaj wizjer przed wyjściem z pokoju motelowego, naciśnij panic button gdy się zbliża",
      },
      {
        name: "Lucas",
        cue: "Odgłos otwierania zamka (lockpicking)",
        counter: "Trzymaj tylne drzwi zamknięte; chowaj się w wózku na pranie lub szafce w łazience",
      },
      {
        name: "Tucker",
        cue: "Muzyka banjo / stara melodia ALBO szelest trawy przy naprawie sieci",
        counter:
          "Gdy gra stara melodia — biegnij do pokoju z asem pik (Ace of Spades) przy klamce. Przy naprawie sieci odczekaj 10+ s i nasłuchuj szelestu liści — jeśli słyszysz, jest OK",
      },
      {
        name: "Cletus",
        cue: "Po prostu cię znajdzie",
        counter: "Zawsze miej <strong>jedną</strong> torebkę metamfetaminy w ekwipunku",
      },
      {
        name: "Noir",
        cue: "Pojawiają się parami; czasem metaliczne skrobanie",
        counter:
          "Zapamiętaj kolejność L→P, latarka, odwróć się i licz. Przy komputerze spójrz w bok i <strong>nie wstawaj</strong> z krzesła (inaczej INSTAKILL)",
      },
      {
        name: "The Kidnapper",
        cue: "Biały van na parkingu",
        counter: "Sprawdzaj ulicę przed wyjściem albo ustaw kamerę",
      },
      {
        name: "The Breather",
        cue: "Spawnuje się przy dead dropie pod mostem",
        counter:
          "Pełna stamina; sprintuj dopiero gdy go zobaczysz i biegnij na chodnik prawego pokoju motelowego",
      },
      {
        name: "The Bomb Maker",
        spoiler: true,
        cue: "Event po wejściu na jego stronę",
        counter:
          "Znajdź bombę i wpisz kod zanim skończy się czas. Kod dostaniesz na CryptChat — zapamiętaj go, potem znajdź bombę",
      },
    ],
  },
  en: {
    online: "Online",
    trackerTitle: "Site Tracker",
    minersTitle: "Miners",
    notebookTitle: "Smart Notebook",
    infoTitle: "Guide / Threats",
    deepWikiAria: "Deep Wiki",
    infoAria: "Information",
    siteInputLabel: "Site list from the game",
    analyzeBtn: "Analyze sites",
    clearTabBtn: "Clear tab",
    tabHelp: "How to use",
    tabFaq: "FAQ",
    tabThreats: "Threats",
    sitePlaceholder:
      "Deep Wiki {n} — paste list from the game, e.g.\nChevron - Leaked military mission logs.\nFindLove - You don't have to be alone.",
    notebookPlaceholder:
      "Notes, codes, keys…\nKeys (e.g. A1B2C3D4E5F6) will be highlighted.",
    emptyTab: "Deep Wiki {n}: paste a site list and click “Analyze sites”.",
    unknownSection: "Other / Unknown",
    colSite: "Site",
    colTime: "Time window",
    colStatus: "Status",
    colProgress: "Progress",
    flagVisited: "Visited",
    flagReviewed: "Fully reviewed",
    flagKey: "Key found",
    activeNow: "Active now",
    timeAlways: "Always (24/7)",
    timeHourly: "hourly :{start} – :{end}",
    matchSummary: "DW{n}: {matched}/{total}",
    unknownCount: " · unknown: {n}",
    detectedKeys: "Detected keys:",
    status_always: "Always",
    status_timed: "Timed",
    status_careful: "Careful",
    status_dead: "Dead",
    status_fbi: "FBI seized",
    status_unknown: "Unknown",
    minerCostTier1: "from the start",
    minerCostTier2: "75 DOS",
    minerCostTier3: "250 DOS",
    threatsIntro: "Main threats — sound cue and how to counter them:",
    threatColThreat: "Threat",
    threatColCue: "Cue",
    threatColCounter: "Counter",
    spoilerLabel: "SPOILER",
    spoilerHidden: "Hidden — click if you accept spoilers about The Bomb Maker.",
    spoilerAccept: "Reveal spoiler",
    spoilerHide: "Hide again",
    help: [
      ["Tabs:", "start with Deep Wiki 1 — paste and analyze. Then switch to DW2 / DW3 and paste separately."],
      ["Format:", "Name - description — only the text before the dash counts."],
      ["Checkboxes:", "Visited / Reviewed / Key — saved locally in the browser."],
      ["Time windows:", "timed sites are up during those minutes of every hour (e.g. :00–:14)."],
      ["Miners:", "pick the highest DOS/min in your unlocked VM Grid tier."],
      ["Notebook:", "8–20 character alphanumeric strings are detected as keys."],
      ["Language:", "PL / EN switch in the top-right corner."],
    ],
    faq: [
      {
        q: "Is gambling worth it?",
        a: "Usually not. It's a high-risk way to earn DOS and shouldn't be relied on.",
      },
      {
        q: "Should I always carry meth?",
        a: "Yes, but only one bag.",
      },
      {
        q: "Should I visit The Bomb Maker early?",
        a: "No. Avoid activating him until progression requires it.",
      },
      {
        q: "Do I need to check website source code?",
        a: "Yes. Hidden clues and puzzle pieces can appear there.",
      },
      {
        q: "Can I pause while using the computer?",
        a: "No. Threats continue to exist while you're browsing, so stay aware of your surroundings.",
      },
    ],
    threats: [
      {
        name: "Tanner",
        cue: "Sound of shuffling (it is quiet)",
        counter:
          "Make sure to lock doors, check the peephole when leaving the motel room, hit the panic button when he is about to approach",
      },
      {
        name: "Lucas",
        cue: "Lockpicking sound",
        counter: "Keep the backdoor locked; hide in the laundry trolley or bathroom locker",
      },
      {
        name: "Tucker",
        cue: "Banjo music / old tune OR grass rustling during network repair",
        counter:
          "When the old tune plays, sprint to the motel room that has the Ace of Spades near the door knob. If doing network repair, wait 10+ seconds for leaves rustling — if you hear it, you are good",
      },
      {
        name: "Cletus",
        cue: "He will just find you",
        counter: "Always have <strong>ONE</strong> bag of meth in your inventory",
      },
      {
        name: "Noir",
        cue: "Appear in pairs; sometimes metal scraping sound",
        counter:
          "Know their left-to-right order, then flashlight, turn away, and count. If they appear while you are at the computer, look away for a bit and <strong>DON'T GET UP</strong> from the chair or it will be INSTAKILL",
      },
      {
        name: "The Kidnapper",
        cue: "A white van parked nearby in the parking lot",
        counter: "Check the street before going outside or place a camera to watch",
      },
      {
        name: "The Breather",
        cue: "Spawns near the dead drop location under the bridge",
        counter:
          "Make sure you have full stamina; only sprint when you see him and run to the pavement of the motel room on the right",
      },
      {
        name: "The Bomb Maker",
        spoiler: true,
        cue: "Triggered by visiting his website",
        counter:
          "Find the bomb and enter the code he sends before time runs out. He'll send the code in CryptChat — memorize it, then find the bomb",
      },
    ],
  },
};

let lang = "pl";

function t(key, vars) {
  let str = (I18N[lang] && I18N[lang][key]) ?? (I18N.pl[key] ?? key);
  if (vars && typeof str === "string") {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    }
  }
  return str;
}

function statusLabel(status) {
  return t(`status_${status}`) || status;
}

/** Potential in-game keys: 8–20 alphanumeric (optionally with - _) */
const KEY_REGEX = /\b[A-Za-z0-9][A-Za-z0-9_-]{7,19}\b/g;
const KEY_TEST = /^[A-Za-z0-9][A-Za-z0-9_-]{7,19}$/;

/** Per-tab state: { 1: { input, matchedNames, unknown }, … } */
let activeWiki = 1;
let wikiTabs = {
  1: { input: "", matched: [], unknown: [] },
  2: { input: "", matched: [], unknown: [] },
  3: { input: "", matched: [], unknown: [] },
};
let activeInfoTab = "help";

/* ==========================================================================
   Helpers
   ========================================================================== */

function normalizeName(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[''`]/g, "")
    .replace(/\s+/g, " ")
    .replace(/[♥❤]+/g, "♥");
}

/** Fuzzy-friendly lookup map */
const SITE_INDEX = (() => {
  const map = new Map();
  for (const site of WEBSITES) {
    map.set(normalizeName(site.name), site);
    const stripped = normalizeName(site.name.replace(/[!?.,]/g, ""));
    if (!map.has(stripped)) map.set(stripped, site);
  }
  map.set(normalizeName("Eat My ****"), WEBSITES.find((s) => s.name.startsWith("Eat My")));
  map.set(normalizeName("Eat My Shit"), WEBSITES.find((s) => s.name.startsWith("Eat My")));
  return map;
})();

function formatTimeWindow(time) {
  if (!time) return t("timeAlways");
  const pad = (n) => String(n).padStart(2, "0");
  return t("timeHourly", { start: pad(time.start), end: pad(time.end) });
}

function isCurrentlyActive(site) {
  if (!site.time) {
    return site.status === "always" || site.status === "careful";
  }
  const m = new Date().getMinutes();
  return m >= site.time.start && m <= site.time.end;
}

function loadFlags() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_FLAGS) || "{}");
  } catch {
    return {};
  }
}

function saveFlags(flags) {
  localStorage.setItem(STORAGE_FLAGS, JSON.stringify(flags));
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function svgIcon(type) {
  if (type === "visited") {
    return `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }
  if (type === "reviewed") {
    return `<svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`;
}

/* ==========================================================================
   Tracker
   ========================================================================== */

function extractSiteName(line) {
  const trimmed = line.trim();
  if (!trimmed) return "";
  const spaced = trimmed.split(/\s+[-–—]\s+/);
  if (spaced.length >= 2) return spaced[0].trim();
  return trimmed;
}

function parsePastedLines(raw) {
  return raw
    .split(/[\n\r]+/)
    .map(extractSiteName)
    .filter((l) => l.length > 0)
    .filter((l) => !/^[-–=]{3,}/.test(l))
    .filter((l) => !/^(site|deep wiki|always|time)/i.test(l));
}

function matchSites(names) {
  const matched = [];
  const unknown = [];
  const seen = new Set();

  for (const raw of names) {
    const key = normalizeName(raw);
    if (seen.has(key)) continue;
    seen.add(key);

    const site = SITE_INDEX.get(key);
    if (site) {
      matched.push({ ...site, inputName: raw });
    } else {
      unknown.push(raw);
    }
  }

  return { matched, unknown };
}

function sortSites(sites) {
  return [...sites].sort((a, b) => {
    const aAct = isCurrentlyActive(a) ? 0 : 1;
    const bAct = isCurrentlyActive(b) ? 0 : 1;
    if (aAct !== bAct) return aAct - bAct;
    return a.name.localeCompare(b.name);
  });
}

function loadWikiTabs() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_WIKI_TABS) || "null");
    if (!raw) return;
    for (const key of [1, 2, 3]) {
      if (!raw[key]) continue;
      const names = raw[key].matchedNames || [];
      const unknown = raw[key].unknown || [];
      const matched = names
        .map((n) => SITE_INDEX.get(normalizeName(n)))
        .filter(Boolean)
        .map((s) => ({ ...s, inputName: s.name }));
      wikiTabs[key] = {
        input: raw[key].input || "",
        matched,
        unknown,
      };
    }
  } catch {
    /* ignore corrupt storage */
  }
}

function saveWikiTabs() {
  const payload = {};
  for (const key of [1, 2, 3]) {
    const tab = wikiTabs[key];
    payload[key] = {
      input: tab.input,
      matchedNames: tab.matched.map((s) => s.name),
      unknown: tab.unknown,
    };
  }
  localStorage.setItem(STORAGE_WIKI_TABS, JSON.stringify(payload));
  localStorage.setItem(STORAGE_ACTIVE_WIKI, String(activeWiki));
}

function updateTabIndicators() {
  document.querySelectorAll(".wiki-tab").forEach((btn) => {
    const w = Number(btn.dataset.wiki);
    const tab = wikiTabs[w];
    const has = tab.matched.length + tab.unknown.length > 0;
    btn.classList.toggle("has-data", has);
  });
}

function renderCheckButtons(siteName, flags) {
  const f = flags[siteName] || {};
  const defs = [
    { flag: "visited", title: t("flagVisited"), icon: "visited" },
    { flag: "reviewed", title: t("flagReviewed"), icon: "reviewed" },
    { flag: "key", title: t("flagKey"), icon: "key" },
  ];

  return defs
    .map((d) => {
      const active = f[d.flag] ? "active" : "";
      return `<button type="button" class="check-btn ${active}" data-site="${escapeHtml(siteName)}" data-flag="${d.flag}" title="${escapeHtml(d.title)}" aria-label="${escapeHtml(d.title)}" aria-pressed="${!!f[d.flag]}">${svgIcon(d.icon)}</button>`;
    })
    .join("");
}

function renderSiteRows(sites, flags) {
  if (!sites.length) return "";

  const rows = sites
    .map((site) => {
      const statusClass = `status-${site.status}`;
      const label = statusLabel(site.status);
      const activeNow =
        site.status !== "unknown" && isCurrentlyActive(site)
          ? ` <span style="color:var(--green)" title="${escapeHtml(t("activeNow"))}">●</span>`
          : "";

      return `<tr>
        <td class="site-name">${escapeHtml(site.name)}${activeNow}</td>
        <td class="site-time">${escapeHtml(formatTimeWindow(site.time))}</td>
        <td class="site-status ${statusClass}">${escapeHtml(label)}</td>
        <td><div class="checks">${renderCheckButtons(site.name, flags)}</div></td>
      </tr>`;
    })
    .join("");

  return `<table class="site-table">
    <thead>
      <tr>
        <th>${escapeHtml(t("colSite"))}</th>
        <th>${escapeHtml(t("colTime"))}</th>
        <th>${escapeHtml(t("colStatus"))}</th>
        <th>${escapeHtml(t("colProgress"))}</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderCurrentTab() {
  const flags = loadFlags();
  const container = document.getElementById("tracker-results");
  const tab = wikiTabs[activeWiki];
  const matched = sortSites(tab.matched);
  const unknown = tab.unknown.map((name) => ({
    name,
    status: "unknown",
    time: null,
    inputName: name,
  }));

  const parts = [];

  if (matched.length) {
    parts.push(`
      <div class="results-section">
        <div class="results-section-title">
          Deep Wiki ${activeWiki}
          <span class="count">(${matched.length})</span>
        </div>
        ${renderSiteRows(matched, flags)}
      </div>
    `);
  }

  if (unknown.length) {
    parts.push(`
      <div class="results-section unknown">
        <div class="results-section-title">
          ${escapeHtml(t("unknownSection"))}
          <span class="count">(${unknown.length})</span>
        </div>
        ${renderSiteRows(unknown, flags)}
      </div>
    `);
  }

  if (!parts.length) {
    container.innerHTML = `<p class="placeholder">${escapeHtml(t("emptyTab", { n: activeWiki }))}</p>`;
    document.getElementById("match-summary").textContent = "";
  } else {
    container.innerHTML = parts.join("");
    const total = matched.length + unknown.length;
    document.getElementById("match-summary").textContent =
      t("matchSummary", { n: activeWiki, matched: matched.length, total }) +
      (unknown.length ? t("unknownCount", { n: unknown.length }) : "");
  }

  updateTabIndicators();
}

function switchWiki(wiki) {
  const siteInput = document.getElementById("site-input");
  wikiTabs[activeWiki].input = siteInput.value;

  activeWiki = wiki;
  siteInput.value = wikiTabs[activeWiki].input;
  siteInput.placeholder = t("sitePlaceholder", { n: activeWiki });

  document.querySelectorAll(".wiki-tab").forEach((btn) => {
    const on = Number(btn.dataset.wiki) === activeWiki;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", String(on));
  });

  saveWikiTabs();
  renderCurrentTab();
}

function analyze() {
  const siteInput = document.getElementById("site-input");
  const raw = siteInput.value;
  wikiTabs[activeWiki].input = raw;

  const names = parsePastedLines(raw);
  if (!names.length) {
    wikiTabs[activeWiki].matched = [];
    wikiTabs[activeWiki].unknown = [];
    saveWikiTabs();
    renderCurrentTab();
    return;
  }

  const { matched, unknown } = matchSites(names);
  wikiTabs[activeWiki].matched = matched;
  wikiTabs[activeWiki].unknown = unknown;
  saveWikiTabs();
  renderCurrentTab();
}

function clearCurrentTab() {
  wikiTabs[activeWiki] = { input: "", matched: [], unknown: [] };
  document.getElementById("site-input").value = "";
  saveWikiTabs();
  renderCurrentTab();
}

/* ==========================================================================
   Miners / Info panels
   ========================================================================== */

function renderMiners() {
  const el = document.getElementById("miners-list");
  const html = Object.values(MINERS)
    .map((tier) => {
      const rows = tier.computers
        .map((c, i) => {
          const top = i < 3 ? "top" : "";
          return `<div class="miner-row ${top}">
            <span class="miner-name">${escapeHtml(c.name)}</span>
            <span class="miner-rate">${c.rate.toFixed(2)} DOS/min</span>
          </div>`;
        })
        .join("");

      return `<div class="tier-block">
        <div class="tier-label">${escapeHtml(tier.label)}<span class="tier-cost">· ${escapeHtml(t(tier.costKey))}</span></div>
        ${rows}
      </div>`;
    })
    .join("");

  el.innerHTML = html;
}

function renderHelp() {
  const list = document.getElementById("help-list");
  list.innerHTML = t("help")
    .map(
      ([label, text]) =>
        `<li><strong>${escapeHtml(label)}</strong> ${escapeHtml(text)}</li>`
    )
    .join("");
}

function renderFaq() {
  const list = document.getElementById("faq-qa-list");
  list.innerHTML = t("faq")
    .map(
      (item) =>
        `<li class="faq-item"><strong class="faq-q">${escapeHtml(item.q)}</strong><span class="faq-a">${escapeHtml(item.a)}</span></li>`
    )
    .join("");
}

function isBombSpoilerAccepted() {
  return localStorage.getItem(STORAGE_BOMB_SPOILER) === "1";
}

function setBombSpoilerAccepted(accepted) {
  localStorage.setItem(STORAGE_BOMB_SPOILER, accepted ? "1" : "0");
}

function renderThreats() {
  const body = document.getElementById("threats-body");
  const revealed = isBombSpoilerAccepted();

  body.innerHTML = t("threats")
    .map((th) => {
      if (th.spoiler && !revealed) {
        return `<tr class="threat-spoiler-row">
          <td class="threat-name">
            ${escapeHtml(th.name)}
            <span class="spoiler-badge">${escapeHtml(t("spoilerLabel"))}</span>
          </td>
          <td colspan="2" class="threat-spoiler-cell">
            <span class="spoiler-hint">${escapeHtml(t("spoilerHidden"))}</span>
            <button type="button" class="btn btn-ghost spoiler-reveal-btn" data-spoiler-action="reveal">
              ${escapeHtml(t("spoilerAccept"))}
            </button>
          </td>
        </tr>`;
      }

      const hideBtn = th.spoiler
        ? ` <button type="button" class="spoiler-hide-btn" data-spoiler-action="hide" title="${escapeHtml(t("spoilerHide"))}">[${escapeHtml(t("spoilerHide"))}]</button>`
        : "";

      return `<tr class="${th.spoiler ? "threat-spoiler-revealed" : ""}">
        <td class="threat-name">
          ${escapeHtml(th.name)}
          ${th.spoiler ? `<span class="spoiler-badge">${escapeHtml(t("spoilerLabel"))}</span>` : ""}
          ${hideBtn}
        </td>
        <td>${escapeHtml(th.cue)}</td>
        <td>${th.counter}</td>
      </tr>`;
    })
    .join("");
}

function applyStaticI18n() {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  document.getElementById("site-input").placeholder = t("sitePlaceholder", { n: activeWiki });
  document.getElementById("notebook-input").placeholder = t("notebookPlaceholder");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // restore info tab labels after data-i18n overwrite — already handled by data-i18n
  document.querySelectorAll(".info-tab").forEach((btn) => {
    const on = btn.dataset.info === activeInfoTab;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", String(on));
  });
  document.querySelectorAll(".info-pane").forEach((pane) => {
    pane.classList.toggle("active", pane.id === `info-${activeInfoTab}`);
  });
}

function applyLanguage() {
  localStorage.setItem(STORAGE_LANG, lang);
  applyStaticI18n();
  renderHelp();
  renderFaq();
  renderThreats();
  renderMiners();
  renderCurrentTab();
  syncNotebook();
}

function setLanguage(next) {
  if (next !== "pl" && next !== "en") return;
  lang = next;
  applyLanguage();
}

/* ==========================================================================
   Smart Notebook
   ========================================================================== */

function looksLikeKey(token) {
  if (!KEY_TEST.test(token)) return false;
  const hasDigit = /\d/.test(token);
  const hasUpper = /[A-Z]/.test(token);
  const hasLower = /[a-z]/.test(token);
  if (hasDigit) return true;
  if (hasUpper && hasLower && token.length >= 10) return true;
  if (/^[A-Z0-9_-]{8,}$/.test(token)) return true;
  return false;
}

function extractKeys(text) {
  const found = new Set();
  const re = new RegExp(KEY_REGEX.source, "g");
  let m;
  while ((m = re.exec(text)) !== null) {
    if (looksLikeKey(m[0])) found.add(m[0]);
  }
  return [...found];
}

function highlightNotes(text) {
  const re = new RegExp(KEY_REGEX.source, "g");
  let result = "";
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    result += escapeHtml(text.slice(last, m.index));
    if (looksLikeKey(m[0])) {
      result += `<mark class="key-mark">${escapeHtml(m[0])}</mark>`;
    } else {
      result += escapeHtml(m[0]);
    }
    last = m.index + m[0].length;
  }
  result += escapeHtml(text.slice(last));
  if (text.endsWith("\n")) result += "\n";
  return result || " ";
}

function syncNotebook() {
  const input = document.getElementById("notebook-input");
  const highlight = document.getElementById("notebook-highlight");
  const keysEl = document.getElementById("detected-keys");
  if (!input) return;
  const text = input.value;

  highlight.innerHTML = highlightNotes(text);
  highlight.scrollTop = input.scrollTop;
  highlight.scrollLeft = input.scrollLeft;

  const keys = extractKeys(text);
  if (keys.length) {
    keysEl.classList.add("has-keys");
    keysEl.innerHTML =
      `${escapeHtml(t("detectedKeys"))} ` +
      keys.map((k) => `<span class="key-chip">${escapeHtml(k)}</span>`).join("");
  } else {
    keysEl.classList.remove("has-keys");
    keysEl.textContent = "";
  }

  localStorage.setItem(STORAGE_NOTES, text);
}

/* ==========================================================================
   Clock & events
   ========================================================================== */

function tickClock() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("clock").textContent =
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function init() {
  const savedLang = localStorage.getItem(STORAGE_LANG);
  lang = savedLang === "en" ? "en" : "pl";

  tickClock();
  setInterval(tickClock, 1000);

  loadWikiTabs();
  const savedWiki = Number(localStorage.getItem(STORAGE_ACTIVE_WIKI) || "1");
  activeWiki = [1, 2, 3].includes(savedWiki) ? savedWiki : 1;

  const siteInput = document.getElementById("site-input");
  const notebook = document.getElementById("notebook-input");

  siteInput.value = wikiTabs[activeWiki].input;

  document.querySelectorAll(".wiki-tab").forEach((btn) => {
    const on = Number(btn.dataset.wiki) === activeWiki;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", String(on));
    btn.addEventListener("click", () => switchWiki(Number(btn.dataset.wiki)));
  });

  const savedNotes = localStorage.getItem(STORAGE_NOTES);
  if (savedNotes) notebook.value = savedNotes;

  applyLanguage();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  document.getElementById("threats-body").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-spoiler-action]");
    if (!btn) return;
    setBombSpoilerAccepted(btn.dataset.spoilerAction === "reveal");
    renderThreats();
  });

  document.getElementById("analyze-btn").addEventListener("click", analyze);
  document.getElementById("clear-tracker-btn").addEventListener("click", clearCurrentTab);

  siteInput.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") analyze();
  });

  siteInput.addEventListener("input", () => {
    wikiTabs[activeWiki].input = siteInput.value;
    saveWikiTabs();
  });

  document.getElementById("tracker-results").addEventListener("click", (e) => {
    const btn = e.target.closest(".check-btn");
    if (!btn) return;
    const site = btn.dataset.site;
    const flag = btn.dataset.flag;
    const flags = loadFlags();
    if (!flags[site]) flags[site] = {};
    flags[site][flag] = !flags[site][flag];
    saveFlags(flags);
    btn.classList.toggle("active", !!flags[site][flag]);
    btn.setAttribute("aria-pressed", String(!!flags[site][flag]));
  });

  document.querySelectorAll(".info-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeInfoTab = btn.dataset.info;
      document.querySelectorAll(".info-tab").forEach((b) => {
        const on = b.dataset.info === activeInfoTab;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", String(on));
      });
      document.querySelectorAll(".info-pane").forEach((pane) => {
        pane.classList.toggle("active", pane.id === `info-${activeInfoTab}`);
      });
    });
  });

  notebook.addEventListener("input", syncNotebook);
  notebook.addEventListener("scroll", () => {
    const highlight = document.getElementById("notebook-highlight");
    highlight.scrollTop = notebook.scrollTop;
    highlight.scrollLeft = notebook.scrollLeft;
  });

  setInterval(() => {
    if (wikiTabs[activeWiki].matched.length) renderCurrentTab();
  }, 60_000);
}

document.addEventListener("DOMContentLoaded", init);
