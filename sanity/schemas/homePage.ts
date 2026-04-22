import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "stats", title: "Highlights Cards" },
    { name: "testimonials", title: "Testimonials Section" },
    { name: "map", title: "Coverage Map Section" },
    { name: "visibility", title: "Show/Hide Sections" },
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
      validation: (r) => r.max(120),
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
      description: "The paragraph directly below the hero title.",
      group: "hero",
      validation: (r) => r.max(240),
    }),
    defineField({
      name: "heroTagline",
      title: "Hero Tagline",
      type: "string",
      description:
        "Short bold line, e.g. 'No subscription. No catch. Free to join.'",
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
    defineField({
      name: "featuredPros",
      title: "Featured Pros (phone mockup)",
      type: "array",
      description:
        "The 3 featured professionals shown in the phone mockup. Upload a square photo for each.",
      group: "hero",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "role",
              title: "Role",
              type: "string",
              description: "E.g. 'Braids + color', 'Editorial makeup'",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "avatar",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "role", media: "avatar" },
          },
        },
      ],
      validation: (r) => r.max(3),
    }),

    // ---------- Highlights / Stats Band ----------
    defineField({
      name: "highlights",
      title: "Highlights Cards",
      type: "array",
      description: "The 3 cards under the hero. Title + description each.",
      group: "stats",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
      validation: (r) => r.max(6),
    }),

    // ---------- Testimonials Section ----------
    defineField({
      name: "testimonialsEyebrow",
      title: "Small Label Above Heading",
      type: "string",
      description:
        "Small uppercase text above the heading. E.g. 'Trusted by the beauty community'",
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
          preview: { select: { title: "title", subtitle: "description" } },
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
    defineField({
      name: "mapImage",
      title: "Map Image",
      type: "image",
      description: "Replace the US coverage map image. Use a wide image (approx 1200x800).",
      options: { hotspot: true },
      group: "map",
    }),

    // ---------- Section Visibility ----------
    defineField({
      name: "showHighlights",
      title: "Show Highlights Section",
      type: "boolean",
      initialValue: true,
      group: "visibility",
    }),
    defineField({
      name: "showFeatures",
      title: "Show Features Section",
      type: "boolean",
      initialValue: true,
      group: "visibility",
    }),
    defineField({
      name: "showTestimonials",
      title: "Show Testimonials Section",
      type: "boolean",
      initialValue: true,
      group: "visibility",
    }),
    defineField({
      name: "showMap",
      title: "Show Coverage Map Section",
      type: "boolean",
      initialValue: true,
      group: "visibility",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
