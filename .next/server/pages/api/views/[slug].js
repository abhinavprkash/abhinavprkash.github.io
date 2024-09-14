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
exports.id = "pages/api/views/[slug]";
exports.ids = ["pages/api/views/[slug]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLEVBQUU7QUFDRixjQUFjO0FBQ2QsZ0RBQWdEO0FBRWhELElBQUlDLE1BQU07QUFFVixJQUFJQyxLQUFxQyxFQUFFLEVBRTFDLE1BQU07SUFDTCxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsTUFBTSxFQUFFO1FBQ2xCRSxNQUFNLENBQUNGLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0tBQ25DO0lBQ0RDLE1BQU0sR0FBR0UsTUFBTSxDQUFDRixNQUFNO0NBQ3ZCO0FBRUQsaUVBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BYmhpbmF2LVByYWthc2gtYmxvZy8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxuLy8gZXhoYXVzdGluZyB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gbGltaXQuXG4vL1xuLy8gTGVhcm4gbW9yZTpcbi8vIGh0dHBzOi8vcHJpcy5seS9kL2hlbHAvbmV4dC1qcy1iZXN0LXByYWN0aWNlc1xuXG5sZXQgcHJpc21hXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWFcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/views/[slug].js":
/*!***********************************!*\
  !*** ./pages/api/views/[slug].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    try {\n        const slug = req.query.slug.toString();\n        if (req.method === \"POST\") {\n            const newOrUpdatedViews = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].views.upsert({\n                where: {\n                    slug\n                },\n                create: {\n                    slug\n                },\n                update: {\n                    count: {\n                        increment: 1\n                    }\n                }\n            });\n            return res.status(200).json({\n                total: newOrUpdatedViews.count.toString()\n            });\n        }\n        if (req.method === \"GET\") {\n            var ref, ref1;\n            const views = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].views.findUnique({\n                where: {\n                    slug\n                }\n            });\n            return res.status(200).json({\n                total: (views === null || views === void 0 ? void 0 : (ref = views.count) === null || ref === void 0 ? void 0 : (ref1 = ref.toString) === null || ref1 === void 0 ? void 0 : ref1.call(ref)) || 0\n            });\n        }\n    } catch (e) {\n        return res.status(500).json({\n            message: e.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmlld3MvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRWhCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE1BQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNELElBQUksQ0FBQ0UsUUFBUSxFQUFFO1FBRXRDLElBQUlKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUN6QixNQUFNQyxpQkFBaUIsR0FBRyxNQUFNUiwrREFBbUIsQ0FBQztnQkFDbERXLEtBQUssRUFBRTtvQkFBRVAsSUFBSTtpQkFBRTtnQkFDZlEsTUFBTSxFQUFFO29CQUNOUixJQUFJO2lCQUNMO2dCQUNEUyxNQUFNLEVBQUU7b0JBQ05DLEtBQUssRUFBRTt3QkFDTEMsU0FBUyxFQUFFLENBQUM7cUJBQ2I7aUJBQ0Y7YUFDRixDQUFDO1lBRUYsT0FBT1osR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDMUJDLEtBQUssRUFBRVYsaUJBQWlCLENBQUNNLEtBQUssQ0FBQ1IsUUFBUSxFQUFFO2FBQzFDLENBQUM7U0FDSDtRQUVELElBQUlKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFPYUUsR0FBWTtZQU5qRCxNQUFNQSxLQUFLLEdBQUcsTUFBTVQsbUVBQXVCLENBQUM7Z0JBQzFDVyxLQUFLLEVBQUU7b0JBQ0xQLElBQUk7aUJBQ0w7YUFDRixDQUFDO1lBRUYsT0FBT0QsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFVCxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBTyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLEdBQVksR0FBWkEsS0FBSyxDQUFFSyxLQUFLLGNBQVpMLEdBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxRQUFBQSxHQUFZLENBQUVILFFBQVEsNkJBQUksR0FBMUJHLEtBQUFBLENBQTBCLEdBQTFCQSxLQUFBQSxJQUEwQixDQUExQkEsR0FBWSxDQUFjLEtBQUksQ0FBQzthQUFFLENBQUM7U0FDeEU7S0FDRixDQUFDLE9BQU9XLENBQUMsRUFBRTtRQUNWLE9BQU9qQixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVJLE9BQU8sRUFBRUQsQ0FBQyxDQUFDQyxPQUFPO1NBQUUsQ0FBQztLQUNwRDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQWJoaW5hdi1QcmFrYXNoLWJsb2cvLi9wYWdlcy9hcGkvdmlld3MvW3NsdWddLmpzPzhiNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICdsaWIvcHJpc21hJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2x1ZyA9IHJlcS5xdWVyeS5zbHVnLnRvU3RyaW5nKClcblxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIGNvbnN0IG5ld09yVXBkYXRlZFZpZXdzID0gYXdhaXQgcHJpc21hLnZpZXdzLnVwc2VydCh7XG4gICAgICAgIHdoZXJlOiB7IHNsdWcgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgc2x1ZyxcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgIGluY3JlbWVudDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgdG90YWw6IG5ld09yVXBkYXRlZFZpZXdzLmNvdW50LnRvU3RyaW5nKCksXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgY29uc3Qgdmlld3MgPSBhd2FpdCBwcmlzbWEudmlld3MuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgc2x1ZyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRvdGFsOiB2aWV3cz8uY291bnQ/LnRvU3RyaW5nPy4oKSB8fCAwIH0pXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZS5tZXNzYWdlIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2x1ZyIsInF1ZXJ5IiwidG9TdHJpbmciLCJtZXRob2QiLCJuZXdPclVwZGF0ZWRWaWV3cyIsInZpZXdzIiwidXBzZXJ0Iiwid2hlcmUiLCJjcmVhdGUiLCJ1cGRhdGUiLCJjb3VudCIsImluY3JlbWVudCIsInN0YXR1cyIsImpzb24iLCJ0b3RhbCIsImZpbmRVbmlxdWUiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/views/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/views/[slug].js"));
module.exports = __webpack_exports__;

})();