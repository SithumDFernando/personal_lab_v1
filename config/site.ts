export const siteConfig = {
  // MASTER SWITCH
  // "coming-soon" -> Renders the placeholder view
  // "projects"    -> Renders the main portfolio list
  state: "coming-soon" as "coming-soon" | "projects",

  // Basic Metadata
  name: "Sithum Fernando",
  title: "Lab | Sithum Fernando",
  description: "Building the next generation of tools. This is where code meets creativity—view my projects in Web Development and Generative AI.",
  url: "https://sithumfernandolabs.vercel.app",
  
  // Social Links (Optional)
  links: {
    github: "https://github.com/SithumDFernando",
    linkedin: "https://linkedin.com/in/sithum-fernando",
    email: "sithumdf@gmail.com",
    facebook: "https://facebook.com/sithum.fernando.1276",
    //instagram: "https://instagram.com/sithumfernando",
  },
} as const;