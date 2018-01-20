const dbUtils = require('./../utils/db-util')

const book = {

  /**
   * 数据库创建Book
   * @param {object} model Book模型
   * @return {object}
   */
  async create (model) {
    let result = await dbUtils.insertData('book', model)
    return result
  },

  async getExistOne (options) {
    let _sql = `select * from book where isbn = '${option.isbn}' limit 1`
    let result = await dbUtils.query(_sql)
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  async getBooks () {
    let result = await dbUtils.findDataByPage('book', 0, 10)
    return result
  }
}

module.exports = book