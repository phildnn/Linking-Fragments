"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tags/[slug]",{

/***/ "./pages/tags/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/tags/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ TagPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/articles */ \"./src/components/articles.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar __N_SSG = true;\nfunction TagPage(param) {\n    var slug = param.slug, posts = param.posts;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Tag: \",\n                        slug\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/pages/tags/[slug].tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/pages/tags/[slug].tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Tag: \",\n                    slug\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/pages/tags/[slug].tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_articles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                posts: posts\n            }, void 0, false, {\n                fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/pages/tags/[slug].tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = TagPage;\nvar _c;\n$RefreshReg$(_c, \"TagPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWdzL1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRCO0FBRW9COztBQUVqQyxRQUFRLENBQUNFLE9BQU8sQ0FBQyxLQU0vQixFQUFFLENBQUM7UUFMRkMsSUFBSSxHQUQwQixLQU0vQixDQUxDQSxJQUFJLEVBQ0pDLEtBQUssR0FGeUIsS0FNL0IsQ0FKQ0EsS0FBSztJQUtMLE1BQU07O3dGQUVESixrREFBSTtzR0FDRkssQ0FBQzs7d0JBQUMsQ0FBSzt3QkFBQ0YsSUFBSTs7Ozs7Ozs7Ozs7O3dGQUVkRyxDQUFFOztvQkFBQyxDQUFLO29CQUFDSCxJQUFJOzs7Ozs7O3dGQUNiRixnRUFBUTtnQkFBQ0csS0FBSyxFQUFFQSxLQUFLOzs7Ozs7OztBQUc1QixDQUFDO0tBaEJ1QkYsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90YWdzL1tzbHVnXS50c3g/Yzg2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgUG9zdE1ldGEgfSBmcm9tIFwiQC9zcmMvYXBpXCI7XG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIkAvc3JjL2NvbXBvbmVudHMvYXJ0aWNsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFnUGFnZSh7XG4gIHNsdWcsXG4gIHBvc3RzLFxufToge1xuICBzbHVnOiBzdHJpbmc7XG4gIHBvc3RzOiBQb3N0TWV0YVtdO1xufSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHA+VGFnOiB7c2x1Z308L3A+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDE+VGFnOiB7c2x1Z308L2gxPlxuICAgICAgPEFydGljbGVzIHBvc3RzPXtwb3N0c30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zIGFzIHsgc2x1Zzogc3RyaW5nIH07XG4gIGNvbnN0IHBvc3RzID0gZ2V0QWxsUG9zdHMoKS5maWx0ZXIoKHBvc3QpID0+IHBvc3QubWV0YS50YWdzLmluY2x1ZGVzKHNsdWcpKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzbHVnLFxuICAgICAgcG9zdHM6IHBvc3RzLm1hcCgocG9zdCkgPT4gcG9zdC5tZXRhKSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cygpO1xuICBjb25zdCB0YWdzID0gbmV3IFNldChwb3N0cy5tYXAoKHBvc3QpID0+IHBvc3QubWV0YS50YWdzKS5mbGF0KCkpO1xuICBjb25zdCBwYXRocyA9IEFycmF5LmZyb20odGFncykubWFwKCh0YWcpID0+ICh7IHBhcmFtczogeyBzbHVnOiB0YWcgfSB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJBcnRpY2xlcyIsIlRhZ1BhZ2UiLCJzbHVnIiwicG9zdHMiLCJwIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tags/[slug].tsx\n");

/***/ })

});