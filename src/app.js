import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import usersRoutes from './routes/users.routes'

//Se inicia express
const app = express()

//Configuraciones
//Se establece un puerto
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
//Rutas
app.use('/api/users' , usersRoutes)

export default app