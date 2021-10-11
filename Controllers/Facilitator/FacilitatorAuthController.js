import {Facilitator } from '../../Models/Facility.js';
import {successResponse, errorResponse} from '../../server_responses/response.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class FacilitatorAuthController
{
    async addAdmin(req, res){

        try{

            let  { name, email, password} = req.body

            const hashedPassword = await bcrypt.hash(password, 10)

            if(hashedPassword)
            {
                await Admin.create_admin({name, email, password: hashedPassword})

                return successResponse(req, res, 'success', {}, 201)
            }

        }catch (error) {

            return errorResponse(req,res, error)
        }
    }

    async fetchAdmins(req, res){

        try{

            let admins = await Admin.find({})

            return successResponse(req, res, 'success', admins)

        }catch (error) {

            return errorResponse(req,res, error)
        }
    }

    async login(req, res) {

        try{

            let {email, password} = req.body

            let facility = await Facility.findOne({email, status: true})

            if(!facility)
            {
                return errorResponse(req, res, 'Invalid Credentials', 401)
            }

            if(await bcrypt.compare(password, facility.password))
            {
                const token = jwt.sign({ facility }, process.env.SECRET)

                if(token)
                {
                    console.log(token, 'access token')

                    return successResponse(req, res, 'success', {token})
                }
            }

            return errorResponse(req, res, 'Error', 500)
        }
        catch(error)
        {
            return errorResponse(req, res, error)
        }
    }
}


const FacilitatorAuthController = new FacilitatorAuthController()

export default FacilitatorAuthController