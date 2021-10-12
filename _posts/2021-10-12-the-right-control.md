---
layout: post
title: "The Right Control"
sitemap:
  priority: 0.95
---

Forms design is one of the **most difficult tasks** every designer could face to. Fields alignment, errors handling and choosing the right control are the trickier part of the work. In particular, dealing with radio buttons.

Let's see some cases where using an alternative to them works better.

## 1. Recommend a single best option
![List of multiple options](/img/posts/right-control/single-option.png "A list of multiple options")
The most frequent case. Instead of a list of radio buttons **use a combo box** (or dropdown) to display that best option as the default:

![Dropdown control](/img/posts/right-control/best-option.png "Use a combo box to display the best option")

Use radio buttons when **users need to see all options** before they make a selection. Unless all options deserve equal attention, **consider using other controls**

## 2. Only Two Possible Options
![Two possible options](/img/posts/right-control/two-options.png "Choose between two options")

If there are only two possible options that can be expressed clearly as a single binary choice, such as on/off or yes/no, combine them into a single [check box](https://docs.microsoft.com/en-us/windows/apps/design/controls/checkbox) or [toggle switch](https://docs.microsoft.com/en-us/windows/apps/design/controls/toggles)  control. For example, use a single check box for “I agree” instead of two radio buttons for “I agree” and “I don’t agree.”

![Use checkbox for binary options](/img/posts/right-control/binary-option.png "Use a checkbox for binary options")


## 3. Multiple Options
When users can select multiple options, use checkboxes

![A list of multiple options](/img/posts/right-control/multiple-options.png "A list of multiple options")

If there are more than eight options, use a  combo box together with checkboxes.

![Dynamic combo box with multiple choices](/img/posts/right-control/multiple-checkboxes.png "Dynamic combo box with multiple choices")

When users’ options lie within a range of values (for example, *10, 20, 30, … 100*), use a  [slider](https://docs.microsoft.com/en-us/windows/apps/design/controls/slider)  control.

## Recommendations
  1. Make sure that the purpose and current state of a set of radio buttons is explicit.
  2. Limit the radio button’s text label to a single line.
  3. If the text label is dynamic, consider how the button will automatically resize and what will happen to any visuals around it.
  4. Don’t put two options groups side by side: it can be difficult for users to determine which buttons belong to which group.