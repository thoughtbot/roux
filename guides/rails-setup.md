# Setting Up Roux with Rails

Rails 8 uses [Propshaft] by default, which does not support CSS `@import` directives. Even in setups that do support it, the raw `@import` approach tells the browser to load each file as a separate network request, which hurts performance. A CSS bundler compiles all your imports into a single file, solving both problems.

The steps below use [cssbundling-rails] with PostCSS. You're free to use any bundler you prefer.

> **Tip:** Starting a new app? `rails new myapp --css postcss` handles most of this for you. Just run Roux's `init` command and move the files into place.

## Using the script

You can use this script two ways:

**Copy and paste** the commands directly into your terminal, skipping any steps you've already completed.

**Or run it as a shell script:**

1. Create a file called `roux-on-rails-setup.sh` and paste the contents in
2. Make it executable: `chmod +x roux-on-rails-setup.sh`
3. Run it: `./roux-on-rails-setup.sh`
4. Delete the file when done

The script checks whether each step has already been done before running, so it's safe to run on a partially configured project.

```bash
#!/usr/bin/env bash
set -e

# Copy Roux's CSS files
npx github:thoughtbot/roux init

# Add cssbundling-rails gem if not already present
grep -q "cssbundling-rails" Gemfile || bundle add cssbundling-rails

# Install yarn if not already available
command -v yarn >/dev/null 2>&1 || npm install --global yarn

# Run PostCSS install if not already configured
[ -f postcss.config.js ] || bin/rails css:install:postcss

# Copy all Roux files into Rails' stylesheet directory, then rename app.css
# to the PostCSS entry point, overwriting the scaffolded default
cp -r css/. app/assets/stylesheets/
mv app/assets/stylesheets/app.css app/assets/stylesheets/application.postcss.css

if [ -f app/assets/stylesheets/application.css ]; then
  echo ""
  echo "Found app/assets/stylesheets/application.css."
  echo "On a brand new Rails app this file is safe to delete."
  echo "If you have existing styles in it, you should port them to Roux's files manually first."
  read -r -p "Delete application.css? [y/N] " response
  if [[ "$response" =~ ^[Yy]$ ]]; then
    rm app/assets/stylesheets/application.css
  else
    echo "Skipping. You'll need to manually remove or update application.css before your styles will compile correctly."
  fi
fi

# Clean up
rm -rf css/
```

[cssbundling-rails]: https://github.com/rails/cssbundling-rails
[Propshaft]: https://github.com/rails/propshaft
