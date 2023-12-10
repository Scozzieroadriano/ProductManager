import * as services from "../services/view.services.js";

export const getAll = async (req, res, next) => {
    try {
        const response = await services.getAll();
        const responseLiteral = response.docs.map(producto => {
            return {
                title: producto.title,
                description: producto.description,
                code: producto.code,
                price: producto.price,
                status: producto.status,
                stock: producto.stock,
                category: producto.category,
                thumbnails: producto.thumbnails,
            };
        });
        res.render('home', { response: responseLiteral });

    } catch (error) {
        console.log(error.message);
    }
};
