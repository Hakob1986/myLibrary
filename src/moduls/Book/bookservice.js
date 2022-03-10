import { Author } from "../../models/author";
import { Book } from "../../models/book";

export class BookService {
  static addBook({ data }) {
    return Book.create(data);
  }

  static findAllBook() {
    return Book.find().populate("genre_id").populate("author_id");
  }

  static findAllBookByAuthor({ data }) {
    console.log({ data });
    return Author.find(data).populate("books");
  }

  static async deleteBookById({ data }) {
    return Book.findByIdAndDelete(data);
  }
  static async updateBookById({ data }, { reqbody }) {
    return Book.findByIdAndUpdate(data, reqbody);
  }

  static async serchBookByAuthorandGenre({sort}){
    return Book.find().sort({name:sort})
    .populate({path:"author_id"})
    .populate({path:"genre_id"})
  }
}
