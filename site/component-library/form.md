---
title: Form
description: Forms collect structured user input and must be accessible, predictable, and easy to navigate.
permalink: /component-library/form.html
---

## Considerations

Forms must use semantic HTML elements—`<form>`, `<fieldset>`, `<legend>`, `<label>` to convey relationships and groupings clearly. Group related inputs (especially checkboxes and radio buttons) inside a `<fieldset>` with a `<legend>` describing the relationship.

Every input must be associated with a label. In Roux we default to wrapping inputs inside labels. this tends to provide a larger click/tap taret. If you prefer to keep labels and inputs side-by-side, make sure every label refers to its input with a `for` attribute. Don't use the `placeholder` attribute as a label.

```html
<label>Full name <input name="full-name" /></label>
<!-- or -->
<label for="full-name">Full name</label>
<input name="full-name" id="full-name" />
```

Use proper input types (`email`, `date`, `checkbox`, `radio`, `select`, `textarea`, `range`) instead of using `text` for everyting. These provide better validation and autocomplete, and help pull up the right mobile keyboard. Attributes like `required`, `autocomplete`, and `spellcheck` enhance usability.

## Examples

### Basic Form

::preview{file="forms/basic.html" id="example_form" tall="true"}::
