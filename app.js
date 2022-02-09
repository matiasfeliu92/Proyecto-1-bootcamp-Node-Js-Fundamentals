const express = require('express')
const path = require('path')
const morgan = require('morgan')
// const myConnection = require('express-myconnection')

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/', require('./router'))

app.listen(app.get('port'),()=>{
    console.log("http://localhost:"+app.get('port'))
})