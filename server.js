const express = require('express');
const faker = require('@faker-js/faker');
const PORT = 8000


import { faker } from '@faker-js/faker';
// remember to use import and NOT require
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./routes/user")(app)
require("./routes/company")(app)

app.post("/api/user/company", (res,req)=>{
    company.push(req.body)
    user.push(req.body)
    res.json({message})
}
)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));