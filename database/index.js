require('dotenv').config()

const config = {
    dbHost:process.env.DB_HOST,
    dbPort:process.env.DB_PORT,
    dbUser:process.env.DB_USER,
    dbPassword:process.env.DB_PASSWORD,
    dbName:process.env.DB_DATABASE
}

module.exports = config