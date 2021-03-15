/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/component/theme_example/src/tui.json");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/component/theme_example/src/components sync recursive ^(?:(?!__[a-z]*__|[/\\\\]internal[/\\\\]).)*$":
/*!******************************************************************************************************!*\
  !*** ./client/component/theme_example/src/components sync ^(?:(?!__[a-z]*__|[/\\]internal[/\\]).)*$ ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./theme_settings/SettingsForm\": \"./client/component/theme_example/src/components/theme_settings/SettingsForm.vue\",\n\t\"./theme_settings/SettingsForm.vue\": \"./client/component/theme_example/src/components/theme_settings/SettingsForm.vue\",\n\t\"./theme_settings/SettingsFormExampleFile\": \"./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue\",\n\t\"./theme_settings/SettingsFormExampleFile.vue\": \"./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./client/component/theme_example/src/components sync recursive ^(?:(?!__[a-z]*__|[/\\\\\\\\]internal[/\\\\\\\\]).)*$\";\n\n//# sourceURL=webpack:///__%5Ba-z%5D*__%7C%5B/\\\\%5Dinternal%5B/\\\\%5D).)*$?./client/component/theme_example/src/components_sync_^(?:(?");

/***/ }),

/***/ "./client/component/theme_example/src/components/theme_settings/SettingsForm.vue":
/*!***************************************************************************************!*\
  !*** ./client/component/theme_example/src/components/theme_settings/SettingsForm.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SettingsForm_vue_vue_type_template_id_ed45d1bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsForm.vue?vue&type=template&id=ed45d1bc& */ \"./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=template&id=ed45d1bc&\");\n/* harmony import */ var _SettingsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsForm.vue?vue&type=script&lang=js& */ \"./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _SettingsForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsForm.vue?vue&type=style&index=0&lang=scss& */ \"./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _SettingsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SettingsForm_vue_vue_type_template_id_ed45d1bc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SettingsForm_vue_vue_type_template_id_ed45d1bc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\ncomponent.options.__hasBlocks = {\"script\":true,\"template\":true};\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"client/component/theme_example/src/components/theme_settings/SettingsForm.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_dist_cjs_js_ref_2_0_SettingsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tooling/webpack/tui_vue_loader.js??ref--3-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/source-map-loader/dist/cjs.js??ref--2-0!./SettingsForm.vue?vue&type=script&lang=js& */ \"./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/dist/cjs.js?!./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_dist_cjs_js_ref_2_0_SettingsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************!*\
  !*** ./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_0_tooling_webpack_css_raw_loader_js_ref_4_1_node_modules_postcss_loader_src_index_js_ref_4_2_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-0!../../../../../tooling/webpack/css_raw_loader.js??ref--4-1!../../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../tooling/webpack/tui_vue_loader.js??ref--3-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsForm.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./client/tooling/webpack/css_raw_loader.js?!./node_modules/postcss-loader/src/index.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_0_tooling_webpack_css_raw_loader_js_ref_4_1_node_modules_postcss_loader_src_index_js_ref_4_2_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_0_tooling_webpack_css_raw_loader_js_ref_4_1_node_modules_postcss_loader_src_index_js_ref_4_2_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_0_tooling_webpack_css_raw_loader_js_ref_4_1_node_modules_postcss_loader_src_index_js_ref_4_2_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_0_tooling_webpack_css_raw_loader_js_ref_4_1_node_modules_postcss_loader_src_index_js_ref_4_2_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_0_tooling_webpack_css_raw_loader_js_ref_4_1_node_modules_postcss_loader_src_index_js_ref_4_2_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=template&id=ed45d1bc&":
