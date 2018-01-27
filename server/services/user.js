const UserModel = require('../models/index').UserModel

module.exports = {
  async signIn (openid) {
    let user = await UserModel.findOne({openid: openid}).exec()
    if (!user) {
      user = new UserModel({openid})
      user = await user.save()
    }
    return user
  },

  async deleteUser (openid) {
    try {
      await UserModel.remove({openid}, (err) => {
        if (err) {
          throw err
        }
      })
    } catch (err) {
      throw err
    }
  },
  
  async getUsers () {
    return await UserModel.find().exec()
  }
}