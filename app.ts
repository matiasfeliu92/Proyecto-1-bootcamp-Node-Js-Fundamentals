import express from 'express'
// const path = require('path')
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

// app.use('/', require('./routers/router'))

app.listen(app.get('port'),()=>{
    console.log("http://localhost:"+app.get('port'))
})