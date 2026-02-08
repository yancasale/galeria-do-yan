import { defineCollection, z } from "astro:content";

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(["photo", "drawing"]),
    cover: z.string(),
  }),
});

export const collections = { works };

