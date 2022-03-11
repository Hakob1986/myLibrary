    
import { Book } from "../../models/book";
import { BookService } from "../Book/bookservice";
import { Rentbookservice } from "./rentservice";

export class Rentcontroler {
  static async addRentBook(req, res) {
    return Rentbookservice.addrentbook({ data: req.body })
      .then(() => {
        res.send("Add RentBook");
      })
      .catch((err) => res.status(500).send(err));
  }

  static async getAllRentBook(req, res) {
    return Rentbookservice.findAllRentBook()
      .then((rentbook) => {
        res.send(rentbook);
      })
      .catch((err) => res.status(500).send(err));
  }

  static async deleteRentBook(req, res) {
    Rentbookservice.deleteRentBookById({ data: req.params.id })
      .then(() => res.send("Deleted Author"))
      .catch((err) => res.status(500).send(err));
  }

  static async updateRentBook(req, res) {
    Rentbookservice.updateRentBookById({ data: (req.params.id, req.body) })
      .then(() => res.send("Update Author"))
      .catch((err) => res.status(500).send(err));
  }

  static async getBookMaxRate(req, res) {
    Rentbookservice.findMaxRatedBook()
      .then((rentbook) => res.send(rentbook))
      .catch((err) => res.status(500).send(err));
  }

  static async findSumRated(req,res){
     Rentbookservice.findAvgRatedBooks()
   .then((rentbook) => {
    let aaa= rentbook.filter(elm=> elm._id == req.query.id)
       
     res.json(aaa)
   })
   .catch((err) => res.status(500).send(err));
  }
}
