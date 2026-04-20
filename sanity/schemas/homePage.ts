import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "stats", title: "Stats Band" },
    { name: "testimonials", title: "Testimonials Section" },
    { name: "map", title: "Coverage Map Section" },
  ],
  fields: [
    // ---------- Hero ----------
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      description:
        "Main headline at the top of the page. Use {em}word{/em} to italicize a word — e.g. The Beauty Industry's {em}First{/em} Social Booking Platform",
      group: "hero",
      validation: (r) => r.required().max(120),
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
      description: "The paragraph directly below the hero title.",
      group: "hero",
      validation: (r) => r.required().max(240),
    }),
    defineField({
      name: "heroTagline",
      title: "Hero Tagline",
      type: "string",
      description: "Short bold line, e.g. 'No subscription. No catch. Free to join.'",
      group: "hero",
      validation: (r) => r.max(80),
    }),
    defineField({
      name: "heroCard1",
      title: "Hero Feature Card 1",
      type: "string",
      description: "Small card shown beside the phone mockup.",
      group: "hero",
    }),
    defineField({
      name: "heroCard2",
      title: "Hero Feature Card 2",
      type: "string",
      group: "hero",
    }),

    // ---------- Testimonials Section ----------
    defineField({
      name: "testimonialsEyebrow",
      title: "Small Label Above Heading",
      type: "string",
      description: "Small uppercase text above the heading. E.g. 'Trusted by the beauty community'",
      group: "testimonials",
    }),
    defineField({
      name: "testimonialsHeading",
      title: "Section Heading",
      type: "string",
      group: "testimonials",
    }),
    defineField({
      name: "testimonialsDescription",
      title: "Section Description",
      type: "text",
      rows: 3,
      group: "testimonials",
    }),
    defineField({
      name: "testimonialsCards",
      title: "Feature Cards",
      type: "array",
      group: "testimonials",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
      validation: (r) => r.max(6),
    }),

    // ---------- Coverage Map Section ----------
    defineField({
      name: "mapEyebrow",
      title: "Small Label Above Heading",
      type: "string",
      group: "map",
    }),
    defineField({
      name: "mapHeading",
      title: "Section Heading",
      type: "string",
      group: "map",
    }),
    defineField({
      name: "mapDescription",
      title: "Section Description",
      type: "text",
      rows: 3,
      group: "map",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
