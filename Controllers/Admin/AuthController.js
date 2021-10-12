import {Admin} from '../../Models/Admin.js';
import {successResponse, errorResponse} from '../../server_responses/response.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { RefreshToken } from '../../Models/RefreshTokens.js';

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
                const token = jwt.sign({ admin }, process.env.SECRET, {expiresIn: '30m'})

                const refresh_token = jwt.sign({ admin }, process.env.REFRESH_SECRET)

                if(token && refresh_token)
                {
                    await RefreshToken.createToken({refresh_token, provider: 'admin'})

                    return successResponse(req, res, 'success', {token, refresh_token})
                }
            }

            return errorResponse(req, res, 'Error', 500)
        }
        catch(error)
        {
            return errorResponse(req, res, error)
        }
    }

    async refreshToken(req, res)
    {
        const refresh_token = req.body.refresh_token

        if(refresh_token === null)
        {
            return res.sendStatus(401);
        }

        const existing_token = await RefreshToken.findOne({refresh_token, provider: 'admin'})

        if(existing_token)
        {
            const token =  jwt.verify(refresh_token, process.env.REFRESH_SECRET, (error, admin) => {

                if(error)
                {
                    return res.sendStatus(403)
                }

                delete admin.iat //delete the previous issued at

                return jwt.sign({ admin }, process.env.SECRET, {expiresIn: '30m'})
            })

            return successResponse(req, res, 'success', { token })

        }

        return res.sendStatus(401)

    }

    async logout(req, res)
    {
       const refresh_token = req.body.refresh_token

        if(refresh_token === null)
        {
            return res.sendStatus(401)
        }

        await RefreshToken.deleteOne({refresh_token, provider: 'admin'})

        return successResponse(req, res, 'success', {}, 204)
    }
}


const AdminAuthController = new AuthController()

export default AdminAuthController