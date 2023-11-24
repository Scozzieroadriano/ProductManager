import { Router } from "express";
import * as controller from "../controllers/view.controller.js";


const router = Router();

router.get('/home', controller.getAll);

router.get('/realtimeproducts', (req, res) => {
    res.render('realtimeproducts')
});
export default router; 