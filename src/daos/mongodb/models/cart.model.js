import { Schema, model } from "mongoose";

export const cartsCollectionName = "carts";

const cartProductSchema = new Schema({
    productId: String,
    quantity: { type: Number, default: 1 }
}, { _id: false });

const cartSchema = new Schema({
    products: [cartProductSchema]
});

export const CartModel = model(cartsCollectionName, cartSchema);
