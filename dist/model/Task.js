"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var TaskSchema = (0, _mongoose.Schema)({
  formNo: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  ck: String,
  nombre: String,
  apellido: String,
  cedula: Number,
  puesto: String,
  departamento: String,
  ckMotivo: String,
  motivoCK: String,
  fecha: Date,
  nombreRecibido: String,
  apellidoRecibido: String,
  cedulaRecibido: Number,
  puestoRecibido: String,
  departamentoRecibido: String,
  ckMotivoRecibido: String,
  motivoCKRecibido: String

  // title: { type: String, required: true, trim: true, unique: true },
  // description: {
  //   type: String,
  //   trim: true,
  // },
  // done: {
  //   type: Boolean,
  //   default: false,
  // },
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Task", TaskSchema);
exports["default"] = _default;