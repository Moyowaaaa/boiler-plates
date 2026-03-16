# Boiler Plates Collection

A comprehensive collection of modern web development boilerplates designed to kickstart your projects with best practices, optimized configurations, and production-ready setups.

## 📁 Overview

This repository contains three distinct boilerplates, each tailored for different development stacks and use cases:

| Boilerplate | Technology Stack | Use Case | Status |
|-------------|------------------|----------|---------|
| [Next.js 16 + Tailwind CSS](./next16-tailwind) | React, Next.js 16, Tailwind CSS 4, GSAP, Lenis | Modern web applications with smooth scrolling | ✅ Production Ready |
| [Node.js + Express + TypeScript](./node-express-typescript) | Node.js, Express, TypeScript, MongoDB, Swagger | RESTful APIs with full backend capabilities | ✅ Production Ready |
| [Nuxt 3 + SCSS + GSAP](./nuxt3-scss-gsap) | Vue 3, Nuxt 3, SCSS, GSAP, Pinia | Advanced Vue applications with animations | ✅ Production Ready |

## 🚀 Quick Start

Choose a boilerplate based on your project requirements:

### For React Applications
```bash
cd next16-tailwind
yarn install
yarn dev
```

### For Backend APIs
```bash
cd node-express-typescript
yarn install
yarn dev
```

### For Vue.js Applications
```bash
cd nuxt3-scss-gsap
yarn install
yarn dev
```

## 📋 Boilerplate Details

### Next.js 16 + Tailwind CSS

**Features:**
- ⚡ Next.js 16 with App Router
- 🎨 Tailwind CSS 4 with PostCSS
- 🎭 GSAP for advanced animations
- 📜 Lenis for buttery-smooth scrolling
- 🔧 TypeScript support
- 🚦 ESLint configuration
- 📱 Responsive design patterns

**Tech Stack:**
- React 19.2.3
- Next.js 16.1.6
- Tailwind CSS 4
- GSAP 3.14.2
- Lenis 1.3.18

**Project Structure:**
```
next16-tailwind/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── lib/                 # Utility libraries
├── public/              # Static assets
└── styles/              # Global styles
```

### Node.js + Express + TypeScript

**Features:**
- 🏗️ Express.js 5 with TypeScript
- 🗄️ MongoDB integration with Mongoose
- 📚 Swagger API documentation
- 🔐 Authentication & security middleware
- 📧 Email capabilities with Resend
- 🖼️ File upload with Multer & Cloudinary
- 📊 Request logging with Morgan
- ⚡ Redis caching support
- 🛡️ Rate limiting and CORS

**Tech Stack:**
- Node.js + Express 5.1.0
- TypeScript 5.9.2
- MongoDB + Mongoose 8.17.1
- Swagger UI for API docs
- JWT authentication
- Redis (ioredis)
- Cloudinary for media

**Project Structure:**
```
node-express-typescript/
├── src/
│   ├── controller/      # Route controllers
│   ├── db/             # Database connections
│   ├── middleware/     # Custom middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── interfaces/     # TypeScript interfaces
```

**API Endpoints:**
- `/api-docs` - Interactive Swagger documentation
- Configured CORS for localhost:3000 and localhost:3001
- Error handling and logging middleware

### Nuxt 3 + SCSS + GSAP

**Features:**
- 🌊 Nuxt 3 with SSR support
- 🎨 SCSS with modular architecture
- 🎬 Advanced GSAP animations
- 📦 Pinia for state management
- 🖼️ Optimized image handling
- 📱 PWA capabilities
- 🎭 Custom page transitions
- 📜 Smooth scrolling with Lenis
- 🔧 VueUse composables

**Tech Stack:**
- Nuxt 3.7.0
- Vue 3 Composition API
- SCSS/Sass 1.66.1
- GSAP 3.12.2
- Pinia 2.1.7
- VueUse 11.1.0

**Project Structure:**
```
nuxt3-scss-gsap/
├── animations/         # GSAP animation definitions
├── components/         # Vue components
├── composables/        # Vue composables
├── interactions/       # User interaction handlers
├── layouts/           # Nuxt layouts
├── pages/             # Route pages
├── stores/            # Pinia stores
├── styles/            # SCSS stylesheets
│   ├── _abstracts/    # Variables, mixins, functions
│   ├── _base/         # Base styles
│   ├── _components/   # Component-specific styles
│   └── _vendor/       # External library styles
└── utils/             # Utility functions
```

## 🛠️ Development Workflow

### Prerequisites
- Node.js 18+ 
- Yarn or npm
- Git
- MongoDB (for Express boilerplate)

### Environment Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd boiler-plates
```

2. **Choose your boilerplate** and navigate to its directory

3. **Install dependencies:**
```bash
yarn install
```

4. **Environment variables:**
   - Copy `.env.example` to `.env` (if available)
   - Configure necessary variables (MongoDB URI, API keys, etc.)

5. **Start development:**
```bash
yarn dev
```

### Production Deployment

#### Next.js Application
```bash
yarn build
yarn start
```

#### Express API
```bash
yarn build  # If using TypeScript compilation
yarn start  # Production server
```

#### Nuxt Application
```bash
yarn build
yarn preview
```

## 📊 Performance & Optimization

### Built-in Optimizations
- **Code Splitting:** Automatic in Next.js and Nuxt
- **Tree Shaking:** Enabled in all projects
- **Image Optimization:** Next.js Image component, Nuxt Image module
- **Bundle Analysis:** Available through build tools
- **Caching:** Redis support in Express API

### Recommended Tools
- **Lighthouse:** For performance auditing
- **Bundle Analyzer:** webpack-bundle-analyzer
- **Performance Monitoring:** Sentry, LogRocket

## 🔧 Customization Guide

### Adding New Features

#### Next.js
- Create new pages in `app/` directory
- Add components in `components/`
- Configure in `next.config.ts`

#### Express
- Add routes in `src/routes/`
- Create controllers in `src/controller/`
- Define models in `src/models/`

#### Nuxt
- Add pages in `pages/`
- Create components in `components/`
- Configure in `nuxt.config.ts`

### Styling Customization

#### Tailwind CSS (Next.js)
- Modify `tailwind.config.js`
- Add custom utilities in CSS files

#### SCSS (Nuxt)
- Edit variables in `styles/_abstracts/`
- Add component styles in `styles/_components/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

Each boilerplate may have its own license. Please check individual project files for specific licensing information.

## 🆘 Support & Documentation

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)

### Common Issues

#### Port Conflicts
- Default ports: Next.js (3000), Express (8081), Nuxt (3000)
- Modify `package.json` scripts to change ports

#### Database Connection
- Ensure MongoDB is running for Express boilerplate
- Check `.env` file for correct connection string

#### Build Errors
- Clear node_modules and reinstall
- Check for version conflicts in package.json

## 🗺️ Roadmap

- [ ] Add testing configurations (Jest, Cypress)
- [ ] Docker support for all boilerplates
- [ ] CI/CD pipeline templates
- [ ] Additional frontend frameworks (Svelte, Angular)
- [ ] Microservices architecture boilerplate
- [ ] GraphQL API boilerplate

---

**Happy Coding!** 🎉

Choose the boilerplate that best fits your project needs and start building amazing applications with confidence and best practices built-in.
