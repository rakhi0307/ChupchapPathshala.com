# ChupChap Pathshala Landing Page

Responsive static landing page built with HTML, CSS and Vanilla JavaScript.

## Included
- Bengali-first typography using Noto Sans Bengali and Manrope
- Responsive desktop, tablet and mobile layout
- Early Bird Google Form link connected
- Live launch countdown for 12 December 2026, 00:00 Bangladesh time
- Mobile navigation
- Supplied ChupChap Pathshala logo and book illustration

## Launch configuration
The current settings are in `script.js`:

```js
const SITE_CONFIG = {
  GOOGLE_FORM_URL: "https://forms.gle/XpNNxMBjiLqJwowV7",
  LAUNCH_AT: "2026-12-12T00:00:00+06:00"
};
```

The `+06:00` offset is Bangladesh time. The countdown uses an absolute timestamp, so the target remains correct after deployment and for visitors in other time zones. It runs in the visitor's browser, so the visitor's device clock should be accurate.

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Deploy to GitHub and Vercel
1. Create a GitHub repository.
2. Upload the complete project, including the `assets` folder.
3. Push to the `main` branch.
4. In Vercel, choose **Add New → Project** and import the repository.
5. Select **Other** as Framework Preset.
6. Leave Build Command empty. Set Output Directory to `.` if required.
7. Deploy.

No build command, server, environment variables or backend are needed.


### Latest visual update
- Replaced the hero book artwork with a sharper, larger WebP illustration.
- Lowered the desktop hero artwork by 26px, with smaller responsive offsets on tablet and mobile.


## Contact details shown on the page
- ChupChap Pathshala
- Merul Badda, Dhaka-1212
- 01310-760126 (click-to-call on mobile)

The reader portrait row has been removed. The 10-lakh figure is worded as a community-building aspiration, not as an existing member count.
