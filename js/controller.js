"use strict";
const jsonLoaderModel = require('./jsonLoaderModel');
const productsView = require('./productsView');


const createTable = (data) => {
    productsView.createTable(data, "products", "products");
};
// console.log(jsonLoaderModel);  
jsonLoaderModel.loadProducts().then(data => createTable(data));


 
// jsonLoaderModel.createProductsArray("json/products.json", "json/categories.json");


