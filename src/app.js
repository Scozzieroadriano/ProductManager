import express from 'express';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';
import { __dirname } from './utils.js';
import { initMongoDB } from './daos/mongodb/connection.js';
import { errorHandler } from './middelwares/errorHandler.js';
import handlebars from 'express-handlebars'
import viewRouter from './routes/views.router.js'
//import { Server } from 'socket.io';
//import { ProductManager } from './manager/ProductManager.js';

const app = express();
//const productManager = new ProductManager(__dirname + '/data/products.json')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public/'));

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use(errorHandler);
//app.engine('handlebars', handlebars.engine());
//app.set('views', __dirname + '/../views/');
//app.set('view engine', 'handlebars');

//app.use('/', viewRouter);

await initMongoDB();

const PORT = 8080;
const httpServer = app.listen(PORT, () => console.log(`Server Ok on Port ${PORT}`));

/*const socketServer = new Server(httpServer);

socketServer.on('connection', async (socket) => {
    console.log(`User Connected ${socket.id}`);
    let listProducts = await productManager.getProducts() //obtengo listado por primera vez
    socketServer.emit('getProducts', listProducts); //envio el listado a todos los clients


    socket.on('newProduct', async (newProduct) => {
        // escucho al cliente y utilizo el metodo que necesita
        await productManager.addProduct(newProduct);
        const updatedProducts = await productManager.getProducts()

        if (listProducts.length < updatedProducts.length) {
            listProducts = updatedProducts //actualizo la lista original
        // Emito la lista de productos actualizada a todos los clientes
        socketServer.emit('getProducts',listProducts );
        }
    });

    socket.on('deleteProduct', async (deletedProduct) => {
        await productManager.deleteProducts(deletedProduct)
        const updatedProducts = await productManager.getProducts()

        if(listProducts.length > updatedProducts.length){
            listProducts = updatedProducts
            socketServer.emit('getProducts',listProducts)
        }
    });

    socket.on('disconnect', async () => console.log(`User Disconnected ${socket.id}`));

});
*/