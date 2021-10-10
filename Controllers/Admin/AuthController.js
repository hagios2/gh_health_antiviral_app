import {Admin} from '../../Models/Admin.js';
import {successResponse, errorResponse} from '../../server_responses/response.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class AuthController
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

            let admin = await Admin.findOne({email, status: true})

            if(!admin)
            {
                return errorResponse(req, res, 'Invalid Credentials', 401) 
            }

            if(await bcrypt.compare(password, admin.password))
            {   
                const token = jwt.sign({ admin }, process.env.SECRET)

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


const AdminAuthController = new AuthController()

export default AdminAuthController