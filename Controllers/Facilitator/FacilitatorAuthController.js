import { Facilitator } from '../../Models/User.js';
import {successResponse, errorResponse} from '../../server_responses/response.js'
import {RefreshToken} from "../../Models/RefreshTokens.js";
import { facilitatorRegisterMailer } from "../../Mails/FacilitatorRegisterMailer.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


class FacilitatorAuthController
{
    async createFacilitator(req, res){

        try{

            let  { name, email, password, facility} = req.body

            const hashedPassword = await bcrypt.hash(password, 10)

            if(hashedPassword)
            {
                let facilitator = await Facilitator.addNewFacilitator({name, email, password: hashedPassword, facility, isSuperAdmin: true})

                await facilitatorRegisterMailer(facilitator)

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

            let facility = await Facilitator.findOne({email, status: true})

            if(!facility)
            {
                return errorResponse(req, res, 'Invalid Credentials', 401)
            }

            if(await bcrypt.compare(password, facility.password))
            {
                const token = jwt.sign({ facility }, process.env.FACILITATOR_SECRET)

                const refresh_token = jwt.sign({ facility }, process.env.FACILITATOR_REFRESH_SECRET)

                if(token && refresh_token)
                {
                    await RefreshToken.createToken({refresh_token, provider: 'facilitator'})

                    return successResponse(req, res, 'success', {token, refresh_token})
                }

                return errorResponse(req, res, 'Whoops something went wrong')
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

        const existing_token = await RefreshToken.findOne({refresh_token, provider: 'facilitator'})

        if(existing_token)
        {
            const token =  jwt.verify(refresh_token, process.env.FACILITATOR_REFRESH_SECRET, (error, facilitator) => {

                if(error)
                {
                    return res.sendStatus(403)
                }

                delete facilitator.iat //delete the previous issued at

                return jwt.sign({ facilitator }, process.env.FACILITATOR_REFRESH_SECRET, {expiresIn: '30m'})
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

        await RefreshToken.deleteOne({refresh_token, provider: 'facilitator'})

        return successResponse(req, res, 'success', {}, 204)
    }
}


const facilitatorAuthController = new FacilitatorAuthController()

export default facilitatorAuthController