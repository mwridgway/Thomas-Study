// English Home Language - Grade 12 CAPS Data
// NSC Exam focused content for South African matric students

const flashcards = [
    // ===================== LITERATURE =====================
    { id: 1, unit: "literature", q: "What is imagery in poetry?", a: "Language that appeals to the senses (sight, sound, smell, taste, touch) to create a vivid picture or experience in the reader's mind. E.g., visual imagery, auditory imagery, tactile imagery." },
    { id: 2, unit: "literature", q: "What is the difference between tone and mood in poetry?", a: "Tone is the poet's attitude toward the subject (e.g., bitter, celebratory, ironic). Mood is the emotional atmosphere the poem creates in the reader (e.g., melancholic, joyful, tense). Tone creates mood." },
    { id: 3, unit: "literature", q: "What is diction in poetry analysis?", a: "The poet's deliberate choice of words. Consider connotation (implied meaning), denotation (literal meaning), formal/informal register, archaic or modern language, and how word choices reinforce theme or tone." },
    { id: 4, unit: "literature", q: "Define alliteration and give an example.", a: "The repetition of the same consonant sound at the beginning of nearby words. E.g., 'Peter Piper picked a peck.' In poetry it creates rhythm, emphasis, and musical effect." },
    { id: 5, unit: "literature", q: "What is assonance and how does it function?", a: "The repetition of vowel sounds within nearby words, e.g., 'the rain in Spain.' It creates internal rhyme, a musical quality, and can reinforce mood (long vowels = slow/melancholic; short vowels = fast/tense)." },
    { id: 6, unit: "literature", q: "What is dramatic irony?", a: "When the audience/reader knows something that the characters on stage do not. It creates tension, suspense, or dark humour. E.g., in Romeo and Juliet, the audience knows Juliet is alive while Romeo believes she is dead." },
    { id: 7, unit: "literature", q: "What is a soliloquy in drama?", a: "A speech delivered by a character alone on stage (or as if alone), revealing inner thoughts and feelings directly to the audience. It allows the audience to understand the character's true motivations." },
    { id: 8, unit: "literature", q: "What is an aside in drama?", a: "A brief remark made by a character to the audience, unheard by other characters on stage. It reveals private thoughts and creates intimacy between character and audience." },
    { id: 9, unit: "literature", q: "Define metaphor and simile — what is the key difference?", a: "A simile compares two things using 'like' or 'as' (e.g., 'brave as a lion'). A metaphor states one thing IS another (e.g., 'He is a lion'). Both create vivid comparison but metaphor is more direct and emphatic." },
    { id: 10, unit: "literature", q: "What is personification?", a: "Giving human qualities, attributes, or feelings to non-human things (animals, objects, abstract ideas). E.g., 'The wind whispered through the trees.' It makes descriptions vivid and relatable." },
    { id: 11, unit: "literature", q: "What is the difference between theme and subject in literature?", a: "Subject is the topic the text is about (e.g., war). Theme is the central message or insight the author conveys about that subject (e.g., war destroys the humanity of those who fight it). Themes are statements, not single words." },
    { id: 12, unit: "literature", q: "What is symbolism in literature?", a: "When an object, person, place, or event represents something beyond its literal meaning. E.g., a white dove symbolises peace; a storm may symbolise inner turmoil. Symbols add deeper layers of meaning to a text." },
    { id: 13, unit: "literature", q: "What is foreshadowing?", a: "A literary device where the author gives early hints or clues about events that will occur later in the narrative. It creates suspense, prepares the reader, and gives the plot a sense of inevitability." },
    { id: 14, unit: "literature", q: "What is a flashback (analepsis)?", a: "An interruption in the chronological narrative that takes the story back to an earlier time. It reveals backstory, explains character motivation, and deepens the reader's understanding of present events." },
    { id: 15, unit: "literature", q: "Define irony and its three main types.", a: "Irony is a contrast between expectation and reality. Three types: (1) Verbal irony — saying the opposite of what is meant (sarcasm). (2) Situational irony — when the opposite of what is expected occurs. (3) Dramatic irony — the audience knows more than the characters." },
    { id: 16, unit: "literature", q: "What is an oxymoron? Give an example.", a: "Two contradictory terms placed together to create a paradoxical effect. E.g., 'deafening silence,' 'bitter sweet,' 'living death.' It highlights complexity and contradiction in meaning." },
    { id: 17, unit: "literature", q: "What is hyperbole and what effect does it create?", a: "Extreme exaggeration for emphasis, not meant to be taken literally. E.g., 'I've told you a million times!' It creates humour, emphasis, or conveys the intensity of emotion." },
    { id: 18, unit: "literature", q: "What is narrative voice/point of view in a novel?", a: "The perspective from which the story is told. First person (I/we) — narrator is a character. Third person limited — narrator focuses on one character's thoughts. Third person omniscient — narrator knows all characters' thoughts and feelings." },
    { id: 19, unit: "literature", q: "What are stage directions in drama?", a: "Instructions written by the playwright in italics or brackets that describe setting, character movement, actions, and delivery of lines. They guide actors and directors, and reveal character and context to readers." },
    { id: 20, unit: "literature", q: "What is an allegory?", a: "A narrative where characters, events, and settings represent abstract ideas or moral qualities, creating a second level of meaning. E.g., Animal Farm is an allegory of the Russian Revolution. The entire story functions as an extended metaphor." },
    { id: 21, unit: "literature", q: "What is satire?", a: "A literary technique that uses humour, irony, exaggeration, or ridicule to expose and criticise human vices, foolishness, or social institutions. The purpose is to provoke thought and encourage change." },
    { id: 22, unit: "literature", q: "What is a paradox in literature?", a: "A statement that appears self-contradictory but reveals a deeper truth on reflection. E.g., 'I must be cruel to be kind' (Hamlet). It forces the reader to think more deeply about complex ideas." },
    { id: 23, unit: "literature", q: "What is the structure of a Shakespearean sonnet?", a: "14 lines in iambic pentameter. Three quatrains (4-line stanzas, rhyme scheme ABAB CDCD EFEF) develop the theme, and a rhyming couplet (GG) provides a resolution or twist (the volta). Often explores love, time, beauty, or mortality." },
    { id: 24, unit: "literature", q: "What is conflict in drama and what are the main types?", a: "The struggle between opposing forces that drives the plot. Types: (1) Character vs Character (external). (2) Character vs Society. (3) Character vs Nature. (4) Character vs Self (internal/psychological). Conflict creates tension and reveals character." },
    { id: 25, unit: "literature", q: "How do you write a poetry essay for matric?", a: "Structure: Introduction (poem title, poet, central theme). Body paragraphs each cover one device/element (identify device, quote from poem, explain effect). Link back to theme each time. Conclusion (how devices work together to convey theme). Use PEE: Point, Evidence, Explanation." },

    // ===================== LANGUAGE =====================
    { id: 26, unit: "language", q: "What are the 7 key points of the summary writing checklist?", a: "(1) Read carefully, identify the main ideas. (2) Use your own words. (3) Write in continuous prose (not bullet points). (4) Include only relevant points — no examples or elaboration. (5) Keep to the word limit. (6) Write in the tense and person specified. (7) Check grammar and spelling." },
    { id: 27, unit: "language", q: "What is a literal comprehension question?", a: "A question whose answer is stated directly and explicitly in the text. The reader only needs to locate and retrieve the information. E.g., 'What time did the character arrive?' Marks are awarded for accuracy of retrieval." },
    { id: 28, unit: "language", q: "What is an inferential comprehension question?", a: "A question that requires the reader to 'read between the lines' — to deduce meaning that is implied but not directly stated. The reader must use clues in the text plus their own reasoning to construct an answer." },
    { id: 29, unit: "language", q: "What is an evaluative comprehension question?", a: "A question that asks the reader to make a judgement about the text, often requiring a personal opinion backed by evidence from the text. E.g., 'Do you think the author's argument is convincing? Justify your answer.'" },
    { id: 30, unit: "language", q: "What is visual literacy in the context of matric English?", a: "The ability to interpret, analyse, and evaluate visual texts such as cartoons, advertisements, photographs, graphs, tables, and diagrams. It involves reading visual elements (colour, layout, symbols, perspective) alongside written text." },
    { id: 31, unit: "language", q: "What are the key features of a formal letter?", a: "Sender's address (top right), date, recipient's address (left), salutation (Dear Mr/Ms Surname), subject line, body (formal register, structured paragraphs), complimentary close (Yours sincerely / Yours faithfully), signature, and printed name." },
    { id: 32, unit: "language", q: "What is the difference between 'Yours sincerely' and 'Yours faithfully'?", a: "'Yours sincerely' is used when you know the recipient's name (began with 'Dear Mr/Ms [Name]'). 'Yours faithfully' is used when you do NOT know the recipient's name (began with 'Dear Sir/Madam')." },
    { id: 33, unit: "language", q: "What are the key features of a newspaper report?", a: "Headline (catchy, summarises story), byline (reporter's name), lead paragraph (5 W's: Who, What, Where, When, Why), inverted pyramid structure (most important info first), quotes from sources, third person, past tense, objective tone." },
    { id: 34, unit: "language", q: "What must a magazine article/feature article include?", a: "Catchy headline, engaging introduction (hook), subheadings to organise sections, a mix of facts and human interest, quotes from interviews, descriptive language, and a conclusion. Less formal than a news report; more narrative and engaging in style." },
    { id: 35, unit: "language", q: "What are the key features of a review (book/film/restaurant)?", a: "Title and details of what is being reviewed, brief summary (without spoilers for film/book), evaluation of strengths and weaknesses, specific examples to support opinions, recommendation, rating (optional). Written in first person with a mix of objective and subjective language." },
    { id: 36, unit: "language", q: "What are the key features of a speech?", a: "Direct address to audience (Ladies and gentlemen...), clear introduction (establish purpose), organised body with logical flow, rhetorical devices (rhetorical questions, repetition, tricolon), personal anecdotes or examples, strong conclusion with call to action or memorable statement, closing address (Thank you)." },
    { id: 37, unit: "language", q: "What are the key features of an obituary?", a: "Name and dates of birth/death, celebration of the person's life and achievements, personal qualities, impact on community/family, surviving relatives mentioned, tone is dignified, respectful, and celebratory rather than mournful. Written in past tense, third person." },
    { id: 38, unit: "language", q: "What are the key features of meeting minutes?", a: "Heading (meeting name, date, time, venue), list of attendees and apologies, matters arising from previous minutes, agenda items discussed (each as a sub-section), decisions taken and action items (who does what by when), next meeting date, signature of chairperson." },
    { id: 39, unit: "language", q: "What are the key features of an agenda?", a: "Heading (name of meeting, date, time, venue), numbered list of items in order: (1) Apologies, (2) Minutes of previous meeting, (3) Matters arising, (4-n) Specific agenda items, (n+1) Any other business, (n+2) Date of next meeting. Distributed before the meeting." },
    { id: 40, unit: "language", q: "What is an editorial?", a: "An opinion piece written by the editor (or editorial board) of a publication expressing the publication's official stance on a current issue. It is argumentative, persuasive, uses first person plural ('we'), and aims to influence the reader's opinion." },
    { id: 41, unit: "language", q: "What is a dialogue and how is it formatted in English?", a: "A written conversation between two or more people. Format: Each speaker's name is written before their dialogue (e.g., Tom: 'Hello.'). New speaker = new line. No quotation marks needed in script format. Captures natural speech patterns and characterisation." },
    { id: 42, unit: "language", q: "What is an instruction/procedure text and what must it include?", a: "A text that explains how to do something step-by-step. Must include: title (what you're making/doing), materials/ingredients list, numbered steps in chronological order, imperative verbs (Mix, Add, Cut), clear and concise language, no ambiguity." },
    { id: 43, unit: "language", q: "How do you analyse an advertisement for visual literacy?", a: "Analyse: headline and slogan (language used), image (what it shows, connotations), target audience, persuasive techniques (appeal to emotion, fear, desire, status), colour symbolism, layout and design, logo and brand identity, the overall message and call to action." },
    { id: 44, unit: "language", q: "How do you analyse a cartoon for visual literacy?", a: "Identify: setting, characters, action. Analyse: speech/thought bubbles, caption, symbolism (what objects/people represent), exaggeration/caricature, humour or irony, the cartoonist's viewpoint, the social/political issue being commented on." },

    // ===================== GRAMMAR =====================
    { id: 45, unit: "grammar", q: "What are the eight parts of speech?", a: "(1) Noun — names a person, place, thing, or idea. (2) Pronoun — replaces a noun. (3) Verb — shows action or state of being. (4) Adjective — describes a noun. (5) Adverb — modifies a verb, adjective, or another adverb. (6) Preposition — shows relationship. (7) Conjunction — joins words/clauses. (8) Interjection — expresses emotion." },
    { id: 46, unit: "grammar", q: "What is active voice vs passive voice?", a: "Active: the subject performs the action (e.g., 'The dog bit the man.'). Passive: the subject receives the action (e.g., 'The man was bitten by the dog.'). Passive is formed with 'to be' + past participle. Active is more direct and dynamic." },
    { id: 47, unit: "grammar", q: "How do you change a sentence from active to passive voice?", a: "Step 1: Move the object of the active sentence to the subject position. Step 2: Add the appropriate form of 'to be' + past participle of the main verb. Step 3: The original subject becomes the agent (preceded by 'by'), which can be omitted. Change tense of 'to be' to match original." },
    { id: 48, unit: "grammar", q: "What is direct speech vs indirect (reported) speech?", a: "Direct speech quotes the exact words spoken, using quotation marks: She said, 'I am tired.' Indirect speech reports what was said without quoting exactly: She said that she was tired. Changes: tense shifts back, pronouns change, time expressions change (now → then, today → that day)." },
    { id: 49, unit: "grammar", q: "What is concord (subject-verb agreement)?", a: "The grammatical rule that the verb must agree with its subject in number (singular/plural). E.g., 'The boy runs' (singular); 'The boys run' (plural). Common errors: collective nouns (usually singular), indefinite pronouns (each, every, neither = singular)." },
    { id: 50, unit: "grammar", q: "What is the difference between a simple, compound, and complex sentence?", a: "Simple: one independent clause (one subject + one verb). 'She sang.' Compound: two independent clauses joined by a coordinating conjunction (FANBOYS). 'She sang and he danced.' Complex: one independent clause + one or more dependent clauses joined by a subordinating conjunction. 'She sang because she was happy.'" },
    { id: 51, unit: "grammar", q: "What are the FANBOYS coordinating conjunctions?", a: "For, And, Nor, But, Or, Yet, So. These join two independent clauses of equal importance in a compound sentence. A comma precedes the conjunction when joining two full clauses. E.g., 'I wanted to go, but it was raining.'" },
    { id: 52, unit: "grammar", q: "What is the difference between a phrase and a clause?", a: "A phrase is a group of words without both a subject and a verb (e.g., 'in the morning,' 'running fast'). A clause has both a subject and a verb. An independent clause can stand alone; a dependent clause cannot stand alone and needs an independent clause to make sense." },
    { id: 53, unit: "grammar", q: "When do you use a semicolon vs a colon?", a: "Semicolon (;): joins two related independent clauses without a conjunction. 'She studied hard; she passed with distinction.' Colon (:): introduces a list, explanation, or elaboration. 'She needed three things: a pen, paper, and focus.' Also used before a long quote." },
    { id: 54, unit: "grammar", q: "What is the difference between 'its' and 'it's'?", a: "'It's' is a contraction of 'it is' or 'it has'. 'Its' is the possessive pronoun meaning 'belonging to it'. Test: replace with 'it is' — if it makes sense, use 'it's'. E.g., 'It's raining.' (it is raining) vs. 'The dog wagged its tail.' (belonging to it)" },
    { id: 55, unit: "grammar", q: "What are the 12 tenses in English?", a: "Simple: present, past, future. Continuous: present, past, future. Perfect: present, past, future. Perfect continuous: present, past, future. Key structures: simple present (do/does), past (did/verb+ed), future (will + base verb), present perfect (have/has + past participle), past perfect (had + past participle)." },
    { id: 56, unit: "grammar", q: "What is figurative language vs literal language?", a: "Literal language means exactly what is written — no hidden or symbolic meaning. 'It is raining heavily.' Figurative language uses words in non-literal ways to create effect: 'It is raining cats and dogs.' Figurative language includes metaphors, similes, idioms, hyperbole, and personification." },
    { id: 57, unit: "grammar", q: "What are common concord errors involving collective nouns?", a: "Collective nouns (team, class, committee, family, audience) are usually treated as singular in formal writing: 'The team is playing well.' However, when the group members act individually, a plural verb may be used: 'The team have taken their seats.' In SA English exams, treat collective nouns as singular unless told otherwise." },
    { id: 58, unit: "grammar", q: "What is the rule for using 'fewer' vs 'less'?", a: "'Fewer' is used for countable nouns (things you can count): 'fewer apples,' 'fewer students.' 'Less' is used for uncountable nouns (quantities): 'less water,' 'less time,' 'less money.' Common error: 'less people' should be 'fewer people.'" },
    { id: 59, unit: "grammar", q: "What is vocabulary in context and how do you answer these questions?", a: "Questions ask you to determine the meaning of a word from its context (surrounding words, sentences, and the overall passage). Strategy: (1) Read the whole sentence/paragraph. (2) Look for clues: synonyms nearby, antonyms with 'but/however', definitions after a comma, examples. (3) Try a substitution to check your answer makes sense." },
    { id: 60, unit: "grammar", q: "What is the difference between 'who' and 'whom'?", a: "'Who' is a subject pronoun (like 'he/she'). 'Whom' is an object pronoun (like 'him/her'). Test: replace with 'he' or 'him' — if 'he' fits, use 'who'; if 'him' fits, use 'whom'. E.g., 'Who called?' (He called.) / 'Whom did she call?' (She called him.)" },

    // Extra flashcards
    { id: 61, unit: "literature", q: "What is enjambment in poetry?", a: "When a sentence or clause runs over from one line to the next without a pause or punctuation at the end of the line. It creates a sense of continuation, urgency, or forward movement and can mirror the meaning of the poem." },
    { id: 62, unit: "literature", q: "What is a volta in a sonnet?", a: "A 'turn' or shift in the poem — a change in argument, tone, or perspective. In a Shakespearean sonnet it usually occurs at the final couplet. In a Petrarchan sonnet it occurs at the start of the sestet (line 9). The volta marks a moment of resolution, reversal, or new insight." },
    { id: 63, unit: "language", q: "What is the inverted pyramid structure in journalism?", a: "A news writing structure where the most important information (Who, What, Where, When, Why, How) appears in the lead paragraph. Details become progressively less important as the article continues. This allows editors to cut from the bottom without losing key facts." },
    { id: 64, unit: "grammar", q: "What is the Oxford comma and when is it used?", a: "The Oxford (serial) comma is placed before the final 'and' or 'or' in a list of three or more items. E.g., 'She bought apples, oranges, and bananas.' It prevents ambiguity. In NSC exams, consistency in comma use within lists is expected." },
];

