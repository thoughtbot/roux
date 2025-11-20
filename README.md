# Roux

A boilerplate of pre-defined native CSS architecture and styling to kickstart your project. You may have used [Bitters] in the past—move on over to a fully native setup with Roux.

## What is Roux?

Roux gives you an organized foundation of CSS files, variables, and base styles so you can start building immediately instead of setting everything up from scratch. It's **a structured starting point for writing your own CSS**—not a framework like Tailwind or a UI library with pre-built components. Think of it like a GitHub template repo, but for your stylesheets.

You can cherry-pick what you need, use it for inspiration, or adopt the whole system—whatever works for your project.

## The problem it solves

When you start a new web project, you face a blank CSS file and dozens of decisions:

* How should I organize my styles as the project grows?
* Should I define colors and spacing as variables, or hardcode them?
* Do I need to reset browser defaults?
* How do I structure forms, buttons, and typography consistently?

Without a plan, you may end up with unmaintainable and disorganized CSS files that are not approachable to you or your team. Roux solves this by providing thoughtful defaults and organization patterns that scale with your project.

## When to use Roux

### Use Roux when you:

* Want to write custom CSS (not use a framework like Tailwind or Bootstrap)
* Need a structured starting point instead of a blank stylesheet
* Want consistent design tokens (colors, spacing, fonts) defined upfront as CSS variables
* Are starting a new project or refactoring messy CSS
* Want the flexibility to customize everything to your exact needs

### Don't use Roux if you:

* Prefer utility-first frameworks like Tailwind
* Need pre-built UI components (use a component library instead)
* Already have an established CSS system you're happy with

## What you get

* **Organized file structure:** Separate files for forms, typography, buttons, tables, etc.
* **CSS custom properties:** Colors, spacing, font sizes defined as variables in one place
* **Base element styling:** Sensible defaults for buttons, forms, tables, and more
* **A system to build on:** Not a finished product, but a solid foundation you customize

## See it in action

[View the demo on CodePen][codepen] to see Roux's base styling for forms, buttons, tables, and typography.

## Installation

Installation is very hands-off.

* ```
  npx github:thoughtbot/roux init
  ```
  * This will copy all files from [src/css](src/css) into a `css` folder at the root of your project. Feel free to move or rename depending on your needs, OR
* Copy and paste [from the source code](src/css), OR
* Clone this project: `https://github.com/thoughtbot/roux`.

## Quick start

After installation:

