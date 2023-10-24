import fs from 'fs';

export class ProductManager {
    constructor() {
        this.path = './src/data/products.json';
    }

    async #readProducts() {  //Obtengo la informacion del JSON, de no existir devuelvo un array vacio - De esta manera puedo reutilizar esta parte de codigo en otros metodos
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(data);
            }
            return []
        } catch (error) {
            console.error('Error al leer el archivo JSON:')
            return [];
        }
    }
    //Método para validar campos obligatorios
    #fieldsValidation(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Los campos son requeridos")
            return false;
        }
        return true
    }

    async getProducts(id) { //Obtengo la lista de todos los productos, en caso de recibir un id, devuelve un producto si existe de esta manera unifico getProduct y getProductById
        try {
            const products = await this.#readProducts(); //Reutilizo metodo
            if (id) {
                const product = products.find((product) => product.id === id);
                return product || `No existe un producto cuyo ID sea: ${id}`;
            } else {
                return products;
            }
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    }

    async addProduct(title, description, price, thumbnail, code, stock) { //Obtengo la información del JSON y actualizo el array, luego actualizo el JSON

        try {
            const products = await this.#readProducts(); //Reutilizo metodo

            const maxId = Math.max(...products.map(product => product.id), 0); //Busco el id máximo que se encuentre en el array de los productos existentes

            if (!this.#fieldsValidation(title, description, price, thumbnail, code, stock)) {
                return; // Si la validación de campos falla, no se agrega el producto.
            }

            if (products.some(product => product.code === code)) {
                console.log(`Ya existe un producto con el código: ${code}`); //Verifico que el codigo del producto no se repita en el JSON
            } else {

                const newProduct = {
                    id: maxId + 1,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                };

                products.push(newProduct);
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2), 'utf-8');
                console.log(`Producto '${title}' Agregado, ID: ${newProduct.id}`);
            }
        } catch (error) {
            console.error('Error al agregar producto:', error);
        }
    }

    async updateProduct(id, fieldsToUpdate) { // Obtengo la info del JSON y busco el producto que se quiere actualizar mediante su ID
        try {
            const products = await this.#readProducts();
            const productToUpdate = products.find(product => product.id === id)
            let originalId = null;

            if (!productToUpdate) {
                console.log(`No se encontró un producto con ID ${id}`);
            } else{

                originalId = productToUpdate.id
                if (fieldsToUpdate) {
                    Object.keys(fieldsToUpdate).forEach(key => { //Por cada key que no sea 'ID' y que exista en el objeto a modificar, voy actualizando los valores
                        if (key !== 'id' && key in productToUpdate) {
                            productToUpdate[key] = fieldsToUpdate[key]
                        }
                    })

                    await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2), 'utf-8');
                    console.log(`El producto con id ${originalId} se actualizó correctamente`);

                }
                else { console.log('Establezca los campos que desea cambiar'); }

            productToUpdate.id = originalId;
            return productToUpdate;
        }
        } catch (error) {
            console.log(error);
        }

    }

    async deleteProducts(ids) { // Obtengo los productos del JSON, utilizo un filter y como callback un includes para descargar los productos cuyo ID esten en el array "ids" que se recibe como parametro
        try {
            const products = await this.#readProducts();
            const newProducts = products.filter(product => !ids.includes(product.id)); // De esta manera genero un nuevo array con los productos que no quiero eliminar

            if (newProducts.length < products.length) { //Si los tamaños entre el original y el nuevo array son distintos entonces guardo la nueva informacion en el JSON
                await fs.promises.writeFile(this.path, JSON.stringify(newProducts, null, 2), 'utf-8');
                console.log(`Productos con IDs [${ids.join(', ')}] eliminados correctamente.`);
            } else {
                console.log('Productos no encontrados');
            }
        } catch (error) {
            console.log(error);
        }
    }

}
