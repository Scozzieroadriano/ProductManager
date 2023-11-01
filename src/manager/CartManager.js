import fs from 'fs';

export class CartManager {
    constructor(path) {
        this.path = path;
    }

    async #readCarts() {  //Obtengo la informacion del JSON, de no existir devuelvo un array vacio - De esta manera puedo reutilizar esta parte de codigo en otros metodos
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(data);
            } else {
                return []
            }
        } catch (error) {
            return { 'error': error.message };
        }
    }
    async #getMaxId() {
        let maxId = 0;
        const carts = await this.#readCarts();
        carts.map((cart) => {
            if (cart.id > maxId) maxId = cart.id;
        });
        return maxId
    }

    async createCart() {
        try {
            const cart = {
                id: await this.#getMaxId() + 1,
                products: []
            };
            const cartsFile = await this.#readCarts();
            cartsFile.push(cart)
            await fs.promises.writeFile(this.path, JSON.stringify(cartsFile))
            return cart
        } catch (error) {
            return { 'error': error.message };
        }
    }
    async getCartById(id) {
        try {
            const carts = await this.#readCarts();
            const cart = carts.find(c => c.id === id)
            if (!cart) return false;
            return cart
        } catch (error) {
            return { 'error': error.message };
        }
    }
    async saveProduct(idCart, idProduct) {
        const carts = await this.#readCarts();
        const cartOk = await this.getCartById(idCart)
        if (!cartOk) {
            const producOk = cartOk.products.find(p => p.id === idProduct)
            if (producOk) producOk.quantity + 1
            else {
                const newProduct = {
                    product: idProduct,
                    quantity: 1
                }
                cartOk.products.push(newProduct)
            }
            await fs.promises.writeFile(this.path, JSON.stringify(carts))
            return cartOk;
        }
    }
}
