import { Router } from "express";
import ViewController from "../controllers/view.controller.js";
import * as msgController from "../controllers/message.controller.js";

const viewController = new ViewController();

const router = Router();

router.get('/home', async (req, res, next) => {
    try {
        await viewController.getAll(req, res, next);
    } catch (error) {
        next(error);
    }
});

router.get('/realtimeproducts', (req, res) => {
    res.render('realtimeproducts')
});
router.get('/chat', msgController.getAll);

router.get('/', (req, res) => {
    res.render('login')
});

router.get('/register', (req, res) => {
    res.render('register');  
});


router.get('/profile', (req, res) => {
    res.render('profile')
});
export default router; 