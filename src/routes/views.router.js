import { Router } from "express";
import * as controller from "../controllers/view.controller.js";
import * as msgController from "../../message.controller.js"


const router = Router();

router.get('/home', controller.getAll);

router.get('/realtimeproducts', (req, res) => {
    res.render('realtimeproducts')
});
router.get('/chat', msgController.getAll);

export default router; 