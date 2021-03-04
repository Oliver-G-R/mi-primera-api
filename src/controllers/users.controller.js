
import usersScheme from '../models/Contacts'

const getUsersAll = async (req, res) => {
    try {
        const data = await usersScheme.find()
        res.json(data)
    } catch (e) {
        res.status(500).json({
            message: e.message || "Un error al mostrar las tareas"
        })
    }
}

const createUser = async (req, res) => {

    try {
        const contacts = new usersScheme(req.body)
        await contacts.save()
        res.json('Saving....')
    } catch (e) {
        res.status(500).json({
            message: e.message || "Un error al crear la tarea"
        })
    }
}

const getUserforId = async (req, res) => {
    const contact = await usersScheme.findById(req.params.id)
    res.json(contact)
}

const deleteUserForId = async (req, res) => {
    const contact = await usersScheme.findByIdAndDelete(req.params.id)

    res.json({
        message: `Delete user ${contact.userName}`
    })
}

const updateUser = async (req, res) => {
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