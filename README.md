# Helping Hand Solutions Website

Static website for Helping Hand Solutions.

## Files

- `index.html` - main website page
- `styles.css` - site styling
- `script.js` - quote form email helper
- `assets/` - site images

## Deploy On Vercel

1. Log into Vercel.
2. Click **Add New Project**.
3. Import this GitHub repository.
4. Use the default static site settings:
   - Framework preset: Other
   - Build command: leave blank
   - Output directory: `.`
5. Deploy.

## Analytics Without Google

Use Vercel Web Analytics.

1. In Vercel, open this project.
2. Click **Analytics** in the sidebar.
3. Click **Enable**.
4. Redeploy the site after analytics is enabled.

The Vercel Web Analytics script is already included in `index.html`:

```html
<script defer src="/_vercel/insights/script.js"></script>
```

If Vercel Analytics is not enabled in the Vercel dashboard, this script will not collect data.

Vercel Web Analytics is available on all plans, does not use cookies, and shows analytics inside the Vercel dashboard.

Do not add Google Analytics unless the business specifically wants Google tracking.

## Notes

- This is a static site. There is no admin dashboard or backend.
- Future edits can be made by editing the HTML, CSS, JavaScript, or image files.
- For simple content updates, edit `index.html`.
