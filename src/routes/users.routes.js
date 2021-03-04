import { Router } from 'express'

const routes = Router()

//Controladores de respuesta y petición
import { getUsersAll, getUserforId, deleteUserForId, createUser, updateUser } from '../controllers/users.controller'

/* Validaciones */
import { requireValidationsUser, showErrors } from '../validations/validationsUsers'

routes.get('/', getUsersAll)

routes.post(
    '/',
    requireValidationsUser,
    showErrors,
    createUser
)

routes.get('/:id', getUserforId)

routes.delete('/:id', deleteUserForId)

routes.put('/:id', updateUser)


export default routes