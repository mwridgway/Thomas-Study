document.addEventListener("DOMContentLoaded", () => {
    // View navigation
    const navButtons = document.querySelectorAll(".nav-btn");
    const views = document.querySelectorAll(".view");

    function showView(viewId) {
        views.forEach(v => v.classList.remove("active"));
        navButtons.forEach(b => b.classList.remove("active"));
        const target = document.getElementById("view-" + viewId);
        if (target) target.classList.add("active");
        const btn = document.querySelector(`.nav-btn[data-view="${viewId}"]`);
        if (btn) btn.classList.add("active");
        window.scrollTo(0, 0);
    }

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            showView(btn.dataset.view);
            btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        });
    });

    // ============================================================
    // SCHEDULE RENDERING & FILTERING
    // ============================================================
    const container = document.getElementById("schedule-container");
    let activeSubject = "all";
    let activeTerm = "all";
    let activeType = "all";

    // Subject display config
    const subjectConfig = {
        "life-sciences": { label: "Life Sciences", tag: "tag-bio", icon: "🧬" },
        "cat":           { label: "CAT", tag: "tag-cat", icon: "💻" },
        "math-lit":      { label: "Math Literacy", tag: "tag-math", icon: "🔢" },
        "afrikaans":     { label: "Afrikaans", tag: "tag-afr", icon: "📝" },
        "english":       { label: "English HL", tag: "tag-eng", icon: "📖" },
        "geography":     { label: "Geography", tag: "tag-geo", icon: "🌍" },
        "lo":            { label: "Life Orientation", tag: "tag-lo", icon: "🧭" }
    };

    function getToday() {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return now;
    }

    function renderSchedule() {
        const today = getToday();

        const filtered = scheduleData.filter(item => {
            // Dynamic: only show today or future
            if (item.sortDate) {
                const itemDate = new Date(item.sortDate + "T00:00:00");
                if (itemDate < today) return false;
            }
            if (activeSubject !== "all" && item.subject !== activeSubject) return false;
            if (activeTerm !== "all" && item.term !== parseInt(activeTerm)) return false;
            if (activeType !== "all" && item.type !== activeType) return false;
            return true;
        });

        // Sort by date
        filtered.sort((a, b) => {
            if (a.sortDate && b.sortDate) return a.sortDate.localeCompare(b.sortDate);
            if (a.sortDate) return -1;
            return 1;
        });

        if (filtered.length === 0) {
            container.innerHTML = '<div class="schedule-empty">No upcoming items match your filters.</div>';
            return;
        }

        // Group by term
        const grouped = {};
        filtered.forEach(item => {
            if (!grouped[item.term]) grouped[item.term] = [];
            grouped[item.term].push(item);
        });

        let html = "";
        Object.keys(grouped).sort((a, b) => a - b).forEach(term => {
            html += `<div class="schedule-term">
                <h3 class="term-heading">Term ${term}</h3>
                <div class="schedule-items">`;

            grouped[term].forEach(item => {
                const isAssessment = item.type === "assessment";
                const hasLink = item.link && item.topic;
                const config = subjectConfig[item.subject] || { label: item.subject, tag: "tag-default", icon: "📚" };

                // Calculate days until
                let daysTag = "";
                if (item.sortDate) {
                    const itemDate = new Date(item.sortDate + "T00:00:00");
                    const diffDays = Math.round((itemDate - today) / (1000 * 60 * 60 * 24));
                    if (diffDays === 0) {
                        daysTag = '<span class="sched-tag tag-today">TODAY</span>';
                    } else if (diffDays === 1) {
                        daysTag = '<span class="sched-tag tag-tomorrow">TOMORROW</span>';
                    } else if (diffDays <= 7) {
                        daysTag = `<span class="sched-tag tag-soon">${diffDays} days</span>`;
                    }
                }

                html += `<div class="schedule-item ${isAssessment ? "schedule-assessment" : ""}">
                    <div class="schedule-date">${item.dates}</div>
                    <div class="schedule-content-wrap">
                        <div class="schedule-tags">
                            <span class="sched-tag ${config.tag}">${config.icon} ${config.label}</span>
                            ${isAssessment ? '<span class="sched-tag tag-assess">Assessment</span>' : ""}
                            ${daysTag}
                        </div>
                        <p class="schedule-text">${item.content}</p>
                        ${item.extra ? `<p class="schedule-extra">${item.extra}</p>` : ""}
                        ${item.link ? `<a href="${item.link}" class="schedule-link">Study this topic &rarr;</a>` : ""}
                    </div>
                </div>`;
            });

            html += `</div></div>`;
        });

        container.innerHTML = html;
    }

    // Filter handlers
    document.querySelectorAll("[data-schedfilter]").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".filter-buttons").querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeSubject = btn.dataset.schedfilter;
            renderSchedule();
        });
    });

    document.querySelectorAll("[data-termfilter]").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".filter-buttons").querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeTerm = btn.dataset.termfilter;
            renderSchedule();
        });
    });

    document.querySelectorAll("[data-typefilter]").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".filter-buttons").querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeType = btn.dataset.typefilter;
            renderSchedule();
        });
    });

    renderSchedule();
});
