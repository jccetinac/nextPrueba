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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Person */ \"./components/Person.js\");\n/* harmony import */ var _components_CreatePerson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreatePerson */ \"./components/CreatePerson.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\usuario\\\\Desktop\\\\nextPrueba\\\\pages\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var people = _ref.people;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      userSelected = _useState[0],\n      setUserSelected = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('j'),\n      filter = _useState2[0],\n      setFilter = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(people),\n      peopleFiltered = _useState3[0],\n      setPeopleFiltered = _useState3[1];\n\n  var updateListByFilter = function updateListByFilter(filterValue) {\n    console.log(filterValue);\n    setFilter(filterValue);\n    var tempList = peopleFiltered.filter(function (person) {\n      return person.name.indexOf(filterValue);\n    });\n    setPeopleFiltered(tempList);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"University Students\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().containerMain),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n          type: \"text\",\n          value: filter,\n          onchange: function onchange(e) {\n            return updateListByFilter(e.target.value);\n          },\n          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n          placeholder: \"search by name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n          children: \"User List\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), peopleFiltered === null || peopleFiltered === void 0 ? void 0 : peopleFiltered.map(function (person) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Person__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            person: person,\n            setUserSelected: setUserSelected\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_CreatePerson__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"2nCH+48LEAXYBjRYcdnLV/xCbHk=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSyxJQUFULE9BQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTOztBQUNyQyxrQkFBd0NOLCtDQUFRLENBQUMsSUFBRCxDQUFoRDtBQUFBLE1BQU9PLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsbUJBQTRCUiwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFBQSxNQUFPUyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBNENWLCtDQUFRLENBQUNNLE1BQUQsQ0FBcEQ7QUFBQSxNQUFPSyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFdBQUQsRUFBaUI7QUFDMUNDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0FBQ0FKLElBQUFBLFNBQVMsQ0FBQ0ksV0FBRCxDQUFUO0FBQ0EsUUFBTUcsUUFBUSxHQUFHTixjQUFjLENBQUNGLE1BQWYsQ0FBc0IsVUFBQVMsTUFBTTtBQUFBLGFBQUlBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxPQUFaLENBQW9CTixXQUFwQixDQUFKO0FBQUEsS0FBNUIsQ0FBakI7QUFDQUYsSUFBQUEsaUJBQWlCLENBQUNLLFFBQUQsQ0FBakI7QUFDRCxHQUxEOztBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFFZiwwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBTUU7QUFBSyxlQUFTLEVBQUVBLDhFQUFoQjtBQUFBLDhCQUNFO0FBQU0saUJBQVMsRUFBRUEscUVBQWpCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGVBQUssRUFBRU8sTUFGVDtBQUdFLGtCQUFRLEVBQUUsa0JBQUNlLENBQUQ7QUFBQSxtQkFBS1gsa0JBQWtCLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXZCO0FBQUEsV0FIWjtBQUlFLG1CQUFTLEVBQUV4QixzRUFKYjtBQUtHLHFCQUFXLEVBQUM7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsRUFVR1MsY0FWSCxhQVVHQSxjQVZILHVCQVVHQSxjQUFjLENBQUVpQixHQUFoQixDQUFxQixVQUFBVixNQUFNO0FBQUEsOEJBQzFCLDhEQUFDLDBEQUFEO0FBQVEsa0JBQU0sRUFBRUEsTUFBaEI7QUFBd0IsMkJBQWUsRUFBRVY7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEMEI7QUFBQSxTQUEzQixDQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZUUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEOztHQXRDdUJIOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vY29tcG9uZW50cy9QZXJzb24nO1xyXG5pbXBvcnQgQ3JlYXRlUGVyc29uIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlUGVyc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3Blb3BsZX0pIHtcclxuICBjb25zdCBbdXNlclNlbGVjdGVkLCBzZXRVc2VyU2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCdqJyk7XHJcbiAgY29uc3QgW3Blb3BsZUZpbHRlcmVkLCBzZXRQZW9wbGVGaWx0ZXJlZF0gPSB1c2VTdGF0ZShwZW9wbGUpO1xyXG5cclxuICBjb25zdCB1cGRhdGVMaXN0QnlGaWx0ZXIgPSAoZmlsdGVyVmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGZpbHRlclZhbHVlKTtcclxuICAgIHNldEZpbHRlcihmaWx0ZXJWYWx1ZSk7XHJcbiAgICBjb25zdCB0ZW1wTGlzdCA9IHBlb3BsZUZpbHRlcmVkLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLm5hbWUuaW5kZXhPZihmaWx0ZXJWYWx1ZSkpO1xyXG4gICAgc2V0UGVvcGxlRmlsdGVyZWQodGVtcExpc3QpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlVuaXZlcnNpdHkgU3R1ZGVudHM8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lck1haW59PlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17ZmlsdGVyfSBcclxuICAgICAgICAgICAgb25jaGFuZ2U9eyhlKT0+dXBkYXRlTGlzdEJ5RmlsdGVyKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggYnkgbmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxoMT5Vc2VyIExpc3Q8L2gxPlxyXG4gICAgICAgICAge3Blb3BsZUZpbHRlcmVkPy5tYXAoIHBlcnNvbiA9PiAoXHJcbiAgICAgICAgICAgIDxQZXJzb24gcGVyc29uPXtwZXJzb259IHNldFVzZXJTZWxlY3RlZD17c2V0VXNlclNlbGVjdGVkfS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPENyZWF0ZVBlcnNvbiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vcmV0b29sYXBpLmRldi9wdFQ0SWIvZGF0YScpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge3Blb3BsZTpkYXRhLnJldmVyc2UoKX0sXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsInN0eWxlcyIsIlBlcnNvbiIsIkNyZWF0ZVBlcnNvbiIsIkhvbWUiLCJwZW9wbGUiLCJ1c2VyU2VsZWN0ZWQiLCJzZXRVc2VyU2VsZWN0ZWQiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJwZW9wbGVGaWx0ZXJlZCIsInNldFBlb3BsZUZpbHRlcmVkIiwidXBkYXRlTGlzdEJ5RmlsdGVyIiwiZmlsdGVyVmFsdWUiLCJjb25zb2xlIiwibG9nIiwidGVtcExpc3QiLCJwZXJzb24iLCJuYW1lIiwiaW5kZXhPZiIsImNvbnRhaW5lciIsImNvbnRhaW5lck1haW4iLCJtYWluIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});