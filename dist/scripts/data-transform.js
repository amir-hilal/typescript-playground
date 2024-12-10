"use strict";
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
];
const discountedProducts = products.map((p) => (Object.assign(Object.assign({}, p), { price: p.price * 0.9 })));
console.log(discountedProducts);
