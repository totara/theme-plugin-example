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
  @module theme_example
-->

<!--
This Vue Single File Component will override the core ThemeSettings.vue file
found in /client/component/tui/src/pages/ThemeSettings.vue but it will only
override the <template /> block.

Further down in this file we're going to `extend` the original script block,
rather than override it completely.

Not going to add a `<style />` block, you can see that in action in this theme's
SettingsForm.vue file.

More reading: https://help.totaralearning.com/display/DEV/Creating+custom+themes
-->

<template>
  <div class="tui-themeSettings">
    <PageHeading :title="pageTitle" />

    <div class="tui-themeSettings__content">
      <Loader :loading="!allDataLoaded">
        <div
          v-if="dataIsReady && embeddedFormData.formFieldData.brand"
          class="tui-themeSettings__forms"
        >
          <Uniform
            v-if="initialValues && selectedTenantId"
            :initial-values="initialValues"
            :errors="errorsForm"
            :validate="validate"
            @change="autoSubmitTenantForm"
          >
            <FormRow
              v-slot="{ label }"
              :label="$str('formtenant_label_tenant', 'totara_tui')"
              :is-stacked="true"
            >
              <FormToggleSwitch
                :name="['formtenant_field_tenant', 'value']"
                :toggle-first="true"
                :aria-label="label"
                :aria-describedby="$id('tenant')"
              />
              <FormRowDetails :id="$id('tenant')">
                {{ $str('formtenant_details_tenant', 'totara_tui') }}
              </FormRowDetails>
            </FormRow>
          </Uniform>

          <Tabs
            v-show="
              !selectedTenantId || (selectedTenantId && tenantOverridesEnabled)
            "
            selected="themesettings-tab-0"
            content-spacing="large"
          >
            <Tab
              v-if="canEditCategory('brand')"
              :id="'themesettings-tab-0'"
              :name="$str('tabbrand', 'totara_tui')"
              :always-render="true"
            >
              <SettingsFormBrand
                v-if="embeddedFormData.formFieldData.brand"
                :saved-form-field-data="embeddedFormData.formFieldData.brand"
                :file-form-field-data="embeddedFormData.fileData"
                :is-saving="isSaving"
                :context-id="embeddedFormData.contextId"
                :selected-tenant-id="selectedTenantId"
                :customizable-tenant-settings="
                  customizableTenantCategorySettings('brand')
                "
                @mounted="setInitialTenantCategoryValues"
                @submit="submit"
              />
            </Tab>
            <Tab
              v-if="canEditCategory('colours')"
              :id="'themesettings-tab-1'"
              :name="$str('tabcolours', 'totara_tui')"
              :always-render="true"
            >
              <SettingsFormColours
                v-if="embeddedFormData.formFieldData.colours"
                :saved-form-field-data="embeddedFormData.formFieldData.colours"
                :merged-default-css-variable-data="
                  embeddedFormData.mergedDefaultCSSVariableData
                "
                :merged-processed-css-variable-data="
                  embeddedFormData.mergedProcessedCSSVariableData
                "
                :is-saving="isSaving"
                :customizable-tenant-settings="
                  customizableTenantCategorySettings('colours')
                "
                @mounted="setInitialTenantCategoryValues"
                @submit="submit"
              />
            </Tab>
            <Tab
              v-if="canEditCategory('images')"
              :id="'themesettings-tab-2'"
              :name="$str('tabimages', 'totara_tui')"
              :always-render="true"
            >
              <SettingsFormImages
                v-if="embeddedFormData.formFieldData.images"
                :saved-form-field-data="embeddedFormData.formFieldData.images"
                :flavours-data="embeddedFormData.flavours"
                :file-form-field-data="embeddedFormData.fileData"
                :is-saving="isSaving"
                :context-id="embeddedFormData.contextId"
                :selected-tenant-id="selectedTenantId"
                :customizable-tenant-settings="
                  customizableTenantCategorySettings('images')
                "
                @mounted="setInitialTenantCategoryValues"
                @submit="submit"
              />
            </Tab>
            <Tab
              v-if="canEditCategory('custom')"
              :id="'themesettings-tab-3'"
              :name="$str('tabcustom', 'totara_tui')"
              :always-render="true"
              :disabled="!customCSSEnabled"
            >
              <SettingsFormCustom
                v-if="embeddedFormData.formFieldData.custom"
                :saved-form-field-data="embeddedFormData.formFieldData.custom"
                :is-saving="isSaving"
                :selected-tenant-id="selectedTenantId"
                :customizable-tenant-settings="
                  customizableTenantCategorySettings('custom')
                "
                @mounted="setInitialTenantCategoryValues"
                @submit="submit"
              />
            </Tab>

            <!--
              Lets add a new Tab in here, I will use fake data and a hardcoded
              language string to keep things simple and focus on Vue component
              overrides.
            -->
            <Tab
              :id="'themesettings-tab-4'"
              name="Example Tab"
              :always-render="true"
            >
              <!--
                Inside the new Tab I have dropped in a new component, it doesn't
                exist inside the distributed Totara codebase, I have added it to
                this custom theme.
              -->
              <SettingsForm />
            </Tab>

            <!--
              Lets add a new tab with a file example, the file will refer to
              the example file we created under the theme directory.
            -->
            <Tab
              v-if="embeddedFormData.formFieldData.example_file"
              :id="'themesettings-tab-5'"
              :name="$str('tab_example_file', 'theme_example')"
              :always-render="true"
              :disabled="!customCSSEnabled"
            >
              <SettingsFormExampleFile
                :saved-form-field-data="embeddedFormData.formFieldData.example_file"
                :file-form-field-data="embeddedFormData.fileData"
                :is-saving="isSaving"
                :selected-tenant-id="selectedTenantId"
                :customizable-tenant-settings="
                  customizableTenantCategorySettings('example_file')
                "
                @mounted="setInitialTenantCategoryValues"
                @submit="submit"
              />
            </Tab>
          </Tabs>
        </div>
      </Loader>
    </div>
  </div>
</template>

<!--
Note that I am using the `extends` attribute here, what this does is allows me
to supply imports, such as `SettingsForm` without overriding the entire
`<script />` block found in /client/component/tui/src/pages/ThemeSettings.vue
as overriding all of that script would create a maintenance burden on this
custom theme.

There are definitely times when you might want to override a whole script block,
such as altering data structures, replacing GraphQL query/mutation handling,
changing behaviour of a UI component, adding a 3rd party Vue-compatible
animation library and building that into a component, etc.
-->
<script extends>
import SettingsForm from 'theme_example/components/theme_settings/SettingsForm';
import SettingsFormExampleFile from 'theme_example/components/theme_settings/SettingsFormExampleFile';
export default {
  components: {
    SettingsForm,
    SettingsFormExampleFile
  },
};
</script>

<lang-strings>
{
  "theme_example": [
    "tab_example_file"
  ]
}
</lang-strings>