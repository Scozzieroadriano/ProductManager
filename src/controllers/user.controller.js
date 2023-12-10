import UserServices from '../services/user.services.js';
const userServices = new UserServices();

export default class UserController {

    async register(req, res, next) {
        try {
            const response = await userServices.register(req.body);
            if(response) res.redirect('/views/');
            else res.redirect('/views/register');
        } catch (error) {
            next(error);
        }
    }
    async login (req, res, next) {
        try {
            const {email,password} = req.body;
            const response = await userServices.login(email, password);
            console.log(response);
            if(!response.error) {
                req.session.email = email;
                req.session.password = password;
                res.redirect('/views/profile');
            }
            else res.redirect('/views/');
        } catch (error) {
            next(error);
        }
    }
}

