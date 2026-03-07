<template>
  <div class="home-page-container">
    <h1>NUXT 3 + SCSS + GSAP</h1>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "",
    },

    // Open Graph meta tags
    {
      hid: "og:description",
      property: "og:description",
      content: "",
    },
    { hid: "og:title", property: "og:title", content: "" },
    { hid: "og:site_name", property: "og:site_name", content: "" },
    {
      hid: "og:image",
      property: "og:image",
      content: "",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "",
    },

    // Twitter meta tags
    { hid: "twitter:title", name: "twitter:title", content: "" },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "",
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
      content: "",
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: "",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "",
    },
  ],
});
</script>

<style scoped lang="scss">
.home-page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 2rem;
    color: #16270c;
  }
}
</style>
