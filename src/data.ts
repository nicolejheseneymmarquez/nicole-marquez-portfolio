import { Skill, Experience, Education, Certification, ToolMastery, GalleryItem } from "./types";

export const profileInfo = {
  fullName: "Nicole Jheseney M. Marquez",
  title: "IT Student & Graphic Design Virtual Assistant",
  email: "nicolejheseneymanalo@gmail.com",
  phone: "09460167563",
  location: "Agdangan, Quezon Province, Philippines, 4304",
  linkedin: "linkedin.nicolemanalo.com",
  github: "github.com/nicolemanalo", // standard visual placeholder
  summary: "Detail-oriented and proactive Information Technology student and Graphic Design Virtual Assistant with extensive experience delivering high-quality digital assets and visual materials for government tourism initiatives, local youth development offices, university organizations, and technical projects. Proven track record in managing end-to-end design workflows, creating high-converting social media aesthetics, and collaborating remotely using industry-standard digital tools. Combines creative artistry with a strong technical background to help brands elevate their online presence."
};

export const technicalSkills: Skill[] = [
  { name: "Front-End Web Development", category: "Technical", level: 90 },
  { name: "UI/UX Design & Prototyping", category: "Technical", level: 95 },
  { name: "Graphic Design & Branding", category: "Technical", level: 98 },
  { name: "Back-End Development (Python)", category: "Technical", level: 75 },
  { name: "Digital Photography & AI Prompting", category: "Technical", level: 85 },
  { name: "System Architecture & Mapping", category: "Technical", level: 80 },
  { name: "Data Analytics & Modeling", category: "Technical", level: 82 },
  { name: "Information & Record Keeping", category: "Technical", level: 88 }
];

export const coreSkills: string[] = [
  "Computer Literate",
  "Tech-savvy Adaptability",
  "Knowledge Acquisition",
  "Articulate Communication",
  "Initiative & Decision-Making",
  "Proactive Problem-Solving",
  "Strategic Design Thinking",
  "Precision and High Accuracy"
];

export const toolsMastery: ToolMastery[] = [
  { name: "Canva Pro", category: "Design", logoName: "canva", percentage: 98 },
  { name: "Adobe CS", category: "Design", logoName: "adobe", percentage: 80 },
  { name: "HTML / CSS / JS", category: "Development", logoName: "code", percentage: 88 },
  { name: "Python", category: "Development", logoName: "terminal", percentage: 75 },
  { name: "MS Office Suite", category: "Office", logoName: "file-text", percentage: 95 },
  { name: "Github / Versioning", category: "Collaboration", logoName: "git-merge", percentage: 82 }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Hired Graphic Designer",
    organization: "Department of Tourism (Baonihan Festival)",
    location: "Agdangan, Quezon Province | Seasonal",
    period: "Seasonal",
    type: "Work",
    details: [
      "Contracted by the Department of Tourism to design the official visual identity, and digital marketing assets for a major municipal festival.",
      "Conceptualized and produced high-quality event logos, protective brand watermarks, and promotional publication materials (pubmats) utilized across multiple public channels.",
      "Designed the comprehensive print-ready and digital 'Schedule of Activities' layouts for seamless public dissemination."
    ]
  },
  {
    id: "exp-2",
    role: "Publication Officer & Graphic Designer",
    organization: "Sangguniang Kabataan Municipal Federation & LYDO",
    location: "Agdangan, Quezon Province",
    period: "2023 - 2026",
    type: "Leadership",
    details: [
      "Spearheaded the digital presence and visual branding of both the municipal youth federation and local government youth office to maintain engaging online aesthetics.",
      "Designed core branding assets, local organization logos, event tarpaulins, digital flyers, and official certificates for community development projects.",
      "Managed multiple digital content workflows simultaneously under tight deadlines while driving strategic council workflows."
    ]
  },
  {
    id: "exp-3",
    role: "Public Information Officer (PIO)",
    organization: "IT Organization - PUP Unisan Campus",
    location: "Unisan, Quezon Province",
    period: "2022 - Present",
    type: "Leadership",
    details: [
      "Directed the creation of public-facing publication materials and maintained a cohesive, professional social media aesthetic across university platforms.",
      "Conceptualized visual assets for major campus campaigns, creating interactive stories and announcement graphics.",
      "Collaborated with student leaders and faculty to translate complex campus data into digestible, high-engagement infographics."
    ]
  },
  {
    id: "exp-4",
    role: "Front-End UI/UX Developer & Designer",
    organization: "Academic Tech Projects (PUP Unisan)",
    location: "Quezon Province",
    period: "2025 - 2026",
    type: "Academic",
    details: [
      "CatchMaster (Capstone): Served as Lead UI/UX Developer. Designed intuitive dashboard interfaces, responsive HTML/CSS layouts, and prototypes for a mobile monitoring system.",
      "Rentora (Technopreneurship): Set typography guidelines, color palettes, and corporate brand kits including custom logos and promotional flyers."
    ]
  },
  {
    id: "exp-5",
    role: "On-the-Job Training & Office Assistant",
    organization: "LGU Agdangan (Municipal Accountant Office)",
    location: "Agdangan, Quezon",
    period: "2026",
    type: "Internship",
    details: [
      "Assisted with complex governmental paperwork, digital data entry, and rigorous audit files verification.",
      "Maintained strict attention to details under tight auditing workflows in a fast-paced municipal finance setting."
    ]
  },
  {
    id: "exp-6",
    role: "Virtual Intern",
    organization: "Salesforce Supported Program (Salford & Co.)",
    location: "Remote",
    period: "2025",
    type: "Internship",
    details: [
      "Gained hands-on experience in cloud workflows, remote task management tools, and virtual cross-functional synchronization.",
      "Successfully managed remote production timelines and digital communication assets."
    ]
  }
];

