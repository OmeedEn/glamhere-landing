import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "seo", title: "SEO / Google + Social Previews" },
    { name: "footer", title: "Footer" },
    { name: "links", title: "App & Social Links" },
  ],
  fields: [
    // ---------- SEO ----------
    defineField({
      name: "seoTitle",
      title: "Browser Tab / Google Title",
      type: "string",
      description:
        "Shown in the browser tab and as the clickable Google search result. Keep under 60 characters.",
      group: "seo",
      validation: (r) => r.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "Google Search Description",
      type: "text",
      rows: 3,
      description:
        "The short paragraph that shows under the Google search result. Keep under 160 characters.",
      group: "seo",
      validation: (r) => r.max(180),
    }),
    defineField({
      name: "ogTitle",
      title: "Social Share Title (Facebook / Instagram / Twitter)",
      type: "string",
      description: "Shown when someone shares the link on social media.",
      group: "seo",
      validation: (r) => r.max(100),
    }),
    defineField({
      name: "ogDescription",
      title: "Social Share Description",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (r) => r.max(200),
    }),
    defineField({
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      description:
        "Shown when the link is shared on social. Recommended 1200x630px.",
      options: { hotspot: true },
      group: "seo",
    }),

    // ---------- Footer ----------
    defineField({
      name: "footerTagline",
      title: "Footer Tagline",
      type: "text",
      rows: 3,
      description: "Short paragraph next to the logo in the footer.",
      group: "footer",
    }),
    defineField({
      name: "copyrightName",
      title: "Copyright Name",
      type: "string",
      description:
        "Shown as '© 2026 [name]. All rights reserved.' — defaults to 'glamhere'.",
      group: "footer",
    }),

    // ---------- App & Social Links ----------
    defineField({
      name: "appStoreUrl",
      title: "App Store URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "googlePlayUrl",
      title: "Google Play URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "tiktokUrl",
      title: "TikTok URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact / Support Email",
      type: "string",
      description:
        "E.g. support@glamhereapp.com. Shown on the Contact page.",
      group: "links",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
