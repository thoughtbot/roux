---
title: Forms
description: Forms collect structured user input and must be accessible, predictable, and easy to navigate.
permalink: /component-library/forms.html
---

## Considerations

This form uses semantic HTML elements—`<form>`, `<fieldset>`, `<legend>`, `<label>`, and appropriate input types—to convey relationships and groupings clearly.

- **Fieldsets & Legends:** Group related inputs (e.g., personal info, ice cream preferences) to improve comprehension for all users, including those using assistive technology.
- **Labels & Inputs:** Every input is associated with a `<label>` for accessibility and larger click/tap targets.
- **Input Types & Attributes:** Proper types (`email`, `date`, `checkbox`, `radio`, `select`, `textarea`, `range`) guide browser validation, mobile keyboards, and autocomplete. Attributes like `required`, `autocomplete`, and `spellcheck` enhance usability.
- **Radio Buttons & Checkboxes:** Ensure mutually exclusive or multi-select options are clear, with grouped legends for context.
- **Select & Datalist:** Provide structured choices while maintaining flexibility for user input.
- **Accessibility & Usability:** Semantic structure, focusable elements, and visual cues ensure the form works well for keyboard and screen reader users.

This approach keeps the form **accessible, extensible, and user-friendly** while supporting both simple and advanced interactions.

## Examples

### Basic Form

::preview{file="forms/basic.html" title="Basic Form" id="example_form" tall="true"}::