export const educationList: Education[] = [
  {
    school: "Polytechnic University of the Philippines (PUP)",
    degree: "Bachelor of Science in Information Technology",
    period: "2022 - Present",
    courses: ["UI/UX System Design", "Front-End Development", "Systems Architecture", "Technopreneurship", "Database & System Administration"]
  },
  {
    school: "Elias Salvador National High School",
    degree: "Senior High School - HUMSS Graduate (Humanities & Social Sciences)",
    period: "2016 - 2022",
    courses: ["Creative Writing", "Social Dynamics", "Communication and Public Relations", "Leadership"]
  }
];

export const certifications: Certification[] = [
  {
    title: "Salesforce Virtual Internship Credentials",
    issuer: "Salford & Co. / Salesforce",
    year: "2025"
  },
  {
    title: "Civil Service Eligibility (Professional / Sub-Professional)",
    issuer: "Philippine Civil Service Commission",
    year: "2026"
  },
  {
    title: "Certificate of Completion - Front-End UI/UX Excellence",
    issuer: "PUP Unisan Campus Academic Guild",
    year: "2025"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Baonihan Festival Master Branding Kit",
    category: "E-Commerce & Corporate Marketing",
    description: "Official visual publication materials commissioned by the Department of Tourism.",
    imageUrl: "/src/assets/images/A-TOWN BAZAAR.png, /src/assets/images/DRAG RACE AGDANGAN.png, /src/assets/images/MAIN PUB. MAT..png",
    tags: ["Publication", "Logo Design", "Festival", "Canva Pro"],
    client: "Department of Tourism Agdangan",
    dimensions: "Print Ready 4K Layout"
  },
  {
    id: "gal-2",
    title: "CatchMaster Telemetry UI/UX Dashboard",
    category: "Corporate, Academic & Minimalist Designs",
    description: "Complete design interface, dashboard wireframing, component libraries, and frontend prototype for the CatchMaster monitoring capstone application.",
    imageUrl: "/src/assets/images/catchmaster_ui_1779687374527.png",
    tags: ["UI/UX", "Figma", "Web Dev", "Dashboard", "System Mapping"],
    client: "PUP IT Department Capstone",
    dimensions: "1920 x 1080 Responsive UI"
  },
  {
    id: "gal-3",
    title: "Rentora Corporate Brand Kit & Flyers",
    category: "E-Commerce & Corporate Marketing",
    description: "Corporate stationery, modern typography scale, customized business-kit layouts, and visual catalog guidelines developed for a startup business concept.",
    imageUrl: "/src/assets/images/rentora_brand_1779687396518.png",
    tags: ["Brand Book", "Stationery", "Logo", "Technopreneurship"],
    client: "Rentora Ventures",
    dimensions: "A4 Corporate Document"
  },
  {
    id: "gal-4",
    title: "Youth Campaign Social Media Pubmats",
    category: "Social Media Pubmats & Event Branding",
    description: "Premium editorial-styled content series, carousels, and high-engagement flyer designs created for Agdangan Sangguniang Kabataan initiatives.",
    imageUrl: "/src/assets/images/social_pubmats_1779687357964.png",
    tags: ["Pubmats", "Composition", "Typography", "Sangguniang Kabataan"],
    client: "Local Youth Development Office (LYDO)",
    dimensions: "1:1 Instagram & Facebook aspect"
  },
  {
    id: "gal-5",
    title: "Baonihan Festival - Schedule of Activities Layout",
    category: "Social Media Pubmats & Event Branding",
    description: "A highly complex, clean, grid-aligned schedule matrix created to disseminate community festival schedules. Optimizes information flow and print accessibility.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    tags: ["Information Layout", "Print Design", "Typography Matrix", "Event Branding"],
    client: "Agdangan LGU & Festival Council",
    dimensions: "Poster Size Design"
  },
  {
    id: "gal-6",
    title: "Youth Empowerment Initiative Tarpaulin",
    category: "Social Media Pubmats & Event Branding",
    description: "Large format tarpaulin layout with custom typography overlays, vibrant photography collage, and branding markers for the SK Municipal Federation annual youth summit.",
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
    tags: ["Large Print", "Tarpaulin", "Community Event", "SK Federation"],
    client: "SK Municipal Federation",
    dimensions: "8 x 5 Feet Large Print"
  },
  {
    id: "gal-7",
    title: "PUP Unisan IT Academic Infographics",
    category: "Corporate, Academic & Minimalist Designs",
    description: "Clean modern layout visualizing campus statistics, technological pathways, and system architecture for PUP Quezon campus announcements.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Infographics", "Academic", "Data Visualizer", "Architecture Layout"],
    client: "Information Technology Organization - PUP",
    dimensions: "Full Portrait Infographic"
  }
];