/*!**********************************************************************************************************************!*\
  !*** ./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=template&id=ed45d1bc& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsForm_vue_vue_type_template_id_ed45d1bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../tooling/webpack/tui_vue_loader.js??ref--3-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsForm.vue?vue&type=template&id=ed45d1bc& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=template&id=ed45d1bc&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsForm_vue_vue_type_template_id_ed45d1bc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsForm_vue_vue_type_template_id_ed45d1bc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue":
/*!**************************************************************************************************!*\
  !*** ./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SettingsFormExampleFile_vue_vue_type_template_id_3c962298___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsFormExampleFile.vue?vue&type=template&id=3c962298& */ \"./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=template&id=3c962298&\");\n/* harmony import */ var _SettingsFormExampleFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsFormExampleFile.vue?vue&type=script&lang=js& */ \"./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _SettingsFormExampleFile_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsFormExampleFile.vue?vue&type=custom&index=0&blockType=lang-strings */ \"./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=custom&index=0&blockType=lang-strings\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _SettingsFormExampleFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SettingsFormExampleFile_vue_vue_type_template_id_3c962298___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SettingsFormExampleFile_vue_vue_type_template_id_3c962298___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _SettingsFormExampleFile_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_SettingsFormExampleFile_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\ncomponent.options.__hasBlocks = {\"script\":true,\"template\":true};\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=custom&index=0&blockType=lang-strings":
/*!*************************************************************************************************************************************************!*\
  !*** ./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=custom&index=0&blockType=lang-strings ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tooling_webpack_tui_lang_strings_loader_js_ref_7_0_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsFormExampleFile_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tooling/webpack/tui_lang_strings_loader.js??ref--7-0!../../../../../tooling/webpack/tui_vue_loader.js??ref--3-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsFormExampleFile.vue?vue&type=custom&index=0&blockType=lang-strings */ \"./client/tooling/webpack/tui_lang_strings_loader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=custom&index=0&blockType=lang-strings\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_tooling_webpack_tui_lang_strings_loader_js_ref_7_0_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsFormExampleFile_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_dist_cjs_js_ref_2_0_SettingsFormExampleFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tooling/webpack/tui_vue_loader.js??ref--3-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/source-map-loader/dist/cjs.js??ref--2-0!./SettingsFormExampleFile.vue?vue&type=script&lang=js& */ \"./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/dist/cjs.js?!./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_dist_cjs_js_ref_2_0_SettingsFormExampleFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=template&id=3c962298&":
/*!*********************************************************************************************************************************!*\
  !*** ./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=template&id=3c962298& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsFormExampleFile_vue_vue_type_template_id_3c962298___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../tooling/webpack/tui_vue_loader.js??ref--3-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsFormExampleFile.vue?vue&type=template&id=3c962298& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=template&id=3c962298&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsFormExampleFile_vue_vue_type_template_id_3c962298___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsFormExampleFile_vue_vue_type_template_id_3c962298___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/global_styles/static.scss":
/*!**********************************************************************!*\
  !*** ./client/component/theme_example/src/global_styles/static.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./client/component/theme_example/src/global_styles/static.scss?");

/***/ }),

/***/ "./client/component/theme_example/src/pages sync recursive ^(?:(?!__[a-z]*__|[/\\\\]internal[/\\\\]).)*$":
/*!*************************************************************************************************!*\
  !*** ./client/component/theme_example/src/pages sync ^(?:(?!__[a-z]*__|[/\\]internal[/\\]).)*$ ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./overrides/tui/ThemeSettings\": \"./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue\",\n\t\"./overrides/tui/ThemeSettings.vue\": \"./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./client/component/theme_example/src/pages sync recursive ^(?:(?!__[a-z]*__|[/\\\\\\\\]internal[/\\\\\\\\]).)*$\";\n\n//# sourceURL=webpack:///__%5Ba-z%5D*__%7C%5B/\\\\%5Dinternal%5B/\\\\%5D).)*$?./client/component/theme_example/src/pages_sync_^(?:(?");

/***/ }),

/***/ "./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue":
/*!**********************************************************************************!*\
  !*** ./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ThemeSettings_vue_vue_type_template_id_10a6db64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeSettings.vue?vue&type=template&id=10a6db64& */ \"./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=template&id=10a6db64&\");\n/* harmony import */ var _ThemeSettings_vue_vue_type_script_extends_true_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeSettings.vue?vue&type=script&extends=true&lang=js& */ \"./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=script&extends=true&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _ThemeSettings_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeSettings.vue?vue&type=custom&index=0&blockType=lang-strings */ \"./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=custom&index=0&blockType=lang-strings\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ThemeSettings_vue_vue_type_script_extends_true_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ThemeSettings_vue_vue_type_template_id_10a6db64___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ThemeSettings_vue_vue_type_template_id_10a6db64___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _ThemeSettings_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_ThemeSettings_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\ncomponent.options.__hasBlocks = {\"script\":true,\"template\":true};\ncomponent.options.__extends = true;\ntui._processOverride(component.exports, \"tui/pages/ThemeSettings\");\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=custom&index=0&blockType=lang-strings":
