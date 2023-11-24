import { Router } from "express";
import * as cartController from "../controllers/cart.controller.js";

const router = Router();

router.post("/", cartController.create);
router.get("/", cartController.getAll);
router.get("/:id", cartController.getCartById);
router.post('/:cId/products/:idProd', cartController.update);
export default router;