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
    },

    // --- Meiosis ---
    {
        id: 39, unit: "meiosis",
        q: "What is meiosis?",
        a: "Meiosis is a type of cell division that produces four genetically different haploid (n) daughter cells from one diploid (2n) parent cell. It involves two successive divisions: meiosis I and meiosis II."
    },
    {
        id: 40, unit: "meiosis",
        q: "Where does meiosis occur and what cells does it produce?",
        a: "Meiosis occurs in the gonads (ovaries and testes). It produces gametes (sex cells): sperm cells in males and egg cells (ova) in females."
    },
    {
        id: 41, unit: "meiosis",
        q: "Define the terms haploid and diploid.",
        a: "Haploid (n): A cell with half the number of chromosomes (one set) — e.g., gametes have 23 chromosomes in humans.\nDiploid (2n): A cell with the full number of chromosomes (two sets) — e.g., body cells have 46 chromosomes (23 pairs) in humans."
    },
    {
        id: 42, unit: "meiosis",
        q: "What are homologous chromosomes?",
        a: "Homologous chromosomes are a pair of chromosomes (one from each parent) that have the same length, same centromere position, and carry genes for the same characteristics at the same loci (positions). They are NOT identical — they may carry different alleles."
    },
    {
        id: 43, unit: "meiosis",
        q: "What is a bivalent (tetrad)?",
        a: "A bivalent is a pair of homologous chromosomes that lie closely together during prophase I of meiosis. Since each chromosome consists of 2 sister chromatids, a bivalent consists of 4 chromatids (hence also called a tetrad)."
    },
    {
        id: 44, unit: "meiosis",
        q: "What is crossing over and when does it occur?",
        a: "Crossing over occurs during prophase I when homologous chromosomes are paired as bivalents. Non-sister chromatids of homologous chromosomes exchange segments of DNA at points called chiasmata. This results in new combinations of alleles, increasing genetic variation."
    },
    {
        id: 45, unit: "meiosis",
        q: "Describe what happens during Prophase I of meiosis.",
        a: "1. Chromosomes shorten and thicken (condense).\n2. Homologous chromosomes pair up to form bivalents (synapsis).\n3. Crossing over occurs between non-sister chromatids at chiasmata.\n4. Nuclear membrane and nucleolus disappear.\n5. Centrioles move to opposite poles and spindle fibres form."
    },
    {
        id: 46, unit: "meiosis",
        q: "Describe what happens during Metaphase I.",
        a: "Bivalents (homologous pairs) line up at the cell equator/metaphase plate. The orientation of each pair is random (random arrangement/independent assortment). Spindle fibres attach to the centromeres."
    },
    {
        id: 47, unit: "meiosis",
        q: "Describe what happens during Anaphase I.",
        a: "Homologous chromosomes separate and move to opposite poles of the cell. The centromeres do NOT split — each chromosome still consists of two sister chromatids joined at the centromere. This is the reduction division — chromosome number is halved."
    },
    {
        id: 48, unit: "meiosis",
        q: "Describe what happens during Telophase I and cytokinesis.",
        a: "Chromosomes reach the poles. Nuclear membranes may reform. The cell divides by cytokinesis to form two haploid daughter cells. Each cell has half the chromosome number of the original cell. A short interkinesis (rest period) may follow — NO DNA replication occurs."
    },
    {
        id: 49, unit: "meiosis",
        q: "Describe Meiosis II briefly (Prophase II → Telophase II).",
        a: "Prophase II: Chromosomes condense, nuclear membrane disappears, spindle forms.\nMetaphase II: Chromosomes line up individually at the equator.\nAnaphase II: Centromeres split — sister chromatids separate and move to opposite poles.\nTelophase II: Nuclear membranes reform, cytokinesis occurs.\nResult: 4 haploid daughter cells."
    },
    {
        id: 50, unit: "meiosis",
        q: "Why is meiosis important? List 4 reasons.",
        a: "1. Produces haploid gametes — ensures chromosome number is maintained after fertilisation.\n2. Crossing over creates new allele combinations (genetic variation).\n3. Random/independent assortment of homologous chromosomes creates unique gametes.\n4. Genetic variation is essential for natural selection and evolution."
    },
    {
        id: 51, unit: "meiosis",
        q: "How does meiosis contribute to genetic variation? Name 3 mechanisms.",
        a: "1. Crossing over (prophase I): exchange of DNA between non-sister chromatids creates new allele combinations.\n2. Independent/random assortment (metaphase I): random orientation of bivalents means each gamete gets a unique combination of maternal and paternal chromosomes.\n3. Random fertilisation: any sperm can fertilise any egg, further increasing variation."
    },
    {
        id: 52, unit: "meiosis",
        q: "Compare meiosis I and meiosis II.",
        a: "Meiosis I (reduction division): homologous chromosomes separate; crossing over occurs; bivalents line up at equator; centromeres do NOT split; results in 2 haploid cells.\nMeiosis II (similar to mitosis): sister chromatids separate; chromosomes line up individually; centromeres DO split; results in 4 haploid cells."
    },
    {
        id: 53, unit: "meiosis",
        q: "What is non-disjunction?",
        a: "Non-disjunction is the failure of homologous chromosomes (in meiosis I) or sister chromatids (in meiosis II) to separate properly during cell division. This results in gametes with abnormal chromosome numbers — either one extra (n+1) or one missing (n-1)."
    },
    {
        id: 54, unit: "meiosis",
        q: "What is Down syndrome and how does it occur?",
        a: "Down syndrome (trisomy 21) occurs when there are three copies of chromosome 21 instead of two. It is caused by non-disjunction during meiosis, producing a gamete with an extra chromosome 21. After fertilisation, the zygote has 47 chromosomes instead of 46."
    },
    {
        id: 55, unit: "meiosis",
        q: "What is a karyotype?",
        a: "A karyotype is a photograph or diagram of all the chromosomes in a cell, arranged in homologous pairs from largest to smallest. It is used to identify chromosome abnormalities such as Down syndrome (extra chromosome 21) or Turner syndrome (missing X)."
    },
    {
        id: 56, unit: "meiosis",
        q: "Compare mitosis and meiosis (at least 5 differences).",
        a: "1. Mitosis: 1 division; Meiosis: 2 divisions.\n2. Mitosis: 2 identical diploid cells; Meiosis: 4 genetically different haploid cells.\n3. Mitosis: no crossing over; Meiosis: crossing over in prophase I.\n4. Mitosis: individual chromosomes at equator; Meiosis I: bivalents at equator.\n5. Mitosis: occurs in body cells for growth/repair; Meiosis: occurs in gonads for gamete production.\n6. Mitosis: daughter cells are genetically identical; Meiosis: daughter cells are genetically unique."
    },
    {
        id: 57, unit: "meiosis",
        q: "What is synapsis?",
        a: "Synapsis is the pairing of homologous chromosomes during prophase I of meiosis to form bivalents. The chromosomes align closely together along their entire length."
    },
    {
        id: 58, unit: "meiosis",
        q: "What are chiasmata (singular: chiasma)?",
        a: "Chiasmata are the points where non-sister chromatids of homologous chromosomes cross over and exchange genetic material during prophase I. They are visible evidence that crossing over has occurred."
    }
