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

  @module theme_example
-->

<!-- This file defines a component to override the original core component -->

<script setup>
const props = defineProps({
  text: {
    required: true,
    type: String,
  },
  type: {
    default: 'info',
    type: String,
  },
});
</script>

<template>
  <div
    class="tui-theme_example-lozenge"
    :class="['tui-theme_example-lozenge--' + type]"
    v-bind="props"
  >
    {{ text }}
  </div>
</template>

<style lang="scss">
.tui-theme_example-lozenge {
  @include font(body-sm);

  display: inline-flex;
  padding: 3px var(--gap-2) 3px;
  color: var(--color-neutral-1);
  line-height: 1;
  background: var(--color-prompt-info);
  border-radius: 50px;

  &--alert {
    background: var(--color-prompt-alert);
  }

  &--success {
    background: var(--color-prompt-success);
  }

  &--warning {
    background: var(--color-prompt-warning);
  }

  &--neutral {
    background: var(--color-neutral-6);
  }
}
</style>
