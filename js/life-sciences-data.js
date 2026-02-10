// ============================================================
// FLASHCARD DATA
// ============================================================
const flashcards = [
    // --- DNA Structure & Replication ---
    {
        id: 1, unit: "dna",
        q: "What are nucleic acids and what are the two types?",
        a: "Nucleic acids are organic molecules responsible for protein synthesis and for storing and transferring genetic information. The two types are DNA (deoxyribonucleic acid) and RNA (ribonucleic acid)."
    },
    {
        id: 2, unit: "dna",
        q: "Where is DNA found in a cell? Distinguish between nuclear and extranuclear DNA.",
        a: "Nuclear DNA is found in the nucleus, where it makes up genes and chromosomes.\nExtranuclear DNA is found in mitochondria and chloroplasts."
    },
    {
        id: 3, unit: "dna",
        q: "What are chromosomes made of?",
        a: "Chromosomes are made of DNA wrapped around proteins called histones."
    },
    {
        id: 4, unit: "dna",
        q: "Define a gene.",
        a: "A gene is a short segment of DNA that carries the code for the synthesis of a specific protein."
    },
    {
        id: 5, unit: "dna",
        q: "Why are proteins important in determining the characteristics of an organism?",
        a: "Proteins determine the characteristics (both structure and function) of an organism. Different proteins result in different traits."
    },
    {
        id: 6, unit: "dna",
        q: "When are chromosomes visible in a cell and when are they not?",
        a: "Chromosomes are only visible during cell division. They are NOT visible during interphase because the DNA is in a loose, uncoiled form (chromatin)."
    },
    {
        id: 7, unit: "dna",
        q: "Name 6 key contributors to the discovery and understanding of DNA, in chronological order.",
        a: "1. Mendel (1865) — hereditary factors\n2. Miescher (1874) — discovered nucleic acids\n3. Griffith (1928) — transformation principle\n4. Chargaff (1949) — base pairing rules\n5. Franklin (1952) — X-ray photographs of DNA\n6. Watson & Crick (1953) — double helix model"
    },
    {
        id: 8, unit: "dna",
        q: "What is the overall shape and structure of a DNA molecule?",
        a: "DNA is a huge polymer made of monomers called nucleotides. Its shape is a double helix — like a twisted ladder."
    },
    {
        id: 9, unit: "dna",
        q: "What are the three components of a DNA nucleotide?",
        a: "1. A phosphate group\n2. A deoxyribose sugar (5-carbon sugar)\n3. A nitrogenous base (A, T, G or C)"
    },
    {
        id: 10, unit: "dna",
        q: "Name the four nitrogenous bases in DNA and classify them as large or small.",
        a: "Large bases (purines): Adenine (A) and Guanine (G)\nSmall bases (pyrimidines): Cytosine (C) and Thymine (T)"
    },
    {
        id: 11, unit: "dna",
        q: "What makes up the sides (uprights) and the rungs of the DNA 'ladder'?",
        a: "Sides: alternating deoxyribose sugar and phosphate groups (sugar-phosphate backbone).\nRungs: complementary base pairs joined by weak hydrogen bonds."
    },
    {
        id: 12, unit: "dna",
        q: "State the base pairing rule for DNA.",
        a: "Adenine (A) always pairs with Thymine (T).\nGuanine (G) always pairs with Cytosine (C).\nA large base always pairs with a small base."
    },
    {
        id: 13, unit: "dna",
        q: "What type of bonds hold the two strands of DNA together at the base pairs?",
        a: "Weak hydrogen bonds hold the complementary base pairs together. These bonds are weak enough to be broken during replication and transcription."
    },
    {
        id: 14, unit: "dna",
        q: "What is the difference between coding and non-coding DNA?",
        a: "Coding DNA (only about 2%) carries information for the synthesis of proteins.\nNon-coding DNA (about 98%) does not carry information for proteins."
    },
    {
        id: 15, unit: "dna",
        q: "How does the nitrogen base sequence in a gene determine protein formation?",
        a: "Genes carry the genetic code. The specific sequence of nitrogenous bases along a DNA strand determines the sequence of amino acids that will be assembled to form a specific protein."
    },
    {
        id: 16, unit: "dna",
        q: "Define DNA replication.",
        a: "DNA replication is the process by which a DNA molecule duplicates itself to form two identical copies of the original DNA molecule. It occurs during interphase (before cell division)."
    },
    {
        id: 17, unit: "dna",
        q: "Describe the steps of DNA replication.",
        a: "1. The double helix unwinds.\n2. The two strands unzip as weak hydrogen bonds between base pairs break.\n3. The two separate strands each act as a template.\n4. Free-floating nucleotides in the nucleus attach to their correct complementary base partners on each template strand.\n5. Two identical DNA molecules are formed."
    },
    {
        id: 18, unit: "dna",
        q: "Why is DNA replication important before cell division?",
        a: "DNA replication is essential before cell division (mitosis) to ensure that each daughter cell receives the same genetic composition as the mother cell. Without replication, daughter cells would have only half the genetic information."
    },
    {
        id: 19, unit: "dna",
        q: "When was the Human Genome Project started and when was the genome fully mapped?",
        a: "The Human Genome Project was started in 1990 and the human genome was fully mapped in 2003."
    },
    {
        id: 20, unit: "dna",
        q: "Who received the Nobel Prize for the discovery of the DNA double helix model, and when?",
        a: "Watson and Crick (along with Wilkins) received the Nobel Prize in 1962 for discovering the double helix model of DNA in 1953. Rosalind Franklin's X-ray photographs (1952) were crucial to their discovery."
    },

    // --- DNA Profiles & RNA ---
    {
        id: 21, unit: "rna",
        q: "What is DNA profiling?",
        a: "DNA profiling is a process where scientists extract DNA from a sample, prepare and process it to obtain a unique barcode-like pattern that can be used to identify individuals."
    },
    {
        id: 22, unit: "rna",
        q: "Why is non-coding DNA used for forensic DNA profiling rather than coding DNA?",
        a: "99% of human DNA is identical between individuals. Forensic profiling uses the 1% of non-coding DNA that differs between people, making it possible to distinguish one individual from another."
    },
    {
        id: 23, unit: "rna",
        q: "Are DNA profiles unique to every person? State the exception.",
        a: "DNA profiles are unique to each individual, EXCEPT for identical twins, who have identical DNA profiles. Non-identical (fraternal) twins have different profiles."
    },
    {
        id: 24, unit: "rna",
        q: "List 4 sources of DNA that can be collected from a crime scene.",
        a: "1. Skin cells\n2. Blood\n3. Semen\n4. Hair (with follicle attached)"
    },
    {
        id: 25, unit: "rna",
        q: "List 5 uses of DNA profiling.",
        a: "1. Identifying criminal suspects (forensics)\n2. Paternity testing\n3. Identifying genetic disorders\n4. Identifying missing persons\n5. Determining tissue/organ transplant compatibility"
    },
    {
        id: 26, unit: "rna",
        q: "How is DNA profiling used in paternity testing?",
        a: "A child inherits half its DNA from each parent. Bands in the child's DNA profile that do not match the mother must come from the biological father. If a man's profile matches those remaining bands, he is confirmed as the father."
    },
    {
        id: 27, unit: "rna",
        q: "How is DNA profiling used to link a suspect to a crime scene?",
        a: "DNA is extracted from biological evidence at the crime scene (blood, skin, hair, semen). If the DNA profile from the scene is an exact match to the suspect's profile, the suspect is linked to the crime scene."
    },
    {
        id: 28, unit: "rna",
        q: "Where is RNA found in a cell?",
        a: "RNA is found in the nucleus, the cytoplasm, and on ribosomes."
    },
    {
        id: 29, unit: "rna",
        q: "Describe the basic structure of an RNA molecule.",
        a: "RNA is a single-stranded polymer made of nucleotides. Each RNA nucleotide consists of a ribose sugar, a phosphate group, and one of four nitrogenous bases: Adenine (A), Guanine (G), Cytosine (C) or Uracil (U). Note: RNA has Uracil instead of Thymine."
    },
    {
        id: 30, unit: "rna",
        q: "Describe the structure and function of mRNA (messenger RNA).",
        a: "Structure: single strand, formed in the nucleoplasm using DNA as a template (transcription).\nFunction: carries the genetic code in the form of triplets called codons from the DNA in the nucleus to the ribosomes in the cytoplasm."
    },
    {
        id: 31, unit: "rna",
        q: "Describe the structure and function of tRNA (transfer RNA).",
        a: "Structure: single strand folded back on itself into a clover-leaf/hairpin shape with an anticodon (3 exposed bases) at one end.\nFunction: found in the cytoplasm, picks up specific amino acids and carries them to the ribosome for protein synthesis."
    },
    {
        id: 32, unit: "rna",
        q: "What is an anticodon?",
        a: "An anticodon is a set of three exposed nitrogenous bases on a tRNA molecule. It is complementary to a specific codon on the mRNA strand and ensures the correct amino acid is delivered during protein synthesis."
    },
    {
        id: 33, unit: "rna",
        q: "What is the difference between a codon and an anticodon?",
        a: "A codon is a triplet of three bases on mRNA that codes for a specific amino acid.\nAn anticodon is a triplet of three complementary bases on tRNA that matches a specific codon to deliver the correct amino acid to the ribosome."
    },
    {
        id: 34, unit: "rna",
        q: "List 5 differences between DNA and RNA.",
        a: "1. DNA is double-stranded (double helix); RNA is single-stranded.\n2. DNA contains deoxyribose sugar; RNA contains ribose sugar.\n3. DNA has Thymine; RNA has Uracil (instead of Thymine).\n4. In DNA, A:T and C:G ratios are always equal; in RNA, bases can be in any ratio.\n5. DNA is found mainly in the nucleus; RNA is found in the nucleus, cytoplasm and on ribosomes."
    },
    {
        id: 35, unit: "rna",
        q: "What is transcription?",
        a: "Transcription is the process by which mRNA is formed in the nucleoplasm using one strand of DNA as a template. The genetic code is copied from DNA to mRNA."
    },
    {
        id: 36, unit: "dna",
        q: "Why does a large base always pair with a small base in DNA?",
        a: "A large base (purine — Adenine or Guanine) always pairs with a small base (pyrimidine — Thymine or Cytosine) to maintain the uniform width of the DNA double helix. Two large bases would be too wide and two small bases would be too narrow."
    },
    {
        id: 37, unit: "rna",
        q: "Explain why identical twins have identical DNA profiles but non-identical twins do not.",
        a: "Identical twins develop from the same fertilised egg (zygote) that splits, so they share exactly the same DNA. Non-identical twins develop from two different fertilised eggs, each with a unique combination of DNA from the parents."
    },
    {
        id: 38, unit: "dna",
        q: "What contribution did Rosalind Franklin make to the discovery of DNA structure?",
        a: "Rosalind Franklin produced X-ray crystallography photographs of DNA in 1952. These photographs were crucial evidence that Watson and Crick used to build their double helix model of DNA in 1953."
    }
];


