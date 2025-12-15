export const siteConfig = {
  // MASTER SWITCH
  // "coming-soon" -> Renders the placeholder view
  // "projects"    -> Renders the main portfolio list
  state: "coming-soon" as "projects" | "coming-soon",

  // Basic Metadata
  name: "Sithum Fernando",
  title: "Project Showcase",
  description: "I build intelligent web apps and generative models.",
  url: "https://sithumfernandolabs.vercel.app",
  
  // Social Links (Optional)
  links: {
    github: "https://github.com/SithumDFernando",
    linkedin: "https://linkedin.com/in/sithum-fernando",
    email: "sithumdf@gmail.com",
  },
} as const;