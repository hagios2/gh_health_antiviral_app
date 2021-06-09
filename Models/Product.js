const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },
    name_of_regional_minister : {
        type: String,
        required: true,
        trim: true,
    },
    address_of_regional_minister : {
        type: String,
        required: true,
        trim: true,
    },
    name_of_director_general : {
        type: String,
        required: true,
        trim: true,
    },
    address_of_director_general : {
        type: String,
        required: true,
        trim: true,
    },
    name_of_regional_health_director : {
        type: String,
        required: true,
        trim: true,
    },
    address_of_regional_health_director : {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', userSchema)

module.exports = Region