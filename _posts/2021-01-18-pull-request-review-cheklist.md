---
layout: post
title: " My Pull Request Review Checklist"
sitemap:
  priority: 0.95
---

Here’s my pull request reviewer checklist. I use it mainly to evaluate  HTML and CSS code. Without a code review checklist, it’s too easy to miss whether it is doing perfectly or not. 

## Checklist
- [ ]Syntax follows the team/project front-end guidelines
- [ ]Code is modular — *don’t duplicate existing classes, variables, etc*
- [ ]Commented the code, particularly in hard-to-understand areas
- [ ]Updated the documentation

These reminders appear as checklist items in the PR template on GitHub. However, not all items should be checked. 

## Pull request template
Here’s the full template I use for pull requests:

```markdown
# Pull Request

## Description

Include a summary of the change and what issue was fixed. Please also include the motivation and context in which you worked. List all dependencies required for this change where necessary.

### Related issues

Indicate all the issues related to the pull request, using the prefix "Fixes" or "Resolves" according to the type of issue (fixes for bugs, resolves for features or improvements).

- Fixes #[issue_number] 
- Resolves #[issue]

## Changes Type

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] Improvement (changes to existing functionality or multiple functionalities)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

## Tests

Describe the tests you ran to verify your changes. Provide instructions so they can be reproduced. Please list all relevant details for test setup

- [ ] Test A
- [ ] Test B

**Test Configuration**:
* OS:
* Devices:
* Browser:

## Checklist - for reviewers
- [ ] Code follows the team / project guidelines
- [ ] Code is modular — *don’t duplicate existing classes, variables, etc*
- [ ] Commented the code, particularly in hard-to-understand areas
- [ ] Updated the documentation

```
Feel free to copy and use it in your projects.

## Template location
You can place a single `PULL_REQUEST_TEMPLATE.md` in one of the following locations to define a default template for all PRs:
* `PULL_REQUEST_TEMPLATE.md`in repository’s root
* `.github/PULL_REQUEST_TEMPLATE.md`
* `docs/PULL_REQUEST_TEMPLATE.md`


## Conclusion

An effective Pull Request (PR) process can ship features faster and with higher-quality code. The key to an effective PR process for startups is to keep items small and decide on a lightweight guideline for describing what the PR introduces.