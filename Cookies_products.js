// Define an array of cookie products
const CookiesProducts = [
    {
        id: "mixedBoxMiniCookies",
        title: "Mixed Box of Cookies",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/Untitleddesign_f631875b-944a-496c-93e4-9f16c5795dae.jpg?v=1632810227",
        type: "Cookies",
        description: "Create your own mix of your favourite Cookies! Select your flavours and pickup from your most loved store.",
        customizationInstructions: "Perfect for birthdays, anniversaries, weddings, corporate events, or any party or special occasion!",
        occasionSuggestions: "Some cookies may be seasonal (e.g Christmas-themed ones), contact us for custom orders.",
        orderNotice: "Requires 2 days notice for pre-order pickups and deliveries",
        eat: "Cookies are Vegetarian. Cookies contain almonds and egg white.",
        rating: 5.0,
        reviews: 1,
        boxOptions: [
            { quantity: 12, price: 60.00 },
            { quantity: 24, price: 120.00 },
            { quantity: 36, price: 180.00 },
        ],
        customizationOptions: [
            { name: "boxSize", label: "Box Size", type: "select", choices: [ "Box of 12", "Box of 24", "Box of 36"] },
        ],
        reviewDetails: {
            5: 1, 4: 0, 3: 0, 2: 0, 1: 0
        },
        reviewList: [
            {
                name: "Sakshi M.",
                verified: true,
                rating: 5,
                date: "03 December 2019",
                text: "I am totally impressed by the customer service and quality of cookies. My guest loved every thing. Kate you and your team should keep up the good work.",
                helpful: { yes: 10, no: 0 }
            },
        ]
    },
    {
        id: "whiteChocWhimsyCookies",
        title: "White Chocolate Whimsy Cookies",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/Untitleddesign_c0276f65-4d03-4bce-827e-9e02a64f8404.jpg?v=1632811256",
        type: "Cookies",
        description: "Pure white cookie shells with our delectable white chocolate filling - just heavenly!",
        customizationInstructions: "Perfect for birthdays, anniversaries, weddings, corporate events, or any party or special occasion!",
        orderNotice: "Requires 2 days notice for pre-order pickups.",
        eat: "Cookies are Vegetarian. Cookies contain almonds and egg-white, and Nutella Cookie contains Hazelnuts.",
        rating: 5,
        reviews: 1,
        boxOptions: [
            { quantity: 12, price: 48.00 },
            { quantity: 24, price: 96.00 },
            { quantity: 36, price: 144.00 },
        ],
        customizationOptions: [
            { name: "boxSize", label: "Box Size", type: "select", choices: ["Box of 12", "Box of 24", "Box of 36"] },
        ],
        reviewDetails: {
            5: 1, 4: 0, 3: 0, 2: 0, 1: 0
        },
        reviewList: [
            {
                name: "Claire M.",
                verified: true,
                rating: 5,
                date: "02 April 2019",
                text: "Highly recommend Kate's for the service, the pricing is great value, and the cookies are beyond delicious as well. Thank you to Kate and the team for all their help!",
                helpful: { yes: 0, no: 0 }
            },
        ]
    },
    {
        id: "hexagonFondantCookies",
        title: "Hexagon fondant cookies with silver splash",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/Cookies-5.jpg?v=1632791622",
        type: "Cookies",
        description: "Pure white cookie shells with our delectable white chocolate filling - just heavenly!",
        customizationInstructions: "Perfect for birthdays, anniversaries, weddings, corporate events, or any party or special occasion!",
        orderNotice: "Requires 2 days notice for pre-order pickups.",
        eat: "Cookies are Vegetarian. Cookies contain almonds and egg-white, and Nutella Cookie contains Hazelnuts.",
        rating: 5,
        reviews: 1,
        boxOptions: [
            { quantity: 12, price: 65.00 },
            { quantity: 24, price: 125.00 },
            { quantity: 36, price: 185.00 },
        ],
        customizationOptions: [
            { name: "boxSize", label: "Box Size", type: "select", choices: ["Box of 12", "Box of 24", "Box of 36"] },
        ],
        reviewDetails: {
            5: 1, 4: 0, 3: 0, 2: 0, 1: 0
        },
        reviewList: [
            {
                name: "Claire M.",
                verified: true,
                rating: 5,
                date: "02 April 2019",
                text: "Highly recommend Kate's for the service, the pricing is great value, and the cookies are beyond delicious as well. Thank you to Kate and the team for all their help!",
                helpful: { yes: 0, no: 0 }
            },
        ]
    },
    {
        id: "chunkyChocoChip",
        title: "Choc Chip Chunky Cookie",
        image: "https://cakecreationsbykate.com.au/cdn/shop/files/2_bcbf2c05-395c-49b0-a2ce-f7fa2e319607.png?v=1723805920",
        type: "Cookies",
        description: "It's chunky cookie time!",
        customizationInstructions: "The O.G. cookie, our classic choc chip cookie is chewy on the inside and crunchy on the outside - just the way we love our cookies.",
        rating: 5,
        reviews: 2,
        boxOptions: [
            { price: 7.00 }
        ],
        customizationOptions: [],
        reviewDetails: {
            5: 2, 4: 0, 3: 0, 2: 0, 1: 0
        },
        reviewList: [
            {
                name: "Claire M.",
                verified: true,
                rating: 5,
                date: "02 April 2019",
                text: "Highly recommend Kate's for the service, the pricing is great value, and the cookies are beyond delicious as well. Thank you to Kate and the team for all their help!",
                helpful: { yes: 0, no: 0 }
            },
        ]
    },
    {
        id: "chunkyBiscoff",
        title: "Biscoff Chunky Cookie",
        image: "https://cakecreationsbykate.com.au/cdn/shop/files/7_504a6dd8-e8b8-4f40-867d-c46e4226daea.png?v=1723805012",
        type: "Cookies",
        description: "It's chunky cookie time!",
        customizationInstructions: "With a gooey Biscoff centre, white chocolate chunks and Biscoff crumbs, this cookie is perfect for any Biscoff fan.",
        rating: 5,
        reviews: 3,
        boxOptions: [
            { price: 7.00 }
        ],
        customizationOptions: [],
        reviewDetails: {
            5: 2, 4: 1, 3: 0, 2: 0, 1: 0
        },
        reviewList: [
            {
                name: "Laura D.",
                verified: true,
                rating: 5,
                date: "23 April 2020",
                text: "Highly recommend Kate's for the service, the pricing is great value, and the cookies are beyond delicious as well. Thank you to Kate and the team for all their help!",
                helpful: { yes: 0, no: 0 }
            },
        ]
    },
];

