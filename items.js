// Sample rangoli patches data (50 items)
const rangoliPatches = [
    { id: 1, name: 'Traditional Lotus', price: 299, dimensions: '4" x 4"', emoji: '🌸', image: 'images/rangoli1.jpg' },
    { id: 2, name: 'Geometric Circle', price: 249, dimensions: '3" x 3"', emoji: '⭕', image: 'images/rangoli2.jpg' },
    { id: 3, name: 'Floral Border', price: 349, dimensions: '5" x 5"', emoji: '🌺', image: 'images/rangoli3.jpg' },
    { id: 4, name: 'Diamond Pattern', price: 279, dimensions: '4" x 4"', emoji: '💎' },
    { id: 5, name: 'Peacock Design', price: 399, dimensions: '6" x 6"', emoji: '🦚' },
    { id: 6, name: 'Mandala Art', price: 329, dimensions: '5" x 5"', emoji: '🎨' },
    { id: 7, name: 'Star Burst', price: 289, dimensions: '4" x 4"', emoji: '⭐' },
    { id: 8, name: 'Rose Garden', price: 319, dimensions: '5" x 5"', emoji: '🌹' },
    { id: 9, name: 'Abstract Lines', price: 199, dimensions: '3" x 3"', emoji: '✨' },
    { id: 10, name: 'Traditional Kolam', price: 359, dimensions: '6" x 6"', emoji: '🎭' },
    { id: 11, name: 'Sunflower Rays', price: 299, dimensions: '4" x 4"', emoji: '🌻' },
    { id: 12, name: 'Spiral Design', price: 279, dimensions: '4" x 4"', emoji: '🌀' },
    { id: 13, name: 'Butterfly Wing', price: 339, dimensions: '5" x 5"', emoji: '🦋' },
    { id: 14, name: 'Crescent Moon', price: 249, dimensions: '3" x 3"', emoji: '🌙' },
    { id: 15, name: 'Sacred Symbols', price: 369, dimensions: '6" x 6"', emoji: '☮️' },
    { id: 16, name: 'Floral Square', price: 309, dimensions: '5" x 5"', emoji: '🌷' },
    { id: 17, name: 'Rainbow Stripes', price: 219, dimensions: '3" x 3"', emoji: '🌈' },
    { id: 18, name: 'Leaf Cluster', price: 289, dimensions: '4" x 4"', emoji: '🍃' },
    { id: 19, name: 'Tribal Motif', price: 349, dimensions: '5" x 5"', emoji: '🏛️' },
    { id: 20, name: 'Ocean Waves', price: 299, dimensions: '4" x 4"', emoji: '🌊' },
    { id: 21, name: 'Garden Bloom', price: 319, dimensions: '5" x 5"', emoji: '🌼' },
    { id: 22, name: 'Geometric Dots', price: 269, dimensions: '4" x 4"', emoji: '⚫' },
    { id: 23, name: 'Ornate Frame', price: 379, dimensions: '6" x 6"', emoji: '🖼️' },
    { id: 24, name: 'Tiny Flowers', price: 189, dimensions: '2" x 2"', emoji: '🌸' },
    { id: 25, name: 'Hexagon Plus', price: 289, dimensions: '4" x 4"', emoji: '⬡' },
    { id: 26, name: 'Coral Reef', price: 339, dimensions: '5" x 5"', emoji: '🪸' },
    { id: 27, name: 'Mirror Image', price: 309, dimensions: '5" x 5"', emoji: '🔷' },
    { id: 28, name: 'Swirl Pattern', price: 279, dimensions: '4" x 4"', emoji: '🌀' },
    { id: 29, name: 'Vine & Leaf', price: 329, dimensions: '5" x 5"', emoji: '🌿' },
    { id: 30, name: 'Ethnic Weave', price: 349, dimensions: '5" x 5"', emoji: '🧵' },
    { id: 31, name: 'Fire Dance', price: 299, dimensions: '4" x 4"', emoji: '🔥' },
    { id: 32, name: 'Water Lily', price: 309, dimensions: '5" x 5"', emoji: '🪷' },
    { id: 33, name: 'Starburst Gold', price: 389, dimensions: '6" x 6"', emoji: '✨' },
    { id: 34, name: 'Simple Circle', price: 159, dimensions: '2" x 2"', emoji: '⭕' },
    { id: 35, name: 'Radiant Sun', price: 319, dimensions: '5" x 5"', emoji: '☀️' },
    { id: 36, name: 'Cross Design', price: 239, dimensions: '3" x 3"', emoji: '✝️' },
    { id: 37, name: 'Petal Ring', price: 289, dimensions: '4" x 4"', emoji: '🌷' },
    { id: 38, name: 'Arrow Pattern', price: 259, dimensions: '3" x 3"', emoji: '↗️' },
    { id: 39, name: 'Festival Art', price: 359, dimensions: '6" x 6"', emoji: '🎉' },
    { id: 40, name: 'Diya Light', price: 269, dimensions: '4" x 4"', emoji: '🕯️' },
    { id: 41, name: 'Indie Vibe', price: 299, dimensions: '4" x 4"', emoji: '🎶' },
    { id: 42, name: 'Cherry Blossom', price: 319, dimensions: '5" x 5"', emoji: '🌸' },
    { id: 43, name: 'Infinity Loop', price: 279, dimensions: '4" x 4"', emoji: '♾️' },
    { id: 44, name: 'Temple Gate', price: 369, dimensions: '6" x 6"', emoji: '🏯' },
    { id: 45, name: 'Silver Bells', price: 339, dimensions: '5" x 5"', emoji: '🔔' },
    { id: 46, name: 'Nature Trail', price: 289, dimensions: '4" x 4"', emoji: '🌲' },
    { id: 47, name: 'Golden Hour', price: 349, dimensions: '5" x 5"', emoji: '🌅' },
    { id: 48, name: 'Spice Garden', price: 309, dimensions: '5" x 5"', emoji: '🌶️' },
    { id: 49, name: 'Aurora Lights', price: 379, dimensions: '6" x 6"', emoji: '🌌' },
    { id: 50, name: 'Classic Elegance', price: 399, dimensions: '6" x 6"', emoji: '👑' }
];

