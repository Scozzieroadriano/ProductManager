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
    async getAll() {
        try {    
          const response = await CartModel.find({});
          return response;
        } catch (error) {
          console.log(error);
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
                const productoExistente = cartOk.products.find(producto => producto.productId === idProduct);

                if (productoExistente) {
                    //Si tengo un producto en el carrito incremento la cantidad en 1
                    productoExistente.quantity += 1
                } else {
                    // Si el producto no existe, lo agrego al array de productos
                    const newProduct = { productId: idProduct};
                    cartOk.products.push(newProduct);                    
                }    
                await cartOk.save()
                return { message: 'Producto Guardado con exito en el carrito' };
            } else {
                return { message: 'El carrito no existe' };
            }
        } catch (error) {
            console.error('Error al guardar el producto en el carrito:', error);
            return { error: error.message };
        }
    }
    
}