import {District} from "../Models/District";
import { errorResponse,successResponse } from "../server_responses/response";

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

    verifyToken(req, res, next)
    {
        const bearerHeader = req.headers['authorization']

        if(typeof bearerHeader !== 'undefined')
        {
            const bearer = bearerHeader.split(' ')

            const token = bearer[1]

            req.token = token

            next();

        }else{

            res.sendStatus(403)
        }
    }
}