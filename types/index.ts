export type Topic = "Web" | "ML" | "Mobile" | "Generative AI" | "IoT";

export interface Project {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  topics: Topic[];
  techStack: string[];
  links: {
    repo?: string;
    demo?: string;
  };
}

export type Theme = 'light' | 'dark';