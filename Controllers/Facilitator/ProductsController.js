import {Product} from "../../Models/Product.js";
import { errorResponse,successResponse } from "../../server_responses/response.js";

class ProductsController
{
    async createProduct(req, res)
    {
        try{

            let {name, quantity, expiry_date, facility, source, brand, description } = req.body

            let receiver = req.user.facilitator._id

            let new_product = await Product.addNewProduct({name, quantity, expiry_date, facility, source, brand, receiver, description})

            return successResponse(req, res, 'success', new_product)
        }
        catch (error) {

            return errorResponse(req,res,error)
        }
    }

    async fetchProducts(req, res)
    {
        try{

            let products = await Product.find({})

            return successResponse(req, res, 'success', products)
        }
        catch(error){

            return errorResponse(req,res,error)
        }
    }


    async fetchProduct(req, res)
    {
        try{

            let product = await Product.findById(req.params.product_id)

            if(!product)
            {
                return errorResponse(req, res, 'Not Found', 404)
            }

            return successResponse(req, res, 'success', product)
        }
        catch(error){

            return errorResponse(req,res,error, 404)
        }
    }

    async updateProduct(req, res)
    {
        try{

            let product = await Product.findById(req.params.product_id)

            if(!product)
            {
                return errorResponse(req, res, 'Not Found', 404)
            }

            let { name, quantity, expiry_date, facility, source, brand, description } = req.body

            let receiver = req.user.facilitator._id

            let updated_data = await Product.updateOne({_id: req.params.product_id}, {name, quantity, expiry_date, facility, source, brand, description, receiver })

            return successResponse(req, res, 'Product updated', updated_data)
        }
        catch(error){

            return errorResponse(req,res,error, 404)
        }
    }


    async deleteProduct(req, res)
    {
        try{

            let product = await Product.findById(req.params.product_id)

            if(Object.keys(product).length === 0)
            {
                return errorResponse(req, res, 'Not Found', 404)
            }

            await Product.deleteOne({_id: req.params.product_id})

            return successResponse(req, res, 'Product deleted', {})
        }
        catch(error){

            return errorResponse(req,res,error, 404)
        }
    }
}

const product_controller = new ProductsController()

export default product_controller