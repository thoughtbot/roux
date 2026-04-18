---
title: Page Header
description: The page header contains top-level branding and navigation.
permalink: /component-library/page-header.html
---

## Considerations

We use the `<header>` element to wrap content, which provides a "banner" role to assistive technologies. Only use one per page. You can give the header a more descriptive name with the `aria-label` attribute, which will be announced by assistive technologies. But generally this is not necessary.

It's important to include a "skip navigation" link so that keyboard and assistive technology users can jump to the main page content without having to tab through all the header links. This is usually hidden and only becomes visible when focused using the keyboard.

If a logo is included, be sure to give it appropriate alt text. Logo SVGs should include a descriptive `<title>` element.

Navigation must use a `<nav>` element which provides the "navigation" role to assistive technologies. Give it an aria-label like "main menu" to differentiate it from other navs like the footer menu.

## Examples

### Page Header with Navigation and Skip Navigation Link

::preview{file="page-header/nav.html" title="Page Header with Navigation and Skip Navigation Link" id="example_nav"}::
