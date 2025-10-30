# Roux

Scaffold projects efficiently with a base set of CSS variables, default styles, and structure. You may have used [Bitters] in the past -- move on over to a fully native setup with Roux.

## Why Roux?

This project is meant as a guide to build up your own CSS architecture. This isn't a UI library, style guide, or a framework like Tailwind. This is to help you (as a designer, developer, anyone) feel empowered to set up your very own styles successfully.

### Take what you need

You can cherry pick styles and pull them into your project, just use it for setup inspiration, or you can use the whole thing.

## Installation

Installation is very hands-off:

* Copy and paste [from the source code](src/css), OR
* Clone this project: `https://github.com/thoughtbot/roux`.

## To compile

* `npm i`
* `npm run build` (will output into a `dist` folder)

This project uses [lightning CSS] to minify and compile the CSS into one file. [There are lots of options for CSS compiliation](https://www.alwaystwisted.com/articles/UnSassing-my-CSS-CSS-imports), depending on your project setup and your own preferences. Use whatever you like to compile all the CSS into one file. If you're using [Dart Sass](https://sass-lang.com/dart-sass/), you'll need to use `@use` instead of `@import` in your main `app.css` file (you'll also need to switch your file types from `css` to `scss`).

**Compilation is purely to show you what the final file might be. You don't need it to use Roux.**

## Demo

A WIP demo of the styles in action with HTML [lives in Codepen right now][codepen].

## Using Roux

### How do I start?

Roux is a guidance tool so you feel more confident about setting up your own CSS styles. The opinions laid out here are to provide a solid baseline for you to create and riff on your own styling and structure.

Everything is imported into [`app.css`](src/css/app.css). Which should be [compiled into one CSS file with whatever compilation method you choose](#to-compile).

1. `reset/_normalize.css` comes first in our imports as that overrides some of our browser defaults. We're working on top of the reset. You can add in any more browser resets into that folder and import it.

[More on reset](#reset)

2. `base/_variables.css` is the outlier of our base files as it stores all of our [custom properties]. This comes before all of the other base files since it's a dependency. You don't have to change any of these values if you don't want to. However, you'll likely want to at least adjust the colors.

[More on variables](#variables)

3. The rest of the base files make use of many of the custom properties and are not dependent on each other. They're currently in ABC order.

[More on base files](#base)

4. The `components` folder is empty. This is where you'll put your component-based styles (e.g. `components/_card.css`). Ensure the import list is in ABC order for readability.

5. Utilities are last! Right now there's only one utility. Add in any other global utilities you might have that can be applied as a class. You can prepend them with `.u-[utility-name]` and give them their own CSS file.

[More on utilities](#utilities)

### Base

Base styles are meant to be more globally applied in your project. Generally (with a few exceptions like buttons), the styles target HTML elements and not class names.

#### Animation

Any global animations can go here. Roux's only animation defines smooth scrolling behavior, only if a user hasn't set their motion preference. If a user has reduced motion set on their machine, they should not experience smooth scrolling.

#### Buttons

Roux uses a classname for a "button" style since it can be applied to both `button` elements and `a` elements that want to appear as a button. We've defined a few variants (primary and secondary) to work from. When applying it to an element, use both `button` and `button--{variant}`. [See the demo codepen][codepen] for structuring. For example:

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

#### Disclosures

Basic styling for the `details` and `summary` elements with a custom details marker caret.

#### Forms

Most form styling relies on how you structure the HTML. In Roux's styling, you should be nesting an input within a label. [See the demo codepen][codepen] for structuring. For example:

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

#### Lists

Removes list styling (margin, padding, list style) from ordered and unordered lists if there is a class applied. If no class is applied, `ol`s and `ul`s will take on the default browser style. Oftentimes you may find yourself creating a list of components that are highly styled. Semantically, it might make sense to put them in an ordered or unordered list, but you'd have to remove those default styles -- thus this opinion.

This also includes some typographic and spacing opinions for definition lists.

#### Media

Defines pictures, videos, etc. as block elements that should size responsively with your container. Uses `:where` so you can override specific instances later if needed.

#### Modal

Default setup and some base styles for `dialog` elements. This includes some transition declarations as well as `::backdrop` styling.

The `.slide-in` class can be added for a smooth slide-from-bottom transition when opening a modal (and a slide out on close). [See the codepen demo][codepen] for setup in HTML and Javascript.

#### Tables

Rounded border and striped row styling for tables. This also includes classes to make an overflow scroll table for data sets that are wider than the viewport. [See the codepen demo for structure][codepen].

#### Typography

A fairly unopinionated typographical setup. This isn't a type scale, but some basic defaults such as ensuring headings are bolded and using a pretty text wrap on `h1`s. This also leverages the base typographic custom properties in `body`. You can use the `--font-size--[variant]` custom properties in `_variables.css` to be more specific about type size.

#### Variables

This is where your custom properties live. There's some basic setup for colors, spacing, type size, etc. Go in and edit this for your project's needs. Colors may be the only one you need to edit since the other properties are fairly agnostic.

You can change the primitive colors (e.g. `--color--blue-100`) to your project colors (and names). And then change out where they are in the semantic-ly named colors (e.g. `--color--primary-base: var(--color--blue-500)`). I'd recommend you still use the same pattern of defining primitives with their ranges (`blue-500`, `blue-900`, etc.).

You also might want to follow the same naming conventions, such as `--color--[colorname]`, `--font-size--[size]`, or `--space--[size]`. This keeps variable names predictable throughout the project. You can extend this naming pattern to any other properties you'd like to add to the `:root`.

Another fun thing you can add to in `:root` is defining [dark mode (or light mode) styles](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) with the same conventions. For example:

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

### Components

This folder is empty! But this is where you'd put any component-based CSS files.

### Reset

The [reset](src/css/reset) in this uses [Normalize].

### Utilities

This holds an utility-based helpers that can be used globally. The only utility present is `.hide-visually` which will hide an element visually but still be accessible to a screen reader. It comes with a companion class, `.u-hide-visually--focus-unhide` which will show an element if focused (by a keyboard for example).


[bitters]: https://github.com/thoughtbot/bitters
[codepen]: https://codepen.io/enatario/pen/LEppZLZ
[custom properties]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
[lightning CSS]: https://lightningcss.dev/
[normalize]: https://github.com/necolas/normalize.css 
