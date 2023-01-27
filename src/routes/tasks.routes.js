import { Router } from "express";
import {
  createTask,
  deleteTask,
  renderTasks,
  taskToggleDone,
  renderTaskEdit,
  editTask,
} from "../controllers/tasks.controllers";

const router = Router();
const routerServer = "/chequemopc"
// Render all tasks
router.get(routerServer, renderTasks);

router.post(routerServer + "/tasks/add", createTask);

router.get(routerServer + "/tasks/:id/toggleDone", taskToggleDone);

router.get(routerServer + "/tasks/:id/edit", renderTaskEdit);

router.post(routerServer + "/tasks/:id/edit", editTask);

router.get(routerServer + "/tasks/:id/delete", deleteTask);

export default router;
