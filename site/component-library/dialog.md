---
title: Dialog/Modal
description: Modals present focused content that requires the user's attention without navigating away from the page.
permalink: /component-library/dialog.html
---

## Considerations

We use the native `<dialog>` element with `showModal()` to take advantage of built-in accessibility features like focus trapping, inert background behavior, and automatic announcement by assistive technologies.

Data attributes (`data-dialogOpen`, `data-dialogElement`, `data-dialogClose`) are used to keep the JavaScript lightweight and decoupled from styling, making the component easy to reuse. The close button is always included and labeled for screen readers, and clicking outside the dialog closes it for an intuitive, user-friendly experience.

`aria-modal="true"` reinforces the modal's role for assistive technologies, ensuring that users understand they're in a temporary, focused overlay.

Remember to set autofocus to a close button or the first interaction. [According to MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog):

> The `autofocus` attribute should be added to the element the user is expected to interact with immediately upon opening a modal dialog. If no other element involves more immediate interaction, it is recommended to add `autofocus` to the close button inside the dialog, or the dialog itself if the user is expected to click/activate it to dismiss.

## Examples

### Basic Modal

::preview{file="dialogs/basic.html" title="Basic Modal" id="example_basic_modal"}::

### Slide-in Drawer Modal

::preview{file="dialogs/slide-in.html" title="Slide-in Drawer Modal" id="example_slide_in_modal"}::
