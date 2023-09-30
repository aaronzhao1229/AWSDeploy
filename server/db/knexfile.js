// const path = require('path')

module.exports = {
  development: {
    client: 'mysql2',
    // connection:
    // {
    //   host: 'localhost',
    //   user: 'aaronlaptop',
    //   password: 'Test1234!',
    //   database: 'test',
    // },
    // connection: {
    //   host: '13.210.13.136',
    //   user: 'aaronlaptop',
    //   password: 'Test1234!',
    //   database: 'test',
    // },
    connection: {
      host: 'localhost',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'test1234!',
      database: 'testAWS',
    },
    useNullAsDefault: true,
  },

  // to be updated
  production: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'test1234!',
      database: 'test',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
