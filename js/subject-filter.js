// ============================================================
// SUBJECT FILTER - Shared across all pages
// ============================================================
(function () {
    "use strict";

    const ALL_SUBJECTS = [
        { id: "geography", label: "\u{1F30E} Geography" },
        { id: "life-sciences", label: "\u{1F9EC} Life Sciences" },
        { id: "it", label: "\u{1F4BB} IT / CAT" },
        { id: "maths", label: "\u{1F4CA} Mathematics" },
        { id: "afrikaans", label: "\u{1F4DD} Afrikaans" },
        { id: "english", label: "\u{1F4D6} English" },
        { id: "lo", label: "\u{1F9ED} Life Orientation" }
    ];

    const STORAGE_KEY = "enabled-subjects";
    const COOKIE_NAME = "subject-preferences";

    function getEnabledSubjects() {
        try {
            const val = localStorage.getItem(STORAGE_KEY);
            return val ? JSON.parse(val) : ALL_SUBJECTS.map(s => s.id);
        } catch { return ALL_SUBJECTS.map(s => s.id); }
    }

    function isSubjectEnabled(subject) {
        return getEnabledSubjects().includes(subject);
    }

    function saveEnabledSubjects(enabled) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(enabled));
        const expires = new Date(Date.now() + 365 * 86400000).toUTCString();
        document.cookie = COOKIE_NAME + "=" + encodeURIComponent(JSON.stringify(enabled)) + ";path=/;expires=" + expires + ";SameSite=Lax";
    }

    function getAllSubjects() { return ALL_SUBJECTS; }

    function detectPageSubject() {
        const path = location.pathname.toLowerCase();
        if (path.includes("geography")) return "geography";
        if (path.includes("life-sciences")) return "life-sciences";
        if (path.includes("it.html")) return "it";
        if (path.includes("maths")) return "maths";
        if (path.includes("afrikaans")) return "afrikaans";
        if (path.includes("english")) return "english";
        if (path.includes("lo")) return "lo";
        return null;
    }

    function injectSubjectBanner() {
        var subject = detectPageSubject();
        if (!subject) return;
        if (isSubjectEnabled(subject)) return;

        var banner = document.createElement("div");
        banner.className = "subject-disabled-banner";
        banner.innerHTML = '<span>\u26A0\uFE0F This subject is hidden from your dashboard.</span> <button class="quick-enable-btn" id="quick-enable-subject">Show on Dashboard</button>';
        var main = document.querySelector("main");
        if (main) main.prepend(banner);

        document.getElementById("quick-enable-subject").addEventListener("click", function() {
            var enabled = getEnabledSubjects();
            if (!enabled.includes(subject)) {
                enabled.push(subject);
                saveEnabledSubjects(enabled);
            }
            banner.remove();
        });
    }

    function injectPreferencesLink() {
        var headerContent = document.querySelector(".header-content");
        if (!headerContent) return;
        var path = location.pathname;
        if (path.endsWith("/") || path.endsWith("index.html") || path.endsWith("preferences.html")) return;

        var link = document.createElement("a");
        link.href = "preferences.html";
        link.className = "prefs-link";
        link.title = "Manage Subjects";
        link.innerHTML = "\u2699\uFE0F";
        headerContent.style.position = "relative";
        headerContent.appendChild(link);
    }

    function init() {
        injectPreferencesLink();
        injectSubjectBanner();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.SubjectFilter = {
        getEnabledSubjects: getEnabledSubjects,
        isSubjectEnabled: isSubjectEnabled,
        saveEnabledSubjects: saveEnabledSubjects,
        getAllSubjects: getAllSubjects,
        detectPageSubject: detectPageSubject
    };
})();
