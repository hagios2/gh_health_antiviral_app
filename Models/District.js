import mongoose from "mongoose"
import {successResponse} from "../server_responses/response.js";

const { Schema } = mongoose

const districtSchema = new Schema({
    name : {
        type: String,
        required: [true, 'name is required'],
        unique:true,
        trim: true,
    },
    region_id: {type: Schema.Types.ObjectId, ref: 'Region', required: true},
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

class DistrictClass{

    static async addNewDistrict(data)
    {
        return this.create(data)

        // return { message: "new admin created", error: false, data: null }
    }

    static async getDistricts(req, res)
    {
        let districts = await this.find({}).exec()

        let message = 'success'

        if (districts.length > 0)
        {
            return successResponse(req,res,message, districts)

        }else{

            return successResponse(req,res, 'No Data found', [])
        }
    }

    static async getADistrict(req, res)
    {
        let district_id = req.body?.district_id

        let districts = await this.find({_id: district_id}).exec()

        let message = 'success'

        if (disticts.length > 0)
        {
            return successResponse(req,res,message, districts)

        }else{

            return successResponse(req,res, 'No Data found', districts)
        }
    }
}

districtSchema.loadClass(DistrictClass)

const District = mongoose.model('District', districtSchema)

export { District }