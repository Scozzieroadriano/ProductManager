# Product Manager

El Product Manager es una clase en JavaScript que te permite administrar productos utilizando un archivo JSON para almacenar los datos. Puedes realizar operaciones como agregar, actualizar, eliminar y obtener productos.

## Uso

Para utilizar la clase `ProductManager`, primero debes importarla y crear una instancia de la misma:

### Agregar un producto

Puedes agregar un nuevo producto utilizando el método addProduct. Debes proporcionar los siguientes campos: título, descripción, precio, ruta de imagen (thumbnail), código y stock.
Valida que todos los campos se completen, genera un id autoincremental, y valida que no se repita el codigo de producto. Ejemplo:

```javascript
    productManager.addProduct(
        'Televisor 1',
        'Televisor FULL HD 4K Samsung',
        15,
        'ruta/imagen/televisor1',
        'M01',
        5
    );
```

### Actualizar un producto
Puedes actualizar un producto existente utilizando el método updateProduct. Debes proporcionar el ID del producto que deseas actualizar y un objeto con los campos que deseas modificar.
Valida que el producto exista y que los campos a actualizar existan dentro de dicho producto, (si se inventa una key, ejemplo [tamaño:10px] no hace efecto). Ejemplo:

```javascript
const updatedFields = {
    title: 'Nuevo Televisor',
    price: 21
};
productManager.updateProduct(1, updatedFields);
```

### Eliminar productos
Puedes eliminar uno o varios productos utilizando el método deleteProducts. Debes proporcionar un array de IDs de los productos que deseas eliminar. 

```javascript
const productDeleted = [1, 2];
productManager.deleteProducts(productDeleted);
```

### Obtener productos
Puedes obtener una lista de todos los productos o buscar un producto específico por su ID utilizando el método getProduct. Si no proporcionas un ID, obtendrás una lista de todos los productos. Si proporcionas un ID y el producto existe, obtendrás los detalles del producto.

```javascript
const products = productManager.getProduct(); // Obtener todos los productos
const product = productManager.getProduct(1); // Obtener el producto con ID 1
```