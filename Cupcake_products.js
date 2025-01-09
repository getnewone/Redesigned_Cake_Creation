// Define an array of cupcake products
const cupcakeProducts = [
    

    {
        id: "mixedBoxMiniCupcakes",
        title: "Mixed Box of Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/Untitleddesign_2.jpg?v=1629267710",
        type: "cupcake",
        description: "Create your own mix of your favourite Mini Cupcakes! Select your flavours and pickup from your most loved store. Our Signature Mini Cupcakes receive amazing feedback every day, they are known to be moist and delicious!",
        occasionSuggestions: "Perfect for birthdays, anniversaries, weddings, corporate events, or any party or special event!",
        Note: "Gluten Free & Vegan Mini Cupcake - Chocolate Raspberry, Chocolate Coconut and Double Chocolate flavours are available. ",
        Note1: "Note: Nutella contains hazelnuts, and Snickers contains peanuts.",
        Note2: "KINDER SURPRISE® is a registered trademark of Ferrero S.p.A, Italy. MARS® is a registered trademark of Mars Australia Pty Ltd. NUTELLA® is a registered trademark of Ferrero S.p.A, Italy. SNICKERS® is a registered trademark of Mars Australia Pty Ltd",
        orderNotice: "Requires 2 days notice for pre-order pickups and deliveries.",
        rating: 4.9,
        reviews: 42,
        
        boxOptions: [
            { quantity: 6, price: 19.00 },
            { quantity: 12, price: 34.00 },
            { quantity: 24, price: 64.00 },
            { quantity: 36, price: 96.00 },
            { quantity: 48, price: 128.00 },
            { quantity: 60, price: 160.00 },
        ],
        customizationOptions: [
            { name: "boxSize", label: "Box Size", type: "select", choices: ["Box of 6","Box of 12", "Box of 24", "Box of 36","Box of 42", "Box of 60",] },

            {
                name: "flavors",
                label: "Flavors",
                type: "custom",
                maxSelections: 12
            }
        ],
        reviewDetails: {
            5: 38,
            4: 3,
            3: 1,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Emily R.",
                verified: true,
                rating: 5,
                date: "15 July 2024",
                text: "These mini cupcakes are absolutely delicious! The variety of flavors in the box is perfect, and they're always so fresh. A hit at every party!",
                helpful: { yes: 10, no: 0 }
            },
            // Add more reviews here
        ]
    },
    {
        id: "cookiescreamcupcakes",
        title: "Cookie & Cream Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0697.jpg?v=1626833930",
        type: "cupcake",
        description: "We take our popular vanilla base, and mix in a ton of crushed Oreo biscuits. ",
        customizationInstructions: "WOW – when paired with our fluffy homemade cookie filled buttercream, this one is sure to be a winner! Of course we need to add a cute little Oreo biscuit on top too.",
        occasionSuggestions: "<a href='cupcake_template.html?productId=mixedBoxMiniCupcakes' class='cupcake-link'> Click here to order a mixed flavours box of mini cupcakes  </a>" ,
        orderNotice: "Requires 2 days notice for pre-order pickups.We do not add any nuts to our Cookies & Cream Mini Cupcakes. They are also Vegetarian.",
        rating: 4.5,
        reviews: 4,
        boxOptions: [
            { quantity: 12, price: 34.00 },
            { quantity: 24, price: 65.00 },
            { quantity: 36, price: 95.00 },
        ],
        customizationOptions: [
            { name: "boxSize", label: "Box Size", type: "select", choices: ["Box of 12", "Box of 24", "Box of 36"] },
        
        ],
        reviewDetails: {
            5: 3,
            4: 1,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Emily R.",
                verified: true,
                rating: 5,
                date: "15 July 2024",
                text: "These mini cupcakes are absolutely delicious! The variety of flavors in the box is perfect, and they're always so fresh. A hit at every party!",
                helpful: { yes: 10, no: 0 }
            },
            // Add more reviews here
        ]
    },
    {
        id: "mixedBoxLargeCupcake",
        title: "Mixed Box of Large Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/image_3f684037-a029-40e1-9494-74946615bd73.jpg?v=1653979332",
        type: "cupcake",
        description: "Create your own mix of your favourite cupcakes in our Large size! All the same goodness as our minis, just 2-3 times bigger! Select your flavours and pickup from your most loved store. Our Signature Cupcakes receive amazing feedback.",
        customizationInstructions: "Perfect for birthdays, anniversaries, weddings, corporate events, or any party or special occasion!",
        occasionSuggestions: "Note: Nutella contains hazelnuts, and Snickers contains peanuts. " ,
        Note: "KINDER SURPRISE® is a registered trademark of Ferrero S.p.A, Italy MARS® is a registered trademark of Mars Australia Pty Ltd NUTELLA® is a registered trademark of Ferrero S.p.A, Italy SNICKERS® is a registered trademark of Mars Australia Pty Ltd",
        orderNotice: "Requires 2 days notice for pre-order pickups.",
        rating: 5,
        reviews: 46,
        boxOptions: [
            { quantity: 12, price: 60.00 },
            { quantity: 24, price: 120.00 },
            { quantity: 36, price: 180.00 },
        ],
       
        customizationOptions: [
            { name: "boxSize", label: "Box Size", type: "select", choices: ["Box of 12", "Box of 24", "Box of 36"] },
            {
                name: "flavors",
                label: "Flavors",
                type: "custom",
                maxSelections: 12
            }
        ],

        reviewDetails: {
            5: 45,
            4: 1,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Olivia G.",
                verified: true,
                rating: 5,
                date: "19 June 2024",
                text: "Delicious cupcakes and amazing customer service! Went down a treat!!",
                helpful: { yes: 10, no: 0 }
            },
            // Add more reviews here
        ]
    },
    // Add more cupcake products here
];

