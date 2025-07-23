// Restaurant data
const restaurantsData = {
  sodexo: {
    name: 'Sodexo',
    description: 'Variety of meals and snacks',
    image: 'restaurants/sodexo.jpg',
    owner: 'sodexo@klu.ac.in',
    menu: [
      { name: 'Chicken Rice', price: 90, image: 'chicken-rice.jpeg', available: true },
      { name: 'Chicken 65', price: 100, image: 'chicken65.jpeg', available: true },
      { name: 'Biryani', price: 120, image: 'chicken-biryani.jpg', available: true },
      { name: 'Dosa', price: 50, image: 'dosa.jpeg', available: false },
      { name: 'Tea', price: 15, image: 'tea.jpeg', available: true },
      { name: 'Poori', price: 40, image: 'poori.jpg', available: true },
      { name: 'Idly', price: 40, image: 'idly.jpg', available: true },
      { name: 'Pani Puri', price: 30, image: 'pani poori.jpeg', available: true },
    ]
  },
  nalabagam: {
    name: 'Nalabagam Canteen',
    description: 'South Indian specialties',
    image: 'restaurants/nalabagam.jpg',
    owner: 'nalabagam@klu.ac.in',
    menu: [
      { name: 'Biryani', price: 120, image: 'chicken-biryani.jpg', available: true },
      { name: 'Chicken 65', price: 100, image: 'chicken65.jpeg', available: true },
      { name: 'Veg Biryani', price: 90, image: 'veg-biriyani.jpeg', available: true },
      { name: 'Egg Curry', price: 70, image: 'egg-curry.jpeg', available: true },
      { name: 'Veg Manchurian', price: 60, image: 'veg-manchurian.jpeg', available: true },
      { name: 'Dosa', price: 20, image: 'dosa.jpeg', available: true },
      { name: 'Parotta', price: 10, image: 'parotta.jpeg', available: true },
      { name: 'Kuska', price: 50, image: 'khuska.jpg', available: true },
      { name: 'Chicken Curry', price: 80, image: 'chicken-curry.jpeg', available: true },
      { name: 'Schezwan Noodles', price: 60, image: 'Schezwan Noodles.jpeg', available: true },
      { name: 'Tandoori', price: 50, image: 'tandoori.jpeg', available: true },
      { name: 'Chicken Fried Rice', price: 60, image: 'chicken-rice.jpeg', available: true },
      { name: 'Egg Fried Rice', price: 70, image: 'egg rice.jpeg', available: true },
      { name: 'Liver', price: 50, image: 'liver-fry.jpeg', available: true },
      { name: 'poori', price: 40, image: 'poori.jpg', available: true },
    ]
  },
  anandam: {
    name: 'Anandam Juice',
    description: 'Fresh juices and shakes',
    image: 'restaurants/anandam.jpg',
    owner: 'anandam@klu.ac.in',
    menu: [
      { name: 'Lemon Juice', price: 20, image: 'lemon.jpg', available: true },
      { name: 'Apple Juice', price: 30, image: 'apple.jpg', available: true },
      { name: 'Orange Juice', price: 40, image: 'orange-juice.jpeg', available: true },
      { name: 'Mango Juice', price: 50, image: 'mango-juice.jpeg', available: true },
      { name: 'Pineapple Juice', price: 30, image: 'pineapple.jpeg', available: true },
      { name: 'Watermelon Juice', price: 40, image: 'watermelon-juice.jpeg', available: true },
      { name: 'Mixed Fruit Juice', price: 60, image: 'mix-fruit-juice.jpg', available: true },
      { name: 'Banana Shake', price: 50, image: 'banana-shake.jpg', available: true }
    ]
  },
  bakery: {
    name: 'Cake Bakery',
    description: 'Fresh baked goods and snacks',
    image: 'restaurants/bakery.jpg',
    owner: 'bakery@klu.ac.in',
    menu: [
      { name: 'Cake', price: 200, image: 'cake.jpeg', available: true },
      { name: 'Veg Puff', price: 25, image: 'veg-puff.jpeg', available: true },
      { name: 'Egg Puff', price: 30, image: 'egg puff.jpeg', available: true },
      { name: 'Chicken Puff', price: 35, image: 'chicken-puff.jpeg', available: true },
      { name: 'Donut', price: 40, image: 'donut.jpeg', available: true },
      { name: 'Cookies (Pack of 4)', price: 60, image: 'cookies.jpeg', available: true }
    ]
  },
  tiffin: {
    name: 'Raja Canteen (veg)',
    description: 'Homestyle meals and combos',
    image: 'restaurants/tiffin.jpg',
    owner: 'rajacanteen@klu.ac.in',
    menu: [
      { name: 'Vada', price: 7, image: 'vada.jpeg', available: true },  
      { name: 'Veg Thali', price: 100, image: 'veg-thali.jpeg', available: true },
      { name: 'Curd Rice', price: 70, image: 'curd-ricce.jpeg', available: true },
      { name: 'Sambar Rice', price: 80, image: 'sambar-rice.jpeg', available: true },
      { name: 'Parotta', price: 75, image: 'parotta.jpeg', available: true },
      { name: 'Chapati', price: 30, image: 'chapathi.jpeg', available: true },
      { name: 'Veg Biryani', price: 90, image: 'veg-biriyani.jpeg', available: true }
    ]
  },
  Refreshments: {
    name: 'Vasu\'s Cafe',
    description: 'Quick bites and snacks',
    image: 'restaurants/fastfood.jpg',
    owner: 'vasucafe@klu.ac.in',
    menu: [
      { name: 'Tea', price: 14, image: 'tea.jpeg', available: true },
      { name: 'Coffee', price: 16, image: 'coffee.jpeg', available: true },
      { name: 'Samosa', price: 11, image: 'samosa.jpg', available: true },
      { name: 'Paneer Puff', price: 18, image: 'panner-puff.jpeg', available: true },
      { name: 'Mushroom Puff', price: 18, image: 'mushroom-puff.webp', available: true },
      { name: 'Paneer Roll', price: 18, image: 'paneer-roll.webp', available: true },
      { name: 'Egg Puff', price: 18, image: 'egg puff.jpeg', available: true }
    ]
  },
  North: {
    name: 'North Cafe',
    description: 'North Indian delicacies',
    image: 'restaurants/north-cafe.jpg',
    owner: 'northcafe@klu.ac.in',
    menu: [
      { name: 'bajji', price: 20, image: 'bajji.jpg', available: true },
      { name: 'pav bhaji', price: 50, image: 'pav bhaji.jpeg', available: true },
      { name: 'Biryani', price: 220, image: 'chicken-biryani.jpg', available: true },
      { name: 'Roti', price: 20, image: 'roti.jpg', available: true },
      { name: 'Lassi', price: 30, image: 'lassi.webp', available: true },
      { name: 'pani puri', price: 100, image: 'pani poori.jpeg', available: true }
    ]
  }
};
// Restaurant owners
const restaurantOwners = {
  'sodexo@klu.ac.in': { password: 'sodexo123', restaurantId: 'sodexo' },
  'nalabagam@klu.ac.in': { password: 'nalabagam123', restaurantId: 'nalabagam' },
  'anandam@klu.ac.in': { password: 'anandam123', restaurantId: 'anandam' },
  'bakery@klu.ac.in': { password: 'bakery123', restaurantId: 'bakery' },
  'vasucafe@klu.ac.in': { password: 'vasucafe123', restaurantId: 'Refreshments' },
  'northcafe@klu.ac.in': { password: 'northcafe123', restaurantId: 'North' },
  'rajacanteen@klu.ac.in': { password: 'rajacanteen123', restaurantId: 'tiffin' }
};

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Initialize the application
function initializeApp() {
  checkLoginStatus();
  updateCartCount();
  attachEventListeners();
  
  if (document.getElementById('menu-items')) loadMenuItems();
  if (document.getElementById('restaurants-container')) loadRestaurants();
  if (document.getElementById('userName')) updateProfileDisplay();
  if (document.getElementById('restaurant-orders')) loadRestaurantOrders();
  if (document.getElementById('student-orders')) loadStudentOrders();
  initializeSearch();
  
  // Initialize explore button
  setupExploreButton();
}

