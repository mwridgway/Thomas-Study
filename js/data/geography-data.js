// ============================================================
// FLASHCARD DATA
// ============================================================
const flashcards = [
    // --- Mid-Latitude Cyclones ---
    {
        id: 1, unit: "mlc",
        q: "Where do mid-latitude cyclones form? (latitude range and specific location)",
        a: "In the mid-latitudes (30°–60° N and S of the equator), at the polar front where warm westerly winds and cold polar easterly winds converge at the sub-polar low pressure."
    },
    {
        id: 2, unit: "mlc",
        q: "What is cyclogenesis?",
        a: "The development or strengthening of cyclonic circulation in the atmosphere."
    },
    {
        id: 3, unit: "mlc",
        q: "In what 'families' do mid-latitude cyclones occur, and how far apart are they?",
        a: "They occur in families of 3 to 5, following one after each other, two to eight days apart. The cold front of an older depression is joined to the warm front of a younger depression."
    },
    {
        id: 4, unit: "mlc",
        q: "Describe the path of mid-latitude cyclones.",
        a: "They travel from west to east in the belt of the westerly winds. They initially move towards the equator, then curve back towards the poles due to the faster-moving cold front and deflection by the subtropical high pressures."
    },
    {
        id: 5, unit: "mlc",
        q: "List the 4 conditions necessary for the formation of a mid-latitude cyclone.",
        a: "1. Air from 2 large HP belts moves towards each other at the polar front.\n2. Warm subtropical HP contains warm, moist air; Polar HP contains cold, dry air.\n3. Air flow converges from opposite directions on the two sides of the polar front.\n4. Disturbances at the polar front create an unstable situation, creating a LP."
    },
    {
        id: 6, unit: "mlc",
        q: "In which direction does air rotate around a mid-latitude cyclone in the Southern Hemisphere?",
        a: "Clockwise in the Southern Hemisphere (and anti-clockwise in the Northern Hemisphere) — around the centre of a low pressure."
    },
    {
        id: 7, unit: "mlc",
        q: "Describe the Initial Stage of a mid-latitude cyclone.",
        a: "Warm, moist subtropical air meets cold, drier polar air along a stationary polar front. No movement across the front. Air masses don't mix but move parallel to each other, retaining their own density and characteristics."
    },
    {
        id: 8, unit: "mlc",
        q: "What causes the disturbance in the Wave/Development Stage?",
        a: "A disturbance at the polar front caused by: acceleration in movement of one air mass, disturbances in the westerly wind belt, uneven surfaces/coastline shape, or differences between land and sea temperatures. This causes a local decrease in air pressure."
    },
    {
        id: 9, unit: "mlc",
        q: "Describe the Mature/Warm Sector Stage.",
        a: "Cold front develops west of LP centre (cold air moves north). Warm front develops east of LP (warm air pushed south). Wind blows clockwise around and into the LP (SH). A definite warm sector depression develops. Isobars bend across the fronts. Rain along cold front due to strong uplift."
    },
    {
        id: 10, unit: "mlc",
        q: "Why does the cold front overtake the warm front in the Occluded Stage?",
        a: "The cold front moves faster than the warm front because the warm front is preceded (slowed down) by the cold air mass ahead of it. The warm sector narrows as the cold front catches up."
    },
    {
        id: 11, unit: "mlc",
        q: "Describe the Dissipation Stage of a mid-latitude cyclone.",
        a: "Cold air completely isolates warm air from the ground. All warm air is lifted high above ground. Isobars become more even as the LP degenerates. Upper level winds break apart the cloud cover. Rainfall decreases and eventually stops."
    },
    {
        id: 12, unit: "mlc",
        q: "In the Southern Hemisphere, how do wind directions change as a mid-latitude cyclone passes? (backing)",
        a: "Winds 'back' — they change in an anticlockwise pattern: NE (before warm front) → NW (warm sector) → SW (after cold front)."
    },
    {
        id: 13, unit: "mlc",
        q: "Compare the weather conditions at the cold front vs. the warm front.",
        a: "Cold front: strong winds, temp decrease, cumulonimbus clouds, heavy rainfall, poor visibility, pressure drop then rapid rise.\nWarm front: temp increase, nimbostratus clouds, light rain (drizzle), visibility increases, decrease in air pressure."
    },
    {
        id: 14, unit: "mlc",
        q: "What weather conditions are experienced in the warm sector?",
        a: "Pressure continues to decrease, warm less dense air, stratocumulus and altostratus clouds, northwesterly wind."
    },
    {
        id: 15, unit: "mlc",
        q: "Explain the difference between cold front occlusion and warm front occlusion.",
        a: "Cold front occlusion: air behind cold front is colder/denser than air ahead of warm front — cold front stays on ground and lifts the warm front.\nWarm front occlusion: air behind cold front is warmer/lighter than air ahead of warm front — warm front stays on ground and cold front rises."
    },
    {
        id: 16, unit: "mlc",
        q: "Name 4 impacts of mid-latitude cyclones on human activities in South Africa.",
        a: "1. Winter rainfall in Western Cape — good for crops and wine industry.\n2. Snow on Cape Fold Mountains — danger to livestock.\n3. Berg winds ahead of cold front — fire risk.\n4. Gale-force SW winds behind cold front — danger to ships.\nAlso: heavy rain causing poor visibility, mountain pass closures, cold conditions causing power cuts."
    },
    {
        id: 17, unit: "mlc",
        q: "What type of clouds are associated with (a) the cold front and (b) the warm front of a mid-latitude cyclone?",
        a: "(a) Cold front: Cumulonimbus clouds (tall, towering — heavy rain)\n(b) Warm front: Nimbostratus clouds (layered — light drizzle)"
    },
    {
        id: 18, unit: "mlc",
        q: "In which direction does a mid-latitude cyclone system move?",
        a: "From west to east (carried by the westerly winds)."
    },

    // --- Tropical Cyclones ---
    {
        id: 19, unit: "tc",
        q: "Define a tropical cyclone.",
        a: "A cell of very low pressure with a steep pressure gradient, strong winds and heavy rain."
    },
    {
        id: 20, unit: "tc",
        q: "What are the different names for tropical cyclones around the world?",
        a: "Hurricanes — Atlantic Ocean (West Indies, Gulf of Mexico, USA coast)\nWilly-willies — Southern Pacific (Eastern Australia)\nTyphoons — Northern Pacific (China, Japan, Philippines)\nTropical cyclones — Indian Ocean (East coast of Southern Africa, Madagascar)"
    },
    {
        id: 21, unit: "tc",
        q: "List 5 general characteristics of tropical cyclones.",
        a: "1. Intense low pressure systems\n2. Originate over warm oceans (≥26°C) in late summer/autumn\n3. Need Coriolis force — develop between 5°–20° N/S\n4. Wind speeds 200–300 km/h\n5. Diameter ~500 km, eye diameter 30–50 km, circular isobars, cloud wall height 15 km"
    },
    {
        id: 22, unit: "tc",
        q: "Why can't tropical cyclones form within 5° of the equator?",
        a: "Because the Coriolis force is zero at the equator. The Coriolis force is needed to create the spinning/rotation (vortex) of the cyclone."
    },
    {
        id: 23, unit: "tc",
        q: "Describe the path of tropical cyclones.",
        a: "Develop over tropical oceans ±5° N/S of equator. Move east to west (carried by tropical easterly winds) — affect east coasts. Curve left in SH, right in NH. Picked up by westerlies and travel polewards to 25°–30°. Dissipate over cooler latitudes or land."
    },
    {
        id: 24, unit: "tc",
        q: "List all 7 factors necessary for tropical cyclone formation and their influence.",
        a: "1. Sea temp ≥26°C — heat for convection\n2. High humidity — latent heat released in condensation\n3. Unstable air — convection possible\n4. Little surface friction — ocean allows free air movement\n5. Light variable winds — strong winds inhibit vortex development\n6. Low air pressure/closed isobars — <950 hPa enhances convergence\n7. Upper air divergence — stimulates circulation and vortex formation"
    },
    {
        id: 25, unit: "tc",
        q: "What is the energy source of a tropical cyclone?",
        a: "The large amount of latent heat released as rising warm, moist tropical air condenses."
    },
    {
        id: 26, unit: "tc",
        q: "Describe the Formative Stage of a tropical cyclone.",
        a: "LP develops over sea. Strong convection. Pressure still above 1000 hPa but falling rapidly. High sea/air temps. Cirrus and cumulus clouds, light rain. Winds reach gale force in active quadrant. Eye begins to form. Small area influenced (~20 km from eye)."
    },
    {
        id: 27, unit: "tc",
        q: "Describe the Immature Stage of a tropical cyclone.",
        a: "Eye pressure falls below 1000 hPa. Vortex contracts and storm intensifies. Spiral cloud bands form. Cumulonimbus clouds surround eye (up to 12 km high). Hurricane wind speeds within 50 km of eye. Larger area influenced (~600 km diameter)."
    },
    {
        id: 28, unit: "tc",
        q: "Describe the Mature Stage of a tropical cyclone.",
        a: "Eye pressure reaches lowest point (900–940 hPa). Air sinks in centre and warms adiabatically. Heavy rain from Cb within 160 km of eye. Hurricane winds (117 km/h) extend to 300 km from eye. Worst weather in active quadrant. Can last up to 7 days."
    },
    {
        id: 29, unit: "tc",
        q: "What causes a tropical cyclone to degenerate?",
        a: "Pressure in eye rises when land is reached (friction weakens Coriolis force). Temperatures decrease over cooler latitudes. Less moisture fed into the system. Winds decrease. Upper air divergence stops. Area affected shrinks."
    },
    {
        id: 30, unit: "tc",
        q: "Describe the weather as the first vortex of a tropical cyclone approaches.",
        a: "Temp and humidity are high. Pressure starts to fall. Cirrus clouds appear, becoming cumulus and cumulonimbus. Wind increases to hurricane force. Torrential rain, hail, thunder, lightning. Temp drops as pressure falls."
    },
    {
        id: 31, unit: "tc",
        q: "What happens when the eye of a tropical cyclone passes overhead?",
        a: "Temp increases slightly, wind suddenly drops. Pressure reaches its lowest point. Scattered clouds, sunny, no rain. These calm conditions prevail for up to 2 hours."
    },
    {
        id: 32, unit: "tc",
        q: "What is wind reversal in a tropical cyclone?",
        a: "The wind blows from the opposite direction as the second vortex passes. In the SH: first vortex wind is S, second vortex wind is N. In the NH: first vortex wind is N, second vortex wind is S."
    },
    {
        id: 33, unit: "tc",
        q: "How do you identify a tropical cyclone on a synoptic map?",
        a: "1. A low-pressure cell with circular isobars between 5° and 30° N/S of equator.\n2. A tropical cyclone symbol in the eye.\n3. The name of the tropical cyclone written next to the system.\n4. The date on the map in late summer or early autumn."
    },
    {
        id: 34, unit: "tc",
        q: "Compare the impact of tropical cyclones on developed vs. developing areas.",
        a: "Developed: more financial losses (reduced trade, insurance claims); more resources for warnings, evacuations, relief.\nDeveloping: more basic problems (loss of homes, insufficient food/water); greater loss of life due to lack of financial, technological and communication resources."
    },
    {
        id: 35, unit: "tc",
        q: "List 5 impacts of tropical cyclones on human activities and the environment.",
        a: "1. Flooding of rivers — damage to roads, bridges, homes\n2. High sea level/waves — flooding of low-lying coastal areas\n3. Strong winds damage crops, livestock, houses, infrastructure\n4. Landslides destroy settlements and infrastructure\n5. Communication lines destroyed\nAlso: tourism affected, fertile soil washed away, habitat destruction, disease."
    },
    {
        id: 36, unit: "tc",
        q: "List 5 strategies to prepare for and manage the effects of tropical cyclones.",
        a: "1. Avoid crossing flooded rivers; evacuate near floodplains\n2. Move boats to port, moor above high-water mark\n3. Monitor via weather bureaus, aircraft, satellites\n4. Warn inhabitants; move to concrete storm shelters\n5. Long-term: build sea walls, flood barriers, better land-use planning, conserve wetlands/coastal vegetation"
    },
    {
        id: 37, unit: "tc",
        q: "What are the dimensions of a typical tropical cyclone?",
        a: "Diameter of storm: ~500 km. Diameter of eye: 30–50 km. Pressure in eye: ~940 hPa. Wind speeds: 200–300 km/h. Cloud wall height: ~15 km. Circular isobars."
    },
    {
        id: 38, unit: "tc",
        q: "Why do strong directional winds inhibit tropical cyclone formation?",
        a: "Strong directional winds inhibit the development of a vortex because they reduce water surface temperature and the production of water vapour."
    },
    {
        id: 39, unit: "mlc",
        q: "What happens to rain in BOTH types of occlusion (cold front and warm front)?",
        a: "In both cases, the warm air in the warm sector is forced to rise. As it cools, condensation occurs and rain falls from nimbostratus clouds."
    },
    {
        id: 40, unit: "tc",
        q: "In which direction does air rotate around a tropical cyclone in the Southern Hemisphere?",
        a: "Clockwise (same as mid-latitude cyclones — both are low-pressure systems). In the Northern Hemisphere, it's anti-clockwise."
    }
];


