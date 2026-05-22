---
title: Table
description: Tables present structured data that needs clear relationships between rows and columns.
permalink: /component-library/table.html
---

## Considerations

Use semantic row and cell elements (`<thead>`, `<tbody>`, `<tfoot>`, `<th>`) so assistive technologies can interpret the table correctly. Add a `scope` attribute to cells that label the row or column. Usually this is `<th scope="col">` for column headers and `<th scope="row">` for row headers. `<tfoot>` is often used to indicate a summary or total.

When possible, use a `<caption>` element to describe the table. This must be the first child of the `<table>` element. It gives the table an accessible name.

## Examples

### Basic Table

::preview{file="tables/basic.html" id="example_basic"}::

### Striped Table

This example uses `.table--striped` for alternating row backgrounds that improve readability for large datasets.

::preview{file="tables/striped.html" id="example_striped"}::

### Overflow Scroll

Wrapping a table in `.table-outer-wrapper` and `.table-inner-wrapper` allows tables to scroll horizontally on smaller viewports, ensuring content remains accessible without breaking the layout.

::preview{file="tables/overflow.html" id="example_overflow" tall="true"}::
