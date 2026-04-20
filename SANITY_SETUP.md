# Sanity CMS Setup Guide

This project now has a Sanity CMS wired up. When it's set up, your marketing person can edit the homepage at **glamhereapp.com/studio** — no code, just a login.

Follow the steps below to turn it on.

---

## 1. Create a free Sanity account + project

1. Go to **https://www.sanity.io/** and click **Get Started** (sign up with Google/GitHub/email).
2. On the dashboard, click **Create new project**.
3. Pick any name — e.g. `glamhere-landing`.
4. Choose dataset name: **`production`** (use exactly this name).
5. When asked about templates, pick **Clean project with no predefined schemas** (we already have schemas in the code).

Once created, you'll land on the project dashboard. Keep this tab open — you'll need two values from it.

## 2. Copy your Project ID

On the project dashboard you'll see a **Project ID** (looks like `abc12xyz`). Copy it.

## 3. Paste the Project ID into your local env file

Open `.env.local` in the project root and fill in:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

## 4. Allow your domains in Sanity CORS settings

Still on the Sanity project dashboard:

1. Go to **API** tab → **CORS origins**.
2. Click **Add CORS origin** and add each of these (tick **Allow credentials** for each):
   - `http://localhost:3000`
   - `https://glamhereapp.com`
   - `https://www.glamhereapp.com`
   - Your Vercel preview URL (optional): `https://glamhere-landing-*.vercel.app`

This lets the Studio at `/studio` actually save changes.

## 5. Add the same env vars to Vercel

In Vercel → your project → **Settings** → **Environment Variables**, add:

| Name                              | Value                     | Environments                  |
| --------------------------------- | ------------------------- | ----------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`   | *(your project ID)*       | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_DATASET`      | `production`              | Production, Preview, Development |

Then redeploy (Vercel → Deployments → latest → "Redeploy").

## 6. Run it locally once to create initial content

```bash
npm run dev
```

Open **http://localhost:3000/studio** and sign in with the same Sanity account.

You'll see a "Home Page" item in the sidebar. Click it, fill in the hero title, description, etc., and click **Publish**. Leave a field empty to fall back to the existing hardcoded copy.

> **Tip — italicizing a word in the hero title:** wrap the word in `{em}` and `{/em}`. For example:
> `The Beauty Industry's {em}First{/em} Social Booking Platform`
> renders *First* in italics.

## 7. Invite your marketing person

On the Sanity project dashboard → **Members** → **Invite members**.

- Enter their email.
- Set role to **Editor** (they can edit + publish, not delete the project or invite others).
- They'll get an email invite. After accepting, they sign in at **https://glamhereapp.com/studio** (once deployed).

---

## What's editable right now

| Section              | Fields                                                       |
| -------------------- | ------------------------------------------------------------ |
| **Hero**             | Title, description, tagline, two small feature-card labels   |
| **Testimonials**     | Eyebrow label, heading, description, three feature cards     |
| **Coverage Map**     | Eyebrow label, heading, description                          |

Anything left blank falls back to the current hardcoded text, so the site never breaks.

## What's NOT editable yet (by design)

- The **Features** section (has visual mockup screens tied to design).
- The **Stats** band.
- The **Footer** and **Header** navigation.
- The **Legal pages** (Terms, Privacy).
- Metadata / SEO title (we can add this next if you want).

Let me know which of these you want editable and I'll add schemas for them.

---

## Troubleshooting

- **`/studio` is blank or shows an error** → env vars missing or wrong. Check `.env.local` locally or Vercel env vars in production.
- **Changes don't show on the live site for ~60s** → that's expected. The site caches CMS data for 60 seconds. To force an instant update, trigger a redeploy in Vercel.
- **Marketer can't publish** → they need **Editor** role, not Viewer. Check Sanity → Members.
