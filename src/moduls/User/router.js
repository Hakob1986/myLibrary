import express from "express";
import { UserController } from "./controller";

const router = express.Router();

router.get("/", UserController.getAllUser);
router.post("/", UserController.addUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