/*!*********************************************************************************************************************************!*\
  !*** ./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=custom&index=0&blockType=lang-strings ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tooling_webpack_tui_lang_strings_loader_js_ref_7_0_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThemeSettings_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../tooling/webpack/tui_lang_strings_loader.js??ref--7-0!../../../../../../tooling/webpack/tui_vue_loader.js??ref--3-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ThemeSettings.vue?vue&type=custom&index=0&blockType=lang-strings */ \"./client/tooling/webpack/tui_lang_strings_loader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=custom&index=0&blockType=lang-strings\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_tooling_webpack_tui_lang_strings_loader_js_ref_7_0_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThemeSettings_vue_vue_type_custom_index_0_blockType_lang_strings__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=script&extends=true&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=script&extends=true&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_dist_cjs_js_ref_2_0_ThemeSettings_vue_vue_type_script_extends_true_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../tooling/webpack/tui_vue_loader.js??ref--3-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../../node_modules/source-map-loader/dist/cjs.js??ref--2-0!./ThemeSettings.vue?vue&type=script&extends=true&lang=js& */ \"./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/dist/cjs.js?!./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=script&extends=true&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_dist_cjs_js_ref_2_0_ThemeSettings_vue_vue_type_script_extends_true_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=template&id=10a6db64&":
/*!*****************************************************************************************************************!*\
  !*** ./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=template&id=10a6db64& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThemeSettings_vue_vue_type_template_id_10a6db64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../tooling/webpack/tui_vue_loader.js??ref--3-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ThemeSettings.vue?vue&type=template&id=10a6db64& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=template&id=10a6db64&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThemeSettings_vue_vue_type_template_id_10a6db64___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tooling_webpack_tui_vue_loader_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThemeSettings_vue_vue_type_template_id_10a6db64___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?");

/***/ }),

/***/ "./client/component/theme_example/src/tui.json":
/*!*****************************************************!*\
  !*** ./client/component/theme_example/src/tui.json ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function() {\n\"use strict\";\n\nif (typeof tui !== 'undefined' && tui._bundle.isLoaded(\"theme_example\")) {\n  console.warn(\n    '[tui bundle] The bundle \"' + \"theme_example\" +\n    '\" is already loaded, skipping initialisation.'\n  );\n  return;\n};\n__webpack_require__(/*! ./global_styles/static.scss */ \"./client/component/theme_example/src/global_styles/static.scss\");\ntui._bundle.register(\"theme_example\")\ntui._bundle.addModulesFromContext(\"theme_example/components\", __webpack_require__(\"./client/component/theme_example/src/components sync recursive ^(?:(?!__[a-z]*__|[/\\\\\\\\]internal[/\\\\\\\\]).)*$\"));\ntui._bundle.addModulesFromContext(\"theme_example/pages\", __webpack_require__(\"./client/component/theme_example/src/pages sync recursive ^(?:(?!__[a-z]*__|[/\\\\\\\\]internal[/\\\\\\\\]).)*$\"));\n}();\n\n//# sourceURL=webpack:///./client/component/theme_example/src/tui.json?");

/***/ }),

/***/ "./client/tooling/webpack/tui_lang_strings_loader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=custom&index=0&blockType=lang-strings":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./client/tooling/webpack/tui_lang_strings_loader.js??ref--7-0!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=custom&index=0&blockType=lang-strings ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (component) {\n        component.options.__langStrings = \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n  \"theme_example\": [\n    \"example_image\",\n    \"formexamplefiles_details_examplefile\",\n    \"formexamplefiles_label_examplefile\",\n    \"tab_example_file\"\n  ],\n  \"totara_core\": [\n    \"save\",\n    \"saveextended\",\n    \"settings\",\n    \"enabled\"\n  ]\n}\n;\n    });\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?./client/tooling/webpack/tui_lang_strings_loader.js??ref--7-0!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./client/tooling/webpack/tui_lang_strings_loader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=custom&index=0&blockType=lang-strings":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./client/tooling/webpack/tui_lang_strings_loader.js??ref--7-0!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=custom&index=0&blockType=lang-strings ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (component) {\n        component.options.__langStrings = \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n  \"theme_example\": [\n    \"tab_example_file\"\n  ]\n}\n;\n    });\n\n//# sourceURL=webpack:///./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?./client/tooling/webpack/tui_lang_strings_loader.js??ref--7-0!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/dist/cjs.js?!./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader/dist/cjs.js??ref--2-0!./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      helloworld: 'Hello world!',\n    };\n  },\n});\n\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader/dist/cjs.js??ref--2-0");

/***/ }),

