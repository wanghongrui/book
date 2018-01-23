const dbUtils = require('../utils/db-util')

const user = {

  /**
   * 数据库创建User
   * @param {object} model user模型
   * @return {object}
   */
  async create (model) {
    let result = await dbUtils.insertData('user', model)
    return result
  },

  async getExistOne (options) {
    let _sql = `select * from user where id = '${option.id}' limit 1`
    let result = await dbUtils.query(_sql)
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  async getOneByNameAndPassword (options) {
    let _sql = `select * from user where name='${options.name}' and password='${options.password}' limit 1`
    let result = await dbUtils.query(_sql)
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  async getUserByName (name) {
    let result = await dbUtils.select('user', ['id', 'name', 'role', 'gender'])
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  }
}

module.exports = user