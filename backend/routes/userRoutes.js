import express from "express";
import { VerifyToken } from "../middlewares/VerifyToken.js";
import {
  registerController,
  loginController,
  getAllController,
  logoutUser,
  updateUserController
} from "../controller/userController.js";

const router = express.Router();


router.post("/register", registerController);
router.post("/login", loginController);
router.get("/user",VerifyToken, getAllController);
router.put("/user/update/:id",VerifyToken, updateUserController);
router.get("/logout", logoutUser);

export default router;