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