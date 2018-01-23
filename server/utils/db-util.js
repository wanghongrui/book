// import { debug } from 'util';

const config = require('../../config')
const mysql = require('mysql')

const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.username,
  password: config.database.password,
  database: config.database.database
})

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        resolve(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

let createTable = function (sql) {
  return query(sql, [])
}

let findDataById = function (table, id) {
  let _sql = 'select * from ?? where id = ? '
  return query(_sql, [table, id, start, end])
}

let findDataByPage = function (table, start, end) {
  let _sql = 'select * from ?? limit ?, ?'
  return query(_sql, [table, start, end])
}

let insertData = function (table, values) {
  let _sql = 'insert into ?? set ?'
  return query(_sql, [table, values])
}

let updateData = function (table, values, id) {
  let _sql = 'update ?? set ? where id = ?'
  return query(_sql, [table, values, id])
}

let deleteDataById = function (table, id) {
  let _sql = 'delete from ?? where id = ?'
  return query(_sql, [table, id])
}

let select = function (table, keys) {
  let _sql = 'select ?? from ??'
  return query(_sql, [keys, table])
}

let count = function (table) {
  let _sql = 'select count(*) as total_count from ??'
  return query(_sql, [table])
}

module.exports = {
  query, 
  createTable, 
  findDataById,
  findDataByPage,
  deleteDataById,
  insertData,
  updateData,
  select,
  count
}