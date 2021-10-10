import {District} from "../../Models/District.js";
import { errorResponse,successResponse } from "../../server_responses/response.js";

class DistrictController
{
    async createDistrict(req, res)
    {
        try{
            let {name, address_of_district_health_directorate, name_of_district_health_directorate, region} = req.body

            let existing_district = await District.find({name})

            if(Object.keys(existing_district).length > 0)
            {    
                return errorResponse(req, res, 'Name of District has already been taken', 422)
            }

            let new_district = await District.addNewDistrict({name, address_of_district_health_directorate, name_of_district_health_directorate, region})

            return successResponse(req, res, 'success', new_district)
        }
        catch (error) {

            return errorResponse(req,res,error)
        }
    }

    async getDistricts(req, res)
    {
        try{
            
            let districts = await District.find({})

            return successResponse(req, res, 'success', districts)
        }
        catch(error){
            
            return errorResponse(req,res,error)
        }
    }


    async getDistrict(req, res)
    {
        try{
            
            let district = await District.findById(req.params.district_id)

            if(Object.keys(district).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }
            
            await district.populate(region).exePopulate()

            return successResponse(req, res, 'success', district)
        }
        catch(error){
            
            return errorResponse(req,res,error, 404)
        }
    }

    async updateDistrict(req, res)
    {
        try{
            
            let data = await District.findById(req.params.district_id)

            if(Object.keys(data).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }

            let { name, address_of_district_health_directorate, name_of_district_health_directorate, region} = req.body

           let updated_data = await District.updateOne({_id: req.params.district_id}, {name, address_of_district_health_directorate, name_of_district_health_directorate, region})

            return successResponse(req, res, 'District updated', updated_data)
        }
        catch(error){
            
            return errorResponse(req,res,error, 404)
        }
    }


    async deleteDistrict(req, res)
    {
        try{
            
            let data = await District.findById(req.params.district_id)

            if(Object.keys(data).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }

            await District.remove({_id: req.params.district_id})

            return successResponse(req, res, 'District deleted', {})
        }
        catch(error){
            
            return errorResponse(req,res,error, 404)
        }
    }
}

const district_controller = new DistrictController()

export default district_controller