"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.scss":
/*!**************************!*\
  !*** ./app/globals.scss ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"07b49a8f66cc\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9nbG9iYWxzLnNjc3M/N2FmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjA3YjQ5YThmNjZjY1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.scss\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0_sass@1.69.7/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0_sass@1.69.7/node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app/layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0_sass@1.69.7/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/theme */ \"(app-pages-browser)/./app/theme/theme.ts\");\n/* harmony import */ var _barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CssBaseline,ThemeProvider!=!@mui/material */ \"(app-pages-browser)/./node_modules/.pnpm/@mui+material@5.15.3_@emotion+react@11.11.3_@emotion+styled@11.11.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/ThemeProvider.js\");\n/* harmony import */ var _barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CssBaseline,ThemeProvider!=!@mui/material */ \"(app-pages-browser)/./node_modules/.pnpm/@mui+material@5.15.3_@emotion+react@11.11.3_@emotion+styled@11.11.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/CssBaseline/CssBaseline.js\");\n/* harmony import */ var _components_navBar_navBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navBar/navBar */ \"(app-pages-browser)/./app/components/navBar/navBar.tsx\");\n/* harmony import */ var _components_landingPage_landingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/landingPage/landingPage */ \"(app-pages-browser)/./app/components/landingPage/landingPage.tsx\");\n/* harmony import */ var _globals_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globals.scss */ \"(app-pages-browser)/./app/globals.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [dark, setDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLogedIn, setIsLogedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDark = ()=>{\n        setDark(!dark);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            theme: dark ? _theme_theme__WEBPACK_IMPORTED_MODULE_2__.themeDark : _theme_theme__WEBPACK_IMPORTED_MODULE_2__.themeLight,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/momayaz/Desktop/astro/app/layout.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default().className),\n                    children: [\n                        isLogedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navBar_navBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            dark: dark,\n                            toggleDark: toggleDark\n                        }, void 0, false, {\n                            fileName: \"/Users/momayaz/Desktop/astro/app/layout.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 24\n                        }, this) : null,\n                        !isLogedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingPage_landingPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/momayaz/Desktop/astro/app/layout.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, this) : children\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/momayaz/Desktop/astro/app/layout.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/momayaz/Desktop/astro/app/layout.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/momayaz/Desktop/astro/app/layout.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"GDm8IyUvePynEGU1jzTlA1S6g8c=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV01BO0FBVGtDO0FBR2M7QUFDSztBQUNYO0FBQ2U7QUFDdkM7QUFJVCxTQUFTUyxXQUFXLEtBSWxDO1FBSmtDLEVBQ2pDQyxRQUFRLEVBR1QsR0FKa0M7O0lBS2pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFFM0MsTUFBTWEsYUFBYTtRQUNqQkgsUUFBUSxDQUFDRDtJQUNYO0lBRUEscUJBQ0UsOERBQUNLO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUNaLHFHQUFhQTtZQUFDYSxPQUFPUCxPQUFPUixtREFBU0EsR0FBR0Msb0RBQVVBOzs4QkFDakQsOERBQUNFLHFHQUFXQTs7Ozs7OEJBQ1osOERBQUNhO29CQUFLQyxXQUFXcEIsMkpBQWU7O3dCQUM3QmEsMEJBQVksOERBQUNOLGlFQUFNQTs0QkFBQ0ksTUFBTUE7NEJBQU1JLFlBQVlBOzs7OzttQ0FBaUI7d0JBQzdELENBQUNGLDBCQUFZLDhEQUFDTCwyRUFBV0E7Ozs7bUNBQU1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUM7R0F2QndCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0LnRzeD85OTg4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YWRhdGEgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHsgdGhlbWVEYXJrLCB0aGVtZUxpZ2h0IH0gZnJvbSBcIi4vdGhlbWUvdGhlbWVcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIENzc0Jhc2VsaW5lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZCYXIvbmF2QmFyXCI7XG5pbXBvcnQgTGFuZGluZ1BhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9sYW5kaW5nUGFnZS9sYW5kaW5nUGFnZVwiO1xuaW1wb3J0IFwiLi9nbG9iYWxzLnNjc3NcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59KSB7XG4gIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9nZWRJbiwgc2V0SXNMb2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVEYXJrID0gKCkgPT4ge1xuICAgIHNldERhcmsoIWRhcmspO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17ZGFyayA/IHRoZW1lRGFyayA6IHRoZW1lTGlnaHR9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9PlxuICAgICAgICAgIHtpc0xvZ2VkSW4gPyA8TmF2QmFyIGRhcms9e2Rhcmt9IHRvZ2dsZURhcms9e3RvZ2dsZURhcmt9IC8+IDogbnVsbH1cbiAgICAgICAgICB7IWlzTG9nZWRJbiA/IDxMYW5kaW5nUGFnZSAvPiA6IGNoaWxkcmVufVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9odG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRoZW1lRGFyayIsInRoZW1lTGlnaHQiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJOYXZCYXIiLCJMYW5kaW5nUGFnZSIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImRhcmsiLCJzZXREYXJrIiwiaXNMb2dlZEluIiwic2V0SXNMb2dlZEluIiwidG9nZ2xlRGFyayIsImh0bWwiLCJsYW5nIiwidGhlbWUiLCJib2R5IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});