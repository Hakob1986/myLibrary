import express from "express";
import { GenreController } from "./controller";

const router = express.Router();

router.get("/", GenreController.getAllGenre);
router.post("/", GenreController.addGenre);
router.delete("/:id", GenreController.deleteGenreById);
router.patch("/:id", GenreController.updateGenre);

export default router;
