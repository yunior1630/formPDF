"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks.controllers");
var router = (0, _express.Router)();
var routerServer = "/chequemopc";
// Render all tasks
router.get(routerServer, _tasks.renderTasks);
router.post(routerServer + "/tasks/add", _tasks.createTask);
router.get(routerServer + "/tasks/:id/toggleDone", _tasks.taskToggleDone);
router.get(routerServer + "/tasks/:id/edit", _tasks.renderTaskEdit);
router.post(routerServer + "/tasks/:id/edit", _tasks.editTask);
router.get(routerServer + "/tasks/:id/delete", _tasks.deleteTask);
var _default = router;
exports["default"] = _default;