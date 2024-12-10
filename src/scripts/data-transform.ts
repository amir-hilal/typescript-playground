interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
];

const discountedProducts = products.map((p) => ({
  ...p,
  price: p.price * 0.9,
}));
console.log(discountedProducts);
