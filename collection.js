// Product Database with Images
const productDatabase = {
    hancpn: [
        {
            id: 1,
            name: "CAPO CLASSIC TEE",
            description: "Core identity streetwear tee. Premium cotton blend.",
            price: 299,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/hancpn-1.jpg"
        },
        {
            id: 2,
            name: "STREET HUSTLE HOODIE",
            description: "Oversized hoodie with street aesthetic. Culture-driven design.",
            price: 649,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/hancpn-2.jpg"
        },
        {
            id: 3,
            name: "URBAN JOGGERS",
            description: "Comfortable streetwear joggers. Perfect fit.",
            price: 549,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/hancpn-3.jpg"
        },
        {
            id: 4,
            name: "IDENTITY CAP",
            description: "Structured cap with embroidered logo. One size fits all.",
            price: 249,
            sizes: ["ONE SIZE"],
            image: "images/hancpn-4.jpg"
        },
        {
            id: 5,
            name: "CULTURE JACKET",
            description: "Lightweight jacket. Street-rooted design aesthetic.",
            price: 899,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/hancpn-5.jpg"
        },
        {
            id: 6,
            name: "STANCE SOCKS",
            description: "Premium socks. Comfortable everyday wear.",
            price: 99,
            sizes: ["ONE SIZE"],
            image: "images/hancpn-6.jpg"
        }
    ],
    "091021": [
        {
            id: 1,
            name: "FORM OVERSIZED JACKET",
            description: "Elevated streetwear jacket. Exploring form and presence.",
            price: 1299,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/091021-1.jpg"
        },
        {
            id: 2,
            name: "PRESENCE BUTTON SHIRT",
            description: "Refined button-up shirt. Premium fabric.",
            price: 699,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/091021-2.jpg"
        },
        {
            id: 3,
            name: "FORM VEST",
            description: "Sleeveless form-fitting vest. Modern silhouette.",
            price: 549,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/091021-3.jpg"
        },
        {
            id: 4,
            name: "ELEVATED TROUSERS",
            description: "Premium tailored trousers. Refined fit.",
            price: 899,
            sizes: ["28", "30", "32", "34", "36", "38"],
            image: "images/091021-4.jpg"
        },
        {
            id: 5,
            name: "FORM SWEATER",
            description: "Knit sweater exploring contemporary form.",
            price: 799,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/091021-5.jpg"
        },
        {
            id: 6,
            name: "PRESENCE ACCESSORIES",
            description: "Curated accessories collection.",
            price: 399,
            sizes: ["ONE SIZE"],
            image: "images/091021-6.jpg"
        }
    ],
    mandelas: [
        {
            id: 1,
            name: "HERITAGE DRESS",
            description: "Refined silhouettes with heritage influence. Pretoria rooted.",
            price: 1299,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/mandelas-1.jpg"
        },
        {
            id: 2,
            name: "MANDELA BLAZER",
            description: "Premium tailored blazer. Sophisticated elegance.",
            price: 1199,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/mandelas-2.jpg"
        },
        {
            id: 3,
            name: "REFINED MAXI SKIRT",
            description: "Elegant maxi skirt. Timeless design.",
            price: 899,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/mandelas-3.jpg"
        },
        {
            id: 4,
            name: "HERITAGE TROUSERS",
            description: "Tailored trousers with refined details.",
            price: 799,
            sizes: ["28", "30", "32", "34", "36", "38"],
            image: "images/mandelas-4.jpg"
        },
        {
            id: 5,
            name: "MANDELA STATEMENT TOP",
            description: "Sophisticated statement blouse. Premium fabrics.",
            price: 699,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            image: "images/mandelas-5.jpg"
        },
        {
            id: 6,
            name: "HERITAGE COLLECTION SCARF",
            description: "Signature collection scarf. Luxury material.",
            price: 449,
            sizes: ["ONE SIZE"],
            image: "images/mandelas-6.jpg"
        }
    ]
};

// Get Current Brand from URL
function getCurrentBrand() {
    const href = window.location.href;
    if (href.includes('hancpn')) return 'hancpn';
    if (href.includes('091021')) return '091021';
    if (href.includes('mandelas')) return 'mandelas';
    return 'hancpn';
}

// Cart Management
let cart = JSON.parse(localStorage.getItem('hancpnCart')) || [];

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function saveCart() {
    localStorage.setItem('hancpnCart', JSON.stringify(cart));
    updateCartCount();
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    const brand = getCurrentBrand();
    loadProducts(brand);
    updateCartCount();
});

