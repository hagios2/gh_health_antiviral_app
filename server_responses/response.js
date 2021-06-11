const errorResponse = (req,res, error, code=500) => {

    return res.status(code).json({
        error: error,
        data: null,
    })
}

const successResponse = (req,res, msg="OK", data=null, code=200) => {

    return res.status(code).json({
        success: msg,
        data: data
    })
}

export { errorResponse, successResponse }