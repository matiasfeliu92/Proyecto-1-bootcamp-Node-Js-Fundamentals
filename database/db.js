const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'musica'
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