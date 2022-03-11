import { Genre } from "../../models/genre";

export class GenreService {
  static addGenre({ data }) {
    return Genre.create(data);
  }

  static findAllGenre() {
    return Genre.find();
  }

  static async updateGenreById({ data }, { reqbody }) {
    return Genre.findByIdAndUpdate(data, reqbody);
  }

  static async deleteGenreById({ data }) {
    return Genre.findByIdAndDelete(data);
  }
}
