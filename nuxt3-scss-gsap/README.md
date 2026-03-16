# Nuxt 3 + SCSS + GSAP Boilerplate

A sophisticated Nuxt 3 boilerplate with SCSS modular architecture, GSAP animations, and advanced interactions. This template is designed for building modern, animated Vue.js applications with exceptional user experience and performance.

## ✨ Features

- 🌊 **Nuxt 3** with SSR and latest Vue 3 Composition API
- 🎨 **SCSS** with modular 7-1 architecture pattern
- 🎬 **Advanced GSAP** animations and transitions
- 📦 **Pinia** for state management
- 🖼️ **Optimized images** with Nuxt Image module
- 📱 **PWA** capabilities with service worker
- 🎭 **Custom page transitions** and animations
- 📜 **Lenis smooth scrolling** for buttery experience
- 🔧 **VueUse composables** for enhanced functionality
- 🎯 **Performance optimized** with auto-imports
- 🛠️ **Developer experience** with Nuxt DevTools

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

1. **Clone and navigate to the project:**

```bash
cd nuxt3-scss-gsap
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
nuxt3-scss-gsap/
├── animations/              # GSAP animation definitions
│   └── index.ts            # Animation configurations
├── assets/                 # Static assets
│   ├── images/            # Image files
│   └── service-worker.js  # PWA service worker
├── components/             # Vue components
│   └── Preloader.vue      # Loading component
├── composables/           # Vue composables
│   └── useAnimations.ts  # Animation composable
├── constants/             # Application constants
│   └── index.ts          # Global constants
├── interactions/          # User interaction handlers
│   ├── cursor.ts         # Custom cursor
│   ├── detectHover.ts    # Hover detection
│   ├── magnetic.ts       # Magnetic effects
│   ├── menu.ts           # Menu interactions
│   ├── parallax.ts       # Parallax scrolling
│   ├── preloader.ts      # Preloader logic
│   └── textAnimation.ts  # Text animations
├── layouts/               # Nuxt layouts
│   └── default.vue       # Default layout
├── pages/                 # Route pages
│   └── index.vue         # Home page
├── public/               # Public static files
│   ├── favicon.ico       # Site favicon
│   └── robots.txt        # SEO robots file
├── stores/               # Pinia stores
│   └── ImagesPreloader.ts # Image preloading store
├── styles/               # SCSS stylesheets (7-1 architecture)
│   ├── _abstracts/       # Variables, mixins, functions
│   │   ├── _functions.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   ├── _base/            # Base styles
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── _components/      # Component-specific styles
│   │   └── _buttons.scss
│   ├── _vendor/          # External library styles
│   │   └── _gsap.scss
│   └── index.scss        # Main SCSS entry point
├── utils/                # Utility functions
│   ├── loadAssets.ts     # Asset loading utilities
│   └── index.ts          # General utilities
├── app.vue               # Root Vue component
├── nuxt.config.ts        # Nuxt configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── types.d.ts           # TypeScript type definitions
```

## 🛠️ Available Scripts

| Script             | Description                           |
| ------------------ | ------------------------------------- |
| `yarn dev`         | Start development server on port 3000 |
| `yarn build`       | Build production application          |
| `yarn generate`    | Generate static site                  |
| `yarn preview`     | Preview production build              |
| `yarn postinstall` | Prepare Nuxt after installation       |

## 🎨 SCSS Architecture (7-1 Pattern)

This boilerplate follows the 7-1 SCSS architecture for maintainable and scalable styles:

### Structure Overview

