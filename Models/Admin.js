import mongoose from "mongoose"

const { Schema } = mongoose

const adminSchema = new Schema({
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
    status : {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
})

class AdminClass {

    async create_admin(data)
    {
        return this.create(data);
    }
}

adminSchema.loadClass(AdminClass)

const Admin = mongoose.model('Admin', adminSchema )

export { Admin }
