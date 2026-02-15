// ============================================================
// FLASHCARD DATA
// ============================================================
const flashcards = [
    // --- Module 1.1: Computers in Our Everyday Lives ---
    {
        id: 1, unit: "comp",
        q: "What are the three main reasons we use computers?",
        a: "1. Efficiency (saves time, labour, and resources)\n2. Accuracy (produces correct and reliable results)\n3. Reliability (performs consistently without tiring)"
    },
    {
        id: 2, unit: "comp",
        q: "How do computers improve efficiency? Give three ways with examples.",
        a: "1. Save time — calculations done in seconds vs. hours by hand\n2. Save labour — one person can do work that previously needed many (e.g. automated payroll)\n3. Save resources — paperless offices reduce paper/ink usage; email replaces posted letters"
    },
    {
        id: 3, unit: "comp",
        q: "Define accuracy in the context of computers.",
        a: "Accuracy means the computer produces correct and error-free results. However, accuracy depends on two requirements: quality programs (well-written, bug-free software) AND quality data (correct input data). GIGO — Garbage In, Garbage Out."
    },
    {
        id: 4, unit: "comp",
        q: "What does GIGO stand for and what does it mean?",
        a: "GIGO stands for Garbage In, Garbage Out. It means that if incorrect or poor-quality data is entered into a computer, the output/results will also be incorrect or poor-quality, regardless of how good the program is."
    },
    {
        id: 5, unit: "comp",
        q: "Define reliability in the context of computers.",
        a: "Reliability means the computer can work continuously without getting tired, bored, or needing breaks. It performs the same task repeatedly with consistent results, 24 hours a day, 7 days a week."
    },
    {
        id: 6, unit: "comp",
        q: "List four communication benefits of ICT.",
        a: "1. Eliminates barriers of time and distance — communicate instantly worldwide\n2. Share information globally — access data from anywhere via the internet\n3. Save costs with VoIP — make cheap/free calls over the internet\n4. Social networking — connect with people, share ideas, collaborate online"
    },
    {
        id: 7, unit: "comp",
        q: "What is VoIP? Give an example.",
        a: "VoIP stands for Voice over Internet Protocol. It is a technology that allows voice calls to be made over the internet instead of traditional telephone lines, making calls cheaper or free. Examples: Skype, WhatsApp calls, Microsoft Teams."
    },
    {
        id: 8, unit: "comp",
        q: "Name two types of non-portable computers and describe each.",
        a: "1. Desktop computer — a personal computer designed to stay in one place on a desk; has separate monitor, keyboard, mouse, and system unit; more powerful and cheaper than laptops\n2. Server — a powerful computer that provides services, data, and resources to other computers (clients) on a network; runs 24/7; often kept in a server room"
    },
    {
        id: 9, unit: "comp",
        q: "What is an entry-level computer?",
        a: "An entry-level computer is a basic, affordable desktop computer designed for simple everyday tasks such as word processing, browsing the internet, and email. It has lower specifications (less RAM, slower processor, smaller storage) but is sufficient for home and basic office use."
    },
    {
        id: 10, unit: "comp",
        q: "List five types of portable computers.",
        a: "1. Laptop/Notebook — portable computer with built-in screen, keyboard, and battery\n2. Tablet — touchscreen device, no physical keyboard, lightweight\n3. Hybrid/Convertible — combines laptop and tablet (detachable or foldable keyboard)\n4. Smartphone — mobile phone with computing capabilities\n5. Phablet — a phone with a larger screen (between smartphone and tablet size)"
    },
    {
        id: 11, unit: "comp",
        q: "What is the difference between always-on devices and devices that need to be switched on?",
        a: "Always-on devices (smartphones, tablets): are always ready to use, receive notifications and calls instantly, use mobile operating systems, typically have longer standby battery life.\nSwitch on/off devices (laptops, desktops): need to boot up before use, take time to start, use full operating systems (Windows/macOS), typically more powerful for complex tasks."
    },
    {
        id: 12, unit: "comp",
        q: "Describe the four categories of computer users.",
        a: "1. Personal/Home user — uses computer for entertainment, social media, email, homework\n2. SOHO (Small Office/Home Office) user — runs a small business; needs basic office software, internet, printer\n3. Power user — requires high-performance computing (e.g. graphic designers, engineers, gamers); needs powerful processor, lots of RAM, dedicated graphics card\n4. Mobile user — works on the go; needs portable devices, wireless connectivity, long battery life"
    },
    {
        id: 13, unit: "comp",
        q: "What does SOHO stand for and what kind of user is a SOHO user?",
        a: "SOHO stands for Small Office/Home Office. A SOHO user runs a small business from home or a small office. They typically need a reliable computer with office software (word processor, spreadsheet, email), a printer, internet access, and possibly basic accounting software."
    },
    {
        id: 14, unit: "comp",
        q: "Define convergence in the context of ICT.",
        a: "Convergence is the combining of several separate technologies, services, or devices into a single device or system. For example, a smartphone is a converged device because it combines a phone, camera, GPS, music player, video recorder, calculator, and internet browser into one device."
    },
    {
        id: 15, unit: "comp",
        q: "List at least six devices/technologies that have converged into a modern smartphone.",
        a: "1. Digital camera\n2. GPS navigation device\n3. Music/MP3 player\n4. Video recorder/player\n5. Telephone\n6. Calculator\n7. Internet browser\n8. Voice recorder\n9. Gaming device\n10. Torch/flashlight"
    },
    {
        id: 16, unit: "comp",
        q: "What is the difference between a laptop and a tablet?",
        a: "Laptop: has a physical keyboard, larger screen, more processing power, runs full OS (Windows/macOS), better for productivity tasks, heavier.\nTablet: touchscreen input (no physical keyboard unless added), lighter and more portable, runs mobile OS (Android/iOS), better for media consumption and casual use, longer battery life."
    },
    {
        id: 17, unit: "comp",
        q: "What is a hybrid/convertible computer?",
        a: "A hybrid or convertible is a portable device that combines the features of a laptop and a tablet. It can be used as a laptop (with keyboard) or as a tablet (by detaching or folding the keyboard). Examples: Microsoft Surface, Lenovo Yoga."
    },
    {
        id: 18, unit: "comp",
        q: "What is a phablet?",
        a: "A phablet is a mobile device with a screen size between that of a smartphone and a tablet (typically 5.5 to 7 inches). It combines the portability of a phone with the larger display of a tablet, making it suitable for media viewing and productivity."
    },
    {
        id: 19, unit: "comp",
        q: "What type of user would need a server? Why?",
        a: "A business or organisation that needs to share files, run applications, host websites, manage email, or provide centralised data storage across a network would need a server. Servers are designed to handle multiple requests from client computers simultaneously and run 24/7."
    },
    {
        id: 20, unit: "comp",
        q: "Give an example of how a power user's computer requirements differ from a personal user's.",
        a: "A power user (e.g. video editor or 3D animator) needs a high-end processor, 32+ GB RAM, a dedicated graphics card, large fast SSD storage, and a high-resolution monitor. A personal user only needs a basic processor, 4-8 GB RAM, integrated graphics, and a standard monitor for tasks like browsing and email."
    },

    // --- Module 1.2: Hardware Devices ---
    {
        id: 21, unit: "hw",
        q: "What are the five stages of the information processing cycle?",
        a: "1. Input — entering data into the computer\n2. Processing — CPU manipulates data according to program instructions\n3. Output — presenting processed information to the user\n4. Storage — saving data/information for later use\n5. Communication — sending/receiving data between devices or over a network"
    },
    {
        id: 22, unit: "hw",
        q: "What two things must be loaded into RAM before processing can take place?",
        a: "1. Software (the program/instructions) must be loaded into RAM\n2. Data (the information to be processed) must be loaded into RAM\nThe CPU then fetches instructions and data from RAM to process them."
    },
    {
        id: 23, unit: "hw",
        q: "What is an algorithm?",
        a: "An algorithm is a step-by-step set of instructions or rules to solve a problem or complete a task. In computing, it is the logical sequence of operations that a program follows to process data and produce the desired output."
    },
    {
        id: 24, unit: "hw",
        q: "What are the advantages and limitations of a keyboard as an input device?",
        a: "Advantages: familiar and easy to use, accurate text input, relatively cheap, shortcut keys speed up tasks.\nLimitations: slow for large amounts of data, requires typing skill, takes up desk space, can cause RSI (Repetitive Strain Injury) with prolonged use."
    },
    {
        id: 25, unit: "hw",
        q: "What is ergonomics and what health risks are associated with poor ergonomics?",
        a: "Ergonomics is the study of designing equipment and workspace to fit the user, minimising discomfort and injury. Poor ergonomics when using computers can cause RSI (Repetitive Strain Injury), Carpal Tunnel Syndrome (pressure on wrist nerve from repetitive typing/mouse use), back and neck pain, and eye strain."
    },
    {
        id: 26, unit: "hw",
        q: "What are RSI and Carpal Tunnel Syndrome?",
        a: "RSI (Repetitive Strain Injury) is damage to muscles, tendons, and nerves caused by repetitive movements (e.g. typing, clicking a mouse).\nCarpal Tunnel Syndrome is a specific type of RSI where the median nerve in the wrist is compressed due to repetitive hand/wrist movements, causing pain, tingling, and numbness in the hand."
    },
    {
        id: 27, unit: "hw",
        q: "What are the advantages and limitations of a mouse as an input device?",
        a: "Advantages: intuitive point-and-click interface, easy to learn, good for graphical tasks, various types available (optical, wireless, ergonomic).\nLimitations: requires a flat surface, not suitable for large amounts of text input, can cause RSI with prolonged use, needs hand-eye coordination."
    },
    {
        id: 28, unit: "hw",
        q: "What are the advantages and limitations of a touch screen?",
        a: "Advantages: intuitive and natural interaction, no extra input devices needed, suitable for public kiosks and mobile devices, acts as BOTH input AND output device.\nLimitations: fingerprints make screen dirty, not accurate for detailed work, can cause arm fatigue, more expensive to repair, limited for typing large documents."
    },
    {
        id: 29, unit: "hw",
        q: "Why is a touch screen considered both an input and an output device?",
        a: "A touch screen is an input device because the user provides input by touching the screen (tapping, swiping, pinching). It is an output device because it displays information (text, images, video) to the user. This makes it a combined input/output device."
    },
    {
        id: 30, unit: "hw",
        q: "What is a scanner and what is OCR software?",
        a: "A scanner is an input device that converts physical documents or images into digital format by capturing a digital image of the document.\nOCR (Optical Character Recognition) software converts the scanned image of text into editable, searchable text that can be processed by a word processor."
    },
    {
        id: 31, unit: "hw",
        q: "How does OCR (Optical Character Recognition) work?",
        a: "1. A document is scanned to create a digital image\n2. OCR software analyses the image and identifies patterns of light and dark\n3. It compares these patterns to known character shapes stored in its database\n4. Each recognised pattern is converted into the corresponding text character\n5. The result is editable text that can be copied, searched, and modified"
    },
    {
        id: 32, unit: "hw",
        q: "How is the resolution of a digital camera measured? How do you calculate megapixels?",
        a: "Digital camera resolution is measured in megapixels (MP). One megapixel = 1 million pixels.\nCalculation: Multiply the horizontal pixels by the vertical pixels.\nExample: A camera with 4000 x 3000 pixels = 12 000 000 pixels = 12 megapixels (MP).\nHigher megapixels = more detail in the image."
    },
    {
        id: 33, unit: "hw",
        q: "What is scanner resolution and what values are typical for print vs. screen?",
        a: "Scanner resolution is measured in dpi (dots per inch) — the number of dots the scanner captures per inch.\n300 dpi is the standard for printing (high quality).\n72 dpi is sufficient for screen/web display.\nHigher dpi = better quality but larger file size."
    },
    {
        id: 34, unit: "hw",
        q: "List and explain six factors that determine monitor display quality.",
        a: "1. Resolution — number of pixels (e.g. 1920 x 1080); more pixels = sharper image\n2. Colour depth — number of bits used per pixel to represent colour (e.g. 24-bit = 16.7 million colours)\n3. Pixel density (PPI) — pixels per inch; higher PPI = sharper, more detailed display\n4. Refresh rate — how many times per second the screen redraws (measured in Hz); higher = smoother motion\n5. Contrast ratio — difference between brightest white and darkest black; higher = better image depth\n6. Aspect ratio — ratio of width to height (e.g. 16:9 widescreen, 4:3 standard)"
    },
    {
        id: 35, unit: "hw",
        q: "What is geotagging?",
        a: "Geotagging is the process of adding geographical location data (GPS coordinates — latitude and longitude) to digital media such as photos, videos, or social media posts. Smartphones and GPS-enabled cameras automatically geotag photos, recording where the photo was taken."
    },
    {
        id: 36, unit: "hw",
        q: "What is the difference between a DSLR camera and a point-and-shoot camera?",
        a: "DSLR (Digital Single-Lens Reflex): interchangeable lenses, larger image sensor, manual controls, higher image quality, bulkier and more expensive, used by professionals.\nPoint-and-shoot: fixed lens, smaller sensor, automatic settings, compact and lightweight, more affordable, used by casual photographers."
    },
    {
        id: 37, unit: "hw",
        q: "What are the uses and limitations of a webcam?",
        a: "Uses: video conferencing, online meetings, live streaming, video calls (Skype/Zoom), security/surveillance.\nLimitations: lower image quality compared to digital cameras, dependent on lighting conditions, fixed position (unless external), limited zoom, privacy risk if hacked."
    },
    {
        id: 38, unit: "hw",
        q: "Compare laser, inkjet, and dot matrix printers.",
        a: "Laser: uses toner and heat, fast, high quality, expensive to buy but cheap per page, best for high-volume text printing.\nInkjet: uses liquid ink cartridges, good colour/photo printing, cheaper to buy but expensive per page, slower than laser, ink can smudge.\nDot matrix (impact): uses pins striking an ink ribbon, noisy, low quality, slow, but can print carbon copies (multi-part forms) — unique advantage."
    },
    {
        id: 39, unit: "hw",
        q: "What is the unique advantage of a dot matrix printer over laser and inkjet printers?",
        a: "A dot matrix printer can print carbon copies (multi-part forms/duplicate copies) because it is an impact printer — the pins physically strike through multiple layers of paper. Laser and inkjet printers cannot do this because they are non-impact printers."
    },
    {
        id: 40, unit: "hw",
        q: "Define keylogger, spyware, Trojan, and malware.",
        a: "Keylogger: software or hardware that secretly records every keystroke a user types, often used to steal passwords and personal information.\nSpyware: software that secretly monitors and collects user activity and personal information without consent.\nTrojan: malicious software disguised as legitimate software; once installed, it allows unauthorised access to the computer.\nMalware: a general term for any malicious software designed to harm, exploit, or damage a computer system (includes viruses, worms, spyware, Trojans, ransomware)."
    }
];


