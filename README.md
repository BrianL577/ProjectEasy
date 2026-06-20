# easy flight support — website

This is the easy flight support website, built so you can edit the content
and push updates through GitHub without touching most of the code.

## What's in here

```
app/            the page itself (layout, homepage, global styles)
components/     each section of the page as its own file (Header, Hero, etc.)
data/           the editable content — region counts, partners, services, loyalty steps
lib/data.ts     the one file that reads from /data — this is what you'd point
                at Supabase later instead, with no other files needing to change
```

If you just need to **change content** (a number, a sentence, a bullet point),
you almost never need to touch `app/` or `components/` — everything editable
lives in the four files inside `/data`.

## Fastest path: get this live (no computer setup required)

1. Go to [github.com](https://github.com) and create a new repository — call it
   `easy-flight-support` (or anything you like). Keep it **Private** if this
   shouldn't be public yet.
2. On the new repo's page, click **"uploading an existing file"** (or "Add
   file" → "Upload files").
3. Drag in every file and folder from this project, keeping the same folder
   structure (`app/`, `components/`, `data/`, `lib/`, plus the files in the
   root like `package.json`).
4. Commit the upload.
5. Go to [vercel.com](https://vercel.com) and sign in with your GitHub
   account.
6. Click **"Add New" → "Project"**, select the `easy-flight-support` repo,
   and click **Deploy**. Vercel automatically detects this is a Next.js
   project — you don't need to configure anything.
7. In about a minute, Vercel gives you a live URL (something like
   `easy-flight-support.vercel.app`). Every time you push a change to
   GitHub, Vercel rebuilds and updates that URL automatically.

## How to edit content later

All of this can be done directly on GitHub's website — no software needed:

- **Change an airport count or region status** → edit `data/regions.ts`
- **Add, remove, or rename a partner** → edit `data/partners.ts`
- **Change service descriptions or bullet points** → edit `data/services.ts`
- **Change the loyalty program steps** → edit `data/steps.ts`

On GitHub, open the file, click the pencil (✏️) icon in the top right,
make your change, then click **"Commit changes"**. Vercel will rebuild the
live site automatically within about a minute.

## If you want to preview changes on your own computer first (optional)

This requires [Node.js](https://nodejs.org) installed once. Then, from this
folder:

```
npm install
npm run dev
```

Open `http://localhost:3000` in your browser to see the site update live as
you edit files.

## About Supabase

This version doesn't use Supabase — the content in `/data` is small enough
(a handful of regions, partners, and services) that plain files are simpler
to maintain and free to host. `lib/data.ts` is written so that if/when you
build the searchable airport database (filtering by airport, country, or
region — the feature Mike mentioned), that's the natural point to introduce
Supabase: you'd only need to change the inside of the functions in
`lib/data.ts` to query Supabase instead of reading local files. Nothing in
`app/` or `components/` would need to change.

## Things still flagged as pending

These are marked directly on the live site (look for the amber "pending" /
"draft" tags) as well as here:

- Europe (93) / Africa (33) airport counts — need reconciling against the
  master spreadsheet
- "easy handling" and "easy move" service copy — currently placeholder
  drafts, no confirmed copy yet
- Both Google Form links — currently pointed at `/viewform` versions, but
  not yet confirmed as final
- Response-time expectation in the "Why easy" section — needs a real number
  from Mike
