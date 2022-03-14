import { User } from "../../models/user";

export class UserService {
  static addUser({ data }) {
    return User.insertMany(data);
  }

  static async findAllUser() {
    return User.find();
  }

  static async updateUserById({ data }, { reqbody }) {
    return User.bulkWrite([
      {
        updateOne: {
          filter: { _id: data },
          update: { $set: reqbody },
        },
      },
    ]);
  }

  static async deleteUserById({ data }) {
    return User.bulkWrite([
      {
        deleteOne: {
          filter: { _id: data }
        },
      },
    ]);
  }
}
