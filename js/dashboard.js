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
        btn.addEventListener("click", () => showView(btn.dataset.view));
    });

    // ============================================================
    // SCHEDULE RENDERING & FILTERING
    // ============================================================
    const container = document.getElementById("schedule-container");
    let activeSubject = "all";
    let activeTerm = "all";
    let activeType = "all";

    function renderSchedule() {
        const filtered = scheduleData.filter(item => {
            if (activeSubject !== "all" && item.subject !== activeSubject) return false;
            if (activeTerm !== "all" && item.term !== parseInt(activeTerm)) return false;
            if (activeType !== "all" && item.type !== activeType) return false;
            return true;
        });

        if (filtered.length === 0) {
            container.innerHTML = '<div class="schedule-empty">No items match your filters.</div>';
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
                const subjectLabel = item.subject === "life-sciences" ? "Life Sciences" : "Geography";
                const subjectClass = item.subject === "life-sciences" ? "tag-bio" : "tag-geo";

                html += `<div class="schedule-item ${isAssessment ? "schedule-assessment" : ""}">
                    <div class="schedule-date">${item.dates}</div>
                    <div class="schedule-content-wrap">
                        <div class="schedule-tags">
                            <span class="sched-tag ${subjectClass}">${subjectLabel}</span>
                            ${isAssessment ? '<span class="sched-tag tag-assess">Assessment</span>' : ""}
                        </div>
                        <p class="schedule-text">${item.content}</p>
                        ${item.extra ? `<p class="schedule-extra">${item.extra}</p>` : ""}
                        ${hasLink ? `<a href="${item.link}" class="schedule-link">Study this topic &rarr;</a>` : ""}
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