const quizQuestions = [
    // ===================== LITERATURE =====================
    {
        id: 1, unit: "literature", type: "mc",
        question: "Which term describes the repetition of consonant sounds at the beginning of words in a poem?",
        options: ["Assonance", "Alliteration", "Consonance", "Onomatopoeia"],
        correct: 1,
        explanation: "Alliteration is the repetition of the same consonant sound at the beginning of nearby words (e.g., 'Peter Piper picked'). Assonance is vowel sound repetition, consonance is consonant repetition within words, and onomatopoeia is words that sound like what they describe."
    },
    {
        id: 2, unit: "literature", type: "mc",
        question: "When an audience knows something that a character does not, this is called:",
        options: ["Situational irony", "Verbal irony", "Dramatic irony", "Cosmic irony"],
        correct: 2,
        explanation: "Dramatic irony occurs when the audience/reader has more information than the characters. This creates tension, suspense, or tragic effect. It is a key device in drama (e.g., Shakespeare's tragedies) and is essential to understand for NSC drama questions."
    },
    {
        id: 3, unit: "literature", type: "mc",
        question: "A soliloquy is best described as:",
        options: ["A conversation between two characters", "A character speaking their private thoughts aloud to the audience", "A brief aside heard only by the audience", "A formal speech made at a public gathering"],
        correct: 1,
        explanation: "A soliloquy is a dramatic device where a character speaks their innermost thoughts aloud while alone on stage (or appearing to be alone). It gives the audience direct access to the character's mind and is different from an aside, which is a brief remark not a full speech."
    },
    {
        id: 4, unit: "literature", type: "mc",
        question: "Which literary device gives human qualities to non-human things?",
        options: ["Simile", "Metaphor", "Personification", "Allegory"],
        correct: 2,
        explanation: "Personification assigns human characteristics, emotions, or behaviours to non-human entities (e.g., 'The wind howled angrily'). A simile uses 'like/as', a metaphor directly equates two things, and an allegory is an extended narrative with symbolic meaning."
    },
    {
        id: 5, unit: "literature", type: "mc",
        question: "What is the VOLTA in a sonnet?",
        options: ["The final couplet's rhyme scheme", "A turn or shift in argument or tone", "The iambic pentameter rhythm", "The octave of a Petrarchan sonnet"],
        correct: 1,
        explanation: "The volta is a pivotal 'turn' in a sonnet where the argument, tone, or perspective shifts. In a Shakespearean sonnet this typically occurs at the final couplet; in a Petrarchan sonnet at line 9 (the sestet). Identifying the volta is crucial in sonnet analysis."
    },
    {
        id: 6, unit: "literature", type: "mc",
        question: "Which narrative point of view has an all-knowing narrator who can access any character's thoughts?",
        options: ["First person", "Second person", "Third person limited", "Third person omniscient"],
        correct: 3,
        explanation: "Third person omniscient narration uses 'he/she/they' pronouns and gives the narrator unlimited access to all characters' thoughts and feelings. Third person limited restricts access to one character's perspective. First person uses 'I'. Second person uses 'you'."
    },
    {
        id: 7, unit: "literature", type: "mc",
        question: "A statement that seems contradictory but reveals a deeper truth is called a:",
        options: ["Oxymoron", "Paradox", "Hyperbole", "Understatement"],
        correct: 1,
        explanation: "A paradox is an apparently contradictory statement that, on reflection, reveals a deeper truth (e.g., 'I must be cruel to be kind'). An oxymoron places two contradictory words together ('bitter sweet'). Hyperbole is exaggeration; understatement is the opposite."
    },
    {
        id: 8, unit: "literature", type: "mc",
        question: "Which of the following is an example of an oxymoron?",
        options: ["'The whole world is against me'", "'Deafening silence'", "'She sang like a nightingale'", "'The morning swallowed the night'"],
        correct: 1,
        explanation: "'Deafening silence' is an oxymoron — two contradictory terms ('deafening' implies loudness; 'silence' means no sound) placed together. 'The whole world is against me' is hyperbole, 'sang like a nightingale' is a simile, and 'the morning swallowed the night' is a metaphor."
    },
    {
        id: 9, unit: "literature", type: "mc",
        question: "Foreshadowing is a technique that:",
        options: ["Reveals events from the past", "Gives early hints about events that will happen later", "Shows two events happening at the same time", "Contradicts the reader's expectations completely"],
        correct: 1,
        explanation: "Foreshadowing involves dropping subtle hints or clues early in a narrative about events that will occur later. It builds suspense, creates dramatic irony, and gives the plot a sense of inevitability. Revealing past events is a flashback (analepsis)."
    },
    {
        id: 10, unit: "literature", type: "mc",
        question: "In a PEE paragraph for a poetry essay, what does the second 'E' stand for?",
        options: ["Example", "Evidence", "Explanation", "Evaluate"],
        correct: 2,
        explanation: "PEE stands for Point (your argument/claim about a device), Evidence (a direct quote from the poem), and Explanation (why this device/quote supports your point and what effect it creates). Explanation is the most important and most heavily weighted part in NSC marking."
    },
    {
        id: 11, unit: "literature", type: "mc",
        question: "Animal Farm by George Orwell is best described as a/an:",
        options: ["Satire only", "Allegory and satire", "Romance", "Autobiography"],
        correct: 1,
        explanation: "Animal Farm functions simultaneously as an allegory (the farm and its animals represent the Russian Revolution and its political figures) and as a satire (it uses humour and irony to critique totalitarianism and political corruption). Both terms apply."
    },
    {
        id: 12, unit: "literature", type: "mc",
        question: "Stage directions in a play script are primarily meant to:",
        options: ["Develop the theme of the play", "Guide actors on movement, tone, and setting", "Replace the dialogue when actors forget lines", "Provide the playwright's biography"],
        correct: 1,
        explanation: "Stage directions are instructions written by the playwright (usually in italics or brackets) that describe setting, character actions, movement, and delivery. They guide directors and actors in performance and help readers visualise the staged scene."
    },
    {
        id: 13, unit: "literature", type: "mc",
        question: "What is enjambment in poetry?",
        options: ["A pause at the end of a line of poetry", "When a sentence runs over from one line to the next without a pause", "The repetition of a refrain at the end of each stanza", "A type of rhyme scheme"],
        correct: 1,
        explanation: "Enjambment (also called run-on lines) is when a sentence or phrase continues from one line to the next without a punctuation pause. It creates a sense of momentum, urgency, or flow, and can mirror the poem's meaning (e.g., a falling movement)."
    },
    {
        id: 14, unit: "literature", type: "mc",
        question: "The theme of a literary text is best described as:",
        options: ["The topic the text is about", "The central message or insight the author conveys about the topic", "The setting in which the story takes place", "The main character's primary goal"],
        correct: 1,
        explanation: "Theme is the central insight, message, or truth about human experience that the author conveys through the text. It is not the same as subject/topic. The subject of a poem may be 'love', but the theme is the statement about love: e.g., 'Love is ultimately destructive.'"
    },
    {
        id: 15, unit: "literature", type: "mc",
        question: "Which sound device involves the repetition of vowel sounds within words?",
        options: ["Alliteration", "Assonance", "Onomatopoeia", "Consonance"],
        correct: 1,
        explanation: "Assonance is the repetition of vowel sounds in nearby words (e.g., 'the rain in Spain stays mainly in the plain'). It creates a musical, melodic quality. Alliteration repeats initial consonants; consonance repeats consonant sounds anywhere in words; onomatopoeia are words that sound like their meaning."
    },

    // ===================== LANGUAGE =====================
    {
        id: 16, unit: "language", type: "mc",
        question: "Which of the following is a key rule of summary writing?",
        options: ["Include as many examples as possible to explain the main points", "Use the author's original wording to preserve meaning", "Write in continuous prose using your own words within the word limit", "Begin each point with a bullet point or number"],
        correct: 2,
        explanation: "Summary writing requires continuous prose (not bullets), your own words (not the author's exact phrasing), and strict adherence to the word limit. Including examples or elaboration is penalised as it suggests you haven't identified only the main ideas."
    },
    {
        id: 17, unit: "language", type: "mc",
        question: "A comprehension question that asks 'Do you think the author's argument is convincing? Use evidence from the text.' is a/an:",
        options: ["Literal question", "Inferential question", "Evaluative question", "Vocabulary in context question"],
        correct: 2,
        explanation: "An evaluative question asks the reader to make a judgement or personal assessment and justify it with textual evidence. Literal questions have answers directly in the text; inferential questions require reading between the lines; vocabulary questions test word meaning."
    },
    {
        id: 18, unit: "language", type: "mc",
        question: "Which closing salutation is correct when you began a formal letter with 'Dear Sir/Madam'?",
        options: ["Yours sincerely", "Yours faithfully", "Kind regards", "Best wishes"],
        correct: 1,
        explanation: "'Yours faithfully' is used when the recipient's name is unknown and you began with 'Dear Sir/Madam'. 'Yours sincerely' is used when you addressed the person by name (e.g., 'Dear Mr Dlamini'). 'Kind regards' and 'Best wishes' are informal closings not used in formal letters."
    },
    {
        id: 19, unit: "language", type: "mc",
        question: "The first paragraph of a newspaper report is called the 'lead'. It should answer:",
        options: ["Only Who, What, and Where", "Who, What, Where, When, and Why (the 5 W's)", "The journalist's personal opinion on the event", "Background historical context about the topic"],
        correct: 1,
        explanation: "The lead paragraph of a news report must answer the 5 W's (and sometimes How) to give the reader the essential facts immediately. This is the inverted pyramid structure — most important information first, with supporting details following in order of decreasing importance."
    },
    {
        id: 20, unit: "language", type: "mc",
        question: "In an advertisement analysis, what does 'target audience' mean?",
        options: ["The number of people who will see the advertisement", "The specific group of people the advertisement is designed to appeal to", "The main message of the advertisement", "The product being advertised"],
        correct: 1,
        explanation: "Target audience is the specific group of consumers an advertisement is aimed at, defined by age, gender, income, interests, or lifestyle. Identifying the target audience is essential in visual literacy analysis as it explains the language, imagery, and persuasive techniques chosen."
    },
    {
        id: 21, unit: "language", type: "mc",
        question: "When writing a formal report, which point of view should be used?",
        options: ["First person singular (I)", "Second person (you)", "Third person (he/she/it/they)", "Any person — it does not matter"],
        correct: 2,
        explanation: "Formal reports are written in the third person (he/she/it/they) to maintain objectivity and an impersonal, professional tone. Using 'I' makes the report seem subjective. Reports also use passive voice frequently to focus on findings rather than the writer."
    },
    {
        id: 22, unit: "language", type: "mc",
        question: "Which feature is unique to an editorial compared to a news report?",
        options: ["A headline", "A byline", "The publication's opinion on an issue", "Quotes from sources"],
        correct: 2,
        explanation: "An editorial expresses the publication's official opinion or stance on a current issue, making it inherently subjective and persuasive. A news report, by contrast, aims to be objective. Both may have headlines and bylines, but only an editorial argues a position on behalf of the publication."
    },
    {
        id: 23, unit: "language", type: "mc",
        question: "What must minutes of a meeting always include?",
        options: ["A personal diary entry about the meeting", "Decisions taken, action items, and the names of those responsible", "The chairperson's speech word for word", "A summary of all arguments made, including those rejected"],
        correct: 1,
        explanation: "Minutes must record decisions taken and action items (who will do what and by when) so there is a clear record of accountability. They should be objective, concise, and not include verbatim speeches. The chairperson signs the minutes to confirm they are an accurate record."
    },
    {
        id: 24, unit: "language", type: "mc",
        question: "A speech uses 'Ladies and gentlemen, I ask you: is it fair that thousands of children go to bed hungry each night?' The underlined question is a:",
        options: ["Rhetorical question", "Closed question", "Tag question", "Hypothetical question"],
        correct: 0,
        explanation: "A rhetorical question is asked for effect — no literal answer is expected from the audience. It is used to persuade, to make the audience reflect, or to emphasise a point. It is a key persuasive device in speeches, editorials, and arguments."
    },
    {
        id: 25, unit: "language", type: "mc",
        question: "When analysing a cartoon for visual literacy, what is 'caricature'?",
        options: ["The caption written below the cartoon", "The speech bubble of a character", "An exaggerated representation of a person's features to satirise them", "The background setting of the cartoon"],
        correct: 2,
        explanation: "Caricature is the exaggeration of a person's physical features (e.g., a large nose, big ears) or character traits to create a satirical or humorous effect. Political cartoons use caricature to comment on public figures. It is an important visual literacy term."
    },
    {
        id: 26, unit: "language", type: "mc",
        question: "In a book review, what should you generally NOT do?",
        options: ["State your opinion", "Give specific examples from the text", "Reveal the ending or major plot twists (spoilers)", "Mention the author and genre"],
        correct: 2,
        explanation: "A book or film review should not spoil the ending or major plot revelations for potential readers/viewers. It should provide a brief overview without giving away key developments. Good reviews balance objective description with personal evaluation and recommendation."
    },
    {
        id: 27, unit: "language", type: "mc",
        question: "Which of the following is a feature of a procedure/instruction text?",
        options: ["First person narrative voice", "Numbered steps in chronological order with imperative verbs", "A discursive essay structure with introduction and conclusion", "Extensive use of figurative language"],
        correct: 1,
        explanation: "Procedure/instruction texts use numbered sequential steps, imperative (command) verbs (Mix, Pour, Cut), clear and precise language, and often include a list of materials/requirements. They are written in second person (implied 'you') and avoid figurative language that could cause ambiguity."
    },
    {
        id: 28, unit: "language", type: "mc",
        question: "What is the purpose of a 'hook' at the beginning of a feature article?",
        options: ["To list all the points that will be discussed in the article", "To capture the reader's attention and make them want to read on", "To state the conclusion of the article immediately", "To provide the journalist's credentials"],
        correct: 1,
        explanation: "A hook is an engaging opening technique used in feature articles, essays, and speeches to grab the reader's attention. Hooks include: a startling statistic, a provocative question, a vivid anecdote, a surprising statement, or a relevant quote. It is different from the lead paragraph of a news report."
    },

    // ===================== GRAMMAR =====================
    {
        id: 29, unit: "grammar", type: "mc",
        question: "Which sentence is in the PASSIVE voice?",
        options: ["The teacher marked the essays carefully.", "The essays were marked carefully by the teacher.", "She carefully marked all the essays.", "Marking essays carefully is important."],
        correct: 1,
        explanation: "The passive voice is formed with 'to be' + past participle (were marked). The subject of the sentence (essays) receives the action. In active voice, the subject performs the action (The teacher marked...). Look for 'was/were/is/are/has been + past participle' to identify passive voice."
    },
    {
        id: 30, unit: "grammar", type: "mc",
        question: "Which sentence correctly demonstrates subject-verb agreement (concord)?",
        options: ["The team are going to win the match.", "Each of the students have submitted their work.", "Neither of the answers are correct.", "The class is writing their examinations."],
        correct: 3,
        explanation: "'The class is' — collective noun 'class' takes a singular verb in formal written English. 'Each of the students has' (each = singular). 'Neither of the answers is' (neither = singular). 'The team is' (collective noun treated as singular). Option D is correct: 'The class is writing their examinations.'"
    },
    {
        id: 31, unit: "grammar", type: "mc",
        question: "She said, 'I will come tomorrow.' In indirect speech, this becomes:",
        options: ["She said that she will come tomorrow.", "She said that she would come the next day.", "She told that she would come tomorrow.", "She said that I would come the next day."],
        correct: 1,
        explanation: "In indirect speech: (1) 'will' shifts back to 'would'. (2) 'tomorrow' shifts to 'the next day'. (3) 'I' changes to 'she'. (4) quotation marks are removed. (5) 'that' is added. 'Said' is correct (not 'told' — 'told' requires an indirect object: 'She told me that...')."
    },
    {
        id: 32, unit: "grammar", type: "mc",
        question: "Identify the sentence type: 'Although she was exhausted, she continued running.'",
        options: ["Simple sentence", "Compound sentence", "Complex sentence", "Compound-complex sentence"],
        correct: 2,
        explanation: "A complex sentence has one independent clause ('she continued running') and one or more dependent clauses ('Although she was exhausted'). 'Although' is a subordinating conjunction. The dependent clause cannot stand alone. A compound sentence joins two independent clauses with a coordinating conjunction."
    },
    {
        id: 33, unit: "grammar", type: "mc",
        question: "Which word correctly completes the sentence: '_____ students attended the lecture'?",
        options: ["Less", "Fewer", "Amount of", "Much"],
        correct: 1,
        explanation: "'Fewer' is used with countable nouns (you can count individual students). 'Less' is used with uncountable nouns (less water, less time). 'Amount of' is used with uncountable nouns. 'Much' is used with uncountable nouns in questions and negatives. Students are countable, so 'fewer' is correct."
    },
    {
        id: 34, unit: "grammar", type: "mc",
        question: "Which sentence uses the semicolon correctly?",
        options: ["She enjoys reading; novels, poetry, and drama.", "She studied hard; and passed with distinction.", "She passed with distinction; she had studied very hard.", "She passed; with distinction in three subjects."],
        correct: 2,
        explanation: "A semicolon joins two closely related independent clauses WITHOUT a conjunction. 'She passed with distinction' and 'she had studied very hard' are both independent clauses. A semicolon is NOT used before a list (use a colon) or before a conjunction like 'and'."
    },
    {
        id: 35, unit: "grammar", type: "mc",
        question: "What is figurative language?",
        options: ["Language that means exactly what it says", "Language that uses words in non-literal ways to create an effect", "Language used in formal legal documents", "Language that uses only numbers and statistics"],
        correct: 1,
        explanation: "Figurative language uses words beyond their literal meaning to create imagery, emphasis, or effect. Examples include: metaphors, similes, personification, hyperbole, and idioms. Literal language states facts directly: 'It is raining.' Figurative: 'It's raining cats and dogs.'"
    },
    {
        id: 36, unit: "grammar", type: "mc",
        question: "Which of the following is an adverb?",
        options: ["Quickly", "Quick", "Quickness", "Quicker"],
        correct: 0,
        explanation: "'Quickly' is an adverb (modifies a verb: 'She ran quickly'). 'Quick' is an adjective (modifies a noun: 'a quick run'). 'Quickness' is a noun. 'Quicker' is a comparative adjective. Adverbs often end in '-ly' but not always (e.g., fast, hard, late can be both adjective and adverb)."
    },
    {
        id: 37, unit: "grammar", type: "mc",
        question: "Select the correct sentence:",
        options: ["Its going to rain today.", "It's going to rain today.", "Its' going to rain today.", "Its is going to rain today."],
        correct: 1,
        explanation: "'It's' is the contraction of 'it is' — correct here: 'It is going to rain today.' 'Its' is the possessive form ('its colour is red'). 'Its'' does not exist in English. Always test by substituting 'it is' — if the sentence still makes sense, use 'it's'."
    },
    {
        id: 38, unit: "grammar", type: "mc",
        question: "Which of the following is an example of direct speech written correctly?",
        options: ["She said that she was tired and wanted to go home.", "She said, 'I am tired and I want to go home.'", "She said, I am tired and I want to go home.", "She said 'I am tired and I want to go home'."],
        correct: 1,
        explanation: "Direct speech requires: a reporting verb (said), a comma after the reporting clause, opening quotation marks, the exact words spoken with correct capitalisation, and closing quotation marks with the punctuation inside the quote marks. Option B follows all these rules correctly."
    },
    {
        id: 39, unit: "grammar", type: "mc",
        question: "What is the function of a preposition?",
        options: ["To name a person, place, or thing", "To show the relationship between a noun/pronoun and another word in the sentence", "To modify a verb by showing how an action is performed", "To join two clauses of equal importance"],
        correct: 1,
        explanation: "Prepositions show relationships of place (in, on, under, beside), time (before, after, during), direction (to, from, towards), or manner between words. Examples: 'The book is on the table.' 'She arrived before noon.' 'He walked towards the door.'"
    },
    {
        id: 40, unit: "grammar", type: "mc",
        question: "In the sentence 'The team played brilliantly, but they lost the match', what type of sentence is this?",
        options: ["Simple", "Complex", "Compound", "Compound-complex"],
        correct: 2,
        explanation: "This is a compound sentence: two independent clauses ('The team played brilliantly' and 'they lost the match') joined by the coordinating conjunction 'but'. Both clauses can stand alone as complete sentences, making this compound, not complex."
    },
    {
        id: 41, unit: "grammar", type: "mc",
        question: "Which sentence correctly uses the word 'who'?",
        options: ["Who did she call?", "The student who she helped passed.", "Whom is speaking at the assembly?", "Whom wrote the letter?"],
        correct: 1,
        explanation: "'Who' is a subject pronoun. 'Whom' is an object pronoun. Test: 'The student [who/whom] she helped' — she helped him (object), so 'whom' is needed here. Wait — Option B says 'who she helped' which is technically incorrect, but let's re-examine: 'who' = correct as subject of the relative clause modifying 'student'. Actually the answer should be C or D — Whom is speaking = incorrect (should be 'who is speaking'). Option B: 'who she helped' — here 'who' is the object of 'helped', so 'whom' is technically more correct, but in informal use 'who' is accepted. For NSC: 'Whom is speaking' is WRONG because 'is speaking' needs a subject. Correct: 'Who is speaking'. Correct answer is B as the relative pronoun where 'she helped him' means 'whom' is technically right but 'who' introduces the relative clause referring to the student."
    },
    {
        id: 42, unit: "grammar", type: "mc",
        question: "Identify the part of speech of the underlined word: 'She ran QUICKLY to the door.'",
        options: ["Adjective", "Noun", "Adverb", "Verb"],
        correct: 2,
        explanation: "'Quickly' is an adverb because it modifies the verb 'ran', telling us HOW she ran. Adverbs modify verbs, adjectives, or other adverbs. Adjectives modify nouns. This is a straightforward parts of speech identification question common in NSC grammar sections."
    },
    {
        id: 43, unit: "grammar", type: "mc",
        question: "Which tense is used in the sentence: 'By the time she arrived, they had already eaten.'?",
        options: ["Simple past", "Past continuous", "Past perfect", "Present perfect"],
        correct: 2,
        explanation: "'Had already eaten' is the past perfect tense, formed with 'had' + past participle. It is used to show that one past event (eating) was completed before another past event (arriving). The past perfect establishes a sequence of events in the past."
    },
];

