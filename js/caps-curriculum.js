// CAPS Curriculum Data - Topics per subject per grade per term
// This will be populated over time. Structure is ready.
const CAPS_CURRICULUM = {
  // Example structure - to be filled in Phase 3
  "life-sciences": {
    "12": {
      "1": [
        { topic: "DNA: The Code of Life", weeks: 3, content: "Structure of DNA, DNA replication, protein synthesis" },
        { topic: "Meiosis", weeks: 2, content: "Stages of meiosis, crossing over, significance of meiosis" },
        { topic: "Genetics & Inheritance", weeks: 4, content: "Mendel, mono- and dihybrid crosses, blood groups, sex-linked inheritance" }
      ],
      "2": [
        { topic: "Evolution", weeks: 4, content: "Evidence for evolution, natural selection, speciation" },
        { topic: "Human Evolution", weeks: 3, content: "Fossil evidence, out of Africa hypothesis" }
      ],
      "3": [
        { topic: "Human Nervous System", weeks: 3, content: "Structure and function, reflex arc, diseases" },
        { topic: "Endocrine System", weeks: 2, content: "Hormones, feedback mechanisms, homeostasis" },
        { topic: "Human Reproduction", weeks: 3, content: "Reproductive systems, fertilisation, pregnancy, birth" }
      ],
      "4": [
        { topic: "Responding to the Environment (Plants)", weeks: 2, content: "Plant hormones, tropisms, photoperiodism" },
        { topic: "Human Impact on the Environment", weeks: 3, content: "Biodiversity, conservation, climate change" },
        { topic: "Revision", weeks: 3, content: "Full syllabus revision for final exams" }
      ]
    },
    "11": {
      "1": [
        { topic: "Biodiversity & Classification", weeks: 3, content: "Five kingdoms, classification systems" },
        { topic: "Biodiversity of Plants", weeks: 3, content: "Mosses, ferns, gymnosperms, angiosperms" },
        { topic: "Biodiversity of Animals", weeks: 3, content: "Invertebrates to mammals, body plans" }
      ],
      "2": [
        { topic: "Photosynthesis", weeks: 3, content: "Light and dark reactions, factors affecting rate" },
        { topic: "Cellular Respiration", weeks: 3, content: "Glycolysis, Krebs cycle, ETC, anaerobic respiration" }
      ],
      "3": [
        { topic: "Animal Nutrition", weeks: 2, content: "Nutrients, digestive system, absorption" },
        { topic: "Gaseous Exchange", weeks: 2, content: "Breathing mechanisms, gas exchange surfaces" },
        { topic: "Excretion", weeks: 2, content: "Kidney structure, nephron, osmoregulation" }
      ],
      "4": [
        { topic: "Population Ecology", weeks: 3, content: "Population dynamics, interactions, human impact" },
        { topic: "Revision", weeks: 3, content: "Full syllabus revision" }
      ]
    }
  },
  "mathematics": {
    "12": {
      "1": [
        { topic: "Sequences & Series", weeks: 3, content: "Arithmetic and geometric sequences, sigma notation, convergence" },
        { topic: "Functions & Inverses", weeks: 3, content: "Exponential, logarithmic functions, inverses" },
        { topic: "Finance, Growth & Decay", weeks: 2, content: "Compound interest, annuities, sinking funds" }
      ],
      "2": [
        { topic: "Trigonometry", weeks: 4, content: "Compound angles, double angles, trig equations, 2D/3D problems" },
        { topic: "Analytical Geometry", weeks: 2, content: "Equation of a circle, tangent to a circle" },
        { topic: "Euclidean Geometry", weeks: 3, content: "Ratio, proportion, similarity, Pythagorean theorem proofs" }
      ],
      "3": [
        { topic: "Statistics", weeks: 3, content: "Regression, correlation, confidence intervals" },
        { topic: "Counting & Probability", weeks: 3, content: "Fundamental counting principle, probability rules" },
        { topic: "Differential Calculus", weeks: 4, content: "Limits, differentiation, cubic functions, optimization" }
      ],
      "4": [
        { topic: "Revision", weeks: 4, content: "Full syllabus revision and exam prep" }
      ]
    }
  },
  "geography": {
    "12": {
      "1": [
        { topic: "Climate & Weather", weeks: 4, content: "Mid-latitude cyclones, tropical cyclones, subtropical anticyclones" },
        { topic: "Geomorphology", weeks: 4, content: "Drainage basins, fluvial processes, catchment management" }
      ],
      "2": [
        { topic: "Rural & Urban Settlements", weeks: 3, content: "Settlement patterns, urbanisation, land use" },
        { topic: "Economic Geography", weeks: 3, content: "Agriculture, mining, secondary and tertiary activities" }
      ],
      "3": [
        { topic: "Mapwork & GIS", weeks: 3, content: "Topographic maps, orthophotos, GIS applications" },
        { topic: "Development Geography", weeks: 3, content: "Indicators, strategies, South African context" }
      ],
      "4": [
        { topic: "Revision", weeks: 4, content: "Full syllabus revision" }
      ]
    }
  },
  "cat": {
    "12": {
      "1": [
        { topic: "System Technologies", weeks: 3, content: "Hardware, software, storage, processing" },
        { topic: "Internet & WWW", weeks: 2, content: "Internet technologies, web browsers, online communication" },
        { topic: "Spreadsheets", weeks: 3, content: "Advanced formulas, charts, what-if analysis" }
      ],
      "2": [
        { topic: "Word Processing", weeks: 2, content: "Advanced features, mail merge, styles" },
        { topic: "Databases", weeks: 3, content: "Database design, SQL queries, forms, reports" },
        { topic: "HTML & Web Design", weeks: 2, content: "HTML tags, CSS basics, web page creation" }
      ],
      "3": [
        { topic: "Information Management", weeks: 2, content: "Data vs information, knowledge management" },
        { topic: "Social Implications", weeks: 2, content: "Ethics, health, environment, copyright, security" },
        { topic: "PAT", weeks: 4, content: "Practical Assessment Task - integrated project" }
      ],
      "4": [
        { topic: "Revision", weeks: 4, content: "Full syllabus revision" }
      ]
    }
  },

  // Get curriculum for a subject/grade/term
  get(subjectId, grade, term) {
    const subject = this[subjectId];
    if (!subject) return null;
    const gradeData = subject[String(grade)];
    if (!gradeData) return null;
    if (term === "all") return gradeData;
    return { [term]: gradeData[String(term)] || [] };
  },

  // Check if curriculum data exists
  has(subjectId, grade) {
    return !!(this[subjectId] && this[subjectId][String(grade)]);
  }
};
