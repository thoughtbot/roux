---
permalink: /
layout: layouts/base.njk
---

# Roux

## A boilerplate of native CSS architecture, styling, and HTML to kickstart your project.

Roux gives you an organized foundation of CSS files, variables, base styles, and simple HTML components so you can start building immediately instead of setting everything up from scratch. It's **a structured starting point for writing your own CSS**—not a framework like Tailwind. Think of it like a GitHub template repo, but for your stylesheets.

You can cherry-pick what you need, use it for inspiration, or adopt the whole system—whatever works for your project. It's flexible and extendable, but opinionated about what matters. All HTML components aim to be accessible and semantic by default.

You may have used [Bitters] and [Refills] in the past—move on over to a fully native setup with Roux.

Find the code in [the Roux repo on GitHub][github].

## Getting Started

Checkout the [GitHub README][github] for all the details on how to use Roux. Then come back here to grab the HTML for components.

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

<!-- START /templates/footer.md -->

## About thoughtbot

[![thoughtbot](https://thoughtbot.com/thoughtbot-logo-for-readmes.svg)](https://thoughtbot.com)

This repo is maintained and funded by thoughtbot, inc. The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community].
We are [available for hire][hire].

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com/hire-us?utm_source=github

<!-- END /templates/footer.md -->

[github]: https://github.com/thoughtbot/roux
[bitters]: https://github.com/thoughtbot/bitters
[refills]: https://github.com/thoughtbot/refills