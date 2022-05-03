import express from 'express'
// const path = require('path')
import 'reflect-metadata'
import cors from 'cors'
import morgan from 'morgan'
import { AppDataSource } from './database/db'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

// app.use('/', require('./routers/router'))

async function main() {
    await AppDataSource.initialize()
    console.log('Database is connected');
    
    app.listen(3000,()=>{
        console.log("http://localhost:"+3000)
    })
}

main()