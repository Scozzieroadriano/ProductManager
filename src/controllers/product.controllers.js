import * as services from "../services/product.services.js";

export const getAll = async (req, res, next) => {
    try {
        const response = await services.getAll();
        const limit = parseInt(req.query.limit) || 0;
        if (limit > 0) {
            const limitProducts = response.slice(0, limit);
            res.status(200).json(limitProducts);
        } else {
            res.status(200).json(response);
        }
        
    } catch (error) {
        console.log(error.message);
    }
};

export const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await services.getById(id);
        if (!response) res.status(404).json({ msg: "Producto no Encontrado!" });
        else res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
};

export const create = async (req, res, next) => {
    try {
        const newProd = await services.create(req.body);
        if (!newProd) res.status(404).json({ msg: "Error al crear el  producto" });
        else res.status(200).json(newProd);
    } catch (error) {
        next(error.message);
    }
};

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prodUpd = await services.update(id, req.body);
        if (!prodUpd) res.status(404).json({ msg: "Error al actualizar el producto" });
        else res.status(200).json(prodUpd);
    } catch (error) {
        next(error.message);
    }
};

export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prodDel = await services.remove(id);
        if (!prodDel) res.status(404).json({ msg: "Error al eliminar el  producto" });
        else res.status(200).json({ msg: `Producto id: ${id} eliminado` });
    } catch (error) {
        next(error.message);
    }
};