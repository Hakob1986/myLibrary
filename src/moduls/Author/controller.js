import { AuthorService } from "./authorservice";

export class AuthorController {

  // Post Author 
  static async addAuthor(req, res) {
    AuthorService.addAuthor({ data: req.body })
      .then(() => {
        res.send("Add Author");
      })
      .catch((err) => res.status(500).send(err));
  }

  // Get All Author
  static async getAllAuthor(req, res) {
    AuthorService.findAll()
      .then((author) => {
        res.send(author);
      })
      .catch((err) => res.status(500).send(err));
  }

  // Delete Author By ID
  static async deleteAuthor(req, res) {
    AuthorService.deleteAuthorById({ data: req.params.id })
      .then(() => res.send("Deleted Author"))
      .catch((err) => res.status(500).send(err));
  }

  // Update Author By ID
  static async updateAuthor(req, res) {
    AuthorService.updateAuthorById({ data: req.params.id}, {reqbody:req.body})
      .then(() => res.send("Update Author"))
      .catch((err) => res.status(500).send(err));
  }
}
