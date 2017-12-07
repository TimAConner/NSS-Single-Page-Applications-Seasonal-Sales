"use strict";
const jsonLoaderModel = require('./jsonLoaderModel');
const productsView = require('./productsView');


// console.log(jsonLoaderModel);  
jsonLoaderModel.loadCategories().then(data => createCategoriesSelect(data));
jsonLoaderModel.loadProducts().then(data => productsView.createTable(data, "products", "products"));

function createCategoriesSelect(data){
    productsView.createSelect(data, "categories", "categories");
    let select = document.getElementById("seasonal-discount-select");
    select.addEventListener("change", function(){
        let category = select.options[select.selectedIndex].text;
        jsonLoaderModel.loadProducts(category).then(data => productsView.createTable(data, "products", "products", category));
    });

}
 
// jsonLoaderModel.createProductsArray("json/products.json", "json/categories.json");


