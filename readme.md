> Note: This plugin is designed for use via composer in Totara 20+ only. See other branches
> for older versions of Totara and other installation methods.

# Totara TXP Example Theme
This repository contains an example theme for illustrative purposes only.
It should not be installed and used, but referenced and copied in creating your own theme.

## Implementation
The example implements both the `/server/theme/` and `/client/component/`
portions of the custom Theme. The `/client/component/` portion includes examples
of Tui (Vue) component overrides at a page and smaller component level, as well as CSS
variable and SCSS overrides and extensions. The `/server/theme/` portion
includes the PHP config and an example of Mustache template overriding used
throughout Totara Suite.

## Licensing
The `/server/theme/` portion is licensed under GPLv3, while the
`/client/component/` portion has a proprietary license - please see relevant
file headers for detail.

## Installation

To install via composer on a Totara 20+ codebase, you would run the command:

```bash
composer require totara/theme-example
```

However, this plugin is designed for illustrative purposes and should not be installed and used,
but referenced and copied in creating your own theme.

To do that you would:

- Create a new repository based on this one
- Rename all references of `example` to `yourthemename` in directory names,
  file names and file contents, for example method and variable names.
- Update the `composer.json` file to reflect your partner and theme name and provide other details.
- Publish the plugin to the plugin marketplace or other packagist-compatible repository.
- `composer require` your new plugin in your Totara codebase.

## Documentation
Documentation is available on the [Totara public developer documentation](https://help.totaralearning.com/display/DEV/Tui+front-end+framework)
website, covering architectural goals, technology stack and more detail on
custom themes. Improvements and feedback are welcome, both for this example and
the public developer documentation, please submit your feedback to the Totara
Support team.
