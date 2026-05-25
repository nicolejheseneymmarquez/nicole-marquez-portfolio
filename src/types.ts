export interface Skill {
  name: string;
  category: "Technical" | "Core";
  level: number; // 0-100 for visual progress, or custom levels
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  details: string[];
  type: "Work" | "Leadership" | "Academic" | "Internship";
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  courses: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface ToolMastery {
  name: string;
  category: "Design" | "Development" | "Collaboration" | "Office";
  logoName: string; // lucide icon name or text
  percentage: number;
}

export type GalleryCategory = 
  | "E-Commerce & Corporate Marketing"
  | "Social Media Pubmats & Event Branding"
  | "Corporate, Academic & Minimalist Designs";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  imageUrl: string;
  tags: string[];
  dimensions?: string;
  client?: string;
}
