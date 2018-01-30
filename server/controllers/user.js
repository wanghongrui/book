let userService = require('../services/user')

class UserController {

  /**
   * 登录，只支持web端
   * @param {*} ctx 
   */
  static async signIn (ctx) {
    let {openid} = ctx.request.body
    let content = await userService.signIn(openid)

    ctx.success({content})
  }

  /**
   * 获取所有用户
   */
  static async getUsers (ctx) {
    let content =  await userService.getUsers()
     
    ctx.success({content})
  }

  /**
   * 删除用户
   */
  static async deleteUser (ctx) {
    let id = ctx.params.id
    await userService.deleteUser(id)
    
    ctx.success({content: '删除成功'})
  }

  /**
   * 注销登录
   * @param {*} ctx 
   */
  static async signOut (ctx) {
    ctx.session = {}
    ctx.success({content: '已注销登录'})
  }
}

module.exports = UserController