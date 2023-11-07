import express from 'express';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars'
import viewRouter from './routes/views.router.js'
 
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/'));

app.use('/api/products',productRouter);
app.use('/api/carts',cartRouter);

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname + '/../views/');
app.set('view engine', 'handlebars');

app.use('/', viewRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server Ok on Port ${PORT}`));