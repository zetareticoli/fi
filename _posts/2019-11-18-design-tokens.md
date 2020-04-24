---
layout: post

title: Design tokens documentation for front-end dev
---

Design tokens are the essential elements of an interface. Salesforce calls them the Single Source of Truth to be used for all their products. In the Atomic Design methodology they are called atoms, or the building blocks at the base of more complex elements such as molecules and organisms.

The documentation of the tokens must follow the creative design phase at the same time as one serves the other. During the course I hold on Design Systems, doubts often arise on this point because people ask me: “I first design all the tokens / atoms and then I dedicate myself to the more complex elements or vice versa? Which ones come first? ".

In my experience I can say that the two phases go on together. The creative process is not linear by definition. We experiment with ideas and solutions and at the same time document the points that help us solve new problems with existing solutions.

### Why documentation is key
1. They are used by the designer to design a coherent and consistent UI;
2. They are used by the dev front-end to build layouts in HTML and CSS, respecting the design;
3. They are the reference point for all the stakeholders of a project when design decisions are made;


## Color tokens
It will not be a surprise if I tell you that it is essential to start defining the color tokens. The amount of tokens we need is closely related to the complexity of the interface we are designing.

### 1. Set a colors palette
![color tokens](/img/color-tokens.jpg "Color tokens")

The first thing to do, rather obvious, will be to define a colors palette. This in fact tells us how many colors I want to use in design. But what he doesn't tell us is how to use these colors.

### 2. Interactive tokens
These are the tokebs dedicated to interactive states of the elements of an interface, such as hover, active, focus and disabled. Even in their case the same rules that we saw before apply, that is, we can use the same color as many times as we need.

![interactive tokens](/img/interactive-tokens.jpg "Interactive tokens")
