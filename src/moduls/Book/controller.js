import { Book } from "../../models/book";
import { BookService } from "./bookservice";

export class BookController {
  static async addBook(req, res) {
    return BookService.addBook({ data: req.body })
      .then(() => {
        req.send("Add Book");
      })
      .catch((err) => res.status(500).send(err));
  }

  static async findAllBook(req, res) {
    return BookService.findAllBook()
      .then((book) => {
        res.send(book);
      })
      .catch((err) => res.status(500).send(err));
  }

  static async findAllBookByAuthor(req, res) {
    return BookService.findAllBookByAuthor({ data: req.body })
      .then((book) => res.send(book))
      .catch((err) => res.status(500).send(err));
  }

  static async deleteBookById(req, res) {
    BookService.deleteBookById({data:req.params.id})
      .then(() => res.send("Deleted Book"))
      .catch((err) => res.status(500).send(err));
  }

  static async updateBook(req, res) {
    BookService.findByIdAndUpdate({ data: (req.params.id, req.body) })
      .then(() => res.send("Update Book"))
      .catch((err) => res.status(500).send(err));
      
  }

  static async sortBook(req,res){
    let books=[];
    BookService.serchBookByAuthorandGenre({sort:req.query.sort})
    .then((orders)=>{
      for(let i=0; i<orders.length; i++){
        if(orders[i].genre_id[0].name === req.query.gname && 
          orders[i].author_id[0].name === req.query.aname){
          books.push(orders[i]);
        };
      }
      res.json(books)
    })
  }
}
