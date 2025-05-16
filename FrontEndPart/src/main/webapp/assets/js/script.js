/**
 * 
 */

(() => {
  // Data: Products per category (20+ each, example images use placeholders)
  const productsData = {
    mens: [
      {id: 'm1', name: "Men's Classic Shirt", price: 25.99, image: "https://via.placeholder.com/150x140?text=Men+Shirt+1"},
      {id: 'm2', name: "Men's Denim Jeans", price: 45.00, image: "https://via.placeholder.com/150x140?text=Men+Jeans"},
      {id: 'm3', name: "Men's Sneakers", price: 59.99, image: "https://via.placeholder.com/150x140?text=Men+Sneakers"},
      {id: 'm4', name: "Men's Leather Jacket", price: 120.00, image: "https://via.placeholder.com/150x140?text=Leather+Jacket"},
      {id: 'm5', name: "Men's Casual T-Shirt", price: 15.99, image: "https://via.placeholder.com/150x140?text=Men+T-Shirt"},
      {id: 'm6', name: "Men's Running Shorts", price: 18.50, image: "https://via.placeholder.com/150x140?text=Running+Shorts"},
      {id: 'm7', name: "Men's Formal Shoes", price: 80.00, image: "https://via.placeholder.com/150x140?text=Formal+Shoes"},
      {id: 'm8', name: "Men's Watch", price: 150.00, image: "https://via.placeholder.com/150x140?text=Watch"},
      {id: 'm9', name: "Men's Sunglasses", price: 35.75, image: "https://via.placeholder.com/150x140?text=Sunglasses"},
      {id: 'm10', name: "Men's Hoodie", price: 30.99, image: "https://via.placeholder.com/150x140?text=Men+Hoodie"},
      {id: 'm11', name: "Men's Socks (Pack of 5)", price: 12.00, image: "https://via.placeholder.com/150x140?text=Men+Socks"},
      {id: 'm12', name: "Men's Belt", price: 22.50, image: "https://via.placeholder.com/150x140?text=Belt"},
      {id: 'm13', name: "Men's Backpack", price: 55.00, image: "https://via.placeholder.com/150x140?text=Backpack"},
      {id: 'm14', name: "Men's Cufflinks", price: 29.99, image: "https://via.placeholder.com/150x140?text=Cufflinks"},
      {id: 'm15', name: "Men's Tie", price: 20.00, image: "https://via.placeholder.com/150x140?text=Tie"},
      {id: 'm16', name: "Men's Beanie", price: 14.50, image: "https://via.placeholder.com/150x140?text=Beanie"},
      {id: 'm17', name: "Men's Gym Bag", price: 60.00, image: "https://via.placeholder.com/150x140?text=Gym+Bag"},
      {id: 'm18', name: "Men's Wallet", price: 35.00, image: "https://via.placeholder.com/150x140?text=Wallet"},
      {id: 'm19', name: "Men's Dress Shirt", price: 40.00, image: "https://via.placeholder.com/150x140?text=Dress+Shirt"},
      {id: 'm20', name: "Men's Sweatpants", price: 28.99, image: "https://via.placeholder.com/150x140?text=Sweatpants"}
    ],
    womens: [
      {id: 'w1', name: "Women's Summer Dress", price: 39.99, image: "https://via.placeholder.com/150x140?text=Summer+Dress"},
      {id: 'w2', name: "Women's Handbag", price: 89.00, image: "https://via.placeholder.com/150x140?text=Handbag"},
      {id: 'w3', name: "Women's Running Shoes", price: 70.00, image: "https://via.placeholder.com/150x140?text=Running+Shoes"},
      {id: 'w4', name: "Women's Sunglasses", price: 40.50, image: "https://via.placeholder.com/150x140?text=Sunglasses"},
      {id: 'w5', name: "Women's Blouse", price: 25.00, image: "https://via.placeholder.com/150x140?text=Blouse"},
      {id: 'w6', name: "Women's Hat", price: 18.75, image: "https://via.placeholder.com/150x140?text=Hat"},
      {id: 'w7', name: "Women's Jeans", price: 48.00, image: "https://via.placeholder.com/150x140?text=Jeans"},
      {id: 'w8', name: "Women's Necklace", price: 120.00, image: "https://via.placeholder.com/150x140?text=Necklace"},
      {id: 'w9', name: "Women's Bracelet", price: 35.00, image: "https://via.placeholder.com/150x140?text=Bracelet"},
      {id: 'w10', name: "Women's Jacket", price: 95.99, image: "https://via.placeholder.com/150x140?text=Jacket"},
      {id: 'w11', name: "Women's Skirt", price: 30.00, image: "https://via.placeholder.com/150x140?text=Skirt"},
      {id: 'w12', name: "Women's Sandals", price: 24.99, image: "https://via.placeholder.com/150x140?text=Sandals"},
      {id: 'w13', name: "Women's Belt", price: 20.00, image: "https://via.placeholder.com/150x140?text=Belt"},
      {id: 'w14', name: "Women's Scarf", price: 15.50, image: "https://via.placeholder.com/150x140?text=Scarf"},
      {id: 'w15', name: "Women's Earrings", price: 29.99, image: "https://via.placeholder.com/150x140?text=Earrings"},
      {id: 'w16', name: "Women's Boots", price: 85.00, image: "https://via.placeholder.com/150x140?text=Boots"},
      {id: 'w17', name: "Women's Watch", price: 140.00, image: "https://via.placeholder.com/150x140?text=Watch"},
      {id: 'w18', name: "Women's T-Shirt", price: 20.00, image: "https://via.placeholder.com/150x140?text=T-Shirt"},
      {id: 'w19', name: "Women's Lipstick", price: 15.00, image: "https://via.placeholder.com/150x140?text=Lipstick"},
      {id: 'w20', name: "Women's Sunglasses", price: 38.00, image: "https://via.placeholder.com/150x140?text=Sunglasses2"},
    ],
    kids: [
      {id: 'k1', name: "Kids' T-shirt", price: 12.99, image: "https://via.placeholder.com/150x140?text=Kids+T-shirt"},
      {id: 'k2', name: "Kids' Sneakers", price: 40.00, image: "https://via.placeholder.com/150x140?text=Kids+Sneakers"},
      {id: 'k3', name: "Kids' Jeans", price: 25.50, image: "https://via.placeholder.com/150x140?text=Kids+Jeans"},
      {id: 'k4', name: "Kids' Backpack", price: 30.00, image: "https://via.placeholder.com/150x140?text=Kids+Backpack"},
      {id: 'k5', name: "Kids' Hoodie", price: 22.00, image: "https://via.placeholder.com/150x140?text=Kids+Hoodie"},
      {id: 'k6', name: "Kids' Toy Car", price: 15.00, image: "https://via.placeholder.com/150x140?text=Toy+Car"},
      {id: 'k7', name: "Kids' Dress", price: 19.99, image: "https://via.placeholder.com/150x140?text=Kids+Dress"},
      {id: 'k8', name: "Kids' Sandals", price: 18.50, image: "https://via.placeholder.com/150x140?text=Kids+Sandals"},
      {id: 'k9', name: "Kids' Cap", price: 8.00, image: "https://via.placeholder.com/150x140?text=Kids+Cap"},
      {id: 'k10', name: "Kids' Watch", price: 28.00, image: "https://via.placeholder.com/150x140?text=Kids+Watch"},
      {id: 'k11', name: "Kids' Puzzle", price: 12.00, image: "https://via.placeholder.com/150x140?text=Kids+Puzzle"},
      {id: 'k12', name: "Kids' Ball", price: 10.00, image: "https://via.placeholder.com/150x140?text=Kids+Ball"},
      {id: 'k13', name: "Kids' Gloves", price: 9.50, image: "https://via.placeholder.com/150x140?text=Kids+Gloves"},
      {id: 'k14', name: "Kids' Sunglasses", price: 14.00, image: "https://via.placeholder.com/150x140?text=Kids+Sunglasses"},
      {id: 'k15', name: "Kids' Belt", price: 7.50, image: "https://via.placeholder.com/150x140?text=Kids+Belt"},
      {id: 'k16', name: "Kids' Raincoat", price: 25.00, image: "https://via.placeholder.com/150x140?text=Kids+Raincoat"},
      {id: 'k17', name: "Kids' Socks", price: 8.99, image: "https://via.placeholder.com/150x140?text=Kids+Socks"},
      {id: 'k18', name: "Kids' Pajamas", price: 15.00, image: "https://via.placeholder.com/150x140?text=Kids+Pajamas"},
      {id: 'k19', name: "Kids' Shorts", price: 13.50, image: "https://via.placeholder.com/150x140?text=Kids+Shorts"},
      {id: 'k20', name: "Kids' Shoes", price: 30.00, image: "https://via.placeholder.com/150x140?text=Kids+Shoes"},
    ],
    electronics: [
      {id: 'e1', name: "Smartphone", price: 699.00, image: "https://via.placeholder.com/150x140?text=Smartphone"},
      {id: 'e2', name: "Laptop", price: 1100.00, image: "https://via.placeholder.com/150x140?text=Laptop"},
      {id: 'e3', name: "Wireless Earbuds", price: 149.99, image: "https://via.placeholder.com/150x140?text=Earbuds"},
      {id: 'e4', name: "Smartwatch", price: 199.99, image: "https://via.placeholder.com/150x140?text=Smartwatch"},
      {id: 'e5', name: "Bluetooth Speaker", price: 58.00, image: "https://via.placeholder.com/150x140?text=Speaker"},
      {id: 'e6', name: "Gaming Console", price: 399.00, image: "https://via.placeholder.com/150x140?text=Console"},
      {id: 'e7', name: "Camera", price: 530.00, image: "https://via.placeholder.com/150x140?text=Camera"},
      {id: 'e8', name: "Drone", price: 300.00, image: "https://via.placeholder.com/150x140?text=Drone"},
      {id: 'e9', name: "External Hard Drive", price: 80.00, image: "https://via.placeholder.com/150x140?text=Hard+Drive"},
      {id: 'e10', name: "Tablet", price: 350.00, image: "https://via.placeholder.com/150x140?text=Tablet"},
      {id: 'e11', name: "Monitor", price: 220.00, image: "https://via.placeholder.com/150x140?text=Monitor"},
      {id: 'e12', name: "Router", price: 60.00, image: "https://via.placeholder.com/150x140?text=Router"},
      {id: 'e13', name: "Keyboard", price: 35.00, image: "https://via.placeholder.com/150x140?text=Keyboard"},
      {id: 'e14', name: "Mouse", price: 25.00, image: "https://via.placeholder.com/150x140?text=Mouse"},
      {id: 'e15', name: "Smart Light Bulb", price: 19.99, image: "https://via.placeholder.com/150x140?text=Light+Bulb"},
      {id: 'e16', name: "HDMI Cable", price: 15.00, image: "https://via.placeholder.com/150x140?text=HDMI+Cable"},
      {id: 'e17', name: "VR Headset", price: 499.00, image: "https://via.placeholder.com/150x140?text=VR+Headset"},
      {id: 'e18', name: "Smart Thermostat", price: 189.00, image: "https://via.placeholder.com/150x140?text=Thermostat"},
      {id: 'e19', name: "Action Camera", price: 299.00, image: "https://via.placeholder.com/150x140?text=Action+Camera"},
      {id: 'e20', name: "Power Bank", price: 45.00, image: "https://via.placeholder.com/150x140?text=Power+Bank"},
    ]
  };

  // State
  let currentCategory = 'mens';
  let cart = {}; // id: {product, quantity}

  // Elements
  const productsContainer = document.getElementById('products-container');
  const navButtons = document.querySelectorAll('nav button');
  const cartCount = document.getElementById('cart-count');
  const cartModal = document.getElementById('cart-modal');
  const cartList = document.getElementById('cart-list');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const openCartBtn = document.getElementById('open-cart-btn');
  const cartTotalElem = document.getElementById('cart-total');
  const buyNowCartBtn = document.getElementById('buy-now-cart-btn');

  // Utils
  function formatPrice(price) {
    return '$' + price.toFixed(2);
  }

  // Render products for category
  function renderProducts() {
    const products = productsData[currentCategory];
    productsContainer.innerHTML = '';
    for (const p of products) {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-name" title="${p.name}">${p.name}</div>
        <div class="product-price">${formatPrice(p.price)}</div>
        <div class="btn-group">
          <button aria-label="Add ${p.name} to cart" class="add-btn" data-id="${p.id}">Add to Cart</button>
          <button aria-label="Buy ${p.name} now" class="buy-btn" data-id="${p.id}">Buy Now</button>
        </div>
      `;
      productsContainer.appendChild(div);
    }
  }

  // Update cart count
  function updateCartCount() {
    const count = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = count;
  }

  // Save cart to sessionStorage
  function saveCart() {
    try {
      sessionStorage.setItem('simple-store-cart', JSON.stringify(cart));
    } catch {}
  }
  // Load cart from sessionStorage
  function loadCart() {
    try {
      const data = sessionStorage.getItem('simple-store-cart');
      if(data) {
        cart = JSON.parse(data);
      }
    } catch {}
  }

  // Add to cart
  function addToCart(productId) {
    const product = findProductById(productId);
    if (!product) return;
    if (cart[productId]) {
      cart[productId].quantity++;
    } else {
      cart[productId] = { product, quantity: 1 };
    }
    updateCartCount();
    saveCart();
    alert(`Added "${product.name}" to cart.`);
  }

  // Delete item from cart
  function deleteFromCart(productId) {
    if (cart[productId]) {
      delete cart[productId];
      updateCartCount();
      renderCartItems();
      saveCart();
    }
  }

  // Find product by id
  function findProductById(id) {
    for (const cat in productsData) {
      const found = productsData[cat].find(p => p.id === id);
      if (found) return found;
    }
    return null;
  }

  // Render cart items in modal
  function renderCartItems() {
    if (Object.keys(cart).length === 0) {
      cartList.innerHTML = '<p style="text-align:center; color:#6c757d;">Your cart is empty.</p>';
      cartTotalElem.textContent = 'Total: $0.00';
      return;
    }

    cartList.innerHTML = '';
    let total = 0;
    for (const key in cart) {
      const item = cart[key];
      const itemTotal = item.product.price * item.quantity;
      total += itemTotal;
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img class="cart-item-image" src="${item.product.image}" alt="${item.product.name}" />
        <div class="cart-item-details">
          <div class="cart-item-name">${item.product.name}</div>
          <div class="cart-item-qty-price">Qty: ${item.quantity} &times; ${formatPrice(item.product.price)}</div>
        </div>
        <div class="cart-item-actions">
          <button class="cart-btn" aria-label="Remove ${item.product.name} from cart" data-id="${item.product.id}">Remove</button>
        </div>
      `;
      cartList.appendChild(div);
    }
    cartTotalElem.textContent = `Total: ${formatPrice(total)}`;
  }

  // Buy now for a product
  function buyNow(productId) {
    const product = findProductById(productId);
    if (!product) return;
    alert(`Thank you for buying: "${product.name}" for ${formatPrice(product.price)}!`);
  }

  // Buy all cart items
  function buyCart() {
    if (Object.keys(cart).length === 0) {
      alert('Your cart is empty!');
      return;
    }
    let totalItems = 0;
    let totalPrice = 0;
    for (const key in cart) {
      totalItems += cart[key].quantity;
      totalPrice += cart[key].product.price * cart[key].quantity;
    }
    alert(`Thank you for buying ${totalItems} item(s) totaling ${formatPrice(totalPrice)}!`);
    cart = {};
    updateCartCount();
    saveCart();
    renderCartItems();
    closeCart();
  }

  // Open cart modal
  function openCart() {
    renderCartItems();
    cartModal.classList.add('active');
    cartList.focus();
  }
  // Close cart modal
  function closeCart() {
    cartModal.classList.remove('active');
  }

  // Event listeners
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.cat === currentCategory) return;
      currentCategory = btn.dataset.cat;
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });

  productsContainer.addEventListener('click', e => {
    if (e.target.classList.contains('add-btn')) {
      const pid = e.target.dataset.id;
      addToCart(pid);
    } else if (e.target.classList.contains('buy-btn')) {
      const pid = e.target.dataset.id;
      buyNow(pid);
    }
  });

  openCartBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) closeCart();
  });

  cartList.addEventListener('click', e => {
    if (e.target.classList.contains('cart-btn')) {
      const pid = e.target.dataset.id;
      deleteFromCart(pid);
    }
  });

  buyNowCartBtn.addEventListener('click', buyCart);

  // Keyboard accessibility: close cart modal on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartModal.classList.contains('active')) {
      closeCart();
    }
  });

  // Initialize
  loadCart();
  updateCartCount();
  renderProducts();

})();
