---
title: Disclosures
description: Disclosures (<details>/<summary>) provide a way to hide and reveal additional content, making pages cleaner while keeping information accessible. They are ideal for FAQs, explanations, or optional details.
permalink: /component-library/disclosure.html
---

## Considerations

Using native `<details>` ensures built-in keyboard accessibility and allows screen readers to announce expandable content automatically. The `<summary>` element serves as the visible trigger, while nested content like `<dl>` or `<p>` holds the details. Grouping multiple disclosures under the same `name` (or similar attribute) can support interactive patterns where only one section is expanded at a time, improving usability without extra JavaScript.

This approach leverages semantic HTML, keeps interactions lightweight, and ensures content remains readable even if styles or scripts fail.

## Examples

### Single Disclosure

::preview{file="disclosures/single.html" id="example_single"}::

### FAQ-style Disclosures

In this example only one disclosure can be open at a time. Other disclosures are auto-collapsed. You can achieve this by giving every grouped `<details>` element a `name` attribute with the same value.

::preview{file="disclosures/faq.html" id="example_faq"}::
