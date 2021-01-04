import app from "./app"
import './database'

//Escucha el servidor en un puerto
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})