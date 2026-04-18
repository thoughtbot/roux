---
title: Tables
description: Tables present structured data that needs clear relationships between rows and columns.
permalink: /component-library/tables.html
---

## Considerations

We use semantic HTML elements (`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`) so assistive technologies can interpret the table correctly.

- **Caption:** Provides an accessible title for the table.
- **Headers (`<th>`):** Define columns so screen readers can associate cells with their labels.
- **Footer (`<tfoot>`):** Summarizes or totals data, allowing users to quickly understand aggregates without scanning the entire table.

**Variations:**

1. [**Basic Table**](#example_basic)
2. [**Striped Table**](#example_striped) (`.table--striped`): Alternating row backgrounds improve readability for large datasets.
3. [**Overflow Scroll**](#example_overflow): Wrapping a table in `.table-outer-wrapper` and `.table-inner-wrapper` allows tables to scroll horizontally on smaller viewports, ensuring content remains accessible without breaking the layout.

Using these variations keeps tables readable, accessible, and responsive across devices while maintaining semantic HTML.

## Examples

### Basic Table

::preview{file="tables/basic.html" title="Basic Table" id="example_basic"}::

### Striped Table

::preview{file="tables/striped.html" title="Striped Table" id="example_striped"}::

### Overflow Scroll

::preview{file="tables/overflow.html" title="Overflow Scroll" id="example_overflow"}::
