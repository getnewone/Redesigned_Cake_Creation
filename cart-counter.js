// cart-counter.js

function updateCartCounter() {                                                                                                                                  
    const cartCount = localStorage.getItem('cartCount') || '0';                                                                                                 
    const cartIcons = document.querySelectorAll('.icon:last-child');                                                                                            
    const isCartPage = window.location.pathname.includes('cart.html');                                                                                          
                                                                                                                                                                
    cartIcons.forEach(cartIcon => {                                                                                                                             
        let cartCounter = cartIcon.querySelector('.cart-counter');                                                                                              
        if (!cartCounter) {                                                                                                                                     
            cartCounter = document.createElement('span');                                                                                                       
            cartCounter.className = 'cart-counter';                                                                                                             
            cartIcon.appendChild(cartCounter);                                                                                                                  
        }                                                                                                                                                       
                                                                                                                                                                
        if (parseInt(cartCount) > 0 && !isCartPage) {                                                                                                           
            cartCounter.textContent = cartCount;                                                                                                                
            cartCounter.style.display = 'block';                                                                                                                
        } else {                                                                                                                                                
            cartCounter.style.display = 'none';                                                                                                                 
        }                                                                                                                                                       
    });                                                                                                                                                         
}                                  

function initializeCartCounter() {
    updateCartCounter();

    

    // Add click event to search icons
    const searchIcons = document.querySelectorAll('.icon:first-child');
    searchIcons.forEach(searchIcon => {
        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            // Implement search functionality here
            console.log('Search icon clicked');
        });
    });

    // Listen for cartUpdated events
    window.addEventListener('cartUpdated', updateCartCounter);

    // Add this event listener to update the cart counter when localStorage changes
    window.addEventListener('storage', (e) => {
        if (e.key === 'cartCount') {
            updateCartCounter();
        }
    });
}

// Call initializeCartCounter when the DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCartCounter);
} else {
    initializeCartCounter();
}


// Export the updateCartCounter function so it can be called from other scripts
window.updateCartCounter = updateCartCounter;