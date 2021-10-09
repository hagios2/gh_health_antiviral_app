import {District} from "../../Models/District.js";
import { errorResponse,successResponse } from "../../server_responses/response.js";

class DistrictController
{
    async createDistrict(req, res)
    {
        try{
            let {name, name_of_district_health_directorate, lat, long,  address_of_district_health_directorate} = req.body

            let {message, data, error } = await District.addNewDistrict({name, name_of_district_health_directorate, address_of_district_health_directorate, lat, long})

            return successResponse(req,res,message, data)
        }
        catch (error) {

            return errorResponse(req,res,error)
        }
    }

    async getDistricts(req, res)
    {

    }


    async getDistrict(req, res)
    {
        return successResponse()
    }

    async updateDistrict()
    {

    }


    async deleteDistrict()
    {
        
    }
}

const district_controller = new DistrictController()

export default district_controller