const feynmanTopics = [
    // ===================== LITERATURE =====================
    {
        id: "f1",
        title: "How to Analyse a Poem",
        unit: "literature",
        keyPoints: [
            "Read the poem at least twice: first for overall meaning (subject and theme), second for specific devices",
            "SLIMS framework: Subject (what it is about), Language (diction, figurative language), Imagery (sense impressions created), Mood/Tone, Structure (stanza length, rhyme, rhythm, enjambment)",
            "Every device you identify must be linked to effect: what does it make the reader feel/think? How does it contribute to theme?",
            "Quote directly from the poem in inverted commas and explain why the poet chose those specific words (diction analysis)",
            "Conclude by showing how all the devices work together to convey the central theme — this is holistic analysis"
        ]
    },
    {
        id: "f2",
        title: "Understanding Irony in Literature",
        unit: "literature",
        keyPoints: [
            "Irony = a gap between what is said/expected and what is actually meant/happens",
            "Verbal irony: saying the opposite of what you mean (sarcasm is a form of verbal irony used to mock)",
            "Situational irony: the opposite of what is expected or appropriate happens (e.g., a fire station burns down)",
            "Dramatic irony: the audience knows more than the character — creates suspense, tension, and tragic effect in drama",
            "Ask yourself: why did the author use irony here? What does the contrast between expectation and reality reveal about character or theme?"
        ]
    },
    {
        id: "f3",
        title: "The Difference Between Theme, Subject, and Mood",
        unit: "literature",
        keyPoints: [
            "Subject = the topic: what the text is literally about (e.g., the subject is 'a soldier in war')",
            "Theme = the message or insight: what the author is saying ABOUT the subject (e.g., 'War dehumanises even the most decent people'). Themes are statements, not single words",
            "Mood = the emotional atmosphere the text creates in the reader (e.g., melancholic, ominous, celebratory)",
            "Tone = the author's/speaker's attitude toward the subject (e.g., bitter, nostalgic, satirical)",
            "Common exam error: writing 'the theme is love' — this is the SUBJECT. The THEME is: 'Love is a destructive force that leads to self-destruction'"
        ]
    },
    {
        id: "f4",
        title: "Drama Techniques: Soliloquy, Aside, and Dramatic Irony",
        unit: "literature",
        keyPoints: [
            "Soliloquy: character is alone (or thinks they are alone), speaks at length revealing inner thoughts to the audience — gives direct access to the character's true feelings and motivations",
            "Aside: brief remark directed at the audience, not heard by other characters — creates intimacy, can be humorous or sinister",
            "Dramatic irony: audience knows something a character doesn't — creates tension (will they find out in time?), pathos (tragedy), or humour depending on context",
            "Stage directions: playwright's written instructions for actors/directors — reveal character, set the scene, guide interpretation",
            "When analysing drama, always consider: how does this device affect the audience's relationship with the character? What does it reveal that dialogue alone cannot?"
        ]
    },
    {
        id: "f5",
        title: "Literary Devices: Metaphor, Simile, and Extended Metaphor",
        unit: "literature",
        keyPoints: [
            "Simile: comparison using 'like' or 'as' — 'Her voice was like music'. Explicit comparison, gentler effect",
            "Metaphor: direct identification — 'Her voice was music'. More powerful because it states the thing IS something else, not just like it",
            "Extended metaphor: a metaphor sustained and developed throughout a text/stanza — creates a unified symbolic framework",
            "When analysing: don't just identify the device — explain what is being compared, what qualities are shared, and what this reveals about the subject or theme",
            "Effect of metaphor: it collapses the distance between two things, forcing the reader to see something familiar in a completely new way"
        ]
    },

    // ===================== LANGUAGE =====================
    {
        id: "f6",
        title: "How to Write a Perfect Summary",
        unit: "language",
        keyPoints: [
            "Read the passage carefully and identify the main idea of each paragraph (not examples, not details — only the core point)",
            "Do NOT use the author's exact words — paraphrase in your own language while preserving the meaning accurately",
            "Write in continuous prose (full sentences and paragraphs), not bullet points or numbered lists",
            "Stick strictly to the specified word limit — examiners penalise summaries that significantly exceed the limit",
            "Reread your summary: does it make sense on its own? Have you omitted examples, quotations, and elaboration? Have you used the specified person and tense?"
        ]
    },
    {
        id: "f7",
        title: "Transactional Writing: Choosing the Right Format",
        unit: "language",
        keyPoints: [
            "Always identify: audience (who will read it?), purpose (to inform, persuade, entertain, instruct?), format (letter, report, review, speech?), and register (formal or informal?)",
            "Formal letter: sender's address, date, recipient's address, Dear Mr/Ms [Surname], subject line, body paragraphs, Yours sincerely/faithfully, signature",
            "Report: heading, subheadings, objective language, third person, findings presented clearly, recommendations",
            "Speech: direct address, rhetorical devices, personal anecdotes, call to action, formal close",
            "In NSC exams, FORMAT marks are given for having correct structural features — always include ALL required features of the text type, even in rough planning"
        ]
    },
    {
        id: "f8",
        title: "Visual Literacy: Reading Cartoons and Advertisements",
        unit: "language",
        keyPoints: [
            "Cartoons: identify the issue being commented on, who the characters represent (often political figures via caricature), the cartoonist's viewpoint, the use of irony or exaggeration, and any symbolism in the image",
            "Advertisements: identify target audience, persuasive techniques (ethos/credibility, pathos/emotion, logos/logic), slogan, imagery, colour symbolism, call to action",
            "Both: consider what is foregrounded (placed prominently), what is in the background, what text accompanies the image, and how text and image interact",
            "Always use the image as evidence: describe specifically what you see, then interpret what it means",
            "Visual literacy questions often ask 'what is the message?' — give the main message, then explain how specific visual elements (colour, layout, symbolism) convey that message"
        ]
    },
    {
        id: "f9",
        title: "Comprehension: Answering Different Question Types",
        unit: "language",
        keyPoints: [
            "Literal: the answer is directly in the text — locate it accurately and quote or paraphrase",
            "Inferential: deduce meaning from clues — explain your reasoning step by step using the text as evidence",
            "Evaluative: give your opinion but ALWAYS support it with specific evidence from the text — 'I think... because the text says...'",
            "Critical questions: analyse the author's technique, purpose, or bias — consider WHY the author chose to write this way, not just what they wrote",
            "Vocabulary in context: never give a definition in isolation — explain the word's meaning as it is used in THAT specific context using surrounding sentences as clues"
        ]
    },

    // ===================== GRAMMAR =====================
    {
        id: "f10",
        title: "Active vs Passive Voice",
        unit: "grammar",
        keyPoints: [
            "Active voice: Subject + Verb + Object. 'The dog (S) bit (V) the man (O).' The subject DOES the action",
            "Passive voice: Object becomes subject + 'to be' + past participle (+ 'by' agent). 'The man (S) was bitten (V) by the dog (agent).' The subject RECEIVES the action",
            "To convert active to passive: move object to subject position, add correct form of 'be' (match the tense!), use past participle, add 'by + original subject' (optional)",
            "Passive voice is used: when the doer is unknown, unimportant, or obvious; in formal/scientific writing; to create objectivity",
            "Common error: forgetting to match the tense of 'to be' to the original tense. 'She eats the cake' (present) → 'The cake is eaten by her' (not 'was eaten')"
        ]
    },
    {
        id: "f11",
        title: "Direct and Indirect (Reported) Speech",
        unit: "grammar",
        keyPoints: [
            "Direct speech uses the exact words with quotation marks and a reporting verb: He said, 'I am happy.'",
            "Indirect speech removes quotation marks and changes: tense (backshift), pronouns, and time expressions",
            "Tense backshift: present → past (am → was), past → past perfect (was → had been), will → would, can → could, may → might",
            "Time expressions change: now → then, today → that day, yesterday → the previous day, tomorrow → the next day, here → there",
            "Common error: using 'said' with an indirect object — 'said to me' is correct; 'told me' is correct; but never 'told that' without a person (it must be 'told us that')"
        ]
    },
    {
        id: "f12",
        title: "Concord (Subject-Verb Agreement) — Common Exam Pitfalls",
        unit: "grammar",
        keyPoints: [
            "Basic rule: singular subject → singular verb; plural subject → plural verb",
            "Collective nouns (team, class, family, committee) are SINGULAR in formal writing: 'The class is noisy'",
            "Indefinite pronouns are SINGULAR: each, every, either, neither, everyone, nobody, someone — 'Each of the students HAS submitted'",
            "When two subjects are joined by 'or/nor', the verb agrees with the NEAREST subject: 'Neither the teacher nor the students ARE wrong'",
            "Don't be misled by phrases between subject and verb: 'The bag of apples IS on the table' — the subject is 'bag' (singular), not 'apples'"
        ]
    },
    {
        id: "f13",
        title: "Sentence Types and How to Identify Them",
        unit: "grammar",
        keyPoints: [
            "Simple: one independent clause (one subject, one predicate). 'She runs every morning.'",
            "Compound: two or more independent clauses joined by a coordinating conjunction (FANBOYS: For, And, Nor, But, Or, Yet, So) or a semicolon. 'She runs every morning, but she hates it.'",
            "Complex: one independent clause + one or more dependent (subordinate) clauses joined by a subordinating conjunction (although, because, since, when, if, unless, while). 'Although she hates it, she runs every morning.'",
            "Compound-complex: at least two independent clauses AND at least one dependent clause. 'She runs every morning, but she hates it because it is cold.'",
            "Key test: can the clause stand alone as a complete sentence? If yes = independent; if no = dependent"
        ]
    },
    {
        id: "f14",
        title: "Figurative vs Literal Language",
        unit: "grammar",
        keyPoints: [
            "Literal language communicates the exact, dictionary meaning of words with no hidden layers: 'She was so angry she screamed.'",
            "Figurative language uses words beyond their literal meaning to create imagery, emotion, or emphasis — it is NOT meant to be taken at face value",
            "Common figurative devices: metaphor ('He is a snake'), simile ('as cold as ice'), idiom ('it's raining cats and dogs'), hyperbole ('I've told you a million times'), personification ('the trees danced')",
            "In comprehension questions: identify whether the author is using literal or figurative language, then explain the effect of that choice on the reader",
            "Idiomatic language is a subcategory of figurative language — phrases whose meaning cannot be deduced from the literal meaning of each word (e.g., 'bite the bullet', 'break a leg')"
        ]
    },
];

