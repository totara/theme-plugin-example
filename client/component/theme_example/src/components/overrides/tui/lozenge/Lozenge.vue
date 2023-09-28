<!--
  This file is part of Totara Enterprise Extensions.

  Copyright (C) 2023 onwards Totara Learning Solutions LTD

  Totara Enterprise Extensions is provided only to Totara
  Learning Solutions LTD's customers and partners, pursuant to
  the terms and conditions of a separate agreement with Totara
  Learning Solutions LTD or its affiliate.

  If you do not have an agreement with Totara Learning Solutions
  LTD, you may not access, use, modify, or distribute this software.
  Please contact [licensing@totaralearning.com] for more information.

  @module tui
-->

<!-- Define a component to replace the one in core -->

<template>
  <div
    class="tui-theme_example-lozenge"
    :class="['tui-theme_example-lozenge--' + type]"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
    type: {
      default: 'info',
      type: String,
    },
  },
};
</script>

<style lang="scss">
.tui-theme_example-lozenge {
  display: inline-flex;
  padding: 3px var(--gap-2) 3px;
  color: var(--color-neutral-1);
  font-size: var(--font-heading-size);
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
