// ============================================================
// UPCOMING DEADLINES
// Update this array as new dates come in.
// Sarah Walker maintains this automatically.
// ============================================================
const deadlines = [
    {
        date: "2026-02-25",
        title: "Life Sciences Test",
        subject: "Life Sciences",
        detail: "DNA + Meiosis",
        icon: "🧬",
        link: "life-sciences.html",
        type: "test"
    },
    {
        date: "2026-03-02",
        title: "Life Sciences Practical 1",
        subject: "Life Sciences",
        detail: "Plant Hormones (30 marks, in-class)",
        icon: "🧬",
        link: null,
        type: "practical"
    },
    {
        date: "2026-03-10",
        title: "Life Sciences Practical 2",
        subject: "Life Sciences",
        detail: "Blood Groups",
        icon: "🧬",
        link: null,
        type: "practical"
    },
    {
        date: "2026-03-12",
        title: "Maths Olympiad",
        subject: "Math Literacy",
        detail: "R50 entry, last period (optional)",
        icon: "🔢",
        link: null,
        type: "event"
    },
    {
        date: "2026-03-24",
        title: "Genetics Assignment Due",
        subject: "Life Sciences",
        detail: "Genetics assignment submission",
        icon: "🧬",
        link: null,
        type: "assignment"
    },
    {
        date: "2026-04-18",
        title: "Stellenbosch Open Day",
        subject: "Life Orientation",
        detail: "On-campus, 08:00–15:00 (tickets from 18 March on Quicket)",
        icon: "🎓",
        link: null,
        type: "event"
    }
];

// ============================================================
// DEADLINE BANNER RENDERER
// ============================================================
(function renderDeadlineBanner() {
    const banner = document.getElementById("deadline-banner");
    if (!banner) return;

    const now = new Date();
    now.setHours(0, 0, 0, 0);

    // Find next upcoming deadline
    const upcoming = deadlines
        .map(d => ({ ...d, dateObj: new Date(d.date + "T00:00:00") }))
        .filter(d => d.dateObj >= now)
        .sort((a, b) => a.dateObj - b.dateObj);

    if (upcoming.length === 0) {
        banner.classList.add("hidden");
        return;
    }

    const next = upcoming[0];
    const diffMs = next.dateObj - now;
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    let urgency = "banner-normal";
    let timeText = "";

    if (diffDays === 0) {
        timeText = "TODAY";
        urgency = "banner-urgent";
    } else if (diffDays === 1) {
        timeText = "TOMORROW";
        urgency = "banner-urgent";
    } else if (diffDays <= 3) {
        timeText = `in ${diffDays} days`;
        urgency = "banner-warning";
    } else if (diffDays <= 7) {
        timeText = `in ${diffDays} days`;
        urgency = "banner-soon";
    } else {
        timeText = `in ${diffDays} days`;
    }

    const typeLabels = {
        test: "MISSION",
        practical: "FIELD OP",
        assignment: "INTEL DUE",
        event: "BRIEFING",
        exam: "FINAL OP"
    };

    const typeLabel = typeLabels[next.type] || "DUE";

    banner.className = `deadline-banner ${urgency}`;
    banner.innerHTML = `
        <div class="banner-icon">${next.icon}</div>
        <div class="banner-content">
            <div class="banner-top">
                <span class="banner-type">${typeLabel}</span>
                <span class="banner-countdown">${timeText}</span>
            </div>
            <div class="banner-title">${next.title}</div>
            <div class="banner-detail">${next.detail} &mdash; ${next.subject}</div>
        </div>
        ${next.link ? `<a href="${next.link}" class="banner-action">Flash on it &rarr;</a>` : ""}
    `;
    banner.classList.remove("hidden");

    // Also show next 2 if within 14 days
    const extras = upcoming.slice(1, 3).filter(d => {
        const days = Math.round((d.dateObj - now) / (1000 * 60 * 60 * 24));
        return days <= 14;
    });

    if (extras.length > 0) {
        const upcomingHtml = extras.map(d => {
            const days = Math.round((d.dateObj - now) / (1000 * 60 * 60 * 24));
            const dateStr = d.dateObj.toLocaleDateString("en-ZA", { day: "numeric", month: "short" });
            return `<div class="banner-upcoming-item">
                <span class="banner-upcoming-icon">${d.icon}</span>
                <span class="banner-upcoming-text">${d.title}</span>
                <span class="banner-upcoming-date">${dateStr} (${days}d)</span>
            </div>`;
        }).join("");

        banner.innerHTML += `<div class="banner-upcoming">
            <div class="banner-upcoming-label">Incoming missions:</div>
            ${upcomingHtml}
        </div>`;
    }
})();