/***/ "./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/dist/cjs.js?!./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader/dist/cjs.js??ref--2-0!./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tui_lib_theme_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tui/lib/theme_settings */ \"tui/lib/theme_settings\");\n/* harmony import */ var tui_lib_theme_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tui_lib_theme_settings__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tui_components_uniform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tui/components/uniform */ \"tui/components/uniform\");\n/* harmony import */ var tui_components_uniform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tui_components_uniform__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tui_components_theme_settings_ImageUploadSetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tui/components/theme_settings/ImageUploadSetting */ \"tui/components/theme_settings/ImageUploadSetting\");\n/* harmony import */ var tui_components_theme_settings_ImageUploadSetting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tui_components_theme_settings_ImageUploadSetting__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tui_components_form_FormRowDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tui/components/form/FormRowDetails */ \"tui/components/form/FormRowDetails\");\n/* harmony import */ var tui_components_form_FormRowDetails__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tui_components_form_FormRowDetails__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var tui_components_form_FormRowStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tui/components/form/FormRowStack */ \"tui/components/form/FormRowStack\");\n/* harmony import */ var tui_components_form_FormRowStack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tui_components_form_FormRowStack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var tui_components_buttons_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tui/components/buttons/Button */ \"tui/components/buttons/Button\");\n/* harmony import */ var tui_components_buttons_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tui_components_buttons_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var tui_components_buttons_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tui/components/buttons/ButtonGroup */ \"tui/components/buttons/ButtonGroup\");\n/* harmony import */ var tui_components_buttons_ButtonGroup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tui_components_buttons_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var tui_mixins_settings_form_file_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tui/mixins/settings_form_file_mixin */ \"tui/mixins/settings_form_file_mixin\");\n/* harmony import */ var tui_mixins_settings_form_file_mixin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tui_mixins_settings_form_file_mixin__WEBPACK_IMPORTED_MODULE_7__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n// Mixins\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Uniform: tui_components_uniform__WEBPACK_IMPORTED_MODULE_1__[\"Uniform\"],\n    FormRow: tui_components_uniform__WEBPACK_IMPORTED_MODULE_1__[\"FormRow\"],\n    FormRowDetails: (tui_components_form_FormRowDetails__WEBPACK_IMPORTED_MODULE_3___default()),\n    ImageUploadSetting: (tui_components_theme_settings_ImageUploadSetting__WEBPACK_IMPORTED_MODULE_2___default()),\n    FormRowStack: (tui_components_form_FormRowStack__WEBPACK_IMPORTED_MODULE_4___default()),\n    Button: (tui_components_buttons_Button__WEBPACK_IMPORTED_MODULE_5___default()),\n    ButtonGroup: (tui_components_buttons_ButtonGroup__WEBPACK_IMPORTED_MODULE_6___default()),\n  },\n\n  mixins: [tui_mixins_settings_form_file_mixin__WEBPACK_IMPORTED_MODULE_7___default.a],\n\n  props: {\n    /**\n     * Array of Objects, each describing the properties for fields that are part\n     * of this Form. There is only an Object present in this Array if it came\n     * from the server as it was previously saved\n     */\n    savedFormFieldData: {\n      type: Array,\n      default: function() {\n        return [];\n      },\n    },\n    /**\n     * Object with keys present for each 'Flavour' of Totara possible on the\n     * site, each key value is a Boolean representing whether that Flavour is\n     * currently enabled. We use this to determine whether to show various\n     * settings related to a given Flavour\n     */\n    flavoursData: {\n      type: Object,\n      default: function() {\n        return {};\n      },\n    },\n    /**\n     * Saving state, controlled by parent component GraphQl mutation handling\n     */\n    isSaving: {\n      type: Boolean,\n      default: function() {\n        return false;\n      },\n    },\n    /**\n     * Context ID.\n     */\n    contextId: [Number, String],\n\n    /**\n     * Tenant ID or null if global/multi-tenancy not enabled.\n     */\n    selectedTenantId: Number,\n\n    /**\n     *  Customizable tenant settings\n     */\n    customizableTenantSettings: {\n      type: [Array, String],\n      required: false,\n    },\n  },\n\n  data() {\n    return {\n      initialValues: {},\n      fileData: {\n        example_image: null,\n      },\n      initialValuesSet: false,\n      errorsForm: null,\n      valuesForm: null,\n      resultForm: null,\n      theme_settings: tui_lib_theme_settings__WEBPACK_IMPORTED_MODULE_0___default.a,\n    };\n  },\n\n  /**\n   * Prepare data for consumption within Uniform\n   **/\n  mounted() {\n    // Set the data for this Form based on (in order):\n    // - use previously saved Form data from GraphQL query\n    // - missing field data then supplied by Theme JSON mapping data\n    // - then locally held state until (takes precedence until page is reloaded)\n    let mergedFormData = this.theme_settings.mergeFormData(this.initialValues, [\n      this.savedFormFieldData,\n      this.valuesForm || [],\n    ]);\n    this.initialValues = this.theme_settings.getResolvedInitialValues(\n      mergedFormData\n    );\n    this.initialValuesSet = true;\n    this.$emit('mounted', { category: 'example_file', values: this.initialValues });\n  },\n\n  methods: {\n    validate() {\n      const errors = {};\n      return errors;\n    },\n\n    handleChange(values) {\n      this.valuesForm = values;\n      if (this.errorsForm) {\n        this.errorsForm = null;\n      }\n    },\n\n    /**\n     * Handle submission of an embedded form.\n     *\n     * @param {Object} currentValues The submitted form data.\n     */\n    submit(currentValues) {\n      if (this.errorsForm) {\n        this.errorsForm = null;\n      }\n      this.resultForm = currentValues;\n\n      let dataToMutate = this.formatDataForMutation(currentValues);\n      this.$emit('submit', dataToMutate);\n    },\n\n    /**\n     * Takes Form field data and formats it to meet GraphQL mutation expectations\n     *\n     * @param {Object} currentValues The submitted form data.\n     * @return {Object}\n     **/\n    formatDataForMutation(currentValues) {\n      let data = {\n        form: 'example_file',\n        fields: [],\n        files: [],\n      };\n\n      // handle non-image upload form fields\n      Object.keys(currentValues).forEach(field => {\n        data.fields.push({\n          name: field,\n          type: currentValues[field].type,\n          value: String(currentValues[field].value),\n        });\n      });\n\n      // image upload form field data formatting as it is handled\n      // differently to other form fields in our GraphQL mutation\n      Object.keys(this.fileData).forEach(file => {\n        if (this.fileData[file]) {\n          data.files.push(this.fileData[file]);\n        }\n      });\n\n      return data;\n    },\n  },\n});\n\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader/dist/cjs.js??ref--2-0");