,

    // --- Plant Hormones ---
    {
        id: 59, unit: "hormones",
        q: "What are plant hormones (phytohormones)?",
        a: "Chemical substances produced in small quantities in one part of the plant and transported to another part where they have an effect. They regulate plant growth, development, and responses to environmental stimuli."
    },
    {
        id: 60, unit: "hormones",
        q: "Name the five main plant hormones.",
        a: "1. Auxins\n2. Gibberellins\n3. Abscisic acid (ABA)\n4. Cytokinins\n5. Ethylene"
    },
    {
        id: 61, unit: "hormones",
        q: "What is a tropism? Distinguish between positive and negative tropism.",
        a: "A tropism is a directional growth response towards or away from a stimulus.\nPositive tropism: growth TOWARDS the stimulus.\nNegative tropism: growth AWAY FROM the stimulus."
    },
    {
        id: 62, unit: "hormones",
        q: "Where are auxins produced and what is the main natural auxin?",
        a: "Auxins are produced in the apical meristems (tips of shoots and roots). The main natural auxin is Indole-3-acetic acid (IAA)."
    },
    {
        id: 63, unit: "hormones",
        q: "Explain how auxin causes phototropism in a shoot.",
        a: "Auxin moves to the SHADED side of the shoot. Higher auxin concentration causes cells to elongate MORE on that side. The shoot bends TOWARDS the light (positive phototropism)."
    },
    {
        id: 64, unit: "hormones",
        q: "Why do roots and shoots respond differently to the same auxin concentration?",
        a: "Shoots are stimulated by high auxin (cells elongate more). Roots are INHIBITED by high auxin. In a horizontal plant, auxin on the lower side: shoot bends UP (stimulated), root bends DOWN (inhibited below, grows more above)."
    },
    {
        id: 65, unit: "hormones",
        q: "What is apical dominance?",
        a: "The apical bud produces auxin that inhibits lateral (side) bud growth. Removing the tip removes auxin, allowing lateral buds to grow, producing a bushier plant."
    },
    {
        id: 66, unit: "hormones",
        q: "What are the main functions of gibberellins?",
        a: "1. Stem elongation (internode lengthening)\n2. Seed germination (triggers enzymes to break down stored food)\n3. Bolting (rapid stem elongation before flowering)\n4. Fruit development"
    },
    {
        id: 67, unit: "hormones",
        q: "Why is abscisic acid called the stress hormone?",
        a: "ABA helps plants cope with unfavourable conditions: stomatal closure during drought, seed dormancy in bad conditions, bud dormancy in winter. It generally SLOWS DOWN or STOPS growth."
    },
    {
        id: 68, unit: "hormones",
        q: "What are the main functions of cytokinins?",
        a: "1. Stimulate cell division (cytokinesis)\n2. Delay senescence (ageing)\n3. Promote lateral bud growth (counteract apical dominance)\n4. Used with auxins in tissue culture"
    },
    {
        id: 69, unit: "hormones",
        q: "What is unique about ethylene? List its functions.",
        a: "Ethylene is the only gaseous plant hormone.\n1. Fruit ripening (chain reaction between fruits)\n2. Abscission (leaf/fruit drop)\n3. Accelerates senescence\n4. Triple response in seedlings"
    },
    {
        id: 70, unit: "hormones",
        q: "Describe Darwin's coleoptile experiment (1880).",
        a: "Tip removed: no bending. Tip covered with opaque cap: no bending. Base covered, tip exposed: bending occurs. Conclusion: The TIP detects light and sends a signal downward."
    },
    {
        id: 71, unit: "hormones",
        q: "What did Boysen-Jensen prove in 1913?",
        a: "The signal from the tip is CHEMICAL (not electrical). Gelatin block between tip and stump: bending occurred (chemical diffused through). Mica sheet (impermeable): no bending."
    },
    {
        id: 72, unit: "hormones",
        q: "Describe Went's experiment (1928).",
        a: "Placed coleoptile tips on agar blocks to collect the chemical. Agar placed off-centre on decapitated coleoptile in the dark caused bending AWAY from the agar. Degree of bending proportional to chemical amount. Named it AUXIN."
    },
    {
        id: 73, unit: "hormones",
        q: "List commercial uses of plant hormones.",
        a: "Auxins: rooting powder, herbicides (2,4-D), seedless fruit\nGibberellins: larger grapes, break seed dormancy, malting\nCytokinins: tissue culture, keep flowers fresh\nEthylene: ripen fruit artificially, synchronise pineapple flowering\nABA: anti-transpirant sprays, prevent potato sprouting"
    },

    // --- Plant Hormones ---
    {
        id: 46, unit: "hormones", type: "mc",
        question: "Which plant hormone is responsible for phototropism?",
        options: ["Gibberellins", "Auxins", "Cytokinins", "Ethylene"],
        correct: 1,
        explanation: "Auxins cause phototropism by moving to the shaded side of the shoot, causing cells there to elongate more, bending the shoot towards light."
    },
    {
        id: 47, unit: "hormones", type: "mc",
        question: "In a horizontal plant, auxin accumulates on the lower side. What happens to the root?",
        options: ["Root bends upward", "Root grows faster on the lower side", "Root bends downward (positive geotropism)", "Root is unaffected"],
        correct: 2,
        explanation: "Roots are inhibited by high auxin concentrations. Auxin on the lower side inhibits growth there, so the upper side grows faster, bending the root downward (positive geotropism)."
    },
    {
        id: 48, unit: "hormones", type: "mc",
        question: "What is apical dominance?",
        options: ["The tip of the root grows fastest", "The apical bud produces auxin that inhibits lateral bud growth", "Gibberellins cause the main stem to grow taller", "Cytokinins promote tip growth"],
        correct: 1,
        explanation: "Apical dominance occurs when the apical bud produces auxin that inhibits the growth of lateral (side) buds. Removing the tip removes this inhibition."
    },
    {
        id: 49, unit: "hormones", type: "mc",
        question: "Which scientist named the chemical substance 'auxin'?",
        options: ["Darwin", "Boysen-Jensen", "Went", "Mendel"],
        correct: 2,
        explanation: "Fritz Went (1928) isolated the chemical from coleoptile tips using agar blocks and named it auxin (from Greek 'auxein' = to grow)."
    },
    {
        id: 50, unit: "hormones", type: "mc",
        question: "Boysen-Jensen's experiment proved that the signal from the coleoptile tip is:",
        options: ["Electrical", "Chemical", "Light-based", "Mechanical"],
        correct: 1,
        explanation: "Boysen-Jensen showed the signal could pass through gelatin (permeable) but not mica (impermeable), proving it is a chemical substance, not an electrical signal."
    },
    {
        id: 51, unit: "hormones", type: "mc",
        question: "Which hormone is known as the 'stress hormone' in plants?",
        options: ["Auxin", "Ethylene", "Abscisic acid (ABA)", "Cytokinin"],
        correct: 2,
        explanation: "Abscisic acid (ABA) is the stress hormone. It causes stomatal closure during drought, maintains seed dormancy, and generally inhibits growth during unfavourable conditions."
    },
    {
        id: 52, unit: "hormones", type: "mc",
        question: "Which plant hormone is the only one that exists as a gas?",
        options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
        correct: 3,
        explanation: "Ethylene is the only gaseous plant hormone. It is produced by ripening fruits and promotes fruit ripening, abscission, and senescence."
    },
    {
        id: 53, unit: "hormones", type: "mc",
        question: "What is the main function of gibberellins?",
        options: ["Fruit ripening", "Stomatal closure", "Stem elongation and seed germination", "Apical dominance"],
        correct: 2,
        explanation: "Gibberellins promote stem elongation (internode lengthening) and seed germination by triggering enzymes that break down stored food in seeds."
    },
    {
        id: 54, unit: "hormones", type: "mc",
        question: "Cytokinins counteract which effect of auxins?",
        options: ["Phototropism", "Apical dominance", "Cell elongation", "Root growth"],
        correct: 1,
        explanation: "Cytokinins promote lateral bud growth, counteracting apical dominance caused by auxins. The ratio of auxin to cytokinin determines growth patterns."
    },
    {
        id: 55, unit: "hormones", type: "mc",
        question: "Placing a ripe banana with unripe avocados speeds up ripening because:",
        options: ["The banana releases auxin", "The banana releases ethylene gas", "The banana absorbs oxygen", "The banana releases gibberellin"],
        correct: 1,
        explanation: "Ripe bananas release ethylene gas, which triggers ripening in nearby fruits. This is why ripe and unripe fruits should be stored separately (or together to speed ripening)."
    },
    {
        id: 56, unit: "hormones", type: "mc",
        question: "Darwin's experiment showed that the part of the coleoptile that detects light is the:",
        options: ["Base", "Middle section", "Tip", "Entire coleoptile equally"],
        correct: 2,
        explanation: "Darwin showed that covering or removing the tip prevented bending, while covering the base still allowed bending. The tip detects light and sends a chemical signal downward."
    },
    {
        id: 57, unit: "hormones", type: "mc",
        question: "2,4-D is a synthetic auxin used commercially as a:",
        options: ["Fertiliser", "Selective herbicide (weedkiller)", "Fruit ripening agent", "Growth stimulant for roots"],
        correct: 1,
        explanation: "2,4-D is a synthetic auxin used as a selective herbicide. It kills broadleaf weeds but does not affect grasses, making it useful for lawns and cereal crops."
    },

    // --- Protein Synthesis ---
    {
        id: 74, unit: "protein-synthesis",
        q: "What is protein synthesis?",
        a: "Protein synthesis is the process by which cells manufacture proteins. It involves two stages: transcription (DNA → mRNA in the nucleus) and translation (mRNA → polypeptide at the ribosome in the cytoplasm)."
    },
    {
        id: 75, unit: "protein-synthesis",
        q: "What are the two main stages of protein synthesis?",
        a: "1. Transcription: mRNA is formed in the nucleus using DNA as a template.\n2. Translation: the mRNA code is read at the ribosome, and amino acids are assembled into a polypeptide chain."
    },
    {
        id: 76, unit: "protein-synthesis",
        q: "Describe the process of transcription in detail.",
        a: "1. The DNA double helix unwinds and the two strands unzip (hydrogen bonds break).\n2. One strand (template/antisense strand) is used as a template.\n3. RNA polymerase moves along the template strand from 3' to 5'.\n4. Free RNA nucleotides pair with complementary DNA bases (A-U, T-A, G-C, C-G).\n5. The mRNA strand is formed and detaches from the DNA.\n6. The mRNA moves out of the nucleus through nuclear pores to ribosomes in the cytoplasm."
    },
    {
        id: 77, unit: "protein-synthesis",
        q: "What is the genetic code?",
        a: "The genetic code is the sequence of bases on mRNA (codons) that codes for the sequence of amino acids in a protein. It is a triplet code — every three consecutive bases (codon) code for one amino acid."
    },
    {
        id: 78, unit: "protein-synthesis",
        q: "List four properties of the genetic code.",
        a: "1. Triplet: three bases code for one amino acid.\n2. Degenerate (redundant): more than one codon can code for the same amino acid (e.g., there are 64 codons but only 20 amino acids).\n3. Universal: the same codons code for the same amino acids in almost all organisms.\n4. Non-overlapping: codons are read sequentially without sharing bases."
    },
    {
        id: 79, unit: "protein-synthesis",
        q: "What is the start codon and what amino acid does it code for?",
        a: "The start codon is AUG. It codes for the amino acid methionine and signals the beginning of translation."
    },
    {
        id: 80, unit: "protein-synthesis",
        q: "What are stop codons? Name all three.",
        a: "Stop codons signal the end of translation. The three stop codons are:\n1. UAA\n2. UAG\n3. UGA\nThey do not code for any amino acid."
    },
    {
        id: 81, unit: "protein-synthesis",
        q: "Describe the process of translation in detail.",
        a: "1. mRNA attaches to a ribosome in the cytoplasm.\n2. The ribosome reads the start codon (AUG).\n3. A tRNA molecule with the complementary anticodon (UAC) and carrying methionine binds to the start codon.\n4. The next codon is read and the appropriate tRNA with its amino acid binds.\n5. A peptide bond forms between adjacent amino acids.\n6. The ribosome moves along the mRNA, reading each codon in sequence.\n7. The process continues until a stop codon (UAA, UAG or UGA) is reached.\n8. The polypeptide chain is released and folds into a functional protein."
    },
    {
        id: 82, unit: "protein-synthesis",
        q: "What is a peptide bond?",
        a: "A peptide bond is a strong covalent bond that forms between the amino group of one amino acid and the carboxyl group of another during translation. A chain of amino acids joined by peptide bonds is called a polypeptide."
    },
    {
        id: 83, unit: "protein-synthesis",
        q: "What is a polysome (polyribosome)?",
        a: "A polysome is a cluster of ribosomes all translating the same mRNA molecule simultaneously. This allows multiple copies of the same protein to be produced quickly and efficiently."
    },
    {
        id: 84, unit: "protein-synthesis",
        q: "What is a gene mutation?",
        a: "A gene mutation is a change in the nucleotide sequence of DNA. It can be caused by errors during DNA replication or by mutagens (UV radiation, X-rays, chemicals). Mutations may be harmful, beneficial, or neutral."
    },
    {
        id: 85, unit: "protein-synthesis",
        q: "What is a point mutation (substitution)?",
        a: "A point mutation (substitution) is where one nucleotide base is replaced by another. This may cause:\n- A silent mutation (same amino acid due to degeneracy)\n- A missense mutation (different amino acid)\n- A nonsense mutation (creates a premature stop codon)"
    },
    {
        id: 86, unit: "protein-synthesis",
        q: "What is a frameshift mutation?",
        a: "A frameshift mutation occurs when nucleotide bases are inserted or deleted (not in multiples of three). This shifts the reading frame of all subsequent codons, usually resulting in a completely different and non-functional protein."
    },
    {
        id: 87, unit: "protein-synthesis",
        q: "What are mutagens? Give examples of each type.",
        a: "Mutagens are agents that cause mutations.\nPhysical mutagens: UV radiation, X-rays, gamma rays.\nChemical mutagens: benzene, nicotine, asbestos, mustard gas.\nBiological mutagens: certain viruses (e.g., HPV)."
    },
    {
        id: 88, unit: "protein-synthesis",
        q: "What is the difference between a somatic mutation and a germline mutation?",
        a: "Somatic mutation: occurs in body cells; affects only the individual (not inherited); can lead to cancer.\nGermline mutation: occurs in gametes (sex cells); can be passed on to offspring and may cause genetic disorders in future generations."
    },
    {
        id: 89, unit: "protein-synthesis",
        q: "Explain why the genetic code is described as universal.",
        a: "The genetic code is universal because the same codons code for the same amino acids in almost all living organisms — from bacteria to humans. This provides evidence for a common ancestor and allows genetic engineering (genes from one species can function in another)."
    },
    {
        id: 90, unit: "protein-synthesis",
        q: "How does the base pairing differ between transcription and DNA replication?",
        a: "In DNA replication: A pairs with T, and G pairs with C (DNA-DNA pairing).\nIn transcription: A on DNA pairs with U on mRNA (instead of T), T on DNA pairs with A on mRNA, G pairs with C. RNA uses uracil instead of thymine."
    },
    {
        id: 91, unit: "protein-synthesis",
        q: "What is the role of RNA polymerase in transcription?",
        a: "RNA polymerase is the enzyme that catalyses the formation of mRNA during transcription. It moves along the template strand of DNA (3' to 5'), adding complementary RNA nucleotides to build the mRNA strand (5' to 3')."
    },

    // --- Genetics ---
    {
        id: 92, unit: "genetics",
        q: "Define the following genetic terms: allele, genotype, phenotype, dominant, recessive.",
        a: "Allele: alternative form of a gene found at the same locus on homologous chromosomes.\nGenotype: the genetic makeup of an organism (e.g., Tt).\nPhenotype: the observable physical characteristic (e.g., tall).\nDominant: an allele that is expressed in both homozygous (TT) and heterozygous (Tt) conditions.\nRecessive: an allele that is only expressed in the homozygous condition (tt)."
    },
    {
        id: 93, unit: "genetics",
        q: "State Mendel's Law of Dominance.",
        a: "When two organisms with contrasting traits are crossed, only one trait (the dominant trait) appears in the F1 generation. The other trait (recessive) is masked but still present in the genotype."
    },
    {
        id: 94, unit: "genetics",
        q: "State Mendel's Law of Segregation.",
        a: "During gamete formation, the two alleles for each gene segregate (separate) so that each gamete carries only one allele for each trait. At fertilisation, alleles are randomly combined."
    },
    {
        id: 95, unit: "genetics",
        q: "State Mendel's Law of Independent Assortment.",
        a: "During gamete formation, the alleles of different genes assort (separate) independently of one another. This means the inheritance of one trait does not affect the inheritance of another trait (applies to genes on different chromosomes)."
    },
    {
        id: 96, unit: "genetics",
        q: "What is a monohybrid cross? What phenotypic ratio is expected in the F2 generation?",
        a: "A monohybrid cross involves the inheritance of ONE trait/gene. When two heterozygous individuals are crossed (e.g., Tt × Tt), the expected F2 phenotypic ratio is 3:1 (3 dominant : 1 recessive) and the genotypic ratio is 1:2:1 (1 TT : 2 Tt : 1 tt)."
    },
    {
        id: 97, unit: "genetics",
        q: "What is a dihybrid cross? What phenotypic ratio is expected?",
        a: "A dihybrid cross involves the inheritance of TWO traits/genes simultaneously. When two individuals heterozygous for both traits are crossed (e.g., TtBb × TtBb), the expected phenotypic ratio is 9:3:3:1."
    },
    {
        id: 98, unit: "genetics",
        q: "What is incomplete dominance? Give an example.",
        a: "Incomplete dominance occurs when the heterozygous phenotype is intermediate (a blend) between the two homozygous phenotypes. Neither allele is completely dominant.\nExample: Red (RR) × White (R'R') = Pink (RR') snapdragons.\nPhenotypic ratio in F2: 1 red : 2 pink : 1 white (1:2:1)."
    },
    {
        id: 99, unit: "genetics",
        q: "What is co-dominance? Give an example.",
        a: "Co-dominance occurs when both alleles in a heterozygous individual are fully expressed simultaneously — neither is dominant over the other, and there is no blending.\nExample: ABO blood group system — a person with genotype I^A I^B has blood type AB, where both A and B antigens are expressed on red blood cells."
    },
    {
        id: 100, unit: "genetics",
        q: "Explain the ABO blood group system. What are the alleles and what do they code for?",
        a: "The ABO blood group is controlled by three alleles: I^A, I^B, and i.\nI^A codes for antigen A on red blood cells.\nI^B codes for antigen B on red blood cells.\ni codes for no antigen (recessive).\nI^A and I^B are co-dominant to each other, but both are dominant over i."
    },
    {
        id: 101, unit: "genetics",
        q: "List all possible genotypes for each blood type.",
        a: "Blood type A: I^A I^A or I^A i\nBlood type B: I^B I^B or I^B i\nBlood type AB: I^A I^B (co-dominant)\nBlood type O: ii (homozygous recessive)"
    },
    {
        id: 102, unit: "genetics",
        q: "What is sex-linked inheritance?",
        a: "Sex-linked inheritance involves genes located on the sex chromosomes (usually the X chromosome). Because males have only one X chromosome (XY), they only need one copy of a recessive allele to express a sex-linked trait. Females (XX) need two copies of the recessive allele. This is why sex-linked recessive conditions are more common in males."
    },
    {
        id: 103, unit: "genetics",
        q: "Explain haemophilia as a sex-linked disorder.",
        a: "Haemophilia is an X-linked recessive disorder where the blood does not clot properly.\nX^H = normal clotting (dominant), X^h = haemophilia (recessive).\nMales: X^H Y (normal) or X^h Y (haemophiliac).\nFemales: X^H X^H (normal), X^H X^h (carrier), X^h X^h (haemophiliac — very rare).\nA carrier female can pass the allele to sons — 50% chance of affected sons."
    },
    {
        id: 104, unit: "genetics",
        q: "Explain colour blindness as a sex-linked disorder.",
        a: "Red-green colour blindness is an X-linked recessive disorder.\nX^C = normal colour vision (dominant), X^c = colour blind (recessive).\nMales: X^C Y (normal) or X^c Y (colour blind).\nFemales: X^C X^C (normal), X^C X^c (carrier with normal vision), X^c X^c (colour blind).\nColour blindness is more common in males because they need only one recessive allele."
    },
    {
        id: 105, unit: "genetics",
        q: "What is a test cross (back cross) and why is it used?",
        a: "A test cross is used to determine whether an individual showing the dominant phenotype is homozygous dominant (TT) or heterozygous (Tt). The individual is crossed with a homozygous recessive individual (tt).\nIf ALL offspring show the dominant phenotype → parent is TT.\nIf approximately HALF the offspring show the recessive phenotype → parent is Tt."
    },
    {
        id: 106, unit: "genetics",
        q: "Describe sickle cell anaemia as a genetic disorder.",
        a: "Sickle cell anaemia is an autosomal recessive disorder caused by a point mutation (substitution) in the haemoglobin gene. The mutation changes one amino acid (glutamic acid → valine), causing red blood cells to become sickle-shaped under low oxygen conditions.\nHbA HbA = normal; HbA HbS = carrier (sickle cell trait); HbS HbS = sickle cell anaemia.\nCarriers have some resistance to malaria (heterozygous advantage)."
    },
    {
        id: 107, unit: "genetics",
        q: "What is albinism?",
        a: "Albinism is an autosomal recessive genetic condition in which the body cannot produce melanin (the pigment responsible for skin, hair and eye colour). Individuals with albinism (aa) lack pigment. It is relatively common in some South African populations."
    },
    {
        id: 108, unit: "genetics",
        q: "What is cystic fibrosis?",
        a: "Cystic fibrosis is an autosomal recessive disorder caused by a mutation in the CFTR gene. It results in the production of thick, sticky mucus that clogs the lungs and digestive system. Both parents must be carriers (Cc) for a child to be affected (cc). Approximately 1 in 4 children of two carriers will be affected."
    },
    {
        id: 109, unit: "genetics",
        q: "What is a pedigree diagram and what is it used for?",
        a: "A pedigree diagram is a chart that shows the inheritance pattern of a genetic trait across several generations of a family. It uses standard symbols: squares for males, circles for females, filled symbols for affected individuals, half-filled for carriers. It helps determine if a trait is dominant/recessive and autosomal/sex-linked."
    },
    {
        id: 110, unit: "genetics",
        q: "Distinguish between autosomal and sex-linked inheritance.",
        a: "Autosomal: the gene is on an autosome (chromosomes 1-22); affects males and females equally; both parents contribute alleles.\nSex-linked: the gene is on a sex chromosome (usually X); affects males more often because they have only one X chromosome; females can be carriers."
    },
    {
        id: 111, unit: "genetics",
        q: "How does the environment affect phenotype?",
        a: "The phenotype is determined by both the genotype and the environment. Examples:\n- Hydrangea flower colour changes with soil pH.\n- Human skin colour is influenced by sun exposure (tanning).\n- Height is affected by nutrition.\n- Siamese cats have darker extremities due to temperature-sensitive enzymes.\nThis shows that genes set the potential, but the environment influences expression."
    },

    // --- Evolution ---
    {
        id: 112, unit: "evolution",
        q: "What is evolution?",
        a: "Evolution is the change in the inherited characteristics (allele frequencies) of a population over successive generations. It results in populations becoming better adapted to their environment over time."
    },
    {
        id: 113, unit: "evolution",
        q: "Who was Charles Darwin and what was his contribution?",
        a: "Charles Darwin (1809–1882) was a British naturalist who proposed the theory of evolution by natural selection. He travelled on HMS Beagle (1831–1836) and observed variation in species (e.g., Galápagos finches). He published 'On the Origin of Species' in 1859."
    },
    {
        id: 114, unit: "evolution",
        q: "Describe the process of natural selection.",
        a: "1. Variation: individuals in a population show genetic variation.\n2. Overproduction: more offspring are produced than can survive.\n3. Struggle for existence: individuals compete for limited resources.\n4. Survival of the fittest: individuals with favourable variations are more likely to survive.\n5. Reproduction: survivors pass their advantageous alleles to offspring.\n6. Over many generations, the frequency of favourable alleles increases in the population."
    },
    {
        id: 115, unit: "evolution",
        q: "What is speciation?",
        a: "Speciation is the process by which one species evolves into two or more new species. It requires reproductive isolation — members of the two groups can no longer interbreed to produce fertile offspring."
    },
    {
        id: 116, unit: "evolution",
        q: "Distinguish between allopatric and sympatric speciation.",
        a: "Allopatric speciation: populations are separated by a GEOGRAPHICAL barrier (river, mountain, ocean). Gene flow is prevented. Each population adapts to its own environment. Over time, they become so different that they can no longer interbreed.\nSympatric speciation: new species arise within the SAME geographical area without a physical barrier — e.g., through polyploidy, behavioural differences, or habitat specialisation."
    },
    {
        id: 117, unit: "evolution",
        q: "What is punctuated equilibrium?",
        a: "Punctuated equilibrium (proposed by Gould and Eldredge) is a model of evolution where species remain relatively unchanged for long periods (stasis), punctuated by short bursts of rapid change (speciation events). This contrasts with gradualism."
    },
    {
        id: 118, unit: "evolution",
        q: "What is gradualism?",
        a: "Gradualism proposes that evolution occurs slowly and steadily through the gradual accumulation of small changes over long periods of time. Transitional fossils support this model."
    },
    {
        id: 119, unit: "evolution",
        q: "List and describe four types of evidence that support evolution.",
        a: "1. Fossil evidence: fossils show a progression from simple to complex organisms over time; transitional fossils link groups.\n2. Biogeography: the distribution of species across continents reflects evolutionary history and continental drift.\n3. Comparative anatomy: homologous structures (same origin, different function) suggest common ancestry.\n4. Molecular evidence: DNA and protein sequence similarities between species — the more similar, the more closely related."
    },
    {
        id: 120, unit: "evolution",
        q: "What are homologous structures? Give an example.",
        a: "Homologous structures are structures in different species that have the SAME basic structure and embryological origin but may have DIFFERENT functions. They provide evidence for common ancestry.\nExample: the forelimbs of humans (arm), whales (flipper), bats (wing) and dogs (leg) all have the same basic bone structure (humerus, radius, ulna)."
    },
    {
        id: 121, unit: "evolution",
        q: "What are analogous structures?",
        a: "Analogous structures have DIFFERENT origins but perform SIMILAR functions. They are the result of convergent evolution — unrelated species evolving similar features due to similar environmental pressures.\nExample: wings of insects and wings of birds — similar function (flight) but completely different structure and origin."
    },
    {
        id: 122, unit: "evolution",
        q: "What are vestigial structures? Give examples.",
        a: "Vestigial structures are reduced, non-functional (or reduced-function) remnants of structures that were fully functional in an ancestor.\nExamples: human appendix, wisdom teeth, coccyx (tailbone), whale pelvic bones, ostrich wings.\nThey provide evidence that organisms have evolved from ancestors in which these structures were functional."
    },
    {
        id: 123, unit: "evolution",
        q: "Describe the Out of Africa hypothesis.",
        a: "The Out of Africa hypothesis states that modern humans (Homo sapiens) evolved in Africa approximately 200 000 years ago and then migrated out of Africa to populate the rest of the world, replacing other hominin species. This is supported by fossil evidence (oldest Homo sapiens fossils found in Africa) and genetic evidence (greatest genetic diversity in African populations)."
    },
    {
        id: 124, unit: "evolution",
        q: "What evidence supports the Out of Africa hypothesis?",
        a: "1. Fossil evidence: the oldest Homo sapiens fossils are found in Africa (e.g., Omo Kibish, Ethiopia ~195 000 years ago).\n2. Genetic evidence: African populations have the greatest genetic diversity, suggesting they are the oldest.\n3. Mitochondrial DNA: all modern humans can be traced back to a common female ancestor in Africa ('Mitochondrial Eve').\n4. Y-chromosome analysis: points to a common male ancestor in Africa."
    },
    {
        id: 125, unit: "evolution",
        q: "Name key hominin fossils discovered in South Africa.",
        a: "1. Taung Child (Australopithecus africanus): discovered by Raymond Dart in 1924 in the North West Province.\n2. Mrs Ples (Australopithecus africanus): discovered by Robert Broom in 1947 at Sterkfontein.\n3. Little Foot (Australopithecus): nearly complete skeleton found at Sterkfontein, ~3.7 million years old.\n4. Homo naledi: discovered in 2013 in the Rising Star Cave system, Cradle of Humankind — mixture of primitive and modern features."
    },
    {
        id: 126, unit: "evolution",
        q: "What is artificial selection?",
        a: "Artificial selection is the deliberate breeding of organisms by humans to produce offspring with desirable traits. Humans choose which individuals to breed based on specific characteristics.\nExamples: dog breeds, high-yield crops, dairy cows with high milk production."
    },
    {
        id: 127, unit: "evolution",
        q: "How does natural selection differ from artificial selection?",
        a: "Natural selection: nature 'selects' based on survival fitness; occurs over long time periods; increases adaptation to the natural environment; no human involvement.\nArtificial selection: humans select based on desirable traits; occurs over shorter time periods; produces traits useful to humans (not necessarily for survival); can reduce genetic diversity."
    },
    {
        id: 128, unit: "evolution",
        q: "What is adaptive radiation?",
        a: "Adaptive radiation is the evolution of many different species from a single ancestor, each adapted to a different niche or environment. It often occurs when organisms colonise a new environment with many available niches.\nExample: Darwin's finches on the Galápagos Islands evolved different beak shapes for different food sources from a common ancestor."
    },
    {
        id: 129, unit: "evolution",
        q: "What is the role of genetic variation in evolution?",
        a: "Genetic variation provides the raw material for natural selection. Without variation, all individuals would be equally suited (or unsuited) to the environment, and evolution could not occur. Sources of variation include: mutations, crossing over (meiosis), independent assortment, and random fertilisation."
    },

    // --- Population Ecology ---
    {
        id: 130, unit: "ecology",
        q: "What is a population in ecology?",
        a: "A population is a group of organisms of the SAME SPECIES living in the SAME AREA at the SAME TIME. Populations are dynamic — their size can change over time due to births, deaths, immigration and emigration."
    },
    {
        id: 131, unit: "ecology",
        q: "How is the population size of plants estimated using quadrats?",
        a: "1. Quadrats (square frames of known area) are placed randomly in the habitat.\n2. The number of individuals of the target species in each quadrat is counted.\n3. The average number per quadrat is calculated.\n4. This is multiplied by the total area to estimate the total population size.\nFormula: Estimated population = (mean count per quadrat / quadrat area) × total area."
    },
    {
        id: 132, unit: "ecology",
        q: "Describe the mark-recapture method for estimating animal population size.",
        a: "1. Capture a sample of animals and count them (M = number marked).\n2. Mark them in a harmless way and release them back into the habitat.\n3. Allow time for marked animals to mix with the population.\n4. Capture a second sample (C = total in second sample, R = number of recaptured marked animals).\n5. Use the Lincoln Index: N = (M × C) / R, where N = estimated population size."
    },
    {
        id: 133, unit: "ecology",
        q: "What is the Lincoln Index formula?",
        a: "N = (M × C) / R\nN = estimated total population size\nM = number of animals marked and released in the first capture\nC = total number of animals in the second capture\nR = number of marked (recaptured) animals in the second capture."
    },
    {
        id: 134, unit: "ecology",
        q: "Describe the J-shaped (exponential) growth curve.",
        a: "A J-shaped curve shows exponential population growth where the population increases rapidly without limits. It occurs when resources are abundant, there are no predators, and conditions are ideal. There is no environmental resistance. This type of growth cannot be sustained indefinitely and usually ends in a population crash."
    },
    {
        id: 135, unit: "ecology",
        q: "Describe the S-shaped (sigmoid/logistic) growth curve.",
        a: "An S-shaped curve shows population growth that starts slowly (lag phase), then increases rapidly (exponential/log phase), then levels off as it reaches the carrying capacity (K) (stationary phase). Environmental resistance (limited food, space, disease, predation) prevents unlimited growth. The population fluctuates around K."
    },
    {
        id: 136, unit: "ecology",
        q: "What is carrying capacity (K)?",
        a: "Carrying capacity (K) is the maximum number of individuals of a species that an environment can sustainably support over a long period, given the available resources (food, water, space, shelter). When the population reaches K, the birth rate approximately equals the death rate."
    },
    {
        id: 137, unit: "ecology",
        q: "What are density-dependent limiting factors? Give examples.",
        a: "Density-dependent factors are factors whose effects become MORE intense as the population density INCREASES.\nExamples: competition for food/space, predation, disease, parasitism, accumulation of waste products.\nThey regulate population size by increasing the death rate or decreasing the birth rate as density increases."
    },
    {
        id: 138, unit: "ecology",
        q: "What are density-independent limiting factors? Give examples.",
        a: "Density-independent factors affect the population regardless of its density — they are NOT influenced by population size.\nExamples: natural disasters (floods, fires, droughts, earthquakes), extreme weather, human activities (habitat destruction, pollution).\nThey can cause sudden population crashes."
    },
    {
        id: 139, unit: "ecology",
        q: "What is the population growth formula?",
        a: "Population growth = (births + immigration) − (deaths + emigration)\nIf births + immigration > deaths + emigration → population increases.\nIf births + immigration < deaths + emigration → population decreases.\nIf they are equal → population is stable (zero population growth)."
    },
    {
        id: 140, unit: "ecology",
        q: "Compare r-strategists and K-strategists.",
        a: "r-strategists: many offspring, little/no parental care, short lifespan, rapid reproduction, rapid population growth, small body size. Suited to unstable environments. Examples: insects, bacteria, weeds.\nK-strategists: few offspring, extensive parental care, long lifespan, slow reproduction, population near carrying capacity, large body size. Suited to stable environments. Examples: elephants, whales, humans."
    },
    {
        id: 141, unit: "ecology",
        q: "What happens when a population exceeds carrying capacity?",
        a: "When a population exceeds carrying capacity, resources become scarce. Competition increases, disease spreads more easily, predation increases, and the death rate rises above the birth rate. The population decreases (often crashes) until it drops below carrying capacity. The population may then recover and oscillate around K."
    },
    {
        id: 142, unit: "ecology",
        q: "Define immigration and emigration in population ecology.",
        a: "Immigration: the movement of individuals INTO a population from another area — increases population size.\nEmigration: the movement of individuals OUT OF a population to another area — decreases population size."
    },
    {
        id: 143, unit: "ecology",
        q: "Distinguish between intraspecific and interspecific competition.",
        a: "Intraspecific competition: competition between members of the SAME species for the same resources. It is the most intense form of competition because individuals have identical resource requirements.\nInterspecific competition: competition between members of DIFFERENT species for the same resources."
    },
    {
        id: 144, unit: "ecology",
        q: "What assumptions must be met for the mark-recapture method to be valid?",
        a: "1. Marks must not wear off or harm the animals.\n2. Marked and unmarked animals must mix randomly.\n3. There must be no births, deaths, immigration or emigration between samples.\n4. Marked animals must have an equal chance of being recaptured.\n5. The population must be closed during the sampling period."
    },

    // --- Human Impact on Environment ---
    {
        id: 145, unit: "human-impact",
        q: "What is the greenhouse effect?",
        a: "The greenhouse effect is a NATURAL process where greenhouse gases in the atmosphere trap heat (infrared radiation) radiated from Earth's surface, keeping the planet warm enough to support life. Without the greenhouse effect, Earth would be about 33°C colder. The ENHANCED greenhouse effect is caused by increased greenhouse gas emissions from human activities."
    },
    {
        id: 146, unit: "human-impact",
        q: "Name the main greenhouse gases and their sources.",
        a: "1. Carbon dioxide (CO₂): burning fossil fuels, deforestation.\n2. Methane (CH₄): livestock farming, rice paddies, landfills, fossil fuel extraction.\n3. Nitrous oxide (N₂O): agricultural fertilisers, burning fossil fuels.\n4. Chlorofluorocarbons (CFCs): refrigerants, aerosols (now banned by Montreal Protocol).\n5. Water vapour: natural evaporation (enhanced by warming)."
    },
    {
        id: 147, unit: "human-impact",
        q: "What is global warming and what are its consequences?",
        a: "Global warming is the increase in Earth's average surface temperature due to the enhanced greenhouse effect.\nConsequences:\n1. Melting of polar ice caps and glaciers → rising sea levels → coastal flooding.\n2. More extreme weather events (droughts, floods, storms).\n3. Shifts in biomes and habitats → species extinction.\n4. Changes in rainfall patterns → crop failures.\n5. Spread of tropical diseases to new areas.\n6. Ocean acidification → coral bleaching."
    },
    {
        id: 148, unit: "human-impact",
        q: "What is the ozone layer and why is it important?",
        a: "The ozone layer is a region in the stratosphere (15–35 km above Earth) containing a high concentration of ozone (O₃). It absorbs most of the sun's harmful ultraviolet (UV) radiation, protecting living organisms from UV damage such as skin cancer, cataracts, and damage to DNA and immune systems."
    },
    {
        id: 149, unit: "human-impact",
        q: "What causes ozone depletion?",
        a: "Ozone depletion is primarily caused by chlorofluorocarbons (CFCs) and other ozone-depleting substances (halons, carbon tetrachloride). UV radiation breaks down CFCs in the stratosphere, releasing chlorine atoms. Each chlorine atom can destroy thousands of ozone molecules in a chain reaction. The Montreal Protocol (1987) was signed to phase out CFC production."
    },
    {
        id: 150, unit: "human-impact",
        q: "What are the effects of ozone depletion?",
        a: "1. Increased UV radiation reaching Earth's surface.\n2. Increased risk of skin cancer (melanoma) in humans.\n3. Increased cataracts and eye damage.\n4. Suppression of the immune system.\n5. Reduced crop yields (UV damages plant cells).\n6. Damage to marine ecosystems (UV kills phytoplankton, which are the base of ocean food chains).\n7. Accelerated ageing and breakdown of materials (plastics, paints)."
    },
    {
        id: 151, unit: "human-impact",
        q: "What are alien invasive species?",
        a: "Alien invasive species are organisms that have been introduced (deliberately or accidentally) to an area outside their natural range, where they establish, spread, and cause ecological or economic harm. They often lack natural predators or diseases in the new environment, allowing their populations to grow unchecked."
    },
    {
        id: 152, unit: "human-impact",
        q: "Give examples of alien invasive species in South Africa and their impacts.",
        a: "1. Water hyacinth (Eichhornia crassipes): blocks waterways, reduces light and oxygen in water, kills aquatic organisms.\n2. Port Jackson willow (Acacia saligna): displaces indigenous fynbos.\n3. Lantana camara: toxic to livestock, displaces indigenous plants.\n4. Trout: preys on indigenous fish and frogs.\n5. Black wattle (Acacia mearnsii): uses excessive water, displaces indigenous plants.\n6. Rooikrans (Acacia cyclops): invades coastal dunes."
    },
    {
        id: 153, unit: "human-impact",
        q: "What is the Working for Water programme?",
        a: "Working for Water is a South African government programme that employs people to clear alien invasive plants. It serves dual purposes: conserving water resources (invasive trees use excessive water) and creating employment. It has cleared over 1 million hectares of invasive plants since 1995."
    },
    {
        id: 154, unit: "human-impact",
        q: "What is biodiversity and why is it important?",
        a: "Biodiversity is the variety of all living organisms in an area, including species diversity, genetic diversity and ecosystem diversity.\nImportance: maintains ecosystem stability; provides food, medicine, raw materials; supports nutrient cycling, pollination, water purification; has aesthetic, cultural, ethical and economic value; greater biodiversity means greater resilience to environmental change."
    },
    {
        id: 155, unit: "human-impact",
        q: "Distinguish between in-situ and ex-situ conservation.",
        a: "In-situ conservation: protecting species in their NATURAL habitat.\nExamples: national parks, nature reserves, biosphere reserves, marine protected areas, World Heritage Sites.\nEx-situ conservation: protecting species OUTSIDE their natural habitat.\nExamples: zoos, aquariums, botanical gardens, seed banks, captive breeding programmes.\nBoth approaches are often used together for effective conservation."
    },
    {
        id: 156, unit: "human-impact",
        q: "What is a biosphere reserve?",
        a: "A biosphere reserve is an area designated by UNESCO that promotes sustainable development and conservation. It has three zones:\n1. Core zone: strictly protected, no human activity (biodiversity conservation).\n2. Buffer zone: surrounds the core, limited activities like research and education.\n3. Transition zone: outermost area, sustainable human activities (farming, settlements).\nSouth African examples: Kogelberg, Kruger to Canyons, Cape West Coast."
    },
    {
        id: 157, unit: "human-impact",
        q: "What are the effects of deforestation?",
        a: "1. Loss of biodiversity (habitat destruction).\n2. Increased CO₂ in the atmosphere (trees no longer absorb CO₂) → enhanced greenhouse effect.\n3. Soil erosion (roots no longer bind soil).\n4. Reduced water retention → flooding and drought.\n5. Disruption of water cycle (less transpiration → reduced rainfall).\n6. Loss of resources (timber, medicine, food)."
    },
    {
        id: 158, unit: "human-impact",
        q: "What is sustainable development?",
        a: "Sustainable development is development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs. It balances economic growth, social development and environmental protection."
    },
    {
        id: 159, unit: "human-impact",
        q: "What is the impact of pollution on water sources?",
        a: "1. Eutrophication: fertiliser run-off causes algal blooms → algae die → decomposition uses up oxygen → aquatic organisms die.\n2. Industrial effluent: heavy metals and toxins accumulate in food chains (bioaccumulation/biomagnification).\n3. Sewage: introduces pathogens (cholera, typhoid) and increases biological oxygen demand.\n4. Acid mine drainage: lowers pH, kills aquatic life.\n5. Oil spills: coat organisms, prevent gas exchange, destroy habitats."
    },
    {
        id: 160, unit: "human-impact",
        q: "What is eutrophication? Describe the process.",
        a: "Eutrophication is the enrichment of water bodies with nutrients (especially nitrates and phosphates from fertilisers and sewage).\nProcess:\n1. Excess nutrients enter water → rapid algal growth (algal bloom).\n2. Algae block sunlight → submerged plants die.\n3. Algae and plants die → decomposers (bacteria) break them down.\n4. Decomposition uses up dissolved oxygen (increased BOD).\n5. Aquatic organisms (fish, invertebrates) suffocate and die.\n6. Water becomes foul-smelling and unusable."
    },
    {
        id: 161, unit: "human-impact",
        q: "What is bioaccumulation and biomagnification?",
        a: "Bioaccumulation: the build-up of toxic substances (e.g., pesticides, heavy metals) in the tissues of an organism over its lifetime because the substance is absorbed faster than it is broken down or excreted.\nBiomagnification: the increase in concentration of a toxic substance at each successive trophic level of a food chain. Top predators have the highest concentrations.\nExample: DDT accumulated in fish → concentrated in fish-eating birds → eggshell thinning."
    }];


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
    },

    // --- Meiosis ---
    {
        id: 31, unit: "meiosis", type: "mc",
        question: "Meiosis produces:",
        options: ["2 identical diploid cells", "2 identical haploid cells", "4 genetically different haploid cells", "4 identical diploid cells"],
        correct: 2,
        explanation: "Meiosis produces four genetically different haploid (n) daughter cells from one diploid (2n) parent cell through two successive divisions."
    },
    {
        id: 32, unit: "meiosis", type: "mc",
        question: "Where does meiosis occur in the human body?",
        options: ["In all body cells", "In the brain", "In the gonads (ovaries and testes)", "In the bone marrow"],
        correct: 2,
        explanation: "Meiosis occurs only in the gonads — ovaries in females and testes in males — to produce gametes (egg cells and sperm cells)."
    },
    {
        id: 33, unit: "meiosis", type: "mc",
        question: "A human body cell has 46 chromosomes. After meiosis, each gamete will have:",
        options: ["46 chromosomes", "92 chromosomes", "23 chromosomes", "12 chromosomes"],
        correct: 2,
        explanation: "Meiosis halves the chromosome number. Human body cells are diploid (2n = 46), so gametes are haploid (n = 23)."
    },
    {
        id: 34, unit: "meiosis", type: "mc",
        question: "Homologous chromosomes are best described as:",
        options: [
            "Two identical chromosomes from the same parent",
            "A pair of chromosomes (one from each parent) with the same genes at the same loci",
            "Two sister chromatids joined at a centromere",
            "Chromosomes that have undergone mutation"
        ],
        correct: 1,
        explanation: "Homologous chromosomes are a pair (one maternal, one paternal) with the same length, centromere position, and genes at the same loci. They may carry different alleles."
    },
    {
        id: 35, unit: "meiosis", type: "mc",
        question: "Crossing over occurs during which phase of meiosis?",
        options: ["Metaphase I", "Prophase I", "Anaphase I", "Prophase II"],
        correct: 1,
        explanation: "Crossing over occurs during prophase I when homologous chromosomes are paired as bivalents. Non-sister chromatids exchange segments of DNA at chiasmata."
    },
    {
        id: 36, unit: "meiosis", type: "mc",
        question: "What is a bivalent?",
        options: [
            "A single chromosome with two chromatids",
            "A pair of homologous chromosomes lying together during prophase I",
            "A cell with two nuclei",
            "Two non-homologous chromosomes"
        ],
        correct: 1,
        explanation: "A bivalent is a pair of homologous chromosomes that pair up (synapsis) during prophase I. Since each chromosome has 2 chromatids, a bivalent has 4 chromatids (tetrad)."
    },
    {
        id: 37, unit: "meiosis", type: "mc",
        question: "During Anaphase I, what separates?",
        options: ["Sister chromatids", "Homologous chromosomes", "Individual genes", "Centromeres"],
        correct: 1,
        explanation: "During Anaphase I, homologous chromosomes separate and move to opposite poles. The centromeres do NOT split — sister chromatids remain joined. This is the reduction division."
    },
    {
        id: 38, unit: "meiosis", type: "mc",
        question: "During Anaphase II, what separates?",
        options: ["Homologous chromosomes", "Bivalents", "Sister chromatids", "Nuclear membranes"],
        correct: 2,
        explanation: "During Anaphase II, centromeres split and sister chromatids separate, moving to opposite poles. This is similar to what happens in mitosis."
    },
    {
        id: 39, unit: "meiosis", type: "mc",
        question: "Independent assortment occurs during:",
        options: ["Prophase I", "Metaphase I", "Anaphase II", "Telophase I"],
        correct: 1,
        explanation: "Independent (random) assortment occurs during Metaphase I when bivalents line up randomly at the equator. The orientation of each homologous pair is random, creating unique combinations."
    },
    {
        id: 40, unit: "meiosis", type: "mc",
        question: "Non-disjunction results in:",
        options: [
            "Normal gametes",
            "Gametes with abnormal chromosome numbers",
            "Identical daughter cells",
            "Crossing over"
        ],
        correct: 1,
        explanation: "Non-disjunction is the failure of chromosomes to separate properly, resulting in gametes with too many (n+1) or too few (n-1) chromosomes."
    },
    {
        id: 41, unit: "meiosis", type: "mc",
        question: "Down syndrome is caused by:",
        options: [
            "A missing chromosome 21",
            "Three copies of chromosome 21 (trisomy 21)",
            "A mutation in chromosome 21",
            "Two copies of the X chromosome"
        ],
        correct: 1,
        explanation: "Down syndrome (trisomy 21) results from non-disjunction during meiosis, producing a gamete with an extra chromosome 21. After fertilisation, the individual has 47 chromosomes."
    },
    {
        id: 42, unit: "meiosis", type: "mc",
        question: "Which is NOT a way meiosis creates genetic variation?",
        options: [
            "Crossing over in prophase I",
            "Independent assortment in metaphase I",
            "DNA replication during interkinesis",
            "Random fertilisation"
        ],
        correct: 2,
        explanation: "DNA replication does NOT occur during interkinesis (between meiosis I and II). Genetic variation comes from crossing over, independent assortment, and random fertilisation."
    },
    {
        id: 43, unit: "meiosis", type: "mc",
        question: "Which statement correctly compares mitosis and meiosis?",
        options: [
            "Mitosis produces 4 cells; meiosis produces 2 cells",
            "Mitosis occurs in gonads; meiosis occurs in body cells",
            "Mitosis produces identical diploid cells; meiosis produces genetically different haploid cells",
            "Both produce haploid cells"
        ],
        correct: 2,
        explanation: "Mitosis produces 2 genetically identical diploid cells (for growth/repair in body cells). Meiosis produces 4 genetically different haploid cells (gametes in gonads)."
    },
    {
        id: 44, unit: "meiosis", type: "mc",
        question: "A karyotype is used to:",
        options: [
            "Measure the size of cells",
            "Identify chromosome abnormalities by arranging chromosomes in homologous pairs",
            "Count the number of genes",
            "Determine blood type"
        ],
        correct: 1,
        explanation: "A karyotype displays all chromosomes arranged in homologous pairs from largest to smallest. It is used to identify abnormalities like trisomy 21 (Down syndrome) or missing sex chromosomes."
    },
    {
        id: 45, unit: "meiosis", type: "mc",
        question: "The reduction division in meiosis refers to:",
        options: ["Meiosis II", "Meiosis I", "Both divisions equally", "Neither division"],
        correct: 1,
        explanation: "Meiosis I is called the reduction division because this is when the chromosome number is halved — homologous chromosomes separate, reducing the cell from diploid (2n) to haploid (n)."
    },

    // --- Protein Synthesis ---
    {
        id: 46, unit: "protein-synthesis", type: "mc",
        question: "Where does transcription take place?",
        options: ["In the cytoplasm", "On the ribosome", "In the nucleus (nucleoplasm)", "In the mitochondria"],
        correct: 2,
        explanation: "Transcription takes place in the nucleus (nucleoplasm), where DNA is used as a template to form mRNA. The mRNA then moves to the cytoplasm for translation."
    },
    {
        id: 47, unit: "protein-synthesis", type: "mc",
        question: "What are the three types of RNA involved in protein synthesis?",
        options: ["DNA, mRNA, tRNA", "mRNA, tRNA, rRNA", "mRNA, rRNA, DNA polymerase", "tRNA, rRNA, ATP"],
        correct: 1,
        explanation: "The three types of RNA are: mRNA (carries the code), tRNA (carries amino acids), and rRNA (makes up ribosomes where translation occurs)."
    },
    {
        id: 48, unit: "protein-synthesis", type: "mc",
        question: "The process of assembling amino acids into a polypeptide chain at the ribosome is called:",
        options: ["Transcription", "Replication", "Translation", "Mutation"],
        correct: 2,
        explanation: "Translation is the process where the mRNA code is 'translated' into a sequence of amino acids at the ribosome, producing a polypeptide chain."
    },
    {
        id: 49, unit: "protein-synthesis", type: "mc",
        question: "Which codon signals the START of translation?",
        options: ["UAA", "AUG", "UGA", "UAG"],
        correct: 1,
        explanation: "AUG is the start codon. It codes for the amino acid methionine and signals the ribosome to begin translation."
    },
    {
        id: 50, unit: "protein-synthesis", type: "mc",
        question: "A codon consists of how many bases?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "A codon is a triplet of three consecutive nucleotide bases on mRNA. Each codon codes for one specific amino acid (or a stop signal)."
    },
    {
        id: 51, unit: "protein-synthesis", type: "mc",
        question: "Which type of mutation shifts the entire reading frame of the mRNA?",
        options: ["Substitution/point mutation", "Insertion or deletion (frameshift mutation)", "Silent mutation", "Chromosomal mutation"],
        correct: 1,
        explanation: "Insertion or deletion of bases (not in multiples of 3) causes a frameshift mutation, shifting the reading frame of all subsequent codons and usually producing a non-functional protein."
    },
    {
        id: 52, unit: "protein-synthesis", type: "mc",
        question: "The genetic code is described as 'degenerate' because:",
        options: [
            "It breaks down over time",
            "More than one codon can code for the same amino acid",
            "Each codon codes for multiple amino acids",
            "It is different in every organism"
        ],
        correct: 1,
        explanation: "The genetic code is degenerate (redundant) because there are 64 possible codons but only 20 amino acids. Multiple codons can code for the same amino acid (e.g., GCU, GCC, GCA, GCG all code for alanine)."
    },
    {
        id: 53, unit: "protein-synthesis", type: "mc",
        question: "During transcription, thymine (T) on the DNA template strand is paired with which base on mRNA?",
        options: ["Thymine (T)", "Cytosine (C)", "Adenine (A)", "Guanine (G)"],
        correct: 2,
        explanation: "During transcription, T on DNA pairs with A on mRNA. Remember: RNA does not contain thymine — it uses uracil (U) instead. So A on DNA pairs with U on mRNA, while T on DNA pairs with A on mRNA."
    },
    {
        id: 54, unit: "protein-synthesis", type: "mc",
        question: "What type of bond holds amino acids together in a polypeptide chain?",
        options: ["Hydrogen bond", "Ionic bond", "Peptide bond", "Glycosidic bond"],
        correct: 2,
        explanation: "Peptide bonds are strong covalent bonds that join amino acids together during translation. A chain of amino acids linked by peptide bonds forms a polypeptide."
    },
    {
        id: 55, unit: "protein-synthesis", type: "mc",
        question: "A nonsense mutation results in:",
        options: [
            "A different amino acid being incorporated",
            "No change in the amino acid sequence",
            "A premature stop codon, producing a shortened protein",
            "A frameshift in the reading frame"
        ],
        correct: 2,
        explanation: "A nonsense mutation changes a codon into a premature stop codon (UAA, UAG, or UGA), causing translation to end early and producing a shortened, usually non-functional protein."
    },
    {
        id: 56, unit: "protein-synthesis", type: "mc",
        question: "Which of the following is NOT a stop codon?",
        options: ["UAA", "UAG", "UGA", "AUG"],
        correct: 3,
        explanation: "AUG is the START codon (codes for methionine). The three stop codons are UAA, UAG, and UGA — they do not code for any amino acid."
    },
    {
        id: 57, unit: "protein-synthesis", type: "mc",
        question: "A somatic mutation differs from a germline mutation in that a somatic mutation:",
        options: [
            "Can be passed to offspring",
            "Occurs in gametes",
            "Affects only the individual and is not inherited",
            "Always causes genetic disorders"
        ],
        correct: 2,
        explanation: "Somatic mutations occur in body cells and affect only the individual (not inherited). Germline mutations occur in gametes (sex cells) and can be passed to offspring, potentially causing inherited genetic disorders."
    },

    // --- Genetics ---
    {
        id: 58, unit: "genetics", type: "mc",
        question: "Mendel's Law of Segregation states that:",
        options: [
            "Genes for different traits are inherited together",
            "The two alleles for each gene separate during gamete formation so each gamete has one allele",
            "Dominant alleles always eliminate recessive alleles",
            "All offspring of a cross are identical"
        ],
        correct: 1,
        explanation: "The Law of Segregation states that during gamete formation, the two alleles for each gene segregate (separate) so that each gamete carries only one allele for each trait."
    },
    {
        id: 59, unit: "genetics", type: "mc",
        question: "In a monohybrid cross between two heterozygous individuals (Tt × Tt), the expected phenotypic ratio is:",
        options: ["1:1", "1:2:1", "3:1", "9:3:3:1"],
        correct: 2,
        explanation: "A monohybrid cross Tt × Tt produces genotypes 1 TT : 2 Tt : 1 tt. Since T is dominant, both TT and Tt show the dominant phenotype, giving a 3:1 phenotypic ratio (3 dominant : 1 recessive)."
    },
    {
        id: 60, unit: "genetics", type: "mc",
        question: "In a dihybrid cross TtBb × TtBb, the expected phenotypic ratio is:",
        options: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
        correct: 2,
        explanation: "A dihybrid cross between two double heterozygotes produces a 9:3:3:1 phenotypic ratio: 9 dominant for both traits, 3 dominant for first/recessive for second, 3 recessive for first/dominant for second, 1 recessive for both."
    },
    {
        id: 61, unit: "genetics", type: "mc",
        question: "Blood type AB demonstrates which type of inheritance?",
        options: ["Complete dominance", "Incomplete dominance", "Co-dominance", "Sex-linked inheritance"],
        correct: 2,
        explanation: "Blood type AB demonstrates co-dominance. Both the I^A and I^B alleles are fully expressed simultaneously — both A and B antigens are present on red blood cells. Neither allele is dominant over the other."
    },
    {
        id: 62, unit: "genetics", type: "mc",
        question: "A person with blood type O has the genotype:",
        options: ["I^A I^A", "I^A I^B", "I^B i", "ii"],
        correct: 3,
        explanation: "Blood type O is the homozygous recessive condition (ii). The i allele codes for no antigen. Since I^A and I^B are both dominant over i, a person must be homozygous recessive (ii) to have blood type O."
    },
    {
        id: 63, unit: "genetics", type: "mc",
        question: "Haemophilia is more common in males because:",
        options: [
            "The gene is on the Y chromosome",
            "Males have only one X chromosome, so one recessive allele is enough to express the trait",
            "Females cannot carry the haemophilia allele",
            "Males have weaker immune systems"
        ],
        correct: 1,
        explanation: "Haemophilia is X-linked recessive. Males (XY) have only one X chromosome, so a single recessive allele (X^h Y) causes haemophilia. Females need two recessive alleles (X^h X^h) to be affected — they can be carriers (X^H X^h) without symptoms."
    },
    {
        id: 64, unit: "genetics", type: "mc",
        question: "In incomplete dominance, the heterozygous phenotype is:",
        options: [
            "Identical to the dominant homozygote",
            "Identical to the recessive homozygote",
            "An intermediate blend of both homozygous phenotypes",
            "Both alleles are fully expressed separately"
        ],
        correct: 2,
        explanation: "In incomplete dominance, the heterozygous phenotype is an intermediate blend. For example, crossing red (RR) with white (R'R') flowers produces pink (RR') flowers — an intermediate phenotype."
    },
    {
        id: 65, unit: "genetics", type: "mc",
        question: "A test cross involves crossing an individual showing the dominant phenotype with:",
        options: [
            "Another dominant individual",
            "A heterozygous individual",
            "A homozygous recessive individual",
            "An individual of the opposite sex only"
        ],
        correct: 2,
        explanation: "A test cross uses a homozygous recessive individual (tt) to determine if the dominant phenotype individual is TT or Tt. If any recessive offspring appear, the parent must be heterozygous (Tt)."
    },
    {
        id: 66, unit: "genetics", type: "mc",
        question: "Which of the following is an autosomal recessive disorder?",
        options: ["Haemophilia", "Colour blindness", "Albinism", "Huntington's disease"],
        correct: 2,
        explanation: "Albinism is an autosomal recessive disorder — the gene is on an autosome (not a sex chromosome) and both alleles must be recessive (aa) for the condition to be expressed. Haemophilia and colour blindness are sex-linked (X-linked)."
    },
    {
        id: 67, unit: "genetics", type: "mc",
        question: "If both parents are carriers of albinism (Aa × Aa), what is the probability of having an affected child?",
        options: ["0%", "25%", "50%", "75%"],
        correct: 1,
        explanation: "Aa × Aa produces: 1 AA : 2 Aa : 1 aa. Only aa individuals are affected. Therefore, there is a 1 in 4 (25%) chance of an affected child, 2 in 4 (50%) chance of a carrier, and 1 in 4 (25%) chance of a homozygous normal child."
    },
    {
        id: 68, unit: "genetics", type: "mc",
        question: "Sex-linked genes in humans are most commonly located on:",
        options: ["The Y chromosome", "Chromosome 21", "The X chromosome", "Autosomes"],
        correct: 2,
        explanation: "Most sex-linked genes in humans are located on the X chromosome (X-linked). The Y chromosome is much smaller and carries very few genes. X-linked recessive conditions affect males more because they have only one X chromosome."
    },
    {
        id: 69, unit: "genetics", type: "mc",
        question: "A carrier woman for colour blindness (X^C X^c) marries a man with normal vision (X^C Y). What percentage of their sons will be colour blind?",
        options: ["0%", "25%", "50%", "100%"],
        correct: 2,
        explanation: "Sons receive their X from the mother. The carrier mother (X^C X^c) has a 50% chance of passing X^c to each son. Sons who receive X^c Y will be colour blind. So 50% of sons are expected to be colour blind."
    },
    {
        id: 70, unit: "genetics", type: "mc",
        question: "Co-dominance differs from incomplete dominance in that co-dominance:",
        options: [
            "Produces a blended phenotype",
            "Shows both alleles fully expressed simultaneously without blending",
            "Involves only sex-linked genes",
            "Always produces a 3:1 ratio"
        ],
        correct: 1,
        explanation: "In co-dominance, BOTH alleles are fully and separately expressed (e.g., blood type AB has both A and B antigens). In incomplete dominance, there is a BLENDED intermediate phenotype (e.g., pink flowers from red × white)."
    },
    {
        id: 71, unit: "genetics", type: "mc",
        question: "Sickle cell anaemia is caused by:",
        options: [
            "A chromosomal mutation (non-disjunction)",
            "A point mutation (substitution) in the haemoglobin gene",
            "A deletion of an entire chromosome",
            "A sex-linked recessive allele"
        ],
        correct: 1,
        explanation: "Sickle cell anaemia is caused by a point mutation (substitution) in the haemoglobin gene that changes one amino acid (glutamic acid → valine). It is autosomal recessive. Carriers (HbA HbS) have some malaria resistance."
    },
    {
        id: 72, unit: "genetics", type: "mc",
        question: "What is the genotype of a person who is a carrier of sickle cell anaemia?",
        options: ["HbA HbA", "HbA HbS", "HbS HbS", "Hb+ Hb+"],
        correct: 1,
        explanation: "A carrier of sickle cell anaemia has the genotype HbA HbS (heterozygous). They have sickle cell trait but not the full disease. HbA HbA is normal and HbS HbS causes sickle cell anaemia."
    },

    // --- Evolution ---
    {
        id: 73, unit: "evolution", type: "mc",
        question: "Natural selection is best described as:",
        options: [
            "Organisms choosing to adapt to their environment",
            "The survival and reproduction of individuals with traits best suited to their environment",
            "Random changes in DNA that are always beneficial",
            "The intentional breeding of organisms by humans"
        ],
        correct: 1,
        explanation: "Natural selection is the process where individuals with traits best suited to their environment are more likely to survive and reproduce, passing those advantageous alleles to the next generation."
    },
    {
        id: 74, unit: "evolution", type: "mc",
        question: "What type of speciation occurs when populations are separated by a geographical barrier?",
        options: ["Sympatric speciation", "Allopatric speciation", "Parapatric speciation", "Adaptive radiation"],
        correct: 1,
        explanation: "Allopatric speciation occurs when a geographical barrier (river, mountain, ocean) separates a population. The isolated groups experience different selection pressures and over time become so different they can no longer interbreed."
    },
    {
        id: 75, unit: "evolution", type: "mc",
        question: "Punctuated equilibrium proposes that:",
        options: [
            "Evolution occurs slowly and continuously",
            "Species remain unchanged for long periods, with bursts of rapid change",
            "Evolution only occurs through mutations",
            "All species evolve at the same rate"
        ],
        correct: 1,
        explanation: "Punctuated equilibrium (Gould and Eldredge) proposes that species remain relatively unchanged for long periods (stasis), interrupted by short bursts of rapid evolutionary change (speciation events)."
    },
    {
        id: 76, unit: "evolution", type: "mc",
        question: "Which of the following is NOT evidence for evolution?",
        options: [
            "Fossil record",
            "Homologous structures",
            "Identical DNA in all organisms",
            "Biogeographical distribution of species"
        ],
        correct: 2,
        explanation: "All organisms do NOT have identical DNA. DNA/protein SIMILARITIES (not identity) between species provide molecular evidence for evolution. Fossils, homologous structures, and biogeography are all valid evidence."
    },
    {
        id: 77, unit: "evolution", type: "mc",
        question: "Homologous structures suggest that organisms:",
        options: [
            "Live in the same environment",
            "Share a common ancestor",
            "Eat the same food",
            "Evolved at the same time"
        ],
        correct: 1,
        explanation: "Homologous structures (same basic structure, different functions) in different species suggest they evolved from a common ancestor. For example, the forelimbs of humans, whales, bats and dogs share the same bone structure."
    },
    {
        id: 78, unit: "evolution", type: "mc",
        question: "The Out of Africa hypothesis states that:",
        options: [
            "Humans evolved independently on each continent",
            "Modern humans evolved in Africa and migrated to other continents",
            "Humans evolved in Europe and migrated to Africa",
            "All species originated in Africa"
        ],
        correct: 1,
        explanation: "The Out of Africa hypothesis states that modern Homo sapiens evolved in Africa ~200 000 years ago and then migrated out to populate the rest of the world, supported by fossil and genetic evidence."
    },
    {
        id: 79, unit: "evolution", type: "mc",
        question: "Which fossil discovery is significant for understanding human evolution in South Africa?",
        options: [
            "Lucy (Ethiopia)",
            "Taung Child and Mrs Ples",
            "Neanderthal (Germany)",
            "Peking Man (China)"
        ],
        correct: 1,
        explanation: "The Taung Child (Australopithecus africanus, 1924) and Mrs Ples (Sterkfontein, 1947) are key South African fossil discoveries. More recently, Homo naledi was discovered in the Rising Star Cave (2013)."
    },
    {
        id: 80, unit: "evolution", type: "mc",
        question: "Vestigial structures are best described as:",
        options: [
            "Structures that have evolved to perform new functions",
            "Structures in different species that look alike",
            "Reduced, non-functional remnants of structures that were functional in ancestors",
            "Structures unique to a single species"
        ],
        correct: 2,
        explanation: "Vestigial structures are reduced or non-functional remnants of structures that were fully functional in ancestral species. Examples include the human appendix, coccyx (tailbone), and whale pelvic bones."
    },
    {
        id: 81, unit: "evolution", type: "mc",
        question: "What is adaptive radiation?",
        options: [
            "The extinction of multiple species at once",
            "The evolution of many species from a common ancestor to fill different niches",
            "Radiation that causes mutations",
            "Migration of a species to a new area"
        ],
        correct: 1,
        explanation: "Adaptive radiation is the evolution of many different species from a single common ancestor, each adapted to different ecological niches. Darwin's finches on the Galápagos Islands are a classic example."
    },
    {
        id: 82, unit: "evolution", type: "mc",
        question: "Artificial selection differs from natural selection in that artificial selection:",
        options: [
            "Takes longer to produce changes",
            "Increases genetic diversity",
            "Involves deliberate human choice of which organisms breed",
            "Only occurs in wild populations"
        ],
        correct: 2,
        explanation: "In artificial selection, humans deliberately choose which organisms breed based on desirable traits. Natural selection involves no human choice — the environment 'selects' which organisms survive and reproduce."
    },
    {
        id: 83, unit: "evolution", type: "mc",
        question: "Which scientist proposed the theory of evolution by natural selection?",
        options: ["Gregor Mendel", "Louis Pasteur", "Charles Darwin", "Jean-Baptiste Lamarck"],
        correct: 2,
        explanation: "Charles Darwin proposed the theory of evolution by natural selection in his 1859 book 'On the Origin of Species'. Alfred Russel Wallace independently reached similar conclusions."
    },
    {
        id: 84, unit: "evolution", type: "mc",
        question: "DNA and protein sequence similarities between species provide what type of evidence for evolution?",
        options: ["Fossil evidence", "Anatomical evidence", "Molecular (biochemical) evidence", "Biogeographical evidence"],
        correct: 2,
        explanation: "DNA and protein sequence comparisons provide molecular (biochemical) evidence for evolution. The more similar the sequences between two species, the more closely related they are and the more recently they shared a common ancestor."
    },
    {
        id: 85, unit: "evolution", type: "mc",
        question: "Reproductive isolation is important for speciation because:",
        options: [
            "It increases genetic diversity within a population",
            "It prevents gene flow between populations, allowing them to diverge",
            "It causes mutations to occur more frequently",
            "It reduces competition for resources"
        ],
        correct: 1,
        explanation: "Reproductive isolation prevents gene flow (interbreeding) between populations. Without gene flow, each population can evolve independently in response to different selection pressures, eventually becoming separate species."
    },

    // --- Population Ecology ---
    {
        id: 86, unit: "ecology", type: "mc",
        question: "Carrying capacity (K) is best defined as:",
        options: [
            "The total number of species in an ecosystem",
            "The maximum number of individuals an environment can sustainably support",
            "The number of offspring produced per year",
            "The minimum population size for survival"
        ],
        correct: 1,
        explanation: "Carrying capacity (K) is the maximum number of individuals of a species that an environment can sustainably support over a long period, given the available resources (food, water, space, shelter)."
    },
    {
        id: 87, unit: "ecology", type: "mc",
        question: "A J-shaped growth curve represents:",
        options: [
            "Logistic growth with a carrying capacity",
            "Exponential growth without environmental resistance",
            "A population in decline",
            "A stable population"
        ],
        correct: 1,
        explanation: "A J-shaped curve shows exponential growth where the population increases rapidly without limits. It occurs when resources are unlimited and there is no environmental resistance. It usually ends in a population crash."
    },
    {
        id: 88, unit: "ecology", type: "mc",
        question: "Which of the following is a density-DEPENDENT limiting factor?",
        options: ["Earthquake", "Flood", "Competition for food", "Volcanic eruption"],
        correct: 2,
        explanation: "Competition for food is density-dependent — its effect becomes more intense as the population density increases. Natural disasters (earthquakes, floods, eruptions) are density-independent — they affect populations regardless of density."
    },
    {
        id: 89, unit: "ecology", type: "mc",
        question: "The mark-recapture method is used to estimate the population size of:",
        options: ["Stationary plants", "Mobile animals", "Bacteria in a lab", "Trees in a forest"],
        correct: 1,
        explanation: "The mark-recapture method is used for mobile animals that are difficult to count directly. Animals are captured, marked, released, and recaptured. The Lincoln Index formula (N = MC/R) is used to estimate population size."
    },
    {
        id: 90, unit: "ecology", type: "mc",
        question: "When a population exceeds carrying capacity, what typically happens?",
        options: [
            "The population continues to grow indefinitely",
            "The carrying capacity increases",
            "The population decreases due to increased competition, disease, and limited resources",
            "Emigration stops completely"
        ],
        correct: 2,
        explanation: "When a population exceeds K, resources become scarce, competition and disease increase, and the death rate rises above the birth rate. The population decreases (often crashes) until it drops below K."
    },
    {
        id: 91, unit: "ecology", type: "mc",
        question: "Which is a density-INDEPENDENT factor?",
        options: ["Predation", "Disease", "Drought", "Parasitism"],
        correct: 2,
        explanation: "Drought is density-independent — it affects a population regardless of how large or dense it is. Predation, disease, and parasitism are density-dependent — their effects intensify with increasing population density."
    },
    {
        id: 92, unit: "ecology", type: "mc",
        question: "An S-shaped (sigmoid) growth curve shows:",
        options: [
            "Unlimited exponential growth",
            "Population decline only",
            "Growth that levels off at the carrying capacity due to environmental resistance",
            "No growth at all"
        ],
        correct: 2,
        explanation: "An S-shaped curve shows logistic growth: a lag phase (slow start), exponential phase (rapid growth), and stationary phase (levelling off at carrying capacity K due to environmental resistance)."
    },
    {
        id: 93, unit: "ecology", type: "mc",
        question: "r-strategists are characterised by:",
        options: [
            "Few offspring with extensive parental care",
            "Large body size and long lifespan",
            "Many offspring with little parental care and rapid reproduction",
            "Populations that remain near carrying capacity"
        ],
        correct: 2,
        explanation: "r-strategists produce many offspring with little/no parental care, have short lifespans and rapid reproduction. They thrive in unstable environments. Examples include insects, bacteria, and weeds."
    },
    {
        id: 94, unit: "ecology", type: "mc",
        question: "Using the Lincoln Index: 50 animals were marked and released. In the second capture, 40 animals were caught, of which 10 were marked. The estimated population is:",
        options: ["100", "200", "250", "500"],
        correct: 1,
        explanation: "N = (M × C) / R = (50 × 40) / 10 = 2000 / 10 = 200. The estimated population size is 200."
    },
    {
        id: 95, unit: "ecology", type: "mc",
        question: "Intraspecific competition occurs between:",
        options: [
            "Members of different species",
            "Members of the SAME species",
            "Predators and prey",
            "Plants and decomposers"
        ],
        correct: 1,
        explanation: "Intraspecific competition occurs between individuals of the SAME species competing for the same resources. It is the most intense form of competition because individuals have identical resource requirements."
    },
    {
        id: 96, unit: "ecology", type: "mc",
        question: "Quadrats are used to estimate the population size of:",
        options: [
            "Fast-moving animals", "Sessile (stationary) organisms like plants",
            "Airborne insects", "Marine mammals"
        ],
        correct: 1,
        explanation: "Quadrats are square frames placed randomly to count stationary organisms (usually plants or slow-moving animals). The count is used to estimate total population size for the whole area."
    },
    {
        id: 97, unit: "ecology", type: "mc",
        question: "The population growth formula is:",
        options: [
            "Growth = births × deaths",
            "Growth = (births + immigration) − (deaths + emigration)",
            "Growth = carrying capacity / time",
            "Growth = births − immigration + deaths"
        ],
        correct: 1,
        explanation: "Population growth = (births + immigration) − (deaths + emigration). A positive result means the population is growing; negative means it is declining; zero means it is stable."
    },

    // --- Human Impact on Environment ---
    {
        id: 98, unit: "human-impact", type: "mc",
        question: "The greenhouse effect is:",
        options: [
            "Always harmful to the environment",
            "A natural process where atmospheric gases trap heat, keeping Earth warm",
            "Caused only by human activities",
            "The depletion of the ozone layer"
        ],
        correct: 1,
        explanation: "The greenhouse effect is a NATURAL process where greenhouse gases trap infrared radiation, keeping Earth warm enough (~33°C warmer) to support life. The ENHANCED greenhouse effect (from human activities) is the problem."
    },
    {
        id: 99, unit: "human-impact", type: "mc",
        question: "The main gas responsible for ozone depletion is:",
        options: ["Carbon dioxide (CO₂)", "Methane (CH₄)", "Chlorofluorocarbons (CFCs)", "Nitrous oxide (N₂O)"],
        correct: 2,
        explanation: "CFCs (chlorofluorocarbons) are the main cause of ozone depletion. UV radiation breaks down CFCs in the stratosphere, releasing chlorine atoms that destroy ozone molecules in a chain reaction."
    },
    {
        id: 100, unit: "human-impact", type: "mc",
        question: "Which of the following is NOT a greenhouse gas?",
        options: ["Carbon dioxide", "Methane", "Oxygen", "Nitrous oxide"],
        correct: 2,
        explanation: "Oxygen (O₂) is not a greenhouse gas. The main greenhouse gases are carbon dioxide (CO₂), methane (CH₄), nitrous oxide (N₂O), water vapour, and CFCs."
    },
    {
        id: 101, unit: "human-impact", type: "mc",
        question: "Alien invasive species threaten biodiversity by:",
        options: [
            "Increasing genetic diversity",
            "Outcompeting indigenous species for resources, preying on them, or altering habitats",
            "Improving soil quality",
            "Reducing pollution levels"
        ],
        correct: 1,
        explanation: "Alien invasive species threaten biodiversity by outcompeting indigenous species for resources, preying on native species, introducing diseases, and altering habitats. They often lack natural predators in the new environment."
    },
    {
        id: 102, unit: "human-impact", type: "mc",
        question: "Which is an example of an alien invasive plant species in South Africa?",
        options: [
            "Protea (indigenous)",
            "Water hyacinth (Eichhornia crassipes)",
            "Yellowwood tree (indigenous)",
            "Aloe (indigenous)"
        ],
        correct: 1,
        explanation: "Water hyacinth (Eichhornia crassipes) is one of South Africa's worst alien invasive plants. It blocks waterways, reduces light and oxygen in water, and kills aquatic organisms. It was originally from South America."
    },
    {
        id: 103, unit: "human-impact", type: "mc",
        question: "In-situ conservation means protecting species:",
        options: [
            "In zoos and botanical gardens",
            "In seed banks",
            "In their natural habitat",
            "In laboratories"
        ],
        correct: 2,
        explanation: "In-situ conservation means protecting species in their natural habitat — e.g., national parks, nature reserves, biosphere reserves, marine protected areas. Ex-situ conservation protects species outside their natural habitat."
    },
    {
        id: 104, unit: "human-impact", type: "mc",
        question: "Global warming can lead to all of the following EXCEPT:",
        options: [
            "Rising sea levels from melting ice caps",
            "Increased thickness of the ozone layer",
            "More extreme weather events",
            "Changes in rainfall patterns and crop failures"
        ],
        correct: 1,
        explanation: "Global warming does NOT increase the thickness of the ozone layer. Ozone depletion is caused by CFCs, not by global warming. Global warming does cause rising sea levels, extreme weather, and changes in rainfall patterns."
    },
    {
        id: 105, unit: "human-impact", type: "mc",
        question: "The ozone layer is found in which part of the atmosphere?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        correct: 1,
        explanation: "The ozone layer is found in the stratosphere, approximately 15–35 km above Earth's surface. It absorbs most of the sun's harmful ultraviolet (UV) radiation."
    },
    {
        id: 106, unit: "human-impact", type: "mc",
        question: "Deforestation contributes to climate change because:",
        options: [
            "Trees produce greenhouse gases",
            "Fewer trees means less CO₂ is absorbed from the atmosphere, and burning trees releases stored CO₂",
            "Trees block sunlight from reaching the ground",
            "Deforestation increases the ozone layer"
        ],
        correct: 1,
        explanation: "Trees absorb CO₂ during photosynthesis. Deforestation removes this carbon sink, and burning or decomposition of trees releases stored carbon as CO₂, contributing to the enhanced greenhouse effect."
    },
    {
        id: 107, unit: "human-impact", type: "mc",
        question: "A biosphere reserve consists of:",
        options: [
            "A single protected zone",
            "Three zones: core (strictly protected), buffer (limited activities), and transition (sustainable use)",
            "Only areas where no humans are allowed",
            "Areas designated for mining and industry"
        ],
        correct: 1,
        explanation: "A biosphere reserve has three zones: a core zone (strictly protected for biodiversity), a buffer zone (limited activities like research), and a transition zone (sustainable human activities like farming)."
    },
    {
        id: 108, unit: "human-impact", type: "mc",
        question: "Sustainable development means:",
        options: [
            "Using all resources as quickly as possible",
            "Development that meets present needs without compromising future generations' ability to meet their needs",
            "Stopping all development to protect the environment",
            "Only using renewable energy sources"
        ],
        correct: 1,
        explanation: "Sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs. It balances economic growth, social development, and environmental protection."
    },
    {
        id: 109, unit: "human-impact", type: "mc",
        question: "Which is a consequence of ozone depletion?",
        options: [
            "Decreased UV radiation reaching Earth",
            "Increased risk of skin cancer and cataracts",
            "Thicker ozone layer in the troposphere",
            "Reduced global temperatures"
        ],
        correct: 1,
        explanation: "Ozone depletion allows more UV radiation to reach Earth's surface, increasing the risk of skin cancer (melanoma), cataracts, immune suppression, damage to crops, and harm to marine phytoplankton."
    },
    {
        id: 110, unit: "human-impact", type: "mc",
        question: "The Working for Water programme in South Africa aims to:",
        options: [
            "Build more dams for water storage",
            "Clear alien invasive plants to conserve water and create employment",
            "Import water from neighbouring countries",
            "Reduce water usage in cities"
        ],
        correct: 1,
        explanation: "Working for Water is a government programme that employs people to clear alien invasive plants (which use excessive water). It serves dual purposes: conserving water resources and creating employment."
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
    },

    // --- Meiosis ---
    {
        id: "f9",
        title: "What is Meiosis and Why Does It Matter?",
        unit: "meiosis",
        keyPoints: [
            "Meiosis is cell division that produces gametes (sex cells) in the gonads",
            "One diploid (2n) cell produces four haploid (n) daughter cells",
            "Two successive divisions: meiosis I (reduction) and meiosis II",
            "Produces haploid gametes so chromosome number is restored at fertilisation (n + n = 2n)",
            "Creates genetic variation through crossing over, independent assortment, and random fertilisation",
            "Genetic variation is essential for natural selection and evolution"
        ]
    },
    {
        id: "f10",
        title: "Meiosis I — The Reduction Division",
        unit: "meiosis",
        keyPoints: [
            "Prophase I: chromosomes condense, homologous chromosomes pair up (synapsis) forming bivalents",
            "Crossing over occurs at chiasmata — non-sister chromatids exchange DNA segments",
            "Metaphase I: bivalents line up randomly at equator (independent assortment)",
            "Anaphase I: homologous chromosomes separate to opposite poles — centromeres do NOT split",
            "Telophase I + cytokinesis: two haploid daughter cells formed",
            "This is the REDUCTION division — chromosome number halved from 2n to n",
            "No DNA replication occurs between meiosis I and meiosis II (interkinesis)"
        ]
    },
    {
        id: "f11",
        title: "Meiosis II — Similar to Mitosis",
        unit: "meiosis",
        keyPoints: [
            "Prophase II: chromosomes condense, nuclear membrane disappears, spindle forms",
            "Metaphase II: individual chromosomes line up at equator (not bivalents)",
            "Anaphase II: centromeres SPLIT — sister chromatids separate to opposite poles",
            "Telophase II: nuclear membranes reform, cytokinesis produces 4 haploid cells",
            "Similar to mitosis but cells are already haploid",
            "Final result: 4 genetically unique haploid daughter cells"
        ]
    },
    {
        id: "f12",
        title: "How Meiosis Creates Genetic Variation",
        unit: "meiosis",
        keyPoints: [
            "Crossing over (prophase I): non-sister chromatids swap DNA at chiasmata — new allele combinations",
            "Independent assortment (metaphase I): random orientation of bivalents — unique chromosome combinations in each gamete",
            "With 23 pairs: 2²³ = over 8 million possible combinations from independent assortment alone",
            "Random fertilisation: any sperm can fuse with any egg — further multiplies variation",
            "All three mechanisms combined produce virtually unlimited genetic diversity",
            "This variation is raw material for natural selection"
        ]
    },
    {
        id: "f13",
        title: "Abnormal Meiosis — Non-disjunction",
        unit: "meiosis",
        keyPoints: [
            "Non-disjunction: failure of chromosomes to separate properly during meiosis",
            "Can occur in meiosis I (homologous chromosomes don't separate) or meiosis II (sister chromatids don't separate)",
            "Results in gametes with extra (n+1) or missing (n-1) chromosomes",
            "After fertilisation: trisomy (2n+1) or monosomy (2n-1)",
            "Down syndrome (trisomy 21): three copies of chromosome 21, total 47 chromosomes",
            "Karyotype: photograph of chromosomes arranged in pairs — used to detect abnormalities"
        ]
    },
    {
        id: "f14",
        title: "Mitosis vs Meiosis — Key Differences",
        unit: "meiosis",
        keyPoints: [
            "Mitosis: 1 division → 2 identical diploid cells; Meiosis: 2 divisions → 4 different haploid cells",
            "Mitosis: in body cells (growth/repair); Meiosis: in gonads (gamete production)",
            "Mitosis: no crossing over; Meiosis: crossing over in prophase I",
            "Mitosis: individual chromosomes at equator; Meiosis I: bivalents (homologous pairs) at equator",
            "Mitosis: centromeres split in anaphase; Meiosis I: centromeres do NOT split (only split in anaphase II)",
            "Mitosis: daughter cells genetically identical to parent; Meiosis: daughter cells genetically unique"
        ]
    }
