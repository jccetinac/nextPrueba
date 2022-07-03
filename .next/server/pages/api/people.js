"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/people";
exports.ids = ["pages/api/people"];
exports.modules = {

/***/ "(api)/./pages/api/people/index.js":
/*!***********************************!*\
  !*** ./pages/api/people/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ personHandler)\n/* harmony export */ });\nfunction personHandler({\n  query: {\n    id\n  }\n}, res) {\n  res.status(200).json({\n    name: 'John Doe',\n    is: 'id',\n    id\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGVvcGxlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxhQUFULENBQXVCO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFFQyxJQUFBQTtBQUFGO0FBQVQsQ0FBdkIsRUFBMENDLEdBQTFDLEVBQStDO0FBQzVEQSxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxJQUFBQSxJQUFJLEVBQUUsVUFBUjtBQUFvQkMsSUFBQUEsRUFBRSxFQUFFLElBQXhCO0FBQThCTCxJQUFBQTtBQUE5QixHQUFyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9hcGkvcGVvcGxlL2luZGV4LmpzPzdlZDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGVyc29uSGFuZGxlcih7IHF1ZXJ5OiB7IGlkIH0gfSwgcmVzKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJywgaXM6ICdpZCcsIGlkIH0pXG59XG4iXSwibmFtZXMiOlsicGVyc29uSGFuZGxlciIsInF1ZXJ5IiwiaWQiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibmFtZSIsImlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/people/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/people/index.js"));
module.exports = __webpack_exports__;

})();