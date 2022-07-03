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
exports.id = "pages/person/[id]";
exports.ids = ["pages/person/[id]"];
exports.modules = {

/***/ "./pages/person/[id].js":
/*!******************************!*\
  !*** ./pages/person/[id].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GspPage),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\usuario\\\\Desktop\\\\nextPrueba\\\\pages\\\\person\\\\[id].js\";\n\n\n\nfunction GspPage(props) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  const {\n    isFallback,\n    query\n  } = router;\n\n  if (isFallback) {\n    return 'Loading...';\n  }\n\n  console.log(props);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: \"person\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      children: [\"ID: \", query.id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\nconst getStaticPaths = async ctx => {\n  const pokemons151 = [...Array(200)].map((value, index) => `${index + 1}`);\n  return {\n    paths: pokemons151.map(id => ({\n      params: {\n        id\n      }\n    })),\n    fallback: false\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  const {\n    id\n  } = params;\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://retoolapi.dev/cSZH8I/data/${id}`);\n  console.log(data);\n  return {\n    props: data\n  };\n}; // You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wZXJzb24vW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDZSxTQUFTRSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUNyQyxRQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFSyxJQUFBQSxVQUFGO0FBQWNDLElBQUFBO0FBQWQsTUFBd0JGLE1BQTlCOztBQUVBLE1BQUlDLFVBQUosRUFBZ0I7QUFDZCxXQUFPLFlBQVA7QUFDRDs7QUFFREUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLHlCQUFRRyxLQUFLLENBQUNHLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDtBQUVNLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFFM0MsUUFBTUMsV0FBVyxHQUFHLENBQUMsR0FBR0MsS0FBSyxDQUFDLEdBQUQsQ0FBVCxFQUFnQkMsR0FBaEIsQ0FBcUIsQ0FBRUMsS0FBRixFQUFTQyxLQUFULEtBQXFCLEdBQUdBLEtBQUssR0FBRyxDQUFHLEVBQXhELENBQXBCO0FBRUEsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUVMLFdBQVcsQ0FBQ0UsR0FBWixDQUFpQkwsRUFBRSxLQUFLO0FBQzdCUyxNQUFBQSxNQUFNLEVBQUU7QUFBRVQsUUFBQUE7QUFBRjtBQURxQixLQUFMLENBQW5CLENBREY7QUFJTFUsSUFBQUEsUUFBUSxFQUFFO0FBSkwsR0FBUDtBQU1ELENBVk07QUFhQSxNQUFNQyxjQUFjLEdBQUcsT0FBTztBQUFDRixFQUFBQTtBQUFELENBQVAsS0FBb0I7QUFDaEQsUUFBTTtBQUFFVCxJQUFBQTtBQUFGLE1BQVNTLE1BQWY7QUFFQSxRQUFNO0FBQUVHLElBQUFBO0FBQUYsTUFBVyxNQUFNcEIsZ0RBQUEsQ0FBVyxxQ0FBcUNRLEVBQUksRUFBcEQsQ0FBdkI7QUFFQUYsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlhLElBQVo7QUFDQSxTQUFPO0FBQ0xsQixJQUFBQSxLQUFLLEVBQUVrQjtBQURGLEdBQVA7QUFHRCxDQVRNLEVBV1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL3BlcnNvbi9baWRdLmpzP2ZiODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdzcFBhZ2UocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlzRmFsbGJhY2ssIHF1ZXJ5IH0gPSByb3V0ZXI7XHJcblxyXG4gIGlmIChpc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gJ0xvYWRpbmcuLi4nXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPnBlcnNvbjwvaDE+XHJcbiAgICAgIDxwPklEOiB7cXVlcnkuaWR9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblxyXG4gIGNvbnN0IHBva2Vtb25zMTUxID0gWy4uLkFycmF5KDIwMCldLm1hcCggKCB2YWx1ZSwgaW5kZXggKSA9PiBgJHsgaW5kZXggKyAxIH1gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcG9rZW1vbnMxNTEubWFwKCBpZCA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgaWQgfVxyXG4gICAgfSkpLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zIDtcclxuICBcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9yZXRvb2xhcGkuZGV2L2NTWkg4SS9kYXRhLyR7IGlkIH1gKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiBkYXRhLFxyXG4gIH1cclxufVxyXG5cclxuLy8gWW91IHNob3VsZCB1c2UgZ2V0U3RhdGljUGF0aHMgaWYgeW914oCZcmUgc3RhdGljYWxseSBwcmUtcmVuZGVyaW5nIHBhZ2VzIHRoYXQgdXNlIGR5bmFtaWMgcm91dGVzXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJheGlvcyIsIkdzcFBhZ2UiLCJwcm9wcyIsInJvdXRlciIsImlzRmFsbGJhY2siLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImdldFN0YXRpY1BhdGhzIiwiY3R4IiwicG9rZW1vbnMxNTEiLCJBcnJheSIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJwYXRocyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/person/[id].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/person/[id].js"));
module.exports = __webpack_exports__;

})();