import mongoose from "mongoose"

const { Schema } = mongoose

const facilitatorSchema = new Schema({
    name : {
        type: String,
        required: true,
        trim: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password : {
        type: String,
        required: true,
    },
    isSuperAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    status : {
        type: Boolean,
        default: true
    },
    facility : {
        type: Schema.Types.ObjectId,
        ref: 'Facility',
        required: true,
    },
}, {
    timestamps: true
})

class FacilitatorClass {

    static async addNewFacilitator(data)
    {
        return this.create(data);
    }
}

facilitatorSchema.loadClass(FacilitatorClass)

const Facilitator = mongoose.model('User', facilitatorSchema )

export { Facilitator }
