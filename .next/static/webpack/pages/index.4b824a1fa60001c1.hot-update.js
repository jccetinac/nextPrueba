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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Person */ \"./components/Person.js\");\n/* harmony import */ var _components_CreatePerson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreatePerson */ \"./components/CreatePerson.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\usuario\\\\Desktop\\\\nextPrueba\\\\pages\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var people = _ref.people;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      filter = _useState[0],\n      setFilter = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(people),\n      peopleFiltered = _useState2[0],\n      setPeopleFiltered = _useState2[1];\n\n  var updateListByFilter = function updateListByFilter(filterValue) {\n    setPeopleFiltered(people);\n    console.log('[ANTES]', peopleFiltered);\n    console.log(filterValue);\n    setFilter(filterValue);\n    var tempList = peopleFiltered.filter(function (person) {\n      return person.Student.toLowerCase().indexOf(filterValue) > -1;\n    });\n    setPeopleFiltered(tempList);\n    console.log('[DPS]', peopleFiltered);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"University Students\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().containerMain),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"text\",\n            value: filter,\n            onChange: function onChange(e) {\n              return updateListByFilter(e.target.value);\n            },\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n            placeholder: \"search by name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n          children: \"User List\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), peopleFiltered === null || peopleFiltered === void 0 ? void 0 : peopleFiltered.map(function (person) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Person__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            person: person\n          }, person.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_CreatePerson__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"K7RFYs5F+VDXWg59W5/5aXMiEYM=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSyxJQUFULE9BQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTOztBQUNyQyxrQkFBNEJOLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9PLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUE0Q1IsK0NBQVEsQ0FBQ00sTUFBRCxDQUFwRDtBQUFBLE1BQU9HLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMxQ0YsSUFBQUEsaUJBQWlCLENBQUNKLE1BQUQsQ0FBakI7QUFDQU8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkwsY0FBdkI7QUFFQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFDQUosSUFBQUEsU0FBUyxDQUFDSSxXQUFELENBQVQ7QUFDQSxRQUFNRyxRQUFRLEdBQUdOLGNBQWMsQ0FBQ0YsTUFBZixDQUFzQixVQUFBUyxNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDQyxPQUFQLENBQWVDLFdBQWYsR0FBNkJDLE9BQTdCLENBQXFDUCxXQUFyQyxJQUFvRCxDQUFDLENBQXpEO0FBQUEsS0FBNUIsQ0FBakI7QUFFQUYsSUFBQUEsaUJBQWlCLENBQUNLLFFBQUQsQ0FBakI7QUFDQUYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQkwsY0FBcEI7QUFDRCxHQVZEOztBQVlBLHNCQUNFO0FBQUssYUFBUyxFQUFFUCwwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBTUU7QUFBSyxlQUFTLEVBQUVBLDhFQUFoQjtBQUFBLDhCQUNFO0FBQU0saUJBQVMsRUFBRUEscUVBQWpCO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDQTtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFLLEVBQUVLLE1BRlQ7QUFHRSxvQkFBUSxFQUFFLGtCQUFDZ0IsQ0FBRDtBQUFBLHFCQUFLWixrQkFBa0IsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBdkI7QUFBQSxhQUhaO0FBSUUscUJBQVMsRUFBRXZCLHNFQUpiO0FBS0csdUJBQVcsRUFBQztBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkYsRUFhR08sY0FiSCxhQWFHQSxjQWJILHVCQWFHQSxjQUFjLENBQUVrQixHQUFoQixDQUFxQixVQUFBWCxNQUFNO0FBQUEsOEJBQzFCLDhEQUFDLDBEQUFEO0FBQXdCLGtCQUFNLEVBQUVBO0FBQWhDLGFBQWFBLE1BQU0sQ0FBQ1ksRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEMEI7QUFBQSxTQUEzQixDQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBa0JFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBN0N1QnZCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vY29tcG9uZW50cy9QZXJzb24nO1xyXG5pbXBvcnQgQ3JlYXRlUGVyc29uIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlUGVyc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3Blb3BsZX0pIHtcclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwZW9wbGVGaWx0ZXJlZCwgc2V0UGVvcGxlRmlsdGVyZWRdID0gdXNlU3RhdGUocGVvcGxlKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlTGlzdEJ5RmlsdGVyID0gKGZpbHRlclZhbHVlKSA9PiB7XHJcbiAgICBzZXRQZW9wbGVGaWx0ZXJlZChwZW9wbGUpO1xyXG4gICAgY29uc29sZS5sb2coJ1tBTlRFU10nLCBwZW9wbGVGaWx0ZXJlZCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyVmFsdWUpO1xyXG4gICAgc2V0RmlsdGVyKGZpbHRlclZhbHVlKTtcclxuICAgIGNvbnN0IHRlbXBMaXN0ID0gcGVvcGxlRmlsdGVyZWQuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uU3R1ZGVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID4gLTEpO1xyXG5cclxuICAgIHNldFBlb3BsZUZpbHRlcmVkKHRlbXBMaXN0KTtcclxuICAgIGNvbnNvbGUubG9nKCdbRFBTXScscGVvcGxlRmlsdGVyZWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlVuaXZlcnNpdHkgU3R1ZGVudHM8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lck1haW59PlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXJ9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpPT51cGRhdGVMaXN0QnlGaWx0ZXIoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBieSBuYW1lXCJcclxuICAgICAgICAgIC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgICAgICAgIDxoMT5Vc2VyIExpc3Q8L2gxPlxyXG4gICAgICAgICAge3Blb3BsZUZpbHRlcmVkPy5tYXAoIHBlcnNvbiA9PiAoXHJcbiAgICAgICAgICAgIDxQZXJzb24ga2V5PXtwZXJzb24uaWR9IHBlcnNvbj17cGVyc29ufS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPENyZWF0ZVBlcnNvbiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vcmV0b29sYXBpLmRldi9wdFQ0SWIvZGF0YScpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge3Blb3BsZTpkYXRhLnJldmVyc2UoKX0sXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsInN0eWxlcyIsIlBlcnNvbiIsIkNyZWF0ZVBlcnNvbiIsIkhvbWUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJwZW9wbGVGaWx0ZXJlZCIsInNldFBlb3BsZUZpbHRlcmVkIiwidXBkYXRlTGlzdEJ5RmlsdGVyIiwiZmlsdGVyVmFsdWUiLCJjb25zb2xlIiwibG9nIiwidGVtcExpc3QiLCJwZXJzb24iLCJTdHVkZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY29udGFpbmVyIiwiY29udGFpbmVyTWFpbiIsIm1haW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});