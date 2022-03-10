import { User } from "../../models/user";

export class UserService {
  static addUser({ data }) {
    return User.insertMany(data);
  }

  static findAllUser() {
    return User.find();
  }

  static async updateUserById({ data }, { reqbody }) {
    return User.findByIdAndUpdate(data, reqbody);
  }

  static async deleteUserById({ data }) {
    return User.findByIdAndDelete(data);
  }
}
