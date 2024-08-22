import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";


const SERVER_PORT = 3000;
const LOCALHOST = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://crhistianbeteta.github.io";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST;
console.log("**************", SCRIPT)
if (isBuild) {

  BASE_URL = LIVE_URL;
}
console.log("base", BASE_URL)


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