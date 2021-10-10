import mongoose from "mongoose";

const { Schema } = mongoose

const facilitySchema = new Schema({
    name: {
        type: String,
        required: true,
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
    },
    district_id: {type: Schema.Types.ObjectId, ref: 'District', required: true},
}, {
    timestamps: true
})


class FacilityClass{

    static async addNewFacility(data)
    {
        return await this.create(data)
    }
}

facilitySchema.loadClass(FacilityClass)

const Facility = mongoose.model('Facility', facilitySchema)

export {Facility}