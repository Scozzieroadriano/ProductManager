const socketClient = io();

const form = document.getElementById('form');
const formelminar = document.getElementById('formElim');
const inputIdproduct = document.getElementById('idProduct');
const inputName = document.getElementById('title');
const inputDescription = document.getElementById('description');
const inputCode = document.getElementById('code');
const inputPrice = document.getElementById('price');
const inputCategory = document.getElementById('category');
const inputImage = document.getElementById('thumbnails');
const inputStock = document.getElementById('stock');
const productList = document.getElementById('product-list');
//declaro los inputs
form.onsubmit = (e) => {
    e.preventDefault();
    const title = inputName.value
    const description = inputDescription.value
    const code = inputCode.value
    const price = inputPrice.value
    const category = inputCategory.value
    const thumbnails = inputImage.value
    const stock = inputStock.value
    const product = {title,description,code,price,category,thumbnails,stock}
    //creo el objeto con los datos del input
    console.log(product);
    socketClient.emit('newProduct', product);
    //emito la info al serveer
}
formelminar.onsubmit = (e) => {
    e.preventDefault();
    const idProduct = (inputIdproduct.value)
    const product = [idProduct]
    //creo el objeto con los datos del input
    socketClient.emit('deleteProduct', product);
    //emito la info al serveer
}
socketClient.on('getProducts', (data) => {
    //renderizo
      productList.innerHTML = ''; // Limpia el contenido actual de la lista
  
      data.forEach((product) => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `
          <h3>${product.title}</h3>
          <p>Description: ${product.description}</p>
          <p>ID: ${product._id}</p>
          <p>Price: $${product.price}</p>
          <p>Stock: ${product.stock}</p>
          <p>Category: ${product.category}</p>
          <img src="${product.thumbnails ? product.thumbnails : '../images/placeholder.jpg'}" alt="Product Image" width="50" height="50">
        `;
        
        productList.appendChild(productItem);
      });
  });
