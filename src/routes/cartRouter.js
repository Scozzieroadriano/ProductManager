import { Router } from "express";
import * as cartController from "../controllers/cart.controller.js";

const router = Router();

router.post("/", cartController.create);
export default router;
//Instancio la clase para acceder a sus métodos
//const productManager = new ProductDaoFileSystem('.../daos/filesystem/data/products.json')
/*
router.post('/', async (req, res) => {
    try {
        const newCart = await cartManager.createCart();
        res.status(200).json(newCart);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
})

router.get('/:cId', async (req, res) => {
    try {
        const { cId } = req.params;

        const cart = await cartManager.getCarts(Number(cId));

        if (cart) {
            res.status(200).json(cart);
        } else {
            res.status(404).json({ error: 'Carrito not found' });
        }

    } catch (error) {
        res.status(501).json({ error: 'Error interno del servidor' });
    }

})

router.get('/', async (req, res) => {
    try {
        // Obtenemos los productos
        const products = await cartManager.getCarts();

        if (products) {
            res.status(200).json(products);
        } else {
            res.status(404).json('No hay carritos');
        }
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


router.post('/:cId/products/:idProd', async (req, res) => {
    try {
        const { cId } = req.params;
        const { idProd } = req.params;
        const productExist = await productManager.getProducts(Number(idProd));
        if (!productExist) {
            res.status(404).json({ error: 'Product not found' });
        }
        else {
            const addProduct = await cartManager.saveProduct(Number(cId), Number(idProd));
            res.status(200).json(addProduct);
        }
    } catch (error) {
        res.status(501).json({ error: 'Error interno del servidor' });
    }
})


*/