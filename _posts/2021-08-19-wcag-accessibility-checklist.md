---
layout: post
title: "The Must Have WCAG 2.1 Checklist (Updated for WCAG 2.2)"
seo_title: "WCAG 2.1 & 2.2 Checklist for Designers: AA Made Simple"
description: "A practical WCAG 2.1 and 2.2 checklist for designers: contrast ratios, focus, forms, target size and the AA criteria to meet, plus tools to test your work."
cover-image: wcag-checklist.jpg
image_alt: "WCAG 2.1 accessibility checklist for designers"
permalink: /2021/08/19/wcag-accessibility-checklist/
read_time: 8 min read
sitemap:
  priority: 0.9
last_modified_at: 2026-10-02
---

Designing products that are both usable and accessible to most users requires that you go beyond the A level and focus on meeting **WCAG AA** (or, where possible, AAA) requirements.

The Web Content Accessibility Guidelines can feel overwhelming the first time you open them. This WCAG checklist is the short version I use as a designer: what the conformance levels mean, which success criteria you can actually own in your design files, and the tools that help you check your work before handoff.

## What is WCAG?

The **Web Content Accessibility Guidelines (WCAG)** are the international standard for digital accessibility, published by the W3C. They are organised around four principles, often remembered with the acronym **POUR**:

- **Perceivable**: users must be able to perceive the information (text alternatives, captions, sufficient contrast).
- **Operable**: users must be able to operate the interface (keyboard access, enough time, no seizure-inducing content).
- **Understandable**: content and behaviour must be predictable and readable (clear labels, helpful errors).
- **Robust**: content must work reliably with assistive technologies such as screen readers.

Each principle contains guidelines, and each guideline contains testable **success criteria**.

## WCAG levels: A, AA and AAA

Every success criterion has a conformance level:

- **Level A** is the minimum. If you miss these, some people simply can't use your product.
- **Level AA** is the target most laws and procurement policies refer to. It's the level you should design for by default.
- **Level AAA** is the highest level. It's not realistic to meet it across an entire product, but some AAA criteria (like enhanced contrast) are worth adopting where you can.

WCAG 2.1 includes 78 success criteria: 30 at level A, 20 at level AA and 28 at level AAA. To claim AA conformance you need to meet all A and AA criteria.

## WCAG 2.1 vs WCAG 2.2: what changed

When I first published this checklist, WCAG 2.1 was the latest version. **WCAG 2.2** became a W3C Recommendation in October 2023 and is backwards compatible: if you meet WCAG 2.2, you also meet 2.1.

WCAG 2.2 adds nine new success criteria and removes one (4.1.1 Parsing). The new ones that matter most at level A and AA are:

- **2.4.11 Focus Not Obscured (Minimum)**, AA: the focused element must not be completely hidden by sticky headers, cookie banners or other overlays.
- **2.5.7 Dragging Movements**, AA: anything you can do by dragging must also be possible with a single pointer action, like tapping.
- **2.5.8 Target Size (Minimum)**, AA: interactive targets must be at least 24×24 CSS pixels, or have enough spacing around them.
- **3.2.6 Consistent Help**, A: help mechanisms (contact details, chat, FAQ links) must appear in the same place across pages.
- **3.3.7 Redundant Entry**, A: don't ask users to type the same information twice in the same process.
- **3.3.8 Accessible Authentication (Minimum)**, AA: logging in must not depend on a cognitive test, like remembering a password without allowing paste or a password manager.

Many regulations, including the European standard EN 301 549 behind the **European Accessibility Act** (in force since June 2025) and the US ADA Title II rule, still reference **WCAG 2.1 AA**. Designing to WCAG 2.2 AA covers both.

## The WCAG checklist for designers

These are the criteria you can address directly in your design files. They don't replace a full audit, but they catch most of the issues I see in reviews.

### Color and contrast

- **Text contrast (1.4.3, AA)**: at least **4.5:1** for normal text and **3:1** for large text (24px regular or 18.66px bold and above).
- **Enhanced contrast (1.4.6, AAA)**: at least **7:1** for normal text and **4.5:1** for large text.
- **Non-text contrast (1.4.11, AA)**: icons, input borders, focus indicators and other UI components need at least **3:1** against adjacent colors.
- **Use of color (1.4.1, A)**: never use color as the only way to convey information. Pair it with text, icons or patterns, for example in error states, charts and links.

| Element | AA | AAA |
| --- | --- | --- |
| Normal text | 4.5:1 | 7:1 |
| Large text | 3:1 | 4.5:1 |
| UI components and graphics | 3:1 | — |

### Typography and layout

- **Resize text (1.4.4, AA)**: text can be zoomed up to 200% without losing content or functionality.
- **Reflow (1.4.10, AA)**: content works at a width of 320 CSS pixels without horizontal scrolling. Design your mobile breakpoint with this in mind.
- **Text spacing (1.4.12, AA)**: the layout doesn't break when users increase line height to 1.5, paragraph spacing to 2× the font size, letter spacing to 0.12em and word spacing to 0.16em. Avoid fixed-height containers for text.
- **Orientation (1.3.4, AA)**: don't lock the interface to portrait or landscape unless it's essential.

### Keyboard and focus

- **Keyboard (2.1.1, A)**: every interactive element is reachable and usable with a keyboard.
- **No keyboard trap (2.1.2, A)**: users can always move focus away from a component, including modals and embedded widgets.
- **Focus order (2.4.3, A)**: focus moves in a logical order that matches the visual layout.
- **Focus visible (2.4.7, AA)**: there is always a visible focus indicator. Design it as a proper state in your components, don't leave it to the browser default.
- **Focus not obscured (2.4.11, AA, new in 2.2)**: sticky elements don't cover the focused element.
- **Bypass blocks (2.4.1, A)**: provide a "Skip to content" link or proper landmarks to jump past repeated navigation.