// New function to setup explore button
function setupExploreButton() {
  const exploreBtn = document.getElementById('exploreRestaurantsBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function(e) {
      // Check if we're already on the index page
      if (window.location.pathname.endsWith('index.html')) { // <-- FIXED: added missing closing parenthesis
        // Allow default navigation behavior
        return;
      }
      // For other pages, prevent default and navigate to restaurants.html
      e.preventDefault();
      window.location.href = 'restaurants.html';
    });
  }
}

// Check login status and update UI
function checkLoginStatus() {
  const profileDropdown = document.getElementById('profileDropdown');
  const loginBtn = document.getElementById('loginBtn');
  const profileInitial = document.getElementById('profileInitial');
  const profileInitialLarge = document.getElementById('profileInitialLarge');

  if (currentUser) {
    if (profileDropdown) profileDropdown.classList.remove('d-none');
    if (loginBtn) loginBtn.classList.add('d-none');
    const initial = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U';
    if (profileInitial) profileInitial.textContent = initial;
    if (profileInitialLarge) profileInitialLarge.textContent = initial;
  } else {
    if (profileDropdown) profileDropdown.classList.add('d-none');
    if (loginBtn) loginBtn.classList.remove('d-none');
    if (profileInitial) profileInitial.textContent = '';
  }
}

// Load restaurants
function loadRestaurants() {
  const container = document.getElementById('restaurants-container');
  if (!container) return;

  container.innerHTML = Object.entries(restaurantsData).map(([id, restaurant]) => `
    <div class="col-md-4 mb-4 d-flex">
      <a href="menu.html?restaurant=${id}" class="card restaurant-card w-100">
        <div class="image-container">
          <img src="images/${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${restaurant.name}</h5>
          <p class="card-text">${restaurant.description}</p>
        </div>
      </a>
    </div>
  `).join('');
}

