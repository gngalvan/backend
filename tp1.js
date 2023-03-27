class ProductManager {
    constructor() {
        this.products = []
    };

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock 
        };

        for (const prop in product) {
            if (product[prop] === null || product[prop] === undefined) {
                console.log(`Campo: ${prop} no ingresado. Todos los valores son obligatorios.`);
                return;
            }
        }

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        };      

        if (this.products.findIndex(element => element.code === code) === -1) {
            
            this.products.push(product);
        } else {
            console.log('Code existente');
            return;
        };


    };

    getProducts = () => {
        console.log(this.products);
    };

    getProductById = (id) => {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            console.log('Not found');
            return;
        }; 
    };

};

const productHandler = new ProductManager();
productHandler.getProducts();
productHandler.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
productHandler.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
productHandler.getProductById(1);
productHandler.getProductById(2);
productHandler.getProducts();