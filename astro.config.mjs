import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://audiwu.com",
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), sitemap(), mdx()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    build: {
      rollupOptions: {
        external: ["@/components/navigation/index"],
      },
    },
  },
});