// Load menu items
function loadMenuItems() {
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get('restaurant');
  const menuItemsContainer = document.getElementById('menu-items');
  const restaurantTitle = document.getElementById('restaurantTitle');

  if (!restaurantId || !menuItemsContainer || !restaurantsData[restaurantId]) return;

  const restaurant = restaurantsData[restaurantId];
  
  if (restaurantTitle) {
    restaurantTitle.textContent = restaurant.name;
  }

  menuItemsContainer.innerHTML = restaurant.menu.map(item => `
    <div class="col-md-4 col-lg-3 mb-4 d-flex">
      <div class="card h-100 w-100 ${restaurantId === 'anandam' ? 'juice-card' : ''}">
        <div class="image-container ${restaurantId === 'anandam' ? 'juice-image' : ''}">
          <img src="images/${item.image}" class="card-img-top" alt="${item.name}"
               onerror="this.onerror=null;this.src='images/default-food.jpg'">
          ${item.available === false ? '<div class="out-of-stock">Out of Stock</div>' : ''}
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text text-danger fw-bold">₹${item.price.toFixed(2)}</p>
          <button class="btn btn-danger add-to-cart" 
                  data-name="${item.name}" 
                  data-price="${item.price}"
                  data-restaurant="${restaurantId}"
                  ${item.available === false ? 'disabled' : ''}>
            ${item.available === false ? 'Not Available' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Search functionality
function initializeSearch() {
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
      
      if (searchTerm === '') return;
      
      if (window.location.pathname.includes('menu.html')) {
        searchMenuItems(searchTerm);
      } else if (window.location.pathname.includes('restaurants.html')) {
        searchRestaurants(searchTerm);
      } else {
        window.location.href = `restaurants.html?search=${encodeURIComponent(searchTerm)}`;
      }
    });
  }
}

function searchMenuItems(term) {
  const menuItems = document.querySelectorAll('.card-title');
  let found = false;
  
  menuItems.forEach(item => {
    const itemName = item.textContent.toLowerCase();
    const card = item.closest('.col-md-4');
    
    if (itemName.includes(term)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });
  
  if (!found) {
    alert('No items found matching your search.');
    document.querySelectorAll('.col-md-4').forEach(card => {
      card.style.display = 'block';
    });
  }
}

function searchRestaurants(term) {
  const restaurants = document.querySelectorAll('.restaurant-card .card-title');
  let found = false;
  
  restaurants.forEach(restaurant => {
    const restaurantName = restaurant.textContent.toLowerCase();
    const card = restaurant.closest('.col-md-4');
    
    if (restaurantName.includes(term)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });
  
  if (!found) {
    alert('No restaurants found matching your search.');
    document.querySelectorAll('.col-md-4').forEach(card => {
      card.style.display = 'block';
    });
  }
}

// Cart functionality
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
  });
}

function updateCartModal() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  if (!cartItemsContainer) return;
  
  cartItemsContainer.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <div>
        <button class="btn btn-sm btn-outline-secondary me-2" data-index="${i}" data-action="decrease">-</button>
        <span>${item.quantity}</span>
        <button class="btn btn-sm btn-outline-secondary ms-2" data-index="${i}" data-action="increase">+</button>
        <span class="ms-2">${item.name} (${restaurantsData[item.restaurant]?.name})</span>
      </div>
      <div>
        <span class="me-2">₹${(item.price * item.quantity).toFixed(2)}</span>
        <button class="btn btn-sm btn-danger" data-index="${i}">Remove</button>
      </div>
    </div>
  `).join('');

  if (cartTotal) cartTotal.textContent = calculateTotal().toFixed(2);
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Order management
function placeOrder() {
  if (!currentUser || cart.length === 0) return;

  const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
  const restaurantId = cart[0].restaurant;
  
  const order = {
    id: Date.now().toString(),
    studentEmail: currentUser.email,
    studentName: currentUser.name || 'Customer',
    restaurantId: restaurantId,
    restaurantName: restaurantsData[restaurantId]?.name || 'Unknown Restaurant',
    items: [...cart],
    total: calculateTotal(),
    status: 'pending',
    date: new Date().toISOString(),
    deliveryAddress: `${profile.hostel || ''}, Room ${profile.roomNumber || ''}`,
    contact: profile.contact || '',
    specialInstructions: profile.addressDetails || ''
  };

  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  alert(`Order placed successfully! Your order ID is ${order.id}`);
  window.location.href = 'profile.html';
}

function loadStudentOrders() {
  const container = document.getElementById('student-orders');
  if (!container || !currentUser) return;

  const studentOrders = orders.filter(order => order.studentEmail === currentUser.email)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  container.innerHTML = studentOrders.map(order => `
    <div class="order-card mb-3 p-3 border rounded">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5>Order #${order.id}</h5>
        <span class="badge ${getStatusBadgeClass(order.status)}">${order.status.toUpperCase()}</span>
      </div>
      <div class="mb-2">
        <strong>Restaurant:</strong> ${order.restaurantName}
      </div>
      <div class="mb-2">
        <strong>Order Date:</strong> ${new Date(order.date).toLocaleString()}
      </div>
      <div class="mb-2">
        <strong>Items:</strong>
        <ul class="mb-2">
          ${order.items.map(item => `
            <li>${item.quantity} × ${item.name} - ₹${item.price * item.quantity}</li>
          `).join('')}
        </ul>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <strong>Total: ₹${order.total.toFixed(2)}</strong>
        <div>
          <button class="btn btn-sm btn-outline-danger me-2 view-order" data-id="${order.id}">Details</button>
          <button class="btn btn-sm btn-danger reorder" data-id="${order.id}">Reorder</button>
        </div>
      </div>
    </div>
  `).join('') || '<p class="text-muted">You have no orders yet.</p>';
}

function loadRestaurantOrders() {
  const container = document.getElementById('restaurant-orders');
  if (!container || !currentUser || !currentUser.restaurantId) return;

  const restaurantOrders = orders.filter(order => 
    order.restaurantId === currentUser.restaurantId
  ).sort((a, b) => new Date(b.date) - new Date(a.date));
  
  container.innerHTML = restaurantOrders.map(order => `
    <div class="order-card mb-3 p-3 border rounded">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5>Order #${order.id}</h5>
        <span class="badge ${getStatusBadgeClass(order.status)}">${order.status.toUpperCase()}</span>
      </div>
      <div class="mb-2">
        <strong>Customer:</strong> ${order.studentName} (${order.studentEmail})
      </div>
      <div class="mb-2">
        <strong>Delivery to:</strong> ${order.deliveryAddress}
      </div>
      <div class="mb-2">
        <strong>Contact:</strong> ${order.contact}
      </div>
      <div class="mb-2">
        <strong>Items:</strong>
        <ul class="mb-2">
          ${order.items.map(item => `
            <li>${item.quantity} × ${item.name} - ₹${item.price * item.quantity}</li>
          `).join('')}
        </ul>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <strong>Total: ₹${order.total.toFixed(2)}</strong>
        <select class="form-select status-select" data-id="${order.id}" style="width: auto;">
          <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
          <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Preparing</option>
          <option value="ready" ${order.status === 'ready' ? 'selected' : ''}>Ready</option>
          <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
        </select>
      </div>
      ${order.specialInstructions ? `
        <div class="mt-2">
          <strong>Special Instructions:</strong> ${order.specialInstructions}
        </div>
      ` : ''}
    </div>
  `).join('') || '<p class="text-muted">No orders found for your restaurant.</p>';
}

function getStatusBadgeClass(status) {
  switch(status) {
    case 'pending': return 'bg-warning text-dark';
    case 'preparing': return 'bg-info';
    case 'ready': return 'bg-primary';
    case 'delivered': return 'bg-success';
    default: return 'bg-secondary';
  }
}

// Authentication
function handleLogin(email, password) {
  // Check if restaurant owner
  if (restaurantOwners[email] && restaurantOwners[email].password === password) {
    currentUser = {
      email,
      restaurantId: restaurantOwners[email].restaurantId,
      type: 'restaurant'
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    window.location.href = 'restaurant-dashboard.html';
    return;
  }

  // Check student login
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser?.email === email && storedUser?.password === password) {
    currentUser = storedUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
}

function handleSignup(name, email, password) {
  if (!email.endsWith('@klu.ac.in')) {
    document.getElementById('emailError').classList.remove('d-none');
    return false;
  }

  const user = { name, email, password, type: 'student' };
  localStorage.setItem('user', JSON.stringify(user));
  currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  createUserProfile(user);
  return true;
}

function handleRestaurantSignup(restaurantName, email, password, contact, description, category, location) {
  const restaurantId = restaurantName.toLowerCase().replace(/\s+/g, '-');
  
  restaurantsData[restaurantId] = {
    name: restaurantName,
    description: description,
    image: 'restaurants/default.jpg',
    owner: email,
    menu: [],
    category: category,
    location: location
  };
  
  restaurantOwners[email] = { 
    password: password, 
    restaurantId: restaurantId,
    contact: contact
  };
  
  localStorage.setItem('restaurantsData', JSON.stringify(restaurantsData));
  localStorage.setItem('restaurantOwners', JSON.stringify(restaurantOwners));
  
  currentUser = {
    email,
    restaurantId,
    type: 'restaurant'
  };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  return true;
}

function logout() {
  localStorage.removeItem('currentUser');
  currentUser = null;
  checkLoginStatus();
  window.location.href = 'index.html';
}

// Profile management
function createUserProfile(userData) {
  const userProfile = {
    name: userData.name,
    email: userData.email,
    contact: '',
    hostel: '',
    roomNumber: '',
    addressDetails: ''
  };
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

// Profile Page Functionality
function updateProfileDisplay() {
  if (!document.getElementById('userName')) return;
  
  const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  
  // Update profile info
  document.getElementById('userName').textContent = userProfile.name || currentUser.name || 'User';
  document.getElementById('userEmail').textContent = currentUser.email || 'user@klu.ac.in';
  
  // Update wallet balance
  const walletBalance = parseFloat(localStorage.getItem('walletBalance') || '0');
  document.getElementById('walletBalance').textContent = `₹${walletBalance.toFixed(2)}`;
  
  // Load saved addresses
  loadSavedAddresses();
  
  // Load orders, transactions, and favorites
  loadStudentOrders();
  loadTransactionHistory();
  loadFavoriteItems();
  
  // Set initial tab
  const tabTrigger = new bootstrap.Tab(document.querySelector('#orders-tab'));
  tabTrigger.show();
}

function loadSavedAddresses() {
  const savedAddresses = JSON.parse(localStorage.getItem('savedAddresses')) || [];
  const container = document.getElementById('savedAddresses');
  
  if (!container) return;
  
  if (savedAddresses.length === 0) {
    container.innerHTML = '<p class="text-muted">No saved addresses yet.</p>';
    return;
  }
  
  container.innerHTML = savedAddresses.map((address, index) => `
    <div class="address-card mb-3 p-3 border rounded ${address.isDefault ? 'border-danger' : ''}">
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <h6 class="mb-1">${address.name}</h6>
          <p class="mb-1 small">${address.hostel}, Room ${address.roomNumber}</p>
          ${address.details ? `<p class="mb-1 small text-muted">${address.details}</p>` : ''}
          ${address.isDefault ? '<span class="badge bg-danger">Default</span>' : ''}
        </div>
        <div class="btn-group">
          <button class="btn btn-sm btn-outline-secondary edit-address" data-index="${index}">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger delete-address" data-index="${index}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function loadTransactionHistory() {
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  const container = document.getElementById('transaction-history');
  
  if (!container) return;
  
  if (transactions.length === 0) {
    container.innerHTML = '<p class="text-muted">No transactions yet.</p>';
    return;
  }
  
  container.innerHTML = transactions.map(transaction => `
    <div class="transaction-item mb-3 p-3 border rounded">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-1">${transaction.type === 'add' ? 'Wallet Top-up' : 'Order Payment'}</h6>
          <p class="mb-0 small text-muted">${new Date(transaction.date).toLocaleString()}</p>
        </div>
        <div class="text-end">
          <p class="mb-0 fw-bold ${transaction.type === 'add' ? 'text-success' : 'text-danger'}">
            ${transaction.type === 'add' ? '+' : '-'}₹${transaction.amount.toFixed(2)}
          </p>
          <p class="mb-0 small">${transaction.method}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function loadFavoriteItems() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const container = document.getElementById('favorite-items');
  
  if (!container) return;
  
  if (favorites.length === 0) {
    container.innerHTML = '<p class="text-muted">No favorite items yet.</p>';
    return;
  }
  
  container.innerHTML = favorites.map(fav => {
    const restaurant = restaurantsData[fav.restaurantId];
    const menuItem = restaurant?.menu.find(item => item.name === fav.itemName);
    
    return `
      <div class="favorite-item mb-3 p-3 border rounded">
        <div class="d-flex">
          <div class="flex-shrink-0 me-3">
            <img src="images/${menuItem?.image || 'default-food.jpg'}" 
                 class="rounded" width="60" height="60" 
                 onerror="this.onerror=null;this.src='images/default-food.jpg'">
          </div>
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <h6 class="mb-1">${fav.itemName}</h6>
                <p class="mb-1 small text-muted">${restaurant?.name || 'Unknown Restaurant'}</p>
              </div>
              <div class="text-end">
                <p class="mb-1 fw-bold">₹${menuItem?.price.toFixed(2) || '0.00'}</p>
              </div>
            </div>
            <button class="btn btn-sm btn-danger mt-2 order-again" 
                    data-name="${fav.itemName}" 
                    data-price="${menuItem?.price || 0}" 
                    data-restaurant="${fav.restaurantId}">
              <i class="fas fa-shopping-cart me-1"></i> Order Again
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function handleAddMoney() {
  const amount = parseFloat(document.getElementById('amount').value);
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount');
    return;
  }
  
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  const currentBalance = parseFloat(localStorage.getItem('walletBalance') || '0');
  const newBalance = currentBalance + amount;
  
  // Save new balance
  localStorage.setItem('walletBalance', newBalance.toString());
  
  // Record transaction
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  transactions.push({
    id: Date.now().toString(),
    type: 'add',
    amount: amount,
    method: paymentMethod,
    date: new Date().toISOString()
  });
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
  // Update UI
  document.getElementById('walletBalance').textContent = `₹${newBalance.toFixed(2)}`;
  loadTransactionHistory();
  
  // Close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('addMoneyModal'));
  modal.hide();
  
  alert(`Successfully added ₹${amount.toFixed(2)} to your wallet!`);
}

function handleAddressFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const addressId = form.querySelector('#addressId').value;
  const addressName = form.querySelector('#addressName').value;
  const hostel = form.querySelector('#hostelSelect').value;
  const roomNumber = form.querySelector('#roomNumber').value;
  const details = form.querySelector('#addressDetails').value;
  const isDefault = form.querySelector('#defaultAddress').checked;
  
  const savedAddresses = JSON.parse(localStorage.getItem('savedAddresses')) || [];
  
  if (addressId) {
    // Update existing address
    const index = savedAddresses.findIndex(addr => addr.id === addressId);
    if (index !== -1) {
      savedAddresses[index] = {
        ...savedAddresses[index],
        name: addressName,
        hostel,
        roomNumber,
        details,
        isDefault
      };
    }
  } else {
    // Add new address
    savedAddresses.push({
      id: Date.now().toString(),
      name: addressName,
      hostel,
      roomNumber,
      details,
      isDefault
    });
  }
  
  // If this is set as default, unset others
  if (isDefault) {
    savedAddresses.forEach(addr => {
      if (addr.id !== addressId) addr.isDefault = false;
    });
  }
  
  localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
  loadSavedAddresses();
  
  const modal = bootstrap.Modal.getInstance(document.getElementById('addressModal'));
  modal.hide();
}

function setupProfileEventListeners() {
  // Add Money Button
  document.getElementById('addMoneyBtn')?.addEventListener('click', function() {
    const modal = new bootstrap.Modal('#addMoneyModal');
    modal.show();
  });
  
  // Add Money Form
  document.getElementById('addMoneyForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    handleAddMoney();
  });
  
  // Add Address Button
  document.getElementById('addAddressBtn')?.addEventListener('click', function() {
    document.getElementById('addressModalTitle').textContent = 'Add New Address';
    document.getElementById('addressId').value = '';
    document.getElementById('addressForm').reset();
    const modal = new bootstrap.Modal('#addressModal');
    modal.show();
  });
  
  // Edit Address Buttons
  document.addEventListener('click', function(e) {
    if (e.target.closest('.edit-address')) {
      const index = e.target.closest('.edit-address').dataset.index;
      const savedAddresses = JSON.parse(localStorage.getItem('savedAddresses')) || [];
      const address = savedAddresses[index];
      
      document.getElementById('addressModalTitle').textContent = 'Edit Address';
      document.getElementById('addressId').value = address.id;
      document.getElementById('addressName').value = address.name;
      document.getElementById('hostelSelect').value = address.hostel;
      document.getElementById('roomNumber').value = address.roomNumber;
      document.getElementById('addressDetails').value = address.details || '';
      document.getElementById('defaultAddress').checked = address.isDefault || false;
      
      const modal = new bootstrap.Modal('#addressModal');
      modal.show();
    }
    
    // Delete Address
    if (e.target.closest('.delete-address')) {
      if (confirm('Are you sure you want to delete this address?')) {
        const index = e.target.closest('.delete-address').dataset.index;
        const savedAddresses = JSON.parse(localStorage.getItem('savedAddresses')) || [];
        savedAddresses.splice(index, 1);
        localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
        loadSavedAddresses();
      }
    }
    
    // Order Again from Favorites
    if (e.target.closest('.order-again')) {
      const button = e.target.closest('.order-again');
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const restaurant = button.dataset.restaurant;
      
      // Add to cart
      const existingItem = cart.find(item => item.name === name && item.restaurant === restaurant);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name, price, quantity: 1, restaurant });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      
      alert(`${name} has been added to your cart!`);
    }
  });
  
  // Address Form Submission
  document.getElementById('addressForm')?.addEventListener('submit', handleAddressFormSubmit);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  
  // Profile page specific initialization
  if (document.getElementById('userName')) {
    updateProfileDisplay();
    setupProfileEventListeners();
  }
});
function showProfileModal() {
  const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
  const modalHtml = `
    <div class="modal fade" id="profileModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Your Profile</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="profileForm">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" value="${userProfile.name || ''}" readonly>
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" value="${userProfile.email || ''}" readonly>
              </div>
              <div class="mb-3">
                <label for="contactNumber" class="form-label">Contact Number</label>
                <input type="tel" class="form-control" id="contactNumber" required 
                       value="${userProfile.contact || ''}" placeholder="Enter your phone number">
              </div>
              <div class="mb-3">
                <label for="hostelSelect" class="form-label">Hostel</label>
                <select class="form-select" id="hostelSelect" required>
                  <option value="" ${!userProfile.hostel ? 'selected disabled' : ''}>Select your hostel</option>
                  <option value="Nelson Mandela Hostel" ${userProfile.hostel === 'Nelson Mandela Hostel' ? 'selected' : ''}>Nelson Mandela Hostel</option>
                  <option value="Bhagat Singh Hostel" ${userProfile.hostel === 'Bhagat Singh Hostel' ? 'selected' : ''}>Bhagat Singh Hostel</option>
                  <option value="Radha Krishna Hostel" ${userProfile.hostel === 'Radha Krishna Hostel' ? 'selected' : ''}>Radha Krishna Hostel</option>
                  <option value="Bharati PG Mens Hostel" ${userProfile.hostel === 'Bharati PG Mens Hostel' ? 'selected' : ''}>Bharati PG Mens Hostel</option>
                  <option value="MH-5" ${userProfile.hostel === 'MH-5' ? 'selected' : ''}>MH-5</option>
                  <option value="MH-6" ${userProfile.hostel === 'MH-6' ? 'selected' : ''}>MH-6</option>
                  <option value="MH-7" ${userProfile.hostel === 'MH-7' ? 'selected' : ''}>MH-7</option>
                  <option value="LH-1" ${userProfile.hostel === 'LH-1' ? 'selected' : ''}>LH-1</option>
                  <option value="LH-2" ${userProfile.hostel === 'LH-2' ? 'selected' : ''}>LH-2</option>
                  <option value="LH-3" ${userProfile.hostel === 'LH-3' ? 'selected' : ''}>LH-3</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="roomNumber" class="form-label">Room Number</label>
                <input type="text" class="form-control" id="roomNumber" required 
                       value="${userProfile.roomNumber || ''}" placeholder="Enter your room number">
              </div>
              <div class="mb-3">
                <label for="addressDetails" class="form-label">Additional Address Details</label>
                <textarea class="form-control" id="addressDetails" rows="2"
                          placeholder="Any additional delivery instructions">${userProfile.addressDetails || ''}</textarea>
              </div>
              <button type="submit" class="btn btn-danger w-100">Save Profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const profileModal = new bootstrap.Modal('#profileModal');
  profileModal.show();

  document.getElementById('profileForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const updatedProfile = {
      name: userProfile.name,
      email: userProfile.email,
      contact: this.querySelector('#contactNumber').value,
      hostel: this.querySelector('#hostelSelect').value,
      roomNumber: this.querySelector('#roomNumber').value,
      addressDetails: this.querySelector('#addressDetails').value
    };

    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
    profileModal.hide();
    alert('Profile updated successfully!');
    updateProfileDisplay();
    
    setTimeout(() => {
      document.getElementById('profileModal')?.remove();
    }, 500);
  });
}

// Attach all event listeners
function attachEventListeners() {
  // Login form
  document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('#loginEmail').value;
    const password = this.querySelector('#loginPassword').value;
    handleLogin(email, password);
  });

  // Restaurant login form
  document.getElementById('restaurantLoginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('#restaurantEmail').value;
    const password = this.querySelector('#restaurantPassword').value;
    handleLogin(email, password);
  });

  // Signup form
  document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('#signupName').value;
    const email = this.querySelector('#signupEmail').value;
    const password = this.querySelector('#signupPassword').value;
    
    if (handleSignup(name, email, password)) {
      window.location.href = 'index.html';
    }
  });

  // Restaurant signup form
  document.getElementById('restaurantSignupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const restaurantName = this.querySelector('#restaurantName').value;
    const email = this.querySelector('#restaurantEmail').value;
    const password = this.querySelector('#restaurantPassword').value;
    const confirmPassword = this.querySelector('#restaurantConfirmPassword').value;
    const contact = this.querySelector('#restaurantContact').value;
    const description = this.querySelector('#restaurantDescription').value;
    const category = this.querySelector('#restaurantCategory').value;
    const location = this.querySelector('#restaurantLocation').value;
    const oldExploreBtn = document.getElementById('exploreRestaurantsBtn');
    if (oldExploreBtn) {
      oldExploreBtn.removeEventListener('click', function() {});
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (handleRestaurantSignup(restaurantName, email, password, contact, description, category, location)) {
      window.location.href = 'restaurant-dashboard.html';
    }
  });

  // Logout button
  document.getElementById('logoutBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    logout();
  });

  // Profile button
  document.getElementById('profileBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    showProfileModal();
  });

  // Edit profile button
  document.getElementById('editProfileBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    showProfileModal();
  });

  // Cart button
  document.getElementById('cart-btn')?.addEventListener('click', function(e) {
    e.preventDefault();
    updateCartModal();
    const cartModal = new bootstrap.Modal('#cartModal');
    cartModal.show();
  });

  // Explore Restaurants button
  document.getElementById('exploreRestaurantsBtn')?.addEventListener('click', function(e) {
    // Allow default navigation behavior
  });

  // Add to cart buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
      const name = e.target.dataset.name;
      const price = parseFloat(e.target.dataset.price);
      const restaurant = e.target.dataset.restaurant;
      
      const existingItem = cart.find(item => item.name === name && item.restaurant === restaurant);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name, price, quantity: 1, restaurant });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      
      e.target.textContent = 'Added!';
      setTimeout(() => e.target.textContent = 'Add to Cart', 1000);
    }
  });

  // Checkout button
  document.querySelector('.checkout-btn')?.addEventListener('click', function() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    if (!currentUser) {
      alert('Please login to checkout.');
      window.location.href = 'login.html';
      return;
    }
    
    const profile = JSON.parse(localStorage.getItem('userProfile'));
    if (!profile || !profile.hostel || !profile.roomNumber || !profile.contact) {
      alert('Please complete your profile details before checkout.');
      showProfileModal();
      return;
    }
    
    placeOrder();
  });

  // Order status change
  document.addEventListener('change', function(e) {
    if (e.target.classList.contains('status-select')) {
      const orderId = e.target.dataset.id;
      const newStatus = e.target.value;
      
      const orderIndex = orders.findIndex(order => order.id === orderId);
      if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        localStorage.setItem('orders', JSON.stringify(orders));
        
        if (document.getElementById('restaurant-orders')) {
          loadRestaurantOrders();
        }
        if (document.getElementById('student-orders')) {
          loadStudentOrders();
        }
      }
    }
  });

  // Reorder button
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('reorder')) {
      const orderId = e.target.dataset.id;
      const order = orders.find(o => o.id === orderId);
      
      if (order) {
        cart = [...order.items];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('Items from this order have been added to your cart!');
        window.location.href = 'menu.html?restaurant=' + order.restaurantId;
      }
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
// Add these to your existing script.js file

// Payment methods data
const paymentMethods = {
  cod: {
    name: "Cash on Delivery",
    icon: "fa-money-bill-wave"
  },
  upi: {
    name: "UPI Payment",
    icon: "fa-mobile-screen"
  },
  card: {
    name: "Credit/Debit Card",
    icon: "fa-credit-card"
  }
};

// Modify the placeOrder function to include payment
function placeOrder(paymentMethod) {
  if (!currentUser || cart.length === 0) return;

  const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
  
  const restaurantId = cart[0].restaurant;
  
  const order = {
    id: Date.now().toString(),
    studentEmail: currentUser.email,
    studentName: currentUser.name || 'Customer',
    restaurantId: restaurantId,
    restaurantName: restaurantsData[restaurantId]?.name || 'Unknown Restaurant',
    items: [...cart],
    total: calculateTotal(),
    status: 'pending',
    date: new Date().toISOString(),
    deliveryAddress: `${profile.hostel || ''}, Room ${profile.roomNumber || ''}`,
    contact: profile.contact || '',
    specialInstructions: profile.addressDetails || '',
    paymentMethod: paymentMethod || 'cod',
    paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid'
  };

  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  // Show payment success modal if not COD
  if (paymentMethod !== 'cod') {
    showPaymentSuccessModal(order);
  } else {
    alert(`Order placed successfully! Your order ID is ${order.id}`);
    window.location.href = 'profile.html';
  }
}

// Add payment modal
function showPaymentModal() {
  const modalHtml = `
    <div class="modal fade" id="paymentModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Payment Options</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="payment-options">
              ${Object.entries(paymentMethods).map(([id, method]) => `
                <div class="payment-option ${id === 'cod' ? 'selected' : ''}" data-method="${id}">
                  <div class="payment-icon">
                    <i class="fas ${method.icon}"></i>
                  </div>
                  <div class="payment-details">
                    <h6>${method.name}</h6>
                    ${id === 'cod' ? '<small>Pay when you receive your order</small>' : ''}
                  </div>
                  <div class="payment-radio">
                    <input type="radio" name="paymentMethod" ${id === 'cod' ? 'checked' : ''} value="${id}">
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="payment-summary mt-4">
              <div class="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>₹${calculateTotal().toFixed(2)}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Delivery Fee:</span>
                <span>₹0.00</span>
              </div>
              <div class="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>₹${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" id="confirmPayment">Confirm Payment</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const paymentModal = new bootstrap.Modal('#paymentModal');
  paymentModal.show();

  // Select payment method
  document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
      this.querySelector('input').checked = true;
    });
  });

  // Confirm payment
  document.getElementById('confirmPayment')?.addEventListener('click', function() {
    const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    if (selectedMethod === 'upi') {
      showUPIPaymentModal();
    } else if (selectedMethod === 'card') {
      showCardPaymentModal();
    } else {
      placeOrder(selectedMethod);
    }
    
    paymentModal.hide();
    setTimeout(() => {
      document.getElementById('paymentModal')?.remove();
    }, 500);
  });
}

