import express from 'express';
import productRouter from './routes/productRouter.js';
import { __dirname } from './utils.js';
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use('/api/products',productRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server Ok on Port ${PORT}`));