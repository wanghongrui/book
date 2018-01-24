let userService = require('../services/user')

module.exports = {
  async signIn (ctx) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      content: null
    }

    let userResult = await userService.signIn(formData)
    if (userResult) {
      if (formData.name === userResult.name) {
        result.success = true
      } else {
        result.message = '用户名或密码错误'
      }
    } else {
      result.message = '用户不存在'
    }

    if (formData.source === 'form' && result.success === true) {
      let session = ctx.session
      session.isLogin = true
      session.name = userResult.name
      session.userId = userResult.id
    }

    ctx.body = result
  },

  async signUp (ctx) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      content: null
    }

    let validateResult = userService.validatorSignUp(formData)
    if (!validateResult) {
      result = validateResult
      ctx.body = result
      return
    }

    let existOne = await userService.getExistOne(formData)
    console.log(existOne)

    if (existOne) {
      result.message = '用户已存在'
      ctx.body = result
      return
    }

    let userResult = await userService.create({
      id: 'dahong_id',
      name: '大洪',
      role: 'admin'
    })
  },
  

  async getUses (ctx) {
    let users = await userService.getUses()
    ctx.body = users
  }
}