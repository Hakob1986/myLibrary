import { Book } from "../../models/book";
import { BookService } from "../Book/bookservice";
import { Rentbookservice } from "./rentservice";

export class Rentcontroler {

   // Post RentBook
  static async addRentBook(req, res) {
    return Rentbookservice.addrentbook({ data: req.body })
      .then(() => {
        res.send("Add RentBook");
      })
      .catch((err) => res.status(500).send(err));
  }

  // Get All RentBook
  static async getAllRentBook(req, res) {
    return Rentbookservice.findAllRentBook()
      .then((rentbook) => {
        res.send(rentbook);
      })
      .catch((err) => res.status(500).send(err));
  }

  // Delete RentBook By ID
  static async deleteRentBook(req, res) {
    Rentbookservice.deleteRentBookById({ data: req.params.id })
      .then(() => res.send("Deleted RentBook"))
      .catch((err) => res.status(500).send(err));
  }

  // Update RentBook By ID
  static async updateRentBook(req, res) {
    Rentbookservice.updateRentBookById({ data: req.params.id}, {reqbody:req.body})
      .then(() => res.send("Update RentBook"))
      .catch((err) => res.status(500).send(err));
  }

  static async getBookMaxRate(req, res) {
    Rentbookservice.findMaxRatedBook()
      .then((rentbook) => res.send(rentbook))
      .catch((err) => res.status(500).send(err));
  }

  // Get Top AVG  By Book Rate 
  static async findAvgRated(req, res) {
    Rentbookservice.findAvgRatedBooks()
      .then((rentbook) => {
        let aaa = rentbook.filter((elm) => elm._id == req.query.id);

        res.json(aaa);
      })
      .catch((err) => res.status(500).send(err));
  }
}
