import { CartModel } from "./models/cart.model.js";

export default class CartDaoMongoDB {
    async createCart() {
        try {
            const cart = await CartModel.create({products: []});
            return cart;
        } catch (error) {
            throw error;
        }
    }
}