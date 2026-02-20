<!--
  This file is part of Totara Enterprise Extensions.

  Copyright (C) 2026 onwards Totara Learning Solutions LTD

  Totara Enterprise Extensions is provided only to Totara
  Learning Solutions LTD's customers and partners, pursuant to
  the terms and conditions of a separate agreement with Totara
  Learning Solutions LTD or its affiliate.

  If you do not have an agreement with Totara Learning Solutions
  LTD, you may not access, use, modify, or distribute this software.
  Please contact [licensing@totara.com] for more information.

  @author Dave Wallace <dave.wallace@totara.com>
  @package theme_example
-->

<!--
This component serves demonstrates wrapping the Inspire Theme's primary
navigation, passing in the same props coming from PHP in the Example
Theme renderer.

We can now modify the incoming props, apply styles, add functionality,
etc, without modifying the original Inspire Navigation component code.
-->

<script setup>
import InspireNavigation from 'theme_inspire/components/navigation/Navigation';

const props = defineProps({
  iconsEnabled: Boolean,
  initialState: String,
  logoAlt: String,
  logoMark: String,
  logoUrl: String,
  menuData: Array,
  placeholderId: String,
  siteUrl: String,
});
</script>

<template>
  <div class="theme_example-navInfo">(Custom Vue component)</div>
  <InspireNavigation v-bind="props" />
</template>

<style lang="scss">
.theme_example {
  &-navInfo {
    z-index: 1;
  }
  &-navItem--custom {
    position: absolute;
    bottom: calc(var(--gap-base) * 6);
    width: calc(100% - calc(var(--gap-base) * 5));
  }
}
</style>
