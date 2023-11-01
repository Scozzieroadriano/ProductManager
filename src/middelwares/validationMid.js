export const validationProduct = (req, res, next) => {
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;
    if (!title || !description || !code || !price || !status || !stock || !category || !thumbnails) {
        res.status(404).send({ message: 'Todos los campos son obligatorios' });
    } else {
        next()
    }

}