### Touch and pointer interactions

- **Target size (2.5.8, AA, new in 2.2)**: interactive targets are at least **24×24px**. For comfortable touch targets, aim for **44×44px**, which is the AAA requirement (2.5.5).
- **Pointer gestures (2.5.1, A)**: complex gestures like pinch or multi-finger swipes always have a single-pointer alternative, such as buttons.
- **Dragging movements (2.5.7, AA, new in 2.2)**: drag and drop has an alternative, for example "Move up" and "Move down" actions.
- **Label in name (2.5.3, A)**: the accessible name of a control contains its visible label, so voice control users can say what they see.

I wrote more about this in [interactions hidden by gestures](/2026/04/26/interactions-hidden-by-gestures/).

### Forms and errors

- **Labels or instructions (3.3.2, A)**: every field has a visible label. Placeholders are not labels.
- **Error identification (3.3.1, A)**: errors are described in text, not only highlighted in red.
- **Error suggestion (3.3.3, AA)**: when you know how to fix an error, tell the user.
- **Identify input purpose (1.3.5, AA)**: common fields (name, email, address) support autocomplete.
- **Redundant entry (3.3.7, A, new in 2.2)**: don't ask for the same information twice.
- **Accessible authentication (3.3.8, AA, new in 2.2)**: allow password managers, copy and paste, or passwordless login.

### Content, images and media

- **Non-text content (1.1.1, A)**: meaningful images have text alternatives; decorative images are marked as such.
- **Headings and labels (2.4.6, AA)**: headings and labels describe the topic or purpose of the content.
- **Info and relationships (1.3.1, A)**: structure shown visually (headings, lists, tables, groups) is also defined in code. Annotate it in your handoff.
- **Link purpose (2.4.4, A)**: link text makes sense in context. Avoid repeated "Read more" or "Click here".
- **Page titled (2.4.2, A)**: each page has a unique, descriptive title.
- **Captions (1.2.2, A)** and **audio description (1.2.5, AA)** for prerecorded video.
- **Pause, stop, hide (2.2.2, A)**: carousels and animations that last more than 5 seconds can be paused.
- **Three flashes (2.3.1, A)**: nothing flashes more than three times per second.

### Consistency and status

- **Consistent navigation (3.2.3, AA)** and **consistent identification (3.2.4, AA)**: repeated components look and behave the same across pages. A design system helps a lot here.
- **Consistent help (3.2.6, A, new in 2.2)**: help links and contact options stay in the same place.
- **Status messages (4.1.3, AA)**: confirmations, loading states and errors are announced to screen readers without moving focus. Document these states in your components.
- **Content on hover or focus (1.4.13, AA)**: tooltips and popovers can be dismissed, hovered and stay visible until the user moves away.

## A printable WCAG 2.1 checklist

If you prefer a document you can fill in during reviews, take a look at this [WCAG 2.1 checklist (PDF)](https://kma.global/wp-content/uploads/2019/07/WCAG_2.1_Checklist.pdf).

It's a practical resource for experienced accessibility professionals and for those newer to the industry. The first part is a primer on industry nomenclature and accessibility testing approaches. Fillable and printable checklists follow.

## Tools to test accessibility in your designs

- **[Stark](https://www.getstark.co/)**: a plugin for Figma and other design tools to check contrast, simulate color blindness and verify that your designs pass AA or AAA before handing off your work.
- **[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)**: a quick way to check a pair of colors against WCAG contrast ratios.
- **[axe DevTools](https://www.deque.com/axe/devtools/)** and **[WAVE](https://wave.webaim.org/)**: browser extensions that flag common issues on live pages.
- **Lighthouse**: built into Chrome DevTools, useful for a first automated pass.
- **Screen readers**: VoiceOver on macOS and iOS, NVDA on Windows and TalkBack on Android. Nothing replaces trying your own product with one.

Automated tools catch only a part of accessibility issues. Use them early, but always combine them with manual checks with a keyboard and a screen reader.

## Frequently asked questions

### Which WCAG level should I aim for?

Aim for **WCAG 2.2 AA**. It's what most laws refer to (often through WCAG 2.1 AA), and it's achievable for almost any product. Adopt individual AAA criteria, like 7:1 contrast for body text or 44×44px targets, where they make sense.

### What is the minimum contrast ratio for WCAG AA?

**4.5:1** for normal text, **3:1** for large text and **3:1** for UI components and meaningful graphics.

### Is WCAG 2.1 still valid?

Yes. WCAG 2.1 is still a W3C Recommendation and many regulations reference it. WCAG 2.2 builds on it, so designing for 2.2 AA keeps you compliant with 2.1 AA too.

### Can designers make a product accessible on their own?

No, but design decisions have a huge impact. Contrast, focus states, target sizes, labels, error messages and content structure are all defined in the design phase. Fixing them later in code is always more expensive.

## Accessibility starts in the design system

The most effective way I've found to make accessibility stick is to bake these criteria into your design system: accessible color tokens, focus states for every component, minimum target sizes and documented error patterns. That's what we've been doing with Design System .italia, and I talked about it at [Accessibility Days 2025](/2025/05/20/accessibility-days/).

Keep this WCAG checklist next to your design files, test early, and accessibility becomes part of how you design instead of a fix at the end.
