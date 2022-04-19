const express = require('express')
const path = require('path')
const cors = require("cors")
const morgan = require('morgan')
// require('dotenv').config()

const app = express()

app.set('port', process.env.PORT || 4000)

app.set('view engine', 'ejs')
// app.set('view engine', 'pug') 

app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use(express.static(__dirname + '/views'))

app.use('/', require('./routers/router'))

app.listen(app.get('port'),()=>{
    console.log("http://localhost:"+app.get('port'))
})