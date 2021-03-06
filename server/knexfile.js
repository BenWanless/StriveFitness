require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: "127.0.0.1",
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      charset: 'utf8'
    }
  }
};