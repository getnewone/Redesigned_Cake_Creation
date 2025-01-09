// Define an array of mini cupcake products
const miniCupcakeProducts = [
    {
        id: "mixedBoxMiniCupcakes",
        title: "Mixed Box of Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/Untitleddesign_2.jpg?v=1629267710",
        price: 34.00
    },
    {
        id: "cookiescreamcupcakes",
        title: "Cookies & Cream Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0697.jpg?v=1626833930",
        price: 34.00
    },
    {
        id: "lemoncupcakes",
        title: "Lemon Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0682.jpg?v=1626833440",
        price: 34.00
    },
    {
        id: "mars-bar-cupcakes",
        title: "Mars Bar® Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0689.jpg?v=1626833768",
        price: 34.00
    },
    {
        id: "jam-donut-cupcakes",
        title: "Jam Donut Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0679.jpg?v=1626833205",
        price: 34.00
    },
    {
        id: "vanilla-rainbow-cupcakes",
        title: "Vanilla Rainbow Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0708.jpg?v=1626834335",
        price: 34.00
    },
    {
        id: "white-chocolate-raspberry-cupcakes",
        title: "White Chocolate Raspberry Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0685.jpg?v=1626833661",
        price: 34.00
    },
    {
        id: "triple-chocolate-cupcakes",
        title: "Triple Chocolate Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0696.jpg?v=1626833888",
        price: 34.00
    },
    {
        id: "salted-caramel-cupcakes",
        title: "Salted Caramel Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0684.jpg?v=1626833610",
        price: 34.00
    },
    {
        id: "kinder-surprise-cupcakes",
        title: "Kinder Surprise® Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0691.jpg?v=1626833810",
        price: 34.00
    },
    {
        id: "snickers-cupcakes",
        title: "Snickers® Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0687.jpg?v=1626833717",
        price: 34.00
    },
    {
        id: "chocolate-raspberry-cupcakes",
        title: "Gluten Free & Vegan 'Chocolate Raspberry' Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/files/3_7a0cb3cf-9df0-4bc4-93e6-e57b7e25b36f.png?v=1712618483",
        price: 34.00
    },
    {
        id: "sprinkle-me-cupcakes",
        title: "Sprinkle Me Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/Untitleddesign_3.jpg?v=1629325099",
        price: 39.00
    },
    {
        id: "custom-colour-cupcakes",
        title: "Custom Colour Mini Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/Untitleddesign_5.jpg?v=1629325308",
        price: 39.00
    },
    // Add more mini cupcake products here
];

// Define an array of large cupcake products
const largeCupcakeProducts = [
    {
        id: "mixedBoxLargeCupcake",
        title: "Mixed Box of Large Cupcakes",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/image_3f684037-a029-40e1-9494-74946615bd73.jpg?v=1653979332",
        price: 60.00
    },
    {
        id: "giantvanillacupcake",
        title: "Giant Vanilla Cupcake",
        image: "https://example.com/giant-vanilla-cupcake.jpg",
        price: 45.00
    },
    {
        id: "giantstrawberrycupcake",
        title: "Giant Strawberry Cupcake",
        image: "https://example.com/giant-strawberry-cupcake.jpg",
        price: 45.00
    },
    // Add more large cupcake products here
];

const CupcakesProducts = {
    Mini: miniCupcakeProducts,
    Large: largeCupcakeProducts
};

function loadCupcakeList(type) {
    const cupcakeListContainer = document.querySelector('.cupcake-grid');
    cupcakeListContainer.innerHTML = ''; // Clear existing items

    const cupcakes = CupcakesProducts[type];
    if (!cupcakes) {
        console.error('Cupcake type not found');
        return;
    }

    cupcakes.forEach((cupcake, index) => {
        const cupcakeItem = document.createElement('div');
        cupcakeItem.className = 'cupcake-item';
        
        // Add a special class to the last large cupcake
        const isLastLarge = type === 'Large' && index === cupcakes.length - 1;
        const specialClass = isLastLarge ? 'last-large-cupcake' : '';
        
        cupcakeItem.innerHTML = `
            <a href="cupcake_template.html?productId=${cupcake.id}" class="cupcake-link">
                <div class="cupcake-info">
                    <h3>${cupcake.title}</h3>
                    <p>$${cupcake.price.toFixed(2)}</p>
                </div>
                <img src="${cupcake.image}" alt="${cupcake.title}" class="${specialClass}">
            </a>
        `;
        cupcakeListContainer.appendChild(cupcakeItem);
    });
}

function loadCupcakeDescriptions(type) {
    const descriptions = {
        Mini: [
            "Our beloved, Signature Mini Cupcakes are known to be moist and delicious!",
            "We receive amazing feedback every day about our iconic Mini Cupcakes, you better try them for yourself!",
            "With flavours ranging from Cookies & Cream, to Jam Donut and everything in between- we have a cupcake fit for everyone!"
        ],
        Large: [
            "Packed with the same goodness and equally as delicious as our iconic Mini Cupcakes, just 2-3 times bigger!",
            "Our Signature Cupcakes receive amazing feedback everyday. With a variety of colours and flavours, we have something for everyone!",
            "Perfect for birthdays, anniversaries, weddings, corporate events, or any party or special occasion!"
        ]
    };

    const descriptionContainer = document.querySelector('.main-text');
    descriptionContainer.innerHTML = ''; // Clear existing descriptions

    descriptions[type].forEach(description => {
        const descriptionItem = document.createElement('p');
        descriptionItem.className = 'description';
        descriptionItem.textContent = description;
        descriptionContainer.appendChild(descriptionItem);
    });
}

function loadCupcakeHeading(type) {
    const headings = {
        Mini: "MINI CUPCAKES",
        Large: "LARGE CUPCAKES"
    };

    const headingContainer = document.querySelector('.heading');
    headingContainer.innerHTML = `<h1>${headings[type]}</h1>`;
}

function loadMainImages(type) {
    const mainImageContainer = document.querySelector('.main-image');
    let images;
    
    if (type === 'Mini') {
        images = [
            "Images/Cupcakes/Cupcakes4.png copy.png",
            "Images/Cupcakes/Cupcakes6.png copy.png",
            "Images/Cupcakes/Cupcakes3.png copy.png"
        ];
    } else if (type === 'Large') {
        images = [
            "Images/Cupcakes/moist-chocolate-cupcakes-5.png",
            "Images/Cupcakes/Screenshot 2024-11-27 at 11.06.01 am.png",
            "Images/Cupcakes/blackcocoa-WEB-4.png",
            
        ];
    } else {
        console.error('Invalid cupcake type');
        return;
    }

    mainImageContainer.innerHTML = images.map(src => 
        `<img src="${src}" alt="${type} Cupcakes" class="product-image">`
    ).join('');
}


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cupcakeType = urlParams.get('type');

    if (cupcakeType) {
        loadCupcakeHeading(cupcakeType);
        loadCupcakeDescriptions(cupcakeType);
        loadMainImages(cupcakeType);
        loadCupcakeList(cupcakeType);
    } else {
        console.error('No cupcake type provided in the URL');
    }
});
