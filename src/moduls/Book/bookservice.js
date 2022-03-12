import { Author } from "../../models/author";
import { Book } from "../../models/book";
import { Genre } from "../../models/genre";

export class BookService {
  static addBook({ data }) {
    return Book.create(data);
  }

  static createBookMany({data}){ 
    return  Book.insertMany(data)
    ;
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
    .populate({path:"author_id", select:'name'})
    .populate({path:"genre_id", select : "name"});
  }
}
