import { Router }  from 'express'

const routes = Router()

//Controladores de respuesta y petición
import {getUsersAll , getUserforId , deleteUserForId, createUser, updateUser} from '../controllers/users.controller'

routes.get('/', getUsersAll)

routes.post('/' , createUser)

routes.get('/:id', getUserforId)

routes.delete('/:id', deleteUserForId)

routes.put('/:id', updateUser)


export default routes