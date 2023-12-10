import { UserModel } from "./models/user.model.js";

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
            const { email, password } = user;
            const userExists = await this.findUserByEmail(email);
    
            if (userExists) {
                throw new Error(`Ya existe un usuario con el email: ${email}`);
            } else {
                if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') user.role = 'admin';
                const response = await UserModel.create(user);
                return response;
            }
        } catch (error) {
            throw new Error('Ocurrió un error durante el registro');
        }
    }
    

    async login(user) {
        try {
            const { email, password } = user;
            const userExists = await UserModel.findOne({ email, password });
    
            if (!userExists) {
                const response = ({error:`El email o la contraseña son incorrectos`});
                return response
            }
    
            return userExists;
        } catch (error) {
            // Manejo del error
            console.error(error); // Registrando el error para su seguimiento
    
            throw new Error('Ocurrió un error durante el inicio de sesión'); // Relanzar el error para la gestión global
        }
    }
    
}