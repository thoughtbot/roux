---
title: Disclosures
description: Disclosures (<details>/<summary>) provide a way to hide and reveal additional content, making pages cleaner while keeping information accessible. They are ideal for FAQs, explanations, or optional details.
permalink: /component-library/disclosures.html
---

## Considerations

Using native `<details>` ensures built-in keyboard accessibility and allows screen readers to announce expandable content automatically. The `<summary>` element serves as the visible trigger, while nested content like `<dl>` or `<p>` holds the details. Grouping multiple disclosures under the same `name` (or similar attribute) can support interactive patterns where only one section is expanded at a time, improving usability without extra JavaScript.

This approach leverages semantic HTML, keeps interactions lightweight, and ensures content remains readable even if styles or scripts fail.

**Variations:**

- Basic Disclosure
- Auto-collapsing disclosures that only open at a time. You can achieve this by giving every `<details>` element you want to group with a `name` attribute of the same value.

## Examples

### Single Disclosure

::preview{file="disclosures/single.html" title="Single Disclosure" id="example_single"}::

### FAQ-style Disclosures

In this example only one disclosure can be open at a time.

::preview{file="disclosures/faq.html" title="FAQ-style Disclosures" id="example_faq"}::