const allCookiesImages = [
    { id: "mixedBoxMiniCookies", src:"https://cakecreationsbykate.com.au/cdn/shop/products/Untitleddesign_f631875b-944a-496c-93e4-9f16c5795dae.jpg?v=1632810227", title: "Number embossed fondant cookie with gold flakes" ,price: 60.00 },
    { id: "whiteChocWhimsyCookies", src: "https://cakecreationsbykate.com.au/cdn/shop/products/Untitleddesign_c0276f65-4d03-4bce-827e-9e02a64f8404.jpg?v=1632811256", title: "Cross embossed fondant cookie with gold splash", price: 65.00 },
    { id: "hexagonFondantCookies",src: "https://cakecreationsbykate.com.au/cdn/shop/products/Cookies-5.jpg?v=1632791622", title: "Hexagon fondant cookies with silver splash", price: 60.00 },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCounter = document.querySelector('.cart-counter');

function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('productId');
}

function loadProduct(productId) {
    const product = CookiesProducts.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found');
        return;
    }

    document.getElementById('page-title').textContent = `${product.title} - Cake Creations by Kate`;
    document.getElementById('main-image').src = product.image;
    document.getElementById('main-image').alt = product.title;
    document.getElementById('product-title').textContent = product.title;

    if (product.boxOptions && product.boxOptions.length > 0) {
        document.getElementById('product-price').textContent = `$${product.boxOptions[0].price.toFixed(2)}`;
    }

    const descriptionElement = document.getElementById('product-description');
    descriptionElement.innerHTML = `
        <div class="description">
            <p>${product.description}</p>
            <p>${product.customizationInstructions || ''}</p>
            <p>${product.occasionSuggestions || ''}</p>
            <p>${product.eat || ''}</p>
            <p class="note">${product.orderNotice || ''}</p>
        </div>
    `;

    updateRatingAndReviews(product);
    updateCustomizationOptions(product);
    loadReviews(product);
    updateOurFavourites();
}

