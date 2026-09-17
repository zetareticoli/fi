---
layout: post
title: "Using AI as a product designer"
cover-image: 
sitemap:
  priority: 0.99
---

My AI stack as a designer in 2026 looks very different from the one I used only a few years ago.

Claude → planning, brainstorming, and thinking out loud.
Notion AI (Sonnet 5 / Opus 5) → writing specs, documentation, and content.
Cursor Pro and Codex → turning design decisions into working software.

And then there’s the tool that is increasingly missing from the process: Figma.

I’m not saying Figma is no longer useful. I still use it for specific tasks: exploring visual directions, reviewing interface patterns, collaborating with other designers, or creating shared artifacts that a team can discuss. But it is no longer the automatic starting point for every product problem.

More and more often, I move directly from intent to code.

## Challenge assumptions

Claude is where I start when the problem is still unclear.

I use it to unpack a brief, challenge assumptions, compare possible approaches, and turn scattered thoughts into a direction I can act on. It works less like a tool that gives me “the answer” and more like a thinking partner that helps me make the question better.

A typical session might include:

- defining the actual user problem behind a feature request;
- mapping constraints, risks, and open questions;
- exploring alternative flows before committing to one;
- reviewing the logic of an interaction;
- stress-testing a decision from the perspectives of users, product, design, and engineering;
- turning a vague idea into a sequence of experiments.

The point is to keep the reasoning visible. Rather than jumping too quickly into an interface, I can stay with the problem longer without slowing the process down.

## Organize knowledge

Once the direction is clearer, I move into Notion where a simple conversation becomes a durable artifcat: product specs, decision logs, content drafts, project notes, principles, checklists, and documentation.

I mainly use Notion AI with Sonnet 5 or Opus 5 to:

- structure rough notes without losing the original reasoning;
- draft and refine product requirements;
- turn design discussions into explicit decisions;
- create documentation that connects intent, behavior, and implementation;
- review writing for gaps, ambiguity, and unnecessary complexity;
- reuse knowledge already stored in the workspace.
- register meeting notes, archiving them in project page.

For me, this distinction matters. AI becomes far more useful when it operates within the context of a project rather than in an isolated chat. Knowledge behind the work should be easier to retrieve, question, update, and share.

## Design in the real product context

Cursor Pro and Codex are where design becomes tangible.

I use them to build interface concepts, connect components, test states, refine responsive behavior, and work directly with the constraints of the real product. Instead of describing a design and waiting for someone else to interpret it, I can express the decision in the medium where it will ultimately live.

A coded prototype can reveal things that a static mockup often hides:

- whether the layout survives real content;
- how the interface behaves across breakpoints;
- what happens in loading, empty, error, and edge-case states;
- whether the interaction feels right rather than merely looking right;
- how well the proposal fits the existing component library;
- which design decisions create unnecessary implementation complexity.

Code is part of the design process itself. I don’t question that anymore.

## Skipping the artifacts

The traditional workflow was linear: understand the problem, sketch a solution, create polished mockups, hand them off, and wait for implementation.

This process made sense when design and engineering relied on different tools, skills, and representations. But AI-assisted development has compressed the distance between an idea and a working interface.

For many problems, a high-fidelity mockup has become an expensive intermediate artifact. It can look complete while leaving the most important questions unanswered. The same interface then has to be rebuilt in code, where new constraints emerge and decisions are made again.

Going directly to code removes part of that translation layer.

Designing this way lets me work with real components, real tokens, real content, and real behavior from the start. Feedback also becomes more concrete, because people can interact with the proposal instead of imagining how a static screen might work.

## Where design tools still fits

This is not a “Figma is dead” argument. Anzi, sono molto interessato a provare Paper nei prossimi giorni.

A design tool remains valuable when visual exploration *is* the work—when many people need a shared canvas, or when changing pixels is still cheaper than changing code. It’s also useful for mapping flows, documenting patterns, comparing directions, and maintaining design-system assets.

The difference is that I now choose Figma deliberately instead of using it by default.

If the core uncertainty is visual, I use a visual design tool. If the uncertainty is behavioral, structural, or technical, I would rather test it in code.

## The stack is really a workflow

The tools matter less than the handoffs between them. I still make the decisions, evaluate the trade-offs, and take responsibility for the outcome. AI accelerates exploration and execution, but **it does not replace judgment**.

That’s the most important part of our role as designers.