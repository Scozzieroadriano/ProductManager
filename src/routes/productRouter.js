import { Router } from "express";
import {validationProduct } from "../middelwares/validationMid.js";
import * as controller from "../controllers/product.controllers.js";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/",validationProduct, controller.create);

router.put("/:id", controller.update);

router.delete("/:id", controller.remove);

export default router;


/*import { Router } from "express";
import { ProductManager } from '../daos/filesystem/product.dao.js.js';
import { validationProduct } from "../middelwares/validationMid.js";
import * as controller from "../controllers/product.controllers.js"
const router = Router();

const productManager = new ProductManager('./src/data/products.json') //Instancio la clase para acceder a sus métodos

router.get('/', async (req, res) => {
    try {
        // Obtenemos el limit
        const limit = parseInt(req.query.limit) || 0;
        // Obtenemos los productos
        const products = await productManager.getProducts();

        if (limit > 0) {
            const limitProducts = products.slice(0, limit);
            res.status(200).json(limitProducts);
        } else {
            res.status(200).json(products);
        }
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await productManager.getProducts(Number(productId));

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post('/', validationProduct, async (req, res) => {
    try {
        const product = req.body;
        const productCreated = await productManager.addProduct(product);
        res.status(200).json(productCreated);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const product = { ...req.body };
        const { id } = req.params
        const idNumber = Number(id)
        const productOk = await productManager.getProducts(idNumber);
        if (!productOk) {
            res.status(404).json({ error: 'Producto no encontrado' })
        }
        else {
            await productManager.updateProduct(idNumber, product);
            res.status(200).json({ message: `El producto con id: ${idNumber} fué actualizado` })
        }
    } catch (error) {
        res.status(500).json({ error: 'Error internos del servidor' });
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const idNumber = Number(id);
        const productDeleted = await productManager.deleteProducts([idNumber])
        if (!productDeleted) { return res.status(404).json({ error: 'Producto no encontrado' }) }
        else {
            res.json({ message: `El producto con  id: ${idNumber} fué eliminado.` })
        }
    } catch (error) {
        res.status(500).json({ error: 'Error internos del servidor' });
    }
})

export default router;
*/