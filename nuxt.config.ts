// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'animate.css/animate.min.css'],
  modules: ['@nuxtjs/google-fonts', '@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    cssPath:'~/assets/css/tailwind.css',
    configPath:'tailwind.config.js',
    exposeConfig: false,
    config:{},
    injectPosition: 0,
    viewer: true,
  }
})