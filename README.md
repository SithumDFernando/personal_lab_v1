# 🚀 Sithum Fernando's Lab

> Building the next generation of tools. This is where code meets creativity.

A modern, premium portfolio website showcasing projects in Web Development and Generative AI. Built with Next.js 15, React 19, and styled with a custom Canva-inspired design system featuring teal/cyan gradients and glassmorphism effects.

[![Next.js](https://img.shields.io/badge/Next.js-15.1.11-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🎨 **Premium Design System** - Canva-inspired UI with teal/cyan gradients and glassmorphism
- 🌗 **Theme Support** - Seamless light/dark mode with consistent styling
- ⚡ **Next.js 15 App Router** - Leveraging the latest React Server Components
- 🎭 **Smooth Animations** - Micro-interactions and hover effects for enhanced UX
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🔒 **Security Patched** - Latest security updates for Next.js and React
- 🚦 **Two Display Modes**:
  - **Coming Soon** - Minimalist placeholder view
  - **Projects** - Full portfolio showcase with project cards

## 🛠️ Tech Stack

### Core

- **Framework:** [Next.js 15.1.11](https://nextjs.org/) with App Router
- **UI Library:** [React 19.2.3](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)

### Styling

- **CSS Framework:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Fonts:** [Geist](https://vercel.com/font) by Vercel
- **Icons:** [Lucide React](https://lucide.dev/)

### Utilities

- **Class Merging:** [clsx](https://github.com/lukeed/clsx)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SithumDFernando/personal_lab_v1.git
   cd personal_lab_v1
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## ⚙️ Configuration

### Site Settings

Edit `config/site.ts` to customize your portfolio:

```typescript
export const siteConfig = {
  // Toggle between "coming-soon" and "projects" mode
  state: "coming-soon" as "coming-soon" | "projects",

  // Basic metadata
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  url: "https://yourwebsite.com",

  // Social links
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    email: "your@email.com",
  },
};
```

### Adding Projects

Edit `data/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project Name",
    description: "Project description",
    imagePath: "/projects/image.png",
    topics: ["Web", "Generative AI"],
    techStack: ["Next.js", "TypeScript", "OpenAI"],
    links: {
      repo: "https://github.com/...",
      demo: "https://demo-url.com",
    },
  },
  // Add more projects...
];
```

### Theme Customization

The design system can be customized in:

- **Colors:** `app/globals.css` (CSS variables)
- **Tailwind Config:** `tailwind.config.js` (utilities, animations)

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Main entry point
├── components/
│   ├── layout/               # Layout components (Header, Footer)
│   ├── projects/             # Project-related components
│   ├── ui/                   # Reusable UI components
│   └── views/                # Page views (ComingSoon, Projects)
├── config/
│   └── site.ts               # Site configuration
├── data/
│   └── projects.ts           # Projects data
├── public/
│   └── projects/             # Project images
└── types/
    └── index.ts              # TypeScript type definitions
```

## 🎨 Design System

### Color Palette

**Light Mode:**

- Primary: Cyan (`#00BCD4`)
- Background: White
- Accent: Teal

**Dark Mode:**

- Primary: Cyan (`#00BCD4`)
- Background: Dark Teal (`hsl(180, 60%, 8%)`)
- Cards: Teal (`hsl(180, 50%, 12%)`)

### Key Features

- ✨ Glassmorphism effects with backdrop blur
- 🌊 Smooth gradient transitions
- 💫 Custom glow shadows on hover
- 🎯 Micro-animations for enhanced interactivity

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SithumDFernando/personal_lab_v1)

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sithum Fernando**

- GitHub: [@SithumDFernando](https://github.com/SithumDFernando)
- LinkedIn: [Sithum Fernando](https://linkedin.com/in/sithum-fernando)
- Email: sithumdf@gmail.com

## 🙏 Acknowledgments

- Design inspiration from [Canva](https://www.canva.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Vercel](https://vercel.com/font)

---

<p align="center">Made with ❤️ by Sithum Fernando</p>
