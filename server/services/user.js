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
    let resultData = await userModel.getUserByName(name)
    return resultData
  },

  validatorSignUp (formData) {
    let result = {
      success: false,
      message: '',
    }

    if (formData.source === 'web') {
      if (!formData.role || !formData.password || !formData.name) {
        result.message = '用户信息不完整'
        return result
      }
    } else if (formData.source === 'wechat') {
      if (!formData.id) {
        result.message = '未设置用户id'
        return result
      }
    } else {
      result.message = '未知平台'
      return result
    }

    result.success = true
    return result
  }
}

module.exports = user