<?php
/**
 * This file is part of Totara Talent Experience Platform
 *
 * Copyright (C) 2026 onwards Totara Learning Solutions LTD
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @author Dave Wallace <dave.wallace@totara.com>
 * @package theme_example
 */

use core\theme\settings as theme_settings;
use totara_core\output\masthead_logo;
use totara_tui\output\component;

defined('MOODLE_INTERNAL') || die();

require_once($CFG->dirroot . '/totara/core/renderer.php');

class theme_example_renderer extends theme_inspire_renderer {

    /**
     * Render menu.
     *
     * @return string
     */
    public function menu(): string {
        global $SESSION;

        $layout_options = $this->output->page->layout_options;
        if (isset($layout_options['nototaramenu']) && $layout_options['nototaramenu']) {
            return '';
        }
        $logo_data = $this->get_logo_data();

        $user = \core\entity\user::logged_in();

        $theme_config = \theme_config::load('example');
        $theme_settings = new theme_settings($theme_config, $user->tenantid ?? 0);

        $displaynavicons = $theme_settings->get_property('brand', 'formbrand_field_displaynavicons');
        $expandnav = $theme_settings->get_property('brand', 'formbrand_field_expandnav');

        if (isset($displaynavicons['value'])) {
            $icons_enabled = filter_var($displaynavicons['value'], FILTER_VALIDATE_BOOLEAN);
        } else {
            $icons_enabled = true;
        }
    
        $desktop_default = 'expanded';
        if (isset($expandnav['value']) && $expandnav['value'] === 'collapse') {
            $desktop_default = 'collapsed';
        }

        if (isset($SESSION->theme_example_navigation_state)) {
            $user_state = $SESSION->theme_example_navigation_state;
        }

        $state = $user_state ?? $desktop_default;

        $placeholder_id = uniqid('placeholder_');
        $placeholder = html_writer::div(
            '',
            'theme_inspire__navPlaceholder' .
                ($icons_enabled ? ' theme_inspire__navPlaceholder--has-icons' : '') .
                ' theme_inspire__navPlaceholder--state-' . $state,
            ['id' => $placeholder_id]
        );

        $menu_data = totara_build_menu(plain_text: true);

        // The following addition to $menu_data is illustrative only, we add this here
        // to show how data can be manipulated before being passed into the front-end
        // component `NavigationCustomWrapper`
        $custom_menu_item = new stdClass();
        $custom_menu_item->name = 'totaramenuitemcustom0';
        $custom_menu_item->linktext = 'Socials';
        $custom_menu_item->parent = '';
        $custom_menu_item->classname = '\totara_core\totara\menu\custom';
        $custom_menu_item->url = '/totara/dashboard/index.php';
        $custom_menu_item->target = '';
        $custom_menu_item->is_selected = false;
        $custom_menu_item->customclass = 'theme_example-navItem--custom';
        $custom_menu_item->icon_content = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>';

        $menu_data[] = $custom_menu_item;

        $component = new component('theme_example/components/navigation/NavigationCustomWrapper', [
            'menu-data' => $menu_data,
            'site-url' => $logo_data['siteurl'],
            'logo-url' => $logo_data['logourl'],
            'logo-mark' => $logo_data['logomarkurl'],
            'logo-alt' => $logo_data['logoalt'],
            'initial-state' => $state,
            'icons-enabled' => $icons_enabled,
            'placeholder-id' => $placeholder_id,
        ]);
        return '<div class="theme_inspire__nav">' . $placeholder . $component->out_html() . '</div>';
    }
}