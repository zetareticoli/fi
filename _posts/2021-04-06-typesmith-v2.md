---
layout: post
title: "Typesmith v2.0.0"
cover-image: typesmith-cover.png
sitemap:
  priority: 0.90
---

Last week I released the new [Typesmith v2.0.0](https://github.com/zetareticoli/typesmith/releases/tag/v2.0.0).

**Typesmith** is a responsive typography library built in Sass. 

It’s my first open-source project. I created it working on the **editorial** products for Citynews.  So, it’s designed for this **purpose**. If you have a **blog, magazine, news website** or whatever you could find it very useful., it uses `px` as unit measure because I usually design in pixels. Any conversion to relative units comes next with the `@rem` Sass function.

## How it works
Typesmith is made up of a few essentials:
1. a Sass map to manage typography sizes
2. a Sass mixin that uses the map for `font-size` and `line-height` CSS declarations
3. a list of CSS classes for direct use in HTML templates (optional)

### Type Sizes
I chose classic English speaking world names: *Canon*, *Double Pica*, *Paragon* and more.

I think having a unique name for a specific size helps communication between designers and devs implementing a design. Like design tokens do.

## Customizations
There’re some things you can customize:
* Control Vertical Rhythm wit CSS Custom Properties
* Change media-query Breakpoints
* Enable or Disable CSS classes

## What’s next
I'm working on some nice feature for the future:
- Different Type Scales
- Relative units (like `vmin` or `vmax`)

😎 Stay tuned! 

---
 
## Links
- [Github](https://github.com/zetareticoli/typesmith)
- [npm Package](https://www.npmjs.com/typesmith-lib)

