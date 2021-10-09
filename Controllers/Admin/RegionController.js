import {Region} from "../../Models/Region.js";
import { errorResponse, successResponse } from "../../server_responses/response.js";

class RegionController
{
    async createRegion(req, res)
    {
        try{
            let {name, name_of_regional_minister, address_of_regional_minister, name_of_director_general,  address_of_director_general, name_of_regional_health_director, address_of_regional_health_director} = req.body

            let {message, data, error } = await Region.addNewRegion({name, name_of_regional_minister, address_of_regional_minister, name_of_director_general,  address_of_director_general, name_of_regional_health_director, address_of_regional_health_director})

            return successResponse(req,res,message, data)
        }
        catch (error) {

            return errorResponse(req,res,error)
        }
    }


    async getRegions(req, res)
    {

    }


    async getRegion(req, res)
    {
        return successResponse()
    }

    async updateRegion()
    {

    }


    async deleteRegion()
    {
        
    }
}

const region_controller = new RegionController()

export default region_controller

