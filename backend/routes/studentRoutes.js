import { createStudent } from "../controllers/studentController.js";

import express from "express";

const router = express.Router();
router.post("/createStudent", createStudent);

export default router;
