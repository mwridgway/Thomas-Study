const scheduleData = [
    // ===================== TERM 1 =====================
    {
        term: 1, dates: "14–16 Jan", subject: "life-sciences",
        content: "Pack portfolios. Review Gr 11 Scientific method questions. Hand out exam guidelines.",
        type: "content", topic: null
    },
    {
        term: 1, dates: "19–23 Jan", subject: "life-sciences",
        content: "DNA – Structure and Role. DNA – Replication.",
        type: "content", topic: "dna",
        link: "life-sciences.html",
        extra: "Handbook Q10 p.53, Packet Q 1, 3, 5"
    },
    {
        term: 1, dates: "19–23 Jan", subject: "life-sciences",
        content: "DNA Fingerprinting / Profiling.",
        type: "content", topic: "rna",
        link: "life-sciences.html",
        extra: "Handbook Q13 p.54, Packet Q 13, 14, 15"
    },
    {
        term: 1, dates: "26–30 Jan", subject: "life-sciences",
        content: "RNA – Structure and Role. Protein Synthesis.",
        type: "content", topic: "rna",
        link: "life-sciences.html",
        extra: "Handbook Q7, Q16+17, Packet Q 2, 4, 6, 7, 9, 11, 12 + terms and MC"
    },
    {
        term: 1, dates: "2–6 Feb", subject: "life-sciences",
        content: "Introduction to Meiosis and Mitosis review. Chromosomes + Karyotype. Meiosis phases.",
        type: "content", topic: null,
        extra: "Handbook Q2+3, Q6+7, Packet Q 2, 3, 5, 6"
    },
    {
        term: 1, dates: "9–13 Feb", subject: "life-sciences",
        content: "Purpose and importance of meiosis. Genetic variation. Abnormal meiosis. Comparison between mitosis and meiosis.",
        type: "content", topic: null,
        extra: "Packet Q: 4, 7, 9, 11, 13, 16 + Terms and MC"
    },
    {
        term: 1, dates: "13 Feb", subject: "life-sciences",
        content: "Practical 1: DNA & Meiosis",
        type: "assessment", topic: null
    },
    {
        term: 1, dates: "16–20 Feb", subject: "life-sciences",
        content: "Genetics Introduction: Mendel and peas. Terminology: genotype, phenotype, heterozygous, homozygous. Monohybrid crosses.",
        type: "content", topic: null,
        extra: "Packet Q 1, 3"
    },
    {
        term: 1, dates: "23–27 Feb", subject: "life-sciences",
        content: "Types of dominance. Monohybrid crosses of different dominance.",
        type: "content", topic: null,
        extra: "Packet Q: 2, 4, 5, 6, 7, 8, 9, 10"
    },
    {
        term: 1, dates: "25 Feb", subject: "life-sciences",
        content: "Term 1 Test",
        type: "assessment", topic: null
    },
    {
        term: 1, dates: "2–6 Mar", subject: "life-sciences",
        content: "Dihybrid crosses. Sex chromosomes. Sex-linked genes.",
        type: "content", topic: null,
        extra: "Packet Q: 11, 12, 13, 16, 17, 18, 19"
    },
    {
        term: 1, dates: "9–13 Mar", subject: "life-sciences",
        content: "Mutations. Genetic lineage and pedigrees.",
        type: "content", topic: null,
        extra: "Packet Q: 20, 21, 23, 24, 25, 27, 28, 29"
    },
    {
        term: 1, dates: "10 Mar", subject: "life-sciences",
        content: "Practical 2: Blood Groups",
        type: "assessment", topic: null
    },
    {
        term: 1, dates: "16–20 Mar", subject: "life-sciences",
        content: "Genetic manipulation. Cloning and stem cells.",
        type: "content", topic: null,
        extra: "Packet Q 31, 32, terms, MC"
    },
    {
        term: 1, dates: "24 Mar", subject: "life-sciences",
        content: "Genetics Assignment due",
        type: "assessment", topic: null
    },

    // ===================== TERM 2 =====================
    {
        term: 2, dates: "8–10 Apr", subject: "life-sciences",
        content: "Review cloning/stem cells. Reproduction in invertebrates.",
        type: "content", topic: null,
        extra: "Packet Q 1+2"
    },
    {
        term: 2, dates: "14–17 Apr", subject: "life-sciences",
        content: "Male and female reproductive organs. Gametogenesis.",
        type: "content", topic: null,
        extra: "Packet Q 6+11. Review Genetics Practical."
    },
    {
        term: 2, dates: "22–25 Apr", subject: "life-sciences",
        content: "Menstrual cycle.",
        type: "content", topic: null,
        extra: "Packet Q 13+16"
    },
    {
        term: 2, dates: "5–9 May", subject: "life-sciences",
        content: "Review menstrual cycle. Fertilisation and Pregnancy.",
        type: "content", topic: null,
        extra: "Packet Q 21, 18+20, MC and terms"
    },
    {
        term: 2, dates: "12–16 May", subject: "life-sciences",
        content: "Human Nervous System. Brain and Spinal Cord. Peripheral NS. Disorders of CNS.",
        type: "content", topic: null,
        extra: "Q 7, 8, 3, 4, 5"
    },
    {
        term: 2, dates: "15 May", subject: "life-sciences",
        content: "Practical Part 1: Blood Groups",
        type: "assessment", topic: null
    },
    {
        term: 2, dates: "20 May", subject: "life-sciences",
        content: "Practical Part 2: Reproductive System",
        type: "assessment", topic: null
    },
    {
        term: 2, dates: "26 May – 27 Jun", subject: "life-sciences",
        content: "Mid-year Examination",
        type: "assessment", topic: null
    },

    // ===================== TERM 3 =====================
    {
        term: 3, dates: "22 Jul – 1 Aug", subject: "life-sciences",
        content: "Review Exam. Eye. Ear. Endocrine System. Homeostasis – Thermoregulation.",
        type: "content", topic: null,
        extra: "Packet Q 10-12, 16, 17-24"
    },
    {
        term: 3, dates: "4–12 Aug", subject: "life-sciences",
        content: "Evidence of evolution. Lamarckism, Darwinism, Punctuated Equilibrium. Natural vs Artificial Selection.",
        type: "content", topic: null,
        extra: "Packet Q 3, 5"
    },
    {
        term: 3, dates: "18–29 Aug", subject: "life-sciences",
        content: "Speciation. Australopithecus & Homo. 'Out of Africa' hypothesis.",
        type: "content", topic: null,
        extra: "Packet Q 6, 9, 11"
    },
    {
        term: 3, dates: "25–29 Aug", subject: "life-sciences",
        content: "Plant Hormones.",
        type: "content", topic: null,
        extra: "Packet Q 1-7"
    },
    {
        term: 3, dates: "1 Sep – 3 Oct", subject: "life-sciences",
        content: "Grade 12 Record Examination",
        type: "assessment", topic: null
    },

    // ===================== TERM 4 =====================
    {
        term: 4, dates: "13–24 Oct", subject: "life-sciences",
        content: "Go through exams and pack portfolios. Review / NSC exam preparation begins.",
        type: "content", topic: null
    },
    {
        term: 4, dates: "27 Oct – 29 Nov", subject: "life-sciences",
        content: "NSC Final Examination",
        type: "assessment", topic: null
    }
];
