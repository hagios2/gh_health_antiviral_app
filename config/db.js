import mongoose from 'mongoose'

const url = process.env.DB_URL ?? 'mongodb+srv://oteng:toor8853@cluster0.pfczz.mongodb.net/ghana_health?retryWrites=true&w=majority'

console.log(url)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('connection with monogo established succussfully')
})

export default connection
