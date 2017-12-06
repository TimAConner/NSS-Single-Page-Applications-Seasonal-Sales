"use strict";

// Loads a file and calls callBackFunction()
const loadJSON = (fileName) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", fileName);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.send();
    });
};


const mergeProductsAndCategories = (products, categories) => {
    for (let i = 0; i < products.length; i++) {
        let category = findCategory(products[i].category_id, categories);
        products[i].category_name = category.name;
    }
    // console.log(products);
    return products;
};

const findCategory = (id, array) => {
    return array.find( x => x.id === id);
};

module.exports.loadProducts = () => {
    let categories = loadJSON("json/categories.json");
    let products = loadJSON("json/products.json");

    return Promise.all([categories, products]).then(values => {
        categories = JSON.parse(values[0]).categories;
        products = JSON.parse(values[1]).products;
        return mergeProductsAndCategories(products, categories);
    });
};


// module.exports.createProductsArray = (productsFile, categoriesFile) => {
//     loadJSON(productsFile, addCategories);
// };