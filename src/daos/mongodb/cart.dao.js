import { CartModel } from "./models/cart.model.js";
import { ProductModel } from "./models/product.model.js";
export default class CartDaoMongoDB {
    async createCart() {
        try {
            const cart = await CartModel.create({products: []});
            return cart;
        } catch (error) {
            throw error;
        }
    }

    async getCartById(id) {
        try {
          const response = await CartModel.findById(id);
          return response;
        } catch (error) {
          console.log(error);
        }
      }
    
      async saveProduct(idCart, idProduct) {
        try {
            const cartOk = await CartModel.findById(idCart);
    
            if (cartOk) {
                const productOk = cartOk.products.find(p => p.productId === idProduct);
                console.log(productOk);
                if (productOk) {
                    // Si el producto ya existe, incrementa la cantidad
                    const newProduct = { productId: idProduct, quantity: productOk.quantity += 1}
                    cartOk.products.push(newProduct);
                    await cartOk.save();
                } else {
                    // Si el producto no existe, agrégalo al array de productos
                    const newProduct = { productId: idProduct, quantity: 1 };
    
                    await CartModel.findByIdAndUpdate(
                        idCart,
                        { $push: { products: newProduct } },
                        { upsert: true, new: true }
                    );
                }
    
                return { message: 'Producto Guardado con exito en el carrito' };
            } else {
                return { message: 'Cart no encontrado' };
            }
        } catch (error) {
            console.error('Error al guardar el producto en el carrito:', error);
            return { error: error.message };
        }
    }
}