const { faker } = require('@faker-js/faker');
// remember to use import and NOT require
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        password: faker.internet.password(),
        email:faker.internet.email(), // 'Kassandra4@hotmail.com'
        phoneNumnber:faker.phone.number('+48 91 ### ## ##'), // '+48 91 463 61 70'
        lastName: faker.name.findName(), // => "Terrence Rau"
        firstName:faker.name.firstName(), // => "Katharina"
        id: faker.database.mongodbObjectId(), // => "cdfcdcbc9de896d1f58abbba"





        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;

};
const createCompany = () => {

    const Compony = {
        id: faker.database.mongodbObjectId(),
        name: faker.name.findName(),
        city: faker.address.city(), // 'East Jarretmouth'
        street: faker.address.streetAddress(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    
    
    }
    
    return Compony;
}
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);
const Compony = createCompany();
console.log(Compony);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

