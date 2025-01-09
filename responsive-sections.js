
(function() {
  if (window.innerWidth <= 768) {
    document.body.classList.add('responsive-layout');
  }
})();

function handleResponsiveLayout() {
  if (window.innerWidth <= 768) {
    if (!document.getElementById('responsive-sections')) {
      document.body.classList.add('responsive-layout');
      renderResponsiveSections();
    }
  } else {
    document.body.classList.remove('responsive-layout');
    removeResponsiveSections();
  }
}

// Use both DOMContentLoaded and load events to ensure proper initialization
document.addEventListener('DOMContentLoaded', handleResponsiveLayout);
window.addEventListener('load', handleResponsiveLayout);
window.addEventListener('resize', debounce(handleResponsiveLayout, 250));

// Debounce function to improve performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function renderResponsiveSections() {
  gsap.registerPlugin(ScrollTrigger);
  const responsiveHTML = `
    <div id="responsive-sections" >
      <section class="r-animation">
        <h2><span>CAKE</span> <i>CREATION</i> <span>BY</span> <i>KATE</i></h2>
        <h2><span>CAKE</span> <i>CREATION</i> <span>BY</span> <i>KATE</i></h2>
        <h2><span>CAKE</span> <i>CREATION</i> <span>BY</span> <i>KATE</i></h2>
        <h2><span>CAKE</span> <i>CREATION</i> <span>BY</span> <i>KATE</i></h2>
      </section>

      <section class="r-main">
        <div class="r-text-effect">
          <h1>Happiness is only <br> <span>a cupcake away...</span></h1>
        </div>
        <div class="r-text-effect-scroll">
          <h1>Happiness is only <br> <span>a cupcake away...</span></h1>
        </div>
      </section>

     <section class="r-menu">
        <h1>Our Menu</h1>
        <p class="r-description">At Cake Creations by Kate, we pride ourselves on using only the finest ingredients to craft our delectable desserts.</p>
        <div class="r-menu-effect">
          <div class="r-menu-dropdown">
            <button class="r-menu-dropdown-btn">
              <span class="r-selected-item">Cakes</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="r-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="r-menu-dropdown-content">
              <button class="r-menu-item active" data-item="Cakes">Cakes</button>
              <button class="r-menu-item" data-item="Cupcakes">Cupcakes</button>
              <button class="r-menu-item" data-item="Cookies">Cookies</button>
              <button class="r-menu-item" data-item="Macarons">Macarons</button>
            </div>
          </div>
          <div class="r-image-container">
            <img src="/placeholder.svg?height=400&width=400&text=Cakes" alt="Menu Item" class="r-menu-image">
          </div>
        </div>
        <div class="r-menu-text">
          <h2>Select Your Favourite</h2>
          <p>Handmade Freshly Baked</p>
        </div>
      </section>

      <section class="r-products">
        <div class="r-product" id="r-cakes">
          <h2>Cakes</h2>
          <img src="Images/Cakes/Screenshot 2024-11-14 at 10.29.25 am.png?height=40&width=400" alt="Cakes" class="r-product-image">
          <a href="Cakes.html" class="r-cta-button">SEE OPTIONS</a>
        </div>
        <div class="r-product" id="r-cupcakes">
          <h2>Cupcakes</h2>
          <img src="Images/Cupcakes/blackcocoa-WEB-4.png?height=400&width=400" alt="Cupcakes" class="r-product-image">
          <a href="Cupcakes.html" class="r-cta-button">SEE OPTIONS</a>
        </div>
        <div class="r-product" id="r-macarons">
          <h2>Macarons</h2>
          <img src="Images/Macrons/Macrons2.jpg copy.png?height=400&width=400" alt="Macarons" class="r-product-image-c">
          <a href="Macrons.html" class="r-cta-button">SEE OPTIONS</a>
        </div>
        <div class="r-product" id="r-cookies">
          <h2>Cookies</h2>
          <img src="Images/Cookies/copy-cookie.jpg.png?height=400&width=400" alt="Cookies" class="r-product-image-c">
          <a href="Cookies.html" class="r-cta-button">SEE OPTIONS</a>
        </div>
      </section>
    </div>
  `;

  const responsiveStyles = `
    <style id="responsive-styles">
      .responsive-layout .animation,
      .responsive-layout .main,
      .responsive-layout .menu,
      .responsive-layout .Cakes,
      .responsive-layout .Cupcakes,
      .responsive-layout .Macarons,
      .responsive-layout .Cookies {
        display: none !important;
      }

       .r-menu-dropdown {
        position: relative;
        width: 90%;
        margin-bottom: 20px;
      }

      .r-menu-dropdown-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
        font-size:15px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
      }

      .r-menu-dropdown-content {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: pink;
        border: 1px solid #ccc;
        border-top: none;
        border-radius: 0 0 4px 4px;
        z-index: 1;
      }

      .r-menu-dropdown-content .r-menu-item {
        display: block;
        width: 100%;
        padding: 10px;
        text-align: left;
        font-size:15px;
        background: none;
        border: none;
        cursor: pointer;
      }

      .r-menu-dropdown-content .r-menu-item:hover {
        background-color: #f0f0f0;
      }

      .r-chevron-down {
        width: 20px;
        height: 20px;
      }

      #responsive-sections {
        font-family: 'gilroy', Arial, sans-serif;
      }
      .r-animation {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: pink;
        word-spacing:5px;
      }
      .r-animation h2 {
        color: #6a1b9a;
        font-weight: 100;
        font-size: 2rem;
        white-space: nowrap;
        animation: r-anime 10s linear infinite;
      }
      .r-animation h2 span {
        color: transparent;
        -webkit-text-stroke: 1px #553c9a;
      }

      .r-animation h2 i:last-child {
        
        margin-right: 10px;
        
      }
      @keyframes r-anime {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }

      .r-main {
        position: relative;
        height: 40vh;
        width: 100vw;
        background-color: purple;
        display: flex;
        align-items: center;
        overflow: hidden;
        will-change: transform; /* Optimize for animations */
        -webkit-overflow-scrolling: touch; /* Smooth scroll on iOS */
      }

        .r-text-effect {
        position: absolute;
        top: 20%;
        left: 5%;
        width: 100vw;
        opacity: 0.2;
        font-size: 1.5rem;
        font-family: monospace;
        color: pink;
        white-space: nowrap;
        transform: translateZ(0); /* Hardware acceleration */
        backface-visibility: hidden; /* Reduce visual artifacts */
      }
        .r-text-effect span {
        font-size: 2.5rem;
        }
        .r-text-effect-scroll span {
        font-size: 2.5rem;
        }


       .r-text-effect-scroll {
        position: absolute;
        top: 20%;
        left: 5%;
        width: 0vw;
        font-size: 1.5rem;
        font-family: monospace;
        color: pink;
        overflow: hidden;
        white-space: nowrap;
        transform: translateZ(0); /* Hardware acceleration */
        backface-visibility: hidden; /* Reduce visual artifacts */
        will-change: width; /* Optimize width animations */
      }


      .r-menu {
        position: relative;
        width: 100%;
        padding: 20px;
      }
      .r-menu h1 {
        font-size: 2rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
      }
      .r-description {
        font-family: monospace;
        line-height: 1.6;
        font-size: 0.9rem;
        text-align: center;
        margin-bottom: 20px;
        margin-right: 3px;
      }
      .r-menu-effect {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .r-menu-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
      }
      .r-menu-item {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1.2rem;
        background: none;
        border: none;
        cursor: pointer;
        transition: color 0.3s ease, transform 0.3s ease;
      }
      .r-menu-item:hover, .r-menu-item.active {
        color: whitesmoke;
        transform: translateX(5px);
      }
      .r-image-container {
        width: 100%;
        aspect-ratio: 1;
        overflow: hidden;
        justify-content:center;
        align-item:center;
      }
      .r-menu-image {
        border-radius:10px;
        width: 95%;
        height: 95%;
        object-fit: cover;
      }
      .r-menu-text {
        text-align: center;
        margin-top: 20px;
      }
      .r-menu-text h2 {
        font-size: 1.7rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(227, 79, 128);
        transition: transform 0.3s ease;
      }

      .r-menu-text:hover h2 {
        transform: translateX(12%);
        transition: transform 0.3s ease;

      }
      .r-menu-text p {
        font-size: 1.4rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: rgb(0, 174, 255);
        font-style: italic;
        transition: transform 0.3s ease-in;
      }

      .r-menu-text:hover p {
        transform: translateX(-12%);
        transition: transform 0.3s ease-in;
      }
      .r-products {
        padding: 20px;
      }
      .r-product {
        margin-bottom: 40px;
        text-align: center;
      }
      .r-product h2 {
        font-size: 2.8rem;
        color: brown;
        margin-bottom: 20px;
      }
      .r-product-image {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        margin-bottom: 20px;
      }
    



      .r-product-image-c {
        
        width: 80%;
        margin-left:-20px;
        aspect-ratio: 1;
        object-fit: cover;
        
      }
      .r-cta-button {
        display: inline-block;
        background-color: rgb(227, 79, 128);
        color: whitesmoke;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 25px;
        transition: transform 0.3s ease-in-out;
        font-weight:bold;
      }

      

    .r-cta-button:hover {
      transform:  scale(1.1);
     
  }

  
 

    </style>
  `;

  

  // Insert responsive sections before the "Find a store" section
  const storesSection = document.querySelector('.stores-section');
  if (storesSection) {
    storesSection.insertAdjacentHTML('beforebegin', responsiveStyles);
    storesSection.insertAdjacentHTML('beforebegin', responsiveHTML);
  } else {
    // Fallback: insert after navbar if stores section is not found
    const navbar = document.querySelector('.navbar-container');
    if (navbar) {
      navbar.insertAdjacentHTML('afterend', responsiveStyles);
      navbar.insertAdjacentHTML('afterend', responsiveHTML);
    }
  }


  // Add event listeners for menu items
  const menuDropdownBtn = document.querySelector('.r-menu-dropdown-btn');
  const menuDropdownContent = document.querySelector('.r-menu-dropdown-content');
  const menuItems = document.querySelectorAll('.r-menu-item');
  const menuImage = document.querySelector('.r-menu-image');
  const selectedItem = document.querySelector('.r-selected-item');

  menuDropdownBtn.addEventListener('click', function() {
    menuDropdownContent.style.display = menuDropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  const imagesByCategory = {
    'Cakes': [
            'Images/Cakes/Simple_Cake1.png.webp',
            'Images/Cakes/Simple_Cake2.png.webp',
            'Images/Cakes/Simple_Cake3.png.webp',
            'Images/Cakes/Simple_Cake4.png.webp',
            'Images/Cakes/Simple_Cake5.png.webp',
            'Images/Cakes/Simple_Cake6.png.webp'
        ],
        'Heart Cakes': [
            'Images/Heart_cakes/Heart_cakes.png.webp',
            'Images/Heart_cakes/Heart_cakes2.png.webp',
            'Images/Heart_cakes/Heart_cakes3.png.webp',
            'Images/Heart_cakes/Heart_cakes4.png.webp',
            'Images/Heart_cakes/Heart_cakes5.png.webp',
            'Images/Heart_cakes/Heart_cakes6.png.webp'
        ],
        'Cupcakes': [
            'Images/Cupcakes/Cupcakes1.png.webp',
            'Images/Cupcakes/Cupcakes2.png.webp',
            'Images/Cupcakes/Cupcakes3.png.webp',
            'Images/Cupcakes/Cupcakes4.png.webp',
            'Images/Cupcakes/Cupcakes5.png.webp',
            'Images/Cupcakes/Cupcakes6.png.webp'
        ],
        'Cookies': [
            'Images/Cookies/Cookies-1.jpg.webp',
            'Images/Cookies/Cookies-2.jpg.webp',
            'Images/Cookies/Cookies-3.jpg.webp',
            'Images/Cookies/Cookies-4.jpg.webp',
            'Images/Cookies/Cookies-5.jpg.webp',
            'Images/Cookies/Cookies-6.jpg.webp',
            'Images/Cookies/Cookies-7.jpg.webp',
            'Images/Cookies/Cookies-8.jpg.webp'
        ],
        'Macarons': [
            'Images/Macrons/Macrons1.jpg.webp',
            'Images/Macrons/Macrons2.jpg.webp',
            'Images/Macrons/Macrons3.jpg.webp',
            'Images/Macrons/Macrons4.jpg.webp',
            'Images/Macrons/Macrons5.jpg.webp',
            'Images/Macrons/Macrons6.jpg.webp'
        ],
  };

  let currentImageIndex = 0;
  let imageInterval;

  function startImageCarousel(category) {
    clearInterval(imageInterval);
    currentImageIndex = 0;
    const images = imagesByCategory[category];

    function showNextImage() {
      menuImage.src = images[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    showNextImage(); // Show first image immediately
    imageInterval = setInterval(showNextImage, 1000); // Change image every 3 seconds
  }

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      const category = this.dataset.item;
      selectedItem.textContent = category;
      startImageCarousel(category);
      menuDropdownContent.style.display = 'none';
    });
  });

  // Start the image carousel with the default category (Cakes)
  startImageCarousel('Cakes');
  // Implement scroll-based text animation for main section
  const mainSection = document.querySelector('.r-main');
  const textEffect = document.querySelector('.r-text-effect');

  
  // GSAP animations for responsive sections
  gsap.from(".r-animation", {
    scale: 6,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".r-animation",
      start: "top top",
      end: "100% center",
      scrub: 1,
      fastScrollEnd: true,
    }
  });

  // Smooth text animation
  const textTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".r-main",
      start: "20% 70%",
      end: "90% 40%",
      scrub: 0.3,
      fastScrollEnd: true,
      invalidateOnRefresh: true,
      onUpdate: self => {
        requestAnimationFrame(() => {
          gsap.set(".r-text-effect-scroll", {
            width: `${self.progress * 100}%`,
            force3D: true,
            ease: "power1.inOut"
          });
        });
      }
    }
  });

  // Optimize animation performance
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
  });

  // Clear any existing scroll listeners
  window.removeEventListener('scroll', updateTextEffect);
}

function removeResponsiveSections() {
  const responsiveSections = document.getElementById('responsive-sections');
  const responsiveStyles = document.getElementById('responsive-styles');
  if (responsiveSections) responsiveSections.remove();
  if (responsiveStyles) responsiveStyles.remove();
}