// ============================================================
// QUIZ DATA
// ============================================================
const quizQuestions = [
    // --- DNA Structure & Replication ---
    {
        id: 1, unit: "dna", type: "mc",
        question: "What are the two types of nucleic acids?",
        options: ["DNA and ATP", "DNA and RNA", "RNA and ADP", "mRNA and tRNA"],
        correct: 1,
        explanation: "The two types of nucleic acids are DNA (deoxyribonucleic acid) and RNA (ribonucleic acid). Both are involved in protein synthesis and genetic information."
    },
    {
        id: 2, unit: "dna", type: "mc",
        question: "Where is extranuclear DNA found?",
        options: ["In the nucleus only", "In the cytoplasm only", "In mitochondria and chloroplasts", "On ribosomes"],
        correct: 2,
        explanation: "Extranuclear DNA is found in mitochondria and chloroplasts. Nuclear DNA is found in the nucleus as genes and chromosomes."
    },
    {
        id: 3, unit: "dna", type: "mc",
        question: "Chromosomes are made of DNA wrapped around proteins called:",
        options: ["Enzymes", "Histones", "Ribosomes", "Nucleotides"],
        correct: 1,
        explanation: "Chromosomes consist of DNA wrapped around proteins called histones, which help package and organise the DNA."
    },
    {
        id: 4, unit: "dna", type: "mc",
        question: "A gene is best described as:",
        options: [
            "An entire chromosome",
            "A short segment of DNA carrying the code for synthesis of a specific protein",
            "A single nucleotide",
            "The entire DNA molecule"
        ],
        correct: 1,
        explanation: "A gene is a short segment of DNA that carries the code for the synthesis of a specific protein. Proteins determine the characteristics of an organism."
    },
    {
        id: 5, unit: "dna", type: "mc",
        question: "When are chromosomes visible in a cell?",
        options: [
            "During interphase",
            "Only during cell division",
            "At all times",
            "Only when the cell is at rest"
        ],
        correct: 1,
        explanation: "Chromosomes are only visible during cell division when the DNA is tightly coiled. During interphase, the DNA is in a loose, uncoiled chromatin form and is not visible as distinct chromosomes."
    },
    {
        id: 6, unit: "dna", type: "mc",
        question: "Who produced the X-ray photographs of DNA that were crucial to discovering its structure?",
        options: ["Watson and Crick", "Gregor Mendel", "Rosalind Franklin", "Erwin Chargaff"],
        correct: 2,
        explanation: "Rosalind Franklin produced X-ray crystallography photographs of DNA in 1952. Watson and Crick used this evidence to build their double helix model in 1953."
    },
    {
        id: 7, unit: "dna", type: "mc",
        question: "DNA is a polymer made of monomers called:",
        options: ["Amino acids", "Fatty acids", "Nucleotides", "Glucose molecules"],
        correct: 2,
        explanation: "DNA is a huge polymer made of repeating monomers called nucleotides. Each nucleotide consists of a phosphate group, a deoxyribose sugar and a nitrogenous base."
    },
    {
        id: 8, unit: "dna", type: "mc",
        question: "Which of the following is NOT a component of a DNA nucleotide?",
        options: ["Phosphate group", "Deoxyribose sugar", "Ribose sugar", "Nitrogenous base"],
        correct: 2,
        explanation: "A DNA nucleotide contains a phosphate group, a deoxyribose sugar and a nitrogenous base. Ribose sugar is found in RNA nucleotides, not DNA."
    },
    {
        id: 9, unit: "dna", type: "mc",
        question: "According to the base pairing rule, Adenine pairs with:",
        options: ["Cytosine", "Guanine", "Thymine", "Uracil"],
        correct: 2,
        explanation: "In DNA, Adenine (A) always pairs with Thymine (T), and Guanine (G) always pairs with Cytosine (C). A large base always pairs with a small base."
    },
    {
        id: 10, unit: "dna", type: "mc",
        question: "The sides (uprights) of the DNA 'ladder' are made up of:",
        options: [
            "Nitrogenous bases only",
            "Alternating deoxyribose sugar and phosphate groups",
            "Hydrogen bonds",
            "Amino acid chains"
        ],
        correct: 1,
        explanation: "The sides of the DNA ladder consist of alternating deoxyribose sugar and phosphate groups, forming the sugar-phosphate backbone."
    },
    {
        id: 11, unit: "dna", type: "mc",
        question: "What percentage of DNA is non-coding (does not carry information for proteins)?",
        options: ["2%", "50%", "75%", "98%"],
        correct: 3,
        explanation: "Approximately 98% of DNA is non-coding DNA that does not carry information for protein synthesis. Only about 2% is coding DNA."
    },
    {
        id: 12, unit: "dna", type: "mc",
        question: "DNA replication occurs during which phase of the cell cycle?",
        options: ["Prophase", "Metaphase", "Interphase", "Telophase"],
        correct: 2,
        explanation: "DNA replication occurs during interphase, before cell division begins. This ensures each daughter cell will receive a complete copy of the DNA."
    },
    {
        id: 13, unit: "dna", type: "mc",
        question: "During DNA replication, the weak bonds that break to 'unzip' the two strands are:",
        options: ["Covalent bonds", "Ionic bonds", "Hydrogen bonds", "Peptide bonds"],
        correct: 2,
        explanation: "The weak hydrogen bonds between the complementary base pairs break during replication, allowing the two strands to separate (unzip)."
    },
    {
        id: 14, unit: "dna", type: "mc",
        question: "Why is DNA replication essential before mitosis?",
        options: [
            "To produce RNA for protein synthesis",
            "To ensure daughter cells have the same genetic composition as the mother cell",
            "To reduce the number of chromosomes by half",
            "To create new types of proteins"
        ],
        correct: 1,
        explanation: "DNA replication before mitosis ensures that each daughter cell receives an identical copy of the genetic information, maintaining the same genetic composition as the mother cell."
    },
    {
        id: 15, unit: "dna", type: "mc",
        question: "Which scientist is credited with discovering base pairing rules (A=T, G=C)?",
        options: ["Griffith (1928)", "Chargaff (1949)", "Franklin (1952)", "Watson and Crick (1953)"],
        correct: 1,
        explanation: "Erwin Chargaff (1949) discovered that in DNA, the amount of Adenine equals Thymine and the amount of Guanine equals Cytosine — known as Chargaff's rules."
    },

    // --- DNA Profiles & RNA ---
    {
        id: 16, unit: "rna", type: "mc",
        question: "What percentage of human DNA differs between individuals and is used in forensic profiling?",
        options: ["1%", "10%", "50%", "99%"],
        correct: 0,
        explanation: "99% of human DNA is identical between all people. Forensic DNA profiling uses the 1% of non-coding DNA that differs between individuals."
    },
    {
        id: 17, unit: "rna", type: "mc",
        question: "Which of the following people would have identical DNA profiles?",
        options: ["Non-identical twins", "Siblings", "Identical twins", "Parent and child"],
        correct: 2,
        explanation: "Only identical twins have identical DNA profiles because they develop from the same fertilised egg. All other individuals, including non-identical twins and siblings, have unique profiles."
    },
    {
        id: 18, unit: "rna", type: "mc",
        question: "In paternity testing, bands in the child's profile that do NOT match the mother must:",
        options: [
            "Be from a mutation",
            "Match the biological father",
            "Be ignored",
            "Match the mother's parents"
        ],
        correct: 1,
        explanation: "A child inherits half its DNA from each parent. Any bands in the child's DNA profile that do not match the mother must have come from the biological father."
    },
    {
        id: 19, unit: "rna", type: "mc",
        question: "Which is NOT a source of DNA that can be collected from a crime scene?",
        options: ["Blood", "Sweat (pure)", "Semen", "Hair"],
        correct: 1,
        explanation: "DNA can be extracted from skin cells, blood, semen and hair (with follicles). Pure sweat does not contain cells with nuclear DNA, though skin cells shed in sweat can sometimes provide DNA."
    },
    {
        id: 20, unit: "rna", type: "mc",
        question: "RNA contains which sugar that differs from DNA?",
        options: ["Deoxyribose", "Glucose", "Ribose", "Fructose"],
        correct: 2,
        explanation: "RNA contains ribose sugar, whereas DNA contains deoxyribose sugar. This is one of the key structural differences between the two nucleic acids."
    },
    {
        id: 21, unit: "rna", type: "mc",
        question: "Which nitrogenous base is found in RNA but NOT in DNA?",
        options: ["Adenine", "Thymine", "Uracil", "Guanine"],
        correct: 2,
        explanation: "RNA contains Uracil (U) instead of Thymine (T). In RNA, Adenine pairs with Uracil. The other three bases (A, G, C) are found in both DNA and RNA."
    },
    {
        id: 22, unit: "rna", type: "mc",
        question: "What is the function of mRNA?",
        options: [
            "To pick up amino acids and carry them to the ribosome",
            "To carry the genetic code from DNA in the nucleus to ribosomes in the cytoplasm",
            "To form the structure of chromosomes",
            "To replicate DNA before cell division"
        ],
        correct: 1,
        explanation: "mRNA (messenger RNA) is formed in the nucleoplasm using DNA as a template (transcription). It carries the genetic code as triplets called codons from the nucleus to the ribosomes in the cytoplasm."
    },
    {
        id: 23, unit: "rna", type: "mc",
        question: "The triplets of bases on mRNA are called:",
        options: ["Anticodons", "Codons", "Nucleotides", "Histones"],
        correct: 1,
        explanation: "The triplets of three bases on mRNA are called codons. Each codon codes for a specific amino acid during protein synthesis."
    },
    {
        id: 24, unit: "rna", type: "mc",
        question: "What is the shape of a tRNA molecule?",
        options: [
            "Double helix",
            "Straight single strand",
            "Clover-leaf/hairpin shape (single strand folded back on itself)",
            "Circular ring"
        ],
        correct: 2,
        explanation: "tRNA is a single strand folded back on itself into a clover-leaf or hairpin shape. It has an anticodon (3 exposed bases) at one end and carries a specific amino acid at the other end."
    },
    {
        id: 25, unit: "rna", type: "mc",
        question: "What is an anticodon?",
        options: [
            "A triplet of bases on mRNA",
            "A triplet of three exposed bases on tRNA that is complementary to a codon on mRNA",
            "A sequence of amino acids",
            "A section of non-coding DNA"
        ],
        correct: 1,
        explanation: "An anticodon is a set of three exposed nitrogenous bases on a tRNA molecule. It is complementary to a specific codon on the mRNA, ensuring the correct amino acid is delivered during protein synthesis."
    },
    {
        id: 26, unit: "rna", type: "mc",
        question: "Which statement about DNA and RNA is CORRECT?",
        options: [
            "DNA is single-stranded; RNA is double-stranded",
            "Both DNA and RNA contain thymine",
            "DNA contains deoxyribose sugar; RNA contains ribose sugar",
            "RNA has equal ratios of A:U and G:C like DNA has equal A:T and G:C"
        ],
        correct: 2,
        explanation: "DNA contains deoxyribose sugar and RNA contains ribose sugar. DNA is double-stranded (not RNA). RNA has uracil instead of thymine. In RNA, bases can be in any ratio, unlike DNA where A=T and G=C."
    },
    {
        id: 27, unit: "rna", type: "mc",
        question: "The process by which mRNA is formed using DNA as a template is called:",
        options: ["Replication", "Transcription", "Translation", "Mutation"],
        correct: 1,
        explanation: "Transcription is the process by which mRNA is formed in the nucleoplasm using one strand of DNA as a template. The genetic code is copied from DNA to mRNA."
    },
    {
        id: 28, unit: "rna", type: "mc",
        question: "DNA profiling can be used for all of the following EXCEPT:",
        options: [
            "Paternity testing",
            "Determining a person's blood type directly",
            "Identifying missing persons",
            "Linking a suspect to a crime scene"
        ],
        correct: 1,
        explanation: "DNA profiling is used for paternity testing, identifying suspects, missing persons, genetic disorders and transplant compatibility. Blood typing is a separate serological test, not directly determined by DNA profiling in forensics."
    },
    {
        id: 29, unit: "rna", type: "mc",
        question: "Where is tRNA found and what does it do?",
        options: [
            "In the nucleus; it copies DNA",
            "In the cytoplasm; it picks up specific amino acids and carries them to the ribosome",
            "On the ribosome; it forms the structure of the ribosome",
            "In the mitochondria; it provides energy"
        ],
        correct: 1,
        explanation: "tRNA is found in the cytoplasm. Its function is to pick up specific amino acids and carry them to the ribosome, where they are assembled into proteins during translation."
    },
    {
        id: 30, unit: "dna", type: "mc",
        question: "In DNA, the ratio of Adenine to Thymine is always:",
        options: ["1:2", "2:1", "1:1", "Variable"],
        correct: 2,
        explanation: "Because Adenine always pairs with Thymine (and Guanine always pairs with Cytosine), the ratio of A:T is always 1:1 and the ratio of G:C is always 1:1 in DNA. This was discovered by Chargaff."
    }
];


