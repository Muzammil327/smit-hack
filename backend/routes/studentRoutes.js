import express from "express";
import {
    studentAddController,
    studentUpdateController,
    studentGetController,
    studentDeleteController
} from "../controller/studentController.js";

const router = express.Router();


router.post("/add", studentAddController);
router.put("/update/:id", studentUpdateController);
router.get("/get", studentGetController);
router.delete("/delete/:id", studentDeleteController)

export default router;