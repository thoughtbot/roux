---
title: Alert
description: Alerts provide timely feedback or status updates to users. They communicate information, success states, and errors in a consistent, accessible way.
permalink: /component-library/alert.html
---

## Considerations

We use a simple `<div class="alert">` structure with modifier classes (e.g., `alert--success`, `alert--danger`) so visual styling is predictable and easy to extend. Each alert includes an appropriate ARIA live-region role:

- `role="status"` for informational or success messages that should be announced politely, [which is implicit when set](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role).
- `role="alert"` for urgent or error messages that require immediate attention and announced assertively, [which is implicit when set](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

Using semantic roles instead of JavaScript-driven announcements ensures reliability across assistive technologies, keeps the component lightweight, and aligns with accessibility best practices.

## Examples

### Info, Success, and Error Alerts

::preview{file="alerts/basic.html" title="Info, Success, and Error Alerts" id="example_basic"}::
