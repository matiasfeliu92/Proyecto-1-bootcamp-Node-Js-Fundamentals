const express = require('express')
const path = require('path')
const cors = require("cors")
const morgan = require('morgan')

const app = express()

app.set('port', process.env.PORT || 4000)

app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin:['http://127.0.0.1:5500'],
    credentials:true
}))

app.use(express.static(__dirname + '/views'))

app.use('/', require('./routers/router'))

app.listen(app.get('port'),()=>{
    console.log("http://localhost:"+app.get('port'))
})