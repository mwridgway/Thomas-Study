// CAPS Study Hub - Main Application
(function() {
  const STORAGE_KEY = "caps-study-hub";

  // State
  let state = loadState();

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return null;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function resetState() {
    localStorage.removeItem(STORAGE_KEY);
    state = null;
    location.reload();
  }

  // ---- SETUP FLOW ----
  const setupScreen = document.getElementById("setup-screen");
  const appDiv = document.getElementById("app");

  if (state && state.grade && state.subjects && state.region) {
    showApp();
  } else {
    showSetup();
  }

  function showSetup() {
    setupScreen.classList.remove("hidden");
    appDiv.classList.add("hidden");
    initSetup();
  }

  function showApp() {
    setupScreen.classList.add("hidden");
    appDiv.classList.remove("hidden");
    initApp();
  }

  function initSetup() {
    let selectedGrade = null;
    let selectedSubjects = [];

    // Step 1: Grade selection
    document.querySelectorAll(".grade-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".grade-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedGrade = parseInt(btn.dataset.grade);
        // Move to step 2
        setTimeout(() => {
          showStep(2);
          populateSubjectSelect(selectedGrade);
        }, 200);
      });
    });

    // Step 2: Subject selection
    const continueBtn = document.getElementById("subjects-continue");
    continueBtn.addEventListener("click", () => {
      if (selectedSubjects.length > 0) {
        showStep(3);
      }
    });

    // Step 3: Region selection
    document.querySelectorAll(".region-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".region-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        const region = btn.dataset.region;
        // Save and launch
        state = { grade: selectedGrade, subjects: selectedSubjects, region: region };
        saveState();
        setTimeout(() => showApp(), 300);
      });
    });

    function showStep(step) {
      document.querySelectorAll(".setup-step").forEach(s => s.classList.remove("active"));
      document.querySelector(`.setup-step[data-step="${step}"]`).classList.add("active");
    }

    function populateSubjectSelect(grade) {
      const grid = document.getElementById("subject-select-grid");
      grid.innerHTML = "";
      selectedSubjects = [];
      continueBtn.disabled = true;

      const available = CAPS_SUBJECTS.getForGrade(grade);

      if (available.compulsory.length > 0) {
        const label = document.createElement("h3");
        label.className = "select-group-label";
        label.textContent = grade <= 9 ? "Your Subjects" : "Compulsory (choose your languages)";
        grid.appendChild(label);
        available.compulsory.forEach(s => addSubjectOption(s, grade <= 9));
      }

      if (available.electives.length > 0) {
        // Group by category
        const groups = {};
        available.electives.forEach(s => {
          if (!groups[s.group]) groups[s.group] = [];
          groups[s.group].push(s);
        });
        for (const [groupName, subjects] of Object.entries(groups)) {
          const label = document.createElement("h3");
          label.className = "select-group-label";
          label.textContent = groupName;
          grid.appendChild(label);
          subjects.forEach(s => addSubjectOption(s, false));
        }
      }

      function addSubjectOption(subject, preSelected) {
        const btn = document.createElement("button");
        btn.className = "subject-select-btn" + (preSelected ? " selected" : "");
        btn.innerHTML = `<span class="ss-icon">${subject.icon}</span> ${subject.name}`;
        btn.style.setProperty("--subject-color", subject.color);
        if (preSelected) selectedSubjects.push(subject.id);

        btn.addEventListener("click", () => {
          btn.classList.toggle("selected");
          if (btn.classList.contains("selected")) {
            if (!selectedSubjects.includes(subject.id)) selectedSubjects.push(subject.id);
          } else {
            selectedSubjects = selectedSubjects.filter(id => id !== subject.id);
          }
          continueBtn.disabled = selectedSubjects.length === 0;
        });
        grid.appendChild(btn);
      }

      continueBtn.disabled = selectedSubjects.length === 0;
    }
  }

  // ---- MAIN APP ----
  function initApp() {
    // Update header
    const regionNames = {
      "national": "National", "gauteng": "Gauteng", "western-cape": "Western Cape",
      "kzn": "KwaZulu-Natal", "eastern-cape": "Eastern Cape", "free-state": "Free State",
      "limpopo": "Limpopo", "mpumalanga": "Mpumalanga", "north-west": "North West",
      "northern-cape": "Northern Cape"
    };
    document.getElementById("user-info-line").textContent =
      `Grade ${state.grade} \u00B7 ${regionNames[state.region] || state.region} \u00B7 ${state.subjects.length} subjects`;

    // Navigation
    document.querySelectorAll("#main-nav .nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#main-nav .nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        showView(btn.dataset.view);
      });
    });

    // Settings
    document.getElementById("settings-btn").addEventListener("click", openSettings);
    document.getElementById("settings-save").addEventListener("click", saveSettings);
    document.getElementById("settings-cancel").addEventListener("click", closeSettings);
    document.getElementById("settings-reset").addEventListener("click", resetState);

    // Back button
    document.getElementById("back-to-subjects").addEventListener("click", () => showView("subjects"));

    // Populate subjects grid
    renderSubjectGrid();
    populateFilters();
    initCurriculum();
  }

  function showView(viewId) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    const el = document.getElementById("view-" + viewId);
    if (el) el.classList.add("active");
  }

  function renderSubjectGrid() {
    const grid = document.getElementById("subject-grid");
    grid.innerHTML = "";
    state.subjects.forEach(subjectId => {
      const subject = CAPS_SUBJECTS.getById(subjectId);
      if (!subject) return;
      const card = document.createElement("div");
      card.className = "subject-card";
      card.style.setProperty("--subject-color", subject.color);

      const hasCurriculum = CAPS_CURRICULUM.has(subjectId, state.grade);
      card.innerHTML = `
        <div class="subject-icon">${subject.icon}</div>
        <div class="subject-info">
          <h3>${subject.name}</h3>
          <p class="subject-meta">Grade ${state.grade} CAPS</p>
          ${hasCurriculum ? '<span class="badge badge-green">Curriculum Ready</span>' : '<span class="badge badge-grey">Coming Soon</span>'}
        </div>
        <span class="subject-arrow">\u2192</span>
      `;
      card.addEventListener("click", () => openSubjectDetail(subjectId));
      grid.appendChild(card);
    });
  }

  function openSubjectDetail(subjectId) {
    const subject = CAPS_SUBJECTS.getById(subjectId);
    if (!subject) return;
    const container = document.getElementById("subject-detail-content");
    const currData = CAPS_CURRICULUM.get(subjectId, state.grade, "all");

    let html = `<div class="detail-header" style="--subject-color: ${subject.color}">
      <h2>${subject.icon} ${subject.name}</h2>
      <p>Grade ${state.grade} &mdash; CAPS Curriculum</p>
    </div>`;

    if (currData) {
      for (const [term, topics] of Object.entries(currData)) {
        if (!topics || topics.length === 0) continue;
        html += `<div class="term-block">
          <h3>Term ${term}</h3>
          <div class="topic-list">`;
        topics.forEach(t => {
          html += `<div class="topic-card">
            <div class="topic-header">
              <h4>${t.topic}</h4>
              <span class="topic-weeks">${t.weeks} weeks</span>
            </div>
            <p>${t.content}</p>
          </div>`;
        });
        html += `</div></div>`;
      }
    } else {
      html += `<div class="empty-state"><p>Curriculum content for this subject is coming soon. Check back after the next update!</p></div>`;
    }

    container.innerHTML = html;
    showView("subject-detail");
  }

  function populateFilters() {
    const paperSubject = document.getElementById("paper-subject-filter");
    const currSubject = document.getElementById("curriculum-subject-filter");
    [paperSubject, currSubject].forEach(sel => {
      sel.innerHTML = '<option value="all">All Subjects</option>';
      state.subjects.forEach(id => {
        const s = CAPS_SUBJECTS.getById(id);
        if (s) {
          const opt = document.createElement("option");
          opt.value = id;
          opt.textContent = s.name;
          sel.appendChild(opt);
        }
      });
    });

    // Set default region filter
    const regionFilter = document.getElementById("paper-region-filter");
    if (regionFilter) regionFilter.value = state.region;

    // Curriculum filter change
    document.getElementById("curriculum-subject-filter").addEventListener("change", renderCurriculum);
    document.getElementById("curriculum-term-filter").addEventListener("change", renderCurriculum);
  }

  function initCurriculum() {
    renderCurriculum();
  }

  function renderCurriculum() {
    const subjectId = document.getElementById("curriculum-subject-filter").value;
    const term = document.getElementById("curriculum-term-filter").value;
    const container = document.getElementById("curriculum-content");

    if (subjectId === "all") {
      // Show all subjects
      let html = "";
      state.subjects.forEach(id => {
        const subject = CAPS_SUBJECTS.getById(id);
        const data = CAPS_CURRICULUM.get(id, state.grade, term);
        if (!subject) return;
        html += `<div class="curriculum-subject-block">
          <h3>${subject.icon} ${subject.name}</h3>`;
        if (data) {
          for (const [t, topics] of Object.entries(data)) {
            if (!topics || topics.length === 0) continue;
            html += `<h4>Term ${t}</h4><ul>`;
            topics.forEach(topic => {
              html += `<li><strong>${topic.topic}</strong> (${topic.weeks} weeks) &mdash; ${topic.content}</li>`;
            });
            html += `</ul>`;
          }
        } else {
          html += `<p class="muted">Content coming soon</p>`;
        }
        html += `</div>`;
      });
      container.innerHTML = html || '<div class="empty-state"><p>No curriculum data yet.</p></div>';
    } else {
      const subject = CAPS_SUBJECTS.getById(subjectId);
      const data = CAPS_CURRICULUM.get(subjectId, state.grade, term);
      if (!data || !subject) {
        container.innerHTML = '<div class="empty-state"><p>No curriculum data for this subject yet.</p></div>';
        return;
      }
      let html = `<div class="curriculum-subject-block"><h3>${subject.icon} ${subject.name}</h3>`;
      for (const [t, topics] of Object.entries(data)) {
        if (!topics || topics.length === 0) continue;
        html += `<h4>Term ${t}</h4><div class="topic-list">`;
        topics.forEach(topic => {
          html += `<div class="topic-card">
            <div class="topic-header"><h4>${topic.topic}</h4><span class="topic-weeks">${topic.weeks} weeks</span></div>
            <p>${topic.content}</p>
          </div>`;
        });
        html += `</div>`;
      }
      html += `</div>`;
      container.innerHTML = html;
    }
  }

  // Settings
  function openSettings() {
    document.getElementById("settings-modal").classList.remove("hidden");
    document.getElementById("settings-grade").value = state.grade;
    document.getElementById("settings-region").value = state.region;
  }
  function closeSettings() {
    document.getElementById("settings-modal").classList.add("hidden");
  }
  function saveSettings() {
    state.grade = parseInt(document.getElementById("settings-grade").value);
    state.region = document.getElementById("settings-region").value;
    saveState();
    closeSettings();
    location.reload();
  }
})();
