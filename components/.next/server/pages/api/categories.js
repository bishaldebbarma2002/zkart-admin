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
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrR0FBa0c7QUFDN0Q7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXNEO0FBQ3hFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUF5QixFQUFlO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsSUFBSSxDQUFDUyxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQkosU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJJLE9BQU9DLG1CQUFtQixHQUFHSixPQUFPSyxPQUFPO0lBQzdDLENBQUM7SUFDREosZ0JBQWdCRSxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBhcHByb2FjaCBpcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy93aXRoLW1vbmdvZGJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcbmNvbnN0IG9wdGlvbnMgPSB7fVxuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXG59IGVsc2Uge1xuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiTk9ERV9FTlYiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDLGtCQUFrQjtJQUNoQyxJQUFJRCx1RUFBOEIsS0FBSyxHQUFHO1FBQ3hDLE9BQU9BLG9FQUE2QjtJQUN0QyxPQUFPO1FBQ0wsTUFBTUssTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DLE9BQU9SLHVEQUFnQixDQUFDSztJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vbmdvb3NlQ29ubmVjdCgpIHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uLmFzUHJvbWlzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KHVyaSk7XG4gIH1cbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Admin.js":
/*!*************************!*\
  !*** ./models/Admin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Admin\": () => (/* binding */ Admin)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst adminSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    }\n}, {\n    timestamps: true\n});\nconst Admin = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models === null || mongoose__WEBPACK_IMPORTED_MODULE_0__.models === void 0 ? void 0 : mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Admin) || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Admin\", adminSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQWRtaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DLE1BQU1HLGNBQWMsSUFBSUQsNENBQU1BLENBQUM7SUFDN0JFLE9BQU87UUFBQ0MsTUFBTUM7UUFBUUMsVUFBVSxJQUFJO1FBQUVDLFFBQVEsSUFBSTtJQUFBO0FBQ3BELEdBQUc7SUFBQ0MsWUFBWSxJQUFJO0FBQUE7QUFFYixNQUFNQyxRQUFRVCxDQUFBQSw0Q0FBTUEsYUFBTkEsNENBQU1BLGNBQU5BLEtBQUFBLElBQUFBLGtEQUFhLEtBQUlELCtDQUFLQSxDQUFDLFNBQVNHLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9tb2RlbHMvQWRtaW4uanM/YTgzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vZGVsLCBtb2RlbHMsIFNjaGVtYX0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGFkbWluU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGVtYWlsOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlfSxcbn0sIHt0aW1lc3RhbXBzOiB0cnVlfSk7XG5cbmV4cG9ydCBjb25zdCBBZG1pbiA9IG1vZGVscz8uQWRtaW4gfHwgbW9kZWwoJ0FkbWluJywgYWRtaW5TY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsImFkbWluU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ0aW1lc3RhbXBzIiwiQWRtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Admin.js\n");

/***/ }),

