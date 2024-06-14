"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./utils/mongoose");
var _firebaseConfig = _interopRequireDefault(require("./firebaseConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Ejemplo de uso
var db = _firebaseConfig["default"].firestore();
var auth = _firebaseConfig["default"].auth();
_app["default"].listen(_app["default"].get("port"));
console.log("server on port ".concat(_app["default"].get("port")));