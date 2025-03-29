import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const collections = {
  blogs: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      date: z.string(),
    }),
  }),
}