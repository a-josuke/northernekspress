# Northern Ekspress Limited — Website

Company website for **Northern Ekspress Limited (NEL)**, a fully Papua New Guinean-owned civil works, heavy equipment and plant hire company based in **Wewak, East Sepik Province, Papua New Guinea**.

> Tagline: *Expansion Always All Ways*

## About the company

**Mission** — To provide reliable, cost-effective civil construction, house building, heavy equipment and plant hire services across Papua New Guinea, delivering practical solutions for government, private sector and community projects, on time and within budget.

**Vision** — To become one of Papua New Guinea's most trusted and capable indigenous civil works, residential construction and plant hire companies, delivering infrastructure and homes that connect communities and support long-term economic growth.

## Services

| Service | Page |
| --- | --- |
| Road Construction & Rehabilitation | `services-details.html` |
| Bridgeworks & Drainage Systems | `bridgeworks.html` |
| Building Construction | `services.html` |
| Agroforestry & Timber Milling | `agroforestry.html` |
| Agriculture Commodities Export (cocoa and copra) | `commodities-export.html` |

## Site map

| Page | File |
| --- | --- |
| Home | `index.html` |
| About Us | `about.html` |
| Our Services | `services.html` |
| Our Team | `team.html`, `team-details.html` |
| Our Projects | `portfolio.html`, `portfolio-details.html` |
| FAQ | `faq.html` |
| Contact Us | `contact.html` |
| Legal | `privacy-policy.html`, `terms-of-use.html` |

## Tech

A plain static HTML/CSS/JavaScript site (no framework, no build step), based on a modified RSTheme "Industrie" template.

- `*.html` — pages
- `assets/css/main.css` — the single compiled stylesheet (page-specific tweaks live in each page's `<style>` block)
- `assets/js/` — template scripts (jQuery, Swiper, etc.)
- `assets/images/` — site imagery; `assets/images/client-photos/` holds real NEL project and fleet photos
- `assets/org-chart.pdf`, `assets/Company Profile.pdf` — downloadable documents linked from the site

## Run locally

No install needed. Serve the folder with any static server, for example:

```bash
npx serve .
```

Then open the printed address. Opening the HTML files directly also works for most pages, but serving over HTTP is recommended.

## Deployment

Hosted on **Cloudflare Pages** as a static site, deployed from this repository.

- Framework preset: **None**
- Build command: *(leave empty)*
- Build output directory: `/` (repository root)
- Production branch: `main`

Every push to `main` redeploys automatically.

## Contact forms

The contact forms post to [FormSubmit](https://formsubmit.co) (an external form-to-email service). Delivery requires the receiving mailbox to confirm the one-time FormSubmit activation email. Until that is done, submissions are not delivered.

## Company contact

- **Address:** East Sepik Province, Wewak, Papua New Guinea
- **Phone:** +675 7879 7793, +675 7116 1287
- **Email:** northernekspress@gmail.com
- **Hours:** Mon – Fri, 8:00am – 5:00pm

© Northern Ekspress Limited. All rights reserved.
