import express, {Request, Response} from 'express'
// const path = require('path')
import 'reflect-metadata'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'
import cancionesRoutes from './routers/router'
import { AppDataSource } from './database/db'

const app = express()

// app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "GET, POST, PUT"
}

app.use(cors(corsOptions))


app.get('/', (req: Request, res: Response)=>{
    app.use(express.static(path.resolve(__dirname,'client','public')))
    res.sendFile(path.resolve(__dirname,'client','public','index.html'))
})


app.use('/canciones', cancionesRoutes)

async function main() {
    await AppDataSource.initialize()
    console.log('Database is connected');
    
    app.listen(process.env.PORT || 4000,()=>{
        console.log("http://localhost:"+process.env.PORT || 4000)
    })
}

main()