1. **Customize your colors:** Open `css/base/_variables.css` and change the color values to match your project.
2. **Link the main CSS file:** Import or link to `css/app.css` in your HTML.
3. **Start building:** Add your component styles in `css/components/`.
4. **Compile (optional):** Use your preferred CSS compiler to bundle everything into one file
  * This project uses [lightning CSS] to minify and compile the CSS into one file. [There are lots of options for CSS compiliation](https://www.alwaystwisted.com/articles/UnSassing-my-CSS-CSS-imports), depending on your project setup and your own preferences. If you're using [Dart Sass](https://sass-lang.com/dart-sass/), you'll need to use `@use` instead of `@import` in your main `app.css` file (you'll also need to switch your file types from `css` to `scss`).
  * To compile in this repo, run `npm i` then `npm run build` (will output into a `dist` folder).

That's it! You now have an organized CSS foundation to build on.

## How it works

Everything is imported into `app.css`, which you'll compile into one CSS file (or import directly).

### File structure

```text
css/
├── reset/
│   └── _normalize.css          # Browser resets
├── base/
│   ├── _animations.css         # Global animations
│   ├── _buttons.css            # Button styles
│   ├── _disclosures.css        # Details/summary elements
│   ├── _fonts.css              # Font-face declarations
│   ├── _forms.css              # Form styling
│   ├── _lists.css              # List styling
│   ├── _media.css              # Images, videos
│   ├── _modal.css              # Dialog elements
│   ├── _tables.css             # Table styling
│   ├── _typography.css         # Typography defaults
│   └── _variables.css          # CSS custom properties (colors, spacing, fonts)
├── components/
│   └── (your components here)  # Add your own component styles
├── utilities/
│   └── _hide-visually.css      # Helper utilities
└── app.css                     # Imports everything
```

### Import order (in `app.css`)

1. `reset/_normalize.css` comes first in our imports as that overrides some of our browser defaults. We're working on top of the reset. You can add in any more browser resets into that folder and import it. **[More on reset](#reset)**
2. `base/_variables.css` is one of the outliers of our base files as it stores all of our [custom properties]. This comes before all of the other base files since it's a dependency. You don't have to change any of these values if you don't want to. However, you'll likely want to at least adjust the colors. **[More on variables](#variables)**
3. `base/_fonts.css` is the other outlier as files like `_typography.css` may rely on it. It's commented out for now since it needs an actual font file to work and you may want to remove it if importing a font in a different way. **[More on fonts](#fonts)**
4. The rest of the base files make use of many of the custom properties and are not dependent on each other. They're currently in ABC order. **[More on base files](#base)**
5. The `components` folder is empty. This is where you'll put your component-based styles (e.g. `components/_card.css`). Ensure the import list is in ABC order for readability.
6. Utilities are last! Right now there's only one utility. Add in any other global utilities you might have that can be applied as a class. You can prepend them with `.u-[utility-name]` and give them their own CSS file. **[More on utilities](#utilities)**

## Customization guide

### Variables

Open `css/base/_variables.css` to customize your project. This is where all your design tokens live. There's some basic setup for colors, spacing, type size, etc. Go in and edit this for your project's needs. Colors may be the only one you need to edit since the other properties are fairly agnostic.

#### Color system

* Define primitive colors with ranges (e.g., `--color--blue-100` through `--color--blue-900`)
* Map primitives to semantic names (e.g., `--color--primary-base: var(--color--blue-500)`)
* Use semantic names throughout your CSS

#### Tips
* Follow the naming convention: `--property--variant` (e.g., `--color--primary`, `--space--large`, `--font-size--small`).
* Another fun thing you can add to in `:root` is defining [dark mode (or light mode) styles](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) with the same conventions.

#### Example

```css
:root {
  --color--beige-100: #f1f1eb;
  --color--beige-900: #b2b2a7;
  
  --color--blue-100: #57929e;
  --color--blue-900: #164650;
  
  --color--pink-100: #efaf98;

  --color--background-base: var(--color--beige-100);
  --color--text: var(--color--blue-900);
  --color--accent: var(--color--pink-100);
  --color--border: var(--color--beige-900);

  @media (prefers-color-scheme: dark) {
    --color--background-base: var(--color--blue-900);
    --color--text: var(--color--beige-100);
    --color--border: var(--color--blue-100);
  }
}
```

### Fonts

Open `css/base/_fonts.css` to add your custom fonts. This is a dependency file since other base files may need it to render a font. Currently it's commented out since it's all based on your font files you want to use, but the structure is there. You may declare multiple font files in here. The example in there shows a variable font file with a range of weights so you don't have to define each individual weight.

#### Tips

* Generally, `font-display: swap` is a solid default for most fonts so you always fallback to the other fonts defined in your stack while your custom font is loading.
* When you define a font in this file, you'll want to add it to a custom property with a stack in your `_variables.css` file.

#### Example

```css
/* base/_fonts.css */

@font-face {
  font-display: swap;
  font-family: "WorkSans";
  font-style: normal;
  font-weight: 100 900;
  src: url("./fonts/work-sans.woff2") format("woff2");
}

@font-face {
  font-display: swap;
  font-family: "Quincy";
  font-style: normal;
  font-weight: normal;
  src: url("./fonts/quincy.woff2") format("woff2");
}
```

```css
/* base/_variables.css */

:root {
  --font-family--body: "WorkSans", system-ui, Arial, sans-serif;
  --font-family--display: "Quincy", Times, serif;
}
```

```css
/* base/_typography.css */

body {
  font-family: var(--font-family--body);
  font-weight: var(--font-weight--normal);
}

h1,
h2,
h3 {
  font-family: var(--font-family--display);
  font-weight: var(--font-weight--bold);
}
```

### Buttons

Roux uses a classname for a "button" style since it can be applied to both `button` elements and `a` elements that want to appear as a button. We've defined a few variants (primary and secondary) to work from. When applying it to an element, use both `button` and `button--{variant}`. [See the demo codepen][codepen] for structuring.

#### Example

```html
<button
  type="button"
  class="button button--primary"
 >
  A primary button
</button>
<a
  href="#"
  class="button button--secondary"
>
  A secondary button link
</a>
```

### Forms

Most form styling relies on how you structure the HTML. In Roux's styling, you should be nesting an input within a label. [See the demo codepen][codepen] for structuring.

#### Example

```html
<label for="email">
  <span>Your email</span>
  <input
    id="email"
    type="email"
    name="email"
    autocapitalize="off"
    autocorrect="off"
    spellcheck="false"
    required
    autocomplete="email"
    />
</label>
```

```css
label:has(
    input:not([type]),
    select,
    textarea,
    [type="color"],
    [type="date"],
    [type="datetime"],
    [type="datetime-local"],
    [type="email"]
    /* other selectors */
  ) {
  display: flex;
  flex-direction: column;
  gap: var(--space--x-small);
}
```

If you prefer to keep those elements separate, you can adjust the CSS in the forms to use [the next-sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator) (or any other selector of your choice). You'll likely have to make some other declarations or use another element to wrap the `label` and `input`.

```html
<label for="email">
  Your email
</label>
<input
  id="email"
  type="email"
  name="email"
  autocapitalize="off"
  autocorrect="off"
  spellcheck="false"
  required
  autocomplete="email"
/>
```

```css
label + :where(
    input:not([type]),
    select,
    textarea,
    [type="color"],
    [type="date"],
    [type="datetime"],
    [type="datetime-local"],
    [type="email"]
    /* other selectors */
  ) {
  display: flex;
  flex-direction: column;
  gap: var(--space--x-small);
}
```

## Other files explained

### Animation

`base/css/_animation.css`

Any global animations can go here. Roux's only animation defines smooth scrolling behavior, only if a user hasn't set their motion preference. If a user has reduced motion set on their machine, they should not experience smooth scrolling.

### Disclosures

`base/css/_disclosures.css`

Basic styling for the `details` and `summary` elements with a custom details marker caret.

### Lists

`base/css/_lists.css`

Removes list styling (margin, padding, list style) from ordered and unordered lists if there is a class applied. If no class is applied, `ol`s and `ul`s will take on the default browser style. Oftentimes you may find yourself creating a list of components that are highly styled. Semantically, it might make sense to put them in an ordered or unordered list, but you'd have to remove those default styles—thus this opinion.

This also includes some typographic and spacing opinions for definition lists.

### Media

`base/css/_media.css`

Defines pictures, videos, etc. as block elements that should size responsively with your container. Uses `:where` so you can override specific instances later if needed.

### Modal

`base/css/_modal.css`

Default setup and some base styles for `dialog` elements. This includes some transition declarations as well as `::backdrop` styling.

The `.slide-in` class can be added for a smooth slide-from-bottom transition when opening a modal (and a slide out on close). [See the codepen demo][codepen] for setup in HTML and Javascript.

#### Tips

* Use the autofocus attribute on the first interactive element you want to focus to when a modal is open (usually the close modal button).

#### Example

**Default modal**

```html
 <dialog aria-modal="true">
  <button class="button button--plain" type="button" autofocus>Close</button>
  <p>Hello there</p>
</dialog>
```

**Slide in modal**

```html
 <dialog class="slide-in" aria-modal="true">
  <button class="button button--plain" type="button" autofocus>Close</button>
  <p>Hello there</p>
</dialog>
```

### Tables

`base/css/_tables.css`

Rounded border and striped row styling for tables. This also includes classes to make an overflow scroll table for data sets that are wider than the viewport. [See the codepen demo for structure][codepen].

#### Example

**A plain table**

```html
<table>
  <caption>Monthly spending</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
    <tr>
      <td>March</td>
      <td>$30</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$210</td>
    </tr>
  </tfoot>
</table>
```
**A striped table**

```html
<table class="table--striped">
  <caption>Monthly spending</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
    <tr>
      <td>March</td>
      <td>$30</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$210</td>
    </tr>
  </tfoot>
</table>
```

**A striped table with overflow scroll for smaller viewports**

```html
<div class="table-outer-wrapper">
  <div class="table-inner-wrapper">
    <table class="table--striped">
      <caption>Monthly spending with overflow container for smaller viewports</caption>
      <thead>
        <tr>
          <th>Category</th>
          <th>Planned</th>
          <th>Actual</th>
          <th>Difference</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rent/Mortgage</td>
          <td>$1,200</td>
          <td>$1,200</td>
          <td>$0</td>
        </tr>
        <tr>
          <td>Utilities</td>
          <td>$150</td>
          <td>$140</td>
          <td>-$10</td>
        </tr>
        <tr>
          <td>Groceries</td>
          <td>$400</td>
          <td>$420</td>
          <td>+$20</td>
        </tr>
        <tr>
           <td>Transportation</td>
           <td>$100</td>
           <td>$80</td>
           <td>-$20</td>
        </tr>
        <tr>
          <td>Entertainment</td>
          <td>$200</td>
          <td>$220</td>
          <td>+$20</td>
        </tr>
        <tr>
          <td>Miscellaneous</td>
          <td>$100</td>
          <td>$90</td>
          <td>-$10</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

### Typography

`base/css/_typography.css`

A fairly unopinionated typographical setup. This isn't a type scale, but some basic defaults such as ensuring headings are bolded and using a pretty text wrap on `h1`s. This also leverages the base typographic custom properties in `body`. You can use the `--font-size--[variant]` custom properties in `_variables.css` to be more specific about type size.

### Components

This folder is empty! But this is where you'd put any component-based CSS files.

#### Example

```text
components/
├── _card.css
├── _header.css
├── _navigation.css
└── _footer.css
```

### Utilities

This holds utility-based helpers that can be used globally. The only utility present is `.hide-visually` which will hide an element visually but still be accessible to a screen reader. It comes with a companion class, `.u-hide-visually--focus-unhide` which will show an element if focused (by a keyboard for example).

#### Tips

* Add your own utilities following the `.u-[name]` pattern.

## Contributing

[Bug reports](https://github.com/thoughtbot/roux/issues/new?template=bug_report.md) and [pull requests](https://github.com/thoughtbot/roux/pulls) are welcome on GitHub at [https://github.com/thoughtbot/roux](https://github.com/thoughtbot/roux).

Please create a [new discussion](https://github.com/thoughtbot/roux/discussions/new?category=ideas) if you want to share ideas for new features.

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/thoughtbot/roux/blob/main/CODE_OF_CONDUCT.md).

## License

Open source templates are Copyright (c) thoughtbot, inc.
It contains free software that may be redistributed under the terms specified in the [LICENSE](https://github.com/thoughtbot/roux/blob/main/LICENSE) file.

## Code of Conduct

Everyone interacting in Roux's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/thoughtbot/roux/blob/main/CODE_OF_CONDUCT.md).

<!-- START /templates/footer.md -->

## About thoughtbot

![thoughtbot](https://thoughtbot.com/thoughtbot-logo-for-readmes.svg)

This repo is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community].
We are [available for hire][hire].

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com/hire-us?utm_source=github

<!-- END /templates/footer.md -->

[bitters]: https://github.com/thoughtbot/bitters
[codepen]: https://codepen.io/enatario/pen/LEppZLZ
[custom properties]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
[lightning CSS]: https://lightningcss.dev/
[normalize]: https://github.com/necolas/normalize.css 
