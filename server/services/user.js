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

  static async deleteUser (openid) {
    await UserModel.remove({openid: openid}).exec()
  }
  
  static async getUsers () {
    return await UserModel.find().exec()
  }
}

module.exports = UserService