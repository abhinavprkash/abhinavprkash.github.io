"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/work",{

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import { format, intervalToDuration, parseISO } from 'date-fns'\n// import { AnimateSharedLayout } from 'framer-motion'\n// import Head from 'next/head'\n// import React from 'react'\n// import { Box } from '../components/Box'\n// import FeaturedWork from '../components/FeaturedWork'\n// import awards from '../data/awards'\n// import items from '../data/work'\n// import Base from '../layouts/Base'\n// import stripHtml from '../lib/strip-html'\n// export async function getStaticProps() {\n//   const meta = {\n//     title: 'Work // Parth Desai',\n//     tagline: 'Architect. Scale. Transform.',\n//     image: '/static/images/work-bw.jpg',\n//     primaryColor: 'purple',\n//     secondaryColor: 'cyan',\n//   }\n//   return { props: meta }\n// }\n// function Work(props) {\n//   const renderFeatured = () => {\n//     const featured = [\n//       { jobTitle: 'Data Engineer Intern', company: 'Glassdoor' },\n//       { jobTitle: 'Data Engineer', company: 'Accenture Strategy & Consulting' },\n//       {\n//         jobTitle: 'Data Engineer Intern',\n//         company: 'Accenture Strategy & Consulting',\n//       },\n//     ]\n//     return items\n//       .filter(work =>\n//         featured.some(\n//           f => f.jobTitle === work.jobTitle && f.company === work.company\n//         )\n//       )\n//       .map((work, index) => {\n//         return <FeaturedWork key={index} work={work} />\n//       })\n//   }\n//   const renderAll = () => {\n//     return items.map((work, index) => {\n//       return <WorkItem key={index} work={work} />\n//     })\n//   }\n//   const renderAwards = () => {\n//     return awards.map((item, index) => {\n//       return (\n//         <div key={index}>\n//           <h3>{item.year}</h3>\n//           {item.award.map((award, tIndex) => {\n//             return <AwardItem key={tIndex} item={award} />\n//           })}\n//         </div>\n//       )\n//     })\n//   }\n//   const getTotalWork = () => {\n//     return items.length\n//   }\n//   const { title, image } = props\n//   const description = `My journey with Big Data began in 2022, and I instantly fell in love with <strong>Data Engineering</strong>. Since then, I've dedicated myself to working with data at every opportunity, accumulating <strong>${getTotalWork()} stints</strong> of hands-on experience. Want me to work with you? <a href=\"https://www.parthdesai.site/contact\" target=\"_blank\">Let's connect!</a>`\n//   return (\n//     <>\n//       <Head>\n//         <title>{title}</title>\n//         <meta content={title} property=\"og:title\" />\n//         <meta content={stripHtml(description)} name=\"description\" />\n//         <meta content={stripHtml(description)} property=\"og:description\" />\n//         <meta content=\"https://parthdesai.site/work\" property=\"og:url\" />\n//         <meta content={`https://parthdesai.site${image}`} property=\"og:image\" />\n//       </Head>\n//       <AnimateSharedLayout>\n//         <p dangerouslySetInnerHTML={{ __html: description }} />\n//         <h2>Featured Work</h2>\n//         <Box css={{ margin: '10px 0 0 -20px' }}>{renderFeatured()}</Box>\n//         <h2>All Work</h2>\n//         {renderAll()}\n//         <h2>Awards</h2>\n//         {renderAwards()}\n//       </AnimateSharedLayout>\n//     </>\n//   )\n// }\n// function WorkItem(props) {\n//   const { work } = props\n//   const getDuration = (startDate, endDate) => {\n//     const durationObj = intervalToDuration({\n//       start: parseISO(startDate),\n//       end: endDate ? parseISO(endDate) : new Date(),\n//     })\n//     let durationStr = ''\n//     if (durationObj.years > 1) {\n//       durationStr = `${durationObj.years} yrs `\n//     } else if (durationObj.years === 1) {\n//       durationStr = `${durationObj.years} yr `\n//     }\n//     durationStr += `${durationObj.months} mos`\n//     return durationStr\n//   }\n//   return (\n//     <div>\n//       <h3>{work.jobTitle}</h3>\n//       <p style={{ margin: 0 }}>\n//         <a href={work.companyUrl} target=\"_blank\">\n//           {work.company}\n//         </a>\n//         <span> • {work.location}</span>\n//       </p>\n//       <p style={{ margin: 0 }}>\n//         <span>{format(parseISO(work.startDate), 'LLL yyyy')}</span>\n//         <span> – </span>\n//         <span>\n//           {work.endDate\n//             ? format(parseISO(work.endDate), 'LLL yyyy')\n//             : 'Present'}\n//         </span>\n//         <span> • </span>\n//         <span>{getDuration(work.startDate, work.endDate)}</span>\n//       </p>\n//       <ul>\n//         {work.description &&\n//           work.description.map((desc, index) => <li key={index}>{desc}</li>)}\n//       </ul>\n//     </div>\n//   )\n// }\n// function AwardItem(props) {\n//   const { item } = props\n//   return (\n//     <div>\n//       <h3>\n//         <a href={item.url} target=\"_blank\">\n//           {item.title}\n//         </a>\n//       </h3>\n//       <ul>\n//         <li>\n//           When: {format(parseISO(item.date), 'LLLL, d')}\n//         </li>\n//         <li>\n//           By: {item.by}\n//         </li>\n//         <li>\n//           Summary: {item.summary}\n//         </li>\n//       </ul>\n//     </div>\n//   )\n// }\n// Work.Layout = Base\n// export default Work\n\n\nfunction WorkInProgress() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\",\n            padding: \"50px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Work in Progress\"\n            }, void 0, false, {\n                fileName: \"/Users/abhinavprakash/Desktop/abhinavprkash.github.io/pages/work.js\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"We are currently updating this page. Please check back soon!\"\n            }, void 0, false, {\n                fileName: \"/Users/abhinavprakash/Desktop/abhinavprkash.github.io/pages/work.js\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhinavprakash/Desktop/abhinavprkash.github.io/pages/work.js\",\n        lineNumber: 182,\n        columnNumber: 5\n    }, this);\n}\n_c = WorkInProgress;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkInProgress);\nvar _c;\n$RefreshReg$(_c, \"WorkInProgress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2Ysb0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsYUFBYTtBQUNiLE1BQU07QUFDTixJQUFJO0FBRUoscUJBQXFCO0FBRXJCLHNCQUFzQjtBQUV0QjtBQUEwQjtBQUUxQixTQUFTQyxjQUFjLEdBQUc7SUFDeEIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsS0FBSyxFQUFFO1lBQUVDLFNBQVMsRUFBRSxRQUFRO1lBQUVDLE9BQU8sRUFBRSxNQUFNO1NBQUU7OzBCQUNsRCw4REFBQ0MsSUFBRTswQkFBQyxrQkFBZ0I7Ozs7O29CQUFLOzBCQUN6Qiw4REFBQ0MsR0FBQzswQkFBQyw4REFBNEQ7Ozs7O29CQUFJOzs7Ozs7WUFDL0QsQ0FDTjtBQUNKLENBQUM7QUFQUU4sS0FBQUEsY0FBYztBQVN2QiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dvcmsuanM/Mjc5MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBmb3JtYXQsIGludGVydmFsVG9EdXJhdGlvbiwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucydcbi8vIGltcG9ydCB7IEFuaW1hdGVTaGFyZWRMYXlvdXQgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb3gnXG4vLyBpbXBvcnQgRmVhdHVyZWRXb3JrIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZWRXb3JrJ1xuLy8gaW1wb3J0IGF3YXJkcyBmcm9tICcuLi9kYXRhL2F3YXJkcydcbi8vIGltcG9ydCBpdGVtcyBmcm9tICcuLi9kYXRhL3dvcmsnXG4vLyBpbXBvcnQgQmFzZSBmcm9tICcuLi9sYXlvdXRzL0Jhc2UnXG4vLyBpbXBvcnQgc3RyaXBIdG1sIGZyb20gJy4uL2xpYi9zdHJpcC1odG1sJ1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIGNvbnN0IG1ldGEgPSB7XG4vLyAgICAgdGl0bGU6ICdXb3JrIC8vIFBhcnRoIERlc2FpJyxcbi8vICAgICB0YWdsaW5lOiAnQXJjaGl0ZWN0LiBTY2FsZS4gVHJhbnNmb3JtLicsXG4vLyAgICAgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy93b3JrLWJ3LmpwZycsXG4vLyAgICAgcHJpbWFyeUNvbG9yOiAncHVycGxlJyxcbi8vICAgICBzZWNvbmRhcnlDb2xvcjogJ2N5YW4nLFxuLy8gICB9XG5cbi8vICAgcmV0dXJuIHsgcHJvcHM6IG1ldGEgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBXb3JrKHByb3BzKSB7XG4vLyAgIGNvbnN0IHJlbmRlckZlYXR1cmVkID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IGZlYXR1cmVkID0gW1xuLy8gICAgICAgeyBqb2JUaXRsZTogJ0RhdGEgRW5naW5lZXIgSW50ZXJuJywgY29tcGFueTogJ0dsYXNzZG9vcicgfSxcbi8vICAgICAgIHsgam9iVGl0bGU6ICdEYXRhIEVuZ2luZWVyJywgY29tcGFueTogJ0FjY2VudHVyZSBTdHJhdGVneSAmIENvbnN1bHRpbmcnIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGpvYlRpdGxlOiAnRGF0YSBFbmdpbmVlciBJbnRlcm4nLFxuLy8gICAgICAgICBjb21wYW55OiAnQWNjZW50dXJlIFN0cmF0ZWd5ICYgQ29uc3VsdGluZycsXG4vLyAgICAgICB9LFxuLy8gICAgIF1cblxuLy8gICAgIHJldHVybiBpdGVtc1xuLy8gICAgICAgLmZpbHRlcih3b3JrID0+XG4vLyAgICAgICAgIGZlYXR1cmVkLnNvbWUoXG4vLyAgICAgICAgICAgZiA9PiBmLmpvYlRpdGxlID09PSB3b3JrLmpvYlRpdGxlICYmIGYuY29tcGFueSA9PT0gd29yay5jb21wYW55XG4vLyAgICAgICAgIClcbi8vICAgICAgIClcbi8vICAgICAgIC5tYXAoKHdvcmssIGluZGV4KSA9PiB7XG4vLyAgICAgICAgIHJldHVybiA8RmVhdHVyZWRXb3JrIGtleT17aW5kZXh9IHdvcms9e3dvcmt9IC8+XG4vLyAgICAgICB9KVxuLy8gICB9XG5cbi8vICAgY29uc3QgcmVuZGVyQWxsID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiBpdGVtcy5tYXAoKHdvcmssIGluZGV4KSA9PiB7XG4vLyAgICAgICByZXR1cm4gPFdvcmtJdGVtIGtleT17aW5kZXh9IHdvcms9e3dvcmt9IC8+XG4vLyAgICAgfSlcbi8vICAgfVxuXG4vLyAgIGNvbnN0IHJlbmRlckF3YXJkcyA9ICgpID0+IHtcbi8vICAgICByZXR1cm4gYXdhcmRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbi8vICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4vLyAgICAgICAgICAgPGgzPntpdGVtLnllYXJ9PC9oMz5cbi8vICAgICAgICAgICB7aXRlbS5hd2FyZC5tYXAoKGF3YXJkLCB0SW5kZXgpID0+IHtcbi8vICAgICAgICAgICAgIHJldHVybiA8QXdhcmRJdGVtIGtleT17dEluZGV4fSBpdGVtPXthd2FyZH0gLz5cbi8vICAgICAgICAgICB9KX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICApXG4vLyAgICAgfSlcbi8vICAgfVxuXG4vLyAgIGNvbnN0IGdldFRvdGFsV29yayA9ICgpID0+IHtcbi8vICAgICByZXR1cm4gaXRlbXMubGVuZ3RoXG4vLyAgIH1cblxuLy8gICBjb25zdCB7IHRpdGxlLCBpbWFnZSB9ID0gcHJvcHNcbi8vICAgY29uc3QgZGVzY3JpcHRpb24gPSBgTXkgam91cm5leSB3aXRoIEJpZyBEYXRhIGJlZ2FuIGluIDIwMjIsIGFuZCBJIGluc3RhbnRseSBmZWxsIGluIGxvdmUgd2l0aCA8c3Ryb25nPkRhdGEgRW5naW5lZXJpbmc8L3N0cm9uZz4uIFNpbmNlIHRoZW4sIEkndmUgZGVkaWNhdGVkIG15c2VsZiB0byB3b3JraW5nIHdpdGggZGF0YSBhdCBldmVyeSBvcHBvcnR1bml0eSwgYWNjdW11bGF0aW5nIDxzdHJvbmc+JHtnZXRUb3RhbFdvcmsoKX0gc3RpbnRzPC9zdHJvbmc+IG9mIGhhbmRzLW9uIGV4cGVyaWVuY2UuIFdhbnQgbWUgdG8gd29yayB3aXRoIHlvdT8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBhcnRoZGVzYWkuc2l0ZS9jb250YWN0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGV0J3MgY29ubmVjdCE8L2E+YFxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxIZWFkPlxuLy8gICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4vLyAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgLz5cbi8vICAgICAgICAgPG1ldGEgY29udGVudD17c3RyaXBIdG1sKGRlc2NyaXB0aW9uKX0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbi8vICAgICAgICAgPG1ldGEgY29udGVudD17c3RyaXBIdG1sKGRlc2NyaXB0aW9uKX0gcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIC8+XG4vLyAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJodHRwczovL3BhcnRoZGVzYWkuc2l0ZS93b3JrXCIgcHJvcGVydHk9XCJvZzp1cmxcIiAvPlxuLy8gICAgICAgICA8bWV0YSBjb250ZW50PXtgaHR0cHM6Ly9wYXJ0aGRlc2FpLnNpdGUke2ltYWdlfWB9IHByb3BlcnR5PVwib2c6aW1hZ2VcIiAvPlxuLy8gICAgICAgPC9IZWFkPlxuXG4vLyAgICAgICA8QW5pbWF0ZVNoYXJlZExheW91dD5cbi8vICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fSAvPlxuXG4vLyAgICAgICAgIDxoMj5GZWF0dXJlZCBXb3JrPC9oMj5cbi8vICAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luOiAnMTBweCAwIDAgLTIwcHgnIH19PntyZW5kZXJGZWF0dXJlZCgpfTwvQm94PlxuXG4vLyAgICAgICAgIDxoMj5BbGwgV29yazwvaDI+XG4vLyAgICAgICAgIHtyZW5kZXJBbGwoKX1cblxuLy8gICAgICAgICA8aDI+QXdhcmRzPC9oMj5cbi8vICAgICAgICAge3JlbmRlckF3YXJkcygpfVxuLy8gICAgICAgPC9BbmltYXRlU2hhcmVkTGF5b3V0PlxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIFdvcmtJdGVtKHByb3BzKSB7XG4vLyAgIGNvbnN0IHsgd29yayB9ID0gcHJvcHNcblxuLy8gICBjb25zdCBnZXREdXJhdGlvbiA9IChzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbi8vICAgICBjb25zdCBkdXJhdGlvbk9iaiA9IGludGVydmFsVG9EdXJhdGlvbih7XG4vLyAgICAgICBzdGFydDogcGFyc2VJU08oc3RhcnREYXRlKSxcbi8vICAgICAgIGVuZDogZW5kRGF0ZSA/IHBhcnNlSVNPKGVuZERhdGUpIDogbmV3IERhdGUoKSxcbi8vICAgICB9KVxuXG4vLyAgICAgbGV0IGR1cmF0aW9uU3RyID0gJydcblxuLy8gICAgIGlmIChkdXJhdGlvbk9iai55ZWFycyA+IDEpIHtcbi8vICAgICAgIGR1cmF0aW9uU3RyID0gYCR7ZHVyYXRpb25PYmoueWVhcnN9IHlycyBgXG4vLyAgICAgfSBlbHNlIGlmIChkdXJhdGlvbk9iai55ZWFycyA9PT0gMSkge1xuLy8gICAgICAgZHVyYXRpb25TdHIgPSBgJHtkdXJhdGlvbk9iai55ZWFyc30geXIgYFxuLy8gICAgIH1cblxuLy8gICAgIGR1cmF0aW9uU3RyICs9IGAke2R1cmF0aW9uT2JqLm1vbnRoc30gbW9zYFxuXG4vLyAgICAgcmV0dXJuIGR1cmF0aW9uU3RyXG4vLyAgIH1cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aDM+e3dvcmsuam9iVGl0bGV9PC9oMz5cbi8vICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cbi8vICAgICAgICAgPGEgaHJlZj17d29yay5jb21wYW55VXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbi8vICAgICAgICAgICB7d29yay5jb21wYW55fVxuLy8gICAgICAgICA8L2E+XG4vLyAgICAgICAgIDxzcGFuPiDigKIge3dvcmsubG9jYXRpb259PC9zcGFuPlxuLy8gICAgICAgPC9wPlxuLy8gICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlxuLy8gICAgICAgICA8c3Bhbj57Zm9ybWF0KHBhcnNlSVNPKHdvcmsuc3RhcnREYXRlKSwgJ0xMTCB5eXl5Jyl9PC9zcGFuPlxuLy8gICAgICAgICA8c3Bhbj4g4oCTIDwvc3Bhbj5cbi8vICAgICAgICAgPHNwYW4+XG4vLyAgICAgICAgICAge3dvcmsuZW5kRGF0ZVxuLy8gICAgICAgICAgICAgPyBmb3JtYXQocGFyc2VJU08od29yay5lbmREYXRlKSwgJ0xMTCB5eXl5Jylcbi8vICAgICAgICAgICAgIDogJ1ByZXNlbnQnfVxuLy8gICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgIDxzcGFuPiDigKIgPC9zcGFuPlxuLy8gICAgICAgICA8c3Bhbj57Z2V0RHVyYXRpb24od29yay5zdGFydERhdGUsIHdvcmsuZW5kRGF0ZSl9PC9zcGFuPlxuLy8gICAgICAgPC9wPlxuLy8gICAgICAgPHVsPlxuLy8gICAgICAgICB7d29yay5kZXNjcmlwdGlvbiAmJlxuLy8gICAgICAgICAgIHdvcmsuZGVzY3JpcHRpb24ubWFwKChkZXNjLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PntkZXNjfTwvbGk+KX1cbi8vICAgICAgIDwvdWw+XG4vLyAgICAgPC9kaXY+XG4vLyAgIClcbi8vIH1cblxuLy8gZnVuY3Rpb24gQXdhcmRJdGVtKHByb3BzKSB7XG4vLyAgIGNvbnN0IHsgaXRlbSB9ID0gcHJvcHNcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aDM+XG4vLyAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbi8vICAgICAgICAgICB7aXRlbS50aXRsZX1cbi8vICAgICAgICAgPC9hPlxuLy8gICAgICAgPC9oMz5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgIFdoZW46IHtmb3JtYXQocGFyc2VJU08oaXRlbS5kYXRlKSwgJ0xMTEwsIGQnKX1cbi8vICAgICAgICAgPC9saT5cbi8vICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgIEJ5OiB7aXRlbS5ieX1cbi8vICAgICAgICAgPC9saT5cbi8vICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgIFN1bW1hcnk6IHtpdGVtLnN1bW1hcnl9XG4vLyAgICAgICAgIDwvbGk+XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvZGl2PlxuLy8gICApXG4vLyB9XG5cbi8vIFdvcmsuTGF5b3V0ID0gQmFzZVxuXG4vLyBleHBvcnQgZGVmYXVsdCBXb3JrXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFdvcmtJblByb2dyZXNzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzUwcHgnIH19PlxuICAgICAgPGgxPldvcmsgaW4gUHJvZ3Jlc3M8L2gxPlxuICAgICAgPHA+V2UgYXJlIGN1cnJlbnRseSB1cGRhdGluZyB0aGlzIHBhZ2UuIFBsZWFzZSBjaGVjayBiYWNrIHNvb24hPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrSW5Qcm9ncmVzczsiXSwibmFtZXMiOlsiUmVhY3QiLCJXb3JrSW5Qcm9ncmVzcyIsImRpdiIsInN0eWxlIiwidGV4dEFsaWduIiwicGFkZGluZyIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/work.js\n"));

/***/ })

});