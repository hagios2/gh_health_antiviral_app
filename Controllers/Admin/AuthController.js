import {Admin} from '../../Models/Admin.js';
import {successResponse, errorResponse} from '../../server_responses/response.js'

class AuthController
{
    async addAdmin(req, res){

        try{
            let  { name, email, password} = req.body

            //todo change password to hashed

            let admin = await Admin.create_admin({name, email, password})

            return successResponse(req,res, message, admin)

        }catch (error) {

            return errorResponse(req,res, error)
        }
    }

    async login(req, res){

        try{
            
            let {email, password} = req.body

            let admin = Admin.findOne({email, password})

            if(!admin)
            {
                return errorResponse(req, res, 'Invalid Credentials', 401) 
            }
    
            const access_token = jwt.sign(admin, process.env.SECRET)
                    
                
            return successResponse(req, res, 'success', {access_token})
        }
        catch(error)
        {
            return errorResponse(req, res, error)
        }
    }

    async verifyToken(req, res, next)
    {
        const bearerHeader = req.headers['authorization']

        if(typeof bearerHeader !== 'undefined')
        {
            const bearer = bearerHeader.split(' ')

            req.token = bearer[1]

            next();

        }else{

            res.sendStatus(403)
        }
    }
}


const AdminAuthController = new AuthController()

export default AdminAuthController