import express from "express";
import { BookController, deleteBookById, updateBook } from "./controller";

const router = express.Router();

router.get("/", BookController.findAllBook);
router.patch("/:id", BookController.updateBook);
router.post("/", BookController.addBook);
router.get("/byauthor", BookController.findAllBookByAuthor);
router.delete("/:id", BookController.deleteBookById);
router.get("/serch", BookController.sortBook)

export default router;
