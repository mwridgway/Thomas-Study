// ============================================================
// SVG DIAGRAMS — Visual learning aids
// Injected into content sections after page load
// ============================================================

const diagrams = {
    // DNA NUCLEOTIDE STRUCTURE
    nucleotide: `
    <div class="diagram-container">
        <h4 class="diagram-title">🔬 DNA Nucleotide Structure</h4>
        <svg viewBox="0 0 400 200" class="diagram-svg">
            <!-- Phosphate -->
            <circle cx="80" cy="60" r="30" fill="#ff6b6b" opacity="0.8"/>
            <text x="80" y="65" text-anchor="middle" fill="white" font-size="12" font-weight="bold">P</text>
            <text x="80" y="110" text-anchor="middle" fill="#ff6b6b" font-size="11">Phosphate</text>
            <!-- Sugar -->
            <polygon points="160,35 200,45 210,80 185,100 150,85" fill="#4ecdc4" opacity="0.8"/>
            <text x="180" y="72" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Sugar</text>
            <text x="180" y="120" text-anchor="middle" fill="#4ecdc4" font-size="10">(Deoxyribose)</text>
            <!-- Base -->
            <rect x="260" y="30" width="100" height="70" rx="10" fill="#ffd93d" opacity="0.8"/>
            <text x="310" y="60" text-anchor="middle" fill="#333" font-size="11" font-weight="bold">Nitrogenous</text>
            <text x="310" y="78" text-anchor="middle" fill="#333" font-size="11" font-weight="bold">Base</text>
            <text x="310" y="120" text-anchor="middle" fill="#ffd93d" font-size="10">A, T, G, or C</text>
            <!-- Bonds -->
            <line x1="110" y1="60" x2="148" y2="65" stroke="#666" stroke-width="2" stroke-dasharray="4"/>
            <line x1="212" y1="65" x2="258" y2="65" stroke="#666" stroke-width="2" stroke-dasharray="4"/>
            <!-- Labels -->
            <text x="200" y="160" text-anchor="middle" fill="#aaa" font-size="10">← One nucleotide = phosphate + sugar + base →</text>
            <text x="200" y="180" text-anchor="middle" fill="#666" font-size="9">Many nucleotides join to form a polynucleotide chain</text>
        </svg>
    </div>`,

    // DNA DOUBLE HELIX / LADDER
    dnaLadder: `
    <div class="diagram-container">
        <h4 class="diagram-title">🧬 DNA Ladder Structure (Unwound)</h4>
        <svg viewBox="0 0 400 320" class="diagram-svg">
            <!-- Left backbone -->
            <line x1="100" y1="20" x2="100" y2="300" stroke="#4ecdc4" stroke-width="4"/>
            <!-- Right backbone -->
            <line x1="300" y1="20" x2="300" y2="300" stroke="#4ecdc4" stroke-width="4"/>
            <!-- Labels for backbone -->
            <text x="50" y="160" text-anchor="middle" fill="#4ecdc4" font-size="9" transform="rotate(-90,50,160)">Sugar-Phosphate Backbone</text>
            <text x="350" y="160" text-anchor="middle" fill="#4ecdc4" font-size="9" transform="rotate(90,350,160)">Sugar-Phosphate Backbone</text>
            <!-- Base pair 1: A-T -->
            <rect x="100" y="40" width="80" height="24" rx="4" fill="#ff6b6b" opacity="0.8"/>
            <rect x="220" y="40" width="80" height="24" rx="4" fill="#ffd93d" opacity="0.8"/>
            <text x="140" y="56" text-anchor="middle" fill="white" font-size="12" font-weight="bold">A</text>
            <text x="260" y="56" text-anchor="middle" fill="#333" font-size="12" font-weight="bold">T</text>
            <line x1="180" y1="52" x2="220" y2="52" stroke="#aaa" stroke-width="1" stroke-dasharray="3"/>
            <line x1="190" y1="48" x2="190" y2="56" stroke="#aaa" stroke-width="1"/>
            <line x1="210" y1="48" x2="210" y2="56" stroke="#aaa" stroke-width="1"/>
            <text x="200" y="38" text-anchor="middle" fill="#888" font-size="8">2 H-bonds</text>
            <!-- Base pair 2: G-C -->
            <rect x="100" y="90" width="80" height="24" rx="4" fill="#6bcb77" opacity="0.8"/>
            <rect x="220" y="90" width="80" height="24" rx="4" fill="#4d96ff" opacity="0.8"/>
            <text x="140" y="106" text-anchor="middle" fill="white" font-size="12" font-weight="bold">G</text>
            <text x="260" y="106" text-anchor="middle" fill="white" font-size="12" font-weight="bold">C</text>
            <line x1="180" y1="102" x2="220" y2="102" stroke="#aaa" stroke-width="1" stroke-dasharray="3"/>
            <line x1="187" y1="98" x2="187" y2="106" stroke="#aaa" stroke-width="1"/>
            <line x1="200" y1="98" x2="200" y2="106" stroke="#aaa" stroke-width="1"/>
            <line x1="213" y1="98" x2="213" y2="106" stroke="#aaa" stroke-width="1"/>
            <text x="200" y="88" text-anchor="middle" fill="#888" font-size="8">3 H-bonds</text>
            <!-- Base pair 3: T-A -->
            <rect x="100" y="140" width="80" height="24" rx="4" fill="#ffd93d" opacity="0.8"/>
            <rect x="220" y="140" width="80" height="24" rx="4" fill="#ff6b6b" opacity="0.8"/>
            <text x="140" y="156" text-anchor="middle" fill="#333" font-size="12" font-weight="bold">T</text>
            <text x="260" y="156" text-anchor="middle" fill="white" font-size="12" font-weight="bold">A</text>
            <line x1="180" y1="152" x2="220" y2="152" stroke="#aaa" stroke-width="1" stroke-dasharray="3"/>
            <!-- Base pair 4: C-G -->
            <rect x="100" y="190" width="80" height="24" rx="4" fill="#4d96ff" opacity="0.8"/>
            <rect x="220" y="190" width="80" height="24" rx="4" fill="#6bcb77" opacity="0.8"/>
            <text x="140" y="206" text-anchor="middle" fill="white" font-size="12" font-weight="bold">C</text>
            <text x="260" y="206" text-anchor="middle" fill="white" font-size="12" font-weight="bold">G</text>
            <line x1="180" y1="202" x2="220" y2="202" stroke="#aaa" stroke-width="1" stroke-dasharray="3"/>
            <!-- Base pair 5: A-T -->
            <rect x="100" y="240" width="80" height="24" rx="4" fill="#ff6b6b" opacity="0.8"/>
            <rect x="220" y="240" width="80" height="24" rx="4" fill="#ffd93d" opacity="0.8"/>
            <text x="140" y="256" text-anchor="middle" fill="white" font-size="12" font-weight="bold">A</text>
            <text x="260" y="256" text-anchor="middle" fill="#333" font-size="12" font-weight="bold">T</text>
            <line x1="180" y1="252" x2="220" y2="252" stroke="#aaa" stroke-width="1" stroke-dasharray="3"/>
            <!-- Legend -->
            <rect x="100" y="285" width="12" height="12" rx="2" fill="#ff6b6b" opacity="0.8"/>
            <text x="118" y="295" fill="#ccc" font-size="9">Adenine</text>
            <rect x="160" y="285" width="12" height="12" rx="2" fill="#ffd93d" opacity="0.8"/>
            <text x="178" y="295" fill="#ccc" font-size="9">Thymine</text>
            <rect x="225" y="285" width="12" height="12" rx="2" fill="#6bcb77" opacity="0.8"/>
            <text x="243" y="295" fill="#ccc" font-size="9">Guanine</text>
            <rect x="290" y="285" width="12" height="12" rx="2" fill="#4d96ff" opacity="0.8"/>
            <text x="308" y="295" fill="#ccc" font-size="9">Cytosine</text>
        </svg>
    </div>`,

    // DNA REPLICATION
    replication: `
    <div class="diagram-container">
        <h4 class="diagram-title">🔄 DNA Replication</h4>
        <svg viewBox="0 0 440 280" class="diagram-svg">
            <!-- Original strand label -->
            <text x="60" y="20" text-anchor="middle" fill="#aaa" font-size="10" font-weight="bold">Parent DNA</text>
            <!-- Left original strand -->
            <line x1="40" y1="30" x2="40" y2="130" stroke="#4ecdc4" stroke-width="4"/>
            <line x1="80" y1="30" x2="80" y2="130" stroke="#ff6b6b" stroke-width="4"/>
            <!-- Unzipping -->
            <text x="60" y="145" text-anchor="middle" fill="#ffd93d" font-size="9">↓ Helicase unzips ↓</text>
            <!-- Replication fork -->
            <line x1="40" y1="155" x2="20" y2="260" stroke="#4ecdc4" stroke-width="4"/>
            <line x1="80" y1="155" x2="100" y2="260" stroke="#ff6b6b" stroke-width="4"/>
            <!-- New complementary strands -->
            <line x1="20" y1="170" x2="20" y2="260" stroke="#ff6b6b" stroke-width="4" stroke-dasharray="6" opacity="0.6"/>
            <line x1="100" y1="170" x2="100" y2="260" stroke="#4ecdc4" stroke-width="4" stroke-dasharray="6" opacity="0.6"/>
            <!-- Labels -->
            <text x="10" y="275" fill="#4ecdc4" font-size="8">Old</text>
            <text x="22" y="275" fill="#ff6b6b" font-size="8">New</text>
            <text x="88" y="275" fill="#ff6b6b" font-size="8">Old</text>
            <text x="100" y="275" fill="#4ecdc4" font-size="8">New</text>

            <!-- Steps on the right -->
            <rect x="150" y="25" width="270" height="40" rx="6" fill="rgba(78,205,196,0.15)" stroke="#4ecdc4" stroke-width="1"/>
            <text x="160" y="40" fill="#4ecdc4" font-size="9" font-weight="bold">Step 1</text>
            <text x="160" y="55" fill="#ccc" font-size="9">Helicase unwinds & unzips the double helix</text>
            
            <rect x="150" y="80" width="270" height="40" rx="6" fill="rgba(255,107,107,0.15)" stroke="#ff6b6b" stroke-width="1"/>
            <text x="160" y="95" fill="#ff6b6b" font-size="9" font-weight="bold">Step 2</text>
            <text x="160" y="110" fill="#ccc" font-size="9">H-bonds between base pairs break</text>

            <rect x="150" y="135" width="270" height="40" rx="6" fill="rgba(255,217,61,0.15)" stroke="#ffd93d" stroke-width="1"/>
            <text x="160" y="150" fill="#ffd93d" font-size="9" font-weight="bold">Step 3</text>
            <text x="160" y="165" fill="#ccc" font-size="9">Free nucleotides pair with exposed bases</text>

            <rect x="150" y="190" width="270" height="40" rx="6" fill="rgba(107,203,119,0.15)" stroke="#6bcb77" stroke-width="1"/>
            <text x="160" y="205" fill="#6bcb77" font-size="9" font-weight="bold">Step 4</text>
            <text x="160" y="220" fill="#ccc" font-size="9">DNA polymerase joins new nucleotides</text>

            <rect x="150" y="245" width="270" height="26" rx="6" fill="rgba(77,150,255,0.15)" stroke="#4d96ff" stroke-width="1"/>
            <text x="160" y="262" fill="#4d96ff" font-size="9" font-weight="bold">Result: 2 identical DNA molecules (semi-conservative)</text>
        </svg>
    </div>`,

    // MEIOSIS OVERVIEW
    meiosisOverview: `
    <div class="diagram-container">
        <h4 class="diagram-title">🧫 Meiosis Overview</h4>
        <svg viewBox="0 0 440 300" class="diagram-svg">
            <!-- Parent cell -->
            <ellipse cx="220" cy="35" rx="50" ry="25" fill="none" stroke="#4ecdc4" stroke-width="2"/>
            <text x="220" y="32" text-anchor="middle" fill="#4ecdc4" font-size="10" font-weight="bold">2n = 46</text>
            <text x="220" y="44" text-anchor="middle" fill="#888" font-size="8">Parent cell (diploid)</text>
            
            <!-- Arrow down -->
            <line x1="220" y1="62" x2="220" y2="85" stroke="#ffd93d" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="260" y="78" fill="#ffd93d" font-size="9" font-weight="bold">MEIOSIS I</text>
            <text x="260" y="88" fill="#888" font-size="7">(reduction division)</text>
            
            <defs><marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#ffd93d"/></marker></defs>

            <!-- Two cells after meiosis I -->
            <ellipse cx="140" cy="120" rx="40" ry="22" fill="none" stroke="#ff6b6b" stroke-width="2"/>
            <text x="140" y="118" text-anchor="middle" fill="#ff6b6b" font-size="10" font-weight="bold">n = 23</text>
            <text x="140" y="130" text-anchor="middle" fill="#888" font-size="7">haploid</text>

            <ellipse cx="300" cy="120" rx="40" ry="22" fill="none" stroke="#ff6b6b" stroke-width="2"/>
            <text x="300" y="118" text-anchor="middle" fill="#ff6b6b" font-size="10" font-weight="bold">n = 23</text>
            <text x="300" y="130" text-anchor="middle" fill="#888" font-size="7">haploid</text>

            <!-- Lines connecting -->
            <line x1="200" y1="55" x2="140" y2="98" stroke="#ffd93d" stroke-width="1.5"/>
            <line x1="240" y1="55" x2="300" y2="98" stroke="#ffd93d" stroke-width="1.5"/>

            <!-- Arrow down to meiosis II -->
            <line x1="140" y1="145" x2="140" y2="170" stroke="#6bcb77" stroke-width="2"/>
            <line x1="300" y1="145" x2="300" y2="170" stroke="#6bcb77" stroke-width="2"/>
            <text x="220" y="165" text-anchor="middle" fill="#6bcb77" font-size="9" font-weight="bold">MEIOSIS II</text>
            <text x="220" y="175" text-anchor="middle" fill="#888" font-size="7">(like mitosis)</text>

            <!-- Four cells after meiosis II -->
            <ellipse cx="80" cy="210" rx="35" ry="20" fill="none" stroke="#4d96ff" stroke-width="2"/>
            <text x="80" y="213" text-anchor="middle" fill="#4d96ff" font-size="9" font-weight="bold">n</text>

            <ellipse cx="180" cy="210" rx="35" ry="20" fill="none" stroke="#4d96ff" stroke-width="2"/>
            <text x="180" y="213" text-anchor="middle" fill="#4d96ff" font-size="9" font-weight="bold">n</text>

            <ellipse cx="260" cy="210" rx="35" ry="20" fill="none" stroke="#4d96ff" stroke-width="2"/>
            <text x="260" y="213" text-anchor="middle" fill="#4d96ff" font-size="9" font-weight="bold">n</text>

            <ellipse cx="360" cy="210" rx="35" ry="20" fill="none" stroke="#4d96ff" stroke-width="2"/>
            <text x="360" y="213" text-anchor="middle" fill="#4d96ff" font-size="9" font-weight="bold">n</text>

            <!-- Connecting lines -->
            <line x1="120" y1="140" x2="80" y2="192" stroke="#6bcb77" stroke-width="1.5"/>
            <line x1="160" y1="140" x2="180" y2="192" stroke="#6bcb77" stroke-width="1.5"/>
            <line x1="280" y1="140" x2="260" y2="192" stroke="#6bcb77" stroke-width="1.5"/>
            <line x1="320" y1="140" x2="360" y2="192" stroke="#6bcb77" stroke-width="1.5"/>

            <!-- Result -->
            <rect x="55" y="245" width="330" height="35" rx="8" fill="rgba(77,150,255,0.1)" stroke="#4d96ff" stroke-width="1"/>
            <text x="220" y="260" text-anchor="middle" fill="#4d96ff" font-size="10" font-weight="bold">4 genetically different haploid daughter cells</text>
            <text x="220" y="273" text-anchor="middle" fill="#888" font-size="8">Each with 23 chromosomes (gametes: sperm or egg)</text>
        </svg>
    </div>`,

    // CROSSING OVER
    crossingOver: `
    <div class="diagram-container">
        <h4 class="diagram-title">✂️ Crossing Over (Prophase I)</h4>
        <svg viewBox="0 0 440 220" class="diagram-svg">
            <!-- Before -->
            <text x="110" y="20" text-anchor="middle" fill="#aaa" font-size="10" font-weight="bold">BEFORE</text>
            <!-- Chromosome 1 (maternal) -->
            <rect x="40" y="30" width="140" height="16" rx="8" fill="#ff6b6b" opacity="0.8"/>
            <rect x="40" y="50" width="140" height="16" rx="8" fill="#ff6b6b" opacity="0.6"/>
            <text x="20" y="52" fill="#ff6b6b" font-size="8">Maternal</text>
            <!-- Chromosome 2 (paternal) -->
            <rect x="40" y="75" width="140" height="16" rx="8" fill="#4d96ff" opacity="0.8"/>
            <rect x="40" y="95" width="140" height="16" rx="8" fill="#4d96ff" opacity="0.6"/>
            <text x="20" y="97" fill="#4d96ff" font-size="8">Paternal</text>
            <!-- Bivalent bracket -->
            <text x="110" y="125" text-anchor="middle" fill="#888" font-size="8">↑ Bivalent (4 chromatids = tetrad) ↑</text>

            <!-- Arrow -->
            <text x="220" y="75" fill="#ffd93d" font-size="16">→</text>
            <text x="220" y="90" text-anchor="middle" fill="#ffd93d" font-size="8">Chiasma</text>

            <!-- After -->
            <text x="340" y="20" text-anchor="middle" fill="#aaa" font-size="10" font-weight="bold">AFTER</text>
            <!-- Recombinant chromosomes -->
            <rect x="260" y="30" width="80" height="16" rx="8" fill="#ff6b6b" opacity="0.8"/>
            <rect x="340" y="30" width="60" height="16" rx="8" fill="#4d96ff" opacity="0.8"/>
            
            <rect x="260" y="50" width="80" height="16" rx="8" fill="#ff6b6b" opacity="0.6"/>
            <rect x="340" y="50" width="60" height="16" rx="8" fill="#4d96ff" opacity="0.6"/>

            <rect x="260" y="75" width="60" height="16" rx="8" fill="#4d96ff" opacity="0.8"/>
            <rect x="320" y="75" width="80" height="16" rx="8" fill="#ff6b6b" opacity="0.8"/>

            <rect x="260" y="95" width="60" height="16" rx="8" fill="#4d96ff" opacity="0.6"/>
            <rect x="320" y="95" width="80" height="16" rx="8" fill="#ff6b6b" opacity="0.6"/>

            <text x="340" y="125" text-anchor="middle" fill="#6bcb77" font-size="8">New allele combinations!</text>

            <!-- Key takeaway -->
            <rect x="40" y="150" width="360" height="55" rx="8" fill="rgba(107,203,119,0.1)" stroke="#6bcb77" stroke-width="1"/>
            <text x="220" y="168" text-anchor="middle" fill="#6bcb77" font-size="10" font-weight="bold">Why it matters:</text>
            <text x="220" y="183" text-anchor="middle" fill="#ccc" font-size="9">Non-sister chromatids exchange DNA segments at chiasmata</text>
            <text x="220" y="196" text-anchor="middle" fill="#ccc" font-size="9">→ Creates NEW allele combinations → Increases genetic variation</text>
        </svg>
    </div>`,

    // MITOSIS vs MEIOSIS COMPARISON
    mitosisVsMeiosis: `
    <div class="diagram-container">
        <h4 class="diagram-title">⚔️ Mitosis vs Meiosis</h4>
        <svg viewBox="0 0 440 280" class="diagram-svg">
            <!-- MITOSIS side -->
            <text x="120" y="20" text-anchor="middle" fill="#4ecdc4" font-size="12" font-weight="bold">MITOSIS</text>
            <ellipse cx="120" cy="50" rx="35" ry="20" fill="none" stroke="#4ecdc4" stroke-width="2"/>
            <text x="120" y="54" text-anchor="middle" fill="#4ecdc4" font-size="9">2n</text>
            <line x1="100" y1="72" x2="80" y2="110" stroke="#4ecdc4" stroke-width="1.5"/>
            <line x1="140" y1="72" x2="160" y2="110" stroke="#4ecdc4" stroke-width="1.5"/>
            <ellipse cx="80" cy="130" rx="30" ry="18" fill="none" stroke="#4ecdc4" stroke-width="2"/>
            <text x="80" y="134" text-anchor="middle" fill="#4ecdc4" font-size="9">2n</text>
            <ellipse cx="160" cy="130" rx="30" ry="18" fill="none" stroke="#4ecdc4" stroke-width="2"/>
            <text x="160" y="134" text-anchor="middle" fill="#4ecdc4" font-size="9">2n</text>
            <text x="120" y="170" text-anchor="middle" fill="#4ecdc4" font-size="9">2 identical cells</text>

            <!-- VS -->
            <text x="220" y="90" text-anchor="middle" fill="#ffd93d" font-size="14" font-weight="bold">VS</text>

            <!-- MEIOSIS side -->
            <text x="330" y="20" text-anchor="middle" fill="#ff6b6b" font-size="12" font-weight="bold">MEIOSIS</text>
            <ellipse cx="330" cy="50" rx="35" ry="20" fill="none" stroke="#ff6b6b" stroke-width="2"/>
            <text x="330" y="54" text-anchor="middle" fill="#ff6b6b" font-size="9">2n</text>
            <line x1="310" y1="72" x2="290" y2="95" stroke="#ff6b6b" stroke-width="1.5"/>
            <line x1="350" y1="72" x2="370" y2="95" stroke="#ff6b6b" stroke-width="1.5"/>
            <ellipse cx="290" cy="110" rx="25" ry="14" fill="none" stroke="#ff6b6b" stroke-width="1.5"/>
            <text x="290" y="114" text-anchor="middle" fill="#ff6b6b" font-size="8">n</text>
            <ellipse cx="370" cy="110" rx="25" ry="14" fill="none" stroke="#ff6b6b" stroke-width="1.5"/>
            <text x="370" y="114" text-anchor="middle" fill="#ff6b6b" font-size="8">n</text>
            <line x1="278" y1="125" x2="265" y2="145" stroke="#ff6b6b" stroke-width="1"/>
            <line x1="302" y1="125" x2="315" y2="145" stroke="#ff6b6b" stroke-width="1"/>
            <line x1="358" y1="125" x2="345" y2="145" stroke="#ff6b6b" stroke-width="1"/>
            <line x1="382" y1="125" x2="395" y2="145" stroke="#ff6b6b" stroke-width="1"/>
            <ellipse cx="265" cy="158" rx="18" ry="12" fill="none" stroke="#4d96ff" stroke-width="1.5"/>
            <ellipse cx="315" cy="158" rx="18" ry="12" fill="none" stroke="#4d96ff" stroke-width="1.5"/>
            <ellipse cx="345" cy="158" rx="18" ry="12" fill="none" stroke="#4d96ff" stroke-width="1.5"/>
            <ellipse cx="395" cy="158" rx="18" ry="12" fill="none" stroke="#4d96ff" stroke-width="1.5"/>
            <text x="265" y="162" text-anchor="middle" fill="#4d96ff" font-size="7">n</text>
            <text x="315" y="162" text-anchor="middle" fill="#4d96ff" font-size="7">n</text>
            <text x="345" y="162" text-anchor="middle" fill="#4d96ff" font-size="7">n</text>
            <text x="395" y="162" text-anchor="middle" fill="#4d96ff" font-size="7">n</text>
            <text x="330" y="190" text-anchor="middle" fill="#ff6b6b" font-size="9">4 different cells</text>

            <!-- Comparison table -->
            <rect x="20" y="205" width="200" height="65" rx="6" fill="rgba(78,205,196,0.08)" stroke="#4ecdc4" stroke-width="1"/>
            <text x="120" y="220" text-anchor="middle" fill="#4ecdc4" font-size="9">✓ 1 division</text>
            <text x="120" y="234" text-anchor="middle" fill="#4ecdc4" font-size="9">✓ Body cells (growth/repair)</text>
            <text x="120" y="248" text-anchor="middle" fill="#4ecdc4" font-size="9">✓ No crossing over</text>
            <text x="120" y="262" text-anchor="middle" fill="#4ecdc4" font-size="9">✓ Genetically identical</text>

            <rect x="220" y="205" width="200" height="65" rx="6" fill="rgba(255,107,107,0.08)" stroke="#ff6b6b" stroke-width="1"/>
            <text x="320" y="220" text-anchor="middle" fill="#ff6b6b" font-size="9">✓ 2 divisions</text>
            <text x="320" y="234" text-anchor="middle" fill="#ff6b6b" font-size="9">✓ Gonads (gamete production)</text>
            <text x="320" y="248" text-anchor="middle" fill="#ff6b6b" font-size="9">✓ Crossing over in prophase I</text>
            <text x="320" y="262" text-anchor="middle" fill="#ff6b6b" font-size="9">✓ Genetically unique</text>
        </svg>
    </div>`
};

// ============================================================
// INJECT DIAGRAMS INTO SECTIONS
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    const inject = (sectionId, diagramKey, position = "afterbegin") => {
        const section = document.getElementById(sectionId);
        if (section && diagrams[diagramKey]) {
            const concepts = section.querySelectorAll(".key-concept");
            const target = concepts.length > 0 ? concepts[concepts.length - 1] : section;
            target.insertAdjacentHTML("afterend", diagrams[diagramKey]);
        }
    };

    // DNA sections
    inject("dna-structure", "nucleotide");
    inject("dna-bonding", "dnaLadder");
    inject("dna-replication", "replication");

    // Meiosis sections
    inject("mei-intro", "meiosisOverview");
    inject("mei-1", "crossingOver");
    inject("mei-compare", "mitosisVsMeiosis");
});
