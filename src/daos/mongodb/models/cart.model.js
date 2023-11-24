import { Schema, model } from "mongoose";

export const cartsCollectionName = "carts";

const cartSchema = new Schema({
    products: {
        type: Array,
        default: [], 
    }
});

export const CartModel = model(cartsCollectionName, cartSchema);
