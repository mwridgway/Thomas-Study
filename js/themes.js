// ============================================================
// THEME PICKER
// Three themes: Default (clean dark), Chuck (spy-tech), Orange Orange (frozen yoghurt)
// ============================================================

const themes = {
    default: {
        name: "Default",
        icon: "🎓",
        vars: {
            "--bg": "#0f1117",
            "--bg-card": "#1a1d27",
            "--bg-card-hover": "#22263a",
            "--bg-section": "#161922",
            "--text": "#e4e6ed",
            "--text-muted": "#9ba1b0",
            "--accent": "#4f8cff",
            "--accent-light": "#6fa3ff",
            "--accent-dim": "#2a4a8a",
            "--green": "#34d399",
            "--green-dim": "#1a3a2a",
            "--red": "#f87171",
            "--red-dim": "#3a1a1a",
            "--yellow": "#fbbf24",
            "--yellow-dim": "#3a3020",
            "--nerd-green": "#34d399",
            "--nerd-grey": "#2a2e3d",
            "--buymore-blue": "#4f8cff",
            "--buymore-yellow": "#fbbf24",
            "--spy-red": "#f87171",
            "--border": "#2a2e3d",
            "--shadow": "0 2px 12px rgba(0,0,0,0.3)",
            "--header-bg": "linear-gradient(135deg, #1a1d27 0%, #1e2235 100%)",
            "--header-border": "#2a2e3d",
            "--header-glow": "none",
            "--scanline-color": "transparent"
        },
        labels: {
            title: "Study Hub",
            subtitle: "Grade 12 NSC — Thomas's Revision Dashboard",
            welcome: "Welcome, Thomas",
            welcomeSub: "Choose a subject to start revising. Each module has structured notes, flashcards, quizzes, and Feynman self-test mode.",
            navHome: "🏠 Subjects",
            navSchedule: "📅 Term Schedule",
            tipTitle: "📌 Study Strategy Tip",
            tipBody: '<strong>Interleave your subjects.</strong> Don\'t study one topic for hours. Alternate between subjects in the same session — it\'s harder but far more effective for long-term retention. Use the <strong>2-3-5-7 method</strong>: review material on days 2, 3, 5, and 7.',
            tipQuote: "",
            examTitle: "📅 Final Exam Countdown",
            examOverallLabel: "days until first exam",
            scheduleTitle: "Grade 12 Term Schedule",
            scheduleSub: "Filter by subject or term to see what's coming up. Click a topic to jump to the relevant study module.",
            studyBtn: "Study →",
            footerLine1: "Thomas's Study Hub — Grade 12 NSC",
            footerLine2: "Study tip: Use spaced repetition — review on days 2, 3, 5, and 7 after first studying.",
            typeLabels: { test: "TEST", practical: "PRACTICAL", assignment: "ASSIGNMENT", event: "EVENT", exam: "EXAM" },
            bannerBtn: "Study →",
            bannerUpcoming: "Also coming up:"
        }
    },
    chuck: {
        name: "Chuck",
        icon: "⚡",
        vars: {
            "--bg": "#0a0d10",
            "--bg-card": "#141920",
            "--bg-card-hover": "#1c2430",
            "--bg-section": "#111720",
            "--text": "#e4e6ed",
            "--text-muted": "#8a94a8",
            "--accent": "#00c853",
            "--accent-light": "#4cdc82",
            "--accent-dim": "#0a3a1a",
            "--green": "#00c853",
            "--green-dim": "#0a2a14",
            "--red": "#ff3d3d",
            "--red-dim": "#3a1010",
            "--yellow": "#ffd740",
            "--yellow-dim": "#3a3015",
            "--nerd-green": "#00c853",
            "--nerd-grey": "#2a3040",
            "--buymore-blue": "#1565c0",
            "--buymore-yellow": "#ffd740",
            "--spy-red": "#ff3d3d",
            "--border": "#1e2838",
            "--shadow": "0 2px 16px rgba(0,200,83,0.08)",
            "--header-bg": "linear-gradient(135deg, #0a0d10 0%, #111720 50%, #0a1a10 100%)",
            "--header-border": "#00c853",
            "--header-glow": "0 2px 20px rgba(0,200,83,0.15)",
            "--scanline-color": "rgba(0,200,83,0.015)"
        },
        labels: {
            title: "⚡ The Intersect",
            subtitle: "Nerd Herd Study Division — Agent Bartowski, Grade 12 NSC",
            welcome: "Welcome back, Chuck",
            welcomeSub: "Time to flash on some knowledge. Pick a mission below — each one's loaded with intel, flashcards, quizzes, and Feynman debrief mode.",
            navHome: "🏠 Castle",
            navSchedule: "📡 Missions",
            tipTitle: "🎯 Handler's Briefing",
            tipBody: '<strong>Don\'t stay in the car, Chuck.</strong> Interleave your missions — rotate between subjects in the same session. It\'s harder but far more effective for long-term retention. Use the <strong>2-3-5-7 protocol</strong>: review intel on days 2, 3, 5, and 7 after first exposure.',
            tipQuote: '"Trust me, Chuck." — Sarah Walker 🕶️',
            examTitle: "🕐 Operation: Final Countdown",
            examOverallLabel: "days until Operation: NSC",
            scheduleTitle: "📡 Mission Timeline",
            scheduleSub: "Upcoming operations, sorted by priority. Filter by division or term. Click a topic to access the relevant intel.",
            studyBtn: "Flash on it →",
            footerLine1: "The Intersect — Nerd Herd Study Division — Grade 12 NSC",
            footerLine2: '"Guys, I know kung fu." — Except it\'s Biology. Maintained by Sarah Walker 🕶️',
            typeLabels: { test: "MISSION", practical: "FIELD OP", assignment: "INTEL DUE", event: "BRIEFING", exam: "FINAL OP" },
            bannerBtn: "Flash on it →",
            bannerUpcoming: "Incoming missions:"
        }
    },
    orangeorange: {
        name: "Orange Orange",
        icon: "🍊",
        vars: {
            "--bg": "#1a0f08",
            "--bg-card": "#261a10",
            "--bg-card-hover": "#332214",
            "--bg-section": "#1f1409",
            "--text": "#fce4c8",
            "--text-muted": "#c4a07a",
            "--accent": "#ff8c00",
            "--accent-light": "#ffab40",
            "--accent-dim": "#4a2800",
            "--green": "#ff6d00",
            "--green-dim": "#3a1f00",
            "--red": "#ff3d3d",
            "--red-dim": "#3a1010",
            "--yellow": "#ffca28",
            "--yellow-dim": "#3a3010",
            "--nerd-green": "#ff8c00",
            "--nerd-grey": "#3a2a1a",
            "--buymore-blue": "#ff6d00",
            "--buymore-yellow": "#ffca28",
            "--spy-red": "#ff3d3d",
            "--border": "#3a2810",
            "--shadow": "0 2px 16px rgba(255,140,0,0.1)",
            "--header-bg": "linear-gradient(135deg, #1a0f08 0%, #2a1508 50%, #331a06 100%)",
            "--header-border": "#ff8c00",
            "--header-glow": "0 2px 20px rgba(255,140,0,0.2)",
            "--scanline-color": "rgba(255,140,0,0.01)"
        },
        labels: {
            title: "🍊 Orange Orange",
            subtitle: "Frozen Yoghurt & Covert Study Ops — Grade 12 NSC",
            welcome: "Welcome to Orange Orange",
            welcomeSub: "Grab a yoghurt and crack open your books. The best cover for a spy is a student who actually studies. Pick a flavour below.",
            navHome: "🍊 Counter",
            navSchedule: "📋 Orders",
            tipTitle: "🍦 Today's Special",
            tipBody: '<strong>Mix your flavours.</strong> Don\'t stick to one subject for hours — swirl them together like a good frozen yoghurt combo. Alternate subjects in the same session. Use the <strong>2-3-5-7 recipe</strong>: taste-test your material on days 2, 3, 5, and 7.',
            tipQuote: '"Best frozen yoghurt in Burbank. Also, study harder." — Orange Orange Management',
            examTitle: "🍊 Closing Time Countdown",
            examOverallLabel: "days until the big melt",
            scheduleTitle: "📋 Order Queue",
            scheduleSub: "Upcoming orders, sorted by urgency. Filter by flavour or batch. Click a topic to prep the ingredients.",
            studyBtn: "Serve it up →",
            footerLine1: "Orange Orange — The Best Frozen Yoghurt & Study Hub in Burbank",
            footerLine2: '"Nobody suspects the yoghurt shop." Maintained by Sarah Walker 🕶️',
            typeLabels: { test: "RUSH ORDER", practical: "TASTING", assignment: "PREP WORK", event: "SPECIAL", exam: "GRAND OPENING" },
            bannerBtn: "Serve it up →",
            bannerUpcoming: "Next orders:"
        }
    }
};

