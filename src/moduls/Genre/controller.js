import { Genre } from "../../models/genre";
import { GenreService } from "./genreservice";

export class GenreController {
  static async getAllGenre(req, res) {
    GenreService.findAllGenre()
      .then((genre) => {
        res.send(genre);
      })
      .catch((err) => res.status(500).send(err));
  }

  static async addGenre(req, res) {
    GenreService.addGenre(req.body)
      .then(() => {
        res.send("Add Genre");
      })
      .catch((err) => res.status(500).send(err));
  }

  static async deleteGenreById(req, res) {
    GenreService.deleteGenreById({data:req.params.id})
      .then(() => res.send("Deleted Genre"))
      .catch((err) => res.status(500).send(err));
  }

  static async updateGenre(req, res) {
    GenreService.updateGenreById({data:(req.params.id, req.body)})
      .then(() => res.send("Update Genre"))
      .catch((err) => res.status(500).send(err));
  }
}
