import mongoose from "mongoose"
import {successResponse} from "../server_responses/response.js";

const { Schema } = mongoose

const regionSchema = new Schema({
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

class RegionClass{

    static async addNewRegion(data)
    {
        return this.create(data)
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

regionSchema.loadClass(RegionClass)

const Region = mongoose.model('Region', regionSchema)

export { Region }