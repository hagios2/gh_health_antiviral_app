import {Facility} from "../../Models/Facility.js";
import { errorResponse,successResponse } from "../../server_responses/response.js";

class FacilityController
{
    async createFacility(req, res)
    {
       
        try{
            let {name, lat, long, district_id} = req.body

            let data = await Facility.addNewFacility({name, lat, long, district_id})

            // return res.json({data: req.body})
            
            return successResponse(req, res, 'success', data)

        }
        catch(error){
            
            return errorResponse(req,res,error)
        }
    }

    async getFacilities(req, res)
    {
        try{
            
            let data = await Facility.find({})

            return successResponse(req, res, 'success', data)
        }
        catch(error){
            
            return errorResponse(req,res,error)
        }
    }

    async getFacility(req, res)
    {
        try{
            
            let data = await Facility.findById(req.params.facility_id)

            if(Object.keys(data).length === 0)
            {    
                return errorResponse(req, res, 'Not Found', 404)
            }

            return successResponse(req, res, 'success', data)
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

            let { name, lat, long, district_id} = req.body

            let updated_data = await Facility.updateOne({_id: req.params.facility_id}, {name, lat, long, district_id})

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

            await Facility.remove({_id: req.params.facility_id})

            return successResponse(req, res, 'Facility deleted', {})
        }
        catch(error){
            
            return errorResponse(req, res, 'Not Found', 404)
        }
    }
}

const facility_controller = new FacilityController()

export default facility_controller