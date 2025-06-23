let cart = {};
let currentPage = "products";

const products = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 40 },
  { id: 3, name: "Cherry", price: 175 },
  { id: 4, name: "Date", price: 200 },
  { id: 5, name: "Grape", price: 120 },
  { id: 6, name: "Honeydew", price: 250 },
  { id: 7, name: "Kiwi", price: 180 },
  { id: 8, name: "Lemon", price: 60 }
];

const addToCart = (productId) => {
  cart = { ...cart, [productId]: 1 };
  renderPage();
};

const increment = (productId) => {
  cart = { ...cart, [productId]: cart[productId] + 1 };
  renderPage();
};

const decrement = (productId) => {
  cart = { ...cart, [productId]: cart[productId] - 1 };
  if (cart[productId] <= 0) {
    delete cart[productId];
  }
  renderPage();
};

const deleteFromCart = (productId) => {
  delete cart[productId];
  renderPage();
}

const renderPage = () => {
  if (currentPage === "products") {
    showProducts();
  } else if (currentPage === "cart") {
    updateCartUI();
  }
}



const showProducts = () => {
  currentPage = "products";
  const str = `
    <div class="main-section">

      <div class="product-panel">
        <div class="header">
          <h2>All Products</h2>
        </div>
        <ul class="product-list">
          ${products.map((product) => {
              const inCart = cart[product.id];
              return `
                <li class="product-item">
                  <div>${product.name} - Price: &#8377;${product.price}</div>
                  ${
                    inCart
                      ? `<div>
                          <button onclick="decrement(${product.id})"><i class="fa-solid fa-minus"></i></button>
                          <span>${cart[product.id]}</span>
                          <button onclick="increment(${product.id})"><i class="fa-solid fa-plus"></i></button>
                         </div>`
                      : `<button onclick="addToCart(${product.id})">Add to Cart</button>`
                  }
                </li>`;
            })
            .join("")}
        </ul>
      </div>
      <div class="view-cart-panel">
        <div class="cart-count">Cart Items: ${Object.keys(cart).length}</div>
        <button onclick="updateCartUI()" class="view-cart-btn"><i class="fa-solid fa-cart-shopping"></i> View Cart</button>
      </div>
    </div>
  `;
  root.innerHTML = str;
};


const updateCartUI = () => {
  currentPage = "cart";
  if (Object.keys(cart).length === 0) {
    root.innerHTML = `
      <div class="cart-page">
        <h2>Your Cart is Empty</h2>
        <button onclick="showProducts()">Go Back to Products</button>
      </div>
    `;
    return;
  }

  let totalAmount = 0;

  const cartItems = Object.keys(cart).map((productId) => {
      const product = products.find((p) => p.id == productId);
      const quantity = cart[productId];
      const totalPrice = product.price * quantity;
      totalAmount += totalPrice;

      return `
        <li class="product-item">
            <div>${product.name} - Price: &#8377;${product.price} × ${quantity} = &#8377;${totalPrice}</div>
            <div class="product-actions">
              <div>
              <button onclick="decrement(${productId})"><i class="fa-solid fa-minus"></i></button>
              <span>${quantity}</span>
              <button onclick="increment(${productId})"><i class="fa-solid fa-plus"></i></button>
              <button onclick="deleteFromCart(${productId})"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
        </li>
      `;
    })
    .join("");

  const str = `
    <div class="cart-page">
      <h2>Your Cart</h2>
      <ul>${cartItems}</ul>
      <h3>Total: &#8377;${totalAmount}</h3>
      <button onclick="showProducts()">Go Back to Products</button>
    </div>
  `;

  root.innerHTML = str;
};


showProducts();
