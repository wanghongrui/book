let userService = require('../services/user')

module.exports = {

  /**
   * 登录，只支持web端
   * @param {*} ctx 
   */
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

    if (formData.source === 'web' && result.success === true) {
      let session = ctx.session
      session.isLogin = true
      session.name = userResult.name
      session.userId = userResult.id
    }

    ctx.body = result
  },

  /**
   * 注册，支持web、WeChat
   * @param {*} ctx 
   */
  async signUp (ctx) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      content: null
    }

    let validateResult = userService.validatorSignUp(formData)
    if (!validateResult.success) {
      result = validateResult
      ctx.body = result
      return
    }

    let existOne = await userService.getUserByName(formData.name)
    if (existOne) {
      result.message = '用户已存在'
      ctx.body = result
      return
    }

    let userResult = await userService.create({
      id: formData.id || Math.random().toString(36).substr(2),
      name: formData.name,
      password: formData.password || '',
      role: formData.role || '',
      source: formData.source
    })

    if (userResult) {
      result.success = true
    } else {
      result.message = '系统错误'
    }
    ctx.body = result
  },

  async getUses (ctx) {
    let users = await userService.getUses()
    ctx.body = users
  },

  online (ctx) {
    let result = {
      success: false,
      message: '用户未登录',
      content: null
    }
    
    let session = ctx.session
    if (session && session.isLogin) {
      result.success = true
      result.message = ''
    }
    ctx.body = result
  }
}