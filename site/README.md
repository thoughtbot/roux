# Roux Component Library Site

## Development

### Install Dependencies

Please ensure you have nodejs installed on your machine.

```
npm install
```

### Run the local development server

This will ensure the output `_site` directory is clean before building the project.

```
npm run dev
```

Then visit http://localhost:9090/

## Component previews in Markdown

Use the `::preview` directive to embed component previews:

```markdown
::preview{file=badges/basic.html title="Various Badges" id=example_basic}::
```

### Parameters

- `file` (required): Path to the HTML example file relative to `site/_includes/partials/examples/`
- `title` (optional): Title for the preview iframe (defaults to "Preview")
- `id` (optional): Unique ID for the preview tabs (auto-generated if not provided)