const allCupcakeImages = [
    {  id: "mixedBoxMiniCupcakes", src: "https://cakecreationsbykate.com.au/cdn/shop/products/Untitleddesign_2.jpg?v=1629267710", title: "Mixed Box of Mini Cupcakes", price: 34.00 },
    {   id: "cookiescreamcupcakes", src: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0697.jpg?v=1626833930", title: "Cookies & Cream Mini Cupcakes", price: 34.00 },
    { src: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0682.jpg?v=1626833440", title: "Lemon Mini Cupcakes", price: 34.00 },
    // Add more cupcake images here
];

// Function to get the product ID from the URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('productId');
}

// Function to load product details
function loadProduct(productId) {
    const product = cupcakeProducts.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found');
        return; 
    }

    // Update product details
    document.getElementById('page-title').textContent = `${product.title} - Cake Creations by Kate`;
    document.getElementById('main-image').src = product.image;
    document.getElementById('main-image').alt = product.title;
    document.getElementById('product-title').textContent = product.title;

     // Set initial price
     if (product.boxOptions && product.boxOptions.length > 0) {
        document.getElementById('product-price').textContent = `$${product.boxOptions[0].price.toFixed(2)}`;
    }


    // Update description with new format
    const descriptionElement = document.getElementById('product-description');
    descriptionElement.innerHTML = `
        <div class="description">
            <p>${product.description}</p>
            <p>${product.customizationInstructions || ''}</p>
            <p>${product.occasionSuggestions || ''}</p>
            <p>${product.Note || ''}</p>
            <p>${product.Note1 || ''}</p>
            <p>${product.Note2 || ''}</p>
            <p class="note">${product.orderNotice || ''}</p>
        </div>
    `;

    // Update rating and reviews
    updateRatingAndReviews(product);

    // Update customization options
    updateCustomizationOptions(product);

    // Load reviews
    loadReviews(product);

    // Update "Our Favourites" section
    updateOurFavourites();
}

