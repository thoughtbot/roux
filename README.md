# Roux

Scaffold projects efficiently with a base set of CSS variables, default styles, and structure. You may have used [Bitters](https://github.com/thoughtbot/bitters) in the past -- move on over to a fully native setup with Roux.

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

## Demo

A WIP demo of the styles in action with HTML [lives in Codepen right now](https://codepen.io/enatario/pen/LEppZLZ).

## Using Roux

### Setup and structure

You can use the folder and file naming structure provided or your own. Just make sure you're importing the correct files in `app.css`.

### Compilation

This project uses [lightning CSS](https://lightningcss.dev/) to minify and compile the CSS into one file. [There are lots of options for CSS compiliation](https://www.alwaystwisted.com/articles/UnSassing-my-CSS-CSS-imports), depending on your project setup. If you're using [Dart Sass](https://sass-lang.com/dart-sass/), you'll need to use `@use` instead of `@import` in your main `app.css` file (you'll also need to switch your file types from `css` to `scss`).

### Base

Base styles are meant to be more globally applied in your project. Generally (with a few exceptions like buttons), the styles target HTML elements and not class names.

### Variables

This is where your custom properties live. There's some basic setup for colors, spacing, type size, etc. Go in and edit this for your project's needs. Colors may be the only one you need to edit since the other properties are fairly agnostic, but you can use the same kind of structure with "primitives" like `--color--green-100` and semantic naming like `--color--primary-base`.

### Reset

The [reset](src/css/reset) in this uses [Normalize](https://github.com/necolas/normalize.css).
