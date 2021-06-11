import {Admin} from "../../Models/Admin.js";

class AdminController
{
    async addAdmin(req, res){

        try{
            let  { name, email, password} = req.body

            const new_admin = ({email, name, password}) //todo change password to hashed

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
}


model.exports = controller