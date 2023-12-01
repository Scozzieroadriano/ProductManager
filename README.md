# Product Manager

ProductManager permite administrar productos y carritos de compra utilizando dos tipos de persistencia de datos, FileSystem y MongoDB con Mongoose.
Consta de un modelo MVC (MODELO VISTA CONTROLADOR) divido por distintas capas para un óptimo manejo de errores y funcionamiento.

La lógica principal se encuentra en la capa `daos`.
     En daos se encuentran todas las peticiones que conforman el CRUD en la fuente de datos, tambien disponemos de los schemas que componen cada modelo para formar los documentos y colecciones en MONGO.
La lógcia de negocio de la aplicacion está en la capa `services`.
    En services se realizan podemos añandir más logica a la información que recibimos desde el dao, por ehemplo validar un tipo de dato, o transformar los datos obtenidos.
Solicitudes HTTP en la capa `controllers`.
    Procesamos la entrada del cliente, llamamos a los servicios y devolvemos una respuesta.
Por ultimo la capa `routes`.
    Manejamos la entrada y salida de las solicitudes HTTP. Asignamos una funcion del controlador a una ruta especifica y todas esas resppuestas recibidas las enviamos al cliente.


## Instalación

1. Para utilizar la clase `ProductManager`, deberas hacer un git clone sobre el repositorio en Github.
2. Instalar todos los paquetes utilizados.
3. Debes descargar un cliente que te permita realizar solicitudes HTTP, como Postman, o también puedes utilizar la consola web para este tipo de peticiones.

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

#### Crear un producto

- Ruta: `POST http://localhost:8080/api/products`
- Descripción: Crea un producto específico proporcionando su información correcta.
- Ejemplo: `http://localhost:8080/api/products` para crear un producto con lasiguiente informacion.
        {
            "title": "Producto de prueba Luis",
            "description": "Este es un producto de prueba",
            "code": "123956",
            "price": 99.99,
            "status": true,
            "stock": 10,
            "category": "Prueba",
            "thumbnails": ""
        }
##### Actualizar un producto

- Ruta: `POST http://localhost:8080/api/products/:productId`
- Descripción: Actualiza un producto específico proporcionando su id y la información a cambiar.
- Ejemplo: `http://localhost:8080/api/products/64e57ca8d86d4ba4e6a38d1f` para actualizar un producto con lasiguiente informacion.
        {
        "title": "Cambiado por luis3"
        } 

#### ELIMINAR UN PRODUCTO  
- Ruta: `DELETE http://localhost:8080/api/products/:productId`
- Descripción: Elimina un producto específico proporcionando su id.
- Ejemplo: `http://localhost:8080/api/products/64e57ca8d86d4ba4e6a38d1f` para eliminar un producto.


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

##### Eliminar producto 

- Ruta: `DELETE /carts/:cid/products/:idprod`
- Descripción: Elimina el producto seleccionado del carrito

#### Actualizar carrito

- Ruta: `PUT /carts/:cid`
- Descripción: Actualiza el carrito con el array deseado, debe tener el mismo formato que el modelo en mongoose.

#### Actualizar cantidad de producto

- Ruta: `PUT /carts/:cid/products/:idprod`
- Descripción: Solo actualizara la cantidad de un producto seleccionado que se encuentre en el carrito,
con la cantidad que ingrese por body

#### Borrar todos los productos

- Ruta: `DELETE /carts/:cid`
- Descripción: Elimina todos los productos dentro del carrito, deja un array vacio en el carrito seleccionado

#### Borrar carrito
- Ruta: `DELETE /carts/:cid`
- Descripción: Elimina el carrito seleccionado



### Iniciar el servidor

Para iniciar el servidor Express y comenzar a utilizar estas rutas y operaciones, ejecuta:

`npm run dev`

# INSTALACION DE HANDLERBARS Y WEBSOCKETS

-Se implementan las librerias express-handlebars y socket.io para interactuar con el front en tiempo real.
-Se Crea un endpoint /home en el cual se obtienen los productos en su totalidad
-Se Crea un endpoint /realtimeproducts en el cual obtenemos los productos en su totalidad y podemos agregar desde un formulario más productos, tambien podemos borrar por id y el dom se actualiza en tiempo real
-Se crea un endpoint /chat donde podemos chatear con otros usuarios  `(front y socket aportado por el profe, yo adapte las funciones importe controllers y separe por capas)`

## LA APP AVISA POR CONSOLA DEL SERVIDOR SI UN CLIENTE SE CONECTA O DESCONECTA

## SE IMPLEMENTA POPULATE PARA OBTENER TODA LA INFORMACION AL BUSCAR TODOS LOS PRODUCTOS TANTO LOS EXISTENTES COMO LOS QUE SE ENCUENTRAN DENTRO DE UN CARRITO.