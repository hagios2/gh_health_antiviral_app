const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type: String,
        required: [true, 'name is required'],
        unique:true,
        trim: true,
    },
    author: {type: Schema.Types.ObjectId, ref: 'Region', required: true},
    name_of_district_health_directorate : {
        type: String,
        required: [true, 'name of district health directorate is required'],
        trim: true,
    },
    address_of_district_health_directorate : {
        type: String,
        required: [true, 'address of district health directorate is required'],
        trim: true,
    },
    lat : {
        type: Number,
        required: [true, 'latitude is required'],
        trim: true,
    },
    long : {
        type: Number,
        required: [true, 'longitude is required'],
        trim: true,
    }
}, {
    timestamps: true
})

const District = mongoose.model('District', userSchema)

module.exports = District