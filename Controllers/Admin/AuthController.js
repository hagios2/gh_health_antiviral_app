import {Admin} from "../../Models/Admin.js";

class AuthController
{
    async addAdmin(req, res){

        try{
            let  { name, email, password} = req.body

            //todo change password to hashed

            let {message, data, error} = await Admin.create_admin({name, email, password})

            return successResponse(req,res, message, data)

        }catch (e) {

        }
    }

    login(req, res){

        let email = req.body.email
        let password = req.body.password

        Admin.find({email, password})
            .then(user => {
                jwt.sign({user}, process.env.SECRET, (err, token) => {
                    res.json({token})
                })
            })
            .catch(err => res.status(400).json({message: `Error: ${err}`}))
    }

    verifyToken(req, res, next)
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


const admin_auth_controller = new AuthController()

export default admin_auth_controller