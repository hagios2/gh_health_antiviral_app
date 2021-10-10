import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: './config/.env'})

const url = process.env.DB_URL

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('connection with monogo established succussfully')
})

export default connection
