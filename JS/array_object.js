//  Define the array of product objects
const products = [
{
id: "P001",
name: "Laptop Pro X",
price: 1299.99,
category: "Electronics",
inStock: true,
specs: { ram: "16GB", storage: "512GB SSD", processor: "i7" }
},
{
id: "P002",
name: "Wireless Mouse",
price: 25.50,
category: "Accessories",
inStock: true,
specs: { connectivity: "Bluetooth", dpi: 1600}
},
{
id: "P003",
name: "Ergonomic Keyboard",
price: 75.00,
category: "Accessories",
inStock: false,
specs: { layout: "QWERTY", type: "Mechanical" }
},
{
id: "P004",
name: "4K Monitor",
price: 399.00,
category: "Electronics",
inStock: true,
specs: { size: "27 inch", resolution: "3840x2160" }
},
{
id: "P005",
name: "Webcam HD",
price: 49.99,
category: "Accessories",
inStock: true,
specs: { resolution: "1080p", focus: "auto" }
}
];

// Function to display all product name and prices
function displayAllProducts(productList){
    console.log("---All Products");
    if(productList.length === 0){
        console.log("No products to display.");
        return;
    }
    productList.forEach(product=>{
        console.log(`${product.name}-$${product.price.toFixed(2)}`)
    });
    console.log("\n");
}
// Function to find products in a specific category
function findProductsByCategory(productList, categoryName){
    console.log(`---Products in Category: ${categoryName}---`);
    const filteredProducts = productList.filter(product=> product.category.toLowerCase()=== categoryName.toLowerCase());
    if(filteredProducts.length === 0){
        console.log(`No products found in the "${categoryName}" category.`);
    } else{
        filteredProducts.forEach(product =>{
        console.log(`-${product.name} (ID: ${product.id})`);
        });
    }
    console.log("\n");
}

// Function to get the total value of all in-stock products 
function getTotalStockValue(productList){
    let totalValue = 0;
    productList.forEach(product => {
        if(product.inStock){
            totalValue +=product.price;
        }
    });
    return totalValue;
}
// Function to find a product by ID and display its specs 
function displayProductSpecs(productList, productId){
    console.log(`---Specs for Product ID: ${productId}---`);
    const product = productList.find(p => p.id === productId);
    if(product){
        console.log(`Product: ${product.name}`);
        if(product.specs){
            for(const specKey in product.specs){
                if(product.specs.hasOwnProperty(specKey)){
                    console.log(`${specKey}: ${product.specs[specKey]}`);
                }
            }
        } else{
            console.log("No specifications available for this product.");
        }
    } else{
        console.log(`Product with ID "${productId}" not found.`);
    }
    console.log("\n");
}
//  Using the functions
displayAllProducts(products);

findProductsByCategory(products, "Accessories");
findProductsByCategory(products,"Electronics");
findProductsByCategory(products, "Books");

const totalValue = getTotalStockValue(products);
console.log(`Total value of in-stock products: $${totalValue.toFixed(2)}\n`);

displayProductSpecs(products, "P001");
displayProductSpecs(products, "P003");
displayProductSpecs(products, "P999");