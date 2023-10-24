# Product Manager

El Product Manager es una clase en JavaScript que te permite administrar productos utilizando un archivo JSON para almacenar los datos. Esta conectado a un servidor con express, podes realizar peticiones get para obtener productos precargados en el archivo "products.json".

## Instalación

1- Para utilizar la clase `ProductManager`, primero debes importarla y crear una instancia de la misma en app.js:
2- Debes descargar un cliente que te permita realizar peticiones get, por ejemplo Postman. Tambiìen podes acceder desde la consola web para este tipo de peticiones.


### Uso
-Puedes obtener una lista de todos los productos o buscar un producto específico por su ID utilizando el método getProduct. Si no proporcionas un ID, obtendrás una lista de todos los productos. Si proporcionas un ID y el producto existe, obtendrás los detalles del producto.
-Iniciar server con `npm run dev` o `npm start`.

### Ejemplos
Creando un new request en Postman en las siguiente rutas:

1- `http://localhost:8080/products` obtendremos lista completa de productos, esta misma ruta soporta query params el valor `?limit=` de esta manera, obtendremos una cantidad limitada de productos que dependen del valor que se reciba.

2- `http://localhost:8080/products/:productId` esta ruta devuelve un unico producto cuyo id coincide con el valor de `productId`. Ejemplo de uso : `http://localhost:8080/products/2`