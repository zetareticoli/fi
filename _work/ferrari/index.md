---
layout: work
title: One Login, Six Ferrari Worlds — Designing Network-Wide SSO
cover: "/img/work/ferrari/ferrari-sso-cover.webp"
tag: UX Design
order: [set based on desired position]
overview: A unified single sign-on experience connecting Ferrari's fan-facing digital properties, from Scuderia Ferrari to the online store.
role: UX Designer (external consultant, via Spindox)
org: Spindox — Ferrari's digital technology partner
period: 2013
context: Ferrari's digital presence was split across independent properties — Formula 1, GT & Sport Car, Ferrari Store, Ferrari Magazine, the Museo, and the Fan Zone — each historically running its own registration system. A fan who wanted to vote in a poll on one property and buy merchandise on another had to create two separate accounts. I joined as an external UX consultant, working through Spindox, Ferrari's technology partner, to design a single account model that would work across the whole network.
challenge: The registration flow had to serve two audiences at once. Marketing needed granular consent and newsletter segmentation by content vertical (GT & Sport Car, Formula 1, Store), and legal required explicit terms acceptance — both of which add friction. Casual fans, meanwhile, expected a low-effort way in. The challenge was designing an entry point that satisfied compliance and segmentation needs without making the traditional path feel like a wall, while giving fans who just wanted quick access a genuinely fast alternative.
activities:
  - label: Designed a unified Accedi / Registrati entry point surfaced in the header across every property in the network
  - label: Designed two parallel onboarding paths — Facebook OAuth for low-friction entry, and a traditional username/email path for fans who preferred not to connect a social account
  - label: Structured the extended registration form to sequence legal consent, newsletter segmentation, and a lightweight anti-bot check without overwhelming a single screen
  - label: Produced annotated low-fidelity wireframes and interaction specs for the engineering team to build against
outcomes:
  - number: 6
    label: Ferrari digital properties unified under a single account model
  - number: 2
    label: Parallel entry paths designed to match fan intent — social login and traditional signup
tools:
  - Balsamiq
  - Facebook Login (OAuth)
  - Annotated wireframe specs
gallery:
  - /img/work/ferrari/ferrari-sso-1.jpg
  - /img/work/ferrari/ferrari-sso-2.jpg
permalink: /work/ferrari/
---

## One account, six digital worlds

Before this project, "Ferrari.com" wasn't really one thing — it was a federation of properties (Formula 1, GT & Sport Car, Corse Clienti, Ferrari Store, Ferrari Magazine, the Museo) each with its own login. The brief was simple to state and hard to execute: one identity, usable everywhere, surfaced consistently from the same header regardless of which part of the network a fan landed on first.

<figure>
  <img src="/img/work/ferrari-sso/ferrari-sso-1.jpg" alt="">
  <figcaption class="color-text-light">2013 — Early wireframe of the network header, with Accedi and Registrati treated as two distinct actions</figcaption>
</figure>

Even this first decision carried weight: **Accedi** (log in) and **Registrati** (sign up) needed distinct visual treatment, not just distinct labels, because they triggered different downstream flows and had different priority depending on where a fan encountered them — a returning member deep in the Fan Zone has different needs than a first-time visitor reading a race report.

## Two paths in, one identity

The core design decision was offering two ways to become a Ferrari member: connecting an existing Facebook account, or registering directly with an email and username. This wasn't just a UI pattern borrowed from elsewhere — it reflected a real split in fan behaviour. Some wanted to be in and participating (voting in polls, joining the forum, watching driver videochats) in two clicks. Others, often for privacy reasons, preferred not to link a social account at all.

<figure>
  <img src="/img/work/ferrari-sso/ferrari-sso-2.jpg" alt="">
  <figcaption class="color-text-light">2013 — Facebook OAuth path (left) alongside the traditional registration form (right), sharing the same benefits sidebar</figcaption>
</figure>

Both paths led to the same account model, but the traditional route carried more of the compliance and marketing weight, which is where most of the design effort actually went.

## The friction inside the "extra" fields

The traditional signup form couldn't just be username, email, and password. It had to carry newsletter segmentation split by content vertical (GT & Sport Car, Formula 1, Ferrari Store, or all of them), explicit legal consent for terms and data processing, and a basic anti-bot check. Every one of those elements was a legitimate requirement from a different stakeholder — legal, marketing, security — and none of them were negotiable.

The design problem wasn't whether to include these fields, but how to sequence and group them so the form didn't read as a wall of obligations before a fan even got to participate in anything. Grouping newsletter preferences visually apart from legal consent, and placing the security check last, kept the form scannable even though it was doing more work than a typical signup screen.

## Working through a technology partner

I was brought onto this project as an external consultant through Spindox, Ferrari's technology partner at the time, rather than as part of an in-house team. That meant designing with a specific handoff constraint in mind: every wireframe needed to be self-explanatory enough for an engineering team I wouldn't be sitting next to day-to-day. The annotations on each screen — explaining *why* two buttons looked different, *why* the OAuth dialog behaved a certain way — were as much a part of the deliverable as the layouts themselves.