---
title: Search
description: A free-text entry component for finding or filtering content.
permalink: /component-library/search.html
---

## Considerations

The search component is wrapped in a `<search>` element which defines a `search` landmark for assistive tech. Search inputs should also be wrapped in a `<form>`, even if submitted via JavaScript. Give the `<search>` commponent a label with `aria-label` or `aria-labelledby` to distinguish different types of search components (like full-site search vs filtering a table).

As tempting as it may be, don't omit the button or label, and don't use placeholder text as the label. It's important to provide clear labels and controls for all users, but especially for assistive tech users.

An input with `type="search"` allows browsers to provide search UI or change keyboard behavior on mobile devices. The input should usually have a `required` attribute to prevent empty searches.

Since most searches are freeform, autocomplete, autocorrect, and spellcheck should be turned off to avoid trying to "fix" the query. (`autocapitalize="off" autocorrect="off" spellcheck="false"`)

## Examples

### Basic Search

This example includes a basic search form with a label, input, and submit button. Since the button contains both an icon and text, the icon is hidden from assistive technology using `aria-hidden="true"` so that it is not announced.

::preview{file="search/basic.html" title="Basic Search" id="example_basic"}::
