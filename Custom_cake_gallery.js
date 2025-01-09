// Sample custom cakes data
const customCakes = [
    {
        id: 1,
        title: "Unicorn Fantasy Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_2107.jpg?v=1710207701",
        price: "From $250",
        description: "A magical unicorn-themed cake featuring pastel colors, golden details, and a stunning horn. Perfect for children's birthdays or anyone who loves whimsical designs.",
        specs: {
            size: "8 inch (serves 16-20)",
            flavor: "Vanilla",
            filling: "Vanilla Buttercream",
            dietary: ["Nut Free"],
            occasion: "Birthday",
            colorScheme: "Pastel Pink, Purple, and Gold",
            theme: "Fantasy/Unicorn",
            specialElements: ["Sugar Flowers", "Edible Gold", "Custom Topper"]
        },
        features: [
            "Hand-crafted fondant details",
            "Customizable colors",
            "Available in various sizes",
            "Can be adapted for dietary requirements"
        ]
    },
    {
        id: 2,
        title: "Elegant Wedding Tier Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/73.png?v=1652849370",
        price: "From $80",
        description: "A sophisticated three-tier wedding cake with delicate floral details and metallic accents. Each tier can be customized with different flavors.",
        specs: {
            size: "6 inch, 8 inch, 10 inch (serves 25-30)",
            flavor: "Vanilla and Chocolate",
            filling: "Vanilla Buttercream and Fresh Fruit",
            dietary: ["Standard"],
            occasion: "Wedding",
            colorScheme: "White and Silver",
            theme: "Elegant/Floral",
            specialElements: ["Fresh Flowers", "Metallic Accents"]
        },
        features: [
            "Premium quality ingredients",
            "Handmade sugar flowers",
            "Metallic or pearl finish options",
            "Serves 6-26 guests"
        ]
    },
    {
        id: 3,
        title: "Sports Theme Celebration Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/files/cakebball.jpg?v=1710208370",
        price: "From $205",
        description: "Perfect for sports enthusiasts! This cake can be customized for any sport with realistic details and team colors.",
        specs: {
            size: "10 inch (serves 25-30)",
            flavor: "Chocolate",
            filling: "Chocolate Ganache",
            dietary: ["Standard"],
            occasion: "Birthday",
            colorScheme: "Team Colors (Customizable)",
            theme: "Sports",
            specialElements: ["Edible Print", "Custom Topper"]
        },
        features: [
            "Sport-specific decorations",
            "Team color options",
            "Custom message available",
            "Serves 15-20 people"
        ]
    }
];

// Function to create cake items in the grid
function loadCustomCakes() {
    const grid = document.getElementById('customCakesGrid');
    grid.innerHTML = '';
    
    customCakes.forEach(cake => {
        const cakeItem = document.createElement('div');
        cakeItem.className = 'cake-item';
        cakeItem.onclick = () => showCakeDetails(cake);
        
        cakeItem.innerHTML = `
            <img src="${cake.image}" alt="${cake.title}">
            <div class="cake-info">
                <h3>${cake.title}</h3>
            </div>
        `;
        
        grid.appendChild(cakeItem);
    });
}

let currentCake = null;

// Function to show cake details in modal
function showCakeDetails(cake) {
    currentCake = cake;
    const modal = document.getElementById('cakeModal');
    const specs = cake.specs;

    document.getElementById('modalImage').src = cake.image;
    document.getElementById('modalTitle').textContent = cake.title;
    document.getElementById('modalPrice').textContent = cake.price;
    document.getElementById('modalDescription').textContent = cake.description;
    
    // Update specifications
    document.getElementById('modalSize').textContent = specs.size;
    document.getElementById('modalFlavor').textContent = specs.flavor;
    document.getElementById('modalFilling').textContent = specs.filling;
    document.getElementById('modalDietary').textContent = specs.dietary.join(', ');
    document.getElementById('modalOccasion').textContent = specs.occasion;
    document.getElementById('modalColorScheme').textContent = specs.colorScheme;
    document.getElementById('modalTheme').textContent = specs.theme;
    document.getElementById('modalElements').textContent = specs.specialElements.join(', ');
    
    modal.style.display = 'block';
}

// Function to redirect to enquiry page with cake details
function redirectToEnquiry() {
    if (!currentCake) return;
    
    const specs = currentCake.specs;
    
    // Format the cake size information
    let cakeSize = specs.size.toLowerCase();
    if (cakeSize.includes('6-8') || cakeSize.includes('standard')) {
        cakeSize = 'standard';
    } else if (cakeSize.includes('tier')) {
        cakeSize = 'tiered';
    } else {
        // Extract inch size if present
        const inchMatch = cakeSize.match(/(\d+)[\s-]*inch/i);
        if (inchMatch) {
            cakeSize = `${inchMatch[1]}-inch`;
        }
    }

    // Handle dietary requirements
    let dietary = Array.isArray(specs.dietary) ? specs.dietary : [];
    let notDietary = [];
    
    // If no specific dietary requirements are specified, mark as standard
    if (!dietary.length || dietary.some(d => d.toLowerCase().includes('standard'))) {
        notDietary.push('not-gluten-free');
    }

    const params = new URLSearchParams({
        cake_size: cakeSize,
        servings: specs.servings || '',
        cake_flavor: specs.flavor || '',
        filling: specs.filling || '',
        dietary: dietary.join(','),
        not_dietary: notDietary.join(','),
        occasion: specs.occasion || '',
        color_scheme: specs.colorScheme || '',
        theme: specs.theme || '',
        special_elements: Array.isArray(specs.specialElements) ? specs.specialElements.join(',') : ''
    });

    // Remove any empty parameters
    for (const [key, value] of params.entries()) {
        if (!value) params.delete(key);
    }

    window.location.href = `Custome_enquiry.html?${params.toString()}`;
}

// Close modal when clicking the close button or outside the modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cakeModal');
    const closeBtn = document.querySelector('.close-modal');
    
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        currentCake = null;
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            currentCake = null;
        }
    };
    
    // Load the custom cakes
    loadCustomCakes();
});
