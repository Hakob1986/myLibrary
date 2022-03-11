import express from "express";
import { AuthorController } from "./controller";

const router = express.Router();

router.get("/", AuthorController.getAllAuthor);
router.patch("/:id", AuthorController.updateAuthor);
router.post("/", AuthorController.addAuthor);
router.delete("/:id", AuthorController.deleteAuthor);

export default router;
