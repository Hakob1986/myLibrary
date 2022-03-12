import { UserService } from "./userservice";

// Post User
export class UserController {
  static async addUser(req, res) {
    UserService.addUser({ data: req.body })
      .then(() => res.send("Add User"))
      .catch((err) => res.status(500).send(err));
  }

  // Get All User
  static async getAllUser(req, res) {
    UserService.findAllUser()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => res.status(500).send(err));
  }

  // Update User By ID
  static async updateUser(req, res) {
    UserService.updateUserById({ data: req.params.id}, {reqbody:req.body} )
      .then(() => res.send("Update User"))
      .catch((err) => res.status(500).send(err));
  }

  // Delete User By ID
  static async deleteUser(req, res) {
    UserService.deleteUserById({ data: req.params.id })
      .then(() => res.send("Deleted User"))
      .catch((err) => res.status(500).send(err));
  }
}
