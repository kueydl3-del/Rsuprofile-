/**
 * Data store for Namon Karnsa-art (ณมน การสอาด) - Hand-Drawn & Creative Digital Artist Portfolio & CV
 */

const PORTFOLIO_DATA = {
  profile: {
    fullNameTh: "ณมน การสอาด",
    fullNameEn: "Namon Karnsa-art",
    nickname: "มน (Mon / Namon)",
    titlesTh: [
      "Digital Artist & UI/UX Designer 🎨",
      "Front-End Creative Developer 💻",
      "Hand-Drawn & Media Creator ✏️",
      "AI Arts & Innovation Explorer ✨"
    ],
    titlesEn: [
      "Digital Artist & UI/UX Designer 🎨",
      "Front-End Creative Developer 💻",
      "Hand-Drawn & Media Creator ✏️",
      "AI Arts & Innovation Explorer ✨"
    ],
    tagline: "แต่งแต้มจินตนาการสู่โลกดิจิทัล ด้วยลายเส้นภาพวาดมือ ดีไซน์ที่มีชีวิตชีวา และเทคโนโลยีเว็บยุคใหม่",
    taglineEn: "Bringing imagination to life through hand-drawn aesthetics, playful UI/UX design, and creative web technology.",
    aboutShort: "ศิลปินดิจิทัลและนักออกแบบ UI/UX ที่หลงใหลในเสน่ห์ของงานวาดมือ ลายเส้นสเก็ตช์ และลูกเล่นอินเทอร์แอคทีฟ ชอบผสานศิลปะเข้ากับโค้ดและเครื่องมือ AI เพื่อสร้างประสบการณ์เว็บที่อบอุ่น โดดเด่น และไม่ซ้ำใคร",
    aboutFull: `สวัสดีค่ะ! ดิฉันชื่อ **ณมน การสอาด (มน)** เป็นนักสร้างสรรค์ดิจิทัลที่มุ่งเน้นการศึกษาในสายงาน **Digital Arts, UI/UX Design, Front-End Development & AI Innovation (DAI104)** 🎨✨

ดิฉันเชื่อว่าในยุคที่เว็บไซต์ส่วนใหญ่ดูเป็นทางการและมีกรอบแข็ง การเติมสัมผัสแห่งความเป็นมนุษย์ (Human Touch) ผ่าน **ลายเส้นวาดมือ ภาพร่างสเก็ตช์ โทนสีอบอุ่นสดใส และลูกเล่นงานคราฟต์** จะช่วยให้ผู้ใช้งานรู้สึกเข้าถึงง่าย เพลิดเพลิน และสร้างความประทับใจที่แตกต่างได้อย่างแท้จริง พร้อมที่จะเรียนรู้และร่วมงานกับทุกคนค่ะ! 💛💜`,
    location: "กรุงเทพมหานคร, ประเทศไทย (Bangkok, Thailand)",
    email: "namon.karnsaart@email.com",
    phone: "089-765-4321",
    lineId: "@namon.art",
    github: "https://github.com/namon-k",
    linkedin: "https://linkedin.com/in/namon-karnsaart",
    website: "https://namon-art.web.app",
    birthday: "12 ตุลาคม 2004",
    status: "พร้อมรับงานฟรีแลนซ์ / ฝึกงาน / ร่วมงานโปรเจกต์ครีเอทีฟ 🌟",
    languages: [
      { name: "ภาษาไทย (Thai)", level: "Native / ภาษาแม่", percent: 100 },
      { name: "ภาษาอังกฤษ (English)", level: "Professional Working / สื่อสารคล่องแคล่ว", percent: 88 },
      { name: "ภาษาญี่ปุ่น (Japanese)", level: "Basic / สนทนาพื้นฐาน", percent: 50 }
    ],
    stats: [
      { number: 20, suffix: "+", labelTh: "ชิ้นงานวาด & โปรเจกต์", labelEn: "Artworks & Projects", icon: "ri-brush-3-line" },
      { number: 8, suffix: "+", labelTh: "เกียรติบัตร & การประกวด", labelEn: "Certificates & Awards", icon: "ri-award-line" },
      { number: 100, suffix: "%", labelTh: "พลังความสร้างสรรค์", labelEn: "Creative Energy", icon: "ri-heart-3-line" },
      { number: 3, suffix: "+", labelTh: "ปีแห่งการสเก็ตช์ & โค้ดดิ้ง", labelEn: "Years of Crafting", icon: "ri-pencil-ruler-line" }
    ]
  },

  education: [
    {
      year: "2566 - ปัจจุบัน (2023 - Present)",
      degree: "ปริญญาตรี (Bachelor's Degree)",
      faculty: "สาขานวัตกรรมศิลปะดิจิทัลและปัญญาประดิษฐ์ (Digital Arts & AI Innovation - DAI104)",
      institution: "มหาวิทยาลัยชั้นนำ (Leading University in Thailand)",
      gpa: "GPAX: 3.86 (เกียรตินิยมอันดับ 1 ในเป้าหมาย)",
      description: "มุ่งเน้นการศึกษาด้านการวาดภาพประกอบดิจิทัล (Digital Illustration), การออกแบบ UI/UX เชิงทดลอง, การพัฒนา Front-End Web Craft, และการนำ Generative AI มาผสมผสานในการผลิตสื่อสร้างสรรค์",
      highlights: [
        "รางวัลชนะเลิศการออกแบบ Art & Digital Innovation โครงการ DAI104 Showcase",
        "ออกแบบชุด Visual Mascot & Hand-drawn Assets สำหรับนิทรรศการศิลปะมหาวิทยาลัย",
        "หัวหน้าทีมโปรเจกต์ Front-End Interactive Storytelling Web Experience"
      ]
    },
    {
      year: "2560 - 2565 (2017 - 2022)",
      degree: "มัธยมศึกษาตอนปลาย (High School Diploma)",
      faculty: "แผนการเรียน ศิลป์-คำนวณ & ดิจิทัลมีเดีย",
      institution: "โรงเรียนมัธยมชั้นนำ (Leading High School)",
      gpa: "GPAX: 3.90",
      description: "ปูพื้นฐานการวาดภาพ ลายเส้น สเก็ตช์ติ้ง และคอมพิวเตอร์กราฟิก พร้อมเข้าร่วมกิจกรรมชมรมศิลปะสร้างสรรค์และสโมสรมีเดีย",
      highlights: [
        "ประธานชมรมศิลปะและการออกแบบประจำโรงเรียน",
        "ชนะเลิศการประกวดภาพวาดสร้างสรรค์วันเยาวชนแห่งชาติ"
      ]
    }
  ],

  skills: {
    design: [
      { name: "Digital Illustration & Sketching", level: 96, icon: "ri-quill-pen-line", desc: "Procreate, Clip Studio, Hand-drawn doodles, Vector Art" },
      { name: "UI/UX Design & Prototyping", level: 92, icon: "ri-layout-masonry-line", desc: "Figma, Interactive Wireframing, User Flow, Micro-interactions" },
      { name: "Adobe Creative Cloud", level: 90, icon: "ri-palette-line", desc: "Photoshop, Illustrator, After Effects, InDesign" },
      { name: "Brand Identity & Craft Stickers", level: 94, icon: "ri-price-tag-3-line", desc: "Logo Design, Moodboard, Washi & Sticker Merch Design" },
      { name: "Design Thinking & Storyboarding", level: 88, icon: "ri-mind-map", desc: "User Empathy, Visual Storytelling, Usability Testing" }
    ],
    technical: [
      { name: "HTML5 & Semantic Web Canvas", level: 94, icon: "ri-html5-line", desc: "Modern semantic structure, SEO & Accessibility" },
      { name: "CSS3 & Hand-Drawn Styling", level: 92, icon: "ri-css3-line", desc: "Custom SVG borders, Keyframe animations, Responsive Grid" },
      { name: "JavaScript (ES6+)", level: 84, icon: "ri-javascript-line", desc: "DOM, Canvas Interactive, Web Audio, Async APIs" },
      { name: "Front-End Libraries (React / Vue)", level: 76, icon: "ri-reactjs-line", desc: "Component-based architecture, Interactive State" },
      { name: "SVG & Canvas Animation", level: 86, icon: "ri-magic-line", desc: "Vector animation, Particle effects, Interactive Doodles" },
      { name: "Git / GitHub & Web Deployment", level: 80, icon: "ri-github-line", desc: "Version Control, Netlify, Vercel, Firebase" }
    ],
    aiAndTools: [
      { name: "Generative AI Art (Midjourney / Stable Diffusion)", level: 92, icon: "ri-sparkling-2-line", desc: "Style LoRA training, Advanced Prompt Crafting, Concept Art" },
      { name: "AI Creative Assist (ChatGPT, Claude)", level: 94, icon: "ri-robot-2-line", desc: "Story generation, Code debugging, Idea brainstorming" },
      { name: "Visual Infographics & Pitch Decks", level: 90, icon: "ri-presentation-line", desc: "Canva, Notion, Digital Artbook Layouts" },
      { name: "Digital Tablet & Stylus Workflow", level: 98, icon: "ri-tablet-line", desc: "Wacom, iPad Pro & Apple Pencil Master" }
    ],
    softSkills: [
      { name: "Imaginative Creativity", desc: "คิดนอกกรอบ ถ่ายทอดไอเดียเป็นภาพได้อย่างมีเอกลักษณ์", icon: "ri-lightbulb-flash-line" },
      { name: "Empathy & User Connection", desc: "เข้าใจความรู้สึกของผู้ใช้ ออกแบบด้วยใจที่ใส่ใจผู้คน", icon: "ri-heart-pulse-line" },
      { name: "Adaptability & Curiosity", desc: "เปิดรับเทคโนโลยีและทดลองเทคนิคงานศิลป์ใหม่ๆ ตลอดเวลา", icon: "ri-compass-3-line" },
      { name: "Collaborative Team Player", desc: "ทำงานร่วมกับทีมได้อย่างราบรื่น อารมณ์ดี และรับฟังทุกมุมมอง", icon: "ri-team-line" },
      { name: "Meticulous Craftsmanship", desc: "ใส่ใจในทุกรายละเอียด ทั้งลายเส้น แสงเงา และจังหวะแอนิเมชัน", icon: "ri-focus-3-line" },
      { name: "Positive Storytelling", desc: "สื่อสารนำเสนองานได้อย่างมีเสน่ห์และสร้างแรงบันดาลใจ", icon: "ri-chat-smile-3-line" }
    ]
  },

  projects: [
    {
      id: "sketchbook-diary-web",
      title: "Mon's Interactive Sketchbook & Creative Gallery",
      titleTh: "สมุดสเก็ตช์ดิจิทัลอินเทอร์แอคทีฟ & แกลเลอรีผลงานของมน",
      category: "web",
      categoryLabel: "Web Development / Hand-drawn UI",
      featured: true,
      badge: "Featured Sketch",
      date: "2024",
      shortDesc: "เว็บไซต์สมุดสเก็ตช์เสมือนจริงที่เปิดหน้ากระดาษได้ ผสานลายเส้นวาดมือและเอฟเฟกต์เสียงเปิดกระดาษสุดคลาสสิก",
      fullDesc: "โปรเจกต์พัฒนาเว็บแอปพลิเคชันที่นำเสนอผลงานศิลปะในรูปแบบสมุดสเก็ตช์แบบโต้ตอบ (Interactive Digital Sketchbook) ผู้ใช้สามารถพลิกหน้ากระดาษ ซูมดูลายเส้นดินสอ ปรับสลับโหมดแสงไฟ และเลือกฟังเพลง Lo-fi ระหว่างชมผลงานได้ พัฒนาด้วย Pure JavaScript และ CSS 3D Transforms",
      techStack: ["HTML5 Canvas", "CSS 3D Flip", "JavaScript ES6", "Web Audio API", "Hand-drawn SVG"],
      highlights: [
        "จำลองสัมผัสกระดาษและเสียงพลิกหน้าแบบเรียลไทม์",
        "ภาพประกอบวาดมือและลายเซ็นดิจิทัล 100%",
        "คะแนนความพึงพอใจการเข้าชมสูงถึง 98%"
      ],
      gradient: "linear-gradient(135deg, #FEEFC6 0%, #DDD5F3 100%)",
      icon: "ri-book-open-line",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "dai104-doodle-portal",
      title: "DAI104 Doodle & AI Creative Learning Portal",
      titleTh: "ระบบพอร์ทัลการเรียนรู้ลายเส้นดนตรีและ AI สไตล์ DAI104",
      category: "ai",
      categoryLabel: "AI & Innovation / Digital Art",
      featured: true,
      badge: "Innovation Award",
      date: "2024",
      shortDesc: "พอร์ทัลรวบรวม Prompt และเครื่องมือ AI สำหรับงานวาดภาพสเก็ตช์ พร้อมระบบแนะนำสไตล์ภาพศิลปะ",
      fullDesc: "เว็บพอร์ทัลที่ออกแบบขึ้นสำหรับนักศึกษา DAI104 เพื่อให้ศิลปินสามารถทดลองเปลี่ยนไอเดียข้อความเป็นภาพร่างสเก็ตช์ (Text-to-Sketch) โดยมีคลังรวม Prompt สไตล์วาดมือ เทมเพลตลายเส้น และระบบจัดเก็บกระดาน Moodboard ส่วนตัว",
      techStack: ["JavaScript", "Prompt Engineering", "CSS Craft Design", "REST APIs", "Figma Prototyping"],
      highlights: [
        "คลังสไตล์ภาพวาดมือกว่า 150+ พรอมต์",
        "ออกแบบ UI สไตล์กระดาษคราฟต์และเทปวาชิสดใส",
        "ได้รับรางวัลชมเชยโครงงานนวัตกรรมดิจิทัลยอดเยี่ยม"
      ],
      gradient: "linear-gradient(135deg, #DDD5F3 0%, #FFD1DC 100%)",
      icon: "ri-magic-line",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "cozy-life-sticker-app",
      title: "CozyLife: Digital Sticker & Journal Planner",
      titleTh: "CozyLife เว็บแอปพลิเคชันจัดตารางชีวิตและสติกเกอร์น่ารัก",
      category: "design",
      categoryLabel: "UI/UX & Mobile App Design",
      featured: true,
      badge: "Design Award",
      date: "2024",
      shortDesc: "ดีไซน์แอปพลิเคชันสมุดไดอารีและแพลนเนอร์ พร้อมชุดสติกเกอร์วาดมือที่ลากวางตกแต่งได้ตามใจชอบ",
      fullDesc: "การออกแบบ UI/UX ระบบแพลนเนอร์สำหรับคนรักงานคราฟต์ มีฟังก์ชัน Drag & Drop สติกเกอร์ลายเส้นน่ารัก บันทึกอารมณ์ประจำวัน (Mood Tracker) และจัดระเบียบตารางกิจกรรมในรูปแบบปฏิทินลายมือ ผ่านการทำ User Research กับกลุ่มนักเรียนนักศึกษา",
      techStack: ["Figma", "Digital Stickers", "User Empathy", "Procreate", "UI Animation"],
      highlights: [
        "ออกแบบสติกเกอร์วาดมือกว่า 120+ แบบใน Procreate",
        "Interactive Prototype ใน Figma มากกว่า 20 หน้าจอ",
        "ผู้ร่วมทดสอบ 100% ชื่นชอบในความผ่อนคลายและใช้งานง่าย"
      ],
      gradient: "linear-gradient(135deg, #D5F3E3 0%, #FEEFC6 100%)",
      icon: "ri-sticky-note-line",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "craft-brand-packaging",
      title: "Botanica Hand-Crafted Brand Identity & Merch",
      titleTh: "ชุดออกแบบอัตลักษณ์แบรนด์และบรรจุภัณฑ์สไตล์ภาพวาดมือ Botanica",
      category: "media",
      categoryLabel: "Branding & Media Art",
      featured: false,
      badge: "Craft Branding",
      date: "2023",
      shortDesc: "การออกแบบอัตลักษณ์แบรนด์ชาสมุนไพรออร์แกนิก ด้วยภาพวาดพฤกษศาสตร์สีน้ำและลายมือสุดอบอุ่น",
      fullDesc: "โปรเจกต์ออกแบบ Brand Identity ที่ประกอบด้วยโลโก้ลายเส้นพฤกษศาสตร์, ฉลากบรรจุภัณฑ์ขวดและกล่องชา, นามบัตรกระดาษคราฟต์รีไซเคิล, และเทมเพลตสื่อมีเดียสำหรับ Instagram ที่สะท้อนความใส่ใจในธรรมชาติ",
      techStack: ["Watercolor Illustration", "Adobe Illustrator", "Photoshop Mockup", "Packaging Design"],
      highlights: [
        "ภาพวาดพฤกษศาสตร์สีน้ำวาดมือ 8 สายพันธุ์",
        "คู่มือ Brand Guidelines ฉบับสมบูรณ์ 28 หน้า",
        "บรรจุภัณฑ์ได้รับความสนใจจากผู้ประกอบการท้องถิ่น"
      ],
      gradient: "linear-gradient(135deg, #FEEFC6 0%, #D5F3E3 100%)",
      icon: "ri-plant-line",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "doodle-quiz-game",
      title: "ArtMatch: Hand-Drawn Art History Quiz Game",
      titleTh: "ArtMatch เกมตอบคำถามประวัติศาสตร์ศิลปะลายเส้นการ์ตูน",
      category: "web",
      categoryLabel: "Interactive Web Game",
      featured: false,
      badge: "Interactive Fun",
      date: "2023",
      shortDesc: "เกมเว็บอินเทอร์แอคทีฟทดสอบความรู้ศิลปะ ที่มีภาพร่างผลงานศิลปินเอกแบบการ์ตูนดนตรีสดใส",
      fullDesc: "มินิเกมบนเว็บที่พัฒนาด้วย JavaScript ผู้เล่นจะต้องทายชื่อภาพวาดและศิลปินจากภาพลายเส้นล้อเลียน มีระบบจับเวลา คอมโบคะแนน สติกเกอร์เฉลิมฉลอง และเสียงประกอบแนวคลาสสิก",
      techStack: ["Vanilla JavaScript", "HTML5 Audio", "CSS Wobble Animations", "Canvas Confetti"],
      highlights: [
        "ภาพประกอบลายเส้นการ์ตูนวาดสด 30 ภาพ",
        "ระบบตอบสนองด้วยภาพและเสียงอย่างลื่นไหล",
        "รองรับการเล่นบนทุกขนาดหน้าจออย่างสมบูรณ์"
      ],
      gradient: "linear-gradient(135deg, #FFD1DC 0%, #DDD5F3 100%)",
      icon: "ri-gamepad-line",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "eco-nature-campaign",
      title: "GreenDoodle: Environmental Storytelling Campaign",
      titleTh: "GreenDoodle แคมเปญสื่อเรื่องเล่าพิทักษ์สิ่งแวดล้อม",
      category: "media",
      categoryLabel: "Creative Storytelling",
      featured: false,
      badge: "Social Impact",
      date: "2023",
      shortDesc: "ชุดการ์ตูนสั้น Infographic และภาพเคลื่อนไหวรณรงค์ลดขยะพลาสติกในสถาบันการศึกษา",
      fullDesc: "การสร้างสรรค์ชุดภาพการ์ตูนสั้นและอินโฟกราฟิกเล่าเรื่องผลกระทบของไมโครพลาสติก นำเสนอผ่านลายเส้นเป็นกันเอง เข้าใจง่าย เผยแพร่ผ่านช่องทางโซเชียลมีเดียและโปสเตอร์รอบมหาวิทยาลัย",
      techStack: ["Procreate Animation", "Vector Infographics", "Social Media Campaign"],
      highlights: [
        "ยอดเข้าชมและแชร์ในโซเชียลมีเดียกว่า 10,000+ ครั้ง",
        "ได้รับคำชมเชยจากฝ่ายกิจการนักศึกษา"
      ],
      gradient: "linear-gradient(135deg, #DDD5F3 0%, #D5F3E3 100%)",
      icon: "ri-earth-line",
      demoUrl: "#",
      githubUrl: "#"
    }
  ],

  certificates: [
    {
      title: "Digital Illustration & Character Design Specialist",
      issuer: "Creative Arts Academy / Procreate Master",
      year: "2024",
      desc: "ประกาศนียบัตรรับรองความเชี่ยวชาญด้านการวาดภาพประกอบดิจิทัล การออกแบบตัวละคร และลายเส้นสื่อสร้างสรรค์",
      badge: "Art Certified",
      icon: "ri-quill-pen-fill",
      color: "#DDD5F3"
    },
    {
      title: "UI/UX Design Professional Certificate",
      issuer: "Google Career Certificates / Coursera",
      year: "2024",
      desc: "หลักสูตรระดับสากลครอบคลุมกระบวนการ User Empathy, Wireframing, Figma Prototyping และ Usability Testing",
      badge: "UX Certified",
      icon: "ri-award-fill",
      color: "#FEEFC6"
    },
    {
      title: "Generative AI for Digital Creatives & Artists",
      issuer: "AI Innovation Institute (DAI104)",
      year: "2024",
      desc: "การประยุกต์ใช้ AI Tools ในการคิดค้นคอนเซ็ปต์อาร์ต การสเก็ตช์ภาพ และการยกระดับผลงานศิลปะดิจิทัล",
      badge: "AI Specialist",
      icon: "ri-sparkling-fill",
      color: "#FFD1DC"
    },
    {
      title: "รางวัลชนะเลิศการออกแบบสื่อสร้างสรรค์และนวัตกรรม",
      issuer: "Digital Arts Competition (DAI104 Showcase)",
      year: "2024",
      desc: "รางวัลอันดับ 1 จากการประกวดผลงานศิลปะดิจิทัลและการพัฒนาเว็บแอปพลิเคชันเชิงสร้างสรรค์",
      badge: "1st Winner",
      icon: "ri-trophy-fill",
      color: "#D5F3E3"
    }
  ],

  testimonials: [
    {
      quote: "ณมนเป็นศิลปินและนักออกแบบที่มีเอกลักษณ์เฉพาะตัวสูงมาก ผลงานลายเส้นวาดมือและแนวคิดสร้างสรรค์ช่วยให้โปรเจกต์เทคโนโลยีดูมีชีวิตชีวา อบอุ่น และน่าใช้งานขึ้นอย่างเห็นได้ชัด",
      author: "อาจารย์ที่ปรึกษาหลักสูตร DAI104",
      role: "ผู้เชี่ยวชาญด้าน Digital Arts & AI Innovation",
      avatarBg: "linear-gradient(135deg, #DDD5F3, #FFD1DC)"
    },
    {
      quote: "การได้ทำงานร่วมกับมนเป็นเรื่องสนุกมาก มีไอเดียแปลกใหม่เสมอ สเก็ตช์ภาพอธิบายสิ่งยากๆ ให้ทีมเข้าใจได้ทันที เป็นทั้งดีไซเนอร์และผู้สร้างแรงบันดาลใจชั้นยอดของทีม",
      author: "เพื่อนร่วมทีมโปรเจกต์ Creative Web",
      role: "Creative Developer & Peer Collaborator",
      avatarBg: "linear-gradient(135deg, #FEEFC6, #DDD5F3)"
    }
  ]
};

// Export to window for global access
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
