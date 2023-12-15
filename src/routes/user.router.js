import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import passport from "passport";
const controller = new UserController();
const router = Router();

router.post('/register', async (req, res, next) => {
    try {
        await controller.register(req, res, next);
    } catch (error) {
        next(error);
    }
});
router.post('/login', async (req, res, next) => {
    try {
        await controller.login(req, res, next);
    } catch (error) {
        next(error);
    }
});
router.get('/register-github',
    passport.authenticate('github', { scope: ['user:email'] }));

router.get('/github',
    passport.authenticate('github', { scope: ['user:email'] }), await controller.loginGithub);
export default router;

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err){
            console.log('error al cerrar sesion',err);
            return res.send({error:err});
        }else 
        res.redirect('/views/');
    });
});
