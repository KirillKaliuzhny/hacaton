// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['nuxt-swiper', '@pinia/nuxt',],
  pinia: {
    storesDirs: ['@/stores/**']
  },
  runtimeConfig: {
    public: {
      apiUrl: 'http://194.87.232.183:8080'
    }
  }
})
