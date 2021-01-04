import usersScheme from '../models/Contacts'

const getUsersAll = async(req, res) => {
    const data = await usersScheme.find()
    res.json(data)
}

const createUser = async(req, res) => {
    const contacts = new usersScheme(req.body)
    await contacts.save()

    console.log(contacts)
    res.json('Saving....')
}

const getUserforId = async(req, res) => {
    const contact = await usersScheme.findById(req.params.id)
    res.json(contact)
}

const deleteUserForId = async(req , res) => {
    const contact = await usersScheme.findByIdAndDelete(req.params.id)

    res.json({
        message: `Delete user ${contact.userName}`
    })
}

const updateUser = async(req , res) => {
    const contact = await usersScheme.findByIdAndUpdate(req.params.id, req.body)

    res.json('Updating')
}



export {
    getUsersAll,
    getUserforId,
    deleteUserForId,
    createUser,
    updateUser
}