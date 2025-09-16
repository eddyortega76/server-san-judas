'use strict'
import 'dotenv/config';
import mongoose from 'mongoose'

export const dbConnection = async () =>{
    const uri = 'mongodb://localhost:27017/sanJudasDb'
    try{
        mongoose.connection.on('error', () =>{
            console.log('MongoDb | no se pudo conectar a mongoDb')
            mongoose.disconnect()
        })

        mongoose.connection.on('connecting', () =>{
            console.log('MongoDb | intentado conectar a mongoDb')
        })

         mongoose.connection.on('connected', () =>{
            console.log('MongoDb | conectado a mongoDb')
        })

         mongoose.connection.on('open', () =>{
            console.log('MongoDb | Conectando a la base de datos')
        })

         mongoose.connection.on('reconnected', () =>{
            console.log('MongoDb | reconectado a mongoDb')
        })

         mongoose.connection.on('disconnected', () =>{
            console.log('MongoDb | desconectado a mongoDb')
        })
        console.log(process.env.URI_MONGODB)
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS:5000,
            maxPoolSize: 10
        })
    }catch(error){
        console.log(`Error al conectar la db: ${error}`)
    }
}