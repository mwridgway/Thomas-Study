// ============================================================
// CAPS Study Hub - Shared Study Tools Engine
// Handles: Flashcards, Quiz, Feynman Mode, Progress Tracking
// Each subject page includes this + its own data file
// ============================================================
document.addEventListener("DOMContentLoaded", () => {

    // ---- SUBJECT KEY (for per-subject localStorage when using shared subject.html) ----
    const _sp = new URLSearchParams(location.search);
    const _subjectKey = _sp.get('subject') || '';

    // ---- TAB NAVIGATION ----
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            tabPanels.forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
            const panel = document.getElementById("panel-" + btn.dataset.tab);
            if (panel) panel.classList.add("active");
            window.scrollTo(0, 0);
            btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        });
    });

    // ---- NOTES UNIT NAVIGATION ----
    document.querySelectorAll(".unit-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".unit-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            document.querySelectorAll(".unit-content").forEach(u => u.classList.remove("active"));
            const unit = document.getElementById("unit-" + btn.dataset.unit);
            if (unit) unit.classList.add("active");
        });
    });

    // Section navigation within units
    document.querySelectorAll(".section-jump").forEach(btn => {
        btn.addEventListener("click", () => {
            const parent = btn.closest(".unit-content");
            if (!parent) return;
            parent.querySelectorAll(".section-jump").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            parent.querySelectorAll(".content-section").forEach(s => s.classList.remove("active"));
            const section = document.getElementById(btn.dataset.section);
            if (section) section.classList.add("active");
            btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        });
    });


    // ============================================================
    // FLASHCARD SYSTEM
    // ============================================================
    if (typeof flashcards !== 'undefined' && flashcards.length > 0) {
        let currentCards = [...flashcards];
        let cardIndex = 0;
        let cardConfidence = {};

        const fcQuestion = document.getElementById("fc-question");
        const fcAnswer = document.getElementById("fc-answer");
        const fcCard = document.getElementById("flashcard");
        const fcProgress = document.getElementById("fc-progress");

        // Storage key based on page + subject
        const pagePath = location.pathname;
        const pageKey = pagePath.split('/').pop().replace('.html', '') + (_subjectKey ? '-' + _subjectKey : '');
        const storageKey = "fc-confidence-" + pageKey;

        function loadFromStorage(key, fallback) {
            try {
                const val = localStorage.getItem(key);
                return val ? JSON.parse(val) : fallback;
            } catch { return fallback; }
        }

        cardConfidence = loadFromStorage(storageKey, {});

        function renderCard() {
            if (!fcQuestion || !fcCard) return;
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

        document.querySelectorAll("#panel-flashcards .filter-btn[data-filter]").forEach(btn => {
            btn.addEventListener("click", () => {
                btn.closest(".filter-buttons").querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                filterCards(btn.dataset.filter);
            });
        });

        const flipBtn = document.getElementById("fc-flip");
        if (flipBtn) flipBtn.addEventListener("click", () => fcCard.classList.toggle("flipped"));
        if (fcCard) fcCard.addEventListener("click", () => fcCard.classList.toggle("flipped"));

        const nextBtn = document.getElementById("fc-next");
        if (nextBtn) nextBtn.addEventListener("click", () => {
            if (currentCards.length === 0) return;
            cardIndex = (cardIndex + 1) % currentCards.length;
            renderCard();
        });

        const prevBtn = document.getElementById("fc-prev");
        if (prevBtn) prevBtn.addEventListener("click", () => {
            if (currentCards.length === 0) return;
            cardIndex = (cardIndex - 1 + currentCards.length) % currentCards.length;
            renderCard();
        });

        const shuffleBtn = document.getElementById("fc-shuffle");
        if (shuffleBtn) shuffleBtn.addEventListener("click", () => {
            for (let i = currentCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
            }
            cardIndex = 0;
            renderCard();
        });

        const resetBtn = document.getElementById("fc-reset");
        if (resetBtn) resetBtn.addEventListener("click", () => {
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
                btn.classList.add("pressed");
                setTimeout(() => btn.classList.remove("pressed"), 300);
                if (cardIndex < currentCards.length - 1) {
                    cardIndex++;
                    renderCard();
                }
            });
        });

        // Keyboard navigation
        document.addEventListener("keydown", (e) => {
            const panel = document.getElementById("panel-flashcards");
            if (!panel || !panel.classList.contains("active")) return;
            if (e.key === " " || e.key === "Enter") { e.preventDefault(); fcCard.classList.toggle("flipped"); }
            if (e.key === "ArrowRight") { cardIndex = (cardIndex + 1) % currentCards.length; renderCard(); }
            if (e.key === "ArrowLeft") { cardIndex = (cardIndex - 1 + currentCards.length) % currentCards.length; renderCard(); }
        });

        // Touch swipe
        let touchStartX = 0, touchStartY = 0, touchStartTime = 0;
        const fcContainer = document.querySelector(".flashcard-container");
        if (fcContainer) {
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
                if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5 && elapsed < 400) {
                    if (dx < 0) { cardIndex = (cardIndex + 1) % currentCards.length; }
                    else { cardIndex = (cardIndex - 1 + currentCards.length) % currentCards.length; }
                    renderCard();
                }
            }, { passive: true });
        }

        renderCard();
    }


    // ============================================================
    // QUIZ SYSTEM
    // ============================================================
    if (typeof quizQuestions !== 'undefined' && quizQuestions.length > 0) {
        let quizPool = [];
        let quizCurrent = [];
        let quizIndex = 0;
        let quizScore = 0;
        let quizAnswers = [];

        const quizArea = document.getElementById("quiz-area");
        const quizResults = document.getElementById("quiz-results");
        const quizQuestionEl = document.getElementById("quiz-question");
        const quizOptionsEl = document.getElementById("quiz-options");
        const quizFeedbackEl = document.getElementById("quiz-feedback");
        const quizNextBtn = document.getElementById("quiz-next");
        const quizProgressFill = document.getElementById("quiz-progress-fill");
        const startQuizBtn = document.getElementById("start-quiz");

        document.querySelectorAll("#panel-quiz .filter-btn[data-quizfilter]").forEach(btn => {
            btn.addEventListener("click", () => {
                btn.closest(".filter-buttons").querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            });
        });

        if (startQuizBtn) startQuizBtn.addEventListener("click", () => {
            const activeFilter = document.querySelector("#panel-quiz .filter-btn[data-quizfilter].active");
            const filter = activeFilter ? activeFilter.dataset.quizfilter : "all";
            if (filter === "all") quizPool = [...quizQuestions];
            else quizPool = quizQuestions.filter(q => q.unit === filter);

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
            startQuizBtn.classList.add("hidden");
            renderQuizQuestion();
        });

        function renderQuizQuestion() {
            if (quizIndex >= quizCurrent.length) { showQuizResults(); return; }
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
                question: q.question, selected: q.options[selected],
                correctAnswer: q.options[q.correct], isCorrect, explanation: q.explanation
            });
        }

        if (quizNextBtn) quizNextBtn.addEventListener("click", () => { quizIndex++; renderQuizQuestion(); });

        function showQuizResults() {
            quizArea.classList.add("hidden");
            quizResults.classList.remove("hidden");
            quizProgressFill.style.width = "100%";

            document.getElementById("quiz-score").textContent = quizScore;
            document.getElementById("quiz-out-of").textContent = quizCurrent.length;

            const pct = (quizScore / quizCurrent.length) * 100;
            let msg = "";
            if (pct === 100) msg = "Perfect score! Outstanding work!";
            else if (pct >= 80) msg = "Excellent! You have a strong grasp of the material.";
            else if (pct >= 60) msg = "Good effort. Review the questions you got wrong and try again.";
            else if (pct >= 40) msg = "Keep studying. Focus on the explanations below.";
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

            // Track progress
            if (typeof updateProgressAfterQuiz === 'function') {
                updateProgressAfterQuiz(pct);
            }
        }

        const retryBtn = document.getElementById("quiz-retry");
        if (retryBtn) retryBtn.addEventListener("click", () => {
            quizResults.classList.add("hidden");
            startQuizBtn.classList.remove("hidden");
        });
    }


    // ============================================================
    // FEYNMAN MODE
    // ============================================================
    if (typeof feynmanTopics !== 'undefined' && feynmanTopics.length > 0) {
        const feynmanTopicsEl = document.getElementById("feynman-topics");
        const feynmanWorkspace = document.getElementById("feynman-workspace");
        let currentFeynmanTopic = null;

        if (feynmanTopicsEl) {
            feynmanTopics.forEach(topic => {
                const card = document.createElement("div");
                card.className = "feynman-topic-card";
                card.innerHTML = `<h4>${topic.title}</h4><span class="unit-tag">${topic.unit}</span>`;
                card.addEventListener("click", () => startFeynman(topic));
                feynmanTopicsEl.appendChild(card);
            });
        }

        function startFeynman(topic) {
            currentFeynmanTopic = topic;
            document.getElementById("feynman-title").textContent = topic.title;
            document.getElementById("feynman-input").value = "";
            document.getElementById("feynman-keypoints").classList.add("hidden");
            feynmanWorkspace.classList.remove("hidden");
            feynmanTopicsEl.classList.add("hidden");
            document.getElementById("feynman-input").focus();
        }

        const checkBtn = document.getElementById("feynman-check");
        if (checkBtn) checkBtn.addEventListener("click", () => {
            const input = document.getElementById("feynman-input").value.trim();
            if (!input) { alert("Write your explanation first!"); return; }

            const checklist = document.getElementById("feynman-checklist");
            checklist.innerHTML = "";
            const inputLower = input.toLowerCase();

            currentFeynmanTopic.keyPoints.forEach(point => {
                const div = document.createElement("div");
                div.className = "keypoint-item";
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

        const retryFeynman = document.getElementById("feynman-retry");
        if (retryFeynman) retryFeynman.addEventListener("click", () => {
            document.getElementById("feynman-input").value = "";
            document.getElementById("feynman-keypoints").classList.add("hidden");
            document.getElementById("feynman-input").focus();
        });

        const backFeynman = document.getElementById("feynman-back");
        if (backFeynman) backFeynman.addEventListener("click", () => {
            feynmanWorkspace.classList.add("hidden");
            feynmanTopicsEl.classList.remove("hidden");
        });

        // Voice input
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
                    if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript + " ";
                    else interim += event.results[i][0].transcript;
                }
                textarea.value = finalTranscript + interim;
            };
            recognition.onerror = (event) => {
                if (event.error !== "aborted") alert("Mic error: " + event.error);
                stopRecording();
            };
            recognition.onend = () => { if (isRecording) recognition.start(); };

            micBtn.addEventListener("click", () => {
                if (isRecording) stopRecording(); else startRecording();
            });

            function startRecording() {
                const textarea = document.getElementById("feynman-input");
                finalTranscript = textarea.value ? textarea.value + " " : "";
                isRecording = true;
                micBtn.classList.add("recording");
                recognition.start();
            }
            function stopRecording() {
                isRecording = false;
                micBtn.classList.remove("recording");
                try { recognition.stop(); } catch(e) {}
            }
        } else if (micBtn) {
            micBtn.addEventListener("click", () => {
                alert("Voice input not supported in this browser. Use Chrome or Edge.");
            });
        }
    }


    // ============================================================
    // PROGRESS TRACKING
    // ============================================================
    const pagePath = location.pathname;
    const pageKey = pagePath.split('/').pop().replace('.html', '') + (_subjectKey ? '-' + _subjectKey : '');
    const progressKey = "progress-" + pageKey;
    const fcStorageKey = "fc-confidence-" + pageKey;

    function loadFromStorage(key, fallback) {
        try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
        catch { return fallback; }
    }

    let progressData = loadFromStorage(progressKey, {
        notesRead: {}, quizBest: null, feynmanDone: {},
        quizAttempts: 0, sessions: [], totalSeconds: 0
    });
    if (!progressData.quizAttempts) progressData.quizAttempts = 0;
    if (!progressData.sessions) progressData.sessions = [];
    if (!progressData.totalSeconds) progressData.totalSeconds = 0;

    const today = new Date().toISOString().slice(0, 10);
    if (!progressData.sessions.includes(today)) progressData.sessions.push(today);

    // Track study time
    setInterval(() => {
        if (!document.hidden) {
            progressData.totalSeconds += 30;
            localStorage.setItem(progressKey, JSON.stringify(progressData));
        }
    }, 30000);

    function saveProgress() {
        localStorage.setItem(progressKey, JSON.stringify(progressData));
        updateProgressDashboard();
    }

    // Track notes read
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

    document.querySelectorAll(".section-jump").forEach(btn => {
        btn.addEventListener("click", onSectionVisible);
    });
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => setTimeout(onSectionVisible, 100));
    });
    setTimeout(onSectionVisible, 100);

    // Quiz progress hook
    window.updateProgressAfterQuiz = function(pct) {
        progressData.quizAttempts = (progressData.quizAttempts || 0) + 1;
        if (progressData.quizBest === null || pct > progressData.quizBest) {
            progressData.quizBest = Math.round(pct);
        }
        saveProgress();
    };

    // Feynman progress hook
    const feynmanCheckBtn = document.getElementById("feynman-check");
    if (feynmanCheckBtn) {
        feynmanCheckBtn.addEventListener("click", () => {
            if (typeof feynmanTopics !== 'undefined') {
                const titleEl = document.getElementById("feynman-title");
                if (titleEl) {
                    progressData.feynmanDone[titleEl.textContent] = true;
                    saveProgress();
                }
            }
        });
    }

    function calcStreak(sessions) {
        if (!sessions.length) return 0;
        const sorted = [...new Set(sessions)].sort().reverse();
        const now = new Date();
        const todayStr = now.toISOString().slice(0, 10);
        const yesterday = new Date(now - 86400000).toISOString().slice(0, 10);
        if (sorted[0] !== todayStr && sorted[0] !== yesterday) return 0;
        let streak = 1;
        for (let i = 0; i < sorted.length - 1; i++) {
            const curr = new Date(sorted[i]);
            const prev = new Date(sorted[i + 1]);
            if ((curr - prev) / 86400000 === 1) streak++;
            else break;
        }
        return streak;
    }

    function formatTime(totalSec) {
        const hrs = Math.floor(totalSec / 3600);
        const mins = Math.floor((totalSec % 3600) / 60);
        return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
    }

    function updateProgressDashboard() {
        const dashboard = document.getElementById("progress-dashboard");
        if (!dashboard) return;

        const notesRead = Object.keys(progressData.notesRead).length;
        const notesPct = totalSections > 0 ? (notesRead / totalSections) * 100 : 0;
        const notesValEl = document.getElementById("prog-notes-val");
        const notesFillEl = document.getElementById("prog-notes-fill");
        if (notesValEl) notesValEl.textContent = `${notesRead} / ${totalSections}`;
        if (notesFillEl) notesFillEl.style.width = notesPct + "%";

        const fcData = loadFromStorage(fcStorageKey, {});
        const fcMastered = Object.values(fcData).filter(v => v === "easy").length;
        const fcTotal = typeof flashcards !== "undefined" ? flashcards.length : 0;
        const fcPct = fcTotal > 0 ? (fcMastered / fcTotal) * 100 : 0;
        const fcValEl = document.getElementById("prog-fc-val");
        const fcFillEl = document.getElementById("prog-fc-fill");
        if (fcValEl) fcValEl.textContent = `${fcMastered} / ${fcTotal}`;
        if (fcFillEl) fcFillEl.style.width = fcPct + "%";

        const quizPct = progressData.quizBest !== null ? progressData.quizBest : 0;
        const quizValEl = document.getElementById("prog-quiz-val");
        const quizFillEl = document.getElementById("prog-quiz-fill");
        if (quizValEl) quizValEl.textContent = progressData.quizBest !== null ? progressData.quizBest + "%" : "—";
        if (quizFillEl) quizFillEl.style.width = quizPct + "%";

        const feynmanDone = Object.keys(progressData.feynmanDone).length;
        const feynmanTotal = typeof feynmanTopics !== "undefined" ? feynmanTopics.length : 0;
        const feynmanPct = feynmanTotal > 0 ? (feynmanDone / feynmanTotal) * 100 : 0;
        const feynmanValEl = document.getElementById("prog-feynman-val");
        const feynmanFillEl = document.getElementById("prog-feynman-fill");
        if (feynmanValEl) feynmanValEl.textContent = `${feynmanDone} / ${feynmanTotal}`;
        if (feynmanFillEl) feynmanFillEl.style.width = feynmanPct + "%";

        const overall = (notesPct * 0.3) + (fcPct * 0.25) + (quizPct * 0.25) + (feynmanPct * 0.2);
        const overallRound = Math.round(overall);
        const pctEl = document.getElementById("progress-overall-pct");
        if (pctEl) pctEl.textContent = overallRound + "%";

        const ring = document.getElementById("progress-ring-fill");
        if (ring) {
            const circumference = 2 * Math.PI * 52;
            ring.style.strokeDasharray = circumference;
            ring.style.strokeDashoffset = circumference - (circumference * overall / 100);
        }

        const msgEl = document.getElementById("progress-overall-msg");
        if (msgEl) {
            if (overall === 0) msgEl.textContent = "Start studying to track your progress!";
            else if (overall < 25) msgEl.textContent = "You're getting started — keep going!";
            else if (overall < 50) msgEl.textContent = "Good progress! Keep pushing.";
            else if (overall < 75) msgEl.textContent = "Over halfway there — strong work!";
            else if (overall < 100) msgEl.textContent = "Almost there — finish strong!";
            else msgEl.textContent = "You've completed everything!";
        }

        const streakEl = document.getElementById("stat-streak");
        const timeEl = document.getElementById("stat-time");
        const sessionsEl = document.getElementById("stat-sessions");
        const quizzesEl = document.getElementById("stat-quizzes");
        if (streakEl) streakEl.textContent = calcStreak(progressData.sessions || []);
        if (timeEl) timeEl.textContent = formatTime(progressData.totalSeconds || 0);
        if (sessionsEl) sessionsEl.textContent = (progressData.sessions || []).length;
        if (quizzesEl) quizzesEl.textContent = progressData.quizAttempts || 0;
    }

    updateProgressDashboard();
    setInterval(updateProgressDashboard, 30000);
});
