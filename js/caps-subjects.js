// CAPS Subject Database - All subjects Grades 8-12
const CAPS_SUBJECTS = {
  // Compulsory subjects (all grades)
  compulsory: {
    "8-9": [
      { id: "english-hl", name: "English Home Language", icon: "\uD83D\uDCD6", color: "#4fc3f7" },
      { id: "afrikaans-fal", name: "Afrikaans First Additional Language", icon: "\uD83D\uDCDD", color: "#ff8a65" },
      { id: "mathematics", name: "Mathematics", icon: "\uD83D\uDCCA", color: "#66bb6a" },
      { id: "natural-sciences", name: "Natural Sciences", icon: "\uD83D\uDD2C", color: "#ab47bc" },
      { id: "social-sciences", name: "Social Sciences", icon: "\uD83C\uDF0D", color: "#8d6e63" },
      { id: "technology", name: "Technology", icon: "\u2699\uFE0F", color: "#78909c" },
      { id: "ems", name: "Economic & Management Sciences", icon: "\uD83D\uDCB0", color: "#ffd54f" },
      { id: "life-orientation", name: "Life Orientation", icon: "\uD83E\uDDE7", color: "#4db6ac" },
      { id: "creative-arts", name: "Creative Arts", icon: "\uD83C\uDFA8", color: "#f06292" }
    ],
    "10-12": [
      { id: "english-hl", name: "English Home Language", icon: "\uD83D\uDCD6", color: "#4fc3f7" },
      { id: "english-fal", name: "English First Additional Language", icon: "\uD83D\uDCD6", color: "#4fc3f7" },
      { id: "afrikaans-hl", name: "Afrikaans Home Language", icon: "\uD83D\uDCDD", color: "#ff8a65" },
      { id: "afrikaans-fal", name: "Afrikaans First Additional Language", icon: "\uD83D\uDCDD", color: "#ff8a65" },
      { id: "life-orientation", name: "Life Orientation", icon: "\uD83E\uDDE7", color: "#4db6ac" }
    ]
  },
  // Elective subjects (Grades 10-12)
  electives: [
    { id: "mathematics", name: "Mathematics", icon: "\uD83D\uDCCA", color: "#66bb6a", group: "Group A" },
    { id: "maths-literacy", name: "Mathematical Literacy", icon: "\uD83D\uDD22", color: "#aed581", group: "Group A" },
    { id: "technical-maths", name: "Technical Mathematics", icon: "\uD83D\uDCD0", color: "#81c784", group: "Group A" },
    { id: "physical-sciences", name: "Physical Sciences", icon: "\u269B\uFE0F", color: "#7e57c2", group: "Sciences" },
    { id: "life-sciences", name: "Life Sciences", icon: "\uD83E\uDDEC", color: "#26a69a", group: "Sciences" },
    { id: "accounting", name: "Accounting", icon: "\uD83D\uDCB1", color: "#ffa726", group: "Commerce" },
    { id: "business-studies", name: "Business Studies", icon: "\uD83D\uDCBC", color: "#ef5350", group: "Commerce" },
    { id: "economics", name: "Economics", icon: "\uD83D\uDCC8", color: "#42a5f5", group: "Commerce" },
    { id: "geography", name: "Geography", icon: "\uD83C\uDF0D", color: "#8d6e63", group: "Sciences" },
    { id: "history", name: "History", icon: "\uD83C\uDFDB\uFE0F", color: "#a1887f", group: "Humanities" },
    { id: "cat", name: "Computer Applications Technology", icon: "\uD83D\uDCBB", color: "#29b6f6", group: "Technology" },
    { id: "it", name: "Information Technology", icon: "\uD83D\uDDA5\uFE0F", color: "#26c6da", group: "Technology" },
    { id: "visual-arts", name: "Visual Arts", icon: "\uD83C\uDFA8", color: "#ec407a", group: "Arts" },
    { id: "dramatic-arts", name: "Dramatic Arts", icon: "\uD83C\uDFAD", color: "#ab47bc", group: "Arts" },
    { id: "music", name: "Music", icon: "\uD83C\uDFB5", color: "#7e57c2", group: "Arts" },
    { id: "design", name: "Design", icon: "\u270F\uFE0F", color: "#f48fb1", group: "Arts" },
    { id: "consumer-studies", name: "Consumer Studies", icon: "\uD83D\uDED2", color: "#ff7043", group: "Services" },
    { id: "tourism", name: "Tourism", icon: "\u2708\uFE0F", color: "#4dd0e1", group: "Services" },
    { id: "hospitality-studies", name: "Hospitality Studies", icon: "\uD83C\uDFE8", color: "#ffb74d", group: "Services" },
    { id: "agricultural-sciences", name: "Agricultural Sciences", icon: "\uD83C\uDF3E", color: "#9ccc65", group: "Sciences" },
    { id: "agricultural-management", name: "Agricultural Management Practices", icon: "\uD83D\uDE9C", color: "#8bc34a", group: "Sciences" },
    { id: "agricultural-technology", name: "Agricultural Technology", icon: "\uD83C\uDF31", color: "#7cb342", group: "Sciences" },
    { id: "engineering-graphics", name: "Engineering Graphics & Design", icon: "\uD83D\uDCD0", color: "#5c6bc0", group: "Technology" },
    { id: "civil-technology", name: "Civil Technology", icon: "\uD83C\uDFD7\uFE0F", color: "#78909c", group: "Technology" },
    { id: "electrical-technology", name: "Electrical Technology", icon: "\u26A1", color: "#ffca28", group: "Technology" },
    { id: "mechanical-technology", name: "Mechanical Technology", icon: "\u2699\uFE0F", color: "#90a4ae", group: "Technology" },
    { id: "isizulu-hl", name: "IsiZulu Home Language", icon: "\uD83D\uDDE3\uFE0F", color: "#e91e63", group: "Languages" },
    { id: "isixhosa-hl", name: "IsiXhosa Home Language", icon: "\uD83D\uDDE3\uFE0F", color: "#e91e63", group: "Languages" },
    { id: "sepedi-hl", name: "Sepedi Home Language", icon: "\uD83D\uDDE3\uFE0F", color: "#e91e63", group: "Languages" },
    { id: "sesotho-hl", name: "Sesotho Home Language", icon: "\uD83D\uDDE3\uFE0F", color: "#e91e63", group: "Languages" },
    { id: "setswana-hl", name: "Setswana Home Language", icon: "\uD83D\uDDE3\uFE0F", color: "#e91e63", group: "Languages" },
    { id: "religion-studies", name: "Religion Studies", icon: "\uD83D\uDD4A\uFE0F", color: "#b39ddb", group: "Humanities" },
    { id: "technical-sciences", name: "Technical Sciences", icon: "\uD83D\uDD27", color: "#546e7a", group: "Technology" }
  ],

  // Get subjects available for a specific grade
  getForGrade(grade) {
    grade = parseInt(grade);
    if (grade <= 9) {
      return {
        compulsory: this.compulsory["8-9"],
        electives: []
      };
    }
    return {
      compulsory: this.compulsory["10-12"],
      electives: this.electives
    };
  },

  // Get subject by id
  getById(id) {
    for (const list of Object.values(this.compulsory)) {
      const found = list.find(s => s.id === id);
      if (found) return found;
    }
    return this.electives.find(s => s.id === id) || null;
  }
};