,

    // --- Plant Hormones ---
    {
        id: "f15",
        title: "Auxins and Tropisms",
        unit: "hormones",
        keyPoints: [
            "Auxins produced in apical meristems (shoot and root tips)",
            "Main natural auxin: IAA (Indole-3-acetic acid)",
            "Phototropism: auxin moves to shaded side, cells elongate more, shoot bends towards light",
            "Geotropism: auxin accumulates on lower side of horizontal plant",
            "Shoots: high auxin stimulates elongation (negative geotropism - grows up)",
            "Roots: high auxin inhibits growth (positive geotropism - grows down)",
            "Apical dominance: auxin from tip inhibits lateral buds; remove tip = bushier plant"
        ]
    },
    {
        id: "f16",
        title: "Classic Phototropism Experiments (Darwin, Boysen-Jensen, Went)",
        unit: "hormones",
        keyPoints: [
            "Darwin (1880): tip detects light and sends signal downward; removing/covering tip prevents bending",
            "Boysen-Jensen (1913): signal is chemical - passes through gelatin but not mica",
            "Went (1928): collected chemical in agar blocks; off-centre agar caused bending; named it auxin",
            "Degree of bending proportional to amount of auxin",
            "These experiments together proved auxin is the chemical causing phototropism"
        ]
    },
    {
        id: "f17",
        title: "The Five Plant Hormones and Their Functions",
        unit: "hormones",
        keyPoints: [
            "Auxins: cell elongation, phototropism, geotropism, apical dominance",
            "Gibberellins: stem elongation, seed germination, bolting",
            "Abscisic acid (ABA): stress hormone - stomatal closure, seed/bud dormancy",
            "Cytokinins: cell division, delay senescence, promote lateral bud growth",
            "Ethylene: only gaseous hormone - fruit ripening, abscission, senescence",
            "Hormones often work together or oppose each other (e.g., auxin vs cytokinin)"
        ]
    },
    {
        id: "f18",
        title: "Commercial Uses of Plant Hormones",
        unit: "hormones",
        keyPoints: [
            "Auxins: rooting powder for cuttings, 2,4-D herbicide (kills broadleaf weeds), seedless fruit",
            "Gibberellins: larger seedless grapes, break seed dormancy, malting in brewing",
            "Cytokinins: tissue culture with auxins, keeping cut flowers fresh",
            "Ethylene: artificial fruit ripening (bananas/tomatoes), synchronise pineapple flowering",
            "ABA: anti-transpirant sprays, prevent potato sprouting during storage"
        ]
    },

    // --- Protein Synthesis ---
    {
        id: "f19",
        title: "Transcription — From DNA to mRNA",
        unit: "protein-synthesis",
        keyPoints: [
            "Transcription occurs in the nucleus (nucleoplasm)",
            "DNA double helix unwinds and unzips — one strand acts as template (antisense/template strand)",
            "RNA polymerase moves along the template strand (3' to 5'), building mRNA (5' to 3')",
            "Complementary base pairing: A-U, T-A, G-C, C-G (note: RNA uses uracil instead of thymine)",
            "mRNA strand detaches from DNA and moves through nuclear pores to cytoplasm",
            "DNA re-zips and rewinds after transcription is complete"
        ]
    },
    {
        id: "f20",
        title: "Translation — From mRNA to Protein",
        unit: "protein-synthesis",
        keyPoints: [
            "Translation occurs at the ribosome in the cytoplasm",
            "mRNA attaches to a ribosome; ribosome reads the start codon (AUG)",
            "tRNA with complementary anticodon (UAC) and carrying methionine binds first",
            "Ribosome moves along mRNA, reading each codon — matching tRNA delivers the correct amino acid",
            "Peptide bonds form between adjacent amino acids, building a polypeptide chain",
            "Translation stops when a stop codon (UAA, UAG, UGA) is reached — polypeptide is released",
            "Polysomes: multiple ribosomes translating the same mRNA simultaneously for efficiency"
        ]
    },
    {
        id: "f21",
        title: "The Genetic Code — Codons and Properties",
        unit: "protein-synthesis",
        keyPoints: [
            "The genetic code is a triplet code: every 3 bases (codon) on mRNA code for 1 amino acid",
            "64 possible codons: 61 code for amino acids, 3 are stop codons (UAA, UAG, UGA)",
            "Start codon: AUG — codes for methionine and initiates translation",
            "Degenerate/redundant: multiple codons can code for the same amino acid (64 codons, 20 amino acids)",
            "Universal: the same codons code for the same amino acids in nearly all organisms",
            "Non-overlapping: codons are read sequentially, each base belongs to only one codon"
        ]
    },
    {
        id: "f22",
        title: "Mutations — Types and Consequences",
        unit: "protein-synthesis",
        keyPoints: [
            "Mutation: a change in the nucleotide sequence of DNA",
            "Point mutation (substitution): one base replaced by another — may be silent, missense, or nonsense",
            "Frameshift mutation: insertion or deletion of bases shifts the entire reading frame",
            "Silent mutation: different codon still codes for the same amino acid (due to degeneracy)",
            "Missense mutation: different amino acid incorporated — may or may not affect protein function",
            "Nonsense mutation: creates a premature stop codon — shortened, non-functional protein",
            "Mutagens: UV radiation, X-rays (physical); benzene, nicotine (chemical); certain viruses (biological)",
            "Somatic mutations affect only the individual; germline mutations can be inherited"
        ]
    },

    // --- Genetics ---
    {
        id: "f23",
        title: "Mendel's Laws of Inheritance",
        unit: "genetics",
        keyPoints: [
            "Gregor Mendel (1860s): Father of Genetics — studied pea plants",
            "Law of Dominance: in a heterozygote, only the dominant allele is expressed",
            "Law of Segregation: two alleles separate during gamete formation — each gamete gets one allele",
            "Law of Independent Assortment: alleles of different genes assort independently during gamete formation",
            "Key terms: allele (alternative form of a gene), genotype (genetic makeup), phenotype (observable trait)",
            "Homozygous: two identical alleles (TT or tt); Heterozygous: two different alleles (Tt)"
        ]
    },
    {
        id: "f24",
        title: "Monohybrid and Dihybrid Crosses",
        unit: "genetics",
        keyPoints: [
            "Monohybrid cross: inheritance of ONE gene/trait (e.g., Tt × Tt)",
            "Expected F2 phenotypic ratio: 3:1 (dominant : recessive); Genotypic ratio: 1:2:1",
            "Dihybrid cross: inheritance of TWO genes/traits simultaneously (e.g., TtBb × TtBb)",
            "Expected F2 phenotypic ratio: 9:3:3:1",
            "Test cross: cross dominant phenotype with homozygous recessive (tt) to determine genotype",
            "If all offspring are dominant → parent is TT; if ~50% recessive → parent is Tt",
            "Incomplete dominance: heterozygote shows intermediate phenotype (1:2:1 ratio)"
        ]
    },
    {
        id: "f25",
        title: "Blood Groups and Co-dominance",
        unit: "genetics",
        keyPoints: [
            "ABO blood group controlled by 3 alleles: I^A, I^B, and i",
            "I^A and I^B are co-dominant to each other; both are dominant over i",
            "Blood type A: I^A I^A or I^A i (antigen A on red blood cells)",
            "Blood type B: I^B I^B or I^B i (antigen B on red blood cells)",
            "Blood type AB: I^A I^B — co-dominance, both antigens present",
            "Blood type O: ii — no antigens (universal donor)",
            "Co-dominance: both alleles fully expressed simultaneously (no blending)"
        ]
    },
    {
        id: "f26",
        title: "Sex-Linked Inheritance",
        unit: "genetics",
        keyPoints: [
            "Sex-linked genes are located on the X chromosome (X-linked)",
            "Males (XY) have only one X — one recessive allele is enough to express the trait",
            "Females (XX) need two recessive alleles to express the trait; can be carriers (heterozygous)",
            "Haemophilia: X-linked recessive — blood fails to clot properly; more common in males",
            "Colour blindness: X-linked recessive — inability to distinguish red/green; more common in males",
            "Carrier mother (X^H X^h) × normal father (X^H Y) → 50% chance sons are affected",
            "Fathers CANNOT pass X-linked traits to sons (sons get Y from father)"
        ]
    },
    {
        id: "f27",
        title: "Genetic Disorders in Humans",
        unit: "genetics",
        keyPoints: [
            "Sickle cell anaemia: autosomal recessive; point mutation in haemoglobin gene (glutamic acid → valine)",
            "Sickle-shaped red blood cells block capillaries; carriers (HbA HbS) have malaria resistance",
            "Albinism: autosomal recessive; no melanin production; relatively common in some SA populations",
            "Cystic fibrosis: autosomal recessive; thick mucus clogs lungs and digestive system (CFTR gene mutation)",
            "Down syndrome: trisomy 21 caused by non-disjunction (not a gene mutation — chromosomal abnormality)",
            "Pedigree diagrams trace inheritance patterns: squares = males, circles = females, filled = affected"
        ]
    },

    // --- Evolution ---
    {
        id: "f28",
        title: "Darwin and Natural Selection",
        unit: "evolution",
        keyPoints: [
            "Charles Darwin (1809–1882): proposed evolution by natural selection",
            "Voyage on HMS Beagle (1831–1836): observed species variation, especially Galápagos finches",
            "Published 'On the Origin of Species' in 1859",
            "Natural selection steps: variation → overproduction → struggle for existence → survival of the fittest → reproduction",
            "Over generations, favourable alleles increase in frequency — population becomes better adapted",
            "Natural selection acts on phenotypes but it is the genotype that is inherited"
        ]
    },
    {
        id: "f29",
        title: "Evidence for Evolution",
        unit: "evolution",
        keyPoints: [
            "Fossil evidence: shows progression from simple to complex organisms; transitional fossils link groups",
            "Biogeography: distribution of species reflects evolutionary history and continental drift",
            "Comparative anatomy: homologous structures (same structure, different function) = common ancestor",
            "Analogous structures: different origin, similar function = convergent evolution (NOT common ancestor)",
            "Vestigial structures: non-functional remnants of once-functional structures (appendix, coccyx)",
            "Molecular evidence: DNA/protein sequence similarities — more similar = more closely related"
        ]
    },
    {
        id: "f30",
        title: "Speciation — How New Species Form",
        unit: "evolution",
        keyPoints: [
            "Speciation: formation of new species from an ancestral population",
            "Requires reproductive isolation — populations can no longer interbreed to produce fertile offspring",
            "Allopatric speciation: geographic barrier separates population → different selection pressures → divergence",
            "Sympatric speciation: new species forms in same area without physical barrier (polyploidy, behavioural isolation)",
            "Over time, accumulated genetic differences prevent interbreeding = new species",
            "Adaptive radiation: many species evolve from one ancestor to fill different niches (Darwin's finches)"
        ]
    },
    {
        id: "f31",
        title: "Human Evolution and the Out of Africa Hypothesis",
        unit: "evolution",
        keyPoints: [
            "Out of Africa: modern Homo sapiens evolved in Africa ~200 000 years ago, then migrated globally",
            "Fossil evidence: oldest H. sapiens fossils found in Africa (Omo Kibish, Ethiopia ~195 000 ya)",
            "Genetic evidence: African populations have the greatest genetic diversity (oldest populations)",
            "Mitochondrial Eve: all modern humans traced to common female ancestor in Africa (mtDNA analysis)",
            "Key SA fossils: Taung Child (1924), Mrs Ples (1947), Little Foot, Homo naledi (2013)",
            "Homo naledi: discovered in Rising Star Cave, Cradle of Humankind — mix of primitive and modern traits",
            "Human evolution trends: bipedalism, brain size increase, foramen magnum shifts, reduced jaw/teeth"
        ]
    },
    {
        id: "f32",
        title: "Punctuated Equilibrium vs Gradualism",
        unit: "evolution",
        keyPoints: [
            "Gradualism: evolution occurs slowly and steadily through small, continuous changes over long periods",
            "Supported by transitional fossils showing gradual change (e.g., horse evolution series)",
            "Punctuated equilibrium (Gould & Eldredge): long periods of stasis interrupted by rapid change",
            "Explains gaps in the fossil record — speciation events happen too quickly to be well-preserved",
            "Both models may apply to different lineages — they are not mutually exclusive",
            "The tempo of evolution varies depending on environmental pressures and population dynamics"
        ]
    },

    // --- Population Ecology ---
    {
        id: "f33",
        title: "Population Growth Curves and Carrying Capacity",
        unit: "ecology",
        keyPoints: [
            "J-shaped curve (exponential): unlimited growth — abundant resources, no environmental resistance",
            "J-curve growth cannot be sustained — usually ends in population crash",
            "S-shaped curve (sigmoid/logistic): lag phase → exponential phase → stationary phase at carrying capacity (K)",
            "Carrying capacity (K): maximum population size an environment can sustainably support",
            "At K, birth rate ≈ death rate — population fluctuates around carrying capacity",
            "Environmental resistance: all factors that limit population growth (competition, disease, predation, limited resources)"
        ]
    },
    {
        id: "f34",
        title: "Limiting Factors and Population Regulation",
        unit: "ecology",
        keyPoints: [
            "Density-dependent factors: effects intensify with population density (competition, disease, predation, parasitism)",
            "Density-independent factors: affect populations regardless of density (floods, fires, droughts, earthquakes)",
            "Population growth = (births + immigration) − (deaths + emigration)",
            "r-strategists: many offspring, little care, rapid reproduction, small size (insects, bacteria, weeds)",
            "K-strategists: few offspring, extensive care, slow reproduction, large size (elephants, whales, humans)",
            "Intraspecific competition (same species) is more intense than interspecific (different species)"
        ]
    },
    {
        id: "f35",
        title: "Population Size Estimation Methods",
        unit: "ecology",
        keyPoints: [
            "Quadrats: for sessile organisms (plants) — place randomly, count individuals, extrapolate to total area",
            "Quadrat formula: Estimated population = (mean count per quadrat / quadrat area) × total area",
            "Mark-recapture: for mobile animals — capture, mark, release, recapture",
            "Lincoln Index: N = (M × C) / R (M = marked, C = second capture total, R = recaptured marked)",
            "Assumptions: marks don't affect survival, adequate mixing time, no births/deaths/migration between samples",
            "Sampling must be random and representative to give accurate estimates"
        ]
    },

    // --- Human Impact on Environment ---
    {
        id: "f36",
        title: "The Greenhouse Effect and Global Warming",
        unit: "human-impact",
        keyPoints: [
            "Natural greenhouse effect: atmospheric gases trap infrared radiation — keeps Earth ~33°C warmer",
            "Enhanced greenhouse effect: human activities increase greenhouse gas concentrations",
            "Main greenhouse gases: CO₂ (fossil fuels, deforestation), CH₄ (livestock, landfills), N₂O (fertilisers), CFCs",
            "Global warming consequences: melting ice caps → rising sea levels, extreme weather, habitat shifts",
            "Changes in rainfall → crop failures; spread of tropical diseases; ocean acidification → coral bleaching",
            "Solutions: reduce fossil fuel use, renewable energy, reforestation, international agreements (Paris Agreement)"
        ]
    },
    {
        id: "f37",
        title: "Ozone Depletion — Causes and Consequences",
        unit: "human-impact",
        keyPoints: [
            "Ozone layer: O₃ in the stratosphere (15–35 km) — absorbs harmful UV radiation from the sun",
            "CFCs (chlorofluorocarbons) are the main cause — UV breaks down CFCs → releases chlorine atoms",
            "Each chlorine atom can destroy thousands of ozone molecules in a chain reaction",
            "Consequences: increased UV → skin cancer, cataracts, immune suppression, crop damage, phytoplankton death",
            "Montreal Protocol (1987): international agreement to phase out CFC production — ozone is slowly recovering",
            "Ozone depletion and global warming are DIFFERENT issues (CFCs vs greenhouse gases)"
        ]
    },
    {
        id: "f38",
        title: "Alien Invasive Species in South Africa",
        unit: "human-impact",
        keyPoints: [
            "Alien invasive species: organisms introduced outside their natural range that cause ecological/economic harm",
            "They often lack natural predators, diseases, or competitors in the new environment",
            "Examples: water hyacinth (blocks waterways), Port Jackson (displaces fynbos), Lantana (toxic to livestock)",
            "Trout (preys on indigenous fish/frogs), black wattle (excessive water use), rooikrans (invades dunes)",
            "Working for Water programme: government initiative to clear invasive plants — conserves water + creates jobs",
            "Prevention is more effective than control — strict biosecurity measures at borders"
        ]
    },
    {
        id: "f39",
        title: "Conservation Strategies — In-situ and Ex-situ",
        unit: "human-impact",
        keyPoints: [
            "Biodiversity: the variety of all living organisms — species diversity, genetic diversity, ecosystem diversity",
            "In-situ conservation: protecting species in their natural habitat (national parks, nature reserves, biosphere reserves)",
            "Biosphere reserves: core zone (strict protection), buffer zone (research), transition zone (sustainable use)",
            "South African biosphere reserves: Kogelberg, Kruger to Canyons, Cape West Coast",
            "Ex-situ conservation: protecting species outside their habitat (zoos, seed banks, botanical gardens, captive breeding)",
            "Sustainable development: meeting present needs without compromising future generations",
            "Both in-situ and ex-situ approaches work together for effective conservation"
        ]
    }];


