---
permalink: /
layout: layouts/base.njk
---

# Roux Components

Extend [Roux CSS](https://github.com/thoughtbot/roux) with ready-to-use components to build your project.

Much like Roux CSS, these components are meant as a baseline for you to build on top of, so feel free to adjust as needed. They're flexible and extendable, but opinionated about what matters.

All components are accessible and semantic by default.

Find the code in [the Roux repo on GitHub](https://github.com/thoughtbot/roux).

## Getting Started

To use Roux Components in your project:

1. **Copy the component CSS** from the Roux GitHub repo
2. **Copy the component HTML** from the examples on this site
3. **Customize both** to make them your own

### Example: Using the Page Footer Component

Here's how you might use the [Page Footer component](/component-library/page-footer.html):

#### Step 1: Copy the component CSS

Copy the styles from [`src/css/components/_page-footer.css`](https://github.com/thoughtbot/roux/blob/main/src/css/components/_page-footer.css) into your codebase. Don't forget to import them into your `app.css`:

```diff
/* app.css */

+ @import "components/_page-footer.css";
```

#### Step 2: Copy the component HTML

Copy the [page footer example](/component-library/page-footer.html#example_nav) into your site's HTML.

#### Step 3: Customize it!

Maybe you don't need a copyright on your site:

```diff
/* _page-footer.css */

.page-footer {
  display: grid;
  grid-template-areas:
-   "copyright"
    "nav";
  grid-template-columns: 1fr;
  …
}
```

```diff
<!-- footer.html.erb -->

<footer class="page-footer">
- <p class="page-copyright">&copy; 2026 thoughtbot, inc.</p>

  <nav aria-label="Footer menu" class="footer-nav">
    <ul class="page-nav">
      <li>
-       <a href="#">Link 1</a>
+       <a href="/about">About</a>
      </li>
      <li>
-       <a href="#">Link 2</a>
+       <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</footer>
```

## Components

<ul>
  {%- for component in collections.component -%}
    <li><a href="{{ component.url | url }}">{{ component.data.title | default(component.fileSlug) }}</a>
    {%- if component.data.description -%}
      <p>{{ component.data.description }}</p>
    {% endif -%}
    </li>
  {%- endfor -%}
</ul>

## Contributing

[Bug reports](https://github.com/thoughtbot/roux/issues/new?template=bug_report.md) and [pull requests](https://github.com/thoughtbot/roux/pulls) are welcome on GitHub at https://github.com/thoughtbot/roux.

Please create a [new discussion](https://github.com/thoughtbot/roux/discussions/new?category=ideas) if you want to share ideas for new features.

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/thoughtbot/roux/blob/main/CODE_OF_CONDUCT.md).

## License

Open source templates are Copyright (c) thoughtbot, inc. It contains free software that may be redistributed under the terms specified in the [LICENSE](https://github.com/thoughtbot/roux/blob/main/LICENSE) file.

## Code of Conduct

Everyone interacting in Roux's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/thoughtbot/roux/blob/main/CODE_OF_CONDUCT.md).

## About thoughtbot

[![thoughtbot](https://thoughtbot.com/thoughtbot-logo-for-readmes.svg)](https://thoughtbot.com)

This repo is maintained and funded by thoughtbot, inc. The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software! See [our other projects.](https://thoughtbot.com/community?utm_source=github) We are [available for hire.](https://thoughtbot.com/hire-us?utm_source=github)
