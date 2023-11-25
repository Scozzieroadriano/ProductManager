import express from 'express';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';
import { __dirname } from './utils.js';
import { initMongoDB } from './daos/mongodb/connection.js';
import { errorHandler } from './middelwares/errorHandler.js';
import handlebars from 'express-handlebars'
import viewRouter from './routes/views.router.js'
import configureSocketIO from './socket/realtimeproducts.socket.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));


app.use(errorHandler);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/', viewRouter);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/../views/');
app.set('view engine', 'handlebars');


await initMongoDB();

const PORT = 8080;
const httpServer = app.listen(PORT, () => console.log(`Server Ok on Port ${PORT}`));

configureSocketIO(httpServer)
