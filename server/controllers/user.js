let userService = require('../services/user')

let result = {
  success: false,
  message: null,
  content: null
}

module.exports = {

  /**
   * 登录，只支持web端
   * @param {*} ctx 
   */
  async signIn (ctx) {
    let {openid} = ctx.request.body

    let user = null
    try {
      user = await userService.signIn(openid)
      
      if (user) {
        let session = ctx.session
        session.openid = user.openid

        result.success = true
        result.content = user
      } else {
        throw '注册异常'
      }
    } catch (e) {
      result.message = e
    }
    ctx.body = result
  },

  /**
   * 获取所有用户
   */
  async getUsers (ctx) {
    try {
      result.content =  await userService.getUsers()
      result.success = true
    } catch (e) {
      result.message = e
      result.success = true
    }
    ctx.body = result
  },

  /**
   * 删除用户
   */
  async deleteUser (ctx) {
    let openid = ctx.params.id

    try {
      await userService.deleteUser(openid)
      result.success = true
    } catch (e) {
      result.success = false
      result.message = e
    }
    
    ctx.body = result
  },

  /**
   * 注销登录
   * @param {*} ctx 
   */
  async signOut (ctx) {
    ctx.session = {}
    ctx.body = result
  }
}