// ============================================================
// FEYNMAN TOPICS
// ============================================================
const feynmanTopics = [
    {
        id: "f1",
        title: "DNA Structure — The Double Helix",
        unit: "dna",
        keyPoints: [
            "DNA is a huge polymer made of monomers called nucleotides",
            "Shape is a double helix — like a twisted ladder",
            "Each nucleotide has 3 parts: phosphate group, deoxyribose sugar, nitrogenous base",
            "Sides of the ladder: alternating deoxyribose sugar and phosphate groups (sugar-phosphate backbone)",
            "Rungs of the ladder: complementary base pairs joined by weak hydrogen bonds",
            "Base pairing rule: Adenine–Thymine (large–small), Guanine–Cytosine (large–small)"
        ]
    },
    {
        id: "f2",
        title: "DNA Replication — Making Identical Copies",
        unit: "dna",
        keyPoints: [
            "Replication occurs during interphase, before cell division",
            "Double helix unwinds and unzips — weak hydrogen bonds between base pairs break",
            "Two separate strands each act as a template",
            "Free-floating nucleotides attach to their correct complementary base partners",
            "Result: two identical DNA molecules are formed",
            "Purpose: ensures daughter cells have the same genetic composition as the mother cell after mitosis"
        ]
    },
    {
        id: "f3",
        title: "Genes, Chromosomes and Protein Synthesis",
        unit: "dna",
        keyPoints: [
            "Chromosomes are made of DNA wrapped around histone proteins",
            "A gene is a short segment of DNA coding for a specific protein",
            "The sequence of nitrogenous bases determines the sequence of amino acids in a protein",
            "Proteins determine the structure and function (characteristics) of an organism",
            "Only about 2% of DNA is coding DNA; 98% is non-coding",
            "Chromosomes only visible during cell division, not during interphase"
        ]
    },
    {
        id: "f4",
        title: "History of DNA Discovery",
        unit: "dna",
        keyPoints: [
            "Mendel (1865): proposed hereditary factors (genes)",
            "Miescher (1874): discovered nucleic acids",
            "Griffith (1928): transformation experiment showed a 'transforming principle'",
            "Chargaff (1949): discovered base pairing rules (A=T, G=C)",
            "Franklin (1952): X-ray crystallography photographs of DNA",
            "Watson & Crick (1953): proposed the double helix model; Nobel Prize in 1962",
            "Human Genome Project: started 1990, genome fully mapped 2003"
        ]
    },
    {
        id: "f5",
        title: "DNA Profiling and Its Uses",
        unit: "rna",
        keyPoints: [
            "DNA profiling produces a unique barcode-like pattern for each individual",
            "99% of human DNA is identical; forensics uses the 1% non-coding DNA that differs",
            "Profiles are unique except for identical twins (same fertilised egg)",
            "Sources at crime scenes: skin, blood, semen, hair",
            "Uses: criminal identification, paternity testing, genetic disorders, missing persons, transplant compatibility",
            "Paternity: bands not matching mother must match the biological father",
            "Criminal: exact match links suspect to the crime scene"
        ]
    },
    {
        id: "f6",
        title: "RNA Structure and Types (mRNA and tRNA)",
        unit: "rna",
        keyPoints: [
            "RNA is a single-stranded polymer of nucleotides",
            "RNA nucleotide: ribose sugar, phosphate group, base (A, G, C or Uracil — NOT Thymine)",
            "RNA found in nucleus, cytoplasm and on ribosomes",
            "mRNA: single strand, formed by transcription using DNA as template, carries codons (triplets) to ribosomes",
            "tRNA: single strand folded into clover-leaf/hairpin shape, has anticodon (3 exposed bases)",
            "tRNA picks up specific amino acids in cytoplasm and delivers them to ribosome for protein synthesis"
        ]
    },
    {
        id: "f7",
        title: "Comparing DNA and RNA",
        unit: "rna",
        keyPoints: [
            "DNA: double helix (two strands); RNA: single strand",
            "DNA: deoxyribose sugar; RNA: ribose sugar",
            "DNA: bases are A, T, G, C; RNA: bases are A, U, G, C (Uracil replaces Thymine)",
            "DNA: A:T and G:C ratios always equal (Chargaff's rule); RNA: bases can be in any ratio",
            "DNA: mainly in nucleus (also mitochondria/chloroplasts); RNA: nucleus, cytoplasm, ribosomes",
            "DNA stores genetic information; RNA transfers it and assists in protein synthesis"
        ]
    },
    {
        id: "f8",
        title: "From DNA to Protein — The Big Picture",
        unit: "rna",
        keyPoints: [
            "DNA in the nucleus carries the genetic code (sequence of bases)",
            "Transcription: DNA is used as a template to form mRNA in the nucleoplasm",
            "mRNA carries the code as codons (triplets of bases) from nucleus to ribosomes in cytoplasm",
            "tRNA in cytoplasm picks up specific amino acids using its anticodon",
            "At the ribosome, tRNA anticodons match mRNA codons to assemble amino acids in correct order",
            "Amino acids are joined to form a specific protein that determines organism's characteristics"
        ]
    }
];
