/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "it"],
  routes: {
    it: {
      about: "chi siamo",
      menu: "menu",
      contact: "contatti",
    },
  },
};
