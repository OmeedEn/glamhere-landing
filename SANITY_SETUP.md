# Sanity CMS Setup Guide

This project has a full CMS wired up. Your marketing person can edit the homepage at **glamhereapp.com/studio** — no code, just a login.

Follow the steps below to turn it on.

---

## 1. Create a free Sanity account + project

1. Go to **https://www.sanity.io/** and click **Get Started** (sign up with Google/GitHub/email).
2. On the dashboard, click **Create new project**.
3. Pick any name — e.g. `glamhere-landing`.
4. Choose dataset name: **`production`** (use exactly this name).
5. When asked about templates, pick **Clean project with no predefined schemas** (we already have schemas in the code).

Once created, you'll land on the project dashboard. Keep this tab open — you'll need the Project ID.

## 2. Copy your Project ID

On the project dashboard you'll see a **Project ID** (looks like `abc12xyz`). Copy it.

## 3. Paste the Project ID into your local env file

Open `.env.local` in the project root and fill in:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

## 4. Allow your domains in Sanity CORS settings

On the Sanity project dashboard:

1. Go to **API** tab → **CORS origins**.
2. Click **Add CORS origin** and add each of these (tick **Allow credentials** for each):
   - `http://localhost:3000`
   - `https://glamhereapp.com`
   - `https://www.glamhereapp.com`
   - Your Vercel preview URL (optional): `https://glamhere-landing-*.vercel.app`

This lets the Studio at `/studio` actually save changes.

## 5. Add the same env vars to Vercel

In Vercel → your project → **Settings** → **Environment Variables**, add:

| Name                              | Value                     | Environments                     |
| --------------------------------- | ------------------------- | -------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`   | *(your project ID)*       | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_DATASET`      | `production`              | Production, Preview, Development |

Then redeploy (Vercel → Deployments → latest → "Redeploy").

## 6. Run it locally once to check the Studio

```bash
npm run dev
```

Open **http://localhost:3000/studio** and sign in with the same Sanity account.

You'll see **Home Page** and **Site Settings** in the sidebar.

## 7. Invite your marketing person

On the Sanity project dashboard → **Members** → **Invite members**.

- Enter their email.
- Set role to **Editor** (they can edit + publish, not delete the project or invite others).
- They'll get an email invite. After accepting, they sign in at **https://glamhereapp.com/studio** (once deployed).

---

## What's editable

Every field below has a fallback to the current hardcoded value. Leave any field blank and the existing copy/image stays.

### Home Page document

**Hero**
- Hero title (supports italics via `{em}word{/em}`)
- Hero description
- Hero tagline
- 2 small feature-card labels ("Book directly from a post", "Explore the map")
- **3 featured pros** shown in the phone mockup (name, role, photo)

**Highlights Cards** (the 3 cards under the hero)
- Array of `{ title, description }` — add/remove/reorder freely

**Testimonials Section**
- Eyebrow label, heading, description
- 3 feature cards (title + description each)

**Coverage Map Section**
- Eyebrow label, heading, description
- **Map image** (replaces `/images/us-map.png`)

**Show/Hide Sections**
- Toggle Highlights, Features, Testimonials, Coverage Map on/off

### Site Settings document

**SEO / Google + Social Previews**
- Browser tab + Google title
- Google search description
- Social share title + description (Facebook/Instagram/Twitter)
- Social share image (1200x630 recommended)

**Footer**
- Footer tagline (next to the logo)
- Copyright name

**App & Social Links**
- App Store URL
- Google Play URL
- Instagram URL
- TikTok URL
- Facebook URL
- Contact/support email

---

## What's NOT editable (by design)

- **Features section** (has interactive mockups tied to specific designs)
- **Legal pages** (Terms, Privacy)
- **Brand colors, fonts, layouts, icons** — these are design system choices. If you want to change any of these, talk to the developer.

---

## Tips for the marketer

- **Italicizing a word in the hero title:** wrap the word in `{em}` and `{/em}`.
  Example: `The Beauty Industry's {em}First{/em} Social Booking Platform` renders *First* in italics.
- **Images:** drag & drop into the image field. Sanity handles cropping, resizing, and CDN delivery automatically.
- **Publishing:** click **Publish** (top right) after editing. Changes appear on the live site within ~60 seconds.
- **Preview before publish:** changes only go live when you click Publish. You can save drafts safely.
- **Made a mistake?** Sanity keeps full version history. Click the clock icon → pick a previous version → restore.

---

## Troubleshooting

- **`/studio` is blank or shows an error** → env vars missing or wrong. Check `.env.local` locally or Vercel env vars in production.
- **Changes don't show on the live site for ~60s** → that's expected. The site caches CMS data for 60 seconds. To force instant update, trigger a redeploy in Vercel.
- **Marketer can't publish** → they need **Editor** role, not Viewer. Check Sanity → Members.
- **Image not showing on the live site** → make sure it was **published** (not just uploaded as a draft).
