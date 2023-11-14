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
exports.id = "pages/api/settings";
exports.ids = ["pages/api/settings"];
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

/***/ "(api)/./models/Setting.js":
/*!***************************!*\
  !*** ./models/Setting.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Setting\": () => (/* binding */ Setting)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst settingSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    value: {\n        type: Object\n    }\n}, {\n    timestamps: true\n});\nconst Setting = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models === null || mongoose__WEBPACK_IMPORTED_MODULE_0__.models === void 0 ? void 0 : mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Setting) || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Setting\", settingSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvU2V0dGluZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsTUFBTUcsZ0JBQWdCLElBQUlELDRDQUFNQSxDQUFDO0lBQy9CRSxNQUFNO1FBQUNDLE1BQUtDO1FBQVFDLFVBQVUsSUFBSTtRQUFFQyxRQUFRLElBQUk7SUFBQTtJQUNoREMsT0FBTztRQUFDSixNQUFLSztJQUFNO0FBQ3JCLEdBQUc7SUFBQ0MsWUFBWSxJQUFJO0FBQUE7QUFFYixNQUFNQyxVQUFVWCxDQUFBQSw0Q0FBTUEsYUFBTkEsNENBQU1BLGNBQU5BLEtBQUFBLElBQUFBLG9EQUFlLEtBQUlELCtDQUFLQSxDQUFDLFdBQVdHLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9tb2RlbHMvU2V0dGluZy5qcz82MmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW9kZWwsIG1vZGVscywgU2NoZW1hfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3Qgc2V0dGluZ1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiB7dHlwZTpTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWV9LFxuICB2YWx1ZToge3R5cGU6T2JqZWN0fSxcbn0sIHt0aW1lc3RhbXBzOiB0cnVlfSk7XG5cbmV4cG9ydCBjb25zdCBTZXR0aW5nID0gbW9kZWxzPy5TZXR0aW5nIHx8IG1vZGVsKCdTZXR0aW5nJywgc2V0dGluZ1NjaGVtYSk7Il0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwic2V0dGluZ1NjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ2YWx1ZSIsIk9iamVjdCIsInRpbWVzdGFtcHMiLCJTZXR0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Setting.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isAdminRequest\": () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _models_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Admin */ \"(api)/./models/Admin.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\n\n\n\n\nasync function isAdminEmail(email) {\n    (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_5__.mongooseConnect)();\n    return !!await _models_Admin__WEBPACK_IMPORTED_MODULE_4__.Admin.findOne({\n        email\n    });\n}\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    callbacks: {\n        session: async ({ session , token , user  })=>{\n            var _session_user;\n            if (await isAdminEmail(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\nasync function isAdminRequest(req, res) {\n    var _session_user;\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, authOptions);\n    if (!await isAdminEmail(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)) {\n        res.status(401);\n        res.end();\n        throw \"not an admin\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNHO0FBQ0c7QUFDaEI7QUFDTDtBQUNVO0FBRS9DLGVBQWVPLGFBQWFDLEtBQUssRUFBRTtJQUNqQ0YsOERBQWVBO0lBQ2YsT0FBTyxDQUFDLENBQUcsTUFBTUQsd0RBQWEsQ0FBQztRQUFDRztJQUFLO0FBQ3ZDO0FBRU8sTUFBTUUsY0FBYztJQUN6QkMsV0FBVztRQUNUVCxpRUFBY0EsQ0FBQztZQUNiVSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUN6QztLQUNEO0lBQ0RDLFNBQVNmLDBFQUFjQSxDQUFDQyxvREFBYUE7SUFDckNlLFdBQVc7UUFDVEMsU0FBUyxPQUFPLEVBQUNBLFFBQU8sRUFBQ0MsTUFBSyxFQUFDQyxLQUFJLEVBQUMsR0FBSztnQkFDaEJGO1lBQXZCLElBQUksTUFBTWIsYUFBYWEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxnQkFBQUEsUUFBU0UsSUFBSSxjQUFiRiwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZVosS0FBRixHQUFVO2dCQUM1QyxPQUFPWTtZQUNULE9BQU87Z0JBQ0wsT0FBTyxLQUFLO1lBQ2QsQ0FBQztRQUNIO0lBQ0Y7QUFDRixFQUFFO0FBRUYsaUVBQWVwQixnREFBUUEsQ0FBQ1UsWUFBWUEsRUFBQztBQUU5QixlQUFlYSxlQUFlQyxHQUFHLEVBQUNDLEdBQUcsRUFBRTtRQUVuQkw7SUFEekIsTUFBTUEsVUFBVSxNQUFNbkIsMkRBQWdCQSxDQUFDdUIsS0FBSUMsS0FBSWY7SUFDL0MsSUFBSSxDQUFFLE1BQU1ILGFBQWFhLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsZ0JBQUFBLFFBQVNFLElBQUksY0FBYkYsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVaLEtBQUYsR0FBVztRQUMvQ2lCLElBQUlDLE1BQU0sQ0FBQztRQUNYRCxJQUFJRSxHQUFHO1FBQ1AsTUFBTSxlQUFlO0lBQ3ZCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwge2dldFNlcnZlclNlc3Npb259IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcbmltcG9ydCB7TW9uZ29EQkFkYXB0ZXJ9IGZyb20gXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCB7QWRtaW59IGZyb20gXCJAL21vZGVscy9BZG1pblwiO1xuaW1wb3J0IHttb25nb29zZUNvbm5lY3R9IGZyb20gJ0AvbGliL21vbmdvb3NlJztcblxuYXN5bmMgZnVuY3Rpb24gaXNBZG1pbkVtYWlsKGVtYWlsKSB7XG4gIG1vbmdvb3NlQ29ubmVjdCgpO1xuICByZXR1cm4gISEgKGF3YWl0IEFkbWluLmZpbmRPbmUoe2VtYWlsfSkpO1xufVxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVRcbiAgICB9KSxcbiAgXSxcbiAgYWRhcHRlcjogTW9uZ29EQkFkYXB0ZXIoY2xpZW50UHJvbWlzZSksXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb246IGFzeW5jICh7c2Vzc2lvbix0b2tlbix1c2VyfSkgPT4ge1xuICAgICAgaWYgKGF3YWl0IGlzQWRtaW5FbWFpbChzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQWRtaW5SZXF1ZXN0KHJlcSxyZXMpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24ocmVxLHJlcyxhdXRoT3B0aW9ucyk7XG4gIGlmICghKGF3YWl0IGlzQWRtaW5FbWFpbChzZXNzaW9uPy51c2VyPy5lbWFpbCkpKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpO1xuICAgIHJlcy5lbmQoKTtcbiAgICB0aHJvdyAnbm90IGFuIGFkbWluJztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnRQcm9taXNlIiwiQWRtaW4iLCJtb25nb29zZUNvbm5lY3QiLCJpc0FkbWluRW1haWwiLCJlbWFpbCIsImZpbmRPbmUiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImlzQWRtaW5SZXF1ZXN0IiwicmVxIiwicmVzIiwic3RhdHVzIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/settings.js":
