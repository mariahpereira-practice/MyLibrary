const express = require('express')
const mariadb = require('mariadb')

const app = express()

const pool = mariadb.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'infdb',
    connectionLimit:100
})