/***/ "(api)/./models/Category.js":
/*!****************************!*\
  !*** ./models/Category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    parent: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"Category\"\n    },\n    properties: [\n        {\n            type: Object\n        }\n    ]\n});\nconst Category = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models === null || mongoose__WEBPACK_IMPORTED_MODULE_0__.models === void 0 ? void 0 : mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Category) || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Category\", CategorySchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlEO0FBRXpELE1BQU1JLGlCQUFpQixJQUFJRCw0Q0FBTUEsQ0FBQztJQUNoQ0UsTUFBTTtRQUFDQyxNQUFLQztRQUFPQyxVQUFTLElBQUk7SUFBQTtJQUNoQ0MsUUFBUTtRQUFDSCxNQUFLTixnRUFBdUI7UUFBRVksS0FBSTtJQUFVO0lBQ3JEQyxZQUFZO1FBQUM7WUFBQ1AsTUFBS1E7UUFBTTtLQUFFO0FBQzdCO0FBRU8sTUFBTUMsV0FBV2IsQ0FBQUEsNENBQU1BLGFBQU5BLDRDQUFNQSxjQUFOQSxLQUFBQSxJQUFBQSxxREFBZ0IsS0FBSUQsK0NBQUtBLENBQUMsWUFBWUcsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vbW9kZWxzL0NhdGVnb3J5LmpzPzRjODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7bW9kZWwsIG1vZGVscywgU2NoZW1hfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgQ2F0ZWdvcnlTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZToge3R5cGU6U3RyaW5nLHJlcXVpcmVkOnRydWV9LFxuICBwYXJlbnQ6IHt0eXBlOm1vbmdvb3NlLlR5cGVzLk9iamVjdElkLCByZWY6J0NhdGVnb3J5J30sXG4gIHByb3BlcnRpZXM6IFt7dHlwZTpPYmplY3R9XVxufSk7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IG1vZGVscz8uQ2F0ZWdvcnkgfHwgbW9kZWwoJ0NhdGVnb3J5JywgQ2F0ZWdvcnlTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiQ2F0ZWdvcnlTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGFyZW50IiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Category.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isAdminRequest\": () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _models_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Admin */ \"(api)/./models/Admin.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\n\n\n\n\nasync function isAdminEmail(email) {\n    (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_5__.mongooseConnect)();\n    return !!await _models_Admin__WEBPACK_IMPORTED_MODULE_4__.Admin.findOne({\n        email\n    });\n}\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    callbacks: {\n        session: async ({ session , token , user  })=>{\n            var _session_user;\n            if (await isAdminEmail(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\nasync function isAdminRequest(req, res) {\n    var _session_user;\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, authOptions);\n    if (!await isAdminEmail(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)) {\n        res.status(401);\n        res.end();\n        throw \"not an admin\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNHO0FBQ0c7QUFDaEI7QUFDTDtBQUNVO0FBRS9DLGVBQWVPLGFBQWFDLEtBQUssRUFBRTtJQUNqQ0YsOERBQWVBO0lBQ2YsT0FBTyxDQUFDLENBQUcsTUFBTUQsd0RBQWEsQ0FBQztRQUFDRztJQUFLO0FBQ3ZDO0FBRU8sTUFBTUUsY0FBYztJQUN6QkMsV0FBVztRQUNUVCxpRUFBY0EsQ0FBQztZQUNiVSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUN6QztLQUNEO0lBQ0RDLFNBQVNmLDBFQUFjQSxDQUFDQyxvREFBYUE7SUFDckNlLFdBQVc7UUFDVEMsU0FBUyxPQUFPLEVBQUNBLFFBQU8sRUFBQ0MsTUFBSyxFQUFDQyxLQUFJLEVBQUMsR0FBSztnQkFDaEJGO1lBQXZCLElBQUksTUFBTWIsYUFBYWEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxnQkFBQUEsUUFBU0UsSUFBSSxjQUFiRiwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZVosS0FBRixHQUFVO2dCQUM1QyxPQUFPWTtZQUNULE9BQU87Z0JBQ0wsT0FBTyxLQUFLO1lBQ2QsQ0FBQztRQUNIO0lBQ0Y7QUFDRixFQUFFO0FBRUYsaUVBQWVwQixnREFBUUEsQ0FBQ1UsWUFBWUEsRUFBQztBQUU5QixlQUFlYSxlQUFlQyxHQUFHLEVBQUNDLEdBQUcsRUFBRTtRQUVuQkw7SUFEekIsTUFBTUEsVUFBVSxNQUFNbkIsMkRBQWdCQSxDQUFDdUIsS0FBSUMsS0FBSWY7SUFDL0MsSUFBSSxDQUFFLE1BQU1ILGFBQWFhLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsZ0JBQUFBLFFBQVNFLElBQUksY0FBYkYsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVaLEtBQUYsR0FBVztRQUMvQ2lCLElBQUlDLE1BQU0sQ0FBQztRQUNYRCxJQUFJRSxHQUFHO1FBQ1AsTUFBTSxlQUFlO0lBQ3ZCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwge2dldFNlcnZlclNlc3Npb259IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcbmltcG9ydCB7TW9uZ29EQkFkYXB0ZXJ9IGZyb20gXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCB7QWRtaW59IGZyb20gXCJAL21vZGVscy9BZG1pblwiO1xuaW1wb3J0IHttb25nb29zZUNvbm5lY3R9IGZyb20gJ0AvbGliL21vbmdvb3NlJztcblxuYXN5bmMgZnVuY3Rpb24gaXNBZG1pbkVtYWlsKGVtYWlsKSB7XG4gIG1vbmdvb3NlQ29ubmVjdCgpO1xuICByZXR1cm4gISEgKGF3YWl0IEFkbWluLmZpbmRPbmUoe2VtYWlsfSkpO1xufVxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVRcbiAgICB9KSxcbiAgXSxcbiAgYWRhcHRlcjogTW9uZ29EQkFkYXB0ZXIoY2xpZW50UHJvbWlzZSksXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb246IGFzeW5jICh7c2Vzc2lvbix0b2tlbix1c2VyfSkgPT4ge1xuICAgICAgaWYgKGF3YWl0IGlzQWRtaW5FbWFpbChzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQWRtaW5SZXF1ZXN0KHJlcSxyZXMpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24ocmVxLHJlcyxhdXRoT3B0aW9ucyk7XG4gIGlmICghKGF3YWl0IGlzQWRtaW5FbWFpbChzZXNzaW9uPy51c2VyPy5lbWFpbCkpKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpO1xuICAgIHJlcy5lbmQoKTtcbiAgICB0aHJvdyAnbm90IGFuIGFkbWluJztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnRQcm9taXNlIiwiQWRtaW4iLCJtb25nb29zZUNvbm5lY3QiLCJpc0FkbWluRW1haWwiLCJlbWFpbCIsImZpbmRPbmUiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImlzQWRtaW5SZXF1ZXN0IiwicmVxIiwicmVzIiwic3RhdHVzIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/categories.js":
