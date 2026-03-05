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
    },

    // --- Module 2: Solution Development ---
    {
        id: 41, unit: "solution-dev",
        q: "What does VLOOKUP do and what are its four arguments?",
        a: "VLOOKUP (Vertical Lookup) searches for a value in the leftmost column of a table and returns a value from the same row in a specified column.\nSyntax: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])\n1. lookup_value — the value to search for\n2. table_array — the range containing the data\n3. col_index_num — the column number to return the value from\n4. range_lookup — TRUE (approximate) or FALSE (exact match)"
    },
    {
        id: 42, unit: "solution-dev",
        q: "What is the difference between VLOOKUP and HLOOKUP?",
        a: "VLOOKUP (Vertical Lookup) searches down the FIRST COLUMN of a table and returns a value from the same ROW.\nHLOOKUP (Horizontal Lookup) searches across the FIRST ROW of a table and returns a value from the same COLUMN.\nUse VLOOKUP when data is arranged in columns; use HLOOKUP when data is arranged in rows."
    },
    {
        id: 43, unit: "solution-dev",
        q: "How does the INDEX function work? How does it combine with MATCH?",
        a: "INDEX(array, row_num, [col_num]) returns the value at a given row and column position in a range.\nMATCH(lookup_value, lookup_array, [match_type]) returns the position (row number) of a value in a range.\nTogether: =INDEX(return_range, MATCH(lookup_value, search_range, 0)) — MATCH finds the position, INDEX returns the value at that position. More flexible than VLOOKUP as it can look left."
    },
    {
        id: 44, unit: "solution-dev",
        q: "Write the syntax for IF and nested IF functions and give an example.",
        a: "IF syntax: =IF(logical_test, value_if_true, value_if_false)\nExample: =IF(A1>=50, \"Pass\", \"Fail\")\nNested IF: =IF(A1>=80, \"Distinction\", IF(A1>=60, \"Merit\", IF(A1>=50, \"Pass\", \"Fail\")))\nNested IFs test multiple conditions by placing another IF as the value_if_false."
    },
    {
        id: 45, unit: "solution-dev",
        q: "What do COUNTIF and SUMIF do? Give the syntax for each.",
        a: "COUNTIF counts cells that meet a condition.\nSyntax: =COUNTIF(range, criteria)\nExample: =COUNTIF(A1:A20, \">50\") — counts cells greater than 50\n\nSUMIF adds cells that meet a condition.\nSyntax: =SUMIF(range, criteria, [sum_range])\nExample: =SUMIF(B1:B20, \"Johannesburg\", C1:C20) — sums column C where column B = Johannesburg"
    },
    {
        id: 46, unit: "solution-dev",
        q: "What is conditional formatting and how is it used in spreadsheets?",
        a: "Conditional formatting automatically applies formatting (colour, bold, icon) to cells based on their values or formulas.\nUses:\n- Highlight cells above/below a threshold (e.g. red for fails, green for passes)\n- Use colour scales to show high/low values\n- Data bars to visually compare values\n- Icon sets for quick status indicators\nApplied via: Home > Conditional Formatting > New Rule"
    },
    {
        id: 47, unit: "solution-dev",
        q: "What is data validation in spreadsheets? Give two examples of its use.",
        a: "Data validation restricts the type or range of data that can be entered into a cell, preventing incorrect input.\nExamples:\n1. Whole number only — allow only integers between 1 and 100 in a mark cell\n2. Drop-down list — restrict a cell to choices like 'Male' or 'Female'\n3. Date range — only allow dates between 2024-01-01 and 2024-12-31\nApplied via: Data > Data Validation"
    },
    {
        id: 48, unit: "solution-dev",
        q: "What are the key elements to consider when creating a chart in a spreadsheet?",
        a: "1. Chart type — choose appropriately: bar/column for comparisons, line for trends, pie for proportions\n2. Data range — select the correct data including labels\n3. Chart title — clear, descriptive title\n4. Axis labels — label both x and y axes with units\n5. Legend — explains what each colour/series represents\n6. Scale — ensure y-axis scale is appropriate (starts at 0 unless comparing small differences)"
    },
    {
        id: 49, unit: "solution-dev",
        q: "Define: database, table, field, record, and data type.",
        a: "Database: an organised collection of related data stored electronically.\nTable: a structure in a database that organises data into rows and columns (like a spreadsheet).\nField: a column in a table representing one attribute/category of data (e.g. Surname, Age).\nRecord: a row in a table representing one complete entry/item (e.g. one person's full details).\nData type: specifies the kind of data a field stores (e.g. Text, Number, Date/Time, Yes/No, AutoNumber)."
    },
    {
        id: 50, unit: "solution-dev",
        q: "What is a primary key and why is it important in a database?",
        a: "A primary key is a field (or combination of fields) in a database table that uniquely identifies each record. It must be unique (no two records can have the same value) and cannot be null (empty).\nImportance: it prevents duplicate records, allows records to be found quickly, and is used to link tables together in relationships."
    },
    {
        id: 51, unit: "solution-dev",
        q: "What is the difference between a form and a report in a database?",
        a: "Form: a user-friendly interface used to enter, view, and edit data in a database one record at a time. Makes data entry easier and reduces errors.\nReport: a formatted, read-only document that presents data from the database in a structured layout, used for printing and presenting summarised information (e.g. monthly sales report)."
    },
    {
        id: 52, unit: "solution-dev",
        q: "Write a basic SQL SELECT statement and explain each clause.",
        a: "SELECT field1, field2 FROM TableName WHERE condition ORDER BY field1 ASC;\n\nSELECT — specifies which fields/columns to retrieve (* = all)\nFROM — specifies the table to query\nWHERE — filters records based on a condition (e.g. Age > 18)\nORDER BY — sorts results (ASC = ascending, DESC = descending)\nExample: SELECT Name, Age FROM Students WHERE Age > 17 ORDER BY Name ASC;"
    },
    {
        id: 53, unit: "solution-dev",
        q: "What are SQL aggregate functions? Give five examples with their purpose.",
        a: "Aggregate functions perform calculations on a set of values and return a single result.\n1. COUNT(*) — counts the number of records\n2. SUM(field) — adds up all values in a field\n3. AVG(field) — calculates the average value\n4. MIN(field) — returns the smallest value\n5. MAX(field) — returns the largest value\nExample: SELECT COUNT(*) FROM Students WHERE Province = 'Gauteng';"
    },
    {
        id: 54, unit: "solution-dev",
        q: "How are LIKE and BETWEEN used in SQL WHERE clauses?",
        a: "LIKE: used for pattern matching with wildcards.\n% = any number of characters, _ = single character\nExample: WHERE Surname LIKE 'Van%' — finds all surnames starting with 'Van'\nWHERE Email LIKE '%@gmail.com' — finds all Gmail addresses\n\nBETWEEN: filters records within an inclusive range.\nExample: WHERE Age BETWEEN 16 AND 18 — finds ages 16, 17, and 18\nWHERE Date BETWEEN '2024-01-01' AND '2024-12-31'"
    },
    {
        id: 55, unit: "solution-dev",
        q: "What are the basic HTML tags needed to create a webpage structure?",
        a: "<!DOCTYPE html> — declares HTML5 document type\n<html> — root element\n<head> — contains metadata (not displayed)\n  <title> — sets the browser tab title\n  <meta charset='UTF-8'> — sets character encoding\n<body> — contains all visible content\nContent tags: <h1>-<h6> (headings), <p> (paragraph), <a href=''> (link), <img src=''> (image), <ul>/<ol>/<li> (lists), <table>, <div>, <span>"
    },
    {
        id: 56, unit: "solution-dev",
        q: "What is the difference between inline, internal, and external CSS?",
        a: "Inline CSS: applied directly to an HTML element using the style attribute.\n<p style='color: red;'>Text</p>\nPro: quick; Con: not reusable, mixes content and style.\n\nInternal CSS: placed in <style> tags in the <head> section. Applies to one page only.\n\nExternal CSS: a separate .css file linked with <link rel='stylesheet' href='style.css'> in the <head>.\nPro: one file styles the whole website, reusable, easy to maintain.\nBest practice: use external CSS."
    },
    {
        id: 57, unit: "solution-dev",
        q: "What are CSS selectors? Describe three types with examples.",
        a: "CSS selectors target HTML elements to apply styles.\n1. Element/Type selector — targets all elements of a type\n   p { color: blue; } — styles all <p> tags\n2. Class selector (.) — targets elements with a specific class attribute\n   .highlight { background-color: yellow; }\n   Used on: <p class='highlight'>\n3. ID selector (#) — targets one unique element with a specific id\n   #header { font-size: 24px; }\n   Used on: <h1 id='header'>"
    },

    // --- Module 3: System Technologies ---
    {
        id: 58, unit: "systems",
        q: "What are the three main components of the CPU and what does each do?",
        a: "1. ALU (Arithmetic Logic Unit) — performs all arithmetic calculations (add, subtract, multiply, divide) and logical operations (comparisons: greater than, equal to, AND, OR, NOT)\n2. CU (Control Unit) — manages and coordinates all CPU operations; fetches instructions from RAM, decodes them, and directs the ALU and other components\n3. Registers — small, ultra-fast storage locations inside the CPU that temporarily hold data and instructions currently being processed"
    },
    {
        id: 59, unit: "systems",
        q: "What is RAM? What are its key characteristics?",
        a: "RAM (Random Access Memory) is the computer's primary/main memory where the CPU stores currently running programs and data being processed.\nKey characteristics:\n- Volatile: all data is lost when the computer is switched off\n- Fast access speed — much faster than storage devices\n- Temporarily holds the OS, open applications, and active data\n- More RAM = more programs can run simultaneously without slowing down"
    },
    {
        id: 60, unit: "systems",
        q: "What is ROM? How does it differ from RAM?",
        a: "ROM (Read-Only Memory) is permanent memory that contains instructions the computer needs to start up (boot).\nKey differences from RAM:\n- ROM is non-volatile (data is retained without power); RAM is volatile\n- ROM cannot be written to by normal programs; RAM can be written and rewritten\n- ROM stores the BIOS/firmware (boot instructions); RAM stores currently running programs\n- ROM is much slower than RAM but retains data permanently"
    },
    {
        id: 61, unit: "systems",
        q: "What is cache memory and what is virtual memory?",
        a: "Cache memory: a small, extremely fast memory bank built into or very close to the CPU. It stores frequently accessed data and instructions so the CPU does not have to wait for RAM. L1 cache (fastest, smallest) > L2 > L3.\n\nVirtual memory: a technique where the OS uses part of the hard drive/SSD as an extension of RAM when RAM is full. Much slower than RAM because it uses storage, causing slowdowns (thrashing)."
    },
    {
        id: 62, unit: "systems",
        q: "Compare HDD and SSD storage devices.",
        a: "HDD (Hard Disk Drive):\n- Mechanical spinning magnetic disks and read/write head\n- Slower read/write speeds\n- Cheaper per GB, larger capacities available\n- Susceptible to physical shock/damage\n- Makes noise, generates heat\n\nSSD (Solid State Drive):\n- Uses flash memory chips (no moving parts)\n- Much faster read/write speeds\n- More expensive per GB\n- More durable (no moving parts)\n- Silent, less heat, lighter"
    },
    {
        id: 63, unit: "systems",
        q: "What are optical storage devices? Name two types.",
        a: "Optical storage devices use laser light to read and write data on a disc.\nTypes:\n1. CD (Compact Disc) — capacity ~700 MB; used for music, software\n2. DVD (Digital Versatile Disc) — capacity ~4.7 GB (single layer); used for films, software\n3. Blu-ray Disc — capacity ~25 GB per layer; used for HD/4K video\nVariants: ROM (read-only, factory pressed), R (write once), RW (rewritable)"
    },
    {
        id: 64, unit: "systems",
        q: "What are the main functions of an operating system?",
        a: "1. Resource management — manages CPU time, RAM, storage, and peripherals\n2. User interface — provides GUI or CLI for user interaction\n3. File management — organises files and directories on storage\n4. Security — manages user accounts, passwords, and permissions\n5. Hardware communication — acts as intermediary between hardware and software via drivers\n6. Error handling — detects and reports errors\nExamples: Windows, macOS, Linux, Android, iOS"
    },
    {
        id: 65, unit: "systems",
        q: "What is the difference between open source and proprietary software?",
        a: "Open source software:\n- Source code is freely available; anyone can view, modify, and distribute\n- Usually free (e.g. Linux, LibreOffice, Firefox, VLC)\n- Community supported; may have less commercial support\n\nProprietary software:\n- Source code is closed/secret; owned by a company\n- Requires purchasing a licence (e.g. Microsoft Windows, Adobe Photoshop, MS Office)\n- Formal support and regular updates from the developer\n- Cannot be legally copied or modified without permission"
    },
    {
        id: 66, unit: "systems",
        q: "Define LAN, WAN, MAN, and PAN.",
        a: "LAN (Local Area Network) — connects devices in a small area (home, school, office); privately owned; fast speeds.\nWAN (Wide Area Network) — covers large geographic areas (cities, countries); uses public/leased lines; slower; the internet is the largest WAN.\nMAN (Metropolitan Area Network) — covers a city or large campus; larger than LAN, smaller than WAN.\nPAN (Personal Area Network) — very small network around one person (Bluetooth, USB connection between phone and laptop); range ~10 metres."
    },
    {
        id: 67, unit: "systems",
        q: "Describe four common network topologies.",
        a: "1. Star topology — all devices connect to a central switch/hub; most common; if one device fails, network continues; if hub fails, all fail\n2. Bus topology — all devices share one cable (backbone); simple and cheap; one break brings down whole network; not used much today\n3. Ring topology — devices connected in a circle; data travels one direction; one failure can break the ring\n4. Mesh topology — every device connects to every other; very reliable (multiple paths); expensive, complex to set up"
    },
    {
        id: 68, unit: "systems",
        q: "What is TCP/IP and why is it important?",
        a: "TCP/IP (Transmission Control Protocol/Internet Protocol) is the foundational suite of communication protocols used on the internet and most networks.\nTCP: breaks data into packets, numbers them, ensures all packets arrive and are reassembled in the correct order.\nIP: addresses and routes each packet to the correct destination using IP addresses.\nImportance: it is the standard language/protocol that allows different devices and networks worldwide to communicate reliably."
    },
    {
        id: 69, unit: "systems",
        q: "What is the difference between the internet and the World Wide Web (WWW)?",
        a: "The Internet: the global network infrastructure of interconnected computers and cables that carries all digital communication (email, web, FTP, VoIP, streaming). It is the physical/logical network.\n\nThe World Wide Web (WWW): a service that runs ON the internet, consisting of websites and web pages accessed via a browser using HTTP/HTTPS. The web is one application that uses the internet.\nAnalogy: the internet = the roads; the web = one type of vehicle using those roads."
    },
    {
        id: 70, unit: "systems",
        q: "What is cloud computing? Give three advantages and two disadvantages.",
        a: "Cloud computing: using remote servers hosted on the internet to store, manage, and process data instead of a local computer.\nExamples: Google Drive, Dropbox, Microsoft 365, AWS\nAdvantages:\n1. Access data from anywhere with internet connection\n2. Data is backed up automatically\n3. Scalable — pay for only what you use\nDisadvantages:\n1. Requires internet access — no connection = no access\n2. Privacy/security concerns — data held by third party"
    },
    {
        id: 71, unit: "systems",
        q: "What is IoT (Internet of Things)?",
        a: "IoT (Internet of Things) refers to everyday physical devices embedded with sensors, software, and connectivity, allowing them to collect and exchange data over the internet without human-to-computer interaction.\nExamples: smart fridges, smart TVs, fitness trackers, smart locks, smart city traffic lights, industrial sensors.\nBenefit: automation and remote monitoring.\nConcern: privacy and security risks from many connected devices."
    },
    {
        id: 72, unit: "systems",
        q: "What is a URL? Identify the parts of: https://www.example.co.za/page?id=5",
        a: "URL (Uniform Resource Locator) is the address used to locate a resource on the internet.\nParts of https://www.example.co.za/page?id=5:\n- https:// — protocol (HTTP Secure)\n- www — subdomain\n- example — domain name\n- .co.za — country-code top-level domain (TLD) — South Africa, commercial\n- /page — path/directory on the server\n- ?id=5 — query string (passes parameters to the server)"
    },
    {
        id: 73, unit: "systems",
        q: "What are HTTP and HTTPS? Why is HTTPS preferred?",
        a: "HTTP (HyperText Transfer Protocol): the protocol used by web browsers to request and receive web pages. Data is sent in plain text — not secure.\nHTTPS (HTTP Secure): HTTP with encryption (SSL/TLS). All data exchanged between browser and server is encrypted.\nWhy HTTPS is preferred: it protects sensitive data (passwords, credit card numbers, personal information) from being intercepted by hackers (man-in-the-middle attacks). Browsers show a padlock icon for HTTPS sites."
    },

    // --- Module 4: Information Management ---
    {
        id: 74, unit: "info-mgmt",
        q: "Distinguish between data, information, and knowledge.",
        a: "Data: raw, unprocessed facts and figures without context or meaning. Example: 85, 72, 91 (just numbers).\nInformation: data that has been processed, organised, and given context so it has meaning. Example: 'Learner scored 85% for Maths in Term 1'.\nKnowledge: information that has been understood, interpreted, and applied through experience. Example: 'Learner performs well in Maths and should consider engineering as a career'."
    },
    {
        id: 75, unit: "info-mgmt",
        q: "List five common data types used in databases and give an example of each.",
        a: "1. Text/Short Text — stores letters, numbers, symbols (e.g. Name, ID number, address)\n2. Number/Numeric — stores numeric values for calculations (e.g. Age, Price, Quantity)\n3. Date/Time — stores dates and times (e.g. Date of birth, order date)\n4. Boolean/Yes-No — stores only True/False, Yes/No, or 1/0 (e.g. IsActive, Paid?)\n5. AutoNumber — automatically assigns a unique sequential number to each record (used as primary key)"
    },
    {
        id: 76, unit: "info-mgmt",
        q: "How is data represented in binary? Convert 13 to binary.",
        a: "Computers represent all data as binary (base 2) — using only two digits: 0 and 1 (off/on electrical states).\nConversion of 13 to binary:\n13 ÷ 2 = 6 remainder 1\n6 ÷ 2 = 3 remainder 0\n3 ÷ 2 = 1 remainder 1\n1 ÷ 2 = 0 remainder 1\nRead remainders bottom to top: 1101\n13 in binary = 1101\nCheck: 8+4+0+1 = 13 ✓"
    },
    {
        id: 77, unit: "info-mgmt",
        q: "What is ASCII and what is Unicode? How do they differ?",
        a: "ASCII (American Standard Code for Information Interchange): an early character encoding standard that uses 7 bits to represent 128 characters (letters A-Z, a-z, digits 0-9, punctuation, control characters). Limited to English characters.\n\nUnicode: a universal character encoding standard that supports characters from virtually all world languages (65 000+ characters in UTF-16). UTF-8 is the most common variant.\nDifference: ASCII is limited to English; Unicode supports all languages and scripts worldwide."
    },
    {
        id: 78, unit: "info-mgmt",
        q: "What are common file formats and what is file compression?",
        a: "Common file formats:\n- Documents: .docx, .pdf, .txt\n- Images: .jpg, .png, .gif, .bmp\n- Audio: .mp3, .wav, .aac\n- Video: .mp4, .avi, .mkv\n- Spreadsheet: .xlsx, .csv\n\nFile compression: reducing file size for easier storage and transmission.\nLossless compression: no data lost (e.g. .zip, .png) — original can be fully restored.\nLossy compression: some data permanently discarded for smaller files (e.g. .jpg, .mp3) — slight quality reduction."
    },
    {
        id: 79, unit: "info-mgmt",
        q: "What is database normalisation and what are the first three normal forms?",
        a: "Normalisation is the process of organising a database to reduce data redundancy and improve data integrity.\n1NF (First Normal Form): eliminate repeating groups; each cell must hold one value; each record must be unique.\n2NF (Second Normal Form): must be in 1NF; all non-key fields must depend on the WHOLE primary key (eliminate partial dependencies).\n3NF (Third Normal Form): must be in 2NF; no field should depend on a non-key field (eliminate transitive dependencies)."
    },
    {
        id: 80, unit: "info-mgmt",
        q: "What are primary keys, foreign keys, and referential integrity?",
        a: "Primary key: a field that uniquely identifies each record in a table; must be unique and not null.\nForeign key: a field in one table that links to the primary key in another table, creating a relationship between the tables.\nReferential integrity: a rule that ensures a foreign key value must match an existing primary key value in the related table (no orphan records). Prevents deletion of a parent record if child records exist."
    },
    {
        id: 81, unit: "info-mgmt",
        q: "What is an ER diagram? What symbols are used?",
        a: "ER (Entity-Relationship) diagram: a visual tool used in database design to show entities (tables), their attributes (fields), and the relationships between them.\nSymbols:\n- Rectangle: entity (table name)\n- Ellipse/Oval: attribute (field)\n- Diamond: relationship between entities\n- Lines: connect entities to relationships\n- Crow's foot notation shows cardinality (one-to-one, one-to-many, many-to-many)"
    },
    {
        id: 82, unit: "info-mgmt",
        q: "What are the types of relationships in a database? Give a real-world example of each.",
        a: "One-to-One (1:1): one record in table A relates to exactly one record in table B.\nExample: one person has one passport.\n\nOne-to-Many (1:M): one record in table A relates to many records in table B.\nExample: one customer can place many orders. (Most common relationship in databases.)\n\nMany-to-Many (M:M): many records in table A relate to many records in table B.\nExample: students enrol in many subjects; each subject has many students. Resolved with a junction/linking table."
    },
    {
        id: 83, unit: "info-mgmt",
        q: "What is data quality and what are five characteristics of good quality data?",
        a: "Data quality refers to how well data meets the requirements for its intended use. Poor data quality leads to poor decisions.\nCharacteristics of quality data:\n1. Accurate — data is correct and error-free\n2. Complete — no missing values\n3. Consistent — same data stored the same way throughout\n4. Timely/Current — data is up to date\n5. Relevant — data is appropriate for its purpose\n6. Reliable — data can be trusted (comes from a credible source)"
    },

    // --- Module 5: e-Communications ---
    {
        id: 84, unit: "e-comm",
        q: "List five electronic communication methods and briefly describe each.",
        a: "1. Email — asynchronous electronic message sent via internet; can include attachments\n2. Instant Messaging (IM) — real-time text chat (e.g. WhatsApp, Telegram)\n3. VoIP — voice calls made over the internet (e.g. Skype, WhatsApp calls)\n4. Video Conferencing — real-time audio and video communication (e.g. Zoom, Microsoft Teams, Google Meet)\n5. Social Media — platforms for sharing content, networking (e.g. Facebook, Instagram, X/Twitter)"
    },
    {
        id: 85, unit: "e-comm",
        q: "What is netiquette? Give five rules of good netiquette.",
        a: "Netiquette is the set of accepted rules and polite behaviour for communication on the internet.\nRules:\n1. Do not type in ALL CAPS (considered shouting/rude)\n2. Be respectful and polite — treat others as you would face-to-face\n3. Do not share personal information about others without their consent\n4. Keep messages clear and concise; use proper spelling and grammar\n5. Do not forward chain letters or share unverified information\n6. Respond to messages in a reasonable time\n7. Use appropriate language for the context (formal vs informal)"
    },
    {
        id: 86, unit: "e-comm",
        q: "What is a digital footprint? What are the risks?",
        a: "A digital footprint is the trail of data left behind by a person's online activities, including websites visited, posts made, emails sent, photos shared, and purchases made.\nTypes:\n- Active: deliberately shared (posts, comments, form submissions)\n- Passive: collected without user action (browser history, cookies, IP tracking)\nRisks:\n1. Employers and universities can view your online history\n2. Personal data can be collected and sold\n3. Identity theft from overshared information\n4. Difficulty removing negative content permanently"
    },
    {
        id: 87, unit: "e-comm",
        q: "What is cyberbullying? Give three examples and three ways to respond.",
        a: "Cyberbullying is the use of digital technologies to harass, threaten, embarrass, or harm another person.\nExamples:\n1. Sending threatening or hurtful messages online\n2. Sharing embarrassing photos/videos without consent\n3. Excluding someone from online groups deliberately\n4. Creating fake profiles to impersonate and mock someone\nResponses:\n1. Do not respond to the bully — block and report\n2. Save evidence (screenshots) of the bullying\n3. Tell a trusted adult (parent, teacher) or report to platform"
    },
    {
        id: 88, unit: "e-comm",
        q: "How can you identify fake news? Give four strategies.",
        a: "Fake news is false or misleading information presented as news, often spread on social media.\nStrategies to identify it:\n1. Check the source — is it a credible, well-known news organisation?\n2. Check other sources — do multiple reputable sources confirm the story?\n3. Read the full article — not just the headline (headlines can be misleading)\n4. Check the date — old news re-shared out of context\n5. Use fact-checking sites (e.g. Africa Check, Snopes, FactCheck.org)\n6. Check for poor spelling, grammar, or unusual URLs"
    },
    {
        id: 89, unit: "e-comm",
        q: "What is the POPI Act and why is it important?",
        a: "POPI Act (Protection of Personal Information Act) is South African legislation (fully in effect from 2021) that governs how organisations collect, store, process, and use personal information.\nKey requirements:\n- Personal information must be collected lawfully and with consent\n- Data must be stored securely\n- Data must only be used for the purpose it was collected\n- Individuals have the right to access and correct their data\n- Organisations must report data breaches\nPenalties for non-compliance: fines up to R10 million or imprisonment."
    },
    {
        id: 90, unit: "e-comm",
        q: "What is Creative Commons and how does it differ from standard copyright?",
        a: "Copyright: automatically protects an original work; others cannot copy, distribute, or modify it without permission from the creator.\nCreative Commons (CC): a system of free licences that allows creators to grant specific permissions to others while retaining some rights. Less restrictive than full copyright.\nCC licence types (examples):\n- CC BY — must give credit to creator\n- CC BY-NC — credit + non-commercial use only\n- CC BY-SA — credit + must share alike (same licence)\n- CC0 — public domain (no restrictions)"
    },
    {
        id: 91, unit: "e-comm",
        q: "What is the digital divide and why is it a concern in South Africa?",
        a: "The digital divide is the gap between people who have access to digital technology (computers, internet) and those who do not.\nCauses:\n- High cost of devices and data\n- Lack of infrastructure (electricity, internet) in rural areas\n- Low digital literacy (skills to use technology)\n- Socioeconomic inequality\nConcerns for South Africa:\n- Unequal access to education (online learning)\n- Unequal access to economic opportunities (jobs, e-commerce)\n- Urban vs rural disparity\nSolutions: government data subsidies, low-cost devices, digital skills programmes"
    },
    {
        id: 92, unit: "e-comm",
        q: "What is online safety? List five practical online safety measures.",
        a: "Online safety refers to practices that protect a user from harm while using the internet.\nMeasures:\n1. Use strong, unique passwords (mix of upper/lower case, numbers, symbols) for each account\n2. Enable two-factor authentication (2FA) on important accounts\n3. Do not share personal information (address, phone, ID number) with strangers online\n4. Be cautious of phishing emails — do not click suspicious links\n5. Keep software and antivirus up to date\n6. Check privacy settings on social media — limit who can see your posts\n7. Use secure (HTTPS) websites when entering financial information"
    },
    {
        id: 93, unit: "e-comm",
        q: "What is digital citizenship? List four responsibilities of a good digital citizen.",
        a: "Digital citizenship refers to the responsible, ethical, and safe use of technology and the internet.\nResponsibilities of a good digital citizen:\n1. Respect others online — no cyberbullying, hate speech, or trolling\n2. Protect personal privacy — yours and others'\n3. Respect intellectual property — do not pirate software, music, or content\n4. Share accurate information — check facts before sharing\n5. Follow platform rules and laws (POPI Act, copyright law)\n6. Report harmful content or behaviour\n7. Maintain a positive digital footprint"
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
    },

    // --- Module 2: Solution Development ---
    {
        id: 31, unit: "solution-dev", type: "mc",
        question: "Which function searches the FIRST COLUMN of a table and returns a value from a specified column in the same row?",
        options: ["HLOOKUP", "VLOOKUP", "INDEX", "MATCH"],
        correct: 1,
        explanation: "VLOOKUP (Vertical Lookup) searches down the first column of a table_array for a lookup_value and returns the value from a specified column (col_index_num) in the same row. HLOOKUP searches across the first row instead."
    },
    {
        id: 32, unit: "solution-dev", type: "mc",
        question: "The formula =COUNTIF(B2:B30, \">80\") will:",
        options: [
            "Sum all values greater than 80 in the range B2:B30",
            "Count the number of cells in B2:B30 that contain a value greater than 80",
            "Return TRUE if any cell in B2:B30 is greater than 80",
            "Find the average of cells greater than 80"
        ],
        correct: 1,
        explanation: "COUNTIF counts the number of cells in a range that meet a specified criteria. =COUNTIF(B2:B30, \">80\") counts every cell in B2:B30 whose value is greater than 80."
    },
    {
        id: 33, unit: "solution-dev", type: "mc",
        question: "In the formula =IF(A1>=75, \"Distinction\", IF(A1>=60, \"Merit\", \"Pass\")), what result appears if A1 contains 65?",
        options: ["Distinction", "Merit", "Pass", "FALSE"],
        correct: 1,
        explanation: "A1=65. The first test (65>=75) is FALSE. The nested IF then tests (65>=60) which is TRUE, so the result is \"Merit\"."
    },
    {
        id: 34, unit: "solution-dev", type: "mc",
        question: "Data validation in a spreadsheet is used to:",
        options: [
            "Format cells with colours automatically",
            "Restrict the type or range of data that can be entered into a cell",
            "Sort data alphabetically",
            "Calculate totals automatically"
        ],
        correct: 1,
        explanation: "Data validation controls what data can be entered into a cell. For example, you can restrict a cell to whole numbers only, a specific date range, or a drop-down list of options, preventing incorrect data entry."
    },
    {
        id: 35, unit: "solution-dev", type: "mc",
        question: "In a database, a RECORD is best described as:",
        options: [
            "A column that stores one type of data (e.g. Surname)",
            "A complete set of related fields about one entity (one row in a table)",
            "The rules that determine how tables relate to each other",
            "A query that retrieves data from the database"
        ],
        correct: 1,
        explanation: "A record is one complete entry in a database table — it is a row containing all the fields about one specific entity (e.g. all details about one student: ID, Name, Surname, Age, Grade)."
    },
    {
        id: 36, unit: "solution-dev", type: "mc",
        question: "Which SQL clause is used to filter records based on a condition?",
        options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
        correct: 2,
        explanation: "The WHERE clause in SQL filters records to only include rows that meet the specified condition. For example: SELECT * FROM Students WHERE Age > 17 — only returns records where Age is greater than 17."
    },
    {
        id: 37, unit: "solution-dev", type: "mc",
        question: "The SQL wildcard character % used with LIKE means:",
        options: [
            "Exactly one character",
            "Any single digit",
            "Any sequence of zero or more characters",
            "A space character"
        ],
        correct: 2,
        explanation: "In SQL, % is a wildcard that represents any sequence of zero or more characters. For example, LIKE 'Van%' matches 'Van', 'Vander', 'Vanderberg', etc. The _ wildcard matches exactly one character."
    },
    {
        id: 38, unit: "solution-dev", type: "mc",
        question: "Which CSS selector targets ALL paragraph elements on a page?",
        options: [".para { }", "#para { }", "p { }", "*para { }"],
        correct: 2,
        explanation: "p { } is an element/type selector that targets all <p> (paragraph) elements on the page. A class selector uses a dot (.) and an ID selector uses a hash (#) before the name."
    },
    {
        id: 39, unit: "solution-dev", type: "mc",
        question: "Which is the BEST practice for applying CSS styles to a multi-page website?",
        options: [
            "Inline CSS — add style attribute to every HTML element",
            "Internal CSS — add a <style> block to each page",
            "External CSS — link all pages to one .css file",
            "Use no CSS and rely on browser defaults"
        ],
        correct: 2,
        explanation: "External CSS is best practice for multi-page websites. One .css file is linked to all HTML pages. Changes made to the .css file automatically apply to the entire website, making maintenance much easier."
    },
    {
        id: 40, unit: "solution-dev", type: "mc",
        question: "The SQL function COUNT(*) is used to:",
        options: [
            "Add up all numeric values in a field",
            "Find the highest value in a field",
            "Count the total number of records returned by a query",
            "Calculate the average of a field"
        ],
        correct: 2,
        explanation: "COUNT(*) is an aggregate function that counts the total number of rows/records returned by the query. SUM() adds values, MAX() finds the highest value, and AVG() calculates the average."
    },
    {
        id: 41, unit: "solution-dev", type: "mc",
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        correct: 2,
        explanation: "The <a> (anchor) tag creates hyperlinks in HTML. The href attribute specifies the URL destination. Example: <a href='https://www.example.com'>Click here</a>"
    },
    {
        id: 42, unit: "solution-dev", type: "mc",
        question: "In a database, a primary key must be:",
        options: [
            "A text field containing the record's name",
            "Unique for each record and cannot be empty (null)",
            "A number that is always greater than 100",
            "The same as the foreign key in a related table"
        ],
        correct: 1,
        explanation: "A primary key uniquely identifies each record in a table. It must be unique (no two records can have the same primary key value) and cannot be null (empty). AutoNumber fields are often used as primary keys."
    },

    // --- Module 3: System Technologies ---
    {
        id: 43, unit: "systems", type: "mc",
        question: "Which part of the CPU performs arithmetic and logical operations?",
        options: [
            "Control Unit (CU)",
            "Arithmetic Logic Unit (ALU)",
            "Registers",
            "Cache memory"
        ],
        correct: 1,
        explanation: "The ALU (Arithmetic Logic Unit) performs all arithmetic calculations (add, subtract, multiply, divide) and logical operations (comparisons). The Control Unit manages and coordinates all CPU operations."
    },
    {
        id: 44, unit: "systems", type: "mc",
        question: "Which type of memory is VOLATILE?",
        options: ["ROM", "RAM", "Flash memory", "Hard drive"],
        correct: 1,
        explanation: "RAM (Random Access Memory) is volatile — all data stored in RAM is lost when the computer is switched off. ROM, flash memory (USB drives), and hard drives retain data without power (non-volatile)."
    },
    {
        id: 45, unit: "systems", type: "mc",
        question: "Virtual memory is:",
        options: [
            "Memory built into the CPU for fast access",
            "The computer's permanent read-only startup memory",
            "Part of the hard drive used as an extension of RAM when RAM is full",
            "A type of cache memory"
        ],
        correct: 2,
        explanation: "Virtual memory is a technique where the operating system uses part of the hard drive or SSD as additional RAM when the physical RAM is full. It is much slower than real RAM because storage devices are far slower than RAM chips."
    },
    {
        id: 46, unit: "systems", type: "mc",
        question: "Which storage device has NO moving parts and is therefore more durable and faster?",
        options: [
            "HDD (Hard Disk Drive)",
            "Optical disc drive",
            "SSD (Solid State Drive)",
            "Dot matrix printer"
        ],
        correct: 2,
        explanation: "An SSD (Solid State Drive) uses flash memory chips with no moving parts, making it faster, more durable, quieter, and lighter than an HDD, which uses spinning magnetic disks and a mechanical read/write head."
    },
    {
        id: 47, unit: "systems", type: "mc",
        question: "Which network type covers the smallest geographic area (typically around one person or within a few metres)?",
        options: ["WAN", "MAN", "LAN", "PAN"],
        correct: 3,
        explanation: "A PAN (Personal Area Network) is the smallest network type, covering the area around an individual person (within ~10 metres). Examples include a Bluetooth connection between a phone and earphones, or a USB connection between devices."
    },
    {
        id: 48, unit: "systems", type: "mc",
        question: "In a star network topology, if the central switch/hub fails, what happens?",
        options: [
            "Only the device directly connected to the failed port loses connectivity",
            "The entire network goes down as all devices connect through the central hub",
            "Data automatically reroutes through another path",
            "Nothing — star networks have built-in redundancy"
        ],
        correct: 1,
        explanation: "In a star topology, all devices connect to a central switch or hub. If the central hub/switch fails, all devices lose connectivity because they all depend on it to communicate with each other."
    },
    {
        id: 49, unit: "systems", type: "mc",
        question: "What is the main advantage of open source software over proprietary software?",
        options: [
            "Open source software always has better technical support",
            "Open source software is always higher quality",
            "Open source software is usually free and its source code can be viewed and modified",
            "Open source software is always faster"
        ],
        correct: 2,
        explanation: "The main advantages of open source software are that it is usually free to use and distribute, and its source code is publicly available so developers can view, modify, and improve it. Examples: Linux, LibreOffice, Firefox."
    },
    {
        id: 50, unit: "systems", type: "mc",
        question: "The Internet is best described as:",
        options: [
            "A collection of websites accessed via a browser",
            "The global network infrastructure of interconnected computers",
            "A software application for sending emails",
            "A type of operating system"
        ],
        correct: 1,
        explanation: "The Internet is the global network infrastructure — billions of interconnected computers, routers, cables, and wireless connections. The World Wide Web (websites and pages accessed via a browser) is just one service that runs on the internet."
    },
    {
        id: 51, unit: "systems", type: "mc",
        question: "Cloud computing allows users to:",
        options: [
            "Speed up their CPU processing",
            "Store and access data and applications over the internet on remote servers",
            "Connect to a network without a router",
            "Print documents wirelessly"
        ],
        correct: 1,
        explanation: "Cloud computing stores data and runs applications on remote servers accessed via the internet, rather than on the user's local computer. Examples: Google Drive, Microsoft 365, Dropbox. Users can access data from any device with internet access."
    },
    {
        id: 52, unit: "systems", type: "mc",
        question: "Which protocol ensures that data packets sent over the internet arrive correctly and are reassembled in the right order?",
        options: ["HTTP", "TCP", "IP", "DNS"],
        correct: 1,
        explanation: "TCP (Transmission Control Protocol) breaks data into packets, numbers them, sends them, and ensures all packets arrive at the destination and are reassembled in the correct order. IP (Internet Protocol) handles addressing and routing of packets."
    },
    {
        id: 53, unit: "systems", type: "mc",
        question: "IoT (Internet of Things) refers to:",
        options: [
            "The collection of all websites on the internet",
            "Everyday physical devices embedded with sensors that connect to and exchange data over the internet",
            "A type of cloud storage service",
            "The physical cables that connect the internet"
        ],
        correct: 1,
        explanation: "IoT (Internet of Things) refers to everyday devices (fridges, TVs, lights, thermostats, fitness trackers) embedded with sensors and internet connectivity, allowing them to collect and exchange data automatically without human intervention."
    },

    // --- Module 4: Information Management ---
    {
        id: 54, unit: "info-mgmt", type: "mc",
        question: "Which of the following BEST describes 'information'?",
        options: [
            "Raw, unprocessed facts and figures without context",
            "Data that has been processed and given context so it has meaning",
            "Understanding gained through experience and interpretation",
            "A collection of files stored on a computer"
        ],
        correct: 1,
        explanation: "Information is data that has been processed, organised, and given context to make it meaningful. For example, '85' is raw data; 'Learner scored 85% for Mathematics in Term 1' is information."
    },
    {
        id: 55, unit: "info-mgmt", type: "mc",
        question: "Which data type would be MOST appropriate for storing a person's date of birth in a database?",
        options: ["Text", "Number", "Date/Time", "AutoNumber"],
        correct: 2,
        explanation: "Date/Time is the appropriate data type for dates. It allows date-specific operations (calculating age, sorting chronologically, filtering by date range). Using Text for dates prevents these calculations."
    },
    {
        id: 56, unit: "info-mgmt", type: "mc",
        question: "What does the binary number 1010 equal in decimal?",
        options: ["8", "10", "12", "14"],
        correct: 1,
        explanation: "Binary 1010 = (1x8) + (0x4) + (1x2) + (0x1) = 8 + 0 + 2 + 0 = 10 in decimal."
    },
    {
        id: 57, unit: "info-mgmt", type: "mc",
        question: "What is the difference between lossless and lossy compression?",
        options: [
            "Lossless makes files bigger; lossy makes files smaller",
            "Lossless retains all original data; lossy permanently discards some data for smaller file size",
            "Lossless is used for video; lossy is used for documents",
            "There is no difference — they produce identical results"
        ],
        correct: 1,
        explanation: "Lossless compression (e.g. ZIP, PNG) reduces file size without losing any data — the original file can be perfectly restored. Lossy compression (e.g. JPEG, MP3) discards some data permanently for much smaller files, with slight quality reduction."
    },
    {
        id: 58, unit: "info-mgmt", type: "mc",
        question: "In database design, a FOREIGN KEY is used to:",
        options: [
            "Uniquely identify each record within its own table",
            "Encrypt sensitive data in the database",
            "Link one table to another by referencing the primary key of a related table",
            "Automatically generate sequential record numbers"
        ],
        correct: 2,
        explanation: "A foreign key is a field in one table that references (contains the same value as) the primary key in another table. It creates the relationship between the two tables and enforces referential integrity."
    },
    {
        id: 59, unit: "info-mgmt", type: "mc",
        question: "Database normalisation is designed to:",
        options: [
            "Speed up the CPU when processing database queries",
            "Reduce data redundancy and improve data integrity",
            "Increase the file size of the database",
            "Create backup copies of the database"
        ],
        correct: 1,
        explanation: "Normalisation organises a database to minimise data redundancy (duplicate data) and improve data integrity (accuracy and consistency). This is done by dividing data into related tables and defining relationships between them."
    },
    {
        id: 60, unit: "info-mgmt", type: "mc",
        question: "ASCII is limited compared to Unicode because ASCII:",
        options: [
            "Uses more bits per character making it slower",
            "Can only represent 128 characters (mainly English) while Unicode supports all world languages",
            "Cannot represent numbers, only letters",
            "Is a lossy compression format"
        ],
        correct: 1,
        explanation: "ASCII uses 7 bits to represent only 128 characters — enough for English letters, digits, and basic punctuation. Unicode (especially UTF-8/UTF-16) supports characters from virtually all world languages (65 000+ characters)."
    },
    {
        id: 61, unit: "info-mgmt", type: "mc",
        question: "An ER (Entity-Relationship) diagram is used in database design to:",
        options: [
            "Write SQL queries to retrieve data",
            "Show entities, their attributes, and the relationships between them",
            "Create the visual forms for data entry",
            "Define the data types for each field"
        ],
        correct: 1,
        explanation: "An ER diagram is a visual planning tool that shows the entities (tables), their attributes (fields), and the relationships between entities before the database is built. It uses rectangles (entities), ovals (attributes), and diamonds (relationships)."
    },
    {
        id: 62, unit: "info-mgmt", type: "mc",
        question: "A school database has a Students table and an Enrolments table. One student can have many enrolments. This is a:",
        options: [
            "One-to-one relationship",
            "One-to-many relationship",
            "Many-to-many relationship",
            "Self-referencing relationship"
        ],
        correct: 1,
        explanation: "A one-to-many (1:M) relationship means one record in the first table (Students) can relate to many records in the second table (Enrolments). This is the most common type of database relationship."
    },

    // --- Module 5: e-Communications ---
    {
        id: 63, unit: "e-comm", type: "mc",
        question: "Which of the following is the BEST definition of netiquette?",
        options: [
            "Software used to block unwanted emails",
            "The rules and accepted polite behaviour for online communication",
            "A type of internet security protocol",
            "The speed at which data travels over a network"
        ],
        correct: 1,
        explanation: "Netiquette is the set of rules and accepted standards of polite, respectful behaviour when communicating online (emails, social media, forums, chats). It is 'internet etiquette'."
    },
    {
        id: 64, unit: "e-comm", type: "mc",
        question: "A digital footprint refers to:",
        options: [
            "The physical size of a digital file",
            "The trail of data and information left behind by a person's online activities",
            "A type of malware that tracks keyboard input",
            "The carbon footprint of using digital devices"
        ],
        correct: 1,
        explanation: "A digital footprint is the record of all data a person leaves behind through their online activities — websites visited, social media posts, online purchases, emails, and more. It can be active (deliberately shared) or passive (collected without direct action)."
    },
    {
        id: 65, unit: "e-comm", type: "mc",
        question: "Which of the following is an example of cyberbullying?",
        options: [
            "Sending a friend a birthday message on social media",
            "Sharing embarrassing photos of a classmate online without their consent",
            "Playing an online game with friends",
            "Posting a positive review of a product online"
        ],
        correct: 1,
        explanation: "Cyberbullying involves using digital technology to harass, embarrass, or harm someone. Sharing embarrassing photos without consent, sending threatening messages, and creating fake profiles to mock someone are all forms of cyberbullying."
    },
    {
        id: 66, unit: "e-comm", type: "mc",
        question: "The POPI Act in South Africa requires organisations to:",
        options: [
            "Make all personal data publicly available",
            "Only store data on government-approved servers",
            "Collect and process personal information lawfully, with consent, and store it securely",
            "Delete all customer data after 30 days"
        ],
        correct: 2,
        explanation: "The POPI Act (Protection of Personal Information Act) requires organisations to collect personal information lawfully and with consent, use it only for the stated purpose, store it securely, and allow individuals to access and correct their data."
    },
    {
        id: 67, unit: "e-comm", type: "mc",
        question: "Creative Commons licences differ from standard copyright because they:",
        options: [
            "Remove all rights from the creator",
            "Require payment for every use of the work",
            "Allow creators to grant specific permissions to others while retaining some rights",
            "Only apply to software, not creative works"
        ],
        correct: 2,
        explanation: "Creative Commons licences allow creators to share their work with specified conditions (e.g. must give credit, non-commercial use only, must share alike). Standard copyright gives the creator full exclusive rights and others need explicit permission for any use."
    },
    {
        id: 68, unit: "e-comm", type: "mc",
        question: "The digital divide refers to:",
        options: [
            "The difference in processing speed between old and new computers",
            "The gap between people who have access to digital technology and those who do not",
            "The separation of personal and work data on a device",
            "The difference between analogue and digital signals"
        ],
        correct: 1,
        explanation: "The digital divide is the inequality between people who have access to computers, internet, and digital skills, and those who do not. In South Africa, this is particularly significant between urban and rural communities and different socioeconomic groups."
    },
    {
        id: 69, unit: "e-comm", type: "mc",
        question: "Which of the following is the BEST strategy to verify whether a news story is fake?",
        options: [
            "Check how many likes and shares the post has received",
            "Trust any source that has a professional-looking website",
            "Cross-check the story with multiple reputable news sources and use fact-checking sites",
            "Only believe news shared by friends on social media"
        ],
        correct: 2,
        explanation: "The best way to identify fake news is to verify the story with multiple reputable news sources and use dedicated fact-checking sites (e.g. Africa Check, Snopes). Likes, shares, and professional appearance can all be faked."
    },
    {
        id: 70, unit: "e-comm", type: "mc",
        question: "Two-factor authentication (2FA) improves online safety by:",
        options: [
            "Requiring two separate passwords for every login",
            "Encrypting all stored files on the device",
            "Requiring a second form of verification (e.g. OTP sent to phone) in addition to a password",
            "Automatically blocking all unknown email senders"
        ],
        correct: 2,
        explanation: "Two-factor authentication adds a second layer of security beyond a password. Even if a hacker knows your password, they cannot log in without the second factor — typically a one-time PIN (OTP) sent to your phone or generated by an authenticator app."
    },
    {
        id: 71, unit: "e-comm", type: "mc",
        question: "What is a key responsibility of a good digital citizen?",
        options: [
            "Sharing as much personal information as possible to build an online presence",
            "Always using the internet anonymously to avoid responsibility",
            "Respecting others online, protecting privacy, and using technology ethically and legally",
            "Downloading any software freely available on the internet"
        ],
        correct: 2,
        explanation: "A good digital citizen uses technology responsibly and ethically: respecting others online (no cyberbullying), protecting personal privacy, respecting intellectual property (no pirating), and following applicable laws like the POPI Act and copyright law."
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
    },

    // --- Module 2: Solution Development ---
    {
        id: "f11",
        title: "Spreadsheet Lookup Functions",
        unit: "solution-dev",
        keyPoints: [
            "VLOOKUP: searches the first COLUMN of a table for a value and returns data from a specified column in the same row",
            "HLOOKUP: searches the first ROW of a table for a value and returns data from a specified row",
            "VLOOKUP syntax: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
            "range_lookup: FALSE = exact match (most common); TRUE = approximate match",
            "INDEX: returns the value at a specific row and column position in a range",
            "MATCH: returns the position (row or column number) of a value in a range",
            "INDEX + MATCH combined is more flexible than VLOOKUP — can look left and right"
        ]
    },
    {
        id: "f12",
        title: "Conditional Functions and Data Tools",
        unit: "solution-dev",
        keyPoints: [
            "IF(logical_test, value_if_true, value_if_false) — tests a condition and returns different results",
            "Nested IF: place another IF as the value_if_false to test multiple conditions",
            "COUNTIF(range, criteria) — counts cells meeting a condition; SUMIF(range, criteria, sum_range) — sums cells",
            "Conditional formatting: automatically applies formatting (colour, bold) based on cell values or formulas",
            "Data validation: restricts what data can be entered in a cell (whole number, list, date range)",
            "Charts: choose correct type (bar = comparison, line = trend, pie = proportion); always include title, axis labels, legend"
        ]
    },
    {
        id: "f13",
        title: "Database Concepts and SQL",
        unit: "solution-dev",
        keyPoints: [
            "Database structure: tables contain fields (columns) and records (rows)",
            "Primary key: uniquely identifies each record; must be unique and not null",
            "Forms: user-friendly data entry interface; Reports: formatted read-only output for printing",
            "SQL SELECT syntax: SELECT fields FROM table WHERE condition ORDER BY field ASC/DESC",
            "Aggregate functions: COUNT(*), SUM(field), AVG(field), MIN(field), MAX(field)",
            "LIKE with wildcards: % = any characters ('Van%' finds all starting with Van); _ = one character",
            "BETWEEN: inclusive range filter — WHERE Age BETWEEN 16 AND 18"
        ]
    },
    {
        id: "f14",
        title: "HTML and CSS Basics",
        unit: "solution-dev",
        keyPoints: [
            "HTML provides the STRUCTURE of a webpage; CSS provides the STYLE (colours, fonts, layout)",
            "Essential HTML tags: <!DOCTYPE html>, <html>, <head>, <title>, <body>",
            "Content tags: <h1>-<h6>, <p>, <a href=''>, <img src=''>, <ul>/<ol>/<li>, <div>, <span>",
            "Inline CSS: style attribute on element — not reusable; Internal CSS: <style> in <head> — one page",
            "External CSS: separate .css file linked to all pages — best practice for multi-page sites",
            "CSS selectors: element (p {}), class (.name {}), ID (#name {}) — ID is unique, class is reusable",
            "Common CSS properties: color, background-color, font-size, font-family, border, margin, padding"
        ]
    },

    // --- Module 3: System Technologies ---
    {
        id: "f15",
        title: "CPU and Memory",
        unit: "systems",
        keyPoints: [
            "CPU has three main components: ALU (performs calculations/logic), CU (controls and coordinates), Registers (ultra-fast temporary storage in CPU)",
            "RAM: volatile (data lost when power off), fast, holds running programs and active data",
            "ROM: non-volatile (data retained without power), stores BIOS/firmware for startup",
            "Cache memory: small, extremely fast memory in/near CPU — stores frequently accessed data",
            "L1 cache is fastest and smallest; L2 and L3 are progressively larger and slightly slower",
            "Virtual memory: hard drive space used as extra RAM when RAM is full — much slower, causes slowdowns"
        ]
    },
    {
        id: "f16",
        title: "Storage Devices and Operating Systems",
        unit: "systems",
        keyPoints: [
            "HDD: mechanical spinning disk, slow, cheap per GB, fragile — susceptible to shock",
            "SSD: flash memory chips, no moving parts, fast, durable, silent, more expensive per GB",
            "Optical: uses laser (CD ~700MB, DVD ~4.7GB, Blu-ray ~25GB); variants: ROM, R (write-once), RW (rewritable)",
            "Flash/USB drives: portable, solid-state, plug-and-play storage",
            "OS functions: resource management, user interface (GUI/CLI), file management, security, hardware communication",
            "Open source (Linux, LibreOffice): free, modifiable source code; Proprietary (Windows, MS Office): paid licence, closed source"
        ]
    },
    {
        id: "f17",
        title: "Networks and the Internet",
        unit: "systems",
        keyPoints: [
            "PAN (<10m, Bluetooth), LAN (building/school, fast, private), MAN (city), WAN (countries — internet is largest WAN)",
            "Star topology: all devices connect to central hub/switch — most common; hub failure = network down",
            "Bus: single cable backbone (old, one break = network down); Ring: circular, one failure can break ring; Mesh: fully connected, expensive but reliable",
            "TCP: breaks data into packets, ensures all arrive and are reassembled correctly",
            "IP: addresses packets and routes them to correct destination",
            "Internet = physical network infrastructure; WWW = websites/pages accessed via browser (one service on the internet)",
            "HTTP: transfers web pages (not secure); HTTPS: encrypted with SSL/TLS (secure — look for padlock icon)",
            "Cloud computing: remote server storage and processing; IoT: everyday devices connected to internet with sensors"
        ]
    },

    // --- Module 4: Information Management ---
    {
        id: "f18",
        title: "Data, Information and Representation",
        unit: "info-mgmt",
        keyPoints: [
            "Data: raw unprocessed facts (e.g. 85, 72, 91); Information: processed data with context ('85% for Maths Term 1'); Knowledge: applied understanding ('consider engineering career')",
            "Data types: Text (letters/symbols), Number (calculations), Date/Time (dates), Boolean/Yes-No (true/false), AutoNumber (unique sequential ID)",
            "Binary: computers represent all data as 0s and 1s (off/on electrical states, base-2 number system)",
            "Convert decimal to binary: repeatedly divide by 2 and read remainders bottom to top",
            "ASCII: 7 bits, 128 characters, English only; Unicode (UTF-8/UTF-16): supports all world languages (65 000+ characters)",
            "Lossless compression (ZIP, PNG): no data lost; Lossy compression (JPEG, MP3): smaller file, some quality permanently lost"
        ]
    },
    {
        id: "f19",
        title: "Database Design and Normalisation",
        unit: "info-mgmt",
        keyPoints: [
            "Primary key: uniquely identifies each record in a table — must be unique, cannot be null",
            "Foreign key: field in one table that references the primary key of another table — creates relationships",
            "Referential integrity: foreign key must match an existing primary key value — prevents orphan records",
            "Relationships: 1:1 (one person : one passport), 1:M (one customer : many orders), M:M (students : subjects — needs junction table)",
            "Normalisation reduces data redundancy and improves integrity",
            "1NF: one value per cell; 2NF: no partial dependencies; 3NF: no transitive dependencies",
            "ER diagram: rectangles = entities, ovals = attributes, diamonds = relationships, crow's foot = cardinality"
        ]
    },

    // --- Module 5: e-Communications ---
    {
        id: "f20",
        title: "Electronic Communication and Netiquette",
        unit: "e-comm",
        keyPoints: [
            "Electronic communication methods: email (asynchronous), IM/chat (real-time text), VoIP (voice over internet), video conferencing (audio + video), social media (sharing/networking)",
            "Netiquette: rules of polite online behaviour — do not type in ALL CAPS (shouting), be respectful, check facts before sharing",
            "Digital footprint: data trail left by online activities — active (deliberately posted) or passive (tracked by cookies/browser history)",
            "Employers and universities can view your digital footprint — maintain a positive online presence",
            "Cyberbullying: use digital tech to harass, threaten, or embarrass — respond by blocking, saving evidence, reporting to adults",
            "Fake news: verify with multiple reputable sources; use fact-checking sites (Africa Check, Snopes)"
        ]
    },
    {
        id: "f21",
        title: "Online Safety, Laws and Digital Citizenship",
        unit: "e-comm",
        keyPoints: [
            "Online safety: strong unique passwords, enable 2FA, do not overshare personal info, be cautious of phishing, keep software updated",
            "POPI Act (SA): organisations must collect data lawfully, with consent, store it securely, and allow individuals to access their data — fines up to R10 million",
            "Copyright: automatic protection for original works — others cannot copy without permission",
            "Creative Commons: free licences that grant specific permissions while creator retains some rights (CC BY, CC BY-NC, CC BY-SA, CC0)",
            "Digital divide: gap between those with and without access to technology — caused by cost, infrastructure, skills, inequality",
            "Digital citizenship: responsible, ethical, safe technology use — respect others, protect privacy, respect IP, share accurate information"
        ]
    }
];


