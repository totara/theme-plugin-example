<?php
/**
 * This file is part of Totara Learn
 *
 * Copyright (C) 2021 onwards Totara Learning Solutions LTD
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

namespace theme_example\theme\file;

use context;
use core\files\type\file_type;
use core\files\type\web_image;
use core\theme\file\theme_file;
use \theme_config;

/**
 * Class theme_example
 *
 * This file handler is used to get a different version of a file belonging to
 * the theme and within specific context that we have access to, otherwise the
 * default file will be be fetched.
 *
 * This file handler is also used by theme settings to generate a dynamic list
 * of files that can be customised by a user.
 * @see settings
 * @see theme_file
 *
 * @package theme_example\theme\file
 */
class example_file extends theme_file {

    /**
     * example_file constructor.
     *
     * @param theme_config|null $theme_config
     */
    public function __construct(?theme_config $theme_config = null) {
        parent::__construct($theme_config);
        $this->type = new web_image();
    }

    /**
     * @inheritDoc
     */
    public static function get_id(): string {
        return 'theme_example/example_image';
    }

    /**
     * @inheritDoc
     */
    public function get_component(): string {
        return 'theme_example';
    }

    /**
     * @inheritDoc
     */
    public function get_area(): string {
        return 'example_image';
    }

    /**
     * @inheritDoc
     */
    public function get_ui_key(): string {
        return 'example_image';
    }

    /**
     * @inheritDoc
     */
    public function get_ui_category(): string {
        return 'example_file';
    }

    /**
     * @inheritDoc
     */
    public function get_type(): file_type {
        return $this->type;
    }

    /**
     * @inheritDoc
     */
    protected function get_default_context(?int $unused = null, ?bool $determine_tenant_branding = true): ?context {
	// This example shows that you can override this function to limit a specific theme file
	// to system context only, which means this file cannot be updated for a tenant.
        return \context_system::instance();
    }

}