function updateOurFavourites() {
    const favouritesGrid = document.querySelector('.favourites-grid');
    favouritesGrid.innerHTML = '';

    const randomCookies = getRandomCookies(3);

    randomCookies.forEach(cookie => {
        const favouriteItem = document.createElement('div');
        favouriteItem.className = 'favourite-item Cookies-item';
        favouriteItem.innerHTML = `
            <a href="Cookies_template.html?productId=${cookie.id}" class="Cookies-link">
                <div class="Cookies-info">
                    <h3>${cookie.title}</h3>
                    <p>$${cookie.price.toFixed(2)}</p>
                </div>
                <img src="${cookie.src}" alt="${cookie.title}">
            </a>
        `;
        favouritesGrid.appendChild(favouriteItem);
    });
}

function getRandomCookies(count) {
    const shuffled = allCookiesImages.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function updateRatingAndReviews(product) {
    const starRating = document.getElementById('star-rating');
    starRating.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.className = `fa fa-star${i <= Math.round(product.rating) ? '' : '-o'}`;
        starRating.appendChild(star);
    }
    document.getElementById('review-count').textContent = `(${product.reviews} reviews)`;

    document.querySelector('.reviews-header h2 .review-count').textContent = product.reviews;
    document.querySelector('.overall-rating .rating-number').textContent = product.rating.toFixed(1);
    document.querySelector('.overall-rating .review-count').textContent = `Based on ${product.reviews} Reviews`;

    updateRatingDistribution(product);
}

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

            if (option.name === 'boxSize') {
                select.addEventListener('change', updateCookiesPrice);
            }

            formGroup.appendChild(select);
        }

        customizationForm.appendChild(formGroup);
    });

    const quantityGroup = document.createElement('div');
    quantityGroup.className = 'form-group';
    quantityGroup.innerHTML = `
        <label for="boxQuantity">Number of ${product.boxOptions.length > 1 ? 'Boxes' : 'Items'}</label>
        <input type="number" id="boxQuantity" name="boxQuantity" value="1" min="1" required>
    `;
    customizationForm.appendChild(quantityGroup);

    const addToCartButton = document.createElement('button');
    addToCartButton.type = 'submit';
    addToCartButton.className = 'add-to-cart';
    addToCartButton.textContent
= 'ADD TO CART';
    customizationForm.appendChild(addToCartButton);
}

function loadReviews(product) {
    const reviewsList = document.querySelector('.reviews-list');
    reviewsList.innerHTML = '';

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

function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productId = getProductIdFromUrl();
    const product = CookiesProducts.find(p => p.id === productId);

    if (!product) return;

    let cartItem;
    let quantity = parseInt(formData.get('boxQuantity'));

    if (product.boxOptions.length > 1) {
        const selectedBoxSize = formData.get('boxSize');
        const selectedOption = product.boxOptions.find(o => o.quantity === parseInt(selectedBoxSize.split(' ')[2]));

        if (!selectedOption) {
            console.error('Invalid box size selected');
            return;
        }

        cartItem = {
            id: product.id,
            title: `${product.title} - ${selectedBoxSize}`,
            price: selectedOption.price,
            image: product.image,
            quantity: quantity,
            type: product.type,
            boxSize: selectedOption.quantity
        };
    } else {
        cartItem = {
            id: product.id,
            title: product.title,
            price: product.boxOptions[0].price,
            image: product.image,
            quantity: quantity,
            type: product.type
        };
    }

    addToCart(cartItem);
    animateAddToCart(event.target);
}