// ============================================================
// NOTES DATA
// ============================================================
const notes = [
    // --- Protein Synthesis ---
    {
        title: "Protein Synthesis: Transcription and Translation",
        unit: "protein-synthesis",
        content: `Protein synthesis is the process by which cells use the instructions in DNA to build specific proteins. It involves two main stages: transcription and translation.

TRANSCRIPTION (DNA → mRNA):
Transcription takes place in the nucleus (nucleoplasm). The DNA double helix unwinds and the hydrogen bonds between base pairs break, causing the two strands to separate. One strand — the template strand (antisense strand) — is used as a template. The enzyme RNA polymerase moves along the template strand from the 3' to 5' direction, adding complementary RNA nucleotides. The base pairing rules differ slightly from DNA replication: adenine on DNA pairs with uracil on mRNA (not thymine), thymine on DNA pairs with adenine on mRNA, and cytosine pairs with guanine as usual. The result is a single-stranded mRNA molecule that is complementary to the template strand. The mRNA detaches from the DNA, and the DNA strands re-zip. The mRNA then moves through nuclear pores into the cytoplasm for translation.

TRANSLATION (mRNA → Polypeptide):
Translation takes place at the ribosome in the cytoplasm. The mRNA attaches to a ribosome, which reads the codons (triplets of bases) starting from the start codon AUG. A tRNA molecule carrying the amino acid methionine and bearing the complementary anticodon (UAC) binds to the start codon. The ribosome then moves along the mRNA, reading each successive codon. For each codon, a tRNA with the matching anticodon delivers the correct amino acid. Peptide bonds form between adjacent amino acids, building a growing polypeptide chain. When the ribosome reaches a stop codon (UAA, UAG, or UGA), translation terminates and the completed polypeptide is released. The polypeptide then folds into a functional protein. Multiple ribosomes can translate the same mRNA simultaneously, forming a polysome (polyribosome) for efficient protein production.

THE GENETIC CODE:
The genetic code has several important properties. It is a triplet code, meaning every three consecutive bases on mRNA form a codon that specifies one amino acid. There are 64 possible codons: 61 code for amino acids and 3 are stop codons. The code is degenerate (redundant), meaning that more than one codon can specify the same amino acid — this is because there are 64 codons but only 20 amino acids. The code is universal, meaning the same codons specify the same amino acids in almost all living organisms, providing strong evidence for a common evolutionary origin. The code is also non-overlapping — each base is part of only one codon, and codons are read sequentially without gaps.`
    },
    {
        title: "Mutations: Types, Causes and Consequences",
        unit: "protein-synthesis",
        content: `A mutation is any change in the nucleotide base sequence of DNA. Mutations can occur spontaneously during DNA replication or be induced by mutagens.

TYPES OF GENE MUTATIONS:
Point mutations (substitutions) involve the replacement of one nucleotide base with another. There are three possible outcomes: a silent mutation occurs when the new codon still codes for the same amino acid (possible because the code is degenerate); a missense mutation occurs when the new codon codes for a different amino acid, which may or may not affect protein function depending on the importance of that amino acid; and a nonsense mutation occurs when the substitution creates a premature stop codon, resulting in a shortened and usually non-functional protein.

Frameshift mutations occur when one or more nucleotide bases are inserted into or deleted from the DNA sequence (not in multiples of three). Because the genetic code is read in non-overlapping triplets, an insertion or deletion shifts the entire reading frame from that point onward. This means every codon after the mutation is read incorrectly, typically producing a completely different and non-functional protein. Frameshift mutations are generally more damaging than point mutations.

MUTAGENS:
Mutagens are agents that increase the rate of mutation. Physical mutagens include ultraviolet (UV) radiation, X-rays, and gamma rays, which can damage DNA directly. Chemical mutagens include substances like benzene, nicotine, asbestos, and mustard gas, which can alter base structures or interfere with DNA replication. Biological mutagens include certain viruses (e.g., HPV) that can insert their DNA into host cell DNA, disrupting normal gene function.

SOMATIC vs GERMLINE MUTATIONS:
Somatic mutations occur in body cells (non-reproductive cells). They affect only the individual in which they occur and cannot be passed to offspring. Somatic mutations can lead to uncontrolled cell division (cancer) if they affect genes that regulate the cell cycle. Germline mutations occur in the sex cells (gametes — sperm or egg cells). They can be passed on to offspring through reproduction and may cause inherited genetic disorders in future generations.

SIGNIFICANCE OF MUTATIONS:
Most mutations are neutral or harmful, but occasionally a mutation may be beneficial. Beneficial mutations provide raw material for natural selection and are the ultimate source of all genetic variation in populations. Without mutation, evolution could not occur. An example is the sickle cell mutation, which in the heterozygous state provides resistance to malaria — a beneficial effect in malaria-endemic regions despite being harmful in the homozygous state.`
    },

    // --- Genetics ---
    {
        title: "Mendelian Genetics: Laws, Crosses and Ratios",
        unit: "genetics",
        content: `Gregor Mendel (1822–1884), an Austrian monk, is regarded as the Father of Genetics. He studied inheritance patterns in garden peas and formulated three fundamental laws.

MENDEL'S LAWS:
The Law of Dominance states that when two organisms with contrasting traits (homozygous dominant × homozygous recessive) are crossed, only the dominant trait appears in the first filial (F1) generation. The recessive trait is masked but still present in the genotype.

The Law of Segregation states that during gamete formation, the two alleles for each gene segregate (separate) so that each gamete receives only one allele. This corresponds to the separation of homologous chromosomes during meiosis I.

The Law of Independent Assortment states that alleles of different genes located on different chromosomes assort independently during gamete formation. The inheritance of one gene does not affect the inheritance of another (provided the genes are on different chromosomes).

MONOHYBRID CROSSES:
A monohybrid cross involves one gene with two alleles. When two heterozygous individuals are crossed (e.g., Tt × Tt), the expected phenotypic ratio in the offspring is 3 dominant : 1 recessive (3:1), and the genotypic ratio is 1 TT : 2 Tt : 1 tt (1:2:1). A Punnett square is used to predict the outcomes of genetic crosses.

DIHYBRID CROSSES:
A dihybrid cross involves two genes simultaneously (e.g., TtBb × TtBb). Each parent produces four types of gametes (TB, Tb, tB, tb). The expected F2 phenotypic ratio is 9:3:3:1 (9 dominant for both : 3 dominant first/recessive second : 3 recessive first/dominant second : 1 recessive for both). A 4×4 Punnett square is used.

TEST CROSS:
A test cross determines whether an organism showing the dominant phenotype is homozygous dominant (TT) or heterozygous (Tt). The organism is crossed with a homozygous recessive individual (tt). If all offspring show the dominant phenotype, the parent is TT. If approximately half the offspring show the recessive phenotype, the parent is Tt.

INCOMPLETE DOMINANCE:
In incomplete dominance, the heterozygous phenotype is an intermediate blend between the two homozygous phenotypes. Neither allele is completely dominant. Example: Red (RR) × White (R'R') = Pink (RR'). The F2 phenotypic ratio is 1:2:1 instead of 3:1.`
    },
    {
        title: "Blood Groups, Sex-Linked Inheritance and Genetic Disorders",
        unit: "genetics",
        content: `CO-DOMINANCE AND BLOOD GROUPS:
Co-dominance occurs when both alleles in a heterozygous individual are fully expressed simultaneously — there is no blending and neither is dominant. The ABO blood group system is the classic example. Three alleles control blood type: I^A (codes for antigen A), I^B (codes for antigen B), and i (codes for no antigen). I^A and I^B are co-dominant to each other — a person with genotype I^A I^B expresses both antigens and has blood type AB. Both I^A and I^B are dominant over i.

The possible genotypes and phenotypes are: Blood type A (I^A I^A or I^A i), Blood type B (I^B I^B or I^B i), Blood type AB (I^A I^B), and Blood type O (ii). Blood type O individuals are considered universal donors (no antigens to cause reactions), while type AB individuals are universal recipients.

SEX-LINKED INHERITANCE:
Sex-linked traits are controlled by genes located on the sex chromosomes, most commonly the X chromosome (X-linked). Because males have only one X chromosome (XY), they need only one copy of a recessive allele to express an X-linked recessive trait. Females (XX) need two copies to express the trait and can be carriers if they have one normal and one recessive allele.

Haemophilia is an X-linked recessive disorder where blood fails to clot properly. The allele for normal clotting (X^H) is dominant over the haemophilia allele (X^h). Males are either normal (X^H Y) or haemophiliac (X^h Y). Females can be normal (X^H X^H), carriers (X^H X^h), or — very rarely — haemophiliac (X^h X^h). A carrier mother has a 50% chance of passing the recessive allele to her sons. Fathers cannot pass X-linked traits to their sons because sons inherit the Y chromosome from their father.

Red-green colour blindness follows the same X-linked recessive pattern. It is more common in males for the same reason.

GENETIC DISORDERS:
Sickle cell anaemia is an autosomal recessive disorder caused by a point mutation (substitution) in the haemoglobin gene. One amino acid is changed (glutamic acid → valine), causing haemoglobin molecules to polymerise under low oxygen conditions, distorting red blood cells into a sickle shape. These cells block capillaries, causing pain and organ damage. Carriers (HbA HbS) have sickle cell trait and some malaria resistance (heterozygous advantage).

Albinism is an autosomal recessive condition (aa) where the body cannot produce melanin pigment. It affects skin, hair and eye colour. It is relatively common in certain South African populations.

Cystic fibrosis is an autosomal recessive disorder caused by a mutation in the CFTR gene. It results in production of thick, sticky mucus that clogs the lungs and digestive system.

PEDIGREE DIAGRAMS:
Pedigree diagrams trace inheritance of traits through families. Standard symbols: squares = males, circles = females, filled = affected, half-filled = carrier, horizontal line = mating, vertical line = offspring. They are used to determine whether a trait is dominant or recessive, and autosomal or sex-linked.`
    },

    // --- Evolution ---
    {
        title: "Evolution: Natural Selection and Evidence",
        unit: "evolution",
        content: `Evolution is the change in the inherited characteristics (allele frequencies) of a population over successive generations. Charles Darwin (1809–1882) proposed the theory of evolution by natural selection after his voyage on HMS Beagle (1831–1836), where he observed species variation across the Galápagos Islands. He published On the Origin of Species in 1859.

NATURAL SELECTION:
Natural selection operates through several steps. First, individuals within a population show genetic variation due to mutations, crossing over, independent assortment, and random fertilisation. Second, organisms produce more offspring than can survive (overproduction). Third, there is a struggle for existence — individuals compete for limited resources such as food, water, space and mates. Fourth, individuals with traits that give them an advantage in the particular environment (the 'fittest') are more likely to survive to reproductive age. Fifth, these surviving individuals reproduce and pass their advantageous alleles to their offspring. Over many generations, the frequency of advantageous alleles increases in the population, and the population becomes better adapted to its environment.

It is important to note that natural selection acts on phenotypes (physical traits), but it is the genotype (genetic makeup) that is inherited. Natural selection does not create new variations — it selects from existing genetic variation. Mutations are the ultimate source of new genetic variation.

ARTIFICIAL SELECTION:
Artificial selection is the deliberate breeding of organisms by humans to produce offspring with desirable traits. Examples include dog breeds, high-yield crops, and dairy cattle with high milk production. Unlike natural selection, artificial selection is directed by human choice, works over shorter time periods, and may reduce genetic diversity.

EVIDENCE FOR EVOLUTION:
Fossil evidence shows a progression from simple to complex organisms in the rock layers. Transitional fossils (e.g., Archaeopteryx, linking reptiles and birds) provide evidence of intermediate forms. However, the fossil record is incomplete because fossilisation is rare.

Comparative anatomy provides evidence through homologous structures — structures in different species that have the same basic structure and embryological origin but different functions (e.g., forelimbs of humans, whales, bats, and dogs). This suggests common ancestry. Analogous structures have different origins but similar functions (e.g., wings of insects and birds) — evidence of convergent evolution. Vestigial structures are reduced remnants of once-functional structures (e.g., human appendix, coccyx, whale pelvic bones).

Biogeography — the geographical distribution of species — supports evolution. Similar environments on different continents often have different but analogously adapted species, reflecting separate evolutionary histories.

Molecular evidence from DNA and protein sequence comparisons shows that more closely related species have more similar sequences. This provides the strongest quantitative evidence for evolutionary relationships.`
    },
    {
        title: "Speciation, Human Evolution and Evolutionary Models",
        unit: "evolution",
        content: `SPECIATION:
Speciation is the process by which one species evolves into two or more new species. The key requirement is reproductive isolation — the two groups must no longer be able to interbreed to produce fertile offspring.

Allopatric speciation occurs when a population is divided by a geographical barrier such as a river, mountain range, or ocean. The separated populations experience different environmental conditions and selection pressures. Over time, they accumulate enough genetic differences that they can no longer interbreed even if the barrier is removed — they have become separate species.

Sympatric speciation occurs within the same geographical area, without a physical barrier. It can result from polyploidy (a sudden doubling of chromosome number, common in plants), behavioural differences, or habitat specialisation within the same area.

Adaptive radiation is the evolution of many different species from a single common ancestor, each adapted to a different ecological niche. Darwin's finches on the Galápagos Islands are the classic example — from one ancestral species, different species evolved with different beak shapes suited to different food sources.

PUNCTUATED EQUILIBRIUM vs GRADUALISM:
Gradualism proposes that evolution occurs slowly and continuously through the gradual accumulation of small changes over long periods. The fossil record of horse evolution supports this model, showing gradual changes in tooth structure and body size.

Punctuated equilibrium, proposed by Stephen Jay Gould and Niles Eldredge, suggests that species remain relatively unchanged for long periods of stability (stasis), interrupted by short, rapid bursts of evolutionary change (speciation events). This model explains the gaps in the fossil record — speciation occurs too quickly in geological terms to leave a detailed fossil trail. Both models may apply to different lineages and are not mutually exclusive.

HUMAN EVOLUTION AND THE OUT OF AFRICA HYPOTHESIS:
The Out of Africa hypothesis states that modern humans (Homo sapiens) evolved in Africa approximately 200 000 years ago and then migrated out of Africa to populate the rest of the world, replacing other hominin species.

Evidence supporting this hypothesis includes: the oldest Homo sapiens fossils are found in Africa (Omo Kibish, Ethiopia, ~195 000 years ago); African populations have the greatest genetic diversity, suggesting they are the oldest human populations; mitochondrial DNA analysis traces all modern humans back to a common female ancestor in Africa (Mitochondrial Eve); and Y-chromosome analysis points to a common male ancestor in Africa.

Key South African fossil discoveries include: the Taung Child (Australopithecus africanus), discovered by Raymond Dart in 1924 in the North West Province; Mrs Ples (Australopithecus africanus), discovered by Robert Broom at Sterkfontein in 1947; Little Foot, a nearly complete Australopithecus skeleton from Sterkfontein (~3.7 million years old); and Homo naledi, discovered in the Rising Star Cave system in the Cradle of Humankind in 2013, which shows a fascinating mixture of primitive and modern features.

Important trends in human evolution include: increasing brain size, development of bipedalism (upright walking), shift of the foramen magnum to below the skull, reduction in jaw and tooth size, development of a chin, and increasing tool complexity.`
    },

    // --- Population Ecology ---
    {
        title: "Population Ecology: Growth, Carrying Capacity and Regulation",
        unit: "ecology",
        content: `A population is a group of organisms of the same species living in the same area at the same time. Population ecology studies how populations change in size and structure over time.

POPULATION SIZE ESTIMATION:
For sessile (stationary) organisms like plants, the quadrat method is used. Quadrats (square frames of known area) are placed randomly in the study area. Individuals of the target species in each quadrat are counted, the mean is calculated, and the result is extrapolated to the total area. Formula: Estimated population = (mean count per quadrat / area of quadrat) × total area of habitat.

For mobile animals, the mark-recapture method is used. A sample of animals is captured and counted (M = number marked). They are marked in a harmless way and released. After sufficient time for mixing, a second sample is captured (C = total in second capture). The number of recaptured marked animals (R) is recorded. The Lincoln Index formula is used: N = (M × C) / R, where N is the estimated population size. This method assumes that marks do not affect survival, marked and unmarked animals mix randomly, there are no births, deaths, or migration between sampling events, and all animals have an equal chance of being captured.

POPULATION GROWTH CURVES:
The J-shaped (exponential) growth curve shows a population growing without limits — resources are abundant, there are no predators, and conditions are ideal. There is no environmental resistance. This type of growth is unsustainable and typically ends in a dramatic population crash when resources are suddenly depleted.

The S-shaped (sigmoid/logistic) growth curve is more realistic. It has three phases: the lag phase (slow initial growth as the population establishes), the exponential/log phase (rapid growth while resources are still abundant), and the stationary phase (growth slows and the population levels off at the carrying capacity). Environmental resistance factors prevent further growth.

CARRYING CAPACITY (K):
The carrying capacity is the maximum number of individuals of a species that an environment can sustainably support over a long period, given the available resources. When a population reaches K, the birth rate approximately equals the death rate, and the population fluctuates around K. If a population temporarily exceeds K, increased competition, disease and starvation cause a population decrease.

LIMITING FACTORS:
Density-dependent factors are biological factors whose effects become more intense as population density increases. Examples include competition for food and space, predation, disease transmission, and parasitism. They act as negative feedback mechanisms, regulating population size around the carrying capacity.

Density-independent factors affect populations regardless of density. They are usually abiotic (non-living) factors such as natural disasters (floods, fires, droughts, earthquakes), extreme weather events, and human activities (habitat destruction, pollution). They can cause sudden, unpredictable changes in population size.

POPULATION GROWTH FORMULA:
Population growth = (births + immigration) − (deaths + emigration). If the positive factors exceed the negative factors, the population grows. If negative factors exceed positive, the population declines. Zero population growth occurs when they are balanced.

r-STRATEGISTS vs K-STRATEGISTS:
r-strategists (e.g., insects, bacteria, weeds) produce many offspring with little or no parental care. They have short lifespans, mature quickly, and are adapted to unstable or unpredictable environments. Their populations tend to grow rapidly and crash — following J-shaped curves.

K-strategists (e.g., elephants, whales, humans) produce few offspring with extensive parental care. They have long lifespans, mature slowly, and are adapted to stable environments. Their populations tend to remain near carrying capacity — following S-shaped curves.`
    },

    // --- Human Impact on Environment ---
    {
        title: "Climate Change: Greenhouse Effect and Global Warming",
        unit: "human-impact",
        content: `THE GREENHOUSE EFFECT:
The greenhouse effect is a natural and essential process. Short-wave solar radiation passes through the atmosphere and heats Earth's surface. The warmed surface re-radiates energy as long-wave infrared (heat) radiation. Greenhouse gases in the atmosphere (carbon dioxide, methane, nitrous oxide, water vapour, and CFCs) absorb and re-emit this infrared radiation, trapping heat and keeping the planet approximately 33°C warmer than it would otherwise be. Without the natural greenhouse effect, Earth's average temperature would be about −18°C instead of +15°C.

THE ENHANCED GREENHOUSE EFFECT AND GLOBAL WARMING:
Human activities have dramatically increased the concentration of greenhouse gases in the atmosphere, enhancing the natural greenhouse effect and causing global warming. The main greenhouse gases and their human sources are: carbon dioxide (CO₂) from burning fossil fuels (coal, oil, gas) and deforestation; methane (CH₄) from livestock farming, rice paddies, landfills, and fossil fuel extraction; nitrous oxide (N₂O) from agricultural fertilisers and burning fossil fuels; and chlorofluorocarbons (CFCs) from refrigerants and aerosol propellants (now banned under the Montreal Protocol).

CONSEQUENCES OF GLOBAL WARMING:
The consequences of global warming are far-reaching and include: melting of polar ice caps and glaciers leading to rising sea levels and coastal flooding; more frequent and intense extreme weather events such as droughts, floods, and storms; shifts in biomes and habitats leading to species displacement and extinction; changes in rainfall patterns causing crop failures and food insecurity; spread of tropical diseases such as malaria to previously temperate regions; and ocean acidification from increased dissolved CO₂, leading to coral bleaching and damage to marine ecosystems.

OZONE DEPLETION:
The ozone layer is a region in the stratosphere (15–35 km above Earth) with a high concentration of ozone (O₃). It absorbs most of the sun's harmful ultraviolet (UV-B and UV-C) radiation, protecting life on Earth. Ozone depletion is caused primarily by chlorofluorocarbons (CFCs). When CFCs reach the stratosphere, UV radiation breaks them down, releasing chlorine atoms. Each chlorine atom can destroy thousands of ozone molecules through a catalytic chain reaction. The resulting thinning of the ozone layer, particularly over Antarctica (the ozone hole), allows more harmful UV radiation to reach Earth's surface.

Effects of ozone depletion include: increased risk of skin cancer (especially melanoma); increased incidence of cataracts and other eye damage; suppression of the human immune system; reduced crop yields due to UV damage to plant cells; and damage to marine ecosystems as UV radiation kills phytoplankton, which form the base of ocean food chains.

The Montreal Protocol (1987) is an international agreement that successfully phased out the production of CFCs and other ozone-depleting substances. As a result, the ozone layer is slowly recovering, though full recovery is not expected until the mid-21st century. It is important to note that ozone depletion and global warming are different environmental problems with different causes, though CFCs contribute to both.`
    },
    {
        title: "Biodiversity, Invasive Species and Conservation",
        unit: "human-impact",
        content: `BIODIVERSITY:
Biodiversity refers to the variety of all living organisms and includes three levels: species diversity (the number of different species in an area), genetic diversity (the variety of genes within a species), and ecosystem diversity (the variety of different ecosystems in a region). South Africa is one of the most biodiverse countries in the world, containing three of the world's 36 biodiversity hotspots: the Cape Floristic Region, the Succulent Karoo, and Maputaland-Pondoland-Albany.

Biodiversity is important because it maintains ecosystem stability and resilience, provides resources such as food, medicine, timber, and clean water, supports essential ecosystem services such as pollination, nutrient cycling, and water purification, and has aesthetic, cultural, ethical, and economic value.

ALIEN INVASIVE SPECIES:
Alien invasive species are organisms that have been introduced (deliberately or accidentally) to an area outside their natural range, where they establish, spread rapidly, and cause ecological or economic harm. They are one of the greatest threats to biodiversity worldwide. In their new environment, invasive species often lack natural predators, diseases, or competitors, allowing their populations to grow unchecked.

Key examples in South Africa include: water hyacinth (Eichhornia crassipes), originally from South America, which blocks waterways, reduces light penetration and dissolved oxygen, and kills aquatic organisms; Port Jackson willow (Acacia saligna) and black wattle (Acacia mearnsii), which displace indigenous fynbos vegetation and use excessive amounts of water; Lantana camara, which is toxic to livestock and displaces indigenous plants; trout (Oncorhynchus mykiss), which preys on indigenous fish and frog species; and rooikrans (Acacia cyclops), which invades coastal sand dunes.

The Working for Water programme is a South African government initiative that employs local people to clear alien invasive plants. It serves dual purposes: conserving water resources (invasive trees such as wattle and eucalyptus use far more water than indigenous vegetation) and creating employment opportunities for previously disadvantaged communities. Since 1995, the programme has cleared over one million hectares of invasive plants.

CONSERVATION STRATEGIES:
In-situ conservation involves protecting species in their natural habitat. Examples include national parks (e.g., Kruger National Park), provincial nature reserves, marine protected areas, World Heritage Sites, and biosphere reserves. Biosphere reserves, designated by UNESCO, have three zones: a core zone (strictly protected, no human activity — for biodiversity conservation), a buffer zone (surrounding the core, limited activities such as research and education allowed), and a transition zone (outermost area, sustainable human activities such as farming and settlement are permitted). South African biosphere reserves include Kogelberg, Kruger to Canyons, Waterberg, and Cape West Coast.

Ex-situ conservation involves protecting species outside their natural habitat. Examples include zoos and aquariums (for breeding and education), botanical gardens (for plant conservation and research), seed banks (preserving genetic diversity of plant species), and captive breeding programmes (breeding endangered species for eventual reintroduction). Ex-situ conservation is often a last resort when in-situ conservation has failed or is insufficient.

SUSTAINABLE DEVELOPMENT:
Sustainable development is development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs. It requires balancing three pillars: economic growth, social development, and environmental protection. Practices include reducing resource consumption, using renewable energy, recycling, responsible land use, and protecting natural ecosystems.

EUTROPHICATION AND WATER POLLUTION:
Eutrophication is the enrichment of water bodies with nutrients, especially nitrates and phosphates from agricultural fertiliser run-off and sewage. The excess nutrients cause rapid algal growth (algal bloom). The algae block sunlight, killing submerged plants. When the algae die, decomposing bacteria consume them, using up dissolved oxygen in the process (increasing the biological oxygen demand — BOD). This oxygen depletion kills fish and other aquatic organisms, creating dead zones. Eutrophication is a major water quality problem in South Africa.

Other forms of water pollution include industrial effluent containing heavy metals that bioaccumulate and biomagnify through food chains, sewage contamination introducing waterborne pathogens, acid mine drainage lowering water pH, and oil spills that coat organisms and prevent gas exchange.`
    }
];
