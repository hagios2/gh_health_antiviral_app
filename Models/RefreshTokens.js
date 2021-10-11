import mongoose from "mongoose"

const { Schema } = mongoose

const refreshTokenSchema = new Schema({
    refresh_token : {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },
    provider : {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true
})


class RefreshTokenClass {

    static async createToken(data)
    {
        return this.create(data)
    }

}

refreshTokenSchema.loadClass(RefreshTokenClass)

const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema)

export { RefreshToken }