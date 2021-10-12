import {Facility} from "../../Models/Facility.js";
import { errorResponse,successResponse } from "../../server_responses/response.js";

class FacilityController
{
    async createFacility(req, res)
    {
       
        try{
            let {name, lat, long, district_id} = req.body

            let facility = await Facility.addNewFacility({name, lat, long, district_id})
            
            return successResponse(req, res, 'success', facility)

        }
        catch(error){
            
            return errorResponse(req,res,error)
        }
    }

    async getFacilities(req, res)
    {
        try{

            return successResponse(req, res, 'success', res.paginatedResults )

        }
        catch(error){
            
            return errorResponse(req,res,error)
        }
    }

    async getFacility(req, res)
    {
        try{
            
            let facility = await Facility.findById(req.params.facility_id)

            if(Object.keys(facility).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }

            await facility.populate('district').execPopulate()

            return successResponse(req, res, 'success', facility)
        }
        catch(error){
            
            return errorResponse(req,res,error, 404)
        }
    }

    async updateFacility(req, res)
    {
        try{
            
            let data = await Facility.findById(req.params.facility_id)

            if(Object.keys(data).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }

            let { name, lat, long, district} = req.body

            let updated_data = await Facility.updateOne({_id: req.params.facility_id}, {name, lat, long, district})

            return successResponse(req, res, 'District updated', updated_data)
        }
        catch(error){
            
            return errorResponse(req,res, 'Not Found', 404)
        }
    }


    async deleteFacility(req, res)
    {
        try{
            
            let data = await Facility.findById(req.params.facility_id)

            if(Object.keys(data).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }

            await Facility.deleteOne({_id: req.params.facility_id})

            return successResponse(req, res, 'Facility deleted')
        }
        catch(error){
            
            return errorResponse(req, res, 'Not Found', 404)
        }
    }
}

const facility_controller = new FacilityController()

export default facility_controller