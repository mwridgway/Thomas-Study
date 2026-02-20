// ============================================================
// NSC FINAL EXAM COUNTDOWN
// 2026 NSC exam dates — update when official timetable is released
// Sarah Walker maintains this
// ============================================================
const examDates = [
    {
        subject: "English HL",
        icon: "📖",
        papers: [
            { name: "Paper 1 (Language)", date: "2026-10-28" },
            { name: "Paper 2 (Literature)", date: "2026-11-02" },
            { name: "Paper 3 (Writing)", date: "2026-11-09" }
        ],
        color: "#fb923c"
    },
    {
        subject: "Afrikaans",
        icon: "📝",
        papers: [
            { name: "Paper 1 (Taal)", date: "2026-10-30" },
            { name: "Paper 2 (Letterkunde)", date: "2026-11-04" },
            { name: "Paper 3 (Skryfwerk)", date: "2026-11-10" }
        ],
        color: "#c084fc"
    },
    {
        subject: "Math Literacy",
        icon: "🔢",
        papers: [
            { name: "Paper 1", date: "2026-11-03" },
            { name: "Paper 2", date: "2026-11-06" }
        ],
        color: "#fbbf24"
    },
    {
        subject: "Life Sciences",
        icon: "🧬",
        papers: [
            { name: "Paper 1", date: "2026-11-11" },
            { name: "Paper 2", date: "2026-11-16" }
        ],
        color: "#34d399"
    },
    {
        subject: "Geography",
        icon: "🌍",
        papers: [
            { name: "Paper 1 (Theory)", date: "2026-11-13" },
            { name: "Paper 2 (Mapwork)", date: "2026-11-18" }
        ],
        color: "#2dd4bf"
    },
    {
        subject: "CAT",
        icon: "💻",
        papers: [
            { name: "Paper 1 (Theory)", date: "2026-11-19" },
            { name: "Paper 2 (Practical)", date: "2026-11-23" }
        ],
        color: "#60a5fa"
    },
    {
        subject: "Life Orientation",
        icon: "🧭",
        papers: [
            { name: "Common Assessment Task", date: "2026-09-15" }
        ],
        color: "#a3e635"
    }
];

// ============================================================
// RENDERER
// ============================================================
(function renderExamCountdown() {
    const container = document.getElementById("exam-countdown");
    if (!container) return;

    const now = new Date();
    now.setHours(0, 0, 0, 0);

    // Sort subjects by their first exam date
    const sorted = [...examDates].sort((a, b) => {
        return a.papers[0].date.localeCompare(b.papers[0].date);
    });

    // Filter out subjects whose last exam has passed
    const upcoming = sorted.filter(s => {
        const lastPaper = s.papers[s.papers.length - 1];
        const lastDate = new Date(lastPaper.date + "T00:00:00");
        return lastDate >= now;
    });

    if (upcoming.length === 0) {
        container.innerHTML = '<div class="exam-done"><h3>🎓 Mission Accomplished!</h3><p>The Intersect is complete. You made it, Chuck.</p></div>';
        return;
    }

    // Find earliest exam date for the overall countdown
    const firstExamDate = new Date(upcoming[0].papers[0].date + "T00:00:00");
    const daysToFirst = Math.round((firstExamDate - now) / (1000 * 60 * 60 * 24));

    let html = `
        <div class="exam-header">
            <h3>🕐 Operation: Final Countdown</h3>
            <div class="exam-overall">
                <span class="exam-overall-days">${daysToFirst}</span>
                <span class="exam-overall-label">days until Operation: NSC</span>
            </div>
            <p class="exam-note">⚠️ Dates are estimated — will update when official 2026 timetable is released</p>
        </div>
        <div class="exam-grid">
    `;

    upcoming.forEach(subject => {
        const firstPaper = subject.papers[0];
        const firstDate = new Date(firstPaper.date + "T00:00:00");
        const days = Math.round((firstDate - now) / (1000 * 60 * 60 * 24));

        // Progress bar: 365 days = 0%, 0 days = 100%
        const maxDays = 300;
        const progress = Math.min(100, Math.max(0, ((maxDays - days) / maxDays) * 100));

        let urgencyClass = "exam-relaxed";
        if (days <= 30) urgencyClass = "exam-critical";
        else if (days <= 60) urgencyClass = "exam-warning";
        else if (days <= 120) urgencyClass = "exam-approaching";

        const papersHtml = subject.papers.map(p => {
            const pDate = new Date(p.date + "T00:00:00");
            const pDays = Math.round((pDate - now) / (1000 * 60 * 60 * 24));
            const dateStr = pDate.toLocaleDateString("en-ZA", { day: "numeric", month: "short" });
            return `<div class="exam-paper">
                <span class="exam-paper-name">${p.name}</span>
                <span class="exam-paper-info">${dateStr} · ${pDays}d</span>
            </div>`;
        }).join("");

        html += `
            <div class="exam-card ${urgencyClass}">
                <div class="exam-card-header">
                    <span class="exam-icon">${subject.icon}</span>
                    <div class="exam-subject-info">
                        <div class="exam-subject-name">${subject.subject}</div>
                        <div class="exam-days-left">
                            <span class="exam-days-number">${days}</span>
                            <span class="exam-days-text">days</span>
                        </div>
                    </div>
                </div>
                <div class="exam-progress-bar">
                    <div class="exam-progress-fill" style="width: ${progress}%; background: ${subject.color};"></div>
                </div>
                <div class="exam-papers">${papersHtml}</div>
            </div>
        `;
    });

    html += "</div>";
    container.innerHTML = html;
})();
