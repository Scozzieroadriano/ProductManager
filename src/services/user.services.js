import UserDao from "../daos/mongodb/user.dao.js";

export default class UserService {
    constructor() {
        this.userDao = new UserDao();
    }

    async register(user) {
        try {
            const response = await this.userDao.register(user);
            if (!response) {
                throw new Error('El registro del usuario ha fallado');
            }
            return response;
        } catch (error) {
            throw new Error('Ocurrió un error durante el registro');
        }
    }
    

    async login(email, password) {
        try {
            const response = await this.userDao.login({email, password});
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}