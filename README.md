# Winnie Portfolio – Prep Folder

Drop all materials into these folders. When ready, tell me and I’ll scaffold the website using these files.

## Folders
- assets/images: Headshots, project screenshots, logos, misc visuals
- assets/documents: CV/Resume (PDF), certificates, press
- brand: Logo files and brand basics
- content/profile.json: Bio + contact and social links
- content/projects: One subfolder per project
- content/testimonials: One file per testimonial

## What to add exactly

### 1) Profile
- assets/images/profile.jpg: Best headshot (min ~1500px wide)
- assets/documents/winnie-cv.pdf: Latest CV
- content/profile.json: Fill this template:
```json
{
  "name": "Winnie Lastname",
  "title": "Your role (e.g., Product Designer)",
  "bio": "2–4 sentence bio highlighting strengths and focus.",
  "email": "name@example.com",
  "phone": "+31 ...",
  "location": "City, Country",
  "socials": {
    "linkedin": "https://www.linkedin.com/in/...",
    "instagram": "https://www.instagram.com/...",
    "github": "https://github.com/...",
    "behance": "https://www.behance.net/...",
    "dribbble": "https://dribbble.com/...",
    "website": "https://..."
  },
  "availability": "Open to freelance from Oct 2025"
}
```

### 2) Brand (optional but helpful)
- brand/logo.(svg|png)
- brand/colors.json (hex codes):
```json
{
  "primary": "#...",
  "secondary": "#...",
  "accent": "#...",
  "text": "#...",
  "background": "#..."
}
```
- brand/typography.txt: Preferred fonts (e.g., "Inter for UI, Playfair for headings")

### 3) Projects
For each project, create a folder: content/projects/<slug>
Example: content/projects/greenhouse-optimizer

Inside each project folder:
- cover.jpg: Hero image
- gallery/: Optional extra images (gallery/01.jpg, 02.jpg ...)
- data.json: Fill this template:
```json
{
  "title": "Project Title",
  "slug": "greenhouse-optimizer",
  "date": "2024-06",
  "role": ["Designer", "Research"],
  "summary": "One-liner about impact/outcome.",
  "description": "Short narrative: problem, process, solution, impact.",
  "tags": ["UX", "Research", "Sustainability"],
  "links": {
    "live": "https://...",
    "repo": "https://..."
  },
  "client": "Client name (if any)",
  "awards": ["Award name (optional)"]
}
```

### 4) Testimonials (optional)
Add one JSON file per testimonial in content/testimonials, e.g., jane-doe.json
```json
{
  "quote": "Winnie delivered beyond expectations...",
  "authorName": "Jane Doe",
  "authorTitle": "CTO, Company",
  "company": "Company",
  "photo": "../../assets/images/jane-doe.jpg"
}
```

## Naming tips
- Use lowercase and dashes for project folder names (slugs)
- Prefer JPG/PNG for images; SVG for logos/illustrations
- Aim for 1600–2400px width for hero images; <400KB if possible

## When done
- Ping me. I’ll generate the website (fast static site) and wire it to these files.
