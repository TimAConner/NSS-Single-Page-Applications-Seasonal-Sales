# NSS-Single-Page-Applications-Seasonal-Sales

## Motivation
This was Javascript practice done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

## Synopsis
Your job is to build a web page that lists all of the products, the name of the department it's in, and the price. Additionally, put a select element at the top of the page that contains all possible values of the season_discount key in the categories file. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

The two JSON representations above should be in two files: products.json, and categories.json. You should load both files via XHRs and store the contents in two different JavaScript variables in your code.

## How to Contribute
1. Clone this github
1. npm install
1. run 'grunt'

## Sample JSON Code

## Products 

```
{
  "products": [
    {
      "id": 0,
      "name": "Kids socks",
      "price": 4.99,
      "category_id": 1
    },
    {
      "id": 1,
      "name": "Mens socks",
      "price": 6.99,
      "category_id": 1
    },
    {
      "id": 2,
      "name": "Ladies socks",
      "price": 7.99,
      "category_id": 1
    },
    {
      "id": 3,
      "name": "Foot stool",
      "price": 14.99,
      "category_id": 2
    },
    {
      "id": 4,
      "name": "Lava lamp",
      "price": 9.99,
      "category_id": 2
    },
    {
      "id": 5,
      "name": "3 drawer dresser",
      "price": 64.99,
      "category_id": 2
    },
    {
      "id": 6,
      "name": "Air filter",
      "price": 6.99,
      "category_id": 3
    },
    {
      "id": 7,
      "name": "Surge protector",
      "price": 8.99,
      "category_id": 3
    },
    {
      "id": 8,
      "name": "Plastic storage bin",
      "price": 3.99,
      "category_id": 3
    },
    {
      "id": 9,
      "name": "Light bulb",
      "price": 1.99,
      "category_id": 3
    }
  ]
}
```

## Categories

```
{
  "categories": [
    {
      "id": 1,
      "name": "Apparel",
      "season_discount": "Winter",
      "discount": 0.10
    },
    {
      "id": 2,
      "name": "Furniture",
      "season_discount": "Autumn",
      "discount": 0.25
    },
    {
      "id": 3,
      "name": "Household",
      "season_discount": "Spring",
      "discount": 0.15
    }
  ]
}
```