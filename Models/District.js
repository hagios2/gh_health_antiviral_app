import mongoose from "mongoose"
import { Facility } from "./Facility.js"

const { Schema } = mongoose

const districtSchema = new Schema({
    name : {
        type: String,
        required: [true, 'name is required'],
        unique:true,
        trim: true,
    },
    region: {type: Schema.Types.ObjectId, ref: 'Region', required: true},
    name_of_district_health_directorate : {
        type: String,
        required: [true, 'name of district health directorate is required'],
        trim: true,
    },
    address_of_district_health_directorate : {
        type: String,
        required: [true, 'address of district health directorate is required'],
        trim: true,
    }
}, {
    timestamps: true
})

districtSchema.virtual('facilities', {
    ref: 'Facility',
    localField: '_id',
    foreignField: 'facility'
})
class DistrictClass{

    static async addNewDistrict(data)
    {
        return await this.create(data)
    }
   
}

districtSchema.loadClass(DistrictClass)

const District = mongoose.model('District', districtSchema)

export { District }