/***/ }),

/***/ "./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/dist/cjs.js?!./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=script&extends=true&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader/dist/cjs.js??ref--2-0!./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=script&extends=true&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_example_components_theme_settings_SettingsForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme_example/components/theme_settings/SettingsForm */ \"theme_example/components/theme_settings/SettingsForm\");\n/* harmony import */ var theme_example_components_theme_settings_SettingsForm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_example_components_theme_settings_SettingsForm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_example_components_theme_settings_SettingsFormExampleFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme_example/components/theme_settings/SettingsFormExampleFile */ \"theme_example/components/theme_settings/SettingsFormExampleFile\");\n/* harmony import */ var theme_example_components_theme_settings_SettingsFormExampleFile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_example_components_theme_settings_SettingsFormExampleFile__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    SettingsForm: (theme_example_components_theme_settings_SettingsForm__WEBPACK_IMPORTED_MODULE_0___default()),\n    SettingsFormExampleFile: (theme_example_components_theme_settings_SettingsFormExampleFile__WEBPACK_IMPORTED_MODULE_1___default())\n  },\n});\n\n\n//# sourceURL=webpack:///./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader/dist/cjs.js??ref--2-0");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./client/tooling/webpack/css_raw_loader.js?!./node_modules/postcss-loader/src/index.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-0!./client/tooling/webpack/css_raw_loader.js??ref--4-1!./node_modules/postcss-loader/src??ref--4-2!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-0!./client/tooling/webpack/css_raw_loader.js??ref--4-1!./node_modules/postcss-loader/src??ref--4-2!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=template&id=ed45d1bc&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?vue&type=template&id=ed45d1bc& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"example__customTab\"},[_c('p',{staticClass:\"example__customTab__text--rendered\"},[_vm._v(_vm._s(_vm.helloworld))])])}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsForm.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=template&id=3c962298&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?vue&type=template&id=3c962298& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.initialValuesSet)?_c('Uniform',{attrs:{\"initial-values\":_vm.initialValues,\"errors\":_vm.errorsForm,\"validate\":_vm.validate},on:{\"change\":_vm.handleChange,\"submit\":_vm.submit}},[_c('FormRowStack',{attrs:{\"spacing\":\"large\"}},[_c('FormRow',{attrs:{\"label\":_vm.$str('formexamplefiles_label_examplefile', 'theme_example'),\"is-stacked\":true}},[_c('ImageUploadSetting',{key:_vm.key,attrs:{\"metadata\":_vm.fileData.example_image,\"aria-label-extension\":_vm.$str(\n            'example_image',\n            'theme_example',\n            _vm.$str('formexamplefiles_label_examplefile', 'theme_example')\n          ),\"aria-describedby\":_vm.$id('formexamplefiles-examplefile-details'),\"context-id\":_vm.contextId,\"show-delete\":_vm.showDelete(_vm.fileData.example_image)},on:{\"update\":_vm.saveImage,\"delete\":_vm.resetImage}}),_vm._v(\" \"),_c('FormRowDetails',{attrs:{\"id\":_vm.$id('formexamplefiles-examplefile-details')}},[_vm._v(\"\\n        \"+_vm._s(_vm.$str('formexamplefiles_details_examplefile', 'theme_example'))+\"\\n      \")])],1),_vm._v(\" \"),_c('FormRow',[_c('ButtonGroup',[_c('Button',{attrs:{\"styleclass\":{ primary: 'true' },\"text\":_vm.$str('save', 'totara_core'),\"aria-label\":_vm.$str(\n              'saveextended',\n              'totara_core',\n              _vm.$str('tab_example_file', 'theme_example') +\n                ' ' +\n                _vm.$str('settings', 'totara_core')\n            ),\"disabled\":_vm.isSaving,\"type\":\"submit\"}})],1)],1)],1)],1):_vm._e()}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./client/component/theme_example/src/components/theme_settings/SettingsFormExampleFile.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./client/tooling/webpack/tui_vue_loader.js?!./node_modules/vue-loader/lib/index.js?!./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=template&id=10a6db64&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options!./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?vue&type=template&id=10a6db64& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"tui-themeSettings\"},[_c('PageHeading',{attrs:{\"title\":_vm.pageTitle}}),_vm._v(\" \"),_c('div',{staticClass:\"tui-themeSettings__content\"},[_c('Loader',{attrs:{\"loading\":!_vm.allDataLoaded}},[(_vm.dataIsReady && _vm.embeddedFormData.formFieldData.brand)?_c('div',{staticClass:\"tui-themeSettings__forms\"},[(_vm.initialValues && _vm.selectedTenantId)?_c('Uniform',{attrs:{\"initial-values\":_vm.initialValues,\"errors\":_vm.errorsForm,\"validate\":_vm.validate},on:{\"change\":_vm.autoSubmitTenantForm}},[_c('FormRow',{attrs:{\"label\":_vm.$str('formtenant_label_tenant', 'totara_tui'),\"is-stacked\":true},scopedSlots:_vm._u([{key:\"default\",fn:function(ref){\nvar label = ref.label;\nreturn [_c('FormToggleSwitch',{attrs:{\"name\":['formtenant_field_tenant', 'value'],\"toggle-first\":true,\"aria-label\":label,\"aria-describedby\":_vm.$id('tenant')}}),_vm._v(\" \"),_c('FormRowDetails',{attrs:{\"id\":_vm.$id('tenant')}},[_vm._v(\"\\n              \"+_vm._s(_vm.$str('formtenant_details_tenant', 'totara_tui'))+\"\\n            \")])]}}],null,false,645077751)})],1):_vm._e(),_vm._v(\" \"),_c('Tabs',{directives:[{name:\"show\",rawName:\"v-show\",value:(\n            !_vm.selectedTenantId || (_vm.selectedTenantId && _vm.tenantOverridesEnabled)\n          ),expression:\"\\n            !selectedTenantId || (selectedTenantId && tenantOverridesEnabled)\\n          \"}],attrs:{\"selected\":\"themesettings-tab-0\",\"content-spacing\":\"large\"}},[(_vm.canEditCategory('brand'))?_c('Tab',{attrs:{\"id\":'themesettings-tab-0',\"name\":_vm.$str('tabbrand', 'totara_tui'),\"always-render\":true}},[(_vm.embeddedFormData.formFieldData.brand)?_c('SettingsFormBrand',{attrs:{\"saved-form-field-data\":_vm.embeddedFormData.formFieldData.brand,\"file-form-field-data\":_vm.embeddedFormData.fileData,\"is-saving\":_vm.isSaving,\"context-id\":_vm.embeddedFormData.contextId,\"selected-tenant-id\":_vm.selectedTenantId,\"customizable-tenant-settings\":_vm.customizableTenantCategorySettings('brand')},on:{\"mounted\":_vm.setInitialTenantCategoryValues,\"submit\":_vm.submit}}):_vm._e()],1):_vm._e(),_vm._v(\" \"),(_vm.canEditCategory('colours'))?_c('Tab',{attrs:{\"id\":'themesettings-tab-1',\"name\":_vm.$str('tabcolours', 'totara_tui'),\"always-render\":true}},[(_vm.embeddedFormData.formFieldData.colours)?_c('SettingsFormColours',{attrs:{\"saved-form-field-data\":_vm.embeddedFormData.formFieldData.colours,\"merged-default-css-variable-data\":_vm.embeddedFormData.mergedDefaultCSSVariableData,\"merged-processed-css-variable-data\":_vm.embeddedFormData.mergedProcessedCSSVariableData,\"is-saving\":_vm.isSaving,\"customizable-tenant-settings\":_vm.customizableTenantCategorySettings('colours')},on:{\"mounted\":_vm.setInitialTenantCategoryValues,\"submit\":_vm.submit}}):_vm._e()],1):_vm._e(),_vm._v(\" \"),(_vm.canEditCategory('images'))?_c('Tab',{attrs:{\"id\":'themesettings-tab-2',\"name\":_vm.$str('tabimages', 'totara_tui'),\"always-render\":true}},[(_vm.embeddedFormData.formFieldData.images)?_c('SettingsFormImages',{attrs:{\"saved-form-field-data\":_vm.embeddedFormData.formFieldData.images,\"flavours-data\":_vm.embeddedFormData.flavours,\"file-form-field-data\":_vm.embeddedFormData.fileData,\"is-saving\":_vm.isSaving,\"context-id\":_vm.embeddedFormData.contextId,\"selected-tenant-id\":_vm.selectedTenantId,\"customizable-tenant-settings\":_vm.customizableTenantCategorySettings('images')},on:{\"mounted\":_vm.setInitialTenantCategoryValues,\"submit\":_vm.submit}}):_vm._e()],1):_vm._e(),_vm._v(\" \"),(_vm.canEditCategory('custom'))?_c('Tab',{attrs:{\"id\":'themesettings-tab-3',\"name\":_vm.$str('tabcustom', 'totara_tui'),\"always-render\":true,\"disabled\":!_vm.customCSSEnabled}},[(_vm.embeddedFormData.formFieldData.custom)?_c('SettingsFormCustom',{attrs:{\"saved-form-field-data\":_vm.embeddedFormData.formFieldData.custom,\"is-saving\":_vm.isSaving,\"selected-tenant-id\":_vm.selectedTenantId,\"customizable-tenant-settings\":_vm.customizableTenantCategorySettings('custom')},on:{\"mounted\":_vm.setInitialTenantCategoryValues,\"submit\":_vm.submit}}):_vm._e()],1):_vm._e(),_vm._v(\" \"),_c('Tab',{attrs:{\"id\":'themesettings-tab-4',\"name\":\"Example Tab\",\"always-render\":true}},[_c('SettingsForm')],1),_vm._v(\" \"),_c('Tab',{attrs:{\"id\":'themesettings-tab-5',\"name\":_vm.$str('tab_example_file', 'theme_example'),\"always-render\":true,\"disabled\":!_vm.customCSSEnabled}},[_c('SettingsFormExampleFile',{attrs:{\"saved-form-field-data\":_vm.embeddedFormData.formFieldData.example_file,\"file-form-field-data\":_vm.embeddedFormData.fileData,\"is-saving\":_vm.isSaving,\"selected-tenant-id\":_vm.selectedTenantId,\"customizable-tenant-settings\":_vm.customizableTenantCategorySettings('example_file')},on:{\"mounted\":_vm.setInitialTenantCategoryValues,\"submit\":_vm.submit}})],1)],1)],1):_vm._e()])],1)],1)}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./client/component/theme_example/src/pages/overrides/tui/ThemeSettings.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./client/tooling/webpack/tui_vue_loader.js??ref--3-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "theme_example/components/theme_settings/SettingsForm":
/*!****************************************************************************************!*\
  !*** external "tui.require(\"theme_example/components/theme_settings/SettingsForm\")" ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"theme_example/components/theme_settings/SettingsForm\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22theme_example/components/theme_settings/SettingsForm\\%22)%22?");

/***/ }),

