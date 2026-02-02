---
permalink: /
layout: layouts/base.njk
---

# Roux Components

Use Roux CSS with ready-to-use components to build your project.

Much like Roux CSS, these components are meant to be a baseline for you to build on top of, so feel free to adjust as needed.

Much of these components consider semantic HTML and accessibility.

## Components
<ul>
  {%- for component in collections.component %}
    <li><a href="{{ component.url | url }}">{{ component.data.title | default(component.fileSlug) }}</a>
    {% if component.data.description %}
      <p>{{ component.data.description }}</p>
    {% endif %}
    </li>
  {%- endfor %}
</ul>
