# Next-Gen Animated Portfolio Website

A world-class, modern, animated portfolio website built with cutting-edge technologies and premium design principles.

## 🚀 Features

- **Modern Dark Mode Design** - Dark-first UI with glassmorphism effects
- **Smooth Animations** - Powered by Framer Motion and GSAP
- **Smooth Scrolling** - Lenis smooth scroll integration
- **Responsive Design** - Mobile-first approach with excellent UX
- **AI-Enhanced UI** - Interactive AI assistant section
- **Performance Optimized** - Fast load times despite rich animations
- **Accessibility** - Keyboard navigation and reduced motion support

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** - Core animation engine
- **GSAP** - Complex timeline animations
- **Lenis** - Smooth scroll
- **Shadcn/UI** - Component library (customized)
- **Lucide Icons** - Icon system

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Colors
- **Neon Cyan**: `oklch(0.7 0.2 200)`
- **Neon Blue**: `oklch(0.65 0.25 250)`
- **Neon Purple**: `oklch(0.65 0.25 300)`

### Typography
- **Primary**: Geist Sans (Inter-style)
- **Mono**: Geist Mono

### Animations
- Page transitions
- Scroll-based reveals
- Text split animations
- Hover micro-interactions
- Parallax effects
- Cursor-aware interactions

## 📁 Project Structure

```
portfolio-next/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx         # Projects section
│   ├── Experience.tsx      # Experience timeline
│   ├── AIInteraction.tsx   # AI assistant UI
│   ├── Contact.tsx         # Contact form
│   ├── Navigation.tsx      # Navigation bar
│   ├── BackgroundEffects.tsx # GSAP background animations
│   ├── CursorFollower.tsx  # Custom cursor
│   └── providers/
│       └── SmoothScroll.tsx # Lenis provider
├── lib/
│   ├── animations.ts       # Framer Motion variants
│   ├── constants.ts        # Data constants
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎯 Sections

1. **Hero** - Animated headline with dynamic role cycling
2. **About** - Story-driven content with animated illustrations
3. **Skills** - Animated skill cards with category filtering
4. **Projects** - High-impact project showcase
5. **Experience** - Interactive timeline with expandable entries
6. **AI Interaction** - Mock AI assistant with predefined prompts
7. **Contact** - Animated form with social links

## 🚀 Deployment

This project is ready for Vercel deployment:

```bash
# Deploy to Vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 🎨 Customization

### Update Content
Edit `lib/constants.ts` to update:
- Roles
- Skills
- Projects
- Experience
- AI Prompts

### Modify Colors
Update CSS variables in `app/globals.css`:
- `--neon-cyan`
- `--neon-blue`
- `--neon-purple`

### Adjust Animations
Modify animation variants in `lib/animations.ts` or component-level animations.

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Credits

Built with inspiration from:
- Vercel
- Linear
- Stripe
- Apple Vision Pro

---

Made with ❤️ using Next.js, Framer Motion, and GSAP
# portfolio-templates
# portfolio-templates
