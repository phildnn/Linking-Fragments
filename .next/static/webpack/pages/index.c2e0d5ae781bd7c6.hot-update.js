"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/articles.tsx":
/*!*************************************!*\
  !*** ./src/components/articles.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Articles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Articles.module.css */ \"./styles/Articles.module.css\");\n/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Articles(param) {\n    var posts = param.posts;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2___default().list),\n        children: posts.map(function(post) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"post-title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/posts/\".concat(post.slug),\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/src/components/articles.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/src/components/articles.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/src/components/articles.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.excerpt\n                    }, void 0, false, {\n                        fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/src/components/articles.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2___default().tags),\n                        children: post.tags.map(function(tag) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/tags/\".concat(tag),\n                                children: tag\n                            }, tag, false, {\n                                fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/src/components/articles.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/src/components/articles.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, post.slug, true, {\n                fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/src/components/articles.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/philippd/Documents/Coding/Fragmented Pieces/src/components/articles.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n};\n_c = Articles;\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRXFCO0FBRWxDLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDLEtBQWdDLEVBQUUsQ0FBQztRQUFqQ0MsS0FBSyxHQUFQLEtBQWdDLENBQTlCQSxLQUFLOztJQUN0QyxNQUFNLDZFQUNIQyxDQUFFO1FBQUNDLFNBQVMsRUFBRUoseUVBQVc7a0JBQ3ZCRSxLQUFLLENBQUNJLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7MEJBQ2QsTUFBTSwrREFBTEMsQ0FBRTs7Z0dBQ0FDLENBQUc7d0JBQUNMLFNBQVMsRUFBRUosMEVBQVk7OEdBQ3pCVyxDQUFDOzRCQUFDUCxTQUFTLEVBQUMsQ0FBWTtrSEFDdEJMLGtEQUFJO2dDQUFDYSxJQUFJLEVBQUcsQ0FBTyxTQUFZLE9BQVZMLElBQUksQ0FBQ00sSUFBSTswQ0FBS04sSUFBSSxDQUFDRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2dHQUdqREksQ0FBQztrQ0FBRVAsSUFBSSxDQUFDUSxPQUFPOzs7Ozs7Z0dBQ2ZELENBQUM7d0JBQUNWLFNBQVMsRUFBRUoseUVBQVc7a0NBQ3RCTyxJQUFJLENBQUNTLElBQUksQ0FBQ1YsR0FBRyxDQUFDLFFBQVEsQ0FBUFcsR0FBRzswQ0FDakIsTUFBTUMsQ0FBQUEsNkRBQUFBLENBQUxuQixrREFBSTtnQ0FBV2EsSUFBSSxFQUFHLENBQU0sUUFBTSxPQUFKSyxHQUFHOzBDQUMvQkEsR0FBRzsrQkFES0EsR0FBRzs7Ozs7Ozs7Ozs7O2VBVFhWLElBQUksQ0FBQ00sSUFBSTs7Ozs7Ozs7Ozs7QUFrQjFCLENBQUM7S0F0QnVCWixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FydGljbGVzLnRzeD83MzJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB0eXBlIHsgUG9zdE1ldGEgfSBmcm9tIFwiQC9zcmMvYXBpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVzKHsgcG9zdHMgfTogeyBwb3N0czogUG9zdE1ldGFbXSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9Pntwb3N0LnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD57cG9zdC5leGNlcnB0fTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50YWdzfT5cbiAgICAgICAgICAgIHtwb3N0LnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXt0YWd9IGhyZWY9e2AvdGFncy8ke3RhZ31gfT5cbiAgICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJBcnRpY2xlcyIsInBvc3RzIiwidWwiLCJjbGFzc05hbWUiLCJsaXN0IiwibWFwIiwicG9zdCIsImxpIiwiZGl2IiwidGl0bGUiLCJhIiwiaHJlZiIsInNsdWciLCJwIiwiZXhjZXJwdCIsInRhZ3MiLCJ0YWciLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/articles.tsx\n");

/***/ })

});