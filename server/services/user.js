const UserModel = require('../models/index').UserModel

class UserService {
  static async signIn (openid) {
    let user = await UserModel.findOne({openid: openid}).exec()
    if (!user) {
      user = new UserModel({openid})
      user = await user.save()
    }
    return user
  }

  static async deleteUser (id) {
    await UserModel.deleteOne({_id: id})
  }
  
  static async getUsers () {
    return await UserModel.find().exec()
  }
}

module.exports = UserService