// ============================================================
// QUIZ DATA
// ============================================================
const quizQuestions = [
    // --- Module 1.1: Computers in Our Everyday Lives ---
    {
        id: 1, unit: "comp", type: "mc",
        question: "Which of the following is NOT one of the three main reasons we use computers?",
        options: ["Efficiency", "Accuracy", "Entertainment", "Reliability"],
        correct: 2,
        explanation: "The three main reasons we use computers are efficiency, accuracy, and reliability. Entertainment is a use of computers, but it is not one of the three main reasons listed in the curriculum."
    },
    {
        id: 2, unit: "comp", type: "mc",
        question: "What does GIGO stand for?",
        options: ["Get In, Get Out", "Garbage In, Garbage Out", "Good Input, Good Output", "General Input, General Output"],
        correct: 1,
        explanation: "GIGO stands for Garbage In, Garbage Out. It means that if incorrect data is entered into a computer, the results will also be incorrect, no matter how good the program is."
    },
    {
        id: 3, unit: "comp", type: "mc",
        question: "For a computer to produce accurate results, which TWO requirements must be met?",
        options: [
            "Fast processor and large hard drive",
            "Quality programs and quality data",
            "Internet connection and antivirus software",
            "Expensive hardware and trained user"
        ],
        correct: 1,
        explanation: "Accuracy requires both quality programs (well-written, bug-free software) and quality data (correct input data). Without both, results may be inaccurate (GIGO)."
    },
    {
        id: 4, unit: "comp", type: "mc",
        question: "VoIP technology allows users to:",
        options: [
            "Print documents wirelessly",
            "Make voice calls over the internet",
            "Store files in the cloud",
            "Protect their computer from viruses"
        ],
        correct: 1,
        explanation: "VoIP (Voice over Internet Protocol) allows users to make voice calls over the internet instead of using traditional telephone lines, reducing communication costs."
    },
    {
        id: 5, unit: "comp", type: "mc",
        question: "Which of the following is a non-portable computer?",
        options: ["Tablet", "Smartphone", "Server", "Laptop"],
        correct: 2,
        explanation: "A server is a non-portable computer that provides services to other computers on a network. Tablets, smartphones, and laptops are all portable devices."
    },
    {
        id: 6, unit: "comp", type: "mc",
        question: "A freelance graphic designer who needs a computer with a powerful processor, 32 GB RAM, and a dedicated graphics card is classified as a:",
        options: ["Personal user", "SOHO user", "Power user", "Mobile user"],
        correct: 2,
        explanation: "A power user requires high-performance computing with a powerful processor, lots of RAM, and a dedicated graphics card for demanding tasks like graphic design, video editing, or 3D rendering."
    },
    {
        id: 7, unit: "comp", type: "mc",
        question: "Convergence in ICT refers to:",
        options: [
            "Connecting multiple computers to a network",
            "Combining several technologies or devices into a single device",
            "Converting analogue signals to digital",
            "The increase in internet speed over time"
        ],
        correct: 1,
        explanation: "Convergence is the combining of several separate technologies, services, or devices into a single device. A smartphone is the best example, combining a camera, phone, GPS, music player, and internet browser."
    },
    {
        id: 8, unit: "comp", type: "mc",
        question: "Which device is the best example of convergence?",
        options: ["Desktop computer", "Printer", "Smartphone", "External hard drive"],
        correct: 2,
        explanation: "A smartphone is the best example of convergence because it combines many separate devices into one: camera, GPS, phone, music player, video recorder, calculator, internet browser, and more."
    },
    {
        id: 9, unit: "comp", type: "mc",
        question: "A small business owner working from home, who needs a computer for invoicing, email, and internet, is classified as a:",
        options: ["Personal user", "SOHO user", "Power user", "Mobile user"],
        correct: 1,
        explanation: "SOHO stands for Small Office/Home Office. This user runs a small business and needs basic office software, internet access, a printer, and possibly accounting software."
    },
    {
        id: 10, unit: "comp", type: "mc",
        question: "What is the main difference between a smartphone and a tablet?",
        options: [
            "A smartphone can make calls but a tablet cannot",
            "A tablet has a larger screen and a smartphone can make cellular calls; both may run similar apps",
            "A tablet is more powerful than a smartphone",
            "A smartphone has a touchscreen but a tablet does not"
        ],
        correct: 1,
        explanation: "The main differences are that a smartphone has a smaller screen and can make cellular calls, while a tablet has a larger screen and is primarily designed for media consumption and productivity rather than phone calls."
    },
    {
        id: 11, unit: "comp", type: "mc",
        question: "A hybrid/convertible computer combines the features of a:",
        options: [
            "Desktop and server",
            "Laptop and tablet",
            "Smartphone and phablet",
            "Printer and scanner"
        ],
        correct: 1,
        explanation: "A hybrid/convertible combines the features of a laptop (physical keyboard, productivity) and a tablet (touchscreen, portability) by having a detachable or foldable keyboard."
    },
    {
        id: 12, unit: "comp", type: "mc",
        question: "Which of the following is an always-on device?",
        options: ["Desktop computer", "Laptop", "Smartphone", "Server"],
        correct: 2,
        explanation: "A smartphone is an always-on device — it is always ready to receive calls, messages, and notifications without needing to be booted up. Laptops and desktops need to be switched on and booted before use."
    },
    {
        id: 13, unit: "comp", type: "mc",
        question: "An entry-level computer would be MOST suitable for:",
        options: [
            "Professional video editing",
            "Running a large database server",
            "Basic home use such as browsing and word processing",
            "3D modelling and animation"
        ],
        correct: 2,
        explanation: "An entry-level computer is a basic, affordable desktop designed for simple everyday tasks like browsing, email, and word processing. It does not have the specifications needed for demanding tasks like video editing or 3D modelling."
    },
    {
        id: 14, unit: "comp", type: "mc",
        question: "How does ICT help eliminate communication barriers?",
        options: [
            "By making computers cheaper",
            "By removing the barriers of time and distance so people can communicate instantly worldwide",
            "By increasing the number of telephone lines",
            "By providing free electricity"
        ],
        correct: 1,
        explanation: "ICT eliminates barriers of time and distance, allowing people to communicate instantly with anyone around the world through email, video calls, messaging, and social media."
    },
    {
        id: 15, unit: "comp", type: "mc",
        question: "A sales representative who travels frequently and needs to access company files, send emails, and make presentations on the go is classified as a:",
        options: ["Personal user", "SOHO user", "Power user", "Mobile user"],
        correct: 3,
        explanation: "A mobile user works on the go and needs portable devices (laptop, tablet, smartphone), wireless connectivity, cloud access, and long battery life to stay productive while travelling."
    },

    // --- Module 1.2: Hardware Devices ---
    {
        id: 16, unit: "hw", type: "mc",
        question: "The correct order of the information processing cycle is:",
        options: [
            "Processing, Input, Output, Storage, Communication",
            "Input, Processing, Output, Storage, Communication",
            "Input, Storage, Processing, Output, Communication",
            "Output, Input, Processing, Communication, Storage"
        ],
        correct: 1,
        explanation: "The information processing cycle follows the order: Input (enter data), Processing (CPU manipulates data), Output (present results), Storage (save for later), Communication (share/transmit data)."
    },
    {
        id: 17, unit: "hw", type: "mc",
        question: "Before the CPU can process data, what must be loaded into RAM?",
        options: [
            "Only the data",
            "Only the software",
            "Both software (instructions) and data",
            "The operating system only"
        ],
        correct: 2,
        explanation: "Both the software (program instructions) and the data to be processed must be loaded into RAM before the CPU can begin processing."
    },
    {
        id: 18, unit: "hw", type: "mc",
        question: "Which input device can cause Carpal Tunnel Syndrome with prolonged use?",
        options: ["Scanner", "Webcam", "Keyboard", "Microphone"],
        correct: 2,
        explanation: "Prolonged use of a keyboard (and mouse) can cause Carpal Tunnel Syndrome, a type of RSI where the median nerve in the wrist is compressed due to repetitive hand and wrist movements."
    },
    {
        id: 19, unit: "hw", type: "mc",
        question: "A touch screen is classified as:",
        options: [
            "An input device only",
            "An output device only",
            "Both an input and an output device",
            "A storage device"
        ],
        correct: 2,
        explanation: "A touch screen is both an input device (user touches/taps/swipes to provide input) and an output device (it displays text, images, and video to the user)."
    },
    {
        id: 20, unit: "hw", type: "mc",
        question: "OCR software is used to:",
        options: [
            "Print documents faster",
            "Convert scanned images of text into editable, searchable text",
            "Compress image files to save storage space",
            "Protect documents with passwords"
        ],
        correct: 1,
        explanation: "OCR (Optical Character Recognition) software analyses a scanned image of text, recognises the character patterns, and converts them into editable text that can be processed by a word processor."
    },
    {
        id: 21, unit: "hw", type: "mc",
        question: "A digital camera has a resolution of 5184 x 3456 pixels. What is its megapixel rating?",
        options: ["12 MP", "15 MP", "18 MP", "21 MP"],
        correct: 2,
        explanation: "Megapixels = horizontal pixels x vertical pixels / 1 000 000. So 5184 x 3456 = 17 915 904 pixels, which is approximately 18 megapixels (MP)."
    },
    {
        id: 22, unit: "hw", type: "mc",
        question: "What scanner resolution (dpi) is recommended for images that will be printed?",
        options: ["36 dpi", "72 dpi", "150 dpi", "300 dpi"],
        correct: 3,
        explanation: "300 dpi is the standard resolution for printing to ensure high-quality output. 72 dpi is sufficient for screen/web display only."
    },
    {
        id: 23, unit: "hw", type: "mc",
        question: "A monitor's refresh rate, measured in Hz, determines:",
        options: [
            "How bright the screen can get",
            "How many colours it can display",
            "How many times per second the screen image is redrawn",
            "The physical size of the monitor"
        ],
        correct: 2,
        explanation: "The refresh rate (measured in Hertz/Hz) indicates how many times per second the monitor redraws the image. A higher refresh rate (e.g. 144 Hz vs 60 Hz) produces smoother motion, which is important for gaming and video."
    },
    {
        id: 24, unit: "hw", type: "mc",
        question: "A user notices a green tint on their monitor display. The most likely cause is:",
        options: [
            "The refresh rate is too high",
            "A damaged or loose video cable causing a colour channel to fail",
            "The monitor's aspect ratio is incorrect",
            "The hard drive is full"
        ],
        correct: 1,
        explanation: "A persistent colour tint (e.g. green, pink, or blue) on a monitor usually indicates a damaged or loose VGA/HDMI/display cable, or a faulty connector where one of the colour channels (Red, Green, or Blue) is not working properly."
    },
    {
        id: 25, unit: "hw", type: "mc",
        question: "Which type of printer can print carbon copies (multi-part forms)?",
        options: ["Laser printer", "Inkjet printer", "Dot matrix printer", "3D printer"],
        correct: 2,
        explanation: "A dot matrix printer is an impact printer — its pins physically strike an ink ribbon against the paper. This impact force allows it to print through multiple layers of carbon paper, producing duplicate copies. Laser and inkjet printers are non-impact and cannot do this."
    },
    {
        id: 26, unit: "hw", type: "mc",
        question: "What is geotagging?",
        options: [
            "Adding a digital watermark to a photo",
            "Compressing a photo for email",
            "Adding GPS location data (coordinates) to digital media",
            "Converting a photo from colour to black and white"
        ],
        correct: 2,
        explanation: "Geotagging is the process of adding geographical location data (GPS coordinates — latitude and longitude) to digital media such as photos, videos, or social media posts."
    },
    {
        id: 27, unit: "hw", type: "mc",
        question: "Which malware secretly records every keystroke a user types?",
        options: ["Trojan", "Spyware", "Keylogger", "Worm"],
        correct: 2,
        explanation: "A keylogger is software or hardware that secretly records every keystroke a user types. It is often used by cybercriminals to steal passwords, credit card numbers, and other personal information."
    },
    {
        id: 28, unit: "hw", type: "mc",
        question: "A DSLR camera differs from a point-and-shoot camera because a DSLR has:",
        options: [
            "A fixed lens and automatic settings only",
            "Interchangeable lenses, a larger sensor, and manual controls",
            "A smaller sensor and no zoom capability",
            "No LCD screen for viewing photos"
        ],
        correct: 1,
        explanation: "A DSLR (Digital Single-Lens Reflex) camera has interchangeable lenses, a larger image sensor for better image quality, and full manual controls. Point-and-shoot cameras have a fixed lens, smaller sensor, and mostly automatic settings."
    },
    {
        id: 29, unit: "hw", type: "mc",
        question: "Colour depth refers to:",
        options: [
            "The number of colours a printer can produce",
            "The number of bits used per pixel to represent colour on a display",
            "The brightness level of a monitor",
            "The number of pixels on the screen"
        ],
        correct: 1,
        explanation: "Colour depth is the number of bits used per pixel to represent colour. For example, 24-bit colour depth means each pixel can display one of 16.7 million possible colours (2^24). Higher colour depth = more realistic colour."
    },
    {
        id: 30, unit: "hw", type: "mc",
        question: "Which of the following is an environmental concern related to printing?",
        options: [
            "Printers use too much RAM",
            "Paper waste, ink/toner cartridge disposal, energy consumption, and e-waste",
            "Printers cause internet congestion",
            "Printing slows down the CPU"
        ],
        correct: 1,
        explanation: "Printing impacts the environment through paper waste (deforestation), disposal of ink/toner cartridges (toxic chemicals), energy consumption, and electronic waste when old printers are discarded. Users should print only when necessary and recycle cartridges."
    }
];