// Function to update "Our Favourites" section
function updateOurFavourites() {
    const favouritesGrid = document.querySelector('.favourites-grid');
    favouritesGrid.innerHTML = ''; // Clear existing items

    // Get 3 random unique cupcake images
    const randomCupcakes = getRandomCupcakes(3);

    randomCupcakes.forEach(cupcake => {
        const favouriteItem = document.createElement('div');
        favouriteItem.className = 'favourite-item cupcake-item';
        favouriteItem.innerHTML = `
            <a href="cupcake_template.html?productId=${cupcake.id}" class="cupcake-link">
                <div class="cupcake-info">
                    <h3>${cupcake.title}</h3>
                    <p>$${cupcake.price.toFixed(2)}</p>
                </div>
                <img src="${cupcake.src}" alt="${cupcake.title}">
            </a>
        `;
        favouritesGrid.appendChild(favouriteItem);
    });
}

// Function to get random unique cupcakes
function getRandomCupcakes(count) {
    const shuffled = allCupcakeImages.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


// Function to update rating and reviews
function updateRatingAndReviews(product) {
    const starRating = document.getElementById('star-rating');
    starRating.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.className = `fa fa-star${i <= Math.round(product.rating) ? '' : '-o'}`;
        starRating.appendChild(star);
    }
    document.getElementById('review-count').textContent = `(${product.reviews} reviews)`;

    // Update review section header
    document.querySelector('.reviews-header h2 .review-count').textContent = product.reviews;
    document.querySelector('.overall-rating .rating-number').textContent = product.rating.toFixed(1);
    document.querySelector('.overall-rating .review-count').textContent = `Based on ${product.reviews} Reviews`;

    // Update rating distribution
    updateRatingDistribution(product);
}

// Function to update rating distribution
function updateRatingDistribution(product) {
    const ratingBars = document.querySelectorAll('.rating-bar');
    ratingBars.forEach((bar, index) => {
        const starCount = 5 - index;
        const count = product.reviewDetails[starCount];
        const percentage = (count / product.reviews) * 100;
        bar.querySelector('.bar').style.width = `${percentage}%`;
        bar.querySelector('.count').textContent = `(${count})`;
    });
}

// Function to update customization options
function updateCustomizationOptions(product) {
    const customizationForm = document.querySelector('.customization-form');
    customizationForm.innerHTML = '';

    product.customizationOptions.forEach(option => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.textContent = option.label;
        formGroup.appendChild(label);

        if (option.type === 'select') {
            const select = document.createElement('select');
            select.name = option.name;
            select.id = option.name;
            select.required = true;

            option.choices.forEach(choice => {
                const optionElement = document.createElement('option');
                optionElement.value = choice;
                optionElement.textContent = choice;
                select.appendChild(optionElement);             
            });
            select.addEventListener('change', updateCupcakePrice);
            formGroup.appendChild(select);
            
        } else if (option.type === 'custom' && option.name === 'flavors' && (product.id === 'mixedBoxMiniCupcakes' || product.id === 'mixedBoxLargeCupcake')) {
            const flavorSelector = createFlavorSelector(option.maxSelections);
            formGroup.appendChild(flavorSelector);
        }

        customizationForm.appendChild(formGroup);
    });

    // Add quantity input for number of boxes
    const quantityGroup = document.createElement('div');
    quantityGroup.className = 'form-group';
    quantityGroup.innerHTML = `
        <label for="boxQuantity">Number of Boxes</label>
        <input type="number" id="boxQuantity" name="boxQuantity" value="1" min="1" required>
    `;
    customizationForm.appendChild(quantityGroup);

    // Add Add to Cart button
    const addToCartButton = document.createElement('button');
    addToCartButton.type = 'submit';
    addToCartButton.className = 'add-to-cart';
    addToCartButton.textContent = 'ADD TO CART';
    customizationForm.appendChild(addToCartButton);
}

