---
layout: post
title: Dark Mode with Sass and CSS variables
description: How to implement dark mode on a website using Sass and CSS variables 
---

Implementing dark mode with Sass is hard because it is a preprocessor language. Any changes implies a new generating process and a page refresh. Therefore it is impossible to switch from light to dark - or the way around - in real time.

The CSS variables instead are accessible and can be changed dynamically at any time. 

Why not take advantage of potential of the two languages ​​together?

## Step 1 - Create colors variables in Sass

Declare the Sass variables dedicated to colors:

```sass
$color-black: rgb(0,0,0);
$color-white: rgb(255,255,255);
$color-gray-light: rgba($color-white, .15);
$color-gray-dark: rgba($color-black, .15);
```

Generally I use dedicated files to store project variables like _settings.scss or _design-tokens.scss depending on project complexity. 

## Step 2 - Create element-scoped CSS variables
I declare the CSS variables that will be affected by theme switch, using element-scoped naming:

```sass
:root {
  --color-page-background: #{$color-white};
  --color-text: #{$color-black};
}
```

Pay attention to use escaping Sass syntax `#{$variable}` otherwise the code is not compiled.

## Step 3 - Create basic CSS styles
I declare the two background-color and color properties on the `<body>` using the dedicated CSS variables:

```css
body {
  background-color: var(--color-page-background);
  color: var(--color-text);
}
```

## Step 4 - Add dark mode variables change 
Through the use of a `.dark` class to be added to the `<body>` I change the value of the CSS variables by inverting the Sass variables:

```sass
.dark {
  --color-page-background: #{$color-black};
  --color-text: #{$color-white};
}
```

You can also decide to use data-attributes if you prefer such as `data-theme="dark"`. The decision is up to you and the coding conventions defined with your team.

## A single style.scss file

If you use a single `style.scss` you could import setting variables first using Sass partials. Then put dark mode at the end of the file.
```sass
// Settings
@import 'setting/tokens' // Sass variables
@import 'settings/global'; // CSS variables

// other CSS stuff here

// Dark mode
@import 'trumps/dark'; // CSS variables for dark mode
```

Remind to use CSS variables for all those components you want to control with dark mode.

## Benefits
Following this way, we can **manage layout changes** foreseen by the light/dark switch with few lines of code, **using Sass partials for code modularity** without having to create dedicated dark theme files or introduce complex logic in Sass. 

Try this [demo con CodePen](https://codepen.io/zetareticoli/pen/MROMZE)