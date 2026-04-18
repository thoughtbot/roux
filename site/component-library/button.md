---
title: Button
description: Buttons trigger actions and help users move through tasks.
permalink: /component-library/button.html
---

## Considerations

Our button component uses a base `.button` class with modifier classes like `.button--primary` and `.button--secondary` to provide a clear visual hierarchy and consistent styling.

We use semantic `<button>` elements for actions and `<a>` elements styled as buttons for navigation. This preserves correct browser and assistive-technology behavior—buttons submit forms or trigger in-page interactions, while links take users to new locations.

Remember, when deciding which one to use: [**Links go places. Buttons do things.**](https://www.a11y-collective.com/blog/button-vs-link/)

Disabled states rely on the native `disabled` attribute for true `<button>` elements, ensuring proper accessibility and preventing interaction.

If using a disabled state:

- Consider not disabling on a form or user action and allowing a user to submit and receive error feedback to fix the issue
- Add in _why_ a button is disabled if still using it
- This state can be useful to apply while a form is submitting to prevent multiple submissions.

## Examples

### Various Button Types

::preview{file="buttons/basic.html" title="Buttons Example" id="example_buttons"}::
