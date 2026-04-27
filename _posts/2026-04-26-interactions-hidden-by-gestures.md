---
layout: post
title: "Interactions hidden by gestures"
cover-image: 
sitemap:
  priority: 0.98
---

How many features on your phone have you never discovered simply because no one told you they were there?

There is a class of design decisions that deserves more scrutiny than it usually gets: placing functionality behind interactions the user has no reason to attempt.

The long press is the canonical example. Hold your finger on an icon and a hidden menu surfaces. Hold it on a word and selection handles appear. Hold it on a message and reaction options emerge. The pattern is everywhere, and it is almost always invisible.

## Explicit vs. implicit interactions

An **explicit interaction** is one you can see. A button, a labelled icon, a visible affordance — something that signals to the user that an action is possible here.

An **implicit interaction** leaves no trace. It operates through convention, muscle memory, or — more often than designers like to admit — accidental discovery. Long press, swipe-to-action, double-tap, pinch-to-zoom, pull-to-refresh: none of these announce themselves. They require prior knowledge to be found at all.

The assumption baked into implicit interactions is that the user already knows. That assumption is almost always wrong for at least part of your audience.

## Why we keep doing it

The honest answer is **interface cleanliness**. Hiding complexity behind gestures is a convenient way to appear simple without actually being simple. Show every available action at all times and the screen becomes unmanageable. So designers reach for the implicit interaction as a tidy solution.

But there is a meaningful difference between *simplifying* and *hiding*. Simplifying means reducing real complexity — fewer features, more linear flows, fewer decisions. Hiding means relocating complexity from the interface into the user's head. The screen looks cleaner. The user has to work harder.

When a core feature is only reachable through an invisible gesture, the interface has not been simplified. The cognitive load has simply been transferred.

## An accessibility problem we tend to overlook

**Implicit interactions** are not just a discoverability issue. For a significant portion of users, they are an **access barrier**.

The long press is unreliable for people with hand tremors or limited motor control. Pinch-to-zoom fails for anyone using a single finger. Shake-to-undo — still present in iOS — is effectively unusable for many people. When any of these gestures is the *only* path to a feature, that feature is silently excluded from part of the audience.

The principle that should govern this is simple: an implicit interaction can be a shortcut, but it can never be the sole route.

## When implicit interactions earn their place

They work well as accelerators for experienced users who have already learned the interface. 

Drag and drop is a good example: the interaction adds speed for those who know it, but removing it entirely does not break the product. 

They also work when a well-established convention makes them nearly legible. Pinch-to-zoom on an image is so pervasive it barely registers as implicit anymore. Even so, the best implementations pair it with visible controls.

The test is straightforward: if someone never discovers the gesture, can they still use the product fully? If the answer is no, the implicit interaction is a problem, not a feature.

## A few practical adjustments

Audit your product's implicit interactions and ask which features are accessible *only* through them. 

For anything important, **add a visible path**: it does not need to be prominent, but it needs to exist. Use temporary visual hints, contextual tooltips, or onboarding moments to surface gestures that are genuinely worth discovering. And test with users who are new to the product, not with a team that has spent months internalising every shortcut.

Visual elegance is not an end in itself. An interface that looks calm by hiding half its functionality behind gestures it is an incomplete one.