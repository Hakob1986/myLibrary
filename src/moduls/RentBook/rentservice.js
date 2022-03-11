import { RentBook } from "../../models/rentbook";

export class Rentbookservice {
  static addrentbook({ data }) {
    return RentBook.create(data);
  }

  static findAllRentBook() {
    return RentBook.find().populate("user_id").populate("book_id");
  }

  static async deleteRentBookById({ data }) {
    return RentBook.findByIdAndDelete(data);
  }
  static async updateRentBookById({ data }, { reqbody }) {
    return RentBook.findByIdAndUpdate(data, reqbody);
  }

  static findMaxRatedBook() {
    return RentBook.find().sort({ rated: 1 }).limit(5);
  }

  static findAvgRatedBooks() {
    return RentBook.aggregate([
      // { $match: { book_id: "$6221bce4bc0e59d7213a7c66" } },
      { $group: { _id: "$book_id", AVG: { $avg: "$rated" } } },
    ]);
  }
}
