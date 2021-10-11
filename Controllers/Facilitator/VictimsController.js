import {Victim} from "../../Models/Victim.js";
import { errorResponse,successResponse } from "../../server_responses/response.js";

class VictimController
{
    async createVictim(req, res)
    {
        try{
            let {name, dob, town, district, gender} = req.body

            let new_victim = await Victim.createVictim({name, dob, town, gender, district})

            return successResponse(req, res, 'success', new_victim)
        }
        catch (error) {

            return errorResponse(req,res,error)
        }
    }

    async fetchVictims(req, res)
    {
        try{

            let victims = await Victim.find({})

            return successResponse(req, res, 'success', victims)
        }
        catch(error){

            return errorResponse(req,res,error)
        }
    }


    async fetchVictim(req, res)
    {
        try{

            let victim = await Victim.findById(req.params.victim_id)

            if(!victim)
            {
                return errorResponse(req, res, 'Not Found', 404)
            }

            return successResponse(req, res, 'success', victim)
        }
        catch(error){

            return errorResponse(req,res,error, 404)
        }
    }

    async updateVictim(req, res)
    {
        try{

            let victim = await Victim.findById(req.params.victim_id)

            if(!victim)
            {
                return errorResponse(req, res, 'Not Found', 404)
            }

            let { name, dob, gender, town, district} = req.body

            let updated_data = await Victim.updateOne({_id: req.params.victim_id}, {name, dob, gender, town, district})

            return successResponse(req, res, 'Victim updated', updated_data)
        }
        catch(error){

            return errorResponse(req,res,error, 404)
        }
    }


    async deleteVictim(req, res)
    {
        try{

            let victim = await Victim.findById(req.params.victim_id)

            if(Object.keys(victim).length === 0)
            {
                return errorResponse(req, res, 'Not Found', 404)
            }

            await Victim.remove({_id: req.params.victim_id})

            return successResponse(req, res, 'Victim deleted', {})
        }
        catch(error){

            return errorResponse(req,res,error, 404)
        }
    }
}

const victim_controller = new VictimController()

export default victim_controller