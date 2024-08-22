import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
const SERVER_PORT = 3000;
const LOCALHOST = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST;
if (isBuild) {
  BASE_URL = LIVE_URL;
}


// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"]
  },
  integrations: [tailwind(), sitemap()]
});