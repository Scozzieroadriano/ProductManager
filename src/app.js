import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Mi primer server con express')
})
app.get('/home', (req, res) => {
    res.send(req.query)
    const {value} = req.query;
    console.log(value);

})
app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    log
})

const PORT = 8080;

app.listen(PORT, ()=> console.log(`Server Ok on Port ${PORT}`));