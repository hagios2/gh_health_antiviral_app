import {District} from "../../Models/District";
import { errorResponse,successResponse } from "../../server_responses/response";

class DistrictController
{
    static async createDistrict(req, res)
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
}

const district_controller = new DistrictController()

export default district_controller