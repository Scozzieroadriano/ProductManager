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