// ============================================================
// QUIZ DATA
// ============================================================
const quizQuestions = [
    // --- Mid-Latitude Cyclones ---
    {
        id: 1, unit: "mlc", type: "mc",
        question: "At which latitude range do mid-latitude cyclones typically form?",
        options: ["0°–15° N and S", "15°–30° N and S", "30°–60° N and S", "60°–90° N and S"],
        correct: 2,
        explanation: "Mid-latitude cyclones form between 30° and 60° north and south of the equator, at the polar front."
    },
    {
        id: 2, unit: "mlc", type: "mc",
        question: "What is the term for the development or strengthening of cyclonic circulation in the atmosphere?",
        options: ["Orogenesis", "Cyclogenesis", "Frontogenesis", "Adiabatic warming"],
        correct: 1,
        explanation: "Cyclogenesis refers specifically to the development or strengthening of cyclonic (low-pressure) circulation."
    },
    {
        id: 3, unit: "mlc", type: "mc",
        question: "In the Southern Hemisphere, in which direction does air circulate around a mid-latitude cyclone?",
        options: ["Anti-clockwise", "Clockwise", "From north to south only", "No consistent direction"],
        correct: 1,
        explanation: "In the Southern Hemisphere, air circulates clockwise around a low-pressure system due to the Coriolis effect."
    },
    {
        id: 4, unit: "mlc", type: "mc",
        question: "During the Initial Stage, what happens at the polar front?",
        options: [
            "Air masses mix rapidly and form clouds",
            "A tongue of warm air is uplifted by cold air",
            "Air masses move parallel to each other without mixing",
            "The cold front overtakes the warm front"
        ],
        correct: 2,
        explanation: "In the Initial Stage, the two air masses move parallel to each other along the stationary polar front without mixing, retaining their own density and characteristics."
    },
    {
        id: 5, unit: "mlc", type: "mc",
        question: "Why does the cold front move faster than the warm front?",
        options: [
            "Cold air is lighter and moves faster",
            "The warm front is preceded/slowed by cold air ahead of it",
            "The Coriolis force accelerates cold fronts only",
            "Warm air sinks faster than cold air rises"
        ],
        correct: 1,
        explanation: "The warm front is slowed because it is preceded by the cold, dense air mass ahead of it. The cold front, being more forceful, catches up and eventually overtakes the warm front."
    },
    {
        id: 6, unit: "mlc", type: "mc",
        question: "Which clouds are associated with the cold front of a mid-latitude cyclone?",
        options: ["Cirrus clouds", "Stratocumulus clouds", "Nimbostratus clouds", "Cumulonimbus clouds"],
        correct: 3,
        explanation: "Cumulonimbus clouds form at the cold front due to the rapid, forced uplift of warm air, producing heavy rainfall."
    },
    {
        id: 7, unit: "mlc", type: "mc",
        question: "In the Southern Hemisphere, winds 'back' as a mid-latitude cyclone passes. What is the sequence?",
        options: [
            "SW → NW → NE",
            "NE → NW → SW",
            "SE → SW → NE",
            "NW → NE → SW"
        ],
        correct: 1,
        explanation: "In the SH, winds back (change anticlockwise): NE (before warm front) → NW (warm sector) → SW (after cold front)."
    },
    {
        id: 8, unit: "mlc", type: "mc",
        question: "In a cold front occlusion, what happens?",
        options: [
            "The warm front stays on the ground and the cold front rises",
            "Both fronts remain on the ground",
            "The cold front stays on the ground and lifts the warm front",
            "The cold front dissipates completely"
        ],
        correct: 2,
        explanation: "In a cold front occlusion, the air behind the cold front is colder/denser than the air ahead of the warm front, so the cold front remains in contact with the ground and lifts the warm front."
    },
    {
        id: 9, unit: "mlc", type: "mc",
        question: "Which is NOT a factor that can cause disturbance at the polar front?",
        options: [
            "Differences between land and sea temperatures",
            "Disturbances in the westerly wind belt",
            "Sea surface temperature exceeding 26°C",
            "Uneven surfaces or shape of coastline"
        ],
        correct: 2,
        explanation: "Sea surface temperature of at least 26°C is a factor for TROPICAL cyclone formation, not mid-latitude cyclones."
    },
    {
        id: 10, unit: "mlc", type: "mc",
        question: "During the Dissipation Stage, what happens to the warm air?",
        options: [
            "It sinks to the ground and warms adiabatically",
            "It is completely isolated from the ground and lifted high above",
            "It mixes with cold air and forms a uniform air mass",
            "It flows back towards the equator"
        ],
        correct: 1,
        explanation: "In the Dissipation Stage, cold air completely isolates the warm air from the ground. All warm air has been lifted high above ground level."
    },
    {
        id: 11, unit: "mlc", type: "mc",
        question: "Berg winds ahead of a cold front in South Africa can lead to which hazard?",
        options: ["Flooding", "Snow on mountain passes", "Fires", "Storm surges"],
        correct: 2,
        explanation: "Berg winds create hot, dry conditions ahead of the cold front, significantly increasing fire risk."
    },
    {
        id: 12, unit: "mlc", type: "mc",
        question: "Mid-latitude cyclones travel in which general direction?",
        options: ["East to west", "West to east", "North to south", "South to north"],
        correct: 1,
        explanation: "Mid-latitude cyclones are carried from west to east by the prevailing westerly winds."
    },
    {
        id: 13, unit: "mlc", type: "mc",
        question: "What type of precipitation is associated with the warm front?",
        options: ["Heavy rainfall", "Hail", "Light rain (drizzle)", "Snow"],
        correct: 2,
        explanation: "The warm front produces light rain or drizzle from nimbostratus clouds, as the warm air rises gradually over the cold air ahead."
    },

    // --- Tropical Cyclones ---
    {
        id: 14, unit: "tc", type: "mc",
        question: "What is the minimum sea surface temperature required for tropical cyclone formation?",
        options: ["20°C", "22°C", "24°C", "26°C"],
        correct: 3,
        explanation: "A sea surface temperature of at least 26°C is needed to provide the heat energy for convection that drives tropical cyclone formation."
    },
    {
        id: 15, unit: "tc", type: "mc",
        question: "Why can't tropical cyclones form within 5° of the equator?",
        options: [
            "Sea temperatures are too low",
            "There is too much surface friction",
            "The Coriolis force is zero at the equator",
            "Wind speeds are too high"
        ],
        correct: 2,
        explanation: "The Coriolis force is needed to create the spinning vortex. It is zero at the equator and too weak within 5° of the equator."
    },
    {
        id: 16, unit: "tc", type: "mc",
        question: "What are tropical cyclones called in the Northern Pacific Ocean?",
        options: ["Hurricanes", "Willy-willies", "Typhoons", "Cyclones"],
        correct: 2,
        explanation: "In the Northern Pacific (China, Japan, Philippines), tropical cyclones are called Typhoons."
    },
    {
        id: 17, unit: "tc", type: "mc",
        question: "What is the approximate diameter of a tropical cyclone's eye?",
        options: ["5–10 km", "30–50 km", "100–150 km", "200–300 km"],
        correct: 1,
        explanation: "The eye of a tropical cyclone is typically 30–50 km in diameter, with calm conditions inside."
    },
    {
        id: 18, unit: "tc", type: "mc",
        question: "What is the energy source of a tropical cyclone?",
        options: [
            "Solar radiation heating the land",
            "Friction between air masses",
            "Latent heat released as warm moist air condenses",
            "Geothermal energy from the ocean floor"
        ],
        correct: 2,
        explanation: "The energy comes from the large amount of latent heat released when rising warm, moist tropical air condenses."
    },
    {
        id: 19, unit: "tc", type: "mc",
        question: "During the Mature Stage, what happens to air in the centre (eye) of the cyclone?",
        options: [
            "Air rises rapidly and cools",
            "Air sinks and warms adiabatically",
            "Air moves horizontally outward",
            "Air condenses and forms cumulonimbus"
        ],
        correct: 1,
        explanation: "In the Mature Stage, air sinks into the centre of the storm and warms adiabatically, creating the calm, clear conditions in the eye."
    },
    {
        id: 20, unit: "tc", type: "mc",
        question: "When the eye of a tropical cyclone passes overhead, conditions are:",
        options: [
            "Windy with heavy rain",
            "Calm, scattered clouds, sunny, no rain — lasting up to 2 hours",
            "Extremely cold with hail",
            "Moderate wind with continuous drizzle"
        ],
        correct: 1,
        explanation: "When the eye passes, there is a brief calm period with scattered clouds, sunshine and no rain, lasting up to 2 hours before the second vortex hits."
    },
    {
        id: 21, unit: "tc", type: "mc",
        question: "In the Southern Hemisphere, what is the wind direction during the first and second vortex?",
        options: [
            "First: N, Second: S",
            "First: S, Second: N",
            "First: E, Second: W",
            "First: W, Second: E"
        ],
        correct: 1,
        explanation: "In the SH, the first vortex brings southerly wind, and the second vortex brings northerly wind (wind reversal)."
    },
    {
        id: 22, unit: "tc", type: "mc",
        question: "Which stage of a tropical cyclone has the lowest air pressure in the eye?",
        options: ["Formative", "Immature", "Mature", "Degenerating"],
        correct: 2,
        explanation: "During the Mature Stage, air pressure in the eye reaches its lowest point (about 900–940 hPa or lower)."
    },
    {
        id: 23, unit: "tc", type: "mc",
        question: "What causes a tropical cyclone to degenerate?",
        options: [
            "Increased solar radiation",
            "Moving over land (friction) and cooler latitudes",
            "Increased upper air divergence",
            "Rising sea surface temperatures"
        ],
        correct: 1,
        explanation: "When a tropical cyclone moves over land, friction weakens the Coriolis force and cuts off the warm ocean moisture supply. Moving into cooler latitudes also starves it of energy."
    },
    {
        id: 24, unit: "tc", type: "mc",
        question: "How do the impacts differ between developed and developing areas?",
        options: [
            "Developed areas have more deaths; developing areas have more financial loss",
            "Developed areas suffer more financial loss; developing areas have greater loss of life",
            "Both suffer equally in all respects",
            "Developing areas have better warning systems"
        ],
        correct: 1,
        explanation: "Developed areas suffer more financial losses (trade, insurance). Developing areas suffer greater loss of life due to lack of financial, technological and communication resources for warnings and relief."
    },
    {
        id: 25, unit: "tc", type: "mc",
        question: "Which long-term strategy helps reduce the impact of tropical cyclones on coastlines?",
        options: [
            "Building more homes on the coast",
            "Erecting concrete sea walls and conserving wetlands/coastal vegetation",
            "Increasing fishing activity",
            "Removing sand dunes"
        ],
        correct: 1,
        explanation: "Concrete sea walls and flood barriers protect against storm surges. Conservation of wetlands and coastal vegetation provides natural buffers."
    },
    {
        id: 26, unit: "tc", type: "mc",
        question: "What type of clouds surround the eye during the Immature Stage?",
        options: ["Cirrus", "Stratus", "Cumulonimbus", "Altostratus"],
        correct: 2,
        explanation: "During the Immature Stage, cumulonimbus clouds surround the eye, reaching heights of up to 12 km."
    },
    {
        id: 27, unit: "tc", type: "mc",
        question: "Tropical cyclones move in which direction initially?",
        options: ["West to east", "East to west", "North to south", "South to north"],
        correct: 1,
        explanation: "Tropical cyclones initially move from east to west, carried by the tropical easterly winds. This is why they affect the east coasts of continents."
    },
    {
        id: 28, unit: "tc", type: "mc",
        question: "Why do light variable winds favour tropical cyclone formation?",
        options: [
            "They increase surface friction",
            "They cool the ocean surface",
            "Strong winds would inhibit vortex development by reducing water surface temp and water vapour production",
            "Light winds increase the Coriolis force"
        ],
        correct: 2,
        explanation: "Strong directional winds inhibit vortex development because they reduce water surface temperature and the production of water vapour, cutting off the cyclone's energy supply."
    },

    // --- Comparison / Higher-order questions ---
    {
        id: 29, unit: "mlc", type: "mc",
        question: "Which statement correctly distinguishes mid-latitude cyclones from tropical cyclones?",
        options: [
            "Mid-latitude cyclones have an eye; tropical cyclones do not",
            "Tropical cyclones form at the polar front; mid-latitude cyclones form over warm oceans",
            "Mid-latitude cyclones form at the polar front between warm and cold air masses; tropical cyclones form over warm oceans (≥26°C)",
            "Both form at the same latitudes but in different seasons"
        ],
        correct: 2,
        explanation: "Mid-latitude cyclones form at the polar front (30°–60°) where contrasting air masses meet. Tropical cyclones form over warm oceans (≥26°C) between 5°–20° N/S."
    },
    {
        id: 30, unit: "tc", type: "mc",
        question: "The Mature Stage of a tropical cyclone can last up to:",
        options: ["2 hours", "24 hours", "3 days", "7 days"],
        correct: 3,
        explanation: "The Mature Stage, with the worst weather in the active quadrant, can last up to 7 days."
    }
];


