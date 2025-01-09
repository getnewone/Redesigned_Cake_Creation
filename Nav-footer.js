// Nav-footer.js

document.addEventListener("DOMContentLoaded", () => {

    
    createNavbar();
    createFooter();
    initializeNavbarEffects();
    initializeSearchBar();

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const footerSections = document.querySelectorAll('.footer-section');
    

   

    footerSections.forEach(section => {
        const title = section.querySelector('.bottom-text');
        const content = section.querySelector('ul');
        
        if (title && content) {
          title.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
              const isActive = section.classList.contains('active');
              
              // Close all other sections
              footerSections.forEach(s => {
                if (s !== section) {
                  s.classList.remove('active');
                  const c = s.querySelector('ul');
                  if (c) c.style.maxHeight = '0px';
                }
              });
    
              // Toggle current section
              section.classList.toggle('active');
              
              if (!isActive) {
                content.style.maxHeight = content.scrollHeight + 'px';
              } else {
                content.style.maxHeight = '0px';
              }
            }
          });
        }
      });

      const submenuTriggers = document.querySelectorAll('.mobile-menu-item.with-submenu');

      submenuTriggers.forEach(trigger => {
          trigger.addEventListener('click', (e) => {
              e.preventDefault();
              const container = trigger.closest('.mobile-submenu-container');
              
              submenuTriggers.forEach(otherTrigger => {
                  const otherContainer = otherTrigger.closest('.mobile-submenu-container');
                  if (otherContainer !== container) {
                      otherContainer.classList.remove('active');
                  }
              });
              
              container.classList.toggle('active');
          });
      });
      function toggleMobileMenu() {
        const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        mobileMenuToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    }

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on a menu item
    const menuItems = document.querySelectorAll('.mobile-menu-item, .mobile-submenu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('with-submenu')) {
                toggleMobileMenu();
            }
        });
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && mobileMenuOverlay.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

  });