function createFlavorSelector(maxSelections = 12) {
    const container = document.createElement('div');
    container.className = 'flavor-selector';
    container.innerHTML = `
        <h2 class="flavor-selector__title">Our Team to Create a Box</h2>
        <div class="flavor-selector__radio-group">
            <label>
                <input type="radio" name="selection-type" value="mix" checked>
                Mix of Flavours On The Day
            </label>
            <div class="flavor-selector__or">OR</div>
            <label>
                <input type="radio" name="selection-type" value="custom">
                Create Your Own Box
            </label>
        </div>
        <div class="flavor-selector__custom-options" style="display: none;">
            <div class="flavor-selector__header">
                <h3>Select Your Flavours</h3>
                <span class="flavor-selector__counter">0/${maxSelections} selected</span>
            </div>
            <div class="flavor-selector__alert" style="display: none;">
                Maximum ${maxSelections} flavors can be selected
            </div>
            <div class="flavor-selector__options"></div>
        </div>
    `;

    const radioGroup = container.querySelector('.flavor-selector__radio-group');
    const customOptions = container.querySelector('.flavor-selector__custom-options');
    const optionsContainer = container.querySelector('.flavor-selector__options');
    const counter = container.querySelector('.flavor-selector__counter');
    const alert = container.querySelector('.flavor-selector__alert');

    const flavorOptions = [
        { id: "biscoff", label: "Biscoff" },
        { id: "cookies-cream", label: "Cookies & Cream" },
        { id: "jam-donut", label: "Jam Donut" },
        { id: "kinder-surprise", label: "Kinder Surprise®" },
        { id: "lemon", label: "Lemon" },
        { id: "nutella", label: "Nutella®" },
        { id: "mars-bar", label: "Mars Bar®" },
        { id: "salted-caramel", label: "Salted Caramel" },
        { id: "snickers", label: "Snickers®" },
        { id: "triple-chocolate", label: "Triple Chocolate" },
        { id: "vanilla-rainbow", label: "Vanilla Rainbow" },
        { id: "white-chocolate-raspberry", label: "White Chocolate Raspberry" },
        { id: "gf-vegan-double-chocolate", label: "*GF/Vegan* Double Chocolate", isGlutenFree: true, isVegan: true },
        { id: "gf-vegan-chocolate-raspberry", label: "*GF/Vegan* Chocolate Raspberry", isGlutenFree: true, isVegan: true },
        { id: "gf-vegan-chocolate-coconut", label: "*GF/Vegan* Chocolate Coconut", isGlutenFree: true, isVegan: true }
    ];

    let selectedFlavors = [];

    radioGroup.addEventListener('change', (e) => {
        customOptions.style.display = e.target.value === 'custom' ? 'block' : 'none';
    });

    flavorOptions.forEach(flavor => {
        const option = document.createElement('div');
        option.className = 'flavor-option';
        option.innerHTML = `
            <label>
                <input type="checkbox" value="${flavor.id}" name="flavors">
                ${flavor.label}
                ${(flavor.isGlutenFree || flavor.isVegan) ? 
                    `<span class="flavor-option__tag">
                        ${flavor.isGlutenFree ? 'GF' : ''}${flavor.isGlutenFree && flavor.isVegan ? '/' : ''}${flavor.isVegan ? 'Vegan' : ''}
                    </span>` : 
                    ''}
            </label>
        `;
        optionsContainer.appendChild(option);

        const checkbox = option.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked && selectedFlavors.length >= maxSelections) {
                checkbox.checked = false;
                alert.style.display = 'block';
                setTimeout(() => alert.style.display = 'none', 3000);
                return;
            }

            if (checkbox.checked) {
                selectedFlavors.push(flavor.id);
            } else {
                selectedFlavors = selectedFlavors.filter(id => id !== flavor.id);
            }

            counter.textContent = `${selectedFlavors.length}/${maxSelections} selected`;
            updateCheckboxStates();
        });
    });

    function updateCheckboxStates() {
        const checkboxes = optionsContainer.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => {
            if (!cb.checked) {
                cb.disabled = selectedFlavors.length >= maxSelections;
            }
        });
    }

    return container;
}




