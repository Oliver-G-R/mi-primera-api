import { check, validationResult } from 'express-validator'
import ContactSchema from '../models/Contacts'


const equalRequirements = ({ min = 3, max = 22, message = '', campo }) => [
    check(campo)
        .isLength({ min, max })
        .withMessage(message)
        .trim(),
]

const validateEqualUserName = async (userName) => {
    const equalUser = await ContactSchema.find({ userName }).countDocuments()


    return equalUser > 0 && Promise.reject('Este usuario ya esta en uso')

}

const requireValidationsUser = [
    equalRequirements({ message: 'El nombre tiene que tener 3 caracteres como minimo y 23 como máximo', campo: 'firstName' }),

    equalRequirements({ message: 'El apellido tiene que tener 3 caracteres como minimo y 23 como máximo', campo: 'lastName' }),

    check('userName')
        .custom(userName => validateEqualUserName(userName))
        .isLength({ min: 3, max: 22 })
        .withMessage('El máximo son 23 caracteres y el minimo 3')
        .trim(),

    check('email')
        .isEmail()
        .withMessage('Correo invalido')
        .trim(),
    check('password')
        .isLength({ min: 8, max: 15 })
        .withMessage('El máximo de caracteres son 15 y el minimo 8')
        .matches(/\d/)
        .withMessage('La contraseña debe tener al menos un número')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('La contraseña debe tener caracteres especiales'),
    check('tel')
        .trim()
        .isMobilePhone()
        .withMessage('No es un número de télefono valido')
]

const showErrors = (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg)
    const hasError = !error.isEmpty()

    hasError ? res.status(422).json({ error: error.array() })
        : next()

}

export {
    requireValidationsUser,
    showErrors
}