// ============================================================
// NOTES DATA
// ============================================================
const notes = [
    {
        title: "Computers in Our Everyday Lives",
        unit: "comp",
        content: `Computers are used throughout modern society because they offer three core benefits: efficiency, accuracy, and reliability. Efficiency means computers save time (calculations completed in seconds that would take humans hours), save labour (one computer can do the work of many people, e.g. automated payroll systems), and save resources (paperless offices, email replacing postal letters). Accuracy depends on two essential requirements: quality programs (well-written, bug-free software) and quality data (correct input). The principle of GIGO — Garbage In, Garbage Out — means that no matter how powerful the computer is, incorrect input will always produce incorrect output. Reliability refers to a computer's ability to work 24 hours a day, 7 days a week without tiring, making mistakes from fatigue, or needing breaks.

ICT provides significant communication benefits. It eliminates barriers of time and distance, allowing instant global communication. VoIP (Voice over Internet Protocol) enables cheap or free voice calls over the internet (e.g. Skype, WhatsApp calls, Microsoft Teams). Social networking platforms enable people to connect, collaborate, and share information globally.

Computers are categorised as non-portable (desktop, server) or portable (laptop, tablet, hybrid/convertible, smartphone, phablet). Desktops are designed for a fixed location; servers provide services to other computers on a network and run 24/7. Portable devices range from powerful laptops to lightweight tablets. Smartphones and tablets are always-on devices — they are always ready without needing to boot up. Hybrids combine laptop and tablet features through detachable or foldable keyboards.

Users are classified into four categories: personal/home users (basic computing needs), SOHO (Small Office/Home Office) users (small business needs), power users (demanding tasks like video editing, requiring high-end hardware), and mobile users (working on the go, requiring portability and connectivity).

Convergence is the combining of multiple technologies into one device. The smartphone is the prime example, integrating a camera, GPS, music player, phone, calculator, internet browser, and more into a single device.`
    },
    {
        title: "Hardware Devices",
        unit: "hw",
        content: `The information processing cycle has five stages: Input (data entered via input devices), Processing (CPU manipulates data using program instructions), Output (results presented via output devices), Storage (data saved for future use), and Communication (data transmitted over a network). Before processing can occur, both the software (instructions) and the data must be loaded into RAM.

Input devices include keyboards, mice, touch screens, scanners, digital cameras, webcams, and microphones. Keyboards are familiar and accurate for text input but can cause RSI (Repetitive Strain Injury) and Carpal Tunnel Syndrome with prolonged use — conditions addressed by ergonomics (the study of designing equipment to fit users and minimise injury). Mice provide intuitive point-and-click control but also carry RSI risks. Touch screens act as both input AND output devices; they are intuitive for mobile use but collect fingerprints and are impractical for detailed or large-volume text input.

Scanners convert physical documents into digital images. OCR (Optical Character Recognition) software then converts these scanned images of text into editable text by recognising character patterns. Scanner resolution is measured in dpi (dots per inch): 300 dpi for print-quality output, 72 dpi for screen display. Digital camera resolution is measured in megapixels (MP): horizontal pixels × vertical pixels ÷ 1,000,000. Geotagging adds GPS coordinates to digital photos automatically.

Monitor display quality is determined by resolution (pixels), colour depth (bits per pixel), pixel density (PPI), refresh rate (Hz — times screen redraws per second), contrast ratio, and aspect ratio (e.g. 16:9 widescreen).

Printers include laser (fast, high quality, uses toner, best for high-volume text), inkjet (uses liquid ink, good for colour/photos, expensive per page), and dot matrix (impact printer using pins and ink ribbon — noisy and low quality, but uniquely able to print carbon copies through multi-part forms). Environmental concerns related to computing include paper waste, toxic cartridge disposal, energy consumption, and e-waste. Malware threats include keyloggers (record keystrokes), spyware (monitors user activity), and Trojans (disguise as legitimate software).`
    },
    {
        title: "Solution Development",
        unit: "solution-dev",
        content: `Spreadsheet applications offer advanced functions for data analysis. VLOOKUP searches the first column of a table for a value and returns data from a specified column in the same row: =VLOOKUP(lookup_value, table_array, col_index_num, FALSE). HLOOKUP works horizontally, searching the first row. INDEX returns the value at a specific position in a range; MATCH returns the position of a value in a range. Combined as =INDEX(return_range, MATCH(lookup_value, search_range, 0)), they create a flexible lookup more powerful than VLOOKUP alone. IF tests a logical condition: =IF(test, value_if_true, value_if_false). Nested IFs test multiple conditions by using another IF as the false result. COUNTIF counts cells meeting a criterion; SUMIF sums cells based on a condition applied to another range. Conditional formatting applies automatic visual formatting (colours, icons) to cells based on their values. Data validation restricts input to specific types or ranges (whole numbers, drop-down lists, date ranges).

Database concepts are foundational to information management. A database is an organised collection of related data. Tables contain fields (columns, each representing one attribute) and records (rows, each representing one complete entry). A primary key uniquely identifies each record and cannot be null. Forms provide user-friendly data entry interfaces; reports format data for printing and presentation. SQL (Structured Query Language) retrieves and manipulates data: SELECT specifies fields, FROM specifies the table, WHERE filters records, and ORDER BY sorts results. Aggregate functions COUNT(*), SUM(), AVG(), MIN(), MAX() perform calculations on groups of records. LIKE with wildcards (% for any characters, _ for one character) enables pattern matching. BETWEEN filters within an inclusive range.

HTML provides the structure of webpages using tags such as <!DOCTYPE html>, <html>, <head>, <title>, <body>, <h1>-<h6>, <p>, <a href="">, and <img src="">. CSS styles HTML elements. Inline CSS uses the style attribute directly on elements; internal CSS uses a <style> block in the <head>; external CSS uses a separate .css file linked to all pages — the best practice for multi-page sites. CSS selectors target elements by type (p {}), class (.name {}), or unique ID (#name {}).`
    },
    {
        title: "System Technologies",
        unit: "systems",
        content: `The CPU (Central Processing Unit) is the brain of a computer and consists of three components: the ALU (Arithmetic Logic Unit), which performs all arithmetic and logical operations; the CU (Control Unit), which fetches, decodes, and executes instructions; and registers, which are ultra-fast storage locations inside the CPU holding data currently being processed.

Memory types serve different purposes. RAM (Random Access Memory) is volatile (data lost on power-off), fast, and holds currently running programs and active data. ROM (Read-Only Memory) is non-volatile, containing startup/BIOS firmware. Cache memory (L1, L2, L3) is extremely fast memory near the CPU that stores frequently accessed data to reduce waiting. Virtual memory uses hard drive space as extra RAM when physical RAM is full — it is much slower and causes system slowdowns.

Storage devices include HDDs (Hard Disk Drives: mechanical spinning disks, cheap per GB, slower, fragile) and SSDs (Solid State Drives: flash memory chips, no moving parts, much faster, durable, silent, more expensive per GB). Optical discs (CD ~700 MB, DVD ~4.7 GB, Blu-ray ~25 GB) use laser light to read/write data. Flash/USB drives provide portable solid-state storage.

Operating systems manage hardware resources, provide the user interface, manage files, enforce security, and facilitate hardware-software communication. Examples: Windows, macOS, Linux, Android, iOS. Application software performs specific tasks for users. Open source software (Linux, LibreOffice) has freely available, modifiable source code and is usually free. Proprietary software (Windows, MS Office) has closed source code and requires purchasing a licence.

Networks: PAN (<10m, Bluetooth), LAN (building/campus, fast, private), MAN (city), WAN (countries — the internet is the largest WAN). Star topology (most common, central switch) is contrasted with bus, ring, and mesh topologies. TCP/IP is the standard protocol suite: TCP ensures reliable packet delivery and reassembly; IP addresses and routes packets. The internet is the global network infrastructure; the WWW is the service of websites accessed via HTTP/HTTPS. HTTPS encrypts communication with SSL/TLS. Cloud computing provides remote storage and processing. IoT connects everyday devices to the internet with sensors for automation and monitoring.`
    },
    {
        title: "Information Management",
        unit: "info-mgmt",
        content: `Data, information, and knowledge exist on a progression. Data is raw, unprocessed facts without context (e.g. the number 85). Information is data processed and given context to create meaning (e.g. 'Learner scored 85% for Mathematics in Term 1'). Knowledge is information that has been understood, interpreted, and applied through experience to support decisions (e.g. 'This learner excels in quantitative subjects and should consider engineering').

Data types define what kind of data a field stores: Text (letters, symbols, alphanumeric), Number (for arithmetic), Date/Time (dates and times), Boolean/Yes-No (true/false values), and AutoNumber (automatically assigned unique sequential numbers, commonly used as primary keys). Selecting the correct data type is essential for data integrity and enabling appropriate operations.

All computer data is represented in binary (base 2) — sequences of 0s and 1s corresponding to off/on electrical states. To convert decimal to binary, repeatedly divide by 2 and read remainders from bottom to top (e.g. 13 = 1101 in binary). ASCII encoded 128 characters using 7 bits, limited to English. Unicode (UTF-8/UTF-16) supports over 65,000 characters from virtually all world languages and is the modern standard. File formats vary by type (documents: .docx, .pdf; images: .jpg, .png; audio: .mp3; video: .mp4). File compression reduces file size: lossless compression (ZIP, PNG) retains all data; lossy compression (JPEG, MP3) permanently discards some data for greater size reduction.

Database design requires normalisation — the process of organising tables to eliminate redundancy and improve integrity. 1NF requires one value per cell; 2NF eliminates partial dependencies on the key; 3NF eliminates transitive dependencies. A primary key uniquely identifies each record. A foreign key in one table references the primary key of another, creating a relationship. Referential integrity ensures foreign key values always match existing primary key values. Relationships are classified as one-to-one, one-to-many (most common), or many-to-many (resolved with a junction table). ER diagrams visually represent entities (rectangles), attributes (ovals), and relationships (diamonds).`
    },
    {
        title: "e-Communications",
        unit: "e-comm",
        content: `Electronic communication encompasses multiple methods: email (asynchronous text and file transfer), instant messaging/IM (real-time text chat), VoIP (voice calls over the internet, e.g. Skype, WhatsApp), video conferencing (real-time audio and video, e.g. Zoom, Teams, Google Meet), and social media platforms (content sharing and networking). Each method has appropriate contexts and associated responsibilities.

Netiquette (internet etiquette) is the accepted code of polite online behaviour: do not type in ALL CAPS (interpreted as shouting), be respectful and considerate, verify information before sharing, keep messages clear and appropriate to context, and respect others' privacy. A digital footprint is the data trail created by online activity — active footprints (deliberate posts, shares, comments) and passive footprints (browsing history, cookies, location tracking). Digital footprints are effectively permanent and visible to employers, universities, and others.

Social media provides significant benefits (global connection, information sharing, community building) alongside risks (privacy loss, cyberbullying, exposure to fake news, addiction). Cyberbullying uses digital technology to harass, threaten, or embarrass — examples include threatening messages, non-consensual sharing of images, and impersonation. Appropriate responses include not retaliating, blocking and reporting the bully, saving evidence (screenshots), and reporting to a trusted adult or platform. Fake news is misinformation spread online; it is identified by checking multiple reputable sources and using fact-checking organisations such as Africa Check and Snopes.

The POPI Act (Protection of Personal Information Act) is South African legislation requiring organisations to collect personal data lawfully and with consent, use it only for its stated purpose, store it securely, allow individuals to access and correct their data, and report breaches. Non-compliance carries fines up to R10 million. Copyright automatically protects original works; Creative Commons licences allow creators to grant specific permissions (attribution, non-commercial use, share-alike) while retaining other rights. The digital divide is the inequality in access to technology between socioeconomic and geographic groups — a significant challenge in South Africa. Online safety practices include strong unique passwords, two-factor authentication (2FA), avoiding oversharing personal information, recognising phishing, and keeping software updated. Digital citizenship involves the responsible, ethical, legal, and safe use of technology.`
    }
];
