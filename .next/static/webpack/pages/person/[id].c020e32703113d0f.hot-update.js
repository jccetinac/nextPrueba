"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/person/[id]",{

/***/ "./pages/person/[id].js":
/*!******************************!*\
  !*** ./pages/person/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PersonById; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Person */ \"./components/Person.js\");\n/* harmony import */ var _components_CreatePerson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CreatePerson */ \"./components/CreatePerson.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\usuario\\\\Desktop\\\\nextPrueba\\\\pages\\\\person\\\\[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction PersonById(person) {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var isFallback = router.isFallback,\n      query = router.query;\n\n  if (isFallback) {\n    return 'Loading...';\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Person__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      person: person,\n      details: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      as: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n        children: \"volver a la lista\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_CreatePerson__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      userData: person\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PersonById, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = PersonById;\n\nvar _c;\n\n$RefreshReg$(_c, \"PersonById\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wZXJzb24vW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUNlLFNBQVNJLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQUE7O0FBQ3pDLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7QUFDQSxNQUFRTyxVQUFSLEdBQThCRCxNQUE5QixDQUFRQyxVQUFSO0FBQUEsTUFBb0JDLEtBQXBCLEdBQThCRixNQUE5QixDQUFvQkUsS0FBcEI7O0FBRUEsTUFBSUQsVUFBSixFQUFnQjtBQUNkLFdBQU8sWUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsMERBQUQ7QUFBUSxZQUFNLEVBQUVGLE1BQWhCO0FBQXdCLGFBQU87QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUksOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFlLFFBQUUsRUFBQyxHQUFsQjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBS0ksOERBQUMsZ0VBQUQ7QUFBYyxjQUFRLEVBQUVBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQWpCdUJEO1VBQ1BKOzs7S0FET0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc29uL1tpZF0uanM/ZmI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QZXJzb24nO1xyXG5pbXBvcnQgQ3JlYXRlUGVyc29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3JlYXRlUGVyc29uJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uQnlJZChwZXJzb24pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlzRmFsbGJhY2ssIHF1ZXJ5IH0gPSByb3V0ZXI7XHJcblxyXG4gIGlmIChpc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gJ0xvYWRpbmcuLi4nXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGVyc29uIHBlcnNvbj17cGVyc29ufSBkZXRhaWxzLz5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxyXG4gICAgICAgICAgPGE+dm9sdmVyIGEgbGEgbGlzdGE8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxDcmVhdGVQZXJzb24gdXNlckRhdGE9e3BlcnNvbn0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cclxuICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vcmV0b29sYXBpLmRldi9wdFQ0SWIvZGF0YS8nKTtcclxuICBjb25zdCBwZW9wbGVMaXN0ID0gWy4uLkFycmF5KGRhdGEubGVuZ3RoKV0ubWFwKCAoIHZhbHVlLCBpbmRleCApID0+IGAkeyBpbmRleCB9YCApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBlb3BsZUxpc3QubWFwKCBpZCA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgaWQgfVxyXG4gICAgfSkpLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zIDtcclxuICBjb25zb2xlLmxvZygnW0VMIElEXScsaWQpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3JldG9vbGFwaS5kZXYvcHRUNEliL2RhdGEvJHsgaWQgfWApO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IGRhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTGluayIsIlBlcnNvbiIsIkNyZWF0ZVBlcnNvbiIsIlBlcnNvbkJ5SWQiLCJwZXJzb24iLCJyb3V0ZXIiLCJpc0ZhbGxiYWNrIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/person/[id].js\n");

/***/ })

});