import User from '../users/user.model.js'
import { hash } from 'argon2'

export const register = async (req, res) => {
    try{
        const data = req.body

        let profilePicture = req.fileRelativePath || 'profiles/default-avatar.png'
        const encrypedPassword = await hash(data.password)

        const newUser = await User.create({
            name: data.name,
            surname: data.surname,
            username: data.username,
            email: data.email,
            password: data.password,
            profilePicture
        })
    }catch(error){
        return res.status(500).json({
            message: 'Error al registrar al usuario',
            err: error.menssage
        })
    }
}