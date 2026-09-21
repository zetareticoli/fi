---
layout: post
title: "On the last redesign"
cover-image: 
sitemap: 
  priority: 0.96
---

For three years I kept this website alive with small commits: a fix here, a new post there, never the rewrite I knew it needed.

Last week I finally shipped **v2.0**: a full redesign of the layout, content architecture, case studies, and build pipeline.

## Why a redesign, and why now

Because I’m about to change chapter. By the end of November I’ll leave the Italian Department of Digital Transformation — a journey that started four years ago. A site that no longer described my work was going to become a problem very soon.

So the goal became simple: **make the site say clearly what I do** — design systems and product design leadership — and then prove it. The old portfolio talked about projects; it never showed them. 

Now every case study opens with context, challenge, and outcome, followed by a curated gallery. The long version is still there, just collapsed by default: skim it in thirty seconds, or expand it and read the whole story.

## Main changes

Most of the work happened under the surface. What changed visually is the smallest part of it.

- The styling system was reorganized around Tailwind CSS 4, centralized design tokens, light and dark themes, and locally hosted variable fonts—making the interface more consistent and easier to maintain.
- A shared layout was introduced, with a desktop sidebar and a full-screen mobile navigation system featuring active-page states, keyboard dismissal, and focus management.
- Dark mode now persists across visits through `localStorage`, while still respecting the system preference by default.
- New structured templates were built for portfolio projects, posts, and workshops. These are more modular, responsive, and driven by structured content data rather than duplicated markup.
- Media handling was improved with responsive images through Netlify Image CDN, `srcset`, lazy loading, asynchronous decoding, and videos that load only when they enter the viewport.
- Performance was improved through versioned assets, long-lived immutable caching for CSS, JavaScript, and fonts, critical-resource preloading, and deferred loading of the ConvertKit script until user interaction.
- SEO was strengthened with canonical URLs, dynamic meta descriptions and Open Graph tags, fallback social images, a sitemap, robots directives, and Schema.org structured data for the website, profile, articles, and case studies.
- Accessibility received focused improvements, including better footer contrast, meaningful image alternatives and dimensions, semantic galleries, safer external links, and clearer navigation labels.
- Legacy stylesheets and layouts were removed, while permanent redirects were added for older URLs and the Jekyll configuration was simplified.
- The project also explored cross-page transitions during development, but these were ultimately removed from the final version to reduce rendering work and keep the experience lightweight.

## What I learned along the way

Four things I'd tell myself before starting again:

1. **Ship the structure before the styling.** The sidebar and the `work` layout did more for the site than any visual refinement.
2. **Let the content model drive the design.** `featured.yml` exists because the homepage needed to change weekly without a deploy ritual.
3. **Don't run two design styles in parallel.** Commenting out the legacy Sass was the moment the refactor became real.
4. **Treat transitions and prefetch as design work.** They're the difference between a document and a product.

**153** commits and **one** merge later, the site finally matches the way I actually work.

Go have a look.
