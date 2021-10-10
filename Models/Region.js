import mongoose from "mongoose"

const { Schema } = mongoose

const regionSchema = new Schema({
    name : {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },
    name_of_regional_minister : {
        type: String,
        required: true,
        trim: true,
    },
    address_of_regional_minister : {
        type: String,
        required: true,
        trim: true,
    },
    name_of_director_general : {
        type: String,
        required: true,
        trim: true,
    },
    address_of_director_general : {
        type: String,
        required: true,
        trim: true,
    },
    name_of_regional_health_director : {
        type: String,
        required: true,
        trim: true,
    },
    address_of_regional_health_director : {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
})

regionSchema.virtual('districts', {
    ref: 'District',
    localField: '_id',
    foreignField: 'region'
})

class RegionClass{

    static async addNewRegion(data)
    {
        return this.create(data)
    }

}

regionSchema.loadClass(RegionClass)

const Region = mongoose.model('Region', regionSchema)

export { Region }