---
layout: post
title: "What an interface inventory really tells you"
cover-image: 
sitemap:
  priority: 0.99
---

I used to think an interface inventory was a tidying exercise. You open the product, screenshot the components, sort them by type, and at the end you've got a nice grid that says "look at the mess." Everyone agrees there's a mess, and you start consolidating.

I don't think that anymore.

After running inventories on a handful of large products, I've started to think an interface inventory is closer to a confession. It's not a tool to fix the system. It's a mirror that forces a team to admit how the system was actually built, by whom, and against which deadlines.

That's why nobody wants to look at it for too long.

## The clean version

The story we tell to leadership is short. We collect every screen, extract every component, group them by category, find duplicates, and consolidate. The design system improves.

It fits in a slide. It has a "before" and an "after." It makes a manager feel like the team is mature.

The problem is that the middle of that sequence is where the real work happens, and none of it is mechanical.

## What I actually do

The moment I start sorting components, the categories begin to lie.

Take an accordion. Is it navigation, because it's how a user reaches content? Is it disclosure, because it hides content until requested?

On one project we argued about this for 2 weeks. We weren't arguing about the accordion. We were arguing about who, in the next release, would own it: the navigation squad or the content squad.

The taxonomy was a proxy for org chart.

Modals are worse. Where does a modal live in your inventory? Is it a layout element, a feedback element, or an anti-pattern you tolerate because legal asked for it?

I've seen the same team classify modals 3 different ways in the same audit, depending on who was holding the spreadsheet that day.

Or take a card you can click. The whole card is the affordance, with no button inside. Is the card a surface, or is it a button?

If you say "button," your accessibility audit explodes overnight. If you say "surface," your interaction model becomes inconsistent across the product. There is no right answer, only a choice, and the inventory forces you to make it in public.

These aren't edge cases. They are the inventory.

## The doubts I don't write down

When I run an inventory, there are questions I quietly ask myself and almost never put on the wall.

Why are there 14 buttons? Usually it's not because designers were sloppy. It's because the design system never gave them the variant they needed, and they shipped what they had to ship by Friday.

Who designed this component? Sometimes I find a well-thought-out widget tucked into a corner of the product, and nobody on the current team remembers building it. The person who did the good work has often already left.

Which of these "duplicates" are actually duplicates? Two date pickers can look identical and behave in completely different ways. A pixel-level diff misses the point.

What would break if we deleted this one? A component on an inventory is just a screenshot. Removing it from the product means understanding flows, contracts with the backend, accessibility commitments, and, on public-sector work, sometimes a regulation.

The deepest question is the one I keep last. Am I cataloguing components, or am I cataloguing decisions the team has been avoiding? Mostly the second.

I keep these questions out of the artifact because the moment I put them in writing, the conversation stops being about design and starts being about blame. And blame kills consolidation faster than anything.

## Inventory as politics

This is the part nobody writes about, so I will.

An interface inventory is a political act. The moment you put 14 buttons on a single page, you're publicly stating that 13 of them shouldn't exist. Every one of those 13 has a parent: a designer, a developer, a product manager who fought for it in some sprint planning 2 years ago.

Some of them are still in the room.

If you treat the inventory as a neutral artifact, those people will quietly defend their buttons. You'll leave the workshop with 14 buttons still alive and a Miro board full of post-its.

If you treat it as a confession, you have a chance. You move from "whose button is right?" to "what did we mean to do, and what did we actually do?" That second question doesn't have a winner.

On public-sector projects the stakes are higher. The duplicates aren't just ugly. They are inconsistent experiences for citizens trying to do things they didn't want to do in the first place.

"Which submit button is the real one?" isn't a fun question to leave open when someone is renewing a permit at 11pm.

## What I tell teams now, before we start

I've stopped opening interface inventories with a kickoff slide about taxonomies. I open with 3 sentences instead:

*"We're not going to find a clean answer."* This sets ambiguity as the working condition, not a failure mode. The PMs in the room visibly relax when I say it.

*"Every duplicate has a reason, and most of those reasons aren't 'the designer was sloppy.'*" I usually pair it with a concrete example, like the 4 different date pickers I once found in the same product, each shipped to satisfy a different legal or backend constraint. The blame in the room drops by half.

*"The output of this exercise is a list of decisions to make, not a list of components to delete."* This one does most of the work. It reframes the inventory from a cleaning exercise into a governance exercise.

It tells PMs they'll be asked to choose, engineers they'll be asked to deprecate on a timeline, and designers that "consolidate" isn't the same as "delete." Some duplicates will survive the audit, because the cost of removing them is higher than the cost of keeping them.

## What I've learned to do differently

I don't inventory alone anymore. The wall of components is only meaningful when the team that built it is in the room reacting to it, because their faces tell you which components are politically expensive before anyone speaks.

I've also stopped sorting by appearance. Two visually identical buttons can do completely different things, and two visually different buttons can do the same thing. Sort by intent, and the duplicates appear in a much more honest place.

And I've made peace with the fact that some duplicates are correct. A public service for citizens and an internal back-office for operators may need 2 different "primary buttons," even when the brand says otherwise. The inventory's job is to surface the divergence, not to flatten it.

---

An interface inventory is not a tidying exercise. It's a snapshot of every shortcut, every deadline, every org-chart fight, and every quiet act of design heroism that produced the product you have today.

If you're honest about that, the inventory becomes useful. If you're not, you get a beautiful Figma board, a few rationalized components, and the same problem 18 months later.

Either way, the wall doesn't lie. You just have to be willing to read it.