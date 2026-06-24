// src/content.config.ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders'; // The clean official loader path

const articlesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    neighborhood: z.string(),
    category: z.string().optional(),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    breaking: z.boolean().optional(),
  }),
});

export const collections = {
  'articles': articlesCollection,
};