// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css:["~/assets/css/main.css"],
  app:{
    head: {
      title:"muhammad rafiq",
      meta: [
        {
          name: "description",
          content: "belajar nuxt",
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href:'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap',
        },
      ],
    }
  }

})