// ============================================================
// FEYNMAN TOPICS
// ============================================================
const feynmanTopics = [
    // --- Module 1.1: Computers in Our Everyday Lives ---
    {
        id: "f1",
        title: "Efficiency, Accuracy and Reliability",
        unit: "comp",
        keyPoints: [
            "Efficiency means computers save time, labour, and resources",
            "Example of time saving: calculations done in seconds vs. hours manually",
            "Example of labour saving: one person with a computer replaces many workers",
            "Example of resource saving: paperless offices, email replaces post",
            "Accuracy means correct results — requires quality programs AND quality data",
            "GIGO (Garbage In, Garbage Out): bad input = bad output",
            "Reliability means computers work 24/7 without tiring, producing consistent results"
        ]
    },
    {
        id: "f2",
        title: "Communication Benefits of ICT",
        unit: "comp",
        keyPoints: [
            "ICT eliminates barriers of time and distance — instant global communication",
            "Information can be shared globally via the internet from anywhere",
            "VoIP (Voice over Internet Protocol) allows cheap/free calls over the internet",
            "Examples of VoIP: Skype, WhatsApp calls, Microsoft Teams",
            "Social networking connects people, enables collaboration and idea sharing",
            "Email, video conferencing, and instant messaging replace expensive traditional methods",
            "Businesses save costs on travel and communication with ICT tools"
        ]
    },
    {
        id: "f3",
        title: "Types of Computer Systems",
        unit: "comp",
        keyPoints: [
            "Non-portable: desktop (personal use, separate components) and server (serves clients on a network, runs 24/7)",
            "Entry-level computer: basic, affordable desktop for simple tasks (browsing, word processing)",
            "Laptop/Notebook: portable, built-in screen and keyboard, battery powered",
            "Tablet: touchscreen, no physical keyboard, mobile OS, lighter than laptop",
            "Hybrid/Convertible: combines laptop and tablet (detachable/foldable keyboard)",
            "Smartphone: always-on mobile phone with computing capabilities",
            "Phablet: screen size between smartphone and tablet (5.5-7 inches)",
            "Always-on devices (smartphone, tablet) vs. switch on/off devices (laptop, desktop)"
        ]
    },
    {
        id: "f4",
        title: "Categories of Users",
        unit: "comp",
        keyPoints: [
            "Personal/Home user: entertainment, social media, homework, email — basic computer needed",
            "SOHO (Small Office/Home Office) user: small business, needs office software, printer, internet, accounting",
            "Power user: demanding tasks (graphic design, video editing, gaming) — needs powerful hardware",
            "Power user requirements: fast CPU, 32+ GB RAM, dedicated graphics card, large SSD",
            "Mobile user: works on the go, needs portable device, wireless connectivity, long battery life",
            "Matching the right computer to the right user category is an important skill"
        ]
    },
    {
        id: "f5",
        title: "Convergence",
        unit: "comp",
        keyPoints: [
            "Convergence is combining several separate technologies/devices into a single device",
            "The smartphone is the best example of convergence",
            "Devices converged into a smartphone: camera, GPS, music player, phone, video recorder, calculator, browser",
            "Convergence makes devices more portable and convenient",
            "Convergence reduces the need to carry multiple separate devices",
            "Other examples: smart TVs (TV + internet + streaming), smart watches (watch + fitness tracker + phone notifications)"
        ]
    },

    // --- Module 1.2: Hardware Devices ---
    {
        id: "f6",
        title: "The Information Processing Cycle",
        unit: "hw",
        keyPoints: [
            "Five stages: Input, Processing, Output, Storage, Communication",
            "Input: data enters the computer via input devices (keyboard, mouse, scanner, microphone)",
            "Processing: CPU manipulates data according to program instructions (algorithm)",
            "Both software and data must be loaded into RAM before processing can occur",
            "Output: processed information is presented via output devices (monitor, printer, speakers)",
            "Storage: data is saved for later use on storage devices (HDD, SSD, flash drive)",
            "Communication: data is sent/received between devices over a network"
        ]
    },
    {
        id: "f7",
        title: "Keyboard and Mouse (Ergonomics, Troubleshooting)",
        unit: "hw",
        keyPoints: [
            "Keyboard advantages: familiar, accurate text input, cheap, shortcut keys",
            "Keyboard limitations: slow for large data, requires typing skill, can cause RSI",
            "Mouse advantages: intuitive, easy to learn, good for graphical work",
            "Mouse limitations: needs flat surface, not for text input, can cause RSI",
            "Ergonomics: designing workspace to fit the user and minimise injury",
            "RSI (Repetitive Strain Injury): damage from repetitive movements like typing",
            "Carpal Tunnel Syndrome: compressed median nerve in wrist from repetitive hand movements",
            "Prevention: ergonomic keyboard/mouse, correct posture, regular breaks, wrist rests"
        ]
    },
    {
        id: "f8",
        title: "Touch Screen and Scanner Technologies",
        unit: "hw",
        keyPoints: [
            "Touch screen is both input (tap, swipe, pinch) AND output (displays information)",
            "Touch screen advantages: intuitive, no extra devices needed, good for kiosks and mobile",
            "Touch screen limitations: fingerprints, not precise for detail work, arm fatigue, expensive repair",
            "Scanner converts physical documents/images into digital format",
            "OCR (Optical Character Recognition) converts scanned text images into editable text",
            "OCR process: scan document, analyse light/dark patterns, match to known characters, output editable text",
            "Scanner resolution in dpi: 300 dpi for print, 72 dpi for screen"
        ]
    },
    {
        id: "f9",
        title: "Monitor Display Quality Factors",
        unit: "hw",
        keyPoints: [
            "Resolution: number of pixels (width x height), e.g. 1920 x 1080; more pixels = sharper image",
            "Colour depth: bits per pixel for colour, e.g. 24-bit = 16.7 million colours",
            "Pixel density (PPI): pixels per inch; higher PPI = sharper, more detailed display",
            "Refresh rate (Hz): times screen redraws per second; higher Hz = smoother motion (important for gaming)",
            "Contrast ratio: difference between brightest white and darkest black; higher = better image depth",
            "Aspect ratio: width-to-height ratio, e.g. 16:9 (widescreen) vs 4:3 (standard)",
            "Digital camera resolution measured in megapixels (horizontal x vertical pixels / 1 000 000)",
            "Geotagging adds GPS coordinates to photos, recording where they were taken"
        ]
    },
    {
        id: "f10",
        title: "Printers and Environmental Impact",
        unit: "hw",
        keyPoints: [
            "Laser printer: uses toner + heat, fast, high quality, best for high-volume text, expensive to buy",
            "Inkjet printer: uses liquid ink, good for colour/photos, cheaper to buy but expensive per page, ink smudges",
            "Dot matrix (impact): uses pins + ink ribbon, noisy, low quality, but can print carbon copies (unique advantage)",
            "Carbon copies: only impact printers can print through multi-part forms",
            "Environmental concerns: paper waste (deforestation), cartridge disposal (toxic), energy use, e-waste",
            "Solutions: print only when necessary, recycle cartridges, use duplex printing, buy energy-efficient printers",
            "Security threats: keylogger records keystrokes, spyware monitors activity, Trojan disguises as legitimate software"
        ]
    }
];
