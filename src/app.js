import express from 'express';
import { ProductManager } from './ProductManager.js';

const app = express();

const productManager = new ProductManager() //Instancio la clase para acceder a sus métodos

app.get('/products', async (req, res) => {
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

app.get('/products/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await productManager.getProducts(parseInt(productId));

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

const PORT = 8080;
app.listen(PORT, () => console.log(`Server Ok on Port ${PORT}`));