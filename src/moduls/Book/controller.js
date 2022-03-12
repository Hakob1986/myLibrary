import { Book } from "../../models/book";
import { AuthorService } from "../Author/authorservice";
import { GenreService } from "../Genre/genreservice";
import { BookService } from "./bookservice";

export class BookController {
  // Post Book
  static async addBook(req, res) {
    return BookService.addBook({ data: req.body })
      .then(() => {
        req.send("Add Book");
      })
      .catch((err) => res.status(500).send(err));
  }

  static async addBookWithAuthorAndGenre(req, res) {
    let data = req.body;
    for (let i = 0; i < data.length; i++) {
      AuthorService.addAuthor({ data: data[i].author }).then((author) => {
        GenreService.addGenre({ data: data[i].genre }).then((genre) => {
          BookService.addBook({
            data: {
              name: data[i].name,
              genre_id: genre._id,
              author_id: author._id,
            },
          });
        });
      });
    }

    res.send("ok");
  }

  // Get All Book By ID
  static async findAllBook(req, res) {
    return BookService.findAllBook()
      .then((book) => {
        res.send(book);
      })
      .catch((err) => res.status(500).send(err));
  }

  // Get All Book By Author Name
  static async findAllBookByAuthor(req, res) {
    return BookService.findAllBookByAuthor({ data: req.body })
      .then((book) => res.send(book))
      .catch((err) => res.status(500).send(err));
  }

  // Delete Book By ID
  static async deleteBookById(req, res) {
    BookService.deleteBookById({ data: req.params.id })
      .then(() => res.send("Deleted Book"))
      .catch((err) => res.status(500).send(err));
  }

  // Update Book By ID
  static async updateBook(req, res) {
    BookService.findByIdAndUpdate(
      { data: req.params.id },
      { reqbody: req.body }
    )
      .then(() => res.send("Update Book"))
      .catch((err) => res.status(500).send(err));
  }

  // Sorted Book By Author and Genre
  static async sortBook(req, res) {
    let books = [];
    BookService.serchBookByAuthorandGenre({ sort: req.query.sort }).then(
      (orders) => {
        console.log(orders);
        for (let i = 0; i < orders.length; i++) {
          if (
            orders[i].genre_id[0].name === req.query.gname &&
            orders[i].author_id[0].name === req.query.aname
          ) {
            books.push(orders[i]);
          }
        }
        res.json(books);
      }
    );
  }
}
