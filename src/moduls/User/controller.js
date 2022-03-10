import { UserService } from "./userservice";

export class UserController {
  static async addUser(req, res) {
    UserService.addUser({ data: req.body })
      .then(() => res.send("Add User"))
      .catch((err) => res.status(500).send(err));
  }

  static async getAllUser(req, res) {
    UserService.findAllUser()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => res.status(500).send(err));
  }

  static async updateUser(req, res) {
    UserService.updateUserById({ data: (req.params.id, req.body) })
      .then(() => res.send("Update Author"))
      .catch((err) => res.status(500).send(err));
  }

  static async deleteUser(req, res) {
    UserService.deleteUserById({ data: req.params.id })
      .then(() => res.send("Deleted Author"))
      .catch((err) => res.status(500).send(err));
  }
}