// Function to load reviews
function loadReviews(product) {
    const reviewsList = document.querySelector('.reviews-list');
    reviewsList.innerHTML = ''; // Clear existing reviews

    product.reviewList.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <div class="review-header">
                <span class="reviewer-name">${review.name}</span>
                ${review.verified ? '<span class="verified-badge">Verified Buyer</span>' : ''}
                <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                <span class="review-date">${review.date}</span>
            </div>
            <p class="review-text">${review.text}</p>
            <div class="review-footer">
                <span class="review-helpful">Was this helpful?</span>
                <button class="helpful-btn">Yes (${review.helpful.yes})</button>
                <button class="helpful-btn">No (${review.helpful.no})</button>
            </div>
        `;
        reviewsList.appendChild(reviewItem);
    });
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const orderDetails = Object.fromEntries(formData.entries());
    console.log('Order details:', orderDetails);
    // Here you would typically send this data to a server or update the cart
    alert('Product added to cart!');
}



// Function to sort reviews
function sortReviews(product, sortBy) {
    switch (sortBy) {
        case 'recent':
            product.reviewList.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'highest':
            product.reviewList.sort((a, b) => b.rating - a.rating);
            break;
        case 'lowest':
            product.reviewList.sort((a, b) => a.rating - b.rating);
            break;
    }
}

// Add these variables at the beginning of your Cake_products.js file
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCounter = document.querySelector('.cart-counter');

// Add this function to update the cart counter
function updateCartCounter() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (!cartCounter) {
        cartCounter = document.createElement('span');
        cartCounter.className = 'cart-counter';
        document.querySelector('.icon').appendChild(cartCounter);
    }

    cartCounter.textContent = totalItems;
    cartCounter.classList.add('pulse');
    setTimeout(() => cartCounter.classList.remove('pulse'), 300);
}

// Modify the handleFormSubmission function
function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productId = getProductIdFromUrl();
    const product = cupcakeProducts.find(p => p.id === productId);

    if (!product) return;

    const selectedBoxSize = formData.get('boxSize');
    const boxQuantity = parseInt(formData.get('boxQuantity'));
    const selectedOption = product.boxOptions.find(o => o.quantity === parseInt(selectedBoxSize.split(' ')[2]));

    if (!selectedOption) return;

    const selectionType = formData.get('selection-type');
    const selectedFlavors = selectionType === 'custom' ? Array.from(formData.getAll('flavors')) : [];

    const cartItem = {
        id: product.id,
        title: `${product.title} - ${selectedBoxSize}`,
        price: selectedOption.price,
        image: product.image,
        quantity: boxQuantity,
        boxSize: selectedOption.quantity,
        type: product.type,
        selectionType: selectionType,
        selectedFlavors: selectedFlavors
    };

    addToCart(cartItem);      
                                                                                                                                                                
    // Create particle element                                                                                                                                  
    const particle = document.createElement('div');                                                                                                             
    particle.className = 'cart-particle';                                                                                                                       
    document.body.appendChild(particle);                                                                                                                        
                                                                                                                                                                
    // Get button position                                                                                                                                      
    const buttonRect = event.target.getBoundingClientRect();                                                                                                    
    const cartIconRect = document.querySelector('.cart-icon').getBoundingClientRect();                                                                          
                                                                                                                                                                
    // Set initial position and size                                                                                                                            
    particle.style.top = buttonRect.top + buttonRect.height / 2 + 'px';                                                                                         
    particle.style.left = buttonRect.left + buttonRect.width / 2 + 'px';                                                                                        
    particle.style.transform = 'translate(-50%, -50%) scale(1.5)';                                                                                              
                                                                                                                                                                
    // Trigger animation                                                                                                                                        
    setTimeout(() => {                                                                                                                                          
        particle.classList.add('active');                                                                                                                       
        particle.style.top = cartIconRect.top + cartIconRect.height / 2 + 'px';                                                                                 
        particle.style.left = cartIconRect.left + cartIconRect.width / 2 + 'px';                                                                                
        particle.style.transform = 'translate(-50%, -50%) scale(0.1)';                                                                                          
    }, 0);                                                                                                                                                      
                                                                                                                                                                
    // Update cart count after animation                                                                                                                        
    setTimeout(() => {                                                                                                                                          
        const cartCount = document.querySelector('.cart-counter');                                                                                              
        if (cartCount && !window.location.pathname.includes('cart.html')) {                                                                                     
            cartCount.textContent = (parseInt(cartCount.textContent) + product.quantity).toString();                                                            
            cartCount.classList.add('pulse');                                                                                                                   
            setTimeout(() => cartCount.classList.remove('pulse'), 800);                                                                                         
        }                                                                                                                                                       
        updateCartCounter();                                                                                                                                    
        particle.remove();                                                                                                                                      
    }, 300);                                                                                                                                                    
                                                                                                                                                                
}                                    

// Add this function to handle adding items to the cart
function addToCart(item) {
    const existingItemIndex = cart.findIndex(cartItem => 
        cartItem.id === item.id && 
        cartItem.boxSize === item.boxSize &&
        cartItem.selectionType === item.selectionType &&
        JSON.stringify(cartItem.selectedFlavors) === JSON.stringify(item.selectedFlavors)
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count in localStorage
    const currentCount = parseInt(localStorage.getItem('cartCount') || '0');
    const newCount = currentCount + item.quantity;
    localStorage.setItem('cartCount', newCount.toString());

    // Update cart counter display
    if (window.updateCartCounter) {
        window.updateCartCounter();
    }

    // Trigger storage event for other open pages
    window.dispatchEvent(new Event('storage'));
}




// Function to update cart counter
function updateCartCounter() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (!cartCounter) {
        cartCounter = document.createElement('span');
        cartCounter.className = 'cart-counter';
        document.querySelector('.fa fa-shopping-cart').appendChild(cartCounter);
    }
    cartCounter.textContent = totalItems;
    cartCounter.classList.add('pulse');
    setTimeout(() => cartCounter.classList.remove('pulse'), 300);
}

function updateCupcakePrice() {
    const boxSizeSelect = document.getElementById('boxSize');
    const productId = getProductIdFromUrl();
    const product = cupcakeProducts.find(p => p.id === productId);
    
    if (product && product.boxOptions) {
        const selectedSize = boxSizeSelect.value.split(' ')[2]; // Extract the number from "Box of X"
        const selectedOption = product.boxOptions.find(o => o.quantity === parseInt(selectedSize));
        if (selectedOption) {
            document.getElementById('product-price').textContent = `$${selectedOption.price.toFixed(2)}`;
        }
    }
}



// Modify the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromUrl();
    if (productId) {
        loadProduct(productId);
    } else {
        console.error('No product ID provided in the URL');
    }

    // Add event listener for form submission
    const form = document.querySelector('.customization-form');
    form.addEventListener('submit', handleFormSubmission);

    // Add event listener for review sorting
    const sortSelect = document.getElementById('review-sort');
    sortSelect.addEventListener('change', (event) => {
        const productId = getProductIdFromUrl();
        const product = cupcakeProducts.find(p => p.id === productId);
        if (product) {
            sortReviews(product, event.target.value);
            loadReviews(product);
        }
    });

    // Initialize cart counter
    updateCartCounter();

    // Add click event to cart icon
    const cartIcon = document.querySelector('.icon:last-child');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }

    // Add click event to search icon
    const searchIcon = document.querySelector('.icon:first-child');
    if (searchIcon) {
        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            // Implement search functionality here
            console.log('Search icon clicked');
        });
    }
});