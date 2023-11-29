import { Schema, model } from "mongoose";

export const cartsCollectionName = "carts";

const cartProductSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'products' }, // 'Product' es el nombre del modelo de productos
    quantity: { type: Number, default: 1 }
}, { _id: false });

const cartSchema = new Schema({
    products: [cartProductSchema]
});

cartSchema.pre('find', function(){
    this.populate('products.productId')
})

export const CartModel = model(cartsCollectionName, cartSchema);