import { Schema, model } from "mongoose";

export const cartsCollectionName = "carts";

const cartSchema = new Schema({
    products: [], 
});

export const CartModel = model(cartsCollectionName, cartSchema);
