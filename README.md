# Product Manager

Ahora la clase Product Manager permite administrar productos y carritos de compra utilizando un archivo JSON para almacenar los datos. Está conectada a un servidor Express que te permite realizar diferentes operaciones relacionadas con productos y carritos.

## Instalación

1. Para utilizar la clase `ProductManager`, primero debes importarla y crear una instancia de la misma en tu aplicación (app.js, por ejemplo).
2. Debes descargar un cliente que te permita realizar solicitudes HTTP, como Postman, o también puedes utilizar la consola web para este tipo de peticiones.

## Uso

Puedes realizar las siguientes operaciones con la API:

### Productos

#### Obtener productos

- Ruta: `GET /products`
- Descripción: Obtén una lista de todos los productos. Puedes utilizar el parámetro de consulta `limit` para limitar la cantidad de productos que se muestran.
- Ejemplo: `http://localhost:8080/api/products` para obtener todos los productos o `http://localhost:8080/api/products?limit=5` para obtener solo 5 productos.

#### Obtener un producto específico

- Ruta: `GET http://localhost:8080/api/products/:productId`
- Descripción: Obtén los detalles de un producto específico proporcionando su ID.
- Ejemplo: `http://localhost:8080/api/products/2` para obtener los detalles del producto con ID 2.

### Carritos

#### Crear un carrito nuevo

- Ruta: `POST /carts`
- Descripción: Crea un nuevo carrito y devuelve su información, incluyendo un ID único.

#### Agregar productos a un carrito

- Ruta: `POST /carts/:cartId/products/:productId`
- Descripción: Agrega un producto a un carrito específico. Proporciona el ID del carrito y el ID del producto en la URL.

#### Obtener detalles de un carrito

- Ruta: `GET /carts/:cartId`
- Descripción: Obtiene los detalles de un carrito específico proporcionando su ID.

#### Obtener detalles de todos los carritos

- Ruta: `GET /carts/`
- Descripción: Obtiene los detalles de todos los carritos creados.

### Iniciar el servidor

Para iniciar el servidor Express y comenzar a utilizar estas rutas y operaciones, ejecuta:

`npm run dev`

#### Adiciono manejo de errores
Deje unos consolo.log en la parte de la creación del carrito porque no pude encontrale la vuelta a lo siguiente:
si el archivo no existe anda todo perfecto, pero si el archivo existe y supongamos que borro todo su contenido incluyendo [], me tira un doble error, del mismo metodo.. No se si se puede manejar ese tipo de errores y tampoco porque me lo muestra dos veces.