---
layout: post
title: "A new workflow: one plan, many conversations"
description: "How I'm building FocusTrail (soon to be ClearTime) with AI: a versioned PLAN.md every agent can read, dedicated conversations for plan, design and development, and an agile rhythm between them."
cover-image: 
sitemap:
  priority: 0.95
---

A couple of weeks ago I wrote about [splitting the work on a small macOS app into separate conversations](/one-conversation-one-job/). The app is called FocusTrail for now. The final version will be called **ClearTime**.

Since then the method has settled. It's less of an experiment and more of a routine, so I want to write it down properly.

The question behind it is simple: **how do I bring AI into my workflow in an organized way, without losing my bearings across conversations and platforms?**

Because that's the real risk. I think in Claude, I build in Claude Code, sometimes I check something in another tool. Every one of these places has its own memory, or no memory at all. If the project lives in the chats, it lives nowhere.

So the project lives in a file.

## It starts with a plan

Before any design or code, there's a `PLAN.md` in the repository.

Three things matter about it:

- **It's versioned.** It sits in git, next to the code. Every change has a date, a diff, and a reason. I can see how the plan evolved, and roll back if I need to.
- **It's always accessible to agents.** Any agent working on the project, in any tool, can open it. No copy-pasting context between chats, no "as we discussed yesterday".
- **It's the source of truth.** If a conversation and the plan disagree, the plan wins. If the plan is wrong, we fix the plan, not the conversation.

This is the part that keeps me from losing the compass. Conversations come and go. The file stays.

## What goes into the plan

The plan isn't a long spec. It's three sections, kept as short as possible.

**Functional requirements.** What the app must do, written from the user's side. Start a focus session, see where the time went, get out of the way when you don't need it. This is the part that changes least, and it's the one I go back to when I'm unsure whether a feature belongs in the first version.

**Milestones.** The work, split into small chunks that can be designed, built, and checked on their own. Each milestone has a scope, a rough size, and a way to tell when it's done.

**Design decisions.** The choices we made and why. Not only visual ones: structure, behavior, trade-offs, things we decided *not* to do.

```markdown
# PLAN.md

## Functional requirements
- ...

## Milestones
- M1 — ...  (design ✓, development in progress)
- M2 — ...  (design in progress)
- M3 — ...

## Design decisions
- 2026-10-28 — ...
- 2026-11-06 — changed: ... because ...
```

The last section is the one that moves the most. **Decisions get updated as development goes on and things change.** Something that looked right in a design conversation turns out to be awkward once it's real code. A requirement turns out to be less important than I thought. When that happens, the decision gets rewritten, with a note on what changed and why.

A plan that never changes isn't a plan. It's a wish.

## One conversation per job

With the plan in place, I open dedicated conversations. Each one has a single purpose.

**One for the plan.** This is where I think out loud: priorities, scope, what can wait. When we agree on a change, `PLAN.md` gets updated. This conversation doesn't design screens and doesn't write code.

**One for UI exploration.** This is where the interface takes shape: layouts, states, components, tone. It reads the plan to know what the current milestone needs, and it writes its decisions back into the plan. It moves through the milestones one at a time.

**One for each development milestone.** M1 has its own conversation. M2 has another. Each one starts by reading the plan and the design decisions for that milestone, and stays inside that scope. Every feature becomes its own pull request, small enough that I can actually review it.

The rule is the same everywhere: **a conversation has a boundary, and the plan is the only thing that crosses all boundaries.** When a chat starts drifting, say, a development conversation wants to rethink the colors, I notice, because it has no reason to be talking about colors. That goes back to the design conversation, or into the plan.

## Design one step ahead

The part I like most is the rhythm.

When a UI milestone is done, development for that milestone starts. Meanwhile, the design conversation doesn't wait: it moves on to the next milestone.

So at any given moment, design is working on M(n+1) while development is building M(n). When development finishes, the next design is already there. And whatever development learned along the way flows back into the plan, so the next design conversation starts from the updated decisions, not from the original ones.

If you've worked in an agile team, this is familiar. It's the same reason designers often work one sprint ahead of developers: design doesn't block development, and development keeps design honest.

The only difference is that I'm playing all the roles, each one with an AI partner and a clear scope.

## What this gives me

Three things, mostly.

**Continuity.** I can close everything on Friday and pick up on Monday from any tool. The plan tells me, and the agent, exactly where we are.

**Focus.** Each conversation does one job. Shorter context, fewer surprises, less "why did you change that?".

**Traceability.** Every decision has a place, a date, and a reason. When something feels off, I can look at the history of `PLAN.md` and see when and why we went that way.

None of this is new. Plans, milestones, design ahead of development, small reviewable changes: it's how good teams have worked for years. What's new is that the same structure works with AI, maybe even better, because **an AI forgets everything the moment you close the chat**. A file in the repository doesn't.

I'll keep refining this while FocusTrail turns into ClearTime, and I'll share what changes.
