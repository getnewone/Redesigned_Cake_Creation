document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Initial cart state:', cart);  // Debug log

    window.addToCartInCartJS = improvedAddToCart;

    const cartItemsList = document.querySelector('.cart-items-list');
    const cartEmptyMessage = document.querySelector('.cart-empty-message');
    const subTotalElement = document.querySelector('.sub-total');
    const totalElement = document.querySelector('.total');
    const checkoutButton = document.querySelector('.checkout-button');
    const continueShoppingButton = document.querySelector('.continue-shopping');
    const optionButtons = document.querySelectorAll('.option-button');
    const pickupLocation = document.querySelector('.pickup-location');
    const deliveryAddress = document.querySelector('.delivery-address');
    const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        { types: ['address'] }
    );

    const addressInput = document.getElementById('autocomplete');
    const addressError = document.getElementById('address-error');
    const manualAddress = document.getElementById('manual-address');

    autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
            // No details available for input
            addressError.style.display = 'block';
            manualAddress.style.display = 'block';
        } else {
            // Valid address found
            addressError.style.display = 'none';
            manualAddress.style.display = 'none';
        }
    });

    addressInput.addEventListener('input', function() {
        if (this.value === '') {
            addressError.style.display = 'none';
            manualAddress.style.display = 'none';
        }
    });

    function updateCartDisplay() {
        console.log('Updating cart display. Cart:', cart);  // Debug log
        console.log('Cart items list element:', cartItemsList);  // Debug log
        console.log('Cart empty message element:', cartEmptyMessage);  // Debug log
        
        if (cart.length === 0) {
            console.log('Cart is empty, showing empty message');  // Debug log
            cartItemsList.style.display = 'none';
            cartEmptyMessage.style.display = 'block';
            document.querySelector('.cart-summary').style.display = 'none';
            document.querySelector('.remove-all-button').style.display = 'none';  
        } else {
            console.log('Cart has items, displaying them');  // Debug log
            cartItemsList.style.display = 'block';
            cartEmptyMessage.style.display = 'none';
            document.querySelector('.cart-summary').style.display = 'block';
            renderCartItems();
            updateTotals();
            document.querySelector('.remove-all-button').style.display = 'block'; 
        }
        updateCartCount();
        updateCartCounter();
    }

    function clearCart() {
        cart = [];
        saveCartAndUpdate();
    }

    const removeAllButton = document.querySelector('.remove-all-button');
    if (removeAllButton) {
        removeAllButton.addEventListener('click', clearCart);
    }

    function renderCartItems() {
        cartItemsList.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            // Determine the correct template based on the product type
           
            let templateUrl;
            switch (item.type) {
                case 'cake':
                    templateUrl = 'cake_template.html';
                    break;
                case 'Macarons':
                    templateUrl = 'Macarons_template.html';
                    break;
                case 'cupcake':
                    templateUrl = 'cupcake_template.html';
                    break;
                case 'Cookies':
                    templateUrl = 'Cookies_template.html';
                    break;
                default:
                    console.error('Unknown product type:', item.type); // Log an error for unknown types
                    templateUrl = 'cupcake_template.html'; // Default to cupcake template if type is unknown
                    break;
            }
            
        
            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <a href="${templateUrl}?productId=${item.id}" class="cart-item-image-link">
                        <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    </a>
                    <div class="cart-item-info">
                        <h3>${item.title}</h3>
                        <div class="cart-item-options">
                            ${renderItemOptions(item)}
                        </div>
                    </div>
                </div>
                <span class="item-price">$${item.price.toFixed(2)}</span>
                <div class="quantity-controls">
                    <button class="quantity-btn minus">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1">
                    <button class="quantity-btn plus">+</button>
                </div>
                <span class="item-total">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-item"><i class="fa fa-window-close" aria-hidden="true"></i></button>
            `;
            cartItemsList.appendChild(cartItem);

            // Add event listeners for quantity controls and remove button
            const quantityInput = cartItem.querySelector('.quantity-input');
            const minusBtn = cartItem.querySelector('.minus');
            const plusBtn = cartItem.querySelector('.plus');
            const removeBtn = cartItem.querySelector('.remove-item');

            minusBtn.addEventListener('click', () => updateQuantity(index, -1));
            plusBtn.addEventListener('click', () => updateQuantity(index, 1));
            quantityInput.addEventListener('change', (e) => updateQuantity(index, parseInt(e.target.value) - item.quantity));
            removeBtn.addEventListener('click', () => removeItem(index));
        });
    }

    function improvedAddToCart(product) {
        console.log('addToCart called with product:', product);
        const existingItem = cart.find(item => 
            item.id === product.id && 
            item.type === product.type && 
            item.boxSize === product.boxSize &&
            item.selectionType === product.selectionType &&
            JSON.stringify(item.selectedFlavors) === JSON.stringify(product.selectedFlavors)
        );
        
        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: product.quantity,
                type: product.type,
                boxSize: product.boxSize,
                selectionType: product.selectionType,
                selectedFlavors: product.selectedFlavors || [],
                selectedOptions: product.selectedOptions || {} // Add this line to include custom options
            });
        }
        saveCartAndUpdate();
    }

    function renderItemOptions(item) {
        let optionsHtml = '';


        if (item.boxSize) {
            optionsHtml += `<p class="cart-item-option">Box of ${item.boxSize}</p>`;
        }
        if (item.selectionType === 'custom' && Array.isArray(item.selectedFlavors) && item.selectedFlavors.length > 0) {
            optionsHtml += `
                <p class="cart-item-option">
                    Selected Flavors: ${item.selectedFlavors.join(', ')}
                </p>
            `;
        } else if (item.selectionType === 'mix') {
            optionsHtml += `
                <p class="cart-item-option">Mix of Flavours On The Day</p>
            `;
        }
        if (item.selectedOptions) {
            optionsHtml += Object.entries(item.selectedOptions)
                .map(([key, value]) => `<p class="cart-item-option">${key}: ${value}</p>`)
                .join('');
        }
        return optionsHtml;
    }

    function updateQuantity(index, change) {
        cart[index].quantity = Math.max(1, cart[index].quantity + change);
        saveCartAndUpdate();
    }

    function removeItem(index) {
        cart.splice(index, 1);
        saveCartAndUpdate();
    }

    function saveCartAndUpdate() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    function updateTotals() {
        const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        subTotalElement.textContent = `$${subTotal.toFixed(2)}`;
        totalElement.textContent = `$${subTotal.toFixed(2)}`;
    }

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        localStorage.setItem('cartCount', totalItems.toString());
    }

    function updateCartCounter() {
        const cartCounter = document.querySelector('.cart-counter');                                                                                            
         const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);                                                                                  
                                                                                                                                                                 
         if (cartCounter && !window.location.pathname.includes('cart.html')) {                                                                                   
             if (totalItems > 0) {                                                                                                                               
                 cartCounter.textContent = totalItems;                                                                                                           
                 cartCounter.style.display = 'block';                                                                                                            
             } else {                                                                                                                                            
                 cartCounter.style.display = 'none';                                                                                                             
             }                                                                                                                                                   
         }                                                                                                                                                       
     }             

    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            optionButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            if (button.dataset.option === 'pickup') {
                pickupLocation.style.display = 'block';
                deliveryAddress.style.display = 'none';
            } else {
                pickupLocation.style.display = 'none';
                deliveryAddress.style.display = 'block';
            }
        });
    });

    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout...');
    });

    continueShoppingButton.addEventListener('click', () => {
        window.location.href = 'Intro.html';
    });

    // Initialize the cart display
    updateCartDisplay();

    // Add animation effects
    gsap.from('.cart-page', { opacity: 0, y: 50, duration: 0.5 });
    gsap.from('.cart-item', { opacity: 0, y: 20, duration: 0.3, stagger: 0.1 });
    gsap.from('.cart-summary', { opacity: 0, x: 50, duration: 0.5 });
});
