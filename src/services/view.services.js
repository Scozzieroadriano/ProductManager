import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";

const productDao = new ProductDaoMongoDB();

export const getAll = async () => {
    try {
        const data = await productDao.getAll();
        return data;
    } catch (error) {
        console.log(error);
    }
};