// ============================================================
// FEYNMAN TOPICS
// ============================================================
const feynmanTopics = [
    {
        id: "f1",
        title: "Formation of Mid-Latitude Cyclones",
        unit: "mlc",
        keyPoints: [
            "Form at the polar front (30°–60° N/S)",
            "Warm westerly winds meet cold polar easterly winds",
            "Sub-tropical HP has warm moist air; Polar HP has cold dry air",
            "Air converges from opposite directions at the polar front",
            "A disturbance creates a low-pressure system",
            "Air flows into and circulates around the LP"
        ]
    },
    {
        id: "f2",
        title: "The 5 Stages of Mid-Latitude Cyclone Development",
        unit: "mlc",
        keyPoints: [
            "Initial Stage: air masses parallel at stationary polar front, no mixing",
            "Wave Stage: disturbance causes LP to form, wave-like appearance",
            "Mature/Warm Sector: cold front (west) and warm front (east) develop, warm sector between them",
            "Occluded Stage: cold front overtakes warm front (it's faster), warm sector narrows",
            "Dissipation: cold air isolates warm air from ground, LP degenerates, rain stops",
            "Isobars change from parallel → bending → circular → evening out"
        ]
    },
    {
        id: "f3",
        title: "Weather Conditions at Cold Front vs. Warm Front",
        unit: "mlc",
        keyPoints: [
            "Cold front: cumulonimbus clouds, heavy rain, strong winds, temp drop, poor visibility",
            "Warm front: nimbostratus clouds, light drizzle, temp increase, visibility increases",
            "Warm sector: stratocumulus/altostratus, pressure continues to decrease, NW wind",
            "Cold front: rapid pressure rise after passing, scattered showers",
            "Wind backs in SH: NE → NW → SW",
            "System moves west to east"
        ]
    },
    {
        id: "f4",
        title: "Cold Front Occlusion vs. Warm Front Occlusion",
        unit: "mlc",
        keyPoints: [
            "Occlusion occurs when cold front catches up to warm front",
            "Cold front occlusion: air behind cold front is colder/denser than air ahead of warm front",
            "In cold front occlusion: cold front stays on ground, lifts the warm front",
            "Warm front occlusion: air behind cold front is warmer/lighter than air ahead of warm front",
            "In warm front occlusion: warm front stays on ground, cold front rises",
            "Both cases: warm air forced to rise → condensation → rain from nimbostratus"
        ]
    },
    {
        id: "f5",
        title: "How Tropical Cyclones Form",
        unit: "tc",
        keyPoints: [
            "Need sea surface temp ≥26°C for convection",
            "Form between 5°–20° N/S (need Coriolis force — zero at equator)",
            "High humidity provides latent heat when condensation occurs",
            "Unstable air allows convection",
            "Little surface friction (ocean) allows free air movement",
            "Light variable winds — strong winds would inhibit vortex",
            "Low pressure (<950 hPa) and upper air divergence needed"
        ]
    },
    {
        id: "f6",
        title: "Stages of Tropical Cyclone Development",
        unit: "tc",
        keyPoints: [
            "Formative: LP over sea, pressure above 1000 hPa but falling, cirrus/cumulus clouds, eye starts forming",
            "Immature: pressure below 1000 hPa, Cb clouds surround eye (12 km), spiral bands, hurricane winds within 50 km",
            "Mature: lowest pressure (900–940 hPa), air sinks in eye (adiabatic warming), worst weather, lasts up to 7 days",
            "Degenerating: reaches land (friction), cooler latitudes, less moisture, winds decrease, area shrinks",
            "Storm diameter ~500 km, eye 30–50 km, wind speeds 200–300 km/h"
        ]
    },
    {
        id: "f7",
        title: "Weather Experienced as a Tropical Cyclone Passes",
        unit: "tc",
        keyPoints: [
            "First vortex: rising temp/humidity, falling pressure, cirrus→cumulus→Cb clouds, hurricane winds, torrential rain",
            "Eye: calm, sunny, scattered clouds, lowest pressure, lasts up to 2 hours",
            "Second vortex: similar to first but winds more destructive, wind direction reverses",
            "SH: first vortex wind S, second vortex wind N",
            "NH: first vortex wind N, second vortex wind S"
        ]
    },
    {
        id: "f8",
        title: "Impact of Mid-Latitude Cyclones on South Africa",
        unit: "mlc",
        keyPoints: [
            "Western Cape gets winter rainfall — good for crops and wine industry",
            "Frontal rain replenishes dams",
            "Snow on Cape Fold Mountains — dangerous for livestock",
            "Cold front crossing plateau → very cold conditions → power cuts",
            "Berg winds ahead of cold front → hot, dry → fire risk",
            "Gale-force SW winds behind cold front → danger to ships",
            "Heavy rain → poor visibility; mountain passes closed by snow"
        ]
    },
    {
        id: "f9",
        title: "Impact and Management of Tropical Cyclones",
        unit: "tc",
        keyPoints: [
            "Heavy rain → flooding of rivers → damage to roads, bridges, homes",
            "Storm surge → flooding of low-lying coastal areas, coastal erosion",
            "Strong winds damage crops, livestock, houses, infrastructure",
            "Developed areas: more financial loss; developing areas: more deaths",
            "Short-term: evacuate floodplains, move boats, board up windows, storm shelters",
            "Long-term: sea walls, flood barriers, better land-use planning, conserve wetlands",
            "Monitoring via weather bureaus, satellites, reconnaissance aircraft"
        ]
    },
    {
        id: "f10",
        title: "Path of Mid-Latitude vs. Tropical Cyclones",
        unit: "mlc",
        keyPoints: [
            "Mid-latitude: travel west to east (carried by westerlies)",
            "Mid-latitude: initially move towards equator, curve back poleward",
            "Tropical: initially move east to west (carried by tropical easterlies)",
            "Tropical: affect east coasts of continents",
            "Tropical: curve left in SH, right in NH, then picked up by westerlies",
            "Tropical: dissipate over land or cooler latitudes",
            "Mid-latitude: occur in families of 3–5"
        ]
    }
];
