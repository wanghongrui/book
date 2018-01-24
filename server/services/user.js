const userModel = require('../models/user')

const user = {
  async create (user) {
    let result = await userModel.create(user)
    return result
  },

  async getExistOne (formData) {
    let resultData = await userModel.getExistOne({
      id: formData.id
    })
    return resultData
  },

  async signIn (formData) {
    let resultData = await userModel.getOneByNameAndPassword({
      'name': formData.name,
      'password': formData.password
    })
    return resultData
  },

  async getUserByName (name) {
    let resultData = await userModel.getUserByName(username) || {}
    return userInfo
  },

  validatorSignUp (user) {
    let result = {
      success: false,
      message: '',
    }
    if (!user.name || !user.id) {
      result.message = '用户信息不完整'
      return result
    }
    result.success = true
    return result
  }
}

module.exports = user