/*!*******************************!*\
  !*** ./pages/api/settings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n/* harmony import */ var _models_Setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Setting */ \"(api)/./models/Setting.js\");\n\n\n\nasync function handle(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    await (0,_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.isAdminRequest)(req, res);\n    if (req.method === \"PUT\") {\n        const { name , value  } = req.body;\n        const settingDoc = await _models_Setting__WEBPACK_IMPORTED_MODULE_2__.Setting.findOne({\n            name\n        });\n        if (settingDoc) {\n            settingDoc.value = value;\n            await settingDoc.save();\n            res.json(settingDoc);\n        } else {\n            res.json(await _models_Setting__WEBPACK_IMPORTED_MODULE_2__.Setting.create({\n                name,\n                value\n            }));\n        }\n    }\n    if (req.method === \"GET\") {\n        const { name  } = req.query;\n        res.json(await _models_Setting__WEBPACK_IMPORTED_MODULE_2__.Setting.findOne({\n            name\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2V0dGluZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNlO0FBQ3JCO0FBRTFCLGVBQWVHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLE1BQU1MLDhEQUFlQTtJQUNyQixNQUFNQyx5RUFBY0EsQ0FBQ0csS0FBS0M7SUFFMUIsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTSxFQUFDQyxLQUFJLEVBQUNDLE1BQUssRUFBQyxHQUFHSixJQUFJSyxJQUFJO1FBQzdCLE1BQU1DLGFBQWEsTUFBTVIsNERBQWUsQ0FBQztZQUFDSztRQUFJO1FBQzlDLElBQUlHLFlBQVk7WUFDZEEsV0FBV0YsS0FBSyxHQUFHQTtZQUNuQixNQUFNRSxXQUFXRSxJQUFJO1lBQ3JCUCxJQUFJUSxJQUFJLENBQUNIO1FBQ1gsT0FBTztZQUNMTCxJQUFJUSxJQUFJLENBQUMsTUFBTVgsMkRBQWMsQ0FBQztnQkFBQ0s7Z0JBQUtDO1lBQUs7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJSixJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNLEVBQUNDLEtBQUksRUFBQyxHQUFHSCxJQUFJVyxLQUFLO1FBQ3hCVixJQUFJUSxJQUFJLENBQUUsTUFBTVgsNERBQWUsQ0FBQztZQUFDSztRQUFJO0lBQ3ZDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vcGFnZXMvYXBpL3NldHRpbmdzLmpzPzIxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb25nb29zZUNvbm5lY3R9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xuaW1wb3J0IHtpc0FkbWluUmVxdWVzdH0gZnJvbSBcIkAvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xuaW1wb3J0IHtTZXR0aW5nfSBmcm9tIFwiQC9tb2RlbHMvU2V0dGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XG4gIGF3YWl0IGlzQWRtaW5SZXF1ZXN0KHJlcSwgcmVzKTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICBjb25zdCB7bmFtZSx2YWx1ZX0gPSByZXEuYm9keTtcbiAgICBjb25zdCBzZXR0aW5nRG9jID0gYXdhaXQgU2V0dGluZy5maW5kT25lKHtuYW1lfSk7XG4gICAgaWYgKHNldHRpbmdEb2MpIHtcbiAgICAgIHNldHRpbmdEb2MudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGF3YWl0IHNldHRpbmdEb2Muc2F2ZSgpO1xuICAgICAgcmVzLmpzb24oc2V0dGluZ0RvYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5qc29uKGF3YWl0IFNldHRpbmcuY3JlYXRlKHtuYW1lLHZhbHVlfSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IHtuYW1lfSA9IHJlcS5xdWVyeTtcbiAgICByZXMuanNvbiggYXdhaXQgU2V0dGluZy5maW5kT25lKHtuYW1lfSkgKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJpc0FkbWluUmVxdWVzdCIsIlNldHRpbmciLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwidmFsdWUiLCJib2R5Iiwic2V0dGluZ0RvYyIsImZpbmRPbmUiLCJzYXZlIiwianNvbiIsImNyZWF0ZSIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/settings.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/settings.js"));
module.exports = __webpack_exports__;

})();