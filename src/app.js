import express from 'express';
import { ProductManager } from './ProductManager.js';

const app = express();

const productManager = new ProductManager() //Instancio la clase para acceder a sus métodos

app.get('/products', async (req, res) => {
    try {
        // Obtiene el valor del parámetro 'limit' de la consulta
        const limit = parseInt(req.query.limit) || 0; 
        console.log(limit);
        // Obtiene los productos desde productManager con un límite
        const products = await productManager.getProducts(limit);

        res.json(products); // Envía los productos como respuesta en formato JSON
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});


const PORT = 8080;
app.listen(PORT, ()=> console.log(`Server Ok on Port ${PORT}`));