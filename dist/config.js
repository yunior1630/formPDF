"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admFinanciera:adm123456@cluster0.l6ap3ox.mongodb.net/?retryWrites=true&w=majority";
exports.MONGODB_URI = MONGODB_URI;