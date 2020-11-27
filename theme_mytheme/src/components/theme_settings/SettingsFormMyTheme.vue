<!--
  This file is part of Totara Enterprise Extensions.

  Copyright (C) 2020 onwards Totara Learning Solutions LTD

  Totara Enterprise Extensions is provided only to Totara
  Learning Solutions LTD's customers and partners, pursuant to
  the terms and conditions of a separate agreement with Totara
  Learning Solutions LTD or its affiliate.

  If you do not have an agreement with Totara Learning Solutions
  LTD, you may not access, use, modify, or distribute this software.
  Please contact [licensing@totaralearning.com] for more information.

  @author Dave Wallace <dave.wallace@totaralearning.com>
  @package theme_mytheme
-->

<template>
  <div class="mytheme__customTab">
    <p class="mytheme__customTab__text--rendered">{{helloworld}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      helloworld: 'Hello world!',
    };
  },
};
</script>

<style lang="scss">
// full way of writing the selector, breaking it down into its BEM parts
.mytheme { // namespace
  &__customTab { // Block
    &__text { // Element
      &--rendered { // Modifier
        color: var(--mytheme-color); // this is set in `theme_mytheme/src/global_styles/_variables.scss`
      }
    }
  }
}
// condensed way of writing the selector...
.mytheme__customTab__text--rendered {
  color: var(--mytheme-color);
}
</style>
