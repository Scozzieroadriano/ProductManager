import { UserModel } from "./models/user.model";

export default class UserDao {

    async findUserByEmail(email) {
        try {
            const user = await UserModel.findOne({ email: email });
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async register(user) {
        try {
            const {email} = user;
            const userExists = await this.findUserByEmail(email);
            if (!userExists) {
                const response = await UserModel.create(user);
                return response;
            } else {
                const response = { message: `Ya existe un usuario con el email: ${email}` }
                return response
            }
        } catch (error) {
            console.log(error);
        }
    }

    async login(user) {
        try {
            const {email, password} = user;
            const userExists = await this.findUserByEmail(email);
            if (userExists) {
                if (userExists.password === password) {
                    return userExists;
                } else {
                    const response = { message: `Contraseña incorrecta` }
                    return response
                }
            } else {
                const response = { message: `No existe un usuario con el email: ${email}` }
                return response
            }
        } catch (error) {
            console.log(error);
        }
    }
}