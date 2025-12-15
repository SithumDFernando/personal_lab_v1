import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: "project-1",
    title: "AI-Powered Content Generator",
    description: "A full-stack web application that uses GPT-4 to generate marketing content, blog posts, and social media captions. Features real-time collaboration and version control.",
    imagePath: "/projects/placeholder2.png",
    topics: ["Web", "Generative AI"],
    techStack: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Prisma"],
    links: {
      repo: "https://github.com/yourusername/ai-content-generator",
      demo: "https://ai-content-demo.vercel.app",
    },
  },
  {
    id: "project-2",
    title: "ML Image Classification Pipeline",
    description: "End-to-end machine learning pipeline for image classification using transfer learning. Deployed as a REST API with automated model retraining capabilities.",
    imagePath: "/projects/placeholder.png",
    topics: ["ML"],
    techStack: ["Python", "TensorFlow", "FastAPI", "Docker", "AWS"],
    links: {
      repo: "https://github.com/yourusername/ml-image-pipeline",
    },
  },
  {
    id: "project-3",
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard for monitoring IoT sensor data in real-time. Built with WebSocket connections and optimized for handling thousands of data points per second.",
    imagePath: "/projects/placeholder.png",
    topics: ["Web", "IoT"],
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    links: {
      repo: "https://github.com/yourusername/analytics-dashboard",
      demo: "https://analytics-demo.vercel.app",
    },
  },
  {
    id: "project-4",
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and progress. Features offline support and health data synchronization.",
    imagePath: "/projects/placeholder.png",
    topics: ["Mobile"],
    techStack: ["React Native", "TypeScript", "Firebase", "Redux"],
    links: {
      repo: "https://github.com/yourusername/fitness-tracker",
    },
  },
];