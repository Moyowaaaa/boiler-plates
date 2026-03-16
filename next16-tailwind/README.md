# Next.js 16 + Tailwind CSS Boilerplate

A modern, production-ready Next.js 16 boilerplate with Tailwind CSS 4, GSAP animations, and Lenis smooth scrolling. This template is optimized for building beautiful, performant web applications with exceptional user experience.

## ✨ Features

- ⚡ **Next.js 16** with App Router and latest React 19
- 🎨 **Tailwind CSS 4** with PostCSS configuration
- 🎭 **GSAP** for advanced animations and transitions
- 📜 **Lenis** for buttery-smooth scrolling experience
- 🔧 **TypeScript** support for type safety
- 🚦 **ESLint** configuration for code quality
- 📱 **Responsive design** patterns and utilities
- 🎯 **Performance optimized** with best practices
- 🛠️ **Developer experience** focused setup

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

1. **Clone and navigate to the project:**

```bash
cd next16-tailwind
```

2. **Install dependencies:**

```bash
yarn install
# or
npm install
```

3. **Start development server:**

```bash
yarn dev
# or
npm run dev
```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next16-tailwind/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   └── ui/                # UI components
├── lib/                   # Utility libraries
│   └── utils.ts           # Helper functions
├── public/                # Static assets
│   └── images/            # Image assets
├── styles/                # Global styles
├── .eslintrc.json         # ESLint configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Available Scripts

| Script       | Description                           |
| ------------ | ------------------------------------- |
| `yarn dev`   | Start development server on port 3000 |
| `yarn build` | Build production application          |
| `yarn start` | Start production server               |
| `yarn lint`  | Run ESLint for code quality checks    |

## 🎨 Styling with Tailwind CSS

This boilerplate uses **Tailwind CSS 4** with the following configuration:

### Key Features

- **Utility-first CSS** framework
- **Responsive design** utilities
- **Dark mode** support (configurable)
- **Custom animations** and transitions
- **Optimized for production** with PurgeCSS

### Customization

Edit `tailwind.config.ts` to customize:

- Theme colors and spacing
- Breakpoints and media queries
- Plugins and custom utilities
- Animation definitions

```typescript
// Example custom configuration
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-brand-color",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
};
```

## 🎬 GSAP Animations

Integrated **GSAP** (GreenSock Animation Platform) for smooth, performant animations:

### Setup

```typescript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

### Usage Examples

```typescript
// Fade in animation
gsap.from(".element", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});

// Scroll-triggered animation
gsap.from(".scroll-element", {
  scrollTrigger: {
    trigger: ".scroll-element",
    start: "top 80%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
});
```

## 📜 Lenis Smooth Scrolling

**Lenis** provides buttery-smooth scrolling with minimal performance impact:

### Configuration

```typescript
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

## 🔧 Development Tips

### Component Structure

```typescript
// Example component with TypeScript
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  onClick
}: ButtonProps) {
  return (
    <button
      className={`
        px-4 py-2 rounded-lg font-medium transition-colors
        ${variant === 'primary'
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
        }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### Performance Optimization

- Use `next/image` for optimized images
- Implement code splitting with `React.lazy()`
- Utilize Next.js built-in optimizations
- Monitor with Lighthouse audits

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

```bash
# Build for production
yarn build

# Start production server
yarn start
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=Your App Name
```

## 📚 Learning Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Lenis Documentation](https://github.com/studio-freight/lenis)

### Recommended Tutorials

- Next.js App Router tutorials
- Tailwind CSS advanced patterns
- GSAP animation techniques
- React + TypeScript best practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Common Issues

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 yarn dev
```

### Build Errors

```bash
# Clear cache
rm -rf .next
yarn install
yarn build
```

### TypeScript Errors

- Check `tsconfig.json` configuration
- Ensure all imports are properly typed
- Use `npx tsc --noEmit` for type checking

---

**Built with ❤️ using Next.js 16, Tailwind CSS 4, GSAP, and Lenis**
