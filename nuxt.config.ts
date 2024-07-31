export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Andri Nugroho",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [],
    },
  },
  devtools: { enabled: true },
  modules: [
    
  ],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  imports: {
    dirs: ["store"],
  },
});
