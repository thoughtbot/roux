---
title: Page Footer
description: The page footer contains copyright information and secondary navigation.
permalink: /component-library/page-footer.html
---

## Considerations

We use the `<footer>` element to wrap content, which provides a "contentinfo" role to assistive technologies. Only use one per page.

As in the page header, navigation must use a `<nav>` element which provides the "navigation" role to assistive technologies. Give it an aria-label like "Footer menu" to differentiate it from other navs on the page.

## Examples

### Page Footer with Navigation

::preview{file="page-footer/nav.html" title="Page Footer with Navigation" id="example_nav"}::
