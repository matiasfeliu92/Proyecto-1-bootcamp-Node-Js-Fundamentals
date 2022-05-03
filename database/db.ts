import { DataSource } from "typeorm";
import dotenv from 'dotenv'
import { Canciones } from "../models/Cancion";
dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Canciones],
    logging: true,
    synchronize: true
})
