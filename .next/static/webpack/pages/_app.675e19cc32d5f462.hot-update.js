"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n *  __                  __\\n * /\\\\ \\\\                /\\\\ \\\\\\n * \\\\ \\\\ \\\\___   __  __   \\\\_\\\\ \\\\     __\\n *  \\\\ \\\\  _ `\\\\/\\\\ \\\\/\\\\ \\\\  /'_` \\\\  /'__`\\\\\\n *   \\\\ \\\\ \\\\ \\\\ \\\\ \\\\ \\\\_\\\\ \\\\/\\\\ \\\\_\\\\ \\\\/\\\\  __/\\n *    \\\\ \\\\_\\\\ \\\\_\\\\/`____ \\\\ \\\\___,_\\\\ \\\\____\\\\\\n *     \\\\/_/\\\\/_/`/___/> \\\\/__,_ /\\\\/____/\\n *                /\\\\___/\\n *                \\\\/__/\\n *\\n * Designed, built, and released under MIT license by @mdo. Learn more at\\n * https://github.com/poole/hyde.\\n */\\n\\n/* This css file deals with the sidebar and the macro layout */\\n\\n/*\\n * Contents\\n *\\n * Global resets\\n * Sidebar\\n * Container\\n * Reverse layout\\n * Themes\\n */\\n\\n\\n/*\\n * Global resets\\n *\\n * Update the foundational and global aspects of the page.\\n */\\n\\n html {\\n  font-family: \\\"Crimson Text\\\", Times, serif;\\n  text-align: justify;\\n  font-display: swap;\\n}\\n@media (min-width: 48em) {\\n  html {\\n    font-size: 16px;\\n  }\\n}\\n@media (min-width: 58em) {\\n  html {\\n    font-size: 20px;\\n  }\\n}\\n\\n.text-justify {\\n  text-align: justify;\\n}\\n\\n.left {\\n   float: left;\\n   padding: 0 20px 20px 0;\\n}\\n\\n.right {\\n   float: right;\\n   padding: 0 20px 20px 0;\\n} \\n\\n\\n/*\\n * Sidebar\\n *\\n * Flexible banner for housing site name, intro, and \\\"footer\\\" content. Starts\\n * out above content in mobile and later moves to the side with wider viewports.\\n */\\n\\n.sidebar {\\n  text-align: center;\\n  font-family: Arial;\\n  padding: 2rem 1rem;\\n  color: rgba(255,255,255,.5);\\n  background-color: #202020;\\n}\\n@media (min-width: 48em) {\\n  .sidebar {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    width: max(18rem, 16vw);\\n    text-align: left;\\n  }\\n}\\n\\n/* Sidebar links */\\n.sidebar a {\\n  color: #fff;\\n}\\n\\n/* About section */\\n.sidebar-about h1 {\\n  color: #fff;\\n  margin-top: 0;\\n  font-family: \\\"Arial\\\", sans-serif;\\n  font-size: 2.5rem;\\n}\\n\\n/* Sidebar nav */\\n.sidebar-nav {\\n  margin-bottom: 1rem;\\n}\\n.sidebar-nav-item {\\n  display: block;\\n  line-height: 1.5;\\n}\\na.sidebar-nav-item:hover,\\na.sidebar-nav-item:focus {\\n  text-decoration: underline;\\n}\\n.sidebar-nav-item.active {\\n  font-weight: bold;\\n}\\n\\n/* Sticky sidebar\\n *\\n * Add the `sidebar-sticky` class to the sidebar's container to affix it the\\n * contents to the bottom of the sidebar in tablets and up.\\n */\\n\\n@media (min-width: 48em) {\\n  .sidebar-sticky {\\n    position: absolute;\\n    right:  1rem;\\n    bottom: 1rem;\\n    left:   1rem;\\n  }\\n}\\n\\n\\n/* Container\\n *\\n * Align the contents of the site above the proper threshold with some margin-fu\\n * with a 25%-wide `.sidebar`.\\n */\\n\\n.content {\\n  padding-top:    4rem;\\n  padding-bottom: 4rem;\\n}\\n\\n@media (min-width: 48em) {\\n  .content {\\n    max-width: 38rem;\\n    margin-left: max(20rem, 35vw);\\n    margin-right: 2rem;\\n  }\\n}\\n@media (min-width: 100em) {\\n  .content {\\n    max-width: max(38rem, min(40vw, 50rem));\\n    margin-left: max(35vw, 20rem);\\n    margin-right: 2rem;\\n  }\\n}\\n\\n/* @media (min-width: 64em) {\\n  .content {\\n    margin-left: 22rem;\\n    margin-right: 4rem;\\n  }\\n}\\n@media (min-width: 70em) {\\n  .content {\\n    max-width: 40rem;\\n    margin-left: 25rem;\\n    margin-right: 4rem;\\n  }\\n}\\n@media (min-width: 100em) {\\n  .content {\\n    max-width: 45rem;\\n    margin-left: 35rem;\\n    margin-right: 4rem;\\n  }\\n}\\n@media (min-width: 120em) {\\n  .content {\\n    max-width: 45rem;\\n    margin-left: 35rem;\\n    margin-right: 4rem;\\n  }\\n}\\n@media (min-width: 150em) {\\n  .content {\\n    max-width: 50rem;\\n    margin-left: 40rem;\\n    margin-right: 4rem;\\n  }\\n}\\n */\\n\\n\\n\\n\\n\\n/* Themes */\\n\\n/* Purple */\\n.theme-base-purpz .sidebar {\\n  background-color: #2f0857;\\n}\\n/* pww 2014-12-17 - moved from poole.css to each theme */\\n.theme-base-purpz .content a,\\n.theme-base-purpz h1, h2, h3, h4, h5, h6,\\n.theme-base-purpz .related-posts li a:hover {\\n  color: #5c14a4;\\n}\\n\\n\\n/*\\n * Reverse layout\\n *\\n * Flip the orientation of the page by placing the `.sidebar` on the right.\\n */\\n\\n/* @media (min-width: 48em) {\\n  .layout-reverse .sidebar {\\n    left: auto;\\n    right: 0;\\n  }\\n  .layout-reverse .content {\\n    margin-left: 2rem;\\n    margin-right: 20rem;\\n  }\\n}\\n@media (min-width: 64em) {\\n  .layout-reverse .content {\\n    margin-left: 4rem;\\n    margin-right: 22rem;\\n  }\\n} */\\n\\n.article-title:visited { \\n text-decoration: none;\\n color: inherit;\\n}\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;;;;;;;;;;;;EAaE;;AAEF,8DAA8D;;AAE9D;;;;;;;;EAQE;;;AAGF;;;;EAIE;;CAED;EACC,yCAAyC;EACzC,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE;IACE,eAAe;EACjB;AACF;AACA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,mBAAmB;AACrB;;AAEA;GACG,WAAW;GACX,sBAAsB;AACzB;;AAEA;GACG,YAAY;GACZ,sBAAsB;AACzB;;;AAGA;;;;;EAKE;;AAEF;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,2BAA2B;EAC3B,yBAAyB;AAC3B;AACA;EACE;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,SAAS;IACT,uBAAuB;IACvB,gBAAgB;EAClB;AACF;;AAEA,kBAAkB;AAClB;EACE,WAAW;AACb;;AAEA,kBAAkB;AAClB;EACE,WAAW;EACX,aAAa;EACb,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA,gBAAgB;AAChB;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;AACA;;EAEE,0BAA0B;AAC5B;AACA;EACE,iBAAiB;AACnB;;AAEA;;;;EAIE;;AAEF;EACE;IACE,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,YAAY;EACd;AACF;;;AAGA;;;;EAIE;;AAEF;EACE,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE;IACE,gBAAgB;IAChB,6BAA6B;IAC7B,kBAAkB;EACpB;AACF;AACA;EACE;IACE,uCAAuC;IACvC,6BAA6B;IAC7B,kBAAkB;EACpB;AACF;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAkCE;;;;;;AAMF,WAAW;;AAEX,WAAW;AACX;EACE,yBAAyB;AAC3B;AACA,wDAAwD;AACxD;;;EAGE,cAAc;AAChB;;;AAGA;;;;EAIE;;AAEF;;;;;;;;;;;;;;;GAeG;;AAEH;CACC,qBAAqB;CACrB,cAAc;AACf\",\"sourcesContent\":[\"/*\\n *  __                  __\\n * /\\\\ \\\\                /\\\\ \\\\\\n * \\\\ \\\\ \\\\___   __  __   \\\\_\\\\ \\\\     __\\n *  \\\\ \\\\  _ `\\\\/\\\\ \\\\/\\\\ \\\\  /'_` \\\\  /'__`\\\\\\n *   \\\\ \\\\ \\\\ \\\\ \\\\ \\\\ \\\\_\\\\ \\\\/\\\\ \\\\_\\\\ \\\\/\\\\  __/\\n *    \\\\ \\\\_\\\\ \\\\_\\\\/`____ \\\\ \\\\___,_\\\\ \\\\____\\\\\\n *     \\\\/_/\\\\/_/`/___/> \\\\/__,_ /\\\\/____/\\n *                /\\\\___/\\n *                \\\\/__/\\n *\\n * Designed, built, and released under MIT license by @mdo. Learn more at\\n * https://github.com/poole/hyde.\\n */\\n\\n/* This css file deals with the sidebar and the macro layout */\\n\\n/*\\n * Contents\\n *\\n * Global resets\\n * Sidebar\\n * Container\\n * Reverse layout\\n * Themes\\n */\\n\\n\\n/*\\n * Global resets\\n *\\n * Update the foundational and global aspects of the page.\\n */\\n\\n html {\\n  font-family: \\\"Crimson Text\\\", Times, serif;\\n  text-align: justify;\\n  font-display: swap;\\n}\\n@media (min-width: 48em) {\\n  html {\\n    font-size: 16px;\\n  }\\n}\\n@media (min-width: 58em) {\\n  html {\\n    font-size: 20px;\\n  }\\n}\\n\\n.text-justify {\\n  text-align: justify;\\n}\\n\\n.left {\\n   float: left;\\n   padding: 0 20px 20px 0;\\n}\\n\\n.right {\\n   float: right;\\n   padding: 0 20px 20px 0;\\n} \\n\\n\\n/*\\n * Sidebar\\n *\\n * Flexible banner for housing site name, intro, and \\\"footer\\\" content. Starts\\n * out above content in mobile and later moves to the side with wider viewports.\\n */\\n\\n.sidebar {\\n  text-align: center;\\n  font-family: Arial;\\n  padding: 2rem 1rem;\\n  color: rgba(255,255,255,.5);\\n  background-color: #202020;\\n}\\n@media (min-width: 48em) {\\n  .sidebar {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    width: max(18rem, 16vw);\\n    text-align: left;\\n  }\\n}\\n\\n/* Sidebar links */\\n.sidebar a {\\n  color: #fff;\\n}\\n\\n/* About section */\\n.sidebar-about h1 {\\n  color: #fff;\\n  margin-top: 0;\\n  font-family: \\\"Arial\\\", sans-serif;\\n  font-size: 2.5rem;\\n}\\n\\n/* Sidebar nav */\\n.sidebar-nav {\\n  margin-bottom: 1rem;\\n}\\n.sidebar-nav-item {\\n  display: block;\\n  line-height: 1.5;\\n}\\na.sidebar-nav-item:hover,\\na.sidebar-nav-item:focus {\\n  text-decoration: underline;\\n}\\n.sidebar-nav-item.active {\\n  font-weight: bold;\\n}\\n\\n/* Sticky sidebar\\n *\\n * Add the `sidebar-sticky` class to the sidebar's container to affix it the\\n * contents to the bottom of the sidebar in tablets and up.\\n */\\n\\n@media (min-width: 48em) {\\n  .sidebar-sticky {\\n    position: absolute;\\n    right:  1rem;\\n    bottom: 1rem;\\n    left:   1rem;\\n  }\\n}\\n\\n\\n/* Container\\n *\\n * Align the contents of the site above the proper threshold with some margin-fu\\n * with a 25%-wide `.sidebar`.\\n */\\n\\n.content {\\n  padding-top:    4rem;\\n  padding-bottom: 4rem;\\n}\\n\\n@media (min-width: 48em) {\\n  .content {\\n    max-width: 38rem;\\n    margin-left: max(20rem, 35vw);\\n    margin-right: 2rem;\\n  }\\n}\\n@media (min-width: 100em) {\\n  .content {\\n    max-width: max(38rem, min(40vw, 50rem));\\n    margin-left: max(35vw, 20rem);\\n    margin-right: 2rem;\\n  }\\n}\\n\\n/* @media (min-width: 64em) {\\n  .content {\\n    margin-left: 22rem;\\n    margin-right: 4rem;\\n  }\\n}\\n@media (min-width: 70em) {\\n  .content {\\n    max-width: 40rem;\\n    margin-left: 25rem;\\n    margin-right: 4rem;\\n  }\\n}\\n@media (min-width: 100em) {\\n  .content {\\n    max-width: 45rem;\\n    margin-left: 35rem;\\n    margin-right: 4rem;\\n  }\\n}\\n@media (min-width: 120em) {\\n  .content {\\n    max-width: 45rem;\\n    margin-left: 35rem;\\n    margin-right: 4rem;\\n  }\\n}\\n@media (min-width: 150em) {\\n  .content {\\n    max-width: 50rem;\\n    margin-left: 40rem;\\n    margin-right: 4rem;\\n  }\\n}\\n */\\n\\n\\n\\n\\n\\n/* Themes */\\n\\n/* Purple */\\n.theme-base-purpz .sidebar {\\n  background-color: #2f0857;\\n}\\n/* pww 2014-12-17 - moved from poole.css to each theme */\\n.theme-base-purpz .content a,\\n.theme-base-purpz h1, h2, h3, h4, h5, h6,\\n.theme-base-purpz .related-posts li a:hover {\\n  color: #5c14a4;\\n}\\n\\n\\n/*\\n * Reverse layout\\n *\\n * Flip the orientation of the page by placing the `.sidebar` on the right.\\n */\\n\\n/* @media (min-width: 48em) {\\n  .layout-reverse .sidebar {\\n    left: auto;\\n    right: 0;\\n  }\\n  .layout-reverse .content {\\n    margin-left: 2rem;\\n    margin-right: 20rem;\\n  }\\n}\\n@media (min-width: 64em) {\\n  .layout-reverse .content {\\n    margin-left: 4rem;\\n    margin-right: 22rem;\\n  }\\n} */\\n\\n.article-title:visited { \\n text-decoration: none;\\n color: inherit;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxzeEJBQXN4QixnREFBZ0Qsd0JBQXdCLHVCQUF1QixHQUFHLDRCQUE0QixVQUFVLHNCQUFzQixLQUFLLEdBQUcsNEJBQTRCLFVBQVUsc0JBQXNCLEtBQUssR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsV0FBVyxpQkFBaUIsNEJBQTRCLEdBQUcsWUFBWSxrQkFBa0IsNEJBQTRCLElBQUksOE1BQThNLHVCQUF1Qix1QkFBdUIsdUJBQXVCLGdDQUFnQyw4QkFBOEIsR0FBRyw0QkFBNEIsY0FBYyxzQkFBc0IsYUFBYSxjQUFjLGdCQUFnQiw4QkFBOEIsdUJBQXVCLEtBQUssR0FBRyxxQ0FBcUMsZ0JBQWdCLEdBQUcsNENBQTRDLGdCQUFnQixrQkFBa0IsdUNBQXVDLHNCQUFzQixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxQkFBcUIsbUJBQW1CLHFCQUFxQixHQUFHLHVEQUF1RCwrQkFBK0IsR0FBRyw0QkFBNEIsc0JBQXNCLEdBQUcsdU1BQXVNLHFCQUFxQix5QkFBeUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsS0FBSyxHQUFHLDJKQUEySix5QkFBeUIseUJBQXlCLEdBQUcsOEJBQThCLGNBQWMsdUJBQXVCLG9DQUFvQyx5QkFBeUIsS0FBSyxHQUFHLDZCQUE2QixjQUFjLDhDQUE4QyxvQ0FBb0MseUJBQXlCLEtBQUssR0FBRyxpQ0FB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QUFHLG9MQUFvTCxtQkFBbUIsR0FBRyxrSkFBa0osOEJBQThCLGlCQUFpQixlQUFlLEtBQUssOEJBQThCLHdCQUF3QiwwQkFBMEIsS0FBSyxHQUFHLDRCQUE0Qiw4QkFBOEIsd0JBQXdCLDBCQUEwQixLQUFLLElBQUksK0JBQStCLHlCQUF5QixrQkFBa0IsR0FBRyx1QkFBdUI7QUFDL3ZUO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2JjMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICogIF9fICAgICAgICAgICAgICAgICAgX19cXG4gKiAvXFxcXCBcXFxcICAgICAgICAgICAgICAgIC9cXFxcIFxcXFxcXG4gKiBcXFxcIFxcXFwgXFxcXF9fXyAgIF9fICBfXyAgIFxcXFxfXFxcXCBcXFxcICAgICBfX1xcbiAqICBcXFxcIFxcXFwgIF8gYFxcXFwvXFxcXCBcXFxcL1xcXFwgXFxcXCAgLydfYCBcXFxcICAvJ19fYFxcXFxcXG4gKiAgIFxcXFwgXFxcXCBcXFxcIFxcXFwgXFxcXCBcXFxcIFxcXFxfXFxcXCBcXFxcL1xcXFwgXFxcXF9cXFxcIFxcXFwvXFxcXCAgX18vXFxuICogICAgXFxcXCBcXFxcX1xcXFwgXFxcXF9cXFxcL2BfX19fIFxcXFwgXFxcXF9fXyxfXFxcXCBcXFxcX19fX1xcXFxcXG4gKiAgICAgXFxcXC9fL1xcXFwvXy9gL19fXy8+IFxcXFwvX18sXyAvXFxcXC9fX19fL1xcbiAqICAgICAgICAgICAgICAgIC9cXFxcX19fL1xcbiAqICAgICAgICAgICAgICAgIFxcXFwvX18vXFxuICpcXG4gKiBEZXNpZ25lZCwgYnVpbHQsIGFuZCByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSBieSBAbWRvLiBMZWFybiBtb3JlIGF0XFxuICogaHR0cHM6Ly9naXRodWIuY29tL3Bvb2xlL2h5ZGUuXFxuICovXFxuXFxuLyogVGhpcyBjc3MgZmlsZSBkZWFscyB3aXRoIHRoZSBzaWRlYmFyIGFuZCB0aGUgbWFjcm8gbGF5b3V0ICovXFxuXFxuLypcXG4gKiBDb250ZW50c1xcbiAqXFxuICogR2xvYmFsIHJlc2V0c1xcbiAqIFNpZGViYXJcXG4gKiBDb250YWluZXJcXG4gKiBSZXZlcnNlIGxheW91dFxcbiAqIFRoZW1lc1xcbiAqL1xcblxcblxcbi8qXFxuICogR2xvYmFsIHJlc2V0c1xcbiAqXFxuICogVXBkYXRlIHRoZSBmb3VuZGF0aW9uYWwgYW5kIGdsb2JhbCBhc3BlY3RzIG9mIHRoZSBwYWdlLlxcbiAqL1xcblxcbiBodG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3JpbXNvbiBUZXh0XFxcIiwgVGltZXMsIHNlcmlmO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1OGVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4udGV4dC1qdXN0aWZ5IHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5sZWZ0IHtcXG4gICBmbG9hdDogbGVmdDtcXG4gICBwYWRkaW5nOiAwIDIwcHggMjBweCAwO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgIGZsb2F0OiByaWdodDtcXG4gICBwYWRkaW5nOiAwIDIwcHggMjBweCAwO1xcbn0gXFxuXFxuXFxuLypcXG4gKiBTaWRlYmFyXFxuICpcXG4gKiBGbGV4aWJsZSBiYW5uZXIgZm9yIGhvdXNpbmcgc2l0ZSBuYW1lLCBpbnRybywgYW5kIFxcXCJmb290ZXJcXFwiIGNvbnRlbnQuIFN0YXJ0c1xcbiAqIG91dCBhYm92ZSBjb250ZW50IGluIG1vYmlsZSBhbmQgbGF0ZXIgbW92ZXMgdG8gdGhlIHNpZGUgd2l0aCB3aWRlciB2aWV3cG9ydHMuXFxuICovXFxuXFxuLnNpZGViYXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IG1heCgxOHJlbSwgMTZ2dyk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICB9XFxufVxcblxcbi8qIFNpZGViYXIgbGlua3MgKi9cXG4uc2lkZWJhciBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBBYm91dCBzZWN0aW9uICovXFxuLnNpZGViYXItYWJvdXQgaDEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLyogU2lkZWJhciBuYXYgKi9cXG4uc2lkZWJhci1uYXYge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLnNpZGViYXItbmF2LWl0ZW0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5hLnNpZGViYXItbmF2LWl0ZW06aG92ZXIsXFxuYS5zaWRlYmFyLW5hdi1pdGVtOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uc2lkZWJhci1uYXYtaXRlbS5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFN0aWNreSBzaWRlYmFyXFxuICpcXG4gKiBBZGQgdGhlIGBzaWRlYmFyLXN0aWNreWAgY2xhc3MgdG8gdGhlIHNpZGViYXIncyBjb250YWluZXIgdG8gYWZmaXggaXQgdGhlXFxuICogY29udGVudHMgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2lkZWJhciBpbiB0YWJsZXRzIGFuZCB1cC5cXG4gKi9cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgLnNpZGViYXItc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogIDFyZW07XFxuICAgIGJvdHRvbTogMXJlbTtcXG4gICAgbGVmdDogICAxcmVtO1xcbiAgfVxcbn1cXG5cXG5cXG4vKiBDb250YWluZXJcXG4gKlxcbiAqIEFsaWduIHRoZSBjb250ZW50cyBvZiB0aGUgc2l0ZSBhYm92ZSB0aGUgcHJvcGVyIHRocmVzaG9sZCB3aXRoIHNvbWUgbWFyZ2luLWZ1XFxuICogd2l0aCBhIDI1JS13aWRlIGAuc2lkZWJhcmAuXFxuICovXFxuXFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZy10b3A6ICAgIDRyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIC5jb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiAzOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IG1heCgyMHJlbSwgMzV2dyk7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMGVtKSB7XFxuICAuY29udGVudCB7XFxuICAgIG1heC13aWR0aDogbWF4KDM4cmVtLCBtaW4oNDB2dywgNTByZW0pKTtcXG4gICAgbWFyZ2luLWxlZnQ6IG1heCgzNXZ3LCAyMHJlbSk7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIH1cXG59XFxuXFxuLyogQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcXG4gIC5jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3MGVtKSB7XFxuICAuY29udGVudCB7XFxuICAgIG1heC13aWR0aDogNDByZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwZW0pIHtcXG4gIC5jb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiA0NXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDQ1cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMzVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MGVtKSB7XFxuICAuY29udGVudCB7XFxuICAgIG1heC13aWR0aDogNTByZW07XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgfVxcbn1cXG4gKi9cXG5cXG5cXG5cXG5cXG5cXG4vKiBUaGVtZXMgKi9cXG5cXG4vKiBQdXJwbGUgKi9cXG4udGhlbWUtYmFzZS1wdXJweiAuc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYwODU3O1xcbn1cXG4vKiBwd3cgMjAxNC0xMi0xNyAtIG1vdmVkIGZyb20gcG9vbGUuY3NzIHRvIGVhY2ggdGhlbWUgKi9cXG4udGhlbWUtYmFzZS1wdXJweiAuY29udGVudCBhLFxcbi50aGVtZS1iYXNlLXB1cnB6IGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXFxuLnRoZW1lLWJhc2UtcHVycHogLnJlbGF0ZWQtcG9zdHMgbGkgYTpob3ZlciB7XFxuICBjb2xvcjogIzVjMTRhNDtcXG59XFxuXFxuXFxuLypcXG4gKiBSZXZlcnNlIGxheW91dFxcbiAqXFxuICogRmxpcCB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBhZ2UgYnkgcGxhY2luZyB0aGUgYC5zaWRlYmFyYCBvbiB0aGUgcmlnaHQuXFxuICovXFxuXFxuLyogQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIC5sYXlvdXQtcmV2ZXJzZSAuc2lkZWJhciB7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIHJpZ2h0OiAwO1xcbiAgfVxcbiAgLmxheW91dC1yZXZlcnNlIC5jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMjByZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XFxuICAubGF5b3V0LXJldmVyc2UgLmNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnJlbTtcXG4gIH1cXG59ICovXFxuXFxuLmFydGljbGUtdGl0bGU6dmlzaXRlZCB7IFxcbiB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0VBYUU7O0FBRUYsOERBQThEOztBQUU5RDs7Ozs7Ozs7RUFRRTs7O0FBR0Y7Ozs7RUFJRTs7Q0FFRDtFQUNDLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7R0FDRyxXQUFXO0dBQ1gsc0JBQXNCO0FBQ3pCOztBQUVBO0dBQ0csWUFBWTtHQUNaLHNCQUFzQjtBQUN6Qjs7O0FBR0E7Ozs7O0VBS0U7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsV0FBVztBQUNiOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7OztFQUlFOztBQUVGO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFDRjs7O0FBR0E7Ozs7RUFJRTs7QUFFRjtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtDRTs7Ozs7O0FBTUYsV0FBVzs7QUFFWCxXQUFXO0FBQ1g7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQSx3REFBd0Q7QUFDeEQ7OztFQUdFLGNBQWM7QUFDaEI7OztBQUdBOzs7O0VBSUU7O0FBRUY7Ozs7Ozs7Ozs7Ozs7OztHQWVHOztBQUVIO0NBQ0MscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAqICBfXyAgICAgICAgICAgICAgICAgIF9fXFxuICogL1xcXFwgXFxcXCAgICAgICAgICAgICAgICAvXFxcXCBcXFxcXFxuICogXFxcXCBcXFxcIFxcXFxfX18gICBfXyAgX18gICBcXFxcX1xcXFwgXFxcXCAgICAgX19cXG4gKiAgXFxcXCBcXFxcICBfIGBcXFxcL1xcXFwgXFxcXC9cXFxcIFxcXFwgIC8nX2AgXFxcXCAgLydfX2BcXFxcXFxuICogICBcXFxcIFxcXFwgXFxcXCBcXFxcIFxcXFwgXFxcXCBcXFxcX1xcXFwgXFxcXC9cXFxcIFxcXFxfXFxcXCBcXFxcL1xcXFwgIF9fL1xcbiAqICAgIFxcXFwgXFxcXF9cXFxcIFxcXFxfXFxcXC9gX19fXyBcXFxcIFxcXFxfX18sX1xcXFwgXFxcXF9fX19cXFxcXFxuICogICAgIFxcXFwvXy9cXFxcL18vYC9fX18vPiBcXFxcL19fLF8gL1xcXFwvX19fXy9cXG4gKiAgICAgICAgICAgICAgICAvXFxcXF9fXy9cXG4gKiAgICAgICAgICAgICAgICBcXFxcL19fL1xcbiAqXFxuICogRGVzaWduZWQsIGJ1aWx0LCBhbmQgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgYnkgQG1kby4gTGVhcm4gbW9yZSBhdFxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wb29sZS9oeWRlLlxcbiAqL1xcblxcbi8qIFRoaXMgY3NzIGZpbGUgZGVhbHMgd2l0aCB0aGUgc2lkZWJhciBhbmQgdGhlIG1hY3JvIGxheW91dCAqL1xcblxcbi8qXFxuICogQ29udGVudHNcXG4gKlxcbiAqIEdsb2JhbCByZXNldHNcXG4gKiBTaWRlYmFyXFxuICogQ29udGFpbmVyXFxuICogUmV2ZXJzZSBsYXlvdXRcXG4gKiBUaGVtZXNcXG4gKi9cXG5cXG5cXG4vKlxcbiAqIEdsb2JhbCByZXNldHNcXG4gKlxcbiAqIFVwZGF0ZSB0aGUgZm91bmRhdGlvbmFsIGFuZCBnbG9iYWwgYXNwZWN0cyBvZiB0aGUgcGFnZS5cXG4gKi9cXG5cXG4gaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIkNyaW1zb24gVGV4dFxcXCIsIFRpbWVzLCBzZXJpZjtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNThlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG59XFxuXFxuLnRleHQtanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ubGVmdCB7XFxuICAgZmxvYXQ6IGxlZnQ7XFxuICAgcGFkZGluZzogMCAyMHB4IDIwcHggMDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICBmbG9hdDogcmlnaHQ7XFxuICAgcGFkZGluZzogMCAyMHB4IDIwcHggMDtcXG59IFxcblxcblxcbi8qXFxuICogU2lkZWJhclxcbiAqXFxuICogRmxleGlibGUgYmFubmVyIGZvciBob3VzaW5nIHNpdGUgbmFtZSwgaW50cm8sIGFuZCBcXFwiZm9vdGVyXFxcIiBjb250ZW50LiBTdGFydHNcXG4gKiBvdXQgYWJvdmUgY29udGVudCBpbiBtb2JpbGUgYW5kIGxhdGVyIG1vdmVzIHRvIHRoZSBzaWRlIHdpdGggd2lkZXIgdmlld3BvcnRzLlxcbiAqL1xcblxcbi5zaWRlYmFyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAuc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiBtYXgoMThyZW0sIDE2dncpO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgfVxcbn1cXG5cXG4vKiBTaWRlYmFyIGxpbmtzICovXFxuLnNpZGViYXIgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogQWJvdXQgc2VjdGlvbiAqL1xcbi5zaWRlYmFyLWFib3V0IGgxIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIFNpZGViYXIgbmF2ICovXFxuLnNpZGViYXItbmF2IHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5zaWRlYmFyLW5hdi1pdGVtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuYS5zaWRlYmFyLW5hdi1pdGVtOmhvdmVyLFxcbmEuc2lkZWJhci1uYXYtaXRlbTpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnNpZGViYXItbmF2LWl0ZW0uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBTdGlja3kgc2lkZWJhclxcbiAqXFxuICogQWRkIHRoZSBgc2lkZWJhci1zdGlja3lgIGNsYXNzIHRvIHRoZSBzaWRlYmFyJ3MgY29udGFpbmVyIHRvIGFmZml4IGl0IHRoZVxcbiAqIGNvbnRlbnRzIHRvIHRoZSBib3R0b20gb2YgdGhlIHNpZGViYXIgaW4gdGFibGV0cyBhbmQgdXAuXFxuICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIC5zaWRlYmFyLXN0aWNreSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6ICAxcmVtO1xcbiAgICBib3R0b206IDFyZW07XFxuICAgIGxlZnQ6ICAgMXJlbTtcXG4gIH1cXG59XFxuXFxuXFxuLyogQ29udGFpbmVyXFxuICpcXG4gKiBBbGlnbiB0aGUgY29udGVudHMgb2YgdGhlIHNpdGUgYWJvdmUgdGhlIHByb3BlciB0aHJlc2hvbGQgd2l0aCBzb21lIG1hcmdpbi1mdVxcbiAqIHdpdGggYSAyNSUtd2lkZSBgLnNpZGViYXJgLlxcbiAqL1xcblxcbi5jb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiAgICA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAuY29udGVudCB7XFxuICAgIG1heC13aWR0aDogMzhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBtYXgoMjByZW0sIDM1dncpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDBlbSkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IG1heCgzOHJlbSwgbWluKDQwdncsIDUwcmVtKSk7XFxuICAgIG1hcmdpbi1sZWZ0OiBtYXgoMzV2dywgMjByZW0pO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICB9XFxufVxcblxcbi8qIEBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XFxuICAuY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzBlbSkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMGVtKSB7XFxuICAuY29udGVudCB7XFxuICAgIG1heC13aWR0aDogNDVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHtcXG4gIC5jb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiA0NXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTBlbSkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogNDByZW07XFxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG4gIH1cXG59XFxuICovXFxuXFxuXFxuXFxuXFxuXFxuLyogVGhlbWVzICovXFxuXFxuLyogUHVycGxlICovXFxuLnRoZW1lLWJhc2UtcHVycHogLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMDg1NztcXG59XFxuLyogcHd3IDIwMTQtMTItMTcgLSBtb3ZlZCBmcm9tIHBvb2xlLmNzcyB0byBlYWNoIHRoZW1lICovXFxuLnRoZW1lLWJhc2UtcHVycHogLmNvbnRlbnQgYSxcXG4udGhlbWUtYmFzZS1wdXJweiBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxcbi50aGVtZS1iYXNlLXB1cnB6IC5yZWxhdGVkLXBvc3RzIGxpIGE6aG92ZXIge1xcbiAgY29sb3I6ICM1YzE0YTQ7XFxufVxcblxcblxcbi8qXFxuICogUmV2ZXJzZSBsYXlvdXRcXG4gKlxcbiAqIEZsaXAgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwYWdlIGJ5IHBsYWNpbmcgdGhlIGAuc2lkZWJhcmAgb24gdGhlIHJpZ2h0LlxcbiAqL1xcblxcbi8qIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAubGF5b3V0LXJldmVyc2UgLnNpZGViYXIge1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICByaWdodDogMDtcXG4gIH1cXG4gIC5sYXlvdXQtcmV2ZXJzZSAuY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjRlbSkge1xcbiAgLmxheW91dC1yZXZlcnNlIC5jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMjJyZW07XFxuICB9XFxufSAqL1xcblxcbi5hcnRpY2xlLXRpdGxlOnZpc2l0ZWQgeyBcXG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css\n");

/***/ })

});