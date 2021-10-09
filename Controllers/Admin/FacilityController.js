import {Facility} from "../../Models/Facility.js";
import { errorResponse,successResponse } from "../../server_responses/response.js";

class FacilityController
{
    async createFacility(req, res)
    {
        try{
            let {name, name_of_district_health_directorate, lat, long,  address_of_district_health_directorate} = req.body

            let {message, data, error } = await Facility.createFacilty({name, name_of_district_health_directorate, address_of_district_health_directorate, lat, long})

            return successResponse(req,res,message, data)
        }
        catch (error) {

            return errorResponse(req,res,error)
        }
    }

    async getFacilities(req, res)
    {

    }


    async getFacility(req, res)
    {
        return successResponse()
    }

    async updateFacility()
    {

    }


    async deleteFacility()
    {
        
    }
}

const facility_controller = new FacilityController()

export default facility_controller