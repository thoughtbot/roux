---
title: Loading Indicator
description: Loading indicators show that content is being loaded, processed, or submitted, asking the user to wait.
permalink: /component-library/loading-indicator.html
---

## Considerations

Loaders should use either the `alert` or `status` ARIA roles. Use the ["alert" role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) when the user needs to know immediately when loading finishes: for example, when submitting a form. This role causes assistive technologies to announce all changes in an assertive way, and could be annoying. Use the ["status" role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) when the loading state is doesn't need immediate attention: for example, when loading extra page content.

When loading content, use the `aria-busy="true"` attribute on the content's container. Change it to `false` when loading is complete.

## Examples

### Spinning Loading Indicator

In this example the SVG is hidden from assistive tech with `aria-hidden="true"` because the "loading" text is enough.

::preview{file="loading-indicator/basic.html" id="example_basic"}::
