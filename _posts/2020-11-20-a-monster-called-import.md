---
layout: post
title: A monster called @import
---

Third-party libraries and frameworks are widely used today often without thinking about potential security issues. This is the case of `@import` directive in CSS. To be honest, before working on this, I didn’t even know that you can import CSS within CSS. I thought `@import` can only be used for web fonts. 

![browser support for @import rule](/img/posts/import/import-support.png "Browser support for @import")

The W3C definition and usage specifies:
1. The @import rule allows you to import a style sheet into another style sheet.
2. The @import rule must be at the top of the document (but after any @charset declaration).
3. The @import rule also supports media queries, so you can allow the import to be media-dependent.

So by doing @import unsafe **third-party can add dynamic imports**. Let's take the example of:

`@import url(“./app.css”);`

So an hacker can easily add bad logic to a separate CSS file on their own server and reference it. One day they can change the contents of the corrupted file on their server, and steal the information of the users for a while, and they can remove the logic again, and no one will know anything.

## So what can be done?
the first thing to say is that we need to be cautious using `@import` in your production code. It is impossible to avoid using third-parties completely. However, It is **better to self-host such assets**.

A good solution could be:
1. Self-host all assets (or use known cdns)
2. Make sure that no CSS is being imported in the distribution
3. Add Content Security Policy (CSP) meta tag to yout HTML file.

Another important note is that even if there is one instance of @import from a shady server, (and supposedly it includes some important CSS classes that you need in your project), then you would have to make sure that you only allow that single file and no other endpoints from that server. 