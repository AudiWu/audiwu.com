import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

const assets = defineCollection({
    loader: cldAssetsLoader({
      folder: 'Test',
      limit: 100
    })
  })

const blogs = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		date: z.string(),
	}),
});

export const collections = {
    assets,
	blogs,
};
