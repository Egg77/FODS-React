const mysql = require('mysql2/promise');
const config = require('../config');

//Apparently connection pools are a thing. Reference this Stack Overflow post if any additional errors come up: 
//https://stackoverflow.com/questions/16800418/how-to-properly-pass-mysql-connection-to-routes-with-express-js

connection = mysql.createPool(config.db)
console.log("New connection established")

async function query(sql, params) {
  const [results, ] = await connection.execute(sql, params);
  return results;
}

module.exports = {
  query
}