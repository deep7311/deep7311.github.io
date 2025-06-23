//shopping cart app
let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

//show all products
const showProducts = () => {
  console.log("Products:");
  products.forEach((product) => {
    console.log(`${product.id}. ${product.name} - ${product.price}`);
  });
};

// showProducts();

//add product to cart
const addToCart = (id) => {
  cart = {...cart, [id]: 1}
}

addToCart(1);  //yaha product id 1 ko add kiya
addToCart(3);  //yaha product id 3 ko add kiya

//increment quantity of product in cart
const increment = (id) => {
  cart = {...cart, [id]: cart[id] +1};
}

//decrement quantity of product in cart
const decrement = (id) => {
  cart = {...cart, [id]: cart[id] -1};
}

// increment(1);
// increment(3);
// decrement(3); //yaha product id 3 ki quantity ko 1 se kam kiya

// my logic to show cart
// const showCart = () => {
//   console.log("My Cart:");

//   //check karenge ki cart me jo id hai vo array me hai ya nahi
//   Object.keys(cart).forEach(id => {
//     const product = products.find(p => p.id == id);
//     if (product) {
//       let productPrice = product.price * cart[id];
//       console.log(`${product.name} - ${productPrice} (Quantity: ${cart[id]})`);
//     }
//   });
// };


//Lecture logic to show cart
const showCart = products.map(product => {
  const quantity = cart[product.id] || 0;
  if (quantity > 0) {
    let productPrice = product.price * quantity;
    return `${product.name} - ${productPrice} (Quantity: ${quantity})`;
  }
  return null;
})


// my logic to show cart
// const totalPrice = Object.keys(cart).reduce((total, id) => {
//   const product = products.find(p => p.id == id);
//   if (product) {
//     return total + (product.price * cart[id]);
//   }
//   return total;
// }, 0);


//Lecture logic to show cart
const orderValue = products.reduce((sum, value) => {
  return sum + value.price * (cart[value.id] ?? 0);
})


console.log(orderValue);