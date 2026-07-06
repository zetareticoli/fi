---
layout: work
title: Design System .italia
tag: Design System
order: 1
overview: The official design system for the Italian public administration digital services.
role: Design System Lead
org: Department for Digital Transformation
period: 2022 – present
url: https://designers.italia.it/design-system/
context: Italy's public administration is a complex ecosystem — thousands of institutions, each with different budgets, technical capabilities, and design maturity. The goal of Design System Italia was to provide a shared foundation that any public body could adopt, from a small municipality to a national ministry.
challenge: The challenge wasn't purely technical. It required balancing the needs of highly diverse stakeholders, ensuring that components worked for both small teams with no design resources and large agencies with established processes.
activities:
  - label: Designed and maintained UI Kit Italia — 60+ components with multiple variants, mapped to Bootstrap Italia
  - label: Authored all component documentation and usage guidelines
  - label: Verified WCAG 2.1 AA compliance for every published component
  - label: Reviewed community contributions and governed design decisions in public on GitHub
outcomes:
  - number: "15,000"
    label: Public administration adopting the design system across Italy
  - number: "60+"
    label: Components in the design system
  - number: 5
    label: Resources available to the community UI Kit Italia, Bootstrap Italia, Dev Kit Italia, Design Tokens Italia
tools:
  - Figma
  - Bootstrap Italia
  - HTML and CSS
  - WCAG 2.1
  - GitHub
  - Web Components
images:
  - /img/work/design-system-italia/design-system-italia-1.jpg
  - /img/work/design-system-italia/design-system-italia-1.jpg
  - /img/work/design-system-italia/design-system-italia-1.jpg
permalink: /work/design-system-italia/
---

## Working in the open

Design System .italia is maintained as a fully open-source project on GitHub. This means every decision — a component's default state, a naming convention, a colour token — is made in public and subject to community scrutiny. Early on, this felt like a constraint. Over time, it became a quality mechanism.

Feedback from agency developers pushing their first pull requests revealed assumptions baked into the component API that would have gone unnoticed in a closed process. Maintaining that open channel required a different kind of discipline: writing decision rationale in commit messages, responding to issues from municipalities with no dedicated design team, and explaining trade-offs to people who had never worked with a design system before.

## The hardest tension: flexibility vs. coherence

The design system serves an extraordinarily diverse audience. A small mountain municipality with one part-time web administrator has entirely different needs than a ministry with a team of twenty developers. Both need to comply with the same accessibility standards. Both need to produce something that reads unmistakably as a public service.

The recurring pressure was to add escape hatches — custom colour overrides, optional layout variations, theme tokens for individual institutions. Each request was individually reasonable. Collectively, they would have dissolved the system into a theme kit.

The decision I kept returning to was to hold a narrow surface of intentional flexibility (spacing scales, a limited set of semantic colour tokens) and resist everything else. This required saying no — repeatedly and with documented reasoning — to suppliers used to bespoke deliverables, and to institutions convinced their brand required an exception. Translating "this constraint protects your users" into something a non-designer stakeholder could act on was its own design challenge.

## Accessibility as a non-negotiable

WCAG 2.1 AA compliance was a legal requirement under Italian digital services regulations, not a best practice. Every component was designed and verified against colour contrast ratios, keyboard navigation flows, focus management, and screen reader behaviour before being published.

This meant slower iteration cycles. When a new component required back-and-forth over focus trap behaviour in a modal, the temptation was to ship a known-acceptable version and iterate. We didn't. That discipline built trust with institutional stakeholders who had real legal exposure on accessibility — and eventually became a credibility differentiator for the project as a whole.

## Adoption as a design problem

Fifteen thousand public administration websites didn't adopt the design system because it was good. They adopted it because the path to adoption was designed as carefully as the components themselves.

This meant producing migration guides and Figma starter kits targeting designers with no design system experience, running community labs to surface adoption blockers before they stalled implementations, and working with the web agencies actually building the sites to make Bootstrap Italia the path of least resistance rather than an additional compliance burden.
