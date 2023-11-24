import * as cartServices from "../services/cart.services.js";

export const create = async (req, res, next) => {
    try {
        const newCart = await cartServices.create();
        if (!newCart) res.status(404).json({ msg: "Error al crear el carrito" });
        else res.status(200).json(newCart);
    } catch (error) {
        next(error.message);
    }    
};
export const getCartById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await cartServices.getCartById(id);
        if (!response) res.status(404).json({ msg: "Carrito no Encontrado!" });
        else res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
};
export const update = async (req, res, next) => {
    try {
        const { cId } = req.params;  
        const { idProd } = req.params;
        const cartUpdate = await cartServices.saveProduct(cId,idProd);
        
        if (!cartUpdate) res.status(404).json({ msg: "Error al actualizar el carrito" });
        else res.status(200).json(cartUpdate);
    } catch (error) {
        next(error.message);
    }
};