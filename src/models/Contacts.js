import { Schema, model } from 'mongoose'

const requireParams = {
    type: String,
    required: true,
    trim: true,
}

const contactsSchema = new Schema({
    firstName: requireParams,
    lastName: requireParams,

    userName: requireParams,
    email: requireParams,
    password: requireParams,
    tel: requireParams,

})

export default model('contacts', contactsSchema)