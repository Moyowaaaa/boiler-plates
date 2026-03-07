// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Ecobloom",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        // Standard description
        {
          hid: "description",
          name: "description",
          content: "Ecobloom - Transforming Spaces with Nature’s Beauty",
        },

        // Open Graph meta tags
        { hid: "og:title", property: "og:title", content: "Ecobloom" },
        {
          hid: "og:description",
          property: "og:description",
          content: "Transforming Spaces with Nature’s Beauty",
        },
        { hid: "og:site_name", property: "og:site_name", content: "Ecobloom" },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/dyap7epew/image/upload/c_crop,g_auto,h_1200,w_630/v1731159479/projects/itdoeunwityp96cmnrfb.png",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ecobloom.vercel.app",
        },

        // Twitter meta tags
        { hid: "twitter:title", name: "twitter:title", content: "Ecobloom" },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Transforming Spaces with Nature’s Beauty",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/dyap7epew/image/upload/c_crop,g_auto,h_1200,w_630/v1731159479/projects/itdoeunwityp96cmnrfb.png",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "og:image:width",
          content: "1200",
        },
        {
          hid: "og:image:height",
          content: "630",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://ecobloom.vercel.app",
        },

        // Theme color
        { name: "theme-color", content: "#16270c" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://res.cloudinary.com/dyap7epew/image/upload/c_crop,g_auto,h_1200,w_630/v1731159479/projects/itdoeunwityp96cmnrfb.png",
        },
      ],
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/image"],

  css: ["@/styles/index.scss"],

  hooks: {
    // Register Service Worker after the build
    "build:before": () => {
      console.log("Service worker setup...");
    },
  },

  // Nuxt build configuration for service worker
  nitro: {
    devProxy: {
      "/sw.js": { target: "/_nuxt/assets/service-worker.js", ws: true },
    },
  },

  ssr: true,
});