let filteredPatches = [...rangoliPatches];
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    cart = getCart();
    displayProducts();
    setupEventListeners();
    updateCartCount();
});

// Setup event listeners
function setupEventListeners() {
    const searchBox = document.getElementById('search');
    const sortBy = document.getElementById('sortBy');
    const closeBtn = document.querySelector('.close');
    const cartModal = document.getElementById('cartModal');
    const cartIcon = document.querySelector('.cart-icon');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (searchBox) {
        searchBox.addEventListener('input', handleSearch);
    }

    if (sortBy) {
        sortBy.addEventListener('change', handleSort);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            cartModal.classList.remove('show');
        });
    }

    if (cartIcon) {
        cartIcon.parentElement.addEventListener('click', function(e) {
            if (e.target.closest('.cart-icon')) {
                e.preventDefault();
                showCartModal();
            }
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', placeOrderOnWhatsApp);
    }

    window.addEventListener('click', function(e) {
        const cartModal = document.getElementById('cartModal');
        if (e.target === cartModal) {
            cartModal.classList.remove('show');
        }
    });
}

// Display products
function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    if (filteredPatches.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No patches found matching your search.</div>';
        return;
    }

    filteredPatches.forEach(patch => {
        const existsInCart = cart.some(item => item.id === patch.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${patch.emoji}</div>
            <div class="product-info">
                <div class="product-name">${patch.name}</div>
                <div class="product-details">
                    <strong>Size:</strong> ${patch.dimensions}
                </div>
                <div class="product-details">
                    <strong>Material:</strong> Premium Fabric
                </div>
                <div class="product-price">₹${patch.price}</div>
                <button class="add-to-cart-btn ${existsInCart ? 'added' : ''}" 
                    onclick="addToCart(${patch.id})" 
                    id="btn-${patch.id}">${existsInCart ? '✓ In Cart' : 'Add to Cart'}</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filteredPatches = rangoliPatches.filter(patch =>
        patch.name.toLowerCase().includes(searchTerm)
    );
    displayProducts();
}

// Handle sort
function handleSort(e) {
    const sortValue = e.target.value;

    switch (sortValue) {
        case 'name':
            filteredPatches.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredPatches.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredPatches.sort((a, b) => b.price - a.price);
            break;
    }
    displayProducts();
}

// Add to cart
function addToCart(patchId) {
    const patch = rangoliPatches.find(p => p.id === patchId);
    if (!patch) return;

    const existsInCart = cart.some(item => item.id === patchId);

    if (existsInCart) {
        cart = cart.filter(item => item.id !== patchId);
    } else {
        cart.push(patch);
    }

    saveCart(cart);
    updateCartCount();
    displayProducts();

    // Visual feedback
    const btn = document.getElementById(`btn-${patchId}`);
    if (btn) {
        btn.classList.add('added');
        setTimeout(() => {
            btn.classList.remove('added');
            displayProducts();
        }, 500);
    }
}

// Remove from cart
function removeFromCart(patchId) {
    cart = cart.filter(item => item.id !== patchId);
    saveCart(cart);
    showCartModal();
    displayProducts();
}

// Show cart modal
function showCartModal() {
    const cartModal = document.getElementById('cartModal');
    const cartItemsDiv = document.getElementById('cart-items');
    const subtotalDiv = document.getElementById('subtotal');
    const totalDiv = document.getElementById('total');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p><p>Start shopping to add patches to your cart!</p></div>';
        document.getElementById('checkout-btn').style.display = 'none';
    } else {
        let cartHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item">
                    <div>
                        <div class="cart-item-name">${item.emoji} ${item.name}</div>
                        <div style="font-size: 12px; color: #999;">Size: ${item.dimensions}</div>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <span class="cart-item-price">₹${item.price}</span>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
            subtotal += item.price;
        });

        cartItemsDiv.innerHTML = cartHTML;
        subtotalDiv.textContent = '₹' + subtotal;
        totalDiv.textContent = '₹' + subtotal;
        document.getElementById('checkout-btn').style.display = 'block';
    }

    cartModal.classList.add('show');
}

// Place order on WhatsApp
function placeOrderOnWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let message = 'Hi! 👋\n\nI would like to order the following Rangoli Patches from Craft By Anjali:\n\n';

    let total = 0;
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.emoji} ${item.name} (${item.dimensions}) - ₹${item.price}\n`;
        total += item.price;
    });

    message += `\n📊 Total Amount: ₹${total}\n\nPlease confirm the order and provide payment details.`;

    // WhatsApp number (Update this with your actual WhatsApp number)
    const whatsappNumber = '919876543210'; // Replace with your WhatsApp number

    // Encode the message
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappLink, '_blank');
}

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const cartCounts = document.querySelectorAll('#cart-count');
    cartCounts.forEach(count => {
        count.textContent = cart.length;
    });
}
