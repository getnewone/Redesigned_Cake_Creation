// Intro.js

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    function scrollToHashSection() {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1); // Remove the '#' character
            const section = document.querySelector(`.${hash}`);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth" });
                }, 100); // Small delay to ensure the page is fully loaded
            }
        }
    }


    // Call the function when the page loads
    scrollToHashSection();

    // Zoom-out effect applied to the whole .animation section
    gsap.from(".animation", {
        scale: 2,
        duration: 3,
        scrollTrigger: {
            trigger: ".animation",
            pin: true,
            end: `+=${innerHeight * 0.6}`,
            scrub: 1
        }
    });

    gsap.from(".menu-items li", {
        opacity: 0.2,
        duration: 1.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".menu-items",   
            start: "10% 80%",         
            end: "bottom 60%",        
            scrub: true
        }
    });

    // Control horizontal scrolling animation with ScrollTrigger
    gsap.to(".animation h2", {
        xPercent: -100,
        repeat: -1,
        ease: "none",
        duration: 10,
        paused: true,
        scrollTrigger: {
            trigger: ".animation",
            start: "top top",
            scrub: true,
            onEnter: () => gsap.globalTimeline.resume(),
            onLeaveBack: () => gsap.globalTimeline.pause()
        }
    });

    // Animate the height of text_effect_scroll
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".main",
            start: "0% 50%",
            end: "80% 10%",
            scrub: 1
        }
    });

    tl.to(".text_effect_scroll", {
        width: "100%",
    });

    // Ensure the text is properly formatted, not overflowing, and has enough spacing
    // document.querySelectorAll('.description').forEach(function (desc) {
    //     const words = desc.textContent.split(' ');
    //     desc.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
    // });

    // // Add hover effect to words in description (move on X-axis)
    // document.querySelectorAll('.description').forEach(function (desc) {
    //     const words = desc.querySelectorAll('span');
    //     words.forEach(word => {
    //         word.addEventListener("mouseenter", function() {
    //             word.style.transform = "translateX(10px)";
    //         });

    //         word.addEventListener("mouseleave", function() {
    //             word.style.transform = "translateX(0px)";
    //         });
    //     });
    // });

    const menuItems = {
        'Cakes': [
            'Images/Cakes/Simple_Cake1.png.webp',
            'Images/Heart_cakes/Heart_cakes.png.webp',
            'https://cakecreationsbykate.com.au/cdn/shop/products/IMG_05322.jpg?v=1710204162',
            'https://cakecreationsbykate.com.au/cdn/shop/files/12_2e1a8d55-4044-49df-9b2e-e74038fa2f95.png?v=1710205867',
            'https://cakecreationsbykate.com.au/cdn/shop/files/CakeTubPhotos_1.png?v=1720058206',
            'Images/Cakes/Simple_Cake2.png.webp',
            'https://cakecreationsbykate.com.au/cdn/shop/files/6_ee33cee8-e013-4e2f-994b-efe8bd5a4617.png?v=1710205644',
            'Images/Cakes/Simple_Cake3.png.webp',
            'https://cakecreationsbykate.com.au/cdn/shop/products/IMG_4627.jpg?v=1710210753',
            'Images/Heart_cakes/Heart_cakes2.png.webp',
            'https://cakecreationsbykate.com.au/cdn/shop/files/20240814_043633284_iOS.heic?v=1723943935',
            'Images/Cakes/Simple_Cake5.png.webp',
            'Images/Heart_cakes/Heart_cakes5.png.webp',
            'Images/Cakes/Simple_Cake6.png.webp'
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

    let currentInterval;
    let currentIndex = 0;

    function changeImage(item) {
        const itemName = item.getAttribute('data-item');
        const images = menuItems[itemName];
        const imgElement = document.querySelector(`img[data-item="${itemName}"]`);

        if (!imgElement || !images || images.length === 0) return;

        clearInterval(currentInterval);
        currentIndex = 0;

        function updateImage() {
            imgElement.src = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        }

        updateImage();
        imgElement.style.opacity = '1';
        
        if (images.length > 1) {
            currentInterval = setInterval(updateImage, 1000);
        }
    }

    const menuOptions = document.querySelectorAll('.menu-items li');
    const menuImages = document.querySelectorAll('.menu-image');

    menuOptions.forEach(item => {
        item.addEventListener("mouseenter", () => {
            menuImages.forEach(img => img.style.opacity = '0');
            changeImage(item);
        });

        item.addEventListener("mouseleave", () => {
            clearInterval(currentInterval);
            menuImages.forEach(img => img.style.opacity = '0');
        });
    });

    // Show default image (first cake) on page load
    const defaultImage = document.querySelector('img[data-item="Cakes"]');
    if (defaultImage) {
        defaultImage.src = menuItems['Cakes'][0];
        defaultImage.style.opacity = '1';
    }
});

const cakeProduct = document.querySelector('.cake-product');
const cakeImages = document.querySelector('.cake-images');
const cakeOverlay = document.querySelector('.cake-overlay');

if (cakeProduct && cakeImages && cakeOverlay) {
    cakeProduct.addEventListener('mouseenter', function() {
        cakeImages.style.transform = 'translateX(-33.33%)';
        cakeOverlay.style.opacity = '0';
    });

    cakeProduct.addEventListener('mouseleave', function() {
        cakeImages.style.transform = 'translateX(0)';
        cakeOverlay.style.opacity = '1';
    });
}