function addToCart(item) {
    const existingItemIndex = cart.findIndex(cartItem =>
        cartItem.id === item.id && cartItem.boxSize === item.boxSize
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cartCount in localStorage
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('cartCount', totalItems.toString());
    
    // Dispatch a custom event to notify other scripts
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    
    // Update cart counter immediately
    updateCartCounter();
}

function updateCartCounter() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (!cartCounter) {
        cartCounter = document.createElement('span');
        cartCounter.className = 'cart-counter';
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.appendChild(cartCounter);
        }
    }

    cartCounter.textContent = totalItems;
    cartCounter.classList.add('pulse');
    setTimeout(() => cartCounter.classList.remove('pulse'), 300);

    // Make sure the counter is visible
    cartCounter.style.display = totalItems > 0 ? 'block' : 'none';
}

window.addEventListener('cartUpdated', () => {
    updateCartCounter();
});

function animateAddToCart(button) {
    const particle = document.createElement('div');
    particle.className = 'cart-particle';
    document.body.appendChild(particle);

    const buttonRect = button.getBoundingClientRect();
    const cartIconRect = document.querySelector('.cart-icon').getBoundingClientRect();

    particle.style.top = buttonRect.top + buttonRect.height / 2 + 'px';
    particle.style.left = buttonRect.left + buttonRect.width / 2 + 'px';
    particle.style.transform = 'translate(-50%, -50%) scale(1.5)';

    setTimeout(() => {
        particle.classList.add('active');
        particle.style.top = cartIconRect.top + cartIconRect.height / 2 + 'px';
        particle.style.left = cartIconRect.left + cartIconRect.width / 2 + 'px';
        particle.style.transform = 'translate(-50%, -50%) scale(0.1)';
    }, 0);

    setTimeout(() => {
        updateCartCounter();
        particle.remove();
    }, 300);
}


function updateCookiesPrice() {
    const boxSizeSelect = document.getElementById('boxSize');
    const productId = getProductIdFromUrl();
    const product = CookiesProducts.find(p => p.id === productId);

    if (product && product.boxOptions && product.boxOptions.length > 1) {
        const selectedSize = boxSizeSelect.value.split(' ')[2];
        const selectedOption = product.boxOptions.find(o => o.quantity === parseInt(selectedSize));
        if (selectedOption) {
            document.getElementById('product-price').textContent = `$${selectedOption.price.toFixed(2)}`;
        }
    }
}

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

document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromUrl();
    if (productId) {
        loadProduct(productId);
    } else {
        console.error('No product ID provided in the URL');
    }

    const form = document.querySelector('.customization-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }

    window.addEventListener('cartUpdated', updateCartCounter);

    const sortSelect = document.getElementById('review-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', (event) => {
            const productId = getProductIdFromUrl();
            const product = CookiesProducts.find(p => p.id === productId);
            if (product) {
                sortReviews(product, event.target.value);
                loadReviews(product);
            }
        });
    }

    updateCartCounter();

    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }

    const searchIcon = document.querySelector('.icon:first-child');
    if (searchIcon) {
        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Search icon clicked');
        });
    }
// Listen for storage events to update cart counter across tabs
window.addEventListener('storage', (event) => {
    if (event.key === 'cart') {
        cart = JSON.parse(event.newValue) || [];
        updateCartCounter();
    }
});
});

// Initial cart counter update
updateCartCounter();