/***/ "theme_example/components/theme_settings/SettingsFormExampleFile":
/*!***************************************************************************************************!*\
  !*** external "tui.require(\"theme_example/components/theme_settings/SettingsFormExampleFile\")" ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"theme_example/components/theme_settings/SettingsFormExampleFile\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22theme_example/components/theme_settings/SettingsFormExampleFile\\%22)%22?");

/***/ }),

/***/ "tui/components/buttons/Button":
/*!*****************************************************************!*\
  !*** external "tui.require(\"tui/components/buttons/Button\")" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"tui/components/buttons/Button\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22tui/components/buttons/Button\\%22)%22?");

/***/ }),

/***/ "tui/components/buttons/ButtonGroup":
/*!**********************************************************************!*\
  !*** external "tui.require(\"tui/components/buttons/ButtonGroup\")" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"tui/components/buttons/ButtonGroup\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22tui/components/buttons/ButtonGroup\\%22)%22?");

/***/ }),

/***/ "tui/components/form/FormRowDetails":
/*!**********************************************************************!*\
  !*** external "tui.require(\"tui/components/form/FormRowDetails\")" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"tui/components/form/FormRowDetails\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22tui/components/form/FormRowDetails\\%22)%22?");

/***/ }),

/***/ "tui/components/form/FormRowStack":
/*!********************************************************************!*\
  !*** external "tui.require(\"tui/components/form/FormRowStack\")" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"tui/components/form/FormRowStack\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22tui/components/form/FormRowStack\\%22)%22?");

/***/ }),

/***/ "tui/components/theme_settings/ImageUploadSetting":
/*!************************************************************************************!*\
  !*** external "tui.require(\"tui/components/theme_settings/ImageUploadSetting\")" ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"tui/components/theme_settings/ImageUploadSetting\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22tui/components/theme_settings/ImageUploadSetting\\%22)%22?");

/***/ }),

/***/ "tui/components/uniform":
/*!**********************************************************!*\
  !*** external "tui.require(\"tui/components/uniform\")" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"tui/components/uniform\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22tui/components/uniform\\%22)%22?");

/***/ }),

/***/ "tui/lib/theme_settings":
/*!**********************************************************!*\
  !*** external "tui.require(\"tui/lib/theme_settings\")" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"tui/lib/theme_settings\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22tui/lib/theme_settings\\%22)%22?");

/***/ }),

/***/ "tui/mixins/settings_form_file_mixin":
/*!***********************************************************************!*\
  !*** external "tui.require(\"tui/mixins/settings_form_file_mixin\")" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = tui.require(\"tui/mixins/settings_form_file_mixin\");\n\n//# sourceURL=webpack:///external_%22tui.require(\\%22tui/mixins/settings_form_file_mixin\\%22)%22?");

/***/ })

/******/ });