/*!*********************************!*\
  !*** ./pages/api/categories.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Category */ \"(api)/./models/Category.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__.mongooseConnect)();\n    await (0,_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__.isAdminRequest)(req, res);\n    if (method === \"GET\") {\n        res.json(await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.find().populate(\"parent\"));\n    }\n    if (method === \"POST\") {\n        const { name , parentCategory , properties  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.create({\n            name,\n            parent: parentCategory || undefined,\n            properties\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"PUT\") {\n        const { name , parentCategory , properties , _id  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.updateOne({\n            _id\n        }, {\n            name,\n            parent: parentCategory || undefined,\n            properties\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"DELETE\") {\n        const { _id  } = req.query;\n        await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.deleteOne({\n            _id\n        });\n        res.json(\"ok\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDSTtBQUNKO0FBQ2dDO0FBRTVELGVBQWVLLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLE1BQU0sRUFBQ0MsT0FBTSxFQUFDLEdBQUdGO0lBQ2pCLE1BQU1MLDhEQUFlQTtJQUNyQixNQUFNRyx5RUFBY0EsQ0FBQ0UsS0FBSUM7SUFFekIsSUFBSUMsV0FBVyxPQUFPO1FBQ3BCRCxJQUFJRSxJQUFJLENBQUMsTUFBTVQsMkRBQWEsR0FBR1csUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJSCxXQUFXLFFBQVE7UUFDckIsTUFBTSxFQUFDSSxLQUFJLEVBQUNDLGVBQWMsRUFBQ0MsV0FBVSxFQUFDLEdBQUdSLElBQUlTLElBQUk7UUFDakQsTUFBTUMsY0FBYyxNQUFNaEIsNkRBQWUsQ0FBQztZQUN4Q1k7WUFDQU0sUUFBUUwsa0JBQWtCTTtZQUMxQkw7UUFDRjtRQUNBUCxJQUFJRSxJQUFJLENBQUNPO0lBQ1gsQ0FBQztJQUVELElBQUlSLFdBQVcsT0FBTztRQUNwQixNQUFNLEVBQUNJLEtBQUksRUFBQ0MsZUFBYyxFQUFDQyxXQUFVLEVBQUNNLElBQUcsRUFBQyxHQUFHZCxJQUFJUyxJQUFJO1FBQ3JELE1BQU1DLGNBQWMsTUFBTWhCLGdFQUFrQixDQUFDO1lBQUNvQjtRQUFHLEdBQUU7WUFDakRSO1lBQ0FNLFFBQVFMLGtCQUFrQk07WUFDMUJMO1FBQ0Y7UUFDQVAsSUFBSUUsSUFBSSxDQUFDTztJQUNYLENBQUM7SUFFRCxJQUFJUixXQUFXLFVBQVU7UUFDdkIsTUFBTSxFQUFDWSxJQUFHLEVBQUMsR0FBR2QsSUFBSWdCLEtBQUs7UUFDdkIsTUFBTXRCLGdFQUFrQixDQUFDO1lBQUNvQjtRQUFHO1FBQzdCYixJQUFJRSxJQUFJLENBQUM7SUFDWCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL3BhZ2VzL2FwaS9jYXRlZ29yaWVzLmpzPzY4ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSBcIkAvbW9kZWxzL0NhdGVnb3J5XCI7XG5pbXBvcnQge21vbmdvb3NlQ29ubmVjdH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XG5pbXBvcnQge2dldFNlcnZlclNlc3Npb259IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7YXV0aE9wdGlvbnMsIGlzQWRtaW5SZXF1ZXN0fSBmcm9tIFwiQC9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICBjb25zdCB7bWV0aG9kfSA9IHJlcTtcbiAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XG4gIGF3YWl0IGlzQWRtaW5SZXF1ZXN0KHJlcSxyZXMpO1xuXG4gIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgcmVzLmpzb24oYXdhaXQgQ2F0ZWdvcnkuZmluZCgpLnBvcHVsYXRlKCdwYXJlbnQnKSk7XG4gIH1cblxuICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCB7bmFtZSxwYXJlbnRDYXRlZ29yeSxwcm9wZXJ0aWVzfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IGNhdGVnb3J5RG9jID0gYXdhaXQgQ2F0ZWdvcnkuY3JlYXRlKHtcbiAgICAgIG5hbWUsXG4gICAgICBwYXJlbnQ6IHBhcmVudENhdGVnb3J5IHx8IHVuZGVmaW5lZCxcbiAgICAgIHByb3BlcnRpZXMsXG4gICAgfSk7XG4gICAgcmVzLmpzb24oY2F0ZWdvcnlEb2MpO1xuICB9XG5cbiAgaWYgKG1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICBjb25zdCB7bmFtZSxwYXJlbnRDYXRlZ29yeSxwcm9wZXJ0aWVzLF9pZH0gPSByZXEuYm9keTtcbiAgICBjb25zdCBjYXRlZ29yeURvYyA9IGF3YWl0IENhdGVnb3J5LnVwZGF0ZU9uZSh7X2lkfSx7XG4gICAgICBuYW1lLFxuICAgICAgcGFyZW50OiBwYXJlbnRDYXRlZ29yeSB8fCB1bmRlZmluZWQsXG4gICAgICBwcm9wZXJ0aWVzLFxuICAgIH0pO1xuICAgIHJlcy5qc29uKGNhdGVnb3J5RG9jKTtcbiAgfVxuXG4gIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgY29uc3Qge19pZH0gPSByZXEucXVlcnk7XG4gICAgYXdhaXQgQ2F0ZWdvcnkuZGVsZXRlT25lKHtfaWR9KTtcbiAgICByZXMuanNvbignb2snKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJDYXRlZ29yeSIsIm1vbmdvb3NlQ29ubmVjdCIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImlzQWRtaW5SZXF1ZXN0IiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwianNvbiIsImZpbmQiLCJwb3B1bGF0ZSIsIm5hbWUiLCJwYXJlbnRDYXRlZ29yeSIsInByb3BlcnRpZXMiLCJib2R5IiwiY2F0ZWdvcnlEb2MiLCJjcmVhdGUiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJfaWQiLCJ1cGRhdGVPbmUiLCJxdWVyeSIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories.js"));
module.exports = __webpack_exports__;

})();