function createNavbar() {

  
    
    const navbarHTML = `
            <div class="navbar-container">                                                                                                        
             <nav class="navbar">                                                                                                              
             <div class="mobile-menu-overlay">                                                                                                 
             <div class="mobile-menu-content">                                                                                                 
             <a href="corporate.html" class="mobile-menu-item">CORPORATE</a>     
    
  
    <div class="mobile-submenu-container">
        <a href="Cakes.html" class="mobile-menu-item with-submenu">CAKES</a>
        <div class="mobile-submenu">
            <a href="Cake_list.html?type=Simple" class="mobile-submenu-item">Simple Cakes</a>
            <a href="Cake_list.html?type=Heart" class="mobile-submenu-item">Heart Cakes</a>
            <a href="Custom_cake_gallery.html" class="mobile-submenu-item">Custom Cakes</a>
            <a href="Cake_list.html?type=Character" class="mobile-submenu-item">Character Cakes</a>
            <a href="Cake_list.html?type=Special" class="mobile-submenu-item">Speciality Cakes</a>
            <a href="Cake_list.html?type=Tubes" class="mobile-submenu-item">Cake Tubes</a>
            <a href="Cake_list.html?type=Mini" class="mobile-submenu-item">Mini Cakes</a>
        </div>
    </div>

    <div class="mobile-submenu-container">
    <a href="Cupcakes.html" class="mobile-menu-item with-submenu">CUPCAKES</a>
    <div class="mobile-submenu">
        <a href="Cupcake_list.html" class="mobile-submenu-item">Mini Cupcakes</a>
        <a href="Cupcake_list.html" class="mobile-submenu-item">Large Cupcakes</a>
    </div>
</div>

    <div class="mobile-submenu-container">
        <a href="Cookies.html" class="mobile-menu-item with-submenu">COOKIES</a>
        <div class="mobile-submenu">
            <a href="Cookie_list.html" class="mobile-submenu-item">Foundation Cookies</a>
            <a href="Cookie_list.html" class="mobile-submenu-item">Chunky Cookies</a>
        </div>
    </div>

    <a href="Macrons.html" class="mobile-menu-item">MACARONS</a>
    <a href="Custome_enquiry.html" class="mobile-menu-item">CUSTOM ENQUIRY</a>
    <a href="Contact.html" class="mobile-menu-item">CONTACT</a>
    <a href="https://shopify.com/authentication/22549307/login?client_id=92da460f-4eb8-462d-b5cc-0ff55176ae6a&locale=en&redirect_uri=https%3A%2F%2Fshopify.com%2Fauthentication%2F22549307%2Foauth%2Fauthorize%3Fclient_id%3D92da460f-4eb8-462d-b5cc-0ff55176ae6a%26locale%3Den%26nonce%3D7fde6569-c81f-4d24-ad33-a2d07c5c3dfe%26redirect_uri%3Dhttps%253A%252F%252Fshopify.com%252F22549307%252Faccount%252Fcallback%253Fsource%253Dcore%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3D01JE86B4W96B5KQAAYJHNHK7FF" class="mobile-menu-item sign-in">Sign In</a>
</div>
</div>
                <div class="nav-left">
                
                    <a href="Intro.html" class="nav-link">Home</a>
                    <div class="dropdown">
                        <a href="#" class="nav-link">Products</a>
                        <div class="dropdown-content">
                            <a href="Cakes.html">Cakes</a>
                            <a href="Cupcakes.html">Cupcakes</a>
                            <a href="Macrons.html">Macarons</a>
                            <a href="Cookies.html">Cookies</a>
                        </div>
                    </div>
                    <a href="corporate.html" class="nav-link">Corporate</a>
                </div>
                <a href="Intro.html" class="logo-container">
                    <img src="Images/logo.webp" class="logo" alt="Logo">
                    <span class="hover-text">CCBK</span>
                </a>
                <div class="nav-right">
                    <a href="Contact.html" class="nav-link">Contact US</a>
                    <a href="Custome_enquiry.html" class="nav-link">Custom Enquiry</a>
                    <span class="icon"> <a href="https://shopify.com/authentication/22549307/login?client_id=92da460f-4eb8-462d-b5cc-0ff55176ae6a&locale=en&redirect_uri=https%3A%2F%2Fshopify.com%2Fauthentication%2F22549307%2Foauth%2Fauthorize%3Fclient_id%3D92da460f-4eb8-462d-b5cc-0ff55176ae6a%26locale%3Den%26nonce%3D7fde6569-c81f-4d24-ad33-a2d07c5c3dfe%26redirect_uri%3Dhttps%253A%252F%252Fshopify.com%252F22549307%252Faccount%252Fcallback%253Fsource%253Dcore%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3D01JE86B4W96B5KQAAYJHNHK7FF" > <i class="fa fa-user"></i> </a> </span>
                    <span class="icon search-icon"> <i class="fa fa-search"></i> </span>
                   <span class="icon cart-icon" onclick="window.location.href='cart.html'"><i class="fa fa-shopping-cart"></i><span class="cart-counter">0</span></span>
                </div>
                <button class="mobile-menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                    </button>
            </nav>
        </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
}
function initializeSearchBar() {
  const searchIcon = document.querySelector('.search-icon');
  const navbar = document.querySelector('.navbar');
  
  // Create search bar element
  const searchBar = document.createElement('div');
  searchBar.classList.add('search-bar');
  searchBar.innerHTML = `
    <input type="text" placeholder="Search..." class="search-input">
    <button class="search-button">
      <i class="fa fa-search"></i>
    </button>
  `;
  
  // Insert search bar after navbar
  navbar.parentNode.insertBefore(searchBar, navbar.nextSibling);
  
  // Toggle search bar visibility
  searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
      searchBar.querySelector('.search-input').focus();
    }
  });
  
  // Close search bar when clicking outside
  document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
      searchBar.classList.remove('active');
    }
  });
}








function createFooter() {
    const footerHTML = `
    <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="bottom-text">INFORMATION</h3>
        <ul>
          <li><a href="Our_story.html">Our Story</a></li>
          <li><a href="Wholesale.html">Wholesale</a></li>
          <li><a href="Refund.html">Refund Policy</a></li>
          <li><a href="Privacy.html">Privacy Policy</a></li>
          <li><a href="T_C.html">Terms & Conditions</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="bottom-text">SUPPORT</h3>
        <ul>
          <li><a href="Custome_enquiry.html">Custom Enquiry</a></li>
          <li><a href="Contact.html">Contact US</a></li>
          <li><a href="corporate.html">Corporate</a></li>
          <li><a href="Delivery.html">Delivery</a></li>
          <li><a href="https://shopify.com/authentication/22549307/login?client_id=92da460f-4eb8-462d-b5cc-0ff55176ae6a&locale=en&redirect_uri=https%3A%2F%2Fshopify.com%2Fauthentication%2F22549307%2Foauth%2Fauthorize%3Fclient_id%3D92da460f-4eb8-462d-b5cc-0ff55176ae6a%26locale%3Den%26nonce%3D7fde6569-c81f-4d24-ad33-a2d07c5c3dfe%26redirect_uri%3Dhttps%253A%252F%252Fshopify.com%252F22549307%252Faccount%252Fcallback%253Fsource%253Dcore%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3D01JE86B4W96B5KQAAYJHNHK7FF">Login/Register</a></li>
          <li><a href="cart.html">Cart</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="bottom-text">PRODUCTS</h3>
        <ul>
          <li><a href="#">Sizing Chart</a></li>
          <li><a href="Cupcakes.html">Cupcakes</a></li>
          <li><a href="Cakes.html">Cakes</a></li>
          <li><a href="Macarons.html">Macarons</a></li>
          <li><a href="Cookies.html">Cookies</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="bottom-text-icon">STAY CONNECTED</h3>
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fa fa-facebook"></i></a>
          <a href="#" class="social-icon"><i class="fa fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fa fa-youtube"></i></a>
          <a href="#" class="social-icon"><i class="fa-brands fa-tiktok"></i></a>
        </div>
        <h3 class="bottom-form-text">SIGN UP FOR OUR NEWSLETTER</h3>
        <form class="newsletter-form">
          <input type="email" placeholder="enter your email address" required>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Cake Creations by Kate. All Rights Reserved.</p>
      <p>Proudly Australian Owned & Operated.</p>
      <div class="payment-icons">
        <img src="Images/Social_Icons/kisspng-logo-visa-credit-card-wordmark-atm-card-afghan-victory-day-5b56044eafa623.7236575015323638547195.png" alt="Visa">
        <img src="Images/Social_Icons/5c06c331d802e115c4f41577cf477ba0 copy.png" alt="Mastercard">
        <img src="Images/Social_Icons/images.png" alt="American Express">
        <img src="Images/Social_Icons/Unknown.png" alt="PayID">
      </div>
    </div>
  </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function initializeNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    const logoContainer = document.querySelector('.logo-container');
    const navLinks = document.querySelectorAll('.nav-link');

    function handleScroll() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            logoContainer.classList.add('scrolled');
            navLinks.forEach(link => link.classList.add('scrolled'));
        } else {
            navbar.classList.remove('scrolled');
            logoContainer.classList.remove('scrolled');
            navLinks.forEach(link => link.classList.remove('scrolled'));
        }
    }

    // Initial check
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Add event listeners for product links
    const productLinks = document.querySelectorAll(".dropdown-content a");
    const productsLink = document.querySelector(".nav-link[href='#']");

    productLinks.forEach(link => {
        link.addEventListener("click", handleProductLinkClick);
    });

    if (productsLink) {
        productsLink.addEventListener("click", handleProductsLinkClick);
    }
}

function handleProductLinkClick(event) {
    event.preventDefault();
    const product = event.target.textContent.trim();
    const isMainPage = window.location.pathname.includes("Intro.html");

    if (isMainPage) {
        const section = document.querySelector(`.${product}`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        window.location.href = `Intro.html#${product}`;
    }
}

function handleProductsLinkClick(event) {
    event.preventDefault();
    const isMainPage = window.location.pathname.includes("Intro.html");

    if (isMainPage) {
        const menuSection = document.querySelector(".menu");
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        window.location.href = `Intro.html#menu`;
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
      link.classList.add('active');
  }
});

document.querySelector('.menu-icon').addEventListener('click', function() {
  this.classList.toggle('change');
});

