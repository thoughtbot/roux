---
title: Pagination
description: Pagination allows the user to navigate through pages of content.
permalink: /component-library/pagination.html
---

## Considerations

Wrap pagination in a `nav` component with a label (using `aria-label` or `aria-labelledby`) so assistive technology can identify it as a navigation landmark.

Indicate the current page both visually, and using `aria-current="page"` for assistive tech.

If possible, show the total number of pages to give users a sense of how much content there is.

When on the first or last page, remove the "next"/"previous" button so users can't proceed further in that direction. The best way is to simply omit the link/button. If the button is important for layout, disable it with `aria-disabled="true"`, remove the `href` attribute, and add `role="link"`. If using a `<button>`, disable it with the `disabled` attribute. [Read more about this technique.](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)

Save the pagination state in the URL so users can bookmark or share links to specific pages, and use the back button to navigate. Next/previous and page number buttons should use `<a>` tags, not `<button>` tags.

## Examples

### Simple nav

::preview{file="pagination/simple.html" title="Simple nav" id="example_simple"}::

### Nav with page gaps and metadata

::preview{file="pagination/fancy.html" title="Nav with page gaps and metadata" id="example_fancy"}::

### Pagy Support

Roux includes styles for the popular [Pagy Ruby gem](https://github.com/ddnexus/pagy). Pagy offers a few types of nav views.

#### Pagy series nav

::preview{file="pagination/pagy-series.html" title="Pagy series nav" id="example_pagy"}::

#### Pagy series nav with limited slots

::preview{file="pagination/pagy-series-limited.html" title="Pagy series nav with limited slots" id="example_pagy_limited"}::

#### Pagy input nav

::preview{file="pagination/pagy-input.html" title="Pagy input nav" id="example_pagy_input"}::
