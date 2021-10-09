import mongoose from "mongoose";

const Schema = mongoose.Schema

const facilitySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    town: {
        type: String,
        required: true,
        trim: true,
    },
    lat: {
        type: String,
        required: true,
        trim: true,
    },
    lat: {
        type: String,
        required: true,
        trim: true,
    },
    district_id: {
        type: String,
        required: true,
        trim: true,
    }

}, {
    timestamps: true
})


class FacilityClass{

    async create_facility(data)
    {
        await this.create(data)

        return {message: 'New Facility Created', error: false, data: null }
    }
}

const Facility = mongoose.model('Facility', facilitySchema)

export {Facility}