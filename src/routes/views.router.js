import { Router } from "express";
import * as controller from "../controllers/view.controller.js";
import * as msgController from "../../message.controller.js"


const router = Router();

router.get('/home', controller.getAll);

router.get('/realtimeproducts', (req, res) => {
    res.render('realtimeproducts')
});
router.get('/chat', msgController.getAll);

router.get('/', (req, res) => {
    res.render('login')
});
router.get('/register', (req, res) => {
    res.render('register')
});
router.get('/profile', (req, res) => {
    res.render('profile')
});
export default router; 