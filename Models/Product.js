import mongoose from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema({
    name : {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },
    quantity : {
        type: Number,
        required: true,
    },
    expiry_date : {
        type: Date,
        required: true,
    },
    facility: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Facility'
    },
    source : {
        type: String,
        required: true,
        trim: true,
    },
    brand : {
        type: String,
        required: true,
        trim: true,
    },
    description : {
        type: Text,
        required: false,
        trim: true,
    },
    receiver : {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true
})

class ProductClass {

    static async addNewProduct(data)
    {
        return this.create(data);
    }
}

productSchema.loadClass(ProductClass)

const Product = mongoose.model('Product', productSchema)

export { Product }