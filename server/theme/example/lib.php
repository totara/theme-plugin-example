<?php
/**
 * This file is part of Totara Learn
 *
 * Copyright (C) 2020 onwards Totara Learning Solutions LTD
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
 * @author Johannes Cilliers <johannes.cilliers@totaralearning.com>
 * @package theme_example
 */

defined('MOODLE_INTERNAL') || die();

/**
 * Adds theme appearance links to category nav.
 *
 * @param navigation_node $navigation The navigation node to extend
 * @param context $context The context of the course
 * @return void|null return null if we don't want to display the node.
 */
function theme_example_extend_navigation_category_settings($navigation, $context) {
    global $PAGE, $CFG, $DB;

    if (empty($CFG->tenantsenabled)) {
        return null;
    }

    if (!$context->tenantid) {
        return null;
    }

    if (!($context instanceof context_coursecat)) {
        return;
    }

    if ($PAGE->theme->name !== 'example') {
        return;
    }

    $tenant = $DB->get_record('tenant', ['categoryid' => $context->instanceid]);
    if (!$tenant) {
        return null;
    }

    // Leave when user does not have the right capabilities.
    $categorycontext = context_coursecat::instance($tenant->categoryid);
    if (!has_capability('totara/tui:themesettings', $categorycontext)) {
        return null;
    }

    $url = new moodle_url('/totara/tui/theme_settings.php',
        [
            'theme_name' => 'example',
            'tenant_id' => $tenant->id,
        ]
    );
    $node = navigation_node::create(
        get_string('pluginname', 'theme_example'),
        $url,
        navigation_node::NODETYPE_LEAF,
        null,
        'example_editor',
        new pix_icon('i/settings', '')
    );

    $appearance = $navigation->find('category_appearance', navigation_node::TYPE_CONTAINER);
    if (!$appearance) {
        $appearance = $navigation->add(
            get_string('appearance', 'admin'),
            null,
            navigation_node::TYPE_CONTAINER,
            null,
            'category_appearance'
        );
    }
    $appearance->add_node($node);

    if ($PAGE->url->compare($url, URL_MATCH_EXACT)) {
        $appearance->force_open();
        $node->make_active();
    }
}

/**
 * To download the file we upload in theme_example filearea
 *
 * @param stdClass$course
 * @param stdClass $cm
 * @param context $context
 * @param string $filearea
 * @param array $args
 * @param bool$forcedownload
 * @param array $options
 * @return void Download the file
 */
function theme_example_pluginfile($course, $cm, $context, $filearea, $args, $forcedownload, $options = []) {
    $component = 'theme_example';
    $itemid = $args[0];
    $filename = $args[1];
    $fs = get_file_storage();

    $file = $fs->get_file($context->id, $component, $filearea, $itemid, '/', $filename);

    if (empty($file)) {
        send_file_not_found();
    }

    send_stored_file($file, 60*60*24, 0, false, $options); // Enable long cache and disable forcedownload.
}
