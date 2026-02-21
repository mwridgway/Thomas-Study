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
});
