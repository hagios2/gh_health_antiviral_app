import {Region} from "../../Models/Region.js";
import { errorResponse, successResponse } from "../../server_responses/response.js";

class RegionController
{
    async createRegion(req, res)
    {
        
        try{
            let {name, name_of_regional_minister, address_of_regional_minister, name_of_director_general, address_of_director_general, name_of_regional_health_director, address_of_regional_health_director } = req.body

            let existing_regions = await Region.find({name})

            if(Object.keys(existing_regions).length > 0)
            {    
                return errorResponse(req, res, 'Name of Region has already been taken', 422)
            }

            let {message, data } = await Region.addNewRegion({name, name_of_regional_minister, address_of_regional_minister, name_of_director_general,  address_of_director_general, name_of_regional_health_director, address_of_regional_health_director})

            return successResponse(req, res, message, data)
        }
        catch (error) {

            return errorResponse(req, res, error)
        }
    }


    async getRegions(req, res)
    {
        try{
            
            let regions = await Region.find({})

            return successResponse(req, res, 'success', regions)
        }
        catch(error){
            
            return errorResponse(req,res,error)
        }
    }


    async getRegion(req, res)
    {
        try{
            
            let region = await Region.findById(req.params.region_id)

            if(Object.keys(region).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }

            await region.populate('districts').execPopulate()

            return successResponse(req, res, 'success', region)
        }
        catch(error){
            
            return errorResponse(req,res,error, 404)
        }
    }

    async updateRegion(req, res)
    {
        try{
            
            let data = await Region.findById(req.params.region_id)

            if(Object.keys(data).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }

            let {name, name_of_regional_minister, address_of_regional_minister, name_of_director_general, address_of_director_general, name_of_regional_health_director, address_of_regional_health_director } = req.body

           let updated_data = await Region.updateOne({_id: req.params.region_id}, {name, name_of_regional_minister, address_of_regional_minister, name_of_director_general, address_of_director_general, name_of_regional_health_director, address_of_regional_health_director})

            return successResponse(req, res, 'Region updated', updated_data)
        }
        catch(error){
            
            return errorResponse(req,res,error, 404)
        }
    }


    async deleteRegion(req, res)
    {
        try{
            
            let data = await Region.findById(req.params.region_id)

            if(Object.keys(data).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }

            await Region.remove({_id: req.params.region_id})

            return successResponse(req, res, 'Region deleted', {})
        }
        catch(error){
            
            return errorResponse(req,res,error, 404)
        }
    }
}

const region_controller = new RegionController()

export default region_controller