// Load Products with Images
function loadProducts(brand) {
    const grid = document.querySelector('.products-grid');
    const products = productDatabase[brand];
    
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id}, '${brand}')">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">R${product.price.toLocaleString()}</div>
                <div class="product-sizes">
                    ${product.sizes.slice(0, 3).map(size => `<span class="size-badge">${size}</span>`).join('')}
                </div>
                <button class="view-btn">VIEW</button>
            </div>
        </div>
    `).join('');
}

// Product Modal
let selectedSize = null;
let selectedPayment = null;
let selectedQuantity = 1;

function openProductModal(productId, brand) {
    const products = productDatabase[brand];
    const product = products.find(p => p.id === productId);
    
    selectedSize = null;
    selectedPayment = null;
    selectedQuantity = 1;
    
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-close" onclick="closeProductModal()">×</div>
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="modal-info">
                <div>
                    <div class="modal-name">${product.name}</div>
                    <div class="modal-price">R${product.price.toLocaleString()}</div>
                    <div class="modal-description">${product.description}</div>
                </div>
                
                <div>
                    <div class="modal-sizes">
                        <label class="sizes-label">SELECT SIZE</label>
                        <div class="size-options">
                            ${product.sizes.map(size => `
                                <div class="size-option" onclick="selectSize(this, '${size}')">${size}</div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="payment-methods">
                        <label class="payment-label">PAYMENT METHOD</label>
                        <div class="payment-options">
                            <div class="payment-option" onclick="selectPayment(this, 'credit-card')">💳 CREDIT CARD</div>
                            <div class="payment-option" onclick="selectPayment(this, 'bank-transfer')">🏦 BANK TRANSFER</div>
                            <div class="payment-option" onclick="selectPayment(this, 'crypto')">₿ CRYPTO</div>
                            <div class="payment-option" onclick="selectPayment(this, 'eftpos')">🔐 EFTPOS</div>
                        </div>
                    </div>
                    
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="decreaseQuantity()">−</button>
                        <span class="qty-display">${selectedQuantity}</span>
                        <button class="qty-btn" onclick="increaseQuantity()">+</button>
                    </div>
                    
                    <button class="add-to-basket-btn" onclick="addToBasket(${productId}, '${product.name}', ${product.price}, '${brand}')">ADD TO BASKET</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show');
}

function selectSize(element, size) {
    document.querySelectorAll('.size-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedSize = size;
}

function selectPayment(element, method) {
    document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedPayment = method;
}

function increaseQuantity() {
    selectedQuantity++;
    document.querySelector('.qty-display').textContent = selectedQuantity;
}

function decreaseQuantity() {
    if (selectedQuantity > 1) {
        selectedQuantity--;
        document.querySelector('.qty-display').textContent = selectedQuantity;
    }
}

function addToBasket(productId, productName, price, brand) {
    if (!selectedSize) {
        alert('Please select a size');
        return;
    }
    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }
    
    for (let i = 0; i < selectedQuantity; i++) {
        cart.push({
            productId,
            productName,
            price,
            size: selectedSize,
            payment: selectedPayment,
            brand
        });
    }
    
    saveCart();
    updateCartDisplay();
    closeProductModal();
    openCart();
}

// Cart Functions
function openCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    cartSidebar.classList.add('open');
    updateCartDisplay();
}

function closeCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    cartSidebar.classList.remove('open');
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your basket is empty</div>';
        cartSummary.innerHTML = '';
        checkoutBtn.style.display = 'none';
        return;
    }
    
    let subtotal = 0;
    cartItems.innerHTML = cart.map((item, index) => {
        subtotal += item.price;
        return `
            <div class="cart-item">
                <div class="cart-item-name">${item.productName}</div>
                <div class="cart-item-details">
                    <div>Size: ${item.size}</div>
                    <div>Payment: ${item.payment.replace('-', ' ').toUpperCase()}</div>
                </div>
                <div class="cart-item-price">R${item.price.toLocaleString()}</div>
                <div class="cart-item-controls">
                    <button class="remove-btn" onclick="removeFromCart(${index})">REMOVE</button>
                </div>
            </div>
        `;
    }).join('');
    
    const shipping = subtotal > 500 ? 0 : 89;
    const total = subtotal + shipping;
    
    cartSummary.innerHTML = `
        <div class="summary-row">
            <span>Subtotal:</span>
            <span>R${subtotal.toLocaleString()}</span>
        </div>
        <div class="summary-row">
            <span>Shipping:</span>
            <span>${shipping === 0 ? 'FREE' : 'R' + shipping}</span>
        </div>
        <div class="summary-row total">
            <span>TOTAL:</span>
            <span>R${total.toLocaleString()}</span>
        </div>
    `;
    
    checkoutBtn.style.display = 'block';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartDisplay();
}

function proceedToCheckout() {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const shipping = subtotal > 500 ? 0 : 89;
    const total = subtotal + shipping;
    
    alert(`Order Summary:\n\nSubtotal: R${subtotal.toLocaleString()}\nShipping: ${shipping === 0 ? 'FREE' : 'R' + shipping}\n\nTOTAL: R${total.toLocaleString()}\n\nProceeding to payment...`);
    
    // Clear cart after checkout
    cart = [];
    saveCart();
    updateCartDisplay();
    closeCart();
}

function goHome() {
    window.location.href = 'index.html';
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('productModal');
    if (e.target === modal) {
        closeProductModal();
    }
});
