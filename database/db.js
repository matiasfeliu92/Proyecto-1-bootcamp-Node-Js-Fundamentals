const mysql = require('mysql')
const config = require('./index')

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWRD,
    database: process.env.DB_DATABASE 
})

conn.connect((err)=>{
    if(err){
        console.error('El error de conexion es: '+err)
        return
    }else{
        console.log('MySql is Connected')
    }
})

module.exports = conn