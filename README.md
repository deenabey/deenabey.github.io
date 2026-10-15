# Art Ed — Deena Beydoun

Plain HTML, CSS, and JavaScript. No build step. Works as-is on GitHub Pages.

## File structure

```
art-ed-site/
├── index.html                    Home page (hero + project list)
├── dae-200.html                  Educational Lineage Project
├── dae-405-observation.html      DAE 405 Student Observation
├── template.html                 Copy this to start a new page
├── .nojekyll                     Tells GitHub Pages to serve files as-is
├── css/
│   └── styles.css                All styling (colors and fonts are at the top)
├── js/
│   └── main.js                   Nav + footer, missing-file placeholders, image enlarge
└── assets/
    ├── images/
    │   ├── dae-200/              Images for DAE 200
    │   ├── dae-405/              Images for DAE 405
    │   └── home/                 (spare) images for the home page
    ├── video/                    .mp4 files
    └── pdf/                      PDFs
```

## Put your files in (the pages show a dashed "Add image: ..." box until you do)

Download your images and videos from the GoDaddy site (or your originals), then save
them with these exact names. If a file is a different type (.png, .webp), either
rename the extension in the HTML or convert it to .jpg.

**assets/images/dae-200/**
- `lunar-color-wheel.jpg` (the big wheel image near the top)
- `initial-sketch.jpg`
- `eclipse-01.jpg` … `eclipse-08.jpg` (the 8-image gallery under "Eclipse")
- `eclipse-detail-1.jpg`, `eclipse-detail-2.jpg` (the two images between the Eclipse paragraphs)
- `culmination.jpg`

**assets/video/**
- `the-loop.mp4`
- `layering.mp4`

**assets/images/dae-405/**
- `hero.jpg`
- `classroom-01.jpg` … `classroom-09.jpg`
- `character-design-01.jpg` … `character-design-05.jpg`
- `joining-in-01.jpg` … `joining-in-03.jpg`
- `comics-plan-01.jpg` … `comics-plan-08.jpg`
- `rubric-01.jpg` … `rubric-05.jpg`

**assets/pdf/**
- `lesson-plans-overview.pdf`

The Vimeo animation and the rubric Google Doc link are already wired up.

## Things to check against your original

- Alt text for the 405 photos is generic ("Classroom photo 3 of 9"). Edit the `alt="..."`
  in the HTML to describe each image; add `<figcaption>` text if you want captions.
- The text for the Comics plan and Rubric sections came through as empty lists when I read
  the GoDaddy page, so I made them image galleries. If they were text, tell me and I'll
  switch them.

## Publish on GitHub Pages

1. Put everything in this folder at the **root** of your repo (so `index.html` is at the top level).
2. Commit and push.
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   choose your main branch and `/ (root)`, then Save.
4. After a minute or two your site is at `https://<your-username>.github.io/<repo-name>/`.

Large videos: GitHub has a 100 MB per-file limit. If an .mp4 is bigger, upload it to Vimeo
and swap the `<video>` for an iframe like the one in `dae-200.html`.

## Adding a new page later

1. Copy `template.html` and rename it.
2. Add one line to the `pages` list at the top of `js/main.js` so it appears in the nav.
3. (Optional) Add a row for it in the "Projects" list in `index.html`.
4. Put its images in a new folder under `assets/images/`.

## Changing the look

Colors and fonts are the variables at the top of `css/styles.css` (`--mist`, `--gold`, `--plum`, ...).
