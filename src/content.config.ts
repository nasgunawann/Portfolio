import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const projects = defineCollection({
    loader: file("src/content/projects.json"),
    schema: ({ image }) => z.object({
        id: z.string(),
        title: z.string(),
        year: z.string(),
        category: z.string(),
        images: z.array(image()),
        description: z.string(),
        tags: z.array(z.string()),
        link: z.string(),
    }),
});

const experience = defineCollection({
    loader: file("src/content/experience.json"),
    schema: z.object({
        role: z.string(),
        company: z.string(),
        period: z.string(),
        location: z.string(),
        narrative: z.string(),
        skills: z.array(z.string()),
        isCurrent: z.boolean().optional(),
    }),
});

const education = defineCollection({
    loader: file("src/content/education.json"),
    schema: z.object({
        title: z.string(),
        institution: z.string(),
        period: z.string(),
        location: z.string(),
        narrative: z.string(),
        skills: z.array(z.string()),
    }),
});

const certifications = defineCollection({
    loader: file("src/content/certifications.json"),
    schema: z.object({
        title: z.string(),
        institution: z.string(),
        period: z.string(),
        technicalNote: z.string(),
        skills: z.array(z.string()),
        isCurrent: z.boolean().optional(),
    }),
});

export const collections = { projects, experience, education, certifications };
