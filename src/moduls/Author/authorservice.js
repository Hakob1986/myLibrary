import { Author } from "../../models/author";

export class AuthorService {
  static addAuthor({ data }) {
    return Author.create(data);
  }

  static createManyAuthor({ data }) {
    return Author.insertMany(data);
  }
  static async findAll() {
    return Author.find();
  }
  static async deleteAuthorById({ data }) {
    return Author.findByIdAndDelete(data);
  }
  static async updateAuthorById({ data }, { reqbody }) {
    return Author.findByIdAndUpdate(data, reqbody);
  }
}
