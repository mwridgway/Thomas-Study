// ============================================================
// NAVIGATION
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    // View navigation
    const navButtons = document.querySelectorAll(".nav-btn");
    const views = document.querySelectorAll(".view");
    const modeCards = document.querySelectorAll(".mode-card");

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
            // Scroll active nav button into view on mobile
            btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        });
    });

    modeCards.forEach(card => {
        card.addEventListener("click", () => showView(card.dataset.target));
    });

    // Section navigation within units
    document.querySelectorAll(".section-jump").forEach(btn => {
        btn.addEventListener("click", () => {
            const parent = btn.closest("section");
            parent.querySelectorAll(".section-jump").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            parent.querySelectorAll(".content-section").forEach(s => s.classList.remove("active"));
            const section = document.getElementById(btn.dataset.section);
            if (section) section.classList.add("active");
            // Scroll active section-jump into view on mobile
            btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        });
    });

    // ============================================================
    // FLASHCARD SYSTEM
    // ============================================================
    let currentCards = [...flashcards];
    let cardIndex = 0;
    let cardConfidence = {}; // id -> "hard" | "medium" | "easy"
    const fcQuestion = document.getElementById("fc-question");
    const fcAnswer = document.getElementById("fc-answer");
    const fcCard = document.getElementById("flashcard");
    const fcProgress = document.getElementById("fc-progress");

    function loadFromStorage(key, fallback) {
        try {
            const val = localStorage.getItem(key);
            return val ? JSON.parse(val) : fallback;
        } catch { return fallback; }
    }

    // Use page-specific storage key so subjects don't share confidence data
    const p = location.pathname;
    const storageKey = "fc-confidence-" + (p.includes("life-sciences") ? "ls" : p.includes("it") ? "it" : "geo");
    cardConfidence = loadFromStorage(storageKey, {});

    function renderCard() {
        if (currentCards.length === 0) {
            fcQuestion.textContent = "No cards match this filter.";
            fcAnswer.textContent = "";
            fcProgress.textContent = "0 / 0";
            return;
        }
        fcCard.classList.remove("flipped");
        const card = currentCards[cardIndex];
        fcQuestion.textContent = card.q;
        fcAnswer.textContent = card.a;
        fcProgress.textContent = `${cardIndex + 1} / ${currentCards.length}`;
    }

    function filterCards(filter) {
        if (filter === "all") currentCards = [...flashcards];
        else if (filter === "unseen") currentCards = flashcards.filter(c => !cardConfidence[c.id]);
        else currentCards = flashcards.filter(c => c.unit === filter);
        cardIndex = 0;
        renderCard();
    }

    document.querySelectorAll(".filter-btn[data-filter]").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".filter-buttons").querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterCards(btn.dataset.filter);
        });
    });

    document.getElementById("fc-flip").addEventListener("click", () => {
        fcCard.classList.toggle("flipped");
    });

    fcCard.addEventListener("click", () => {
        fcCard.classList.toggle("flipped");
    });

    document.getElementById("fc-next").addEventListener("click", () => {
        if (currentCards.length === 0) return;
        cardIndex = (cardIndex + 1) % currentCards.length;
        renderCard();
    });

    document.getElementById("fc-prev").addEventListener("click", () => {
        if (currentCards.length === 0) return;
        cardIndex = (cardIndex - 1 + currentCards.length) % currentCards.length;
        renderCard();
    });

    document.getElementById("fc-shuffle").addEventListener("click", () => {
        for (let i = currentCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
        }
        cardIndex = 0;
        renderCard();
    });

    document.getElementById("fc-reset").addEventListener("click", () => {
        cardConfidence = {};
        localStorage.removeItem(storageKey);
        filterCards("all");
    });

    document.querySelectorAll(".confidence-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentCards.length === 0) return;
            const card = currentCards[cardIndex];
            cardConfidence[card.id] = btn.dataset.confidence;
            localStorage.setItem(storageKey, JSON.stringify(cardConfidence));

            // Brief visual feedback
            btn.classList.add("pressed");
            setTimeout(() => btn.classList.remove("pressed"), 300);

            // Auto-advance
            if (cardIndex < currentCards.length - 1) {
                cardIndex++;
                renderCard();
            }
        });
    });

    // Keyboard navigation for flashcards
    document.addEventListener("keydown", (e) => {
        const flashcardView = document.getElementById("view-flashcards");
        if (!flashcardView.classList.contains("active")) return;
        if (e.key === " " || e.key === "Enter") { e.preventDefault(); fcCard.classList.toggle("flipped"); }
        if (e.key === "ArrowRight") { cardIndex = (cardIndex + 1) % currentCards.length; renderCard(); }
        if (e.key === "ArrowLeft") { cardIndex = (cardIndex - 1 + currentCards.length) % currentCards.length; renderCard(); }
    });

    // Touch swipe for flashcards
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    const fcContainer = document.querySelector(".flashcard-container");

    fcContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
        touchStartTime = Date.now();
    }, { passive: true });

    fcContainer.addEventListener("touchend", (e) => {
        if (currentCards.length === 0) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        const elapsed = Date.now() - touchStartTime;

        // Only register as swipe if horizontal distance > 50px, mostly horizontal, and quick
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5 && elapsed < 400) {
            if (dx < 0) {
                // Swipe left → next card
                cardIndex = (cardIndex + 1) % currentCards.length;
                renderCard();
            } else {
                // Swipe right → previous card
                cardIndex = (cardIndex - 1 + currentCards.length) % currentCards.length;
                renderCard();
            }
        }
    }, { passive: true });

    renderCard();


    // ============================================================
    // QUIZ SYSTEM
    // ============================================================
    let quizPool = [];
    let quizCurrent = [];
    let quizIndex = 0;
    let quizScore = 0;
    let quizAnswers = []; // { question, selected, correct, explanation }

    const quizArea = document.getElementById("quiz-area");
    const quizResults = document.getElementById("quiz-results");
    const quizQuestionEl = document.getElementById("quiz-question");
    const quizOptionsEl = document.getElementById("quiz-options");
    const quizFeedbackEl = document.getElementById("quiz-feedback");
    const quizNextBtn = document.getElementById("quiz-next");
    const quizProgressFill = document.getElementById("quiz-progress-fill");

    document.querySelectorAll(".filter-btn[data-quizfilter]").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".filter-buttons").querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    document.getElementById("start-quiz").addEventListener("click", () => {
        const filter = document.querySelector(".filter-btn[data-quizfilter].active").dataset.quizfilter;
        if (filter === "all") quizPool = [...quizQuestions];
        else quizPool = quizQuestions.filter(q => q.unit === filter);

        // Shuffle and take 15 (or fewer)
        for (let i = quizPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [quizPool[i], quizPool[j]] = [quizPool[j], quizPool[i]];
        }
        quizCurrent = quizPool.slice(0, Math.min(15, quizPool.length));
        quizIndex = 0;
        quizScore = 0;
        quizAnswers = [];
        document.getElementById("q-total").textContent = quizCurrent.length;

        quizArea.classList.remove("hidden");
        quizResults.classList.add("hidden");
        document.getElementById("start-quiz").classList.add("hidden");

        renderQuizQuestion();
    });

    function renderQuizQuestion() {
        if (quizIndex >= quizCurrent.length) {
            showQuizResults();
            return;
        }
        const q = quizCurrent[quizIndex];
        document.getElementById("q-num").textContent = quizIndex + 1;
        quizProgressFill.style.width = `${((quizIndex) / quizCurrent.length) * 100}%`;
        quizQuestionEl.textContent = q.question;
        quizFeedbackEl.classList.add("hidden");
        quizNextBtn.classList.add("hidden");
        quizOptionsEl.innerHTML = "";

        q.options.forEach((opt, i) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option";
            btn.textContent = opt;
            btn.addEventListener("click", () => handleQuizAnswer(i));
            quizOptionsEl.appendChild(btn);
        });
    }

    function handleQuizAnswer(selected) {
        const q = quizCurrent[quizIndex];
        const buttons = quizOptionsEl.querySelectorAll(".quiz-option");
        buttons.forEach(b => b.disabled = true);

        const isCorrect = selected === q.correct;
        if (isCorrect) quizScore++;

        buttons[q.correct].classList.add("correct");
        if (!isCorrect) buttons[selected].classList.add("incorrect");

        quizFeedbackEl.innerHTML = isCorrect
            ? `<span class="fb-correct">Correct!</span> ${q.explanation}`
            : `<span class="fb-incorrect">Incorrect.</span> ${q.explanation}`;
        quizFeedbackEl.classList.remove("hidden");
        quizNextBtn.classList.remove("hidden");

        quizAnswers.push({
            question: q.question,
            selected: q.options[selected],
            correctAnswer: q.options[q.correct],
            isCorrect,
            explanation: q.explanation
        });
    }

    quizNextBtn.addEventListener("click", () => {
        quizIndex++;
        renderQuizQuestion();
    });

    function showQuizResults() {
        quizArea.classList.add("hidden");
        quizResults.classList.remove("hidden");
        quizProgressFill.style.width = "100%";

        document.getElementById("quiz-score").textContent = quizScore;
        document.getElementById("quiz-out-of").textContent = quizCurrent.length;

        const pct = (quizScore / quizCurrent.length) * 100;
        let msg = "";
        if (pct === 100) msg = "Perfect score! Outstanding work, Thomas!";
        else if (pct >= 80) msg = "Excellent! You have a strong grasp of the material.";
        else if (pct >= 60) msg = "Good effort. Review the questions you got wrong and try again.";
        else if (pct >= 40) msg = "Keep studying. Focus on the explanations below and revisit the notes.";
        else msg = "This needs more work. Go through the notes section carefully and try again.";
        document.getElementById("quiz-message").textContent = msg;

        const reviewEl = document.getElementById("quiz-review");
        reviewEl.innerHTML = "<h4>Review Your Answers:</h4>";
        quizAnswers.forEach((a, i) => {
            const div = document.createElement("div");
            div.className = `review-item ${a.isCorrect ? "review-correct" : "review-incorrect"}`;
            div.innerHTML = `
                <p><strong>Q${i + 1}:</strong> ${a.question}</p>
                <p>Your answer: <span class="${a.isCorrect ? "text-correct" : "text-incorrect"}">${a.selected}</span></p>
                ${!a.isCorrect ? `<p>Correct answer: <span class="text-correct">${a.correctAnswer}</span></p>` : ""}
                <p class="explanation">${a.explanation}</p>
            `;
            reviewEl.appendChild(div);
        });
    }

    document.getElementById("quiz-retry").addEventListener("click", () => {
        quizResults.classList.add("hidden");
        document.getElementById("start-quiz").classList.remove("hidden");
    });


    // ============================================================
    // FEYNMAN MODE
    // ============================================================
    const feynmanTopicsEl = document.getElementById("feynman-topics");
    const feynmanWorkspace = document.getElementById("feynman-workspace");
    let currentFeynmanTopic = null;

    feynmanTopics.forEach(topic => {
        const card = document.createElement("div");
        card.className = "feynman-topic-card";
        const unitLabels = { mlc: "Mid-Lat Cyclones", tc: "Tropical Cyclones", dna: "DNA & Replication", rna: "Profiles & RNA", comp: "Computers", hw: "Hardware" };
        card.innerHTML = `<h4>${topic.title}</h4><span class="unit-tag ${topic.unit}">${unitLabels[topic.unit] || topic.unit}</span>`;
        card.addEventListener("click", () => startFeynman(topic));
        feynmanTopicsEl.appendChild(card);
    });

    function startFeynman(topic) {
        currentFeynmanTopic = topic;
        document.getElementById("feynman-title").textContent = topic.title;
        document.getElementById("feynman-input").value = "";
        document.getElementById("feynman-keypoints").classList.add("hidden");
        feynmanWorkspace.classList.remove("hidden");
        document.querySelector(".feynman-topics").classList.add("hidden");
        document.getElementById("feynman-input").focus();
    }

    document.getElementById("feynman-check").addEventListener("click", () => {
        const input = document.getElementById("feynman-input").value.trim();
        if (!input) {
            alert("Write your explanation first before checking!");
            return;
        }

        const checklist = document.getElementById("feynman-checklist");
        checklist.innerHTML = "";

        const inputLower = input.toLowerCase();
        currentFeynmanTopic.keyPoints.forEach(point => {
            const div = document.createElement("div");
            div.className = "keypoint-item";

            // Simple keyword matching for hints
            const keywords = point.toLowerCase().split(/[\s,;:()]+/).filter(w => w.length > 3);
            const matchCount = keywords.filter(kw => inputLower.includes(kw)).length;
            const covered = matchCount >= Math.max(2, Math.floor(keywords.length * 0.3));

            div.innerHTML = `
                <span class="keypoint-status">${covered ? "&#10003;" : "&#10007;"}</span>
                <span class="keypoint-text ${covered ? "covered" : "missed"}">${point}</span>
            `;
            checklist.appendChild(div);
        });

        document.getElementById("feynman-keypoints").classList.remove("hidden");
    });

    document.getElementById("feynman-retry").addEventListener("click", () => {
        document.getElementById("feynman-input").value = "";
        document.getElementById("feynman-keypoints").classList.add("hidden");
        document.getElementById("feynman-input").focus();
    });

    document.getElementById("feynman-back").addEventListener("click", () => {
        feynmanWorkspace.classList.add("hidden");
        document.querySelector(".feynman-topics").classList.remove("hidden");
    });

    // VOICE INPUT (Web Speech API)
    // ============================================================
    const micBtn = document.getElementById("feynman-mic");
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;
    let isRecording = false;

    if (micBtn && SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-ZA";

        let finalTranscript = "";

        recognition.onresult = (event) => {
            const textarea = document.getElementById("feynman-input");
            let interim = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + " ";
                } else {
                    interim += event.results[i][0].transcript;
                }
            }
            textarea.value = finalTranscript + interim;
        };

        recognition.onerror = (event) => {
            if (event.error !== "aborted") {
                alert("Mic error: " + event.error);
            }
            stopRecording();
        };

        recognition.onend = () => {
            if (isRecording) {
                // Auto-restart if still in recording mode (browser may stop after silence)
                recognition.start();
            }
        };

        micBtn.addEventListener("click", () => {
            if (isRecording) {
                stopRecording();
            } else {
                startRecording();
            }
        });

        function startRecording() {
            const textarea = document.getElementById("feynman-input");
            finalTranscript = textarea.value ? textarea.value + " " : "";
            isRecording = true;
            micBtn.classList.add("recording");
            micBtn.title = "Stop recording";
            recognition.start();
        }

        function stopRecording() {
            isRecording = false;
            micBtn.classList.remove("recording");
            micBtn.title = "Voice input";
            try { recognition.stop(); } catch(e) {}
        }
    } else if (micBtn) {
        micBtn.addEventListener("click", () => {
            alert("Voice input is not supported in your browser. Please use Chrome or Edge.");
        });
    }

    // ============================================================
    // PROGRESS TRACKER
    // ============================================================
    const progressSubject = p.includes("life-sciences") ? "ls" : p.includes("it") ? "it" : "geo";
    const progressKey = "progress-" + progressSubject;
    let progressData = loadFromStorage(progressKey, {
        notesRead: {},     // sectionId -> true
        quizBest: null,    // percentage 0-100
        feynmanDone: {}    // topicTitle -> true
    });

    function saveProgress() {
        localStorage.setItem(progressKey, JSON.stringify(progressData));
        updateProgressDashboard();
    }

    // Track notes: mark section as read after 3 seconds of viewing
    const allContentSections = document.querySelectorAll(".content-section");
    const totalSections = allContentSections.length;
    let sectionTimer = null;

    function onSectionVisible() {
        clearTimeout(sectionTimer);
        const active = document.querySelector(".content-section.active");
        if (!active) return;
        sectionTimer = setTimeout(() => {
            if (!progressData.notesRead[active.id]) {
                progressData.notesRead[active.id] = true;
                saveProgress();
            }
        }, 3000);
    }

    // Hook into section-jump clicks
    document.querySelectorAll(".section-jump").forEach(btn => {
        btn.addEventListener("click", onSectionVisible);
    });
    // Hook into nav clicks (when entering a unit view)
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => setTimeout(onSectionVisible, 100));
    });
    // Initial check
    setTimeout(onSectionVisible, 100);

    // Track quiz: save best score after quiz ends
    const origShowQuizResults = showQuizResults;
    showQuizResults = function() {
        origShowQuizResults();
        const pct = Math.round((quizScore / quizCurrent.length) * 100);
        if (progressData.quizBest === null || pct > progressData.quizBest) {
            progressData.quizBest = pct;
            saveProgress();
        }
    };

    // Track Feynman: mark topic when "Check Against Key Points" is clicked
    document.getElementById("feynman-check").addEventListener("click", () => {
        if (currentFeynmanTopic) {
            progressData.feynmanDone[currentFeynmanTopic.title] = true;
            saveProgress();
        }
    });

    // Dashboard rendering
    function updateProgressDashboard() {
        const dashboard = document.getElementById("progress-dashboard");
        if (!dashboard) return;

        // Notes
        const notesRead = Object.keys(progressData.notesRead).length;
        const notesTotal = totalSections;
        const notesPct = notesTotal > 0 ? (notesRead / notesTotal) * 100 : 0;
        document.getElementById("prog-notes-val").textContent = `${notesRead} / ${notesTotal}`;
        document.getElementById("prog-notes-fill").style.width = notesPct + "%";

        // Flashcards (read from existing confidence storage)
        const fcData = loadFromStorage(storageKey, {});
        const fcMastered = Object.values(fcData).filter(v => v === "easy").length;
        const fcTotal = typeof flashcards !== "undefined" ? flashcards.length : 0;
        const fcPct = fcTotal > 0 ? (fcMastered / fcTotal) * 100 : 0;
        document.getElementById("prog-fc-val").textContent = `${fcMastered} / ${fcTotal}`;
        document.getElementById("prog-fc-fill").style.width = fcPct + "%";

        // Quiz
        const quizPct = progressData.quizBest !== null ? progressData.quizBest : 0;
        document.getElementById("prog-quiz-val").textContent = progressData.quizBest !== null ? progressData.quizBest + "%" : "—";
        document.getElementById("prog-quiz-fill").style.width = quizPct + "%";

        // Feynman
        const feynmanDone = Object.keys(progressData.feynmanDone).length;
        const feynmanTotal = typeof feynmanTopics !== "undefined" ? feynmanTopics.length : 0;
        const feynmanPct = feynmanTotal > 0 ? (feynmanDone / feynmanTotal) * 100 : 0;
        document.getElementById("prog-feynman-val").textContent = `${feynmanDone} / ${feynmanTotal}`;
        document.getElementById("prog-feynman-fill").style.width = feynmanPct + "%";

        // Overall (weighted: notes 30%, flashcards 25%, quiz 25%, feynman 20%)
        const overall = (notesPct * 0.3) + (fcPct * 0.25) + (quizPct * 0.25) + (feynmanPct * 0.2);
        const overallRound = Math.round(overall);

        document.getElementById("progress-overall-pct").textContent = overallRound + "%";

        // Update circular progress ring
        const ring = document.getElementById("progress-ring-fill");
        const circumference = 2 * Math.PI * 52; // r=52
        ring.style.strokeDasharray = circumference;
        ring.style.strokeDashoffset = circumference - (circumference * overall / 100);

        // Motivational message
        const msgEl = document.getElementById("progress-overall-msg");
        if (overall === 0) msgEl.textContent = "Start studying to track your progress!";
        else if (overall < 25) msgEl.textContent = "You're getting started — keep going!";
        else if (overall < 50) msgEl.textContent = "Good progress! Keep pushing.";
        else if (overall < 75) msgEl.textContent = "Over halfway there — strong work!";
        else if (overall < 100) msgEl.textContent = "Almost there — finish strong!";
        else msgEl.textContent = "🎉 You've completed everything!";
    }

    // Initial render
    updateProgressDashboard();

    // ============================================================
    // READ ALOUD (ElevenLabs audio + browser TTS fallback)
    // With Spotify-style floating player bar
    // ============================================================
    const synth = window.speechSynthesis;
    let ttsSource = null;
    let ttsActiveBtn = null;
    let ttsAudio = null;
    let ttsChunks = [];
    let ttsBrowserIndex = 0;
    let bestVoice = null;
    let audioManifest = null;
    let ttsQueue = [];
    let ttsAllSections = []; // full list for progress tracking
    let ttsSectionsPlayed = 0;
    let ttsPaused = false;
    let ttsCurrentSectionId = null;
    let ttsBrowserOnDone = null;
    let progressInterval = null;

    // Load manifest
    fetch("audio/manifest.json")
        .then(r => r.ok ? r.json() : {})
        .then(m => { audioManifest = m; })
        .catch(() => { audioManifest = {}; });

    // Browser voice fallback
    function pickVoice() {
        const voices = synth.getVoices();
        const prefs = [
            v => /natural/i.test(v.name),
            v => /google.*uk.*female/i.test(v.name),
            v => /google.*us/i.test(v.name),
            v => /microsoft.*aria/i.test(v.name),
            v => v.lang.startsWith("en"),
        ];
        for (const test of prefs) {
            const match = voices.find(test);
            if (match) return match;
        }
        return voices[0] || null;
    }
    synth.onvoiceschanged = () => { bestVoice = pickVoice(); };
    bestVoice = pickVoice();

    // ── Create floating player bar ──
    const player = document.createElement("div");
    player.id = "tts-player";
    player.className = "tts-player hidden";
    player.innerHTML = `
        <div class="tts-player-inner">
            <div class="tts-player-info">
                <span class="tts-player-title">—</span>
                <span class="tts-player-section">—</span>
            </div>
            <div class="tts-player-controls">
                <button class="tts-ctrl" id="tts-restart" title="Restart">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>
                </button>
                <button class="tts-ctrl" id="tts-prev" title="Previous section">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                </button>
                <button class="tts-ctrl tts-ctrl-main" id="tts-playpause" title="Pause">
                    <svg class="tts-icon-pause" viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    <svg class="tts-icon-play hidden" viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <button class="tts-ctrl" id="tts-next" title="Next section">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                </button>
                <button class="tts-ctrl" id="tts-stop" title="Stop">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 6h12v12H6z"/></svg>
                </button>
            </div>
            <div class="tts-player-progress">
                <div class="tts-progress-bar">
                    <div class="tts-progress-fill" id="tts-progress-fill"></div>
                </div>
                <span class="tts-progress-text" id="tts-progress-text">0 / 0</span>
            </div>
        </div>
    `;
    document.body.appendChild(player);

    const playerTitle = player.querySelector(".tts-player-title");
    const playerSection = player.querySelector(".tts-player-section");
    const progressFill = document.getElementById("tts-progress-fill");
    const progressText = document.getElementById("tts-progress-text");
    const pauseIcon = player.querySelector(".tts-icon-pause");
    const playIcon = player.querySelector(".tts-icon-play");

    document.getElementById("tts-playpause").addEventListener("click", togglePause);
    document.getElementById("tts-stop").addEventListener("click", () => { stopTTS(); hidePlayer(); });
    document.getElementById("tts-restart").addEventListener("click", restartTTS);
    document.getElementById("tts-next").addEventListener("click", skipNext);
    document.getElementById("tts-prev").addEventListener("click", skipPrev);

    function showPlayer(unitName) {
        playerTitle.textContent = unitName;
        player.classList.remove("hidden");
        pauseIcon.classList.remove("hidden");
        playIcon.classList.add("hidden");
        ttsPaused = false;
    }

    function hidePlayer() {
        player.classList.add("hidden");
        if (progressInterval) { clearInterval(progressInterval); progressInterval = null; }
    }

    function updateProgress() {
        const total = ttsAllSections.length;
        const current = ttsSectionsPlayed;
        let pct = total > 0 ? (current / total) * 100 : 0;

        // Add sub-progress within current audio
        if (ttsAudio && ttsAudio.duration && total > 0) {
            const subPct = (ttsAudio.currentTime / ttsAudio.duration) * (100 / total);
            pct = Math.min(100, ((current) / total) * 100 + subPct);
        }

        progressFill.style.width = pct + "%";
        progressText.textContent = `${current + (ttsQueue.length > 0 || ttsCurrentSectionId ? 1 : 0)} / ${total}`;
    }

    // ── Read All button ──
    document.querySelectorAll(".unit-header").forEach(header => {
        const btn = document.createElement("button");
        btn.className = "tts-btn tts-read-all";
        btn.type = "button";
        btn.title = "Read entire unit aloud";
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg> <span>Read All</span>`;
        header.appendChild(btn);

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const view = header.closest(".view");
            if (ttsSource === view) { stopTTS(); hidePlayer(); return; }
            stopTTS();
            playAllSections(view, btn);
        });
    });

    function playAllSections(view, btn) {
        const sections = view.querySelectorAll(".content-section");
        ttsQueue = [];
        ttsAllSections = [];
        sections.forEach(s => { ttsQueue.push(s.id); ttsAllSections.push(s.id); });
        ttsSectionsPlayed = 0;
        ttsSource = view;
        ttsActiveBtn = btn;
        btn.classList.add("tts-active");

        const unitName = view.querySelector(".unit-header h2")?.textContent || "Unit";
        showPlayer(unitName);

        progressInterval = setInterval(updateProgress, 250);
        playNextInQueue();
    }

    function switchToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const parent = section.closest("section.view") || section.closest("section");
        if (!parent) return;
        parent.querySelectorAll(".content-section").forEach(s => s.classList.remove("active"));
        section.classList.add("active");
        parent.querySelectorAll(".section-jump").forEach(b => {
            b.classList.toggle("active", b.dataset.section === sectionId);
            if (b.dataset.section === sectionId) {
                b.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }
        });
        section.scrollIntoView({ behavior: "smooth", block: "start" });

        // Update player section name
        const h3 = section.querySelector("h3");
        playerSection.textContent = h3 ? h3.textContent : sectionId;
    }

    function playNextInQueue() {
        if (!ttsQueue.length || !ttsSource) { finishTTS(); return; }
        const sectionId = ttsQueue.shift();
        ttsCurrentSectionId = sectionId;
        switchToSection(sectionId);
        updateProgress();

        if (audioManifest && audioManifest[sectionId]) {
            playAudioFile("audio/" + audioManifest[sectionId], () => {
                ttsSectionsPlayed++;
                ttsCurrentSectionId = null;
                playNextInQueue();
            });
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                speakWithBrowserTTS(section, () => {
                    ttsSectionsPlayed++;
                    ttsCurrentSectionId = null;
                    playNextInQueue();
                });
            } else {
                ttsSectionsPlayed++;
                playNextInQueue();
            }
        }
    }

    function playAudioFile(src, onEnd) {
        ttsAudio = new Audio(src);
        ttsAudio.onended = onEnd;
        ttsAudio.onerror = () => {
            const section = document.getElementById(ttsCurrentSectionId);
            if (section) {
                speakWithBrowserTTS(section, onEnd);
            } else if (onEnd) {
                onEnd();
            }
        };
        ttsAudio.play();
    }

    function speakWithBrowserTTS(section, onDone) {
        const text = extractText(section);
        if (!text) { if (onDone) onDone(); return; }
        ttsChunks = splitText(text, 180);
        ttsBrowserIndex = 0;
        ttsBrowserOnDone = onDone;
        speakNextChunk();
    }

    function speakNextChunk() {
        if (ttsBrowserIndex >= ttsChunks.length || !ttsSource) {
            if (ttsBrowserOnDone) ttsBrowserOnDone(); else finishTTS();
            return;
        }
        const utter = new SpeechSynthesisUtterance(ttsChunks[ttsBrowserIndex]);
        if (bestVoice) utter.voice = bestVoice;
        utter.lang = "en-GB";
        utter.rate = 0.92;
        utter.pitch = 1.05;
        utter.onend = () => { ttsBrowserIndex++; speakNextChunk(); };
        utter.onerror = () => { if (ttsBrowserOnDone) ttsBrowserOnDone(); else finishTTS(); };
        synth.speak(utter);
    }

    function togglePause() {
        if (!ttsSource) return;
        if (ttsPaused) {
            // Resume
            ttsPaused = false;
            pauseIcon.classList.remove("hidden");
            playIcon.classList.add("hidden");
            if (ttsAudio && ttsAudio.paused) {
                ttsAudio.play();
            } else if (synth.paused) {
                synth.resume();
            }
        } else {
            // Pause
            ttsPaused = true;
            pauseIcon.classList.add("hidden");
            playIcon.classList.remove("hidden");
            if (ttsAudio && !ttsAudio.paused) {
                ttsAudio.pause();
            } else if (synth.speaking) {
                synth.pause();
            }
        }
    }

    function restartTTS() {
        if (!ttsSource) return;
        const view = ttsSource;
        const btn = ttsActiveBtn;
        stopTTS();
        playAllSections(view, btn);
    }

    function skipNext() {
        if (!ttsSource || !ttsQueue.length) return;
        // Stop current audio/speech
        if (ttsAudio) { ttsAudio.pause(); ttsAudio.onended = null; }
        synth.cancel();
        ttsSectionsPlayed++;
        ttsCurrentSectionId = null;
        ttsPaused = false;
        pauseIcon.classList.remove("hidden");
        playIcon.classList.add("hidden");
        playNextInQueue();
    }

    function skipPrev() {
        if (!ttsSource || !ttsAllSections.length) return;
        // Stop current audio/speech
        if (ttsAudio) { ttsAudio.pause(); ttsAudio.onended = null; }
        synth.cancel();

        // Figure out current position and go back
        const currentIdx = ttsAllSections.length - ttsQueue.length - 1;
        const targetIdx = Math.max(0, currentIdx - 1);

        // Rebuild queue from target onwards
        ttsQueue = ttsAllSections.slice(targetIdx);
        ttsSectionsPlayed = targetIdx;
        ttsCurrentSectionId = null;
        ttsPaused = false;
        pauseIcon.classList.remove("hidden");
        playIcon.classList.add("hidden");
        playNextInQueue();
    }

    function extractText(el) {
        const clone = el.cloneNode(true);
        clone.querySelectorAll("script, button, svg, .tts-btn, .unit-header, .progress-tracker").forEach(n => n.remove());
        clone.querySelectorAll("h3, h4").forEach(h => { h.textContent = ". " + h.textContent + ". "; });
        clone.querySelectorAll("li").forEach(li => { li.textContent = li.textContent + ". "; });
        return clone.textContent.replace(/\s+/g, " ").replace(/\.{2,}/g, ".").trim();
    }

    function splitText(text, maxLen) {
        const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
        const chunks = [];
        let current = "";
        for (const s of sentences) {
            if ((current + s).length > maxLen && current) {
                chunks.push(current.trim());
                current = s;
            } else {
                current += s;
            }
        }
        if (current.trim()) chunks.push(current.trim());
        return chunks;
    }

    function finishTTS() {
        if (ttsActiveBtn) ttsActiveBtn.classList.remove("tts-active");
        ttsSectionsPlayed = ttsAllSections.length;
        updateProgress();
        // Keep player visible briefly to show 100%
        setTimeout(() => {
            if (!ttsSource) hidePlayer();
        }, 2000);
        ttsSource = null;
        ttsActiveBtn = null;
        ttsAudio = null;
        ttsChunks = [];
        ttsBrowserIndex = 0;
        ttsQueue = [];
        ttsCurrentSectionId = null;
        ttsBrowserOnDone = null;
    }

    function stopTTS() {
        if (ttsAudio) { ttsAudio.pause(); ttsAudio.currentTime = 0; }
        synth.cancel();
        if (ttsActiveBtn) ttsActiveBtn.classList.remove("tts-active");
        ttsSource = null;
        ttsActiveBtn = null;
        ttsAudio = null;
        ttsChunks = [];
        ttsBrowserIndex = 0;
        ttsQueue = [];
        ttsAllSections = [];
        ttsSectionsPlayed = 0;
        ttsCurrentSectionId = null;
        ttsBrowserOnDone = null;
        ttsPaused = false;
        if (progressInterval) { clearInterval(progressInterval); progressInterval = null; }
    }

    // Stop TTS when navigating away
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => { stopTTS(); hidePlayer(); });
    });
});
