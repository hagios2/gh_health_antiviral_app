import mongoose from "mongoose"

const { Schema } = mongoose

const victimSchema = new Schema({
    name : {
        type: String,
        required: true,
        trim: true,
    },
    dob : {
        type: Date,
        required: true,
    },
    gender : {
        type: String,
        required: true,
    },
    town : {
        type: String,
        required: true,
    },
    district : {
        type: Schema.Types.ObjectId,
        ref: 'District',
        required: true
    },
}, {
    timestamps: true
})

class VictimClass {

    static async createVictim(data)
    {
        return this.create(data);
    }
}

victimSchema.loadClass(VictimClass)

const Victim = mongoose.model('Victim', victimSchema)

export { Victim }
