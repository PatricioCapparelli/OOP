class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <p>Nombre: ${product.name}</p>
            <p>Precio: ${product.price}</p>
            <p>Año: ${product.year}</p>
        `;
        productList.appendChild(element);
    }
}



document.getElementById('product-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value); 
    const year = parseInt(document.getElementById('year').value); 

    let product = new Product(name, price, year); //interactua con UI
    const ui = new UI();
    ui.addProduct(product); // Interactua con product object

    e.preventDefault();
});
