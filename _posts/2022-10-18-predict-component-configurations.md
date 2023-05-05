---
layout: post
title: "Predict Component Configurations in a Design System"
cover-image: 
sitemap:
  priority: 0.95
---

A Design System cannot anticipate and produce every possible configuration of any need anyone may have.

It would be too complex to create and manage it, as well as inflexible to change.

In the past (and still today) I have often worked on the creation and documentation of the components for Design Systems.

When I (and my team) were convinced that all the configurations were included, the incoming requests following the first usage brought us back to reality. We realized that to foresee everything was pretty impossible.

So, how to manage something whose variability is unknown?

## The subcomponents

Nathan Curtis suggests an interesting solution: **[use the subcomponents](https://link.medium.com/QfjOhQ29bub)**.

The idea is quite interesting: instead of foreseeing the variants at the highest level of a component (example: Card, Card with image, Card with image and button, etc) it's far better to break it in smaller parts: the **subcomponents**. Does the word **molecules** tell you something? 😉

Each **subcomponent** could have multiple configuration or host smaller parts.

Let'see an example from Nathan Curtis article: the Card component and the CardContainer sub-component.

![card horizontal layout](/img/posts/predict-design-system-config/card-horizontal-layout.png "Card with a horizontal layout")

![card vertical layout](/img/posts/predict-design-system-config/card-vertical-layout.png "Card with a vertical layout")


Acting on the subcomponent we could re-arrange the Card layout in a unpredicted way.

## What is the advantage?
→ For **those who consume** the system, there is the chance of experimenting with many different configurations in a short time.

→ For **those who create and maintain** the system, there is no longer the need to predict all the specific variants of a component upstream.

## Fighting ineffectiveness
After the boom of the past years, Design Systems are experiencing a critical moment: it becomes more and more complex to adopt them.

According to the [2021 Design System Survey](https://designsystemssurvey.seesparkbox.com/2021/), only 40% of the systems were successful. Among all the possible causes, [Brad Frost highlighted one](https://medium.com/storybookjs/why-most-design-systems-implode-e01e55948cca) that caught my attention: 

*"Design Systems go stale fast"*.