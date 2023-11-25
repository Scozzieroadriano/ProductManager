import { Server } from 'socket.io';
import ProductDaoMongoDB from '../daos/mongodb/product.dao.js';
import MessageDaoMongoDB from '../daos/mongodb/message.dao.js';

const configureSocketIO = (httpServer) => {
    const socketServer = new Server(httpServer);
    const productDao = new ProductDaoMongoDB();
    const messageDao = new MessageDaoMongoDB();
    socketServer.on('connection', async (socket) => {
        console.log(`Usuario Conectado ${socket.id}`);
        
        // Obtén la lista de productos al inicio
        const listProducts = await productDao.getAll();

        // Envía la lista de productos a todos los clientes al conectar
        socket.emit('getProducts', listProducts);

        socket.on('newProduct', async (newProduct) => {
            // Agrega el nuevo producto
            await productDao.create(newProduct);

            // Obtén la lista actualizada de productos
            const updatedProducts = await productDao.getAll();

            // Emite la lista actualizada a todos los clientes
            socketServer.emit('getProducts', updatedProducts);
        });

        socket.on('deleteProduct', async (deletedProduct) => {
            // Elimina el producto
            await productDao.delete(deletedProduct);

            // Obtén la lista actualizada de productos
            const updatedProducts = await productDao.getAll();

            // Emite la lista actualizada a todos los clientes
            socketServer.emit('getProducts', updatedProducts);
        });

        socket.on('disconnect', () => {
            console.log(`Usuario Desconectado ${socket.id}`);
        });

        console.log('🟢 ¡New connection!', socket.id);

        
    socketServer.emit('messages', await messageDao.getAll());

    socket.on('disconnect', ()=>console.log('🔴 ¡User disconnect!', socket.id));
    socket.on('newUser', (user)=>console.log(`⏩ ${user} inició sesión`));

    socket.on('chat:message', async(msg)=>{
        await messageDao.create(msg);
        socketServer.emit('messages', await messageDao.getAll());
    })

    socket.on('newUser', (user)=>{
        socket.broadcast.emit('newUser', user)
    })

    socket.on('chat:typing', (data)=>{
        socket.broadcast.emit('chat:typing', data)
    })
        
    });

    
};

export default configureSocketIO;
