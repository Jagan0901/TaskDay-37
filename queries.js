//To insert product data in database we use
db.products.insertMany(productData);

// 1. Find all the information about each products
     db.products.find({}).pretty();


// 2. Find the product price which are between 400 to 800
     db.products.find( { product_price:{ $gt:400, $lt:800 } }).pretty();


// 3.Find the product price which are not between 400 to 600
     db.products.find({product_price: {"$not": {$gt: 400, $lt: 600} } }).pretty();


// 4. List the four product which are grater than 500 in price
     db.products.find( { product_price:{ $gt:500 } }).pretty(); 


// 5. Find the product name and product material of each products
     db.products.find({},{product_name:1, product_material:1}).pretty();//'1' - inclusion


// 6. Find the product with a row id of 10
     db.products.find({id:'10'}).pretty();


// 7. Find only the product name and product material
     db.products.find({},{product_name:1, product_material:1}).pretty();


// 8. Find all products which contain the value of soft in product material
     db.products.find({product_material:"Soft"}).pretty(); 


// 9. Find products which contain product color indigo  and product price 492.00
     db.products.find({product_color:'indigo', product_price:492.00}).pretty();