// ============================================================
// THEME ENGINE
// ============================================================
function applyTheme(themeId) {
    const theme = themes[themeId];
    if (!theme) return;

    // Apply CSS variables
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });

    // Apply header styles
    const header = document.querySelector("header");
    if (header) {
        header.style.background = theme.vars["--header-bg"];
        header.style.borderBottomColor = theme.vars["--header-border"];
        header.style.boxShadow = theme.vars["--header-glow"];
    }

    // Apply scanlines
    document.body.classList.remove("theme-default", "theme-chuck", "theme-orangeorange");
    document.body.classList.add("theme-" + themeId);

    // Apply labels
    const labels = theme.labels;
    const el = (sel) => document.querySelector(sel);

    if (el("#theme-title")) el("#theme-title").innerHTML = labels.title;
    if (el("#theme-subtitle")) el("#theme-subtitle").textContent = labels.subtitle;
    if (el("#theme-welcome")) el("#theme-welcome").textContent = labels.welcome;
    if (el("#theme-welcome-sub")) el("#theme-welcome-sub").textContent = labels.welcomeSub;
    if (el("#theme-nav-home")) el("#theme-nav-home").innerHTML = labels.navHome;
    if (el("#theme-nav-schedule")) el("#theme-nav-schedule").innerHTML = labels.navSchedule;
    if (el("#theme-tip-title")) el("#theme-tip-title").innerHTML = labels.tipTitle;
    if (el("#theme-tip-body")) el("#theme-tip-body").innerHTML = labels.tipBody;
    if (el("#theme-tip-quote")) {
        el("#theme-tip-quote").textContent = labels.tipQuote;
        el("#theme-tip-quote").style.display = labels.tipQuote ? "block" : "none";
    }
    if (el("#theme-schedule-title")) el("#theme-schedule-title").textContent = labels.scheduleTitle;
    if (el("#theme-schedule-sub")) el("#theme-schedule-sub").textContent = labels.scheduleSub;
    if (el("#theme-footer-1")) el("#theme-footer-1").textContent = labels.footerLine1;
    if (el("#theme-footer-2")) el("#theme-footer-2").innerHTML = labels.footerLine2;

    // Update theme picker active state
    document.querySelectorAll(".theme-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.theme === themeId);
    });

    // Save preference
    localStorage.setItem("studyhub-theme", themeId);

    // Store labels globally for dynamic components
    window._themeLabels = labels;
}

function getCurrentThemeLabels() {
    return window._themeLabels || themes.default.labels;
}

// ============================================================
// INIT
// ============================================================
(function initTheme() {
    const saved = localStorage.getItem("studyhub-theme") || "chuck";
    applyTheme(saved);

    // Bind theme buttons
    document.querySelectorAll(".theme-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            applyTheme(btn.dataset.theme);
            // Re-render dynamic components
            if (typeof renderDeadlineBanner === "function") renderDeadlineBanner();
            if (typeof renderExamCountdown === "function") renderExamCountdown();
        });
    });
})();
