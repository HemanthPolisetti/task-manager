import express from "express";
import { addTask, deleteTask, taskViewer, updateTask } from "../controllers/controller.js";

const router = express.Router();

router.get("/",taskViewer)
router.post("/",addTask)
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)

export {router}