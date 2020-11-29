# Totara TXP Example Theme
This repository contains an example theme for illustrative purposes only.
It should not be installed and used, but reference and copied in creating your own theme.

## Implementation
The example implements both the `/server/theme/` and `/client/component/`
portions of the custom Theme. The `/client/component/` portion includes examples
of Tui (Vue) component overrides at a page and smaller component level, as well as CSS
variable and SCSS overrides and extensions. The `/server/theme/` portion
includes the PHP config and an example of Mustache template overriding used
throughout Totara Learn.

## Licensing
The `/server/theme/` portion is licensed under GPLv3, while the
`/client/component/` portion has a proprietary license - please see relevant
file headers for detail.

## Installation
Automation can be set up via custom scripts, since there are two locations to
add code to, this example however simply provides the correct directory naming
structure for both `/server/theme/` and `/client/component/` portions.

Steps:
 - Copy the example `/server/theme/example` into the `/server/theme/`
directory within your Totara 13 codebase
 - Copy the example `/client/component/theme_example` into the `/client/component/`
 directory within your Totara codebase.
 - Follow `npm` setup instructions in `/readme.md` within the root directory of
 your Totara 13 codebase

## Documentation
Documentation is available on the [Totara public developer documentation](https://help.totaralearning.com/display/DEV/Tui+front-end+framework)
website, covering architectural goals, technology stack and more dtetail on
custom themes. Improvements and feedback are welcome, both for this example and
the public developer documentation, please submit your feedback to the Totara
Support team.
