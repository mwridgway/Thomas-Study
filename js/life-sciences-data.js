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
    }];
