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
}, {
    timestamps: true
})

class AdminClass {

    async create_admin(data){

        await this.create(data)

        return { message: "new admin created", error: false, data: null }
    }
}

adminSchema.loadClass(AdminClass)

const Admin = mongoose.model('Admin', adminSchema )

export { Admin }
