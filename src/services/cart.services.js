import cartDaoMongoDB from "../daos/mongodb/cart.dao.js";

const cartDao = new cartDaoMongoDB();

export const create = async () => {
    try {
        const newCart= await cartDao.createCart();
        if (!newCart) return false;
        else return newCart;
    } catch (error) {
        console.log(error);
    }
};

export const getCartById = async (id) => {
    try {
        const cart = await cartDao.getCartById(id);
        if (!cart) return false;
        else return cart;
    } catch (error) {
        console.log(error);
    }
};
export const saveProduct = async (idCart, idProduct) => {
    try {
        const cartUpd = await cartDao.saveProduct(idCart, idProduct);
        if (!cartUpd) return false;
        else return cartUpd;
    } catch (error) {
        console.log(error);
    }
};