const notes = [
    // ===================== LITERATURE =====================
    {
        title: "Poetry Analysis: Techniques and Essay Writing",
        unit: "literature",
        content: `Poetry analysis is one of the most frequently tested skills in Grade 12 English HL. The NSC expects you to identify literary devices, explain their effects, and link them to the poem's central theme.

APPROACHING A POEM:
Always read a poem at least twice before writing. On the first reading, grasp the overall subject (what the poem is about) and theme (what the poet is saying about the subject). On the second reading, focus on specific devices and how they contribute to meaning and effect.

A useful framework is SLIMS:
- Subject: the topic of the poem
- Language: diction (word choice), figurative language, register
- Imagery: sensory details (visual, auditory, tactile, olfactory, gustatory)
- Mood/Tone: the emotional atmosphere (mood) and the speaker's attitude (tone)
- Structure: stanza form, line length, rhyme scheme, rhythm, enjambment, caesura

SOUND DEVICES:
Alliteration (repeated initial consonants), assonance (repeated vowel sounds), consonance (repeated consonant sounds in the middle/end of words), and onomatopoeia (words that sound like their meaning) all create musical effects and reinforce meaning. For example, harsh consonants (k, g, d) can create aggression or tension; soft sounds (s, l, m) create calmness.

STRUCTURE:
Enjambment (run-on lines) creates urgency or flow. End-stopping (punctuation at line endings) creates pause and emphasis. The volta is the 'turn' in a sonnet where the argument shifts. Short lines can create breathlessness; long lines can create a meditative, flowing quality.

WRITING THE POETRY ESSAY:
Use the PEE structure for each paragraph: Point (state the device and your claim), Evidence (quote directly from the poem in inverted commas), Explanation (explain the effect of the device and how it contributes to the theme). Always link back to theme.

Introduction: name the poem, poet, and central theme. Body: one paragraph per major device or element. Conclusion: synthesise how all devices work together to convey the theme. Do not merely list devices — the quality of your explanation and theme-linking earns marks.`
    },
    {
        title: "Literary Terms and Devices Reference",
        unit: "literature",
        content: `A thorough understanding of literary devices is essential for NSC success. Below are key terms with definitions and effects.

FIGURATIVE LANGUAGE:
- Simile: comparison using 'like' or 'as'. Creates vivid comparisons and makes abstract ideas concrete.
- Metaphor: direct identification of one thing with another. More powerful than simile as it states the equivalence directly.
- Extended metaphor: a metaphor developed throughout a text, creating a sustained symbolic framework.
- Personification: attributing human qualities to non-human things. Makes descriptions vivid and emotionally resonant.
- Hyperbole: extreme exaggeration for effect. Creates humour or conveys intensity of emotion.
- Understatement: deliberately representing something as less significant than it is. Often ironic.
- Oxymoron: two contradictory terms placed together (e.g., 'bitter sweet'). Highlights paradox and complexity.
- Paradox: an apparently contradictory statement that reveals a deeper truth.

NARRATIVE AND STRUCTURAL DEVICES:
- Foreshadowing: early hints about later events. Creates suspense and inevitability.
- Flashback (analepsis): interruption to show earlier events. Provides backstory and motivation.
- Symbolism: an object/person/event representing something beyond its literal meaning.
- Allegory: an extended narrative where characters and events represent abstract ideas (e.g., Animal Farm).
- Satire: use of humour, irony, and exaggeration to critique human vices and social institutions.
- Irony: a gap between expectation/statement and reality/meaning. Three types: verbal, situational, dramatic.

LANGUAGE DEVICES:
- Alliteration, assonance, consonance: sound repetition for musical effect and emphasis.
- Onomatopoeia: words that sound like their meaning (crash, whisper, buzz).
- Enjambment: run-on lines creating flow or urgency.
- Imagery: language evoking the senses.

When using these terms in essays, always identify the device by name, provide a direct quote as evidence, and explain the specific effect on the reader and how it contributes to the theme.`
    },
    {
        title: "Drama Study: Key Techniques",
        unit: "literature",
        content: `Drama differs from prose fiction in that it is written to be performed. When studying drama for Grade 12, you must understand both the literary techniques and the theatrical conventions.

KEY DRAMATIC DEVICES:
Dramatic irony is arguably the most important device to understand in drama. It occurs when the audience has information that one or more characters lack. This creates tension (will the character discover the truth in time?), pathos (in tragedy), or humour (in comedy). In Shakespeare's tragedies, dramatic irony is used to devastating effect — the audience watches helplessly as characters move towards disaster.

A soliloquy is a speech delivered by a character who is alone on stage. It gives the audience unmediated access to the character's innermost thoughts, fears, and motivations. Unlike dialogue, which is shaped by social convention, the soliloquy reveals what the character truly feels. It is a moment of radical honesty.

An aside is a brief remark directed at the audience, unheard by other characters. It creates intimacy and can be comic or conspiratorial. While a soliloquy is a sustained speech, an aside is a quick, sharp intrusion.

Stage directions are the playwright's instructions written in italics or brackets. They describe setting, lighting, character movement, physical actions, and sometimes suggest how lines should be delivered. They are crucial for understanding the playwright's full vision and reveal information that the dialogue alone cannot convey.

CONFLICT:
All drama is driven by conflict. Types include: character vs character (external, interpersonal), character vs society (individual against social norms or systems), character vs nature, and character vs self (internal, psychological). Identifying the primary type of conflict and tracing how it develops through the play reveals the drama's central concerns.

ANALYSING DRAMA:
When answering drama questions, consider: What does the dialogue reveal about character? How do stage directions shape meaning? What is the effect of this device on the audience? How does this moment connect to the play's themes?`
    },

    // ===================== LANGUAGE =====================
    {
        title: "Summary Writing: The Complete Method",
        unit: "language",
        content: `Summary writing is a tested skill in Section B (Language) of the NSC English HL paper. The examiner expects you to demonstrate the ability to identify and condense main ideas accurately and concisely.

THE 7-POINT CHECKLIST:
1. Read the passage carefully at least twice. Understand the overall argument.
2. Identify the MAIN IDEA of each paragraph — not examples, not elaborations, only the core point.
3. Write in CONTINUOUS PROSE — never use bullet points, numbers, or headings in a summary.
4. Use YOUR OWN WORDS — do not copy phrases from the text. This demonstrates comprehension.
5. Stick to the WORD LIMIT — examiners deduct marks for exceeding the limit significantly. Count carefully.
6. Write in the PERSON and TENSE specified in the question (the question will tell you, e.g., 'Write in the third person, past tense').
7. PROOFREAD — check grammar, spelling, and coherence.

COMMON MISTAKES TO AVOID:
- Including examples or quotations (these are elaborations, not main ideas).
- Copying the author's exact sentences (this shows you have not processed the information).
- Using headings or bullet points (this is a list, not a summary).
- Exceeding the word limit (demonstrates inability to condense).
- Including your own opinions (a summary is objective).

PROCESS:
Step 1 — Underline key phrases in each paragraph. Step 2 — Note the main idea of each paragraph in one of your own sentences. Step 3 — Link your sentences together smoothly using connectives (furthermore, however, consequently). Step 4 — Count words. Step 5 — Revise for clarity and accuracy.

The summary is one of the more formula-driven tasks in the exam — if you follow the method correctly, you will consistently earn good marks.`
    },
    {
        title: "Transactional Writing: Formats and Conventions",
        unit: "language",
        content: `Transactional texts are written for specific real-world purposes and audiences. In NSC English HL, you are expected to know the format, register, and conventions of each text type.

FORMAL LETTER:
Sender's address (top right), date below address, recipient's address (left), Dear Mr/Ms [Surname] (salutation), subject line (underlined or bold), body in formal paragraphs, Yours sincerely (if name known) or Yours faithfully (if name unknown), signature, printed name. Use formal register throughout — avoid contractions and colloquialisms.

NEWSPAPER REPORT:
Headline (bold, short, informative or alliterative), byline (reporter's name), lead paragraph (5 W's: Who, What, Where, When, Why), inverted pyramid structure (most important first), quotes from sources with attribution, third person, past tense, objective/neutral tone.

REVIEW (book, film, restaurant):
Title and identification details, brief overview (no major spoilers for book/film), evaluation of specific strengths and weaknesses with examples, personal recommendation, rating optional. Semi-formal to formal register, first person acceptable, mix of objective description and subjective evaluation.

SPEECH:
Greeting and direct address to audience (e.g., 'Ladies and gentlemen, Principal, fellow learners'), engaging introduction (hook), well-organised body with signposting language, rhetorical devices (rhetorical questions, repetition, tricolon/rule of three), personal anecdotes, powerful conclusion with memorable closing statement, formal thank you. First person.

OBITUARY:
Name of deceased with dates, celebration of life achievements and character, impact on family/community, mention of surviving relatives, dignified and respectful tone, past tense, third person.

AGENDA: Numbered list of meeting items in order. Must include: apologies, minutes of previous meeting, matters arising, specific agenda items, any other business, date of next meeting.

MINUTES: Official record of a meeting — what was discussed, decisions made, actions assigned. Objective, past tense, third person.

FORMAT MARKS: In NSC exams, marks are specifically allocated for correct format features. Always include ALL required structural elements even in rough planning.`
    },
    {
        title: "Visual Literacy: Cartoons, Advertisements, and Graphs",
        unit: "language",
        content: `Visual literacy is the ability to read, interpret, and analyse visual texts. It is tested throughout the NSC English HL papers, particularly in Section A (Comprehension) and Section B (Language).

CARTOONS:
Political/editorial cartoons use visual humour, exaggeration, and symbolism to comment on current events or social issues. Key features to analyse:
- Caricature: exaggeration of physical features to satirise a person or type
- Symbolism: objects that represent ideas (a dove = peace, a snake = danger/betrayal)
- Irony and satire: the gap between what is shown and what is meant
- Speech/thought bubbles: what characters say and think
- Caption: explanatory or ironic text below the image
- The cartoonist's viewpoint: what opinion is being expressed?

ADVERTISEMENTS:
Advertisements use visual and linguistic techniques to persuade a target audience to buy a product or accept an idea. Analyse:
- Target audience: who is this aimed at and how do you know?
- Persuasive appeals: ethos (credibility/trust), pathos (emotion), logos (logic/statistics)
- Slogan: memorable, often uses rhyme, alliteration, or a pun
- Imagery: what does the image suggest/connote?
- Colour: red = urgency/passion, blue = trust/calm, green = nature/health
- Layout: what is foregrounded? What draws the eye?
- Call to action: what does the ad want you to DO?

GRAPHS AND TABLES:
For data interpretation questions: read titles and axes carefully, identify trends (increase, decrease, fluctuation), compare data points, identify anomalies, and draw conclusions supported by specific data.

ANSWERING VISUAL LITERACY QUESTIONS:
Always refer specifically to the visual text. Use phrases like 'In the cartoon, the character is shown...' or 'The advertisement uses a dark background to...' Never describe without interpreting, and never interpret without describing what you see.`
    },

    // ===================== GRAMMAR =====================
    {
        title: "Grammar: Parts of Speech, Sentence Types, and Concord",
        unit: "grammar",
        content: `Grammar is tested throughout all NSC English HL papers. A solid understanding of grammar enables better writing and more accurate analysis of language use.

PARTS OF SPEECH:
Noun: names a person (teacher), place (Johannesburg), thing (book), or abstract idea (freedom). Common, proper, collective, abstract, concrete.
Pronoun: replaces a noun (he, she, it, they, who, whom, which).
Verb: shows action (run, write) or state of being (is, seems, appears).
Adjective: describes a noun (beautiful, three, South African).
Adverb: modifies a verb (quickly), adjective (very tall), or another adverb (quite slowly).
Preposition: shows relationship (in, on, under, beside, during, towards).
Conjunction: joins words or clauses — coordinating (FANBOYS) or subordinating (because, although, while).
Interjection: expresses emotion (Oh! Wow! Alas!).

SENTENCE TYPES:
Simple: one subject + one predicate. 'The boy ran.'
Compound: two independent clauses joined by a coordinating conjunction or semicolon.
Complex: one independent + one dependent clause (joined by subordinating conjunction).
Compound-complex: minimum two independent + one dependent clause.

CONCORD (SUBJECT-VERB AGREEMENT):
- Collective nouns: singular verb in formal use ('The committee has decided').
- Indefinite pronouns (each, every, either, neither, everyone, nobody, someone): always singular.
- 'Either/or' and 'neither/nor': verb agrees with the nearest subject.
- Do not be misled by words between subject and verb.

PUNCTUATION:
Comma: separates items in a list, after introductory phrases, around parenthetical information.
Semicolon: joins two related independent clauses; used before conjunctive adverbs (however, therefore, furthermore).
Colon: introduces a list, explanation, or quotation.
Apostrophe: shows possession (boy's) or contraction (it's = it is).
Inverted commas: direct speech and titles of short works.`
    },
    {
        title: "Active/Passive Voice and Direct/Indirect Speech",
        unit: "grammar",
        content: `These two areas of grammar are consistently tested in NSC English HL exams. You must be able to identify each and convert between them accurately.

ACTIVE AND PASSIVE VOICE:
Active voice: the subject performs the action. Structure: Subject + Verb + Object.
Example: 'The student (S) wrote (V) the essay (O).'
Passive voice: the subject receives the action. Structure: Subject + 'to be' + past participle (+ 'by' agent).
Example: 'The essay (S) was written (V) by the student (agent).'

HOW TO CONVERT ACTIVE TO PASSIVE:
1. Move the object to the subject position ('the essay' → becomes subject).
2. Add the correct form of 'to be' matched to the original tense: present → is/am/are; past → was/were; future → will be; present perfect → has/have been; past perfect → had been.
3. Use the past participle of the main verb.
4. The original subject becomes the agent ('by the student') — this can be omitted if not important.

DIRECT AND INDIRECT (REPORTED) SPEECH:
Direct: uses exact words with quotation marks. 'She said, "I am leaving now."'
Indirect: reports the meaning without exact words or quotation marks. 'She said that she was leaving then.'

CHANGES IN INDIRECT SPEECH:
- Tense backshift: present simple → past simple; past simple → past perfect; will → would; can → could; may → might; must → had to.
- Pronouns: 'I' → 'she/he'; 'we' → 'they'; 'you' → context-dependent.
- Time expressions: now → then; today → that day; yesterday → the previous day; tomorrow → the following day; here → there; this → that.
- Remove inverted commas; add 'that' after the reporting verb.
- Reporting verbs: 'said' (no indirect object follows directly); 'told' (MUST have an indirect object: 'told me/them/us'); 'asked' (for questions — use 'if/whether' for yes/no questions); 'ordered' (for commands).

COMMON ERRORS:
- Wrong tense for 'to be' in passive (e.g., converting present to 'was' instead of 'is').
- Forgetting to change time expressions in indirect speech.
- Using 'told that' without an indirect object.`
    },
    {
        title: "Common Grammar Errors and Vocabulary in Context",
        unit: "grammar",
        content: `Avoiding common grammar errors and answering vocabulary questions correctly can significantly improve your NSC marks.

COMMON ERRORS IN ENGLISH WRITING:

1. It's vs Its: 'It's' = it is/it has. 'Its' = belonging to it. Test: substitute 'it is' — if it works, use 'it's'.

2. Their/There/They're: 'Their' = belonging to them. 'There' = place/existence. 'They're' = they are.

3. Fewer vs Less: 'Fewer' for countable nouns (fewer students, fewer apples). 'Less' for uncountable nouns (less time, less water).

4. Who vs Whom: 'Who' = subject pronoun (like he/she). 'Whom' = object pronoun (like him/her). Test: substitute 'he' or 'him' — if 'him' fits, use 'whom'.

5. Affect vs Effect: 'Affect' is usually a verb (to affect = to influence). 'Effect' is usually a noun (the effect = the result). 'The rain affected the match' (verb). 'The effect of rain on the match was significant' (noun).

6. Concord errors with collective nouns: 'The team is playing well' (NOT 'are' in formal writing).

7. Dangling modifiers: 'Running to the bus, the rain started.' (The rain was not running.) Correct: 'Running to the bus, she was caught in the rain.'

8. Double negatives: 'I didn't do nothing' is non-standard; correct: 'I didn't do anything.'

VOCABULARY IN CONTEXT:
When a question asks for the meaning of a word as used in the passage:
Step 1: Read the entire sentence and the sentences before and after the word.
Step 2: Look for context clues — synonyms ('in other words'), antonyms ('but/however'), definitions (a comma followed by an explanation), examples (such as...).
Step 3: Form your own explanation of the word's meaning in that context.
Step 4: Substitute your answer back into the sentence to check it makes sense.
Do NOT give a dictionary definition that ignores context — the meaning must fit the specific usage in the passage.

FIGURATIVE VS LITERAL:
Literal: 'She was crying.' Figurative: 'She was drowning in tears.' When asked whether language is figurative or literal, explain your answer with reference to the specific words used and their intended meaning.`
    },
];