// UPI Payment Modal
function showUPIPaymentModal() {
  const modalHtml = `
    <div class="modal fade" id="upiModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">UPI Payment</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center">
            <div class="upi-qr mb-4">
              <img src="images/upi-qr.png" alt="UPI QR Code" class="img-fluid mb-3">
              <p>Scan this QR code to pay</p>
            </div>
            <div class="upi-id mb-4">
              <h6>Or send payment to:</h6>
              <div class="input-group mb-3">
                <input type="text" class="form-control" value="foodexpress@upi" readonly>
                <button class="btn btn-outline-secondary" type="button" id="copyUPI">
                  <i class="fas fa-copy"></i>
                </button>
              </div>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="paymentConfirmed">
              <label class="form-check-label" for="paymentConfirmed">
                I have completed the payment
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" id="verifyPayment" disabled>Verify Payment</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const upiModal = new bootstrap.Modal('#upiModal');
  upiModal.show();

  // Enable verify button when checkbox is checked
  document.getElementById('paymentConfirmed')?.addEventListener('change', function() {
    document.getElementById('verifyPayment').disabled = !this.checked;
  });

  // Copy UPI ID
  document.getElementById('copyUPI')?.addEventListener('click', function() {
    const upiInput = document.querySelector('.upi-id input');
    upiInput.select();
    document.execCommand('copy');
    alert('UPI ID copied to clipboard!');
  });

  // Verify payment
  document.getElementById('verifyPayment')?.addEventListener('click', function() {
    // In a real app, you would verify with payment gateway
    // For demo, we'll just proceed
    placeOrder('upi');
    upiModal.hide();
    setTimeout(() => {
      document.getElementById('upiModal')?.remove();
    }, 500);
  });
}

// Card Payment Modal
function showCardPaymentModal() {
  const modalHtml = `
    <div class="modal fade" id="cardModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Card Payment</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="cardPaymentForm">
              <div class="mb-3">
                <label for="cardNumber" class="form-label">Card Number</label>
                <input type="text" class="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" required>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="expiryDate" class="form-label">Expiry Date</label>
                  <input type="text" class="form-control" id="expiryDate" placeholder="MM/YY" required>
                </div>
                <div class="col-md-6">
                  <label for="cvv" class="form-label">CVV</label>
                  <input type="text" class="form-control" id="cvv" placeholder="123" required>
                </div>
              </div>
              <div class="mb-3">
                <label for="cardName" class="form-label">Name on Card</label>
                <input type="text" class="form-control" id="cardName" placeholder="John Doe" required>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="saveCard">
                <label class="form-check-label" for="saveCard">
                  Save card for future payments
                </label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" id="processCardPayment">Pay ₹${calculateTotal().toFixed(2)}</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const cardModal = new bootstrap.Modal('#cardModal');
  cardModal.show();

  // Process payment
  document.getElementById('processCardPayment')?.addEventListener('click', function() {
    // In a real app, you would process with payment gateway
    // For demo, we'll just proceed
    placeOrder('card');
    cardModal.hide();
    setTimeout(() => {
      document.getElementById('cardModal')?.remove();
    }, 500);
  });
}

