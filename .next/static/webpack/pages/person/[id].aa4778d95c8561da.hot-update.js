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

/***/ "./components/Person.js":
/*!******************************!*\
  !*** ./components/Person.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Person; }\n/* harmony export */ });\n/* harmony import */ var C_Users_usuario_Desktop_nextPrueba_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_usuario_Desktop_nextPrueba_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_usuario_Desktop_nextPrueba_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_usuario_Desktop_nextPrueba_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"C:\\\\Users\\\\usuario\\\\Desktop\\\\nextPrueba\\\\components\\\\Person.js\";\n\n\n\n\n\n\n\nfunction Person(_ref) {\n  var person = _ref.person,\n      details = _ref.details,\n      setUserSelected = _ref.setUserSelected;\n  var id = person.id,\n      City = person.City,\n      Student = person.Student,\n      Industry = person.Industry,\n      Interest = person.Interest;\n\n  var deleteHandle = /*#__PURE__*/function () {\n    var _ref2 = (0,C_Users_usuario_Desktop_nextPrueba_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_usuario_Desktop_nextPrueba_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(idUser) {\n      var url, response;\n      return C_Users_usuario_Desktop_nextPrueba_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('delete ' + idUser);\n              url = \"https://retoolapi.dev/ptT4Ib/data/\".concat(idUser);\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default()[\"delete\"](url);\n\n            case 4:\n              response = _context.sent;\n              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function deleteHandle(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().containerPerson),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      children: Student\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), details ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n        children: City\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        children: Industry\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        children: Interest\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"actions\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/person/[id]\",\n        as: \"/person/\".concat(id),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n          children: \"ver m\\xE1s\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return deleteHandle(id);\n        },\n        children: \"Delete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return setUserSelected(person);\n        },\n        children: \"EDITAR\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n_c = Person;\n\nvar _c;\n\n$RefreshReg$(_c, \"Person\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BlcnNvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSSxNQUFULE9BQXVEO0FBQUEsTUFBckNDLE1BQXFDLFFBQXJDQSxNQUFxQztBQUFBLE1BQTdCQyxPQUE2QixRQUE3QkEsT0FBNkI7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1CO0FBQ3BFLE1BQVFDLEVBQVIsR0FBa0RILE1BQWxELENBQVFHLEVBQVI7QUFBQSxNQUFZQyxJQUFaLEdBQWtESixNQUFsRCxDQUFZSSxJQUFaO0FBQUEsTUFBa0JDLE9BQWxCLEdBQWtETCxNQUFsRCxDQUFrQkssT0FBbEI7QUFBQSxNQUEyQkMsUUFBM0IsR0FBa0ROLE1BQWxELENBQTJCTSxRQUEzQjtBQUFBLE1BQXFDQyxRQUFyQyxHQUFrRFAsTUFBbEQsQ0FBcUNPLFFBQXJDOztBQUVBLE1BQU1DLFlBQVk7QUFBQSxpVUFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVlGLE1BQXhCO0FBQ01HLGNBQUFBLEdBRmEsK0NBRTRCSCxNQUY1QjtBQUFBO0FBQUEscUJBR0lkLHNEQUFBLENBQWFpQixHQUFiLENBSEo7O0FBQUE7QUFHYkMsY0FBQUEsUUFIYTtBQUluQmYsY0FBQUEsdURBQUEsQ0FBWSxHQUFaOztBQUptQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaVSxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVFBLHNCQUNFO0FBQUssYUFBUyxFQUFFWCxnRkFBaEI7QUFBQSw0QkFDRTtBQUFBLGdCQUFJUTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHSixPQUFPLGdCQUNOO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0c7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUEsa0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUEsb0JBRE0sZ0JBT047QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsVUFBRSxvQkFBYUosRUFBYixDQUE1QjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBSUssWUFBWSxDQUFDTCxFQUFELENBQWhCO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQUlELGVBQWUsQ0FBQ0YsTUFBRCxDQUFuQjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7S0FsQ3VCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BlcnNvbi5qcz9kZWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uKHsgcGVyc29uLCBkZXRhaWxzLCAgc2V0VXNlclNlbGVjdGVkIH0pIHtcbiAgY29uc3QgeyBpZCwgQ2l0eSwgU3R1ZGVudCwgSW5kdXN0cnksIEludGVyZXN0IH0gPSBwZXJzb247XG5cbiAgY29uc3QgZGVsZXRlSGFuZGxlID0gYXN5bmMgKGlkVXNlcik9PntcbiAgICBjb25zb2xlLmxvZygnZGVsZXRlICcgKyBpZFVzZXIpO1xuICAgIGNvbnN0IHVybD1gaHR0cHM6Ly9yZXRvb2xhcGkuZGV2L3B0VDRJYi9kYXRhLyR7aWRVc2VyfWAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUodXJsKTtcbiAgICBSb3V0ZXIucHVzaCgnLycpO1xuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lclBlcnNvbn0+XG4gICAgICA8cD57U3R1ZGVudH08L3A+XG4gICAgICB7ZGV0YWlscyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDM+e0NpdHl9PC9oMz5cbiAgICAgICAgICA8cD57SW5kdXN0cnl9PC9wPlxuICAgICAgICAgIDxwPntJbnRlcmVzdH08L3A+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbnMnPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGVyc29uL1tpZF1cIiBhcz17YC9wZXJzb24vJHtpZH1gfT5cbiAgICAgICAgICAgIDxhPnZlciBtw6FzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5kZWxldGVIYW5kbGUoaWQpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRVc2VyU2VsZWN0ZWQocGVyc29uKX0+RURJVEFSPC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiTGluayIsInN0eWxlcyIsIlJvdXRlciIsIlBlcnNvbiIsInBlcnNvbiIsImRldGFpbHMiLCJzZXRVc2VyU2VsZWN0ZWQiLCJpZCIsIkNpdHkiLCJTdHVkZW50IiwiSW5kdXN0cnkiLCJJbnRlcmVzdCIsImRlbGV0ZUhhbmRsZSIsImlkVXNlciIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJyZXNwb25zZSIsInB1c2giLCJjb250YWluZXJQZXJzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Person.js\n");

/***/ })

});