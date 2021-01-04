import { Schema , model} from 'mongoose'

const requireParams = {
    type: String,
    required: true,
    trim: true,
}

const contactsSchema = new Schema({
    fritsName: requireParams,
    lastName: requireParams,
    
    userName: requireParams,
    email: requireParams,
    password: {
        ...requireParams,
        min: 8,
        max: 15
    },
    tel: requireParams,
    
}, {
    versionKey: false,
    timestamps: true
})

export default model('contacts', contactsSchema)