// Payment success modal
function showPaymentSuccessModal(order) {
  const modalHtml = `
    <div class="modal fade" id="paymentSuccessModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center p-5">
            <div class="payment-success-icon mb-4">
              <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="mb-3">Payment Successful!</h3>
            <p class="mb-4">Your order #${order.id} has been placed successfully.</p>
            <div class="order-summary mb-4">
              <div class="d-flex justify-content-between mb-2">
                <span>Payment Method:</span>
                <span>${paymentMethods[order.paymentMethod]?.name}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Amount Paid:</span>
                <span>₹${order.total.toFixed(2)}</span>
              </div>
            </div>
            <button type="button" class="btn btn-danger w-100" data-bs-dismiss="modal" onclick="window.location.href='profile.html'">
              View My Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const successModal = new bootstrap.Modal('#paymentSuccessModal');
  successModal.show();
}

// Modify the checkout button event listener
document.querySelector('.checkout-btn')?.addEventListener('click', function() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  if (!currentUser) {
    alert('Please login to checkout.');
    window.location.href = 'login.html';
    return;
  }
  
  const profile = JSON.parse(localStorage.getItem('userProfile'));
  if (!profile || !profile.hostel || !profile.roomNumber || !profile.contact) {
    alert('Please complete your profile details before checkout.');
    showProfileModal();
    return;
  }
  
  showPaymentModal();
});

// Add availability status to menu items
function loadMenuItems() {
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get('restaurant');
  const menuItemsContainer = document.getElementById('menu-items');
  const restaurantTitle = document.getElementById('restaurantTitle');

  if (!restaurantId || !menuItemsContainer || !restaurantsData[restaurantId]) return;

  const restaurant = restaurantsData[restaurantId];
  
  if (restaurantTitle) {
    restaurantTitle.textContent = restaurant.name;
  }

  menuItemsContainer.innerHTML = restaurant.menu.map(item => `
    <div class="col-md-4 col-lg-3 mb-4 d-flex">
      <div class="card h-100 w-100 ${restaurantId === 'anandam' ? 'juice-card' : ''}">
        <div class="image-container ${restaurantId === 'anandam' ? 'juice-image' : ''}">
          <img src="images/${item.image}" class="card-img-top" alt="${item.name}"
               onerror="this.onerror=null;this.src='images/default-food.jpg'">
          ${item.available === false ? '<div class="out-of-stock">Out of Stock</div>' : ''}
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text text-danger fw-bold">₹${item.price.toFixed(2)}</p>
          <button class="btn btn-danger add-to-cart" 
                  data-name="${item.name}" 
                  data-price="${item.price}"
                  data-restaurant="${restaurantId}"
                  ${item.available === false ? 'disabled' : ''}>
            ${item.available === false ? 'Not Available' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}