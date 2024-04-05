import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://audiwu.com",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: "server",
  adapter: vercel(),
});
