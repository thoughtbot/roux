---
title: Alert
description: Alerts provide timely feedback or status updates to users. They communicate information, success states, and errors in a consistent, accessible way.
permalink: /component-library/alert.html
---


{% from "partials/_component-preview.njk" import preview %}


# Alert

{% if description %}
  {{ description }}
{% endif %}

## Considerations

We use a simple `<div class="alert">` structure with modifier classes (e.g., `alert--success`, `alert--danger`) so visual styling is predictable and easy to extend. Each alert includes an appropriate ARIA live-region role:

- `role="status"` for informational or success messages that should be announced politely, [which is implicit when set](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role).
- `role="alert"` for urgent or error messages that require immediate attention and announced assertively, [which is implicit when set](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

Using semantic roles instead of JavaScript-driven announcements ensures reliability across assistive technologies, keeps the component lightweight, and aligns with accessibility best practices.

## Examples

<h3 id="example_info">Info Alert</h3>
{{ preview(title="Info Alert Example", code=example_info, id="example_info") }}

<h3 id="example_success">Success Alert</h3>
{{ preview(title="Success Alert Example", code=example_success, id="example_success") }}

<h3 id="example_error">Error Alert</h3>
{{ preview(title="Error Alert Example", code=example_error, id="example_error") }}



{% set example_info %}
<div class="alert" role="status"><p>We’ve been trying to reach you about your car’s extended warranty.</p></div>
{% endset %}

{% set example_success %}
<div class="alert alert--success" role="status"><p>We’ve been trying to reach you about your car’s extended warranty.</p></div>
{% endset %}

{% set example_error %}
<div class="alert alert--danger" role="alert"><p>We’ve been trying to reach you about your car’s extended warranty.</p></div>
{% endset %}







<!-- TODO
- no-js fallback for tabs
- ensure that tab ids and aria references are correct and unique
- typescript instead of JS for the tabs logic
- linting & autoformatting
-->