- **\_abstracts/**: Variables, mixins, functions
- **\_base/**: Reset, typography, base styles
- **\_components/**: Component-specific styles
- **\_vendor/**: Third-party library styles
- **\_layout/**: Layout-related styles
- **\_pages/**: Page-specific styles
- **\_themes/**: Theme-related styles

### Customization

#### Variables

```scss
// styles/_abstracts/_variables.scss
// Colors
$primary-color: #16270c;
$secondary-color: #4a7c59;
$text-color: #333333;
$background-color: #ffffff;

// Typography
$font-family-primary: "Inter", sans-serif;
$font-family-secondary: "Georgia", serif;

// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 2rem;
```

#### Mixins

```scss
// styles/_abstracts/_mixins.scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 767px) {
      @content;
    }
  }
  @if $breakpoint == tablet {
    @media (min-width: 768px) and (max-width: 1023px) {
      @content;
    }
  }
  @if $breakpoint == desktop {
    @media (min-width: 1024px) {
      @content;
    }
  }
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## 🎬 GSAP Animations

### Animation System

The boilerplate includes a comprehensive GSAP animation system:

```typescript
// animations/index.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (element: string | Element, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    ...options,
  });
};

export const slideInLeft = (element: string | Element, options = {}) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    ...options,
  });
};

export const scaleIn = (element: string | Element, options = {}) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    ...options,
  });
};
```

### Usage in Components

```vue
<template>
  <div ref="animatedElement" class="fade-element">
    <h2>Animated Content</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fadeIn } from "@/animations";

const animatedElement = ref<HTMLElement>();

onMounted(() => {
  if (animatedElement.value) {
    fadeIn(animatedElement.value);
  }
});
</script>
```

## 🎭 Page Transitions

### Custom Transitions

```vue
<template>
  <div>
    <NuxtPage :transition="transitionObject" />
  </div>
</template>

<script setup lang="ts">
import type { TransitionProps } from "vue";

const transitionObject: TransitionProps = {
  mode: "out-in",
  css: false,
  appear: true,

  onEnter: (el, done) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
      onComplete: done,
    });
  },

  onLeave: (el, done) => {
    gsap.to(el, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.in",
      onComplete: done,
    });
  },
};
</script>
```

## 📜 Smooth Scrolling

### Lenis Integration

```typescript
// composables/useSmoothScroll.ts
import { onMounted, onUnmounted } from "vue";
import Lenis from "@studio-freight/lenis";

export function useSmoothScroll() {
  let lenis: Lenis | null = null;

  onMounted(() => {
    lenis = new Lenis({
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

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  onUnmounted(() => {
    lenis?.destroy();
  });

  return { lenis };
}
```

## 🎯 Interactive Features

### Magnetic Effect

```typescript
// interactions/magnetic.ts
export class MagneticEffect {
  private element: HTMLElement;
  private bounds: DOMRect;

  constructor(element: HTMLElement) {
    this.element = element;
    this.bounds = element.getBoundingClientRect();
    this.init();
  }

  private init() {
    this.element.addEventListener("mousemove", this.handleMouseMove.bind(this));
    this.element.addEventListener(
      "mouseleave",
      this.handleMouseLeave.bind(this),
    );
  }

  private handleMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;
    const { left, top, width, height } = this.bounds;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * 0.3;
    const deltaY = (clientY - centerY) * 0.3;

    gsap.to(this.element, {
      x: deltaX,
      y: deltaY,
      duration: 0.4,
      ease: "power2.out",
    });
  }

  private handleMouseLeave() {
    gsap.to(this.element, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.3)",
    });
  }
}
```

### Parallax Scrolling

```typescript
// interactions/parallax.ts
export class ParallaxEffect {
  private elements: NodeListOf<HTMLElement>;
  private scrollTrigger: any;

  constructor(selector: string) {
    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  private init() {
    this.elements.forEach((element) => {
      this.scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          gsap.to(element, {
            y: -velocity * 0.1,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    });
  }
}
```

## 📦 State Management with Pinia

### Store Example

```typescript
// stores/ImagesPreloader.ts
import { defineStore } from "pinia";

export const useImagesPreloaderStore = defineStore("imagesPreloader", {
  state: () => ({
    imagesHaveLoaded: false,
    preloaderDone: false,
    loadedImages: 0,
    totalImages: 0,
  }),

  actions: {
    async preloadImages(imageUrls: string[]) {
      this.totalImages = imageUrls.length;

      const loadPromises = imageUrls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            this.loadedImages++;
            resolve(img);
          };
          img.src = url;
        });
      });

      await Promise.all(loadPromises);
      this.imagesHaveLoaded = true;
    },

    completePreloader() {
      this.preloaderDone = true;
    },
  },
});
```

## 🖼️ Image Optimization

### Nuxt Image Module

```vue
<template>
  <NuxtImg
    src="/images/hero-image.jpg"
    alt="Hero image"
    width="800"
    height="600"
    format="webp"
    loading="lazy"
    class="hero-image"
  />
</template>
```

### Asset Loading Utility

```typescript
// utils/loadAssets.ts
export const loadAssets = async (assets: string[]) => {
  const promises = assets.map((asset) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = asset;
    });
  });

  try {
    await Promise.all(promises);
    console.log("All assets loaded successfully");
  } catch (error) {
    console.error("Failed to load assets:", error);
  }
};
```

## 📱 PWA Configuration

### Service Worker

The boilerplate includes PWA capabilities with a custom service worker:

```javascript
// assets/service-worker.js
const CACHE_NAME = "nuxt-app-v1";
const urlsToCache = ["/", "/_nuxt/", "/images/"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
```

## 🔧 Development Tips

### Component Structure

```vue
<template>
  <section class="hero-section" ref="heroRef">
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-description">{{ description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fadeIn, slideInLeft } from "@/animations";

interface Props {
  title: string;
  description: string;
}

defineProps<Props>();

const heroRef = ref<HTMLElement>();

onMounted(() => {
  if (heroRef.value) {
    const timeline = gsap.timeline();
    timeline
      .add(fadeIn(".hero-title", { delay: 0.2 }))
      .add(slideInLeft(".hero-description", { delay: 0.4 }));
  }
});
</script>

<style lang="scss" scoped>
.hero-section {
  @include respond-to(mobile) {
    padding: $spacing-lg;
  }

  .hero-title {
    font-family: $font-family-primary;
    color: $primary-color;
  }
}
</style>
```

### VueUse Composables

```vue
<script setup lang="ts">
import { useMouse, useScroll, useWindowSize } from "@vueuse/core";

const { x, y } = useMouse();
const { y: scrollY } = useScroll();
const { width, height } = useWindowSize();

// Reactive cursor position
const cursorPosition = computed(() => ({ x, y }));

// Scroll-based animations
watch(scrollY, (newY) => {
  if (newY > 100) {
    // Show/hide elements based on scroll
  }
});
</script>
```

## 🚀 Deployment

### Build for Production

```bash
# Build application
yarn build

# Generate static site
yarn generate

# Preview production build
yarn preview
```

### Environment Variables

Create `.env` file for environment-specific configuration:

```env
NUXT_PUBLIC_API_URL=https://api.example.com
NUXT_PUBLIC_SITE_NAME=My Nuxt App
NUXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify Deployment

```bash
# Build and deploy
yarn generate
# Deploy dist/ folder to Netlify
```

## 📚 Learning Resources

### Official Documentation

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [GSAP Documentation](https://greensock.com/docs/)
- [VueUse Documentation](https://vueuse.org/)

### Recommended Tutorials

- Nuxt 3 advanced patterns
- GSAP animation techniques
- SCSS architecture best practices
- Vue 3 Composition API

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
rm -rf .nuxt
rm -rf node_modules
yarn install
yarn build
```

### GSAP Issues

- Ensure GSAP is properly imported
- Check for conflicting animations
- Use `gsap.killTweensOf()` to clean up

### SCSS Compilation

- Verify import paths in `index.scss`
- Check for syntax errors in SCSS files
- Ensure all variables are defined before use

---

**Built with ❤️ using Nuxt 3, SCSS, GSAP, and modern Vue.js practices**
