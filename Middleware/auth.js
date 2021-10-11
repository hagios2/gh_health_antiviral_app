import jwt from 'jsonwebtoken'

const verifyToken = async (req, res, next) =>
{
    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined')
    {
        const token = bearerHeader.split(' ')[1]

        jwt.verify(token, process.env.SECRET, (error, admin) => {

            if(error)
            {
                return res.sendStatus(403)
            }

            req.user = admin

            next()
        })

    }else{

        return res.sendStatus(401)
    }
}


const verifyFacilitatorToken = async (req, res, next) =>
{
    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined')
    {
        const token = bearerHeader.split(' ')[1]

        jwt.verify(token, process.env.FACILITATOR_SECRET, (error, admin) => {

            if(error)
            {
                return res.sendStatus(403)
            }

            req.user = admin

            next()
        })

    }else{

        return res.sendStatus(401)
    }
}


export { verifyToken, verifyFacilitatorToken }