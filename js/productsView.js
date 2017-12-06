"use strict";


// Returns a product table
module.exports.createTable = (data, name, outputId) => {

    let output = document.getElementById(outputId);
    let tableDOM = document.createElement("table");

    // Build and attach table row and table data.
    for(let i = 0; i < data.length; i++){
        let tr = document.createElement("tr");
        tr.appendChild(createElement("td", data[i].name));
        tr.appendChild(createElement("td", data[i].price));
        tr.appendChild(createElement("td", data[i].category_name));
        tableDOM.appendChild(tr);
    }

    // Add the new table to output
    output.appendChild(tableDOM);
};

// Builds a dom element and returns it
const createElement = (element, text, innerHTML = false) => {
    let domElement = document.createElement(element);
    let textNode;
    
    //Set innerHTML if innerHTML === true, othwerise create a text node.
    if(innerHTML === true){
        domElement.innerHTML = text;
    } else {
        textNode = document.createTextNode(text);
        domElement.appendChild(textNode);
    }
    return domElement;
};