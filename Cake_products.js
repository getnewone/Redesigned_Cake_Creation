// Define an array of cake products
const cakeProducts = [
    {
        id: "colorfulDessertCake",
        title: "Create Your Own Colourful Dessert Cake",
        image: "Images/Cakes/Simple_Cake1.png.webp",
        type: "cake",
        productCategory: "standard",
        price: 90.00,
        description: "This cake is loved by all who doesn't love a bright and fun cake!",
        customizationInstructions: "Start by choosing your personal favourite cake flavour, what colour icing you would like, then you can even choose your favourite colour sprinkles and drip drip.",
        occasionSuggestions: "This is always a crowd pleasure - simply leave it as is, or add your own touch happy, toy or themed topper! Perfect for birthdays, anniversaries, weddings, corporate events, or any party or special occasion!",
        orderNotice: "This cake usually requires a minimum of 3 days' notice however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 4.9,
        reviews: 29,
        
        customizationOptions: [
            { name: "flavour", label: "Cake Flavour", type: "select", choices: ["Vanilla", "Chocolate Mud"] },
            { name: "icingColor", label: "Colour of Icing", type: "input", placeholder: "No dark or metallic buttercream", maxlength:20 },
            { name: "dripColor", label: "Colour of Drip Icing", type: "input", maxlength:20 },
            { name: "Sprinkles", label: "Colour of Sprinkles", type: "input", maxlength:20 },
            
        ],
        reviewDetails: {
            5: 26,
            4: 2,
            3: 1,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Kruti C.",
                verified: true,
                rating: 5,
                date: "22 July 2024",
                text: "It was my first time for cake as we love cupcakes made by them. But cake was really good and very tasty. Definitely come back again for cake. Amazing design and nice flavour. Very happy.",
                helpful: { yes: 0, no: 0 }
            },
            {
                name: "Kruti C.",
                verified: true,
                rating: 5,
                date: "22 July 2024",
                text: "It was my first time for cake as we love cupcakes made by them. But cake was really good and very tasty. Definitely come back again for cake. Amazing design and nice flavour. Very happy.",
                helpful: { yes: 0, no: 0 }
            },
            // Add more reviews here
        ]
    },
    {
        id: "simpleButtercreamCake",
        title: "Chocolate Lovers Buttercream Simple Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/19.png?v=1652849460",
        type: "cake",
        productCategory: "standard",
        description: "This one is for all the chocoholics out there! ",
        customizationInstructions: "This set design features a mix of chocolate and vanilla buttercream, with a chocolate drip and an assortment of chocolate treats. This cake is available in vanilla or chocolate mud.",
        occasionSuggestions: "This cake is perfect for any gathering, such as birthdays, baby showers, anniversaries or just to eat some cake!",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 4.8,
        reviews: 25,
        sizes: [
            { size: "5 Inch (6-8 Serves)", price: 80.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/19.png?v=1652849460" },
            { size: "6 Inch (10-12 Serves)", price: 110.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/20.png?v=1652849460" },
            { size: "7 Inch (16-18 Serves)", price: 140.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/21.png?v=1652849460" },
            { size: "8 Inch (24-26 Serves)", price: 170.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/22.png?v=1652849460" },
        ],
        customizationOptions: [
            { name: "flavour", label: "Cake Flavour", type: "select", choices: ["Vanilla", "Chocolate Mud"] },
            { name: "size", label: "Size", type: "select", choices: ["5 Inch (6-8 Serves)", "6 Inch (10-12 Serves)", "7 Inch (16-18 Serves)", "8 Inch (24-26 Serves)"] },
        ],
        reviewDetails: {
            5: 22,
            4: 2,
            3: 1,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Sarah M.",
                verified: true,
                rating: 5,
                date: "15 July 2024",
                text: "Absolutely delicious! The chocolate flavor was rich and the buttercream was perfectly smooth. Will definitely order again!",
                helpful: { yes: 2, no: 0 }
            },
            
        ]
    },
    {
        id: "peachwhitebuttercream",
        title: "Peach And White Buttercream Simple Cake ",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/1.png?v=1652850615",
        type: "cake",
        productCategory: "standard",
        description: "This pastel peach and white cake is just adorable! ",
        customizationInstructions:"This set design features peach and white buttercream, gold and white sprinkles and buttercream crown.",
        occasionSuggestions: "This cake is perfect for any gathering, such as birthdays, baby showers, anniversaries or just to eat some cake!",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 5.0,
        reviews: 11,

        sizes: [
            { size: "5 Inch (6-8 Serves)", price: 80.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/1.png?v=1652850615" },
            { size: "6 Inch (10-12 Serves)", price: 110.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/2.png?v=1652850615" },
            { size: "7 Inch (16-18 Serves)", price: 140.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/3.png?v=1652850615" },
            { size: "8 Inch (24-26 Serves)", price: 170.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/4.png?v=1652850615" },
        ],
        customizationOptions: [
            { name: "flavour", label: "Cake Flavour", type: "select", choices: ["Vanilla", "Chocolate Mud"] },
            { name: "size", label: "Size", type: "select", choices: ["5 Inch (6-8 Serves)", "6 Inch (10-12 Serves)", "7 Inch (16-18 Serves)", "8 Inch (24-26 Serves)"] },
        ],
        reviewDetails: {
            5: 11,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Ilsa C.",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "Always happy with the beautiful cakes Kate and her team create! This one tasted delicious and was enjoyed by all members of my family for my Mums 80th!",
                helpful: { yes: 0, no: 0 }
            },
            {
                name: "Melissa G..",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "I ordered this cake months ago and I didn't have to chase anything communication was there. The cake was absolutely delicious so moist and tasted great. Thank you for a great experience.",
                helpful: { yes: 0, no: 0 }
            },
            {
                name: "Melissa G..",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "I ordered this cake months ago and I didn't have to chase anything communication was there. The cake was absolutely delicious so moist and tasted great. Thank you for a great experience.",
                helpful: { yes: 0, no: 0 }
            },
            // Add more reviews here
        ]
    },
    {
        id: "blueconfettibuttercream",
        title: "Blue Confetti Buttercream Simple Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/67.png?v=1652848784",
        type: "cake",
        productCategory: "standard",
        description: "This fun cake is the perfect dessert to add a pop of colour to your party! ",
        customizationInstructions:"This set design features blue buttercream, with a blue chocolate drip, rainbow sprinkles and buttercream crown. This cake is available in vanilla or chocolate mud.",
        occasionSuggestions: "This delicious treat is perfect for any gathering, such as birthdays, baby showers, anniversaries or just to eat some cake!",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 5.0,
        reviews: 7,
        sizes: [
            { size: "5 Inch (6-8 Serves)", price: 80.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/67.png?v=1652848784" },
            { size: "6 Inch (10-12 Serves)", price: 110.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/68.png?v=1652848784" },
            { size: "7 Inch (16-18 Serves)", price: 140.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/69.png?v=1652848784" },
            { size: "8 Inch (24-26 Serves)", price: 170.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/70.png?v=1652848784" },
        ],
        customizationOptions: [
            { name: "flavour", label: "Cake Flavour", type: "select", choices: ["Vanilla", "Chocolate Mud"] },
            { name: "size", label: "Size", type: "select", choices: ["5 Inch (6-8 Serves)", "6 Inch (10-12 Serves)", "7 Inch (16-18 Serves)", "8 Inch (24-26 Serves)"] },
        ],
        reviewDetails: {
            5: 7,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Ilsa C.",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "Always happy with the beautiful cakes Kate and her team create! This one tasted delicious and was enjoyed by all members of my family for my Mums 80th!",
                helpful: { yes: 0, no: 0 }
            },
            {
                name: "Melissa G..",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "I ordered this cake months ago and I didn't have to chase anything communication was there. The cake was absolutely delicious so moist and tasted great. Thank you for a great experience.",
                helpful: { yes: 0, no: 0 }
            },
            {
                name: "Melissa G..",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "I ordered this cake months ago and I didn't have to chase anything communication was there. The cake was absolutely delicious so moist and tasted great. Thank you for a great experience.",
                helpful: { yes: 0, no: 0 }
            },
            // Add more reviews here
        ]
    },
    {
        id: "genderRevealButtercream",
        title: "Gender Reveal Buttercream Simple Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/55.png?v=1652315157",
        type: "cake",
        productCategory: "standard",
        description: "You can celebrate your little bundle of joy with this simply adorable baby shower cake, or this cake is the perfect pastel beauty for any birthday celebration. ",
        customizationInstructions:"This set design features white buttercream, with a white chocolate drip, pastel pink and blue sprinkles and buttercream crown. This cake is available in vanilla or chocolate mud.",
        Note: "Turn this cake into a gender reveal cake, by adding buttercream baby pink or baby blue icing filling for an additional $10. Plus, if you'd like to keep it a surprise, please let our staff know so we can process it accordingly.",
        occasionSuggestions: "This cake is perfect for much more than just a baby shower, such as birthdays, anniversaries or just to eat some cake!",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 5.0,
        reviews: 7,
        sizes: [
            { size: "5 Inch (6-8 Serves)", price: 80.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/55.png?v=1652315157" },
            { size: "6 Inch (10-12 Serves)", price: 110.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/56.png?v=1652315157" },
            { size: "7 Inch (16-18 Serves)", price: 140.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/57.png?v=1652315157" },
            { size: "8 Inch (24-26 Serves)", price: 170.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/58.png?v=1652315157" },
        ],
        customizationOptions: [
            { 
                name: "size", 
                label: "Size", 
                type: "select", 
                choices: ["5 Inch (6-8 Serves)", "6 Inch (10-12 Serves)", "7 Inch (16-18 Serves)", "8 Inch (24-26 Serves)"] 
            },
            {
                name: "fillingColor",
                label: "Buttercream Filling Colour (only visible upon cutting cake)",
                type: "radio",
                choices: [
                    { value: "white", label: "White", price: 0 },
                    { value: "babyBlue", label: "Baby Blue (visible on your receipt)", price: 10 },
                    { value: "babyPink", label: "Baby Pink (visible on your receipt)", price: 10 }
                ],
                note: "To be kept a secret! (STAFF - ONLY USE TIMELINE NOTES)"
            },
            { 
                name: "flavour", 
                label: "Cake Flavour", 
                type: "select", 
                choices: ["Vanilla", "Chocolate Mud"] 
            }
        ],
        reviewDetails: {
            5: 7,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Ilsa C.",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "Always happy with the beautiful cakes Kate and her team create! This one tasted delicious and was enjoyed by all members of my family for my Mums 80th!",
                helpful: { yes: 0, no: 0 }
            },
            {
                name: "Melissa G..",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "I ordered this cake months ago and I didn't have to chase anything communication was there. The cake was absolutely delicious so moist and tasted great. Thank you for a great experience.",
                helpful: { yes: 0, no: 0 }
            },
            {
                name: "Melissa G..",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "I ordered this cake months ago and I didn't have to chase anything communication was there. The cake was absolutely delicious so moist and tasted great. Thank you for a great experience.",
                helpful: { yes: 0, no: 0 }
            },
            // Add more reviews here
        ]
    },

    //Heart-cakes IDs:
    {
        id: "PinkOrangeHeartCake",
        title: "Pink and Orange Heart Shaped Speciality Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/files/6_993a3976-73f4-471c-b159-97af6670f612.png?v=1710203780",
        type: "cake",
        productCategory: "standard",
        description: "This beautiful cake has two rows of pink and orange coloured buttercream piping in a love heart shape. ",
        customizationInstructions:"Made with layers of mud cake and fresh buttercream filling with vintage piped borders. Customise your cake with handmade pink fondant writing on top of the cake.",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 5.0,
        reviews: 7,
        sizes: [
            
            { size: "6 Inch (12 Serves)", price: 185.00, image: "https://cakecreationsbykate.com.au/cdn/shop/files/6_993a3976-73f4-471c-b159-97af6670f612.png?v=1710203780" },
            { size: "8 Inch (24 Serves)", price: 245.00, image: "https://cakecreationsbykate.com.au/cdn/shop/files/6_993a3976-73f4-471c-b159-97af6670f612.png?v=1710203780" },
        ],
        customizationOptions: [
            { 
                name: "size", 
                label: "Size", 
                type: "select", 
                choices: [ "6 Inch (12 Serves)", "8 Inch (24 Serves)"] 
            },
           
            { 
                name: "flavour", 
                label: "Cake Flavour", 
                type: "select", 
                choices: ["Vanilla", "Chocolate Mud", "Caremal mud", "Marble (Chocolate & Vanilla Swirl)", "White Chocolate Raspberry"] 
            },

            { 
                name: "line1", 
                label: "Writing on Top of Cake - Line 1 ", 
                type: "input", 
                placeholder: "HBD" ,
                tooltip: "maximum 6 characters",
                maxlength: 6
            },

            { 
                name: "line2", 
                label: "Writing on Top of Cake - Line 2 ", 
                type: "input", 
                placeholder: "JULIE" ,
                tooltip: "maximum 5 characters",
                maxlength: 5
            },

        ],
        reviewDetails: {
            5: 7,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Ilsa C.",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "Always happy with the beautiful cakes Kate and her team create! This one tasted delicious and was enjoyed by all members of my family for my Mums 80th!",
                helpful: { yes: 0, no: 0 }
            },
            {
                name: "Male",
                verified: true,
                rating: 5,
                date: "23 June 2024",
                text: "I ordered this cake months ago and I didn't have to chase anything communication was there. The cake was absolutely delicious so moist and tasted great. Thank you for a great experience.",
                helpful: { yes: 0, no: 0 }
            },
           
            // Add more reviews here
        ]
    },
    {
        id: "SimpleLoveHeartCake",
        title: "Simple Love Heart Shaped Speciality Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/files/5_e507b4f1-67ad-4072-bea9-8563fb50c201.png?v=1710203583",
        type: "cake",
        productCategory: "standard",
        description: "This beautiful cake is your choice of buttercream colours in a love heart shape. ",
        customizationInstructions:"Made with layers of mud cake and fresh buttercream filling with a single piped border around the top and base. Customise your cake with hand written text on top of the cake.",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 5.0,
        reviews: 2,
        sizes: [
            
            { size: "6 Inch (12 Serves)", price: 175.00, image: "https://cakecreationsbykate.com.au/cdn/shop/files/5_e507b4f1-67ad-4072-bea9-8563fb50c201.png?v=1710203583" },
            { size: "8 Inch (24 Serves)", price: 235.00, image: "https://cakecreationsbykate.com.au/cdn/shop/files/5_e507b4f1-67ad-4072-bea9-8563fb50c201.png?v=1710203583" },
        ],
        customizationOptions: [
            { 
                name: "size", 
                label: "Size", 
                type: "select", 
                choices: [ "6 Inch (12 Serves)", "8 Inch (24 Serves)"] 
            },
           
            { 
                name: "flavour", 
                label: "Cake Flavour", 
                type: "select", 
                choices: ["Vanilla", "Chocolate Mud", "Caremal mud", "Marble (Chocolate & Vanilla Swirl)", "White Chocolate Raspberry"] 
            },

            { 
                name: "line1", 
                label: "Writing on Top of Cake - Line 1 ", 
                type: "input", 
                placeholder: "HBD" ,
                tooltip: "maximum 6 characters" ,
                maxlength: 6
            },

            { 
                name: "line2", 
                label: "Writing on Top of Cake - Line 2 ", 
                type: "input", 
                placeholder: "JULIE" ,
                tooltip: "maximum 5 characters",
                maxlength: 5
            },

            {
               name: "Buttercream Colour Scheme",
               label: "Buttercream Colour Scheme (no dark or metallic colours) ",
               type: "input",
               placeholder: "White",
               tooltip: "Only one colour",
               maxlength: 10

            }
        ],
        reviewDetails: {
            5: 2,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Ijabel J.",
                verified: true,
                rating: 5,
                date: "02 January 2024",
                text: "lovely testy cake. we will order again",
                helpful: { yes: 0, no: 0 }
            },
            
           
            // Add more reviews here
        ]
    },


    // Speciality cakes: 
    {
        id: "chocgalorespecialcake",
        title: "Chocolate Galore Speciality Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_2107.jpg?v=1710207701",
        type: "cake",
        productCategory: "standard",
        description: "You just cannot have too much chocolate with this Chocolate Galore Speciality Cake.",
        customizationInstructions:"Completed with layers of creamy vanilla buttercream and topped with an assortment of chocolate treats. Perfect for birthdays and any child celebration. Also suitable for any special occasion with the customisable card topper.",
        occasionSuggestions:"This cake includes our custom card topper. If you'd like to upgrade to an acrylic cake topper for an additional $13 as shown in the photo, please contact our team.",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 5.0,
        reviews: 8,
        sizes: [
            
            { size: "6 Inch (8-10 Serves)", price: 210.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_2107.jpg?v=1710207701" },
            { size: "7 Inch (15 Serves)", price: 240.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_2107.jpg?v=1710207701" },
            { size: "8 Inch (24 Serves)", price: 270.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_2107.jpg?v=1710207701" },
            { size: "9 Inch (30-35 Serves)", price: 300.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_2107.jpg?v=1710207701" },
            { size: "10 Inch (35-40 Serves)", price: 330.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_2107.jpg?v=1710207701" },
        ],
        customizationOptions: [
            { 
                name: "size", 
                label: "Size", 
                type: "select", 
                choices: [ "6 Inch (8-10 Serves)", "7 Inch (15 Serves)", "8 Inch (24 Serves)","9 Inch (30-35 Serves)", "10 Inch (35-40 Serves)" ] 
            },
           
            { 
                name: "Flavour", 
                label: "Cake Flavour", 
                type: "select", 
                choices: ["Vanilla", "Chocolate Mud", "Caremal mud", "Marble (Chocolate & Vanilla Swirl)", "White Chocolate Raspberry"] 
            },

            { 
                name: "Text", 
                label: "Card Topper Text ", 
                type: "input", 
                placeholder: "Happy Birthday Saffron" ,
                tooltip: "For numbers , enter age. Maximum 25 characters",
                maxlength: 25
            },

             { 
                name: "Card Text Colour", 
                label: "Card Topper Text Colour (Same Colour Options as Swatches Below)", 
                type: "select", 
                choices: ["Gold Glitter", "Silver Glitter", "Rose Gold Glitter", "Pastel Pink", "Pastel Blue", "Pastel Purple", "Pastel Yellow", "Pastel Green", "METALLIC Black", "METALLIC Silver", "METALLIC Rose Gold", "METALLIC Gold", "METALLIC Pink", "METALLIC Purple", "METALLIC Blue", "GLITTER Gold", "GLITTER Pink", "GLITTER Purple", "GLITTER Blue", "GLITTER Green", "PLAIN White", "PLAIN Navy", "PLAIN Blue", "PLAIN Hot Pink", "PLAIN Baby Pink", "PLAIN Purple", "PLAIN Orange", "PLAIN Red", "PLAIN Brown", "PLAIN Green", "PLAIN Black"],
                tooltip: "ensure you select different colour to background" 
            },
            { 
                name: "Card BG Colour", 
                label: "Card Topper Background Colour (Click on Colour Swatch)", 
                type: "color-swatch", 
                choices: ["Gold", "Silver", "Rose Gold", "Gold Glitter", "Silver Glitter", "Rose Gold Glitter", "Pastel Pink", "Pastel Blue", "Pastel Purple", "Pastel Yellow", "Pastel Green"] ,
                tooltip: "ensure you select different colour to text" 
            }

           
        ],
        reviewDetails: {
            5: 8,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Ilsa C.",
                verified: true,
                rating: 5,
                date: "09 July 2024",
                text: "Always happy with the beautiful cakes Kate and her team create! This one tasted delicious and was enjoyed by all members of my family for my Mums 80th!",
                helpful: { yes: 0, no: 0 }
            },
            {
                name: "Male",
                verified: true,
                rating: 5,
                date: "23 June 2024",
                text: "I ordered this cake months ago and I didn't have to chase anything communication was there. The cake was absolutely delicious so moist and tasted great. Thank you for a great experience.",
                helpful: { yes: 0, no: 0 }
            },
           
            // Add more reviews here
        ]
    },
    {
        id: "conepurplepinkspecialcake",
        title: "Ice Cream Cone Purple and Pink Buttercream Speciality Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0026.jpg?v=1710208927",
        type: "cake",
        productCategory: "standard",
        description: "Perfect for children and children at heart! This cute and colourful cake will surely be a party favourite.",
        customizationInstructions:"Completed with layers of creamy vanilla buttercream and decorated with an ice cream cone, vanilla rainbow macarons and rainbow sprinkles! ",
        occasionSuggestions:"Perfect for birthdays and baby showers - any kid or child celebration. Also suitable for any special occasion.",
        Note: "This cake includes our custom card topper. If you'd like to upgrade to an acrylic cake topper for an additional $13 as shown in the photo, please contact our team.",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 5.0,
        reviews: 3,
        sizes: [
            
            { size: "6 Inch (8-10 Serves)", price: 203.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0026.jpg?v=1710208927" },
            { size: "7 Inch (15 Serves)", price: 233.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0026.jpg?v=1710208927" },
            { size: "8 Inch (24 Serves)", price: 263.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0026.jpg?v=1710208927" },
            { size: "9 Inch (30-35 Serves)", price: 393.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0026.jpg?v=1710208927" },
            { size: "10 Inch (35-40 Serves)", price: 323.00, image: "https://cakecreationsbykate.com.au/cdn/shop/products/IMG_0026.jpg?v=1710208927" },
        ],
        customizationOptions: [
            { 
                name: "size", 
                label: "Size", 
                type: "select", 
                choices: [ "6 Inch (8-10 Serves)", "7 Inch (15 Serves)", "8 Inch (24 Serves)","9 Inch (30-35 Serves)", "10 Inch (35-40 Serves)" ] 
            },
           
            { 
                name: "Flavour", 
                label: "Cake Flavour", 
                type: "select", 
                choices: ["Vanilla", "Chocolate Mud", "Caremal mud", "Marble (Chocolate & Vanilla Swirl)", "White Chocolate Raspberry"] 
            },

            { 
                name: "Text", 
                label: "Card Topper Text ", 
                type: "input", 
                placeholder: "Happy Birthday Saffron" ,
                tooltip: "For numbers , enter age. Maximum 25 characters",
                maxlength: 25
            },

             { 
                name: "Card Text Colour", 
                label: "Card Topper Text Colour (Same Colour Options as Swatches Below)", 
                type: "select", 
                choices: ["Gold Glitter", "Silver Glitter", "Rose Gold Glitter", "Pastel Pink", "Pastel Blue", "Pastel Purple", "Pastel Yellow", "Pastel Green", "METALLIC Black", "METALLIC Silver", "METALLIC Rose Gold", "METALLIC Gold", "METALLIC Pink", "METALLIC Purple", "METALLIC Blue", "GLITTER Gold", "GLITTER Pink", "GLITTER Purple", "GLITTER Blue", "GLITTER Green", "PLAIN White", "PLAIN Navy", "PLAIN Blue", "PLAIN Hot Pink", "PLAIN Baby Pink", "PLAIN Purple", "PLAIN Orange", "PLAIN Red", "PLAIN Brown", "PLAIN Green", "PLAIN Black"],
                tooltip: "ensure you select different colour to background" 
            },
            { 
                name: "Card BG Colour", 
                label: "Card Topper Background Colour (Click on Colour Swatch)", 
                type: "color-swatch", 
                choices: ["Gold", "Silver", "Rose Gold", "Gold Glitter", "Silver Glitter", "Rose Gold Glitter", "Pastel Pink", "Pastel Blue", "Pastel Purple", "Pastel Yellow", "Pastel Green"] ,
                tooltip: "ensure you select different colour to text" 
            }

           
        ],
        reviewDetails: {
            5: 3,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Christian G.",
                verified: true,
                rating: 5,
                date: "07 May 2023",
                text: "A fantastic cake. love it",
                helpful: { yes: 0, no: 0 }
            },
            
           
            // Add more reviews here
        ]
    },
    {
        id: "sportyBasketballSpecialityCake",
        title: "Sporty Basketball Speciality Cake",
        image: "https://cakecreationsbykate.com.au/cdn/shop/files/cakebball.jpg?v=1710208370",
        type: "cake",
        productCategory: "standard",
        description: "For all the basketball lovers out there!",
        customizationInstructions:"Made with layers of mud cake and fresh buttercream filling with orange and white layered buttercream icing. Topped off with cool basketball themed images and mini chocolate blocks. ",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 0.0,
        reviews: 0,
        sizes: [
            
            { size: "6 Inch (8-10 Serves)", price: 205.00, image: "https://cakecreationsbykate.com.au/cdn/shop/files/cakebball.jpg?v=1710208370" },
            { size: "7 Inch (15 Serves)", price: 235.00, image: "https://cakecreationsbykate.com.au/cdn/shop/files/cakebball.jpg?v=1710208370" },
            { size: "8 Inch (24 Serves)", price: 265.00, image: "https://cakecreationsbykate.com.au/cdn/shop/files/cakebball.jpg?v=1710208370" },
            { size: "9 Inch (30-35 Serves)", price: 295.00, image: "https://cakecreationsbykate.com.au/cdn/shop/files/cakebball.jpg?v=1710208370" },
           
        ],
        customizationOptions: [
            { 
                name: "size", 
                label: "Size", 
                type: "select", 
                choices: [ "6 Inch (8-10 Serves)", "7 Inch (15 Serves)", "8 Inch (24 Serves)","9 Inch (30-35 Serves)" ] 
            },
           
            { 
                name: "Flavour", 
                label: "Cake Flavour", 
                type: "select", 
                choices: ["Vanilla", "Chocolate Mud", "Caremal mud", "Marble (Chocolate & Vanilla Swirl)", "White Chocolate Raspberry"] 
            },

            { 
                name: "Number on Top of Cake", 
                label: "Number on Top of Cake ", 
                type: "input", 
                placeholder: "ex. 16" ,
                tooltip: "Maximum 2 digits",
                maxlength: 2
            },

            

           
        ],
        reviewDetails: {
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Christian G.",
                verified: true,
                rating: 5,
                date: "07 May 2023",
                text: "A fantastic cake. love it",
                helpful: { yes: 0, no: 0 }
            },
            
           
            // Add more reviews here
        ]
    },

// Add Cake Tubes

    {
        id: "tubeBiscoff",
        title: "Biscoff Mini Cake Tub",
        image: "https://cakecreationsbykate.com.au/cdn/shop/files/20240814_043702332_iOS.heic?v=1723943828",
        type: "cake",
        productType: "tube",
        description: "This one is for all the chocoholics out there! ",
        customizationInstructions: "This set design features a mix of chocolate and vanilla buttercream, with a chocolate drip and an assortment of chocolate treats. This cake is available in vanilla or chocolate mud.",
        occasionSuggestions: "This cake is perfect for any gathering, such as birthdays, baby showers, anniversaries or just to eat some cake!",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 4.8,
        reviews: 25,
        price: 7.00,
        reviewDetails: {
            5: 22,
            4: 2,
            3: 1,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Sarah M.",
                verified: true,
                rating: 5,
                date: "15 July 2024",
                text: "Absolutely delicious! The chocolate flavor was rich and the buttercream was perfectly smooth. Will definitely order again!",
                helpful: { yes: 2, no: 0 }
            },
            
        ]
    },
// Add Mini Cakes

    {
        id: "minichocolatewhitegold",
        title: "Chocolate White and Gold Mini Cake (Serves 4)",
        image: "https://cakecreationsbykate.com.au/cdn/shop/files/4_4a3447d9-4324-4a01-9910-73699e6c1416.png?v=1717379522",
        type: "cake",
        productType: "tube",
        description: "An adorable mini cake, designed to serve 4 delicious cake portions. Our adorable Vanilla Party Mini Cake consists of a sweet chocolate mud cake filled with vanilla buttercream.",
        customizationInstructions: "Our Mini Cake range are 5 inch diameter cakes that are 2.5 inches tall.",
        occasionSuggestions: "This cake is perfect for any gathering, such as birthdays, anniversaries, or just to eat some cake!",
        orderNotice: "This cake usually requires a minimum of 2 days' notice; however, we'd highly recommend ordering with at least 7 days' notice to guarantee your order during peak times.",
        rating: 5,
        reviews: 1,
        price: 45.00,
        reviewDetails: {
            5: 1,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        reviewList: [
            {
                name: "Amy C.",
                verified: true,
                rating: 5,
                date: "15 July 2024",
                text: "The cakes are so delicious, mini cake is perfect size for a birthday cake for photos and to blow out the candles.Then we gave each guest a cupcake saves cutting large cakes and mess.",
                helpful: { yes: 2, no: 0 }
            },
            
        ]
    },


    
   
];

// Function to get the product ID from the URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('productId');
}

// Function to load product details
function loadProduct(productId) {
    const product = cakeProducts.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found');
        return;
    }

    document.title = `${product.title} - Cake Creations by Kate`;
    document.getElementById('product-title').textContent = product.title;

    const mainImage = document.getElementById('main-image');
    const productPrice = document.getElementById('product-price');

    if (product.productCategory === "standard" || product.productType === "tube") {
        if (product.sizes && product.sizes.length > 0) {
            const initialSize = product.sizes[0];
            mainImage.src = initialSize.image;
            mainImage.alt = `${product.title} - ${initialSize.size}`;
            productPrice.textContent = `$${initialSize.price.toFixed(2)}`;
        } else {
            mainImage.src = product.image;
            mainImage.alt = product.title;
            productPrice.textContent = `$${product.price.toFixed(2)}`;
        }
        // Render customization options
        updateCustomizationOptions(product);
    } else {
        mainImage.src = product.image;
        mainImage.alt = product.title;
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        // Hide customization form
        document.querySelector('.customization-form').style.display = 'none';
    }

    // Update description
    const descriptionElement = document.getElementById('product-description');
    descriptionElement.innerHTML = `
        <div class="description">
            <p>${product.description}</p>
            <p>${product.customizationInstructions || ''}</p>
            <p>${product.Note || ''}</p>
            <p>${product.occasionSuggestions || ''}</p>
            <p class="note">${product.orderNotice || ''}</p>
        </div>
    `;

    // Update rating and reviews
    updateRatingAndReviews(product);

    // Load reviews
    loadReviews(product);

    // Update "Our Favourites" section
    updateOurFavourites();
}

// Function to update "Our Favourites" section
function updateOurFavourites() {
    const favouritesGrid = document.querySelector('.favourites-grid');
    favouritesGrid.innerHTML = ''; // Clear existing items

    // Get 3 random unique cake images
    const randomCakes = getRandomCakes(3);

    randomCakes.forEach(cake => {
        const favouriteItem = document.createElement('div');
        favouriteItem.className = 'favourite-item cake-item';
        
        favouriteItem.innerHTML = `
            <a href="cake_template.html?productId=${cake.id}" class="cake-link">
                <div class="cake-info">
                    <h3>${cake.title}</h3>
                    <p>$${cake.price.toFixed(2)}</p>
                </div>
                <img src="${cake.src}" alt="${cake.title}">
            </a>
        `;
        favouritesGrid.appendChild(favouriteItem);
    });
}

// Function to get random unique cakes
function getRandomCakes(count) {
    const shuffled = allCakeImages.sort(() => 0.5 - Math.random());
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

function updateDisplayedPrice() {
    const productId = getProductIdFromUrl();
    const product = cakeProducts.find(p => p.id === productId);
    
    if (product && product.sizes) {
        const sizeSelect = document.getElementById('size');
        const selectedSize = product.sizes.find(s => s.size === sizeSelect.value);
        const fillingColorRadios = document.querySelectorAll('input[name="fillingColor"]');
        let selectedFillingColor;
        
        fillingColorRadios.forEach(radio => {
            if (radio.checked) {
                selectedFillingColor = radio.value;
            }
        });

        if (selectedSize && selectedFillingColor) {
            let price = selectedSize.price;
            const fillingColorOption = product.customizationOptions.find(option => option.name === 'fillingColor');
            if (fillingColorOption) {
                const selectedChoice = fillingColorOption.choices.find(choice => choice.value === selectedFillingColor);
                if (selectedChoice && selectedChoice.price) {
                    price += selectedChoice.price;
                }
            }
            document.getElementById('product-price').textContent = `$${price.toFixed(2)}`;
        }
    }
}

// Function to update customization options
function updateCustomizationOptions(product) {
    const customizationForm = document.querySelector('.customization-form');
    customizationForm.innerHTML = '';

    if (product.productCategory === "standard" || product.productType === "tube") {
        if (product.customizationOptions) {
            product.customizationOptions.forEach((option, index) => {
                const formGroup = document.createElement('div');
                formGroup.className = 'form-group';

                const label = document.createElement('label');
                label.textContent = option.label;

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

                    if (option.name === 'size') {
                        select.addEventListener('change', updateCakePrice);
                    }

                    if (option.tooltip) {
                        const tooltipIcon = document.createElement('span');
                        tooltipIcon.className = 'tooltip-icon';
                        tooltipIcon.textContent = ' ⓘ ';
                        tooltipIcon.title = option.tooltip;
                        label.appendChild(tooltipIcon);
                    }

                    formGroup.appendChild(label);
                    formGroup.appendChild(select);
                } else if (option.type === 'color-swatch') {
                    const swatchContainer = document.createElement('div');
                    swatchContainer.className = 'color-swatch-container';

                    const hiddenInput = document.createElement('input');
                    hiddenInput.type = 'hidden';
                    hiddenInput.name = option.name;
                    formGroup.appendChild(hiddenInput);

                    const subtitleMetallic = document.createElement('div');
                    subtitleMetallic.className = 'subtitle';
                    subtitleMetallic.textContent = 'Metallic';
                    swatchContainer.appendChild(subtitleMetallic);

                    const metallicSwatches = ['Metallic Balck','Metallic Gold', 'Metallic Silver', 'Metallic Rose Gold', 'Metallic Purple', 'Metallic Blue', 'Metallic Pink'].map(color => createSwatch(color));
                    metallicSwatches.forEach(swatch => swatchContainer.appendChild(swatch));

                    const subtitleGlitter = document.createElement('div');
                    subtitleGlitter.className = 'subtitle';
                    subtitleGlitter.textContent = 'Glitter';
                    swatchContainer.appendChild(subtitleGlitter);

                    const glitterSwatches = ['Gold Glitter', 'Silver Glitter', 'Pink Glitter', 'Blue Glitter', 'Purple Glitter', 'Green Glitter'].map(color => createSwatch(color));
                    glitterSwatches.forEach(swatch => swatchContainer.appendChild(swatch));

                    const subtitlePastel = document.createElement('div');
                    subtitlePastel.className = 'subtitle';
                    subtitlePastel.textContent = 'Pastel';
                    swatchContainer.appendChild(subtitlePastel);

                    const pastelSwatches = ['Pastel Pink', 'Pastel Blue', 'Pastel Purple', 'Pastel Yellow', 'Pastel Green'].map(color => createSwatch(color));
                    pastelSwatches.forEach(swatch => swatchContainer.appendChild(swatch));

                    const subtitlePlain = document.createElement('div');
                    subtitlePlain.className = 'subtitle';
                    subtitlePlain.textContent = 'Plain';
                    swatchContainer.appendChild(subtitlePlain);

                    const plainSwatches = [ 'Plain White', 'Plain Navy', 'Plain Blue', 'Plain Hot Pink', 'Plain Baby Pink', 'Plain Purple', 'Plain Orange', 'Plain Red', 'Plain Brown', 'Plain Green', 'Plain Black'].map(color => createSwatch(color));
                    plainSwatches.forEach(swatch => swatchContainer.appendChild(swatch));

                    if (option.tooltip) {
                        const tooltipIcon = document.createElement('span');
                        tooltipIcon.className = 'tooltip-icon';
                        tooltipIcon.textContent = ' ⓘ ';
                        tooltipIcon.title = option.tooltip;
                        label.appendChild(tooltipIcon);
                    }

                    formGroup.appendChild(label);
                    formGroup.appendChild(swatchContainer);
                } else if (option.type === 'input') {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.name = option.name;
                    input.id = option.name;
                    input.required = true;
                    input.placeholder = option.placeholder || '';
                    input.maxLength = option.maxlength || Infinity;

                    if (option.tooltip) {
                        const tooltipIcon = document.createElement('span');
                        tooltipIcon.className = 'tooltip-icon';
                        tooltipIcon.textContent = 'ⓘ';
                        tooltipIcon.title = option.tooltip;
                        label.appendChild(tooltipIcon);
                    }

                    formGroup.appendChild(label);
                    formGroup.appendChild(input);

                    input.addEventListener('input', () => {
                        const remaining = input.maxLength - input.value.length;
                        input.setCustomValidity(remaining >= 0 ? '' : `You can only enter ${input.maxLength} characters.`);
                    });
                } else if (option.type === 'radio') {
                    formGroup.innerHTML += createFillingColorSelector(option);
                }

                customizationForm.appendChild(formGroup);
            });
        }

        // Add quantity input and Add to Cart button for all product types
        const quantityContainer = document.createElement('div');
        quantityContainer.className = 'quantity-container';
        quantityContainer.innerHTML = `
            <div class="quantity-wrapper">
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" value="1" min="1" class="quantity-input">
            </div>
            <button type="submit" class="add-to-cart">ADD TO CART</button>
        `;
        customizationForm.appendChild(quantityContainer);
    } else {
        customizationForm.style.display = 'none';
    }

    // Add event listeners for radio buttons to update price
    const radioButtons = customizationForm.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', updateDisplayedPrice);
    });
}

// Function to create filling color selector
function createFillingColorSelector(option) {
    return `
      <div class="filling-color-selector">
        <h3 class="filling-color-title">${option.label}</h3>
        <div class="filling-color-options">
          ${option.choices.map(choice => `
            <label class="filling-color-option">
              <input type="radio" name="${option.name}" value="${choice.value}" ${choice.value === 'white' ? 'checked' : ''}>
              <span class="filling-color-checkmark"></span>
              <span class="filling-color-label">
                ${choice.label}
                ${choice.price > 0 ? `<span class="filling-color-price">(+$${choice.price.toFixed(2)})</span>` : ''}
              </span>
            </label>
          `).join('')}
        </div>
        ${option.note ? `<p class="filling-color-note">${option.note}</p>` : ''}
      </div>
    `;
}

// Function to create color swatch
function createSwatch(color) {
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.backgroundColor = getColorValue(color);
    swatch.dataset.color = color; // Set data-color attribute
    swatch.addEventListener('click', () => {
        
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
        swatch.classList.add('selected');
        const input = swatch.closest('.form-group').querySelector('input[type="hidden"]');
        if (input) {
            input.value = color;
        }

        const hiddenInput = swatch.closest('.form-group').querySelector(`input[name="${option.name}"]`);
        if (hiddenInput) {
            hiddenInput.value = color;
        }
    });
    return swatch;
}

// Function to get color value
function getColorValue(colorName) {
    const color = colorOptions.find(c => c.name === colorName);
    return color ? color.value : '#FFFFFF';
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
    const productId = getProductIdFromUrl();
    const product = cakeProducts.find(p => p.id === productId);
        
    if (!product) return;

    const selectedOptions = {};
    let additionalPrice = 0;
    let price = product.price;
    let size = null;

    if (product.productType === "tube") {
        // For cake tubes, just use the base price and quantity
        const quantity = parseInt(formData.get('quantity') || 1);
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity,
            type: "cake",
            productType: "tube"
        };
        addToCart(cartItem);
    } else {
        // Handle other cake types (standard, etc)
        product.customizationOptions.forEach(option => {
            const value = formData.get(option.name);
            selectedOptions[option.name] = value;

            if (option.name === 'fillingColor' && option.choices) {
                const selectedChoice = option.choices.find(choice => choice.value === value);
                if (selectedChoice && selectedChoice.price) {
                    additionalPrice += selectedChoice.price;
                }
            }
        });

        if (product.productCategory === "standard") {
            size = formData.get('size');
            const selectedSizeObj = product.sizes.find(s => s.size === size);
            if (selectedSizeObj) {
                price = selectedSizeObj.price;
            }
        } else {
            price += additionalPrice;
        }

        const cartItem = {
            id: product.id,
            title: product.title,
            price: price,
            image: product.image,
            size: size,
            quantity: parseInt(formData.get('quantity') || 1),
            selectedOptions: selectedOptions,
            type: "cake",
            productType: product.productType
        };
        addToCart(cartItem);
    }

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
            const quantity = parseInt(formData.get('quantity') || 1);
            cartCount.textContent = (parseInt(cartCount.textContent) + quantity).toString();
            cartCount.classList.add('pulse');
            setTimeout(() => cartCount.classList.remove('pulse'), 800);
        }
        updateCartCounter();
        particle.remove();
    }, 300);
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

// Function to add item to cart
function addToCart(product) {
    product.type = "cake"; // Ensure the type is set to "cake"

    const currentCount = parseInt(localStorage.getItem('cartCount') || '0');
    const newCount = currentCount + product.quantity;
    localStorage.setItem('cartCount', newCount.toString());

    // Update cart counter display
    if (window.updateCartCounter) {
        window.updateCartCounter();
    }

    // Trigger storage event for other open pages
    window.dispatchEvent(new Event('storage'));
    const existingItem = cart.find(item => 
        item.id === product.id && 
        JSON.stringify(item.selectedOptions) === JSON.stringify(product.selectedOptions)
    );

    if (existingItem) {
        existingItem.quantity += product.quantity;
    } else {
        if (product.selectedOptions && product.selectedOptions.cardBGColour) {
            product.cardBGColour = product.selectedOptions.cardBGColour;
        }
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}

// Function to update cake price
function updateCakePrice() {
    const sizeSelect = document.getElementById('size');
    const productId = getProductIdFromUrl();
    const product = cakeProducts.find(p => p.id === productId);
    
    if (product && product.sizes) {
        const selectedSize = product.sizes.find(s => s.size === sizeSelect.value);
        if (selectedSize) {
            document.getElementById('product-price').textContent = `$${selectedSize.price.toFixed(2)}`;
            document.getElementById('main-image').src = selectedSize.image;
            document.getElementById('main-image').alt = `${product.title} - ${selectedSize.size}`;
        }
    }
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
        document.querySelector('.fa fa-shopping-cart').appendChild(cartCounter);
    }

    cartCounter.textContent = totalItems;
    cartCounter.classList.add('pulse');
    setTimeout(() => cartCounter.classList.remove('pulse'), 300);
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
        const product = cakeProducts.find(p => p.id === productId);
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

const colorOptions = [
    { name: "Metallic Balck", value: "#2C2C2B" },
    { name: "Metallic Gold", value: "#FFD700" },
    { name: "Metallic Silver", value: "#C0C0C0" },
    { name: "Metallic Rose Gold", value: "#B76E79" },
    { name: "Metallic Purple", value: "#5B0A91" },
    { name: "Metallic Blue", value: "#0000FF" },
    { name: "Metallic Pink", value: "#FFC0CB" },
    { name: "Gold Glitter", value: "#DFB722" },
    { name: "Silver Glitter", value: "#CECFD2" },
    { name: "Pink Glitter", value: "#E5679B" },
    { name: "Blue Glitter", value: "#2C75EB" },
    { name: "Green Glitter", value: "#dde26a" },
    { name: "Purple Glitter", value: " #8E3FE2" },
    { name: "Pastel Pink", value: "#FFB6C1" },
    { name: "Pastel Blue", value: "#ADD8E6" },
    { name: "Pastel Purple", value: "#D8BFD8" },
    { name: "Pastel Yellow", value: "#FFFFE0" },
    { name: "Pastel Green", value: "#98FB98" },
    { name: "Plain White", value: "#FFFFFF" },
    { name: "Plain Navy", value: "#000080" },
    { name: "Plain Blue", value: "#0000FF" },
    { name: "Plain Hot Pink", value: "#FF69B4" },
    { name: "Plain Baby Pink", value: "#FFB6C1" },
    { name: "Plain Purple", value: "#800080" },
    { name: "Plain Orange", value: "#FFA500" },
    { name: "Plain Red", value: " #FF0000" },
    { name: "Plain Brown", value: "#A52A2A" },
    { name: "Plain Green", value: "#008000" },
    { name: "Plain Black", value: "#000000" },
];

const allCakeImages = [
    { src: "https://cakecreationsbykate.com.au/cdn/shop/files/427997295_1082766716286114_3582027202937511988_n_720x.jpg?v=1709095646", title: "Bluey Mini Cupcakes", price: 44.00 },
    { id: "blueconfettibuttercream",src: "https://cakecreationsbykate.com.au/cdn/shop/products/67.png?v=1652848784", title: "Blue Confetti Buttercream Simple Cake", price: 80.00 },
    { src: "https://cakecreationsbykate.com.au/cdn/shop/products/37.png?v=1652849172", title: "Party Time Buttercream Simple Cake", price: 80.00 },
    { src: "https://cakecreationsbykate.com.au/cdn/shop/products/7.png?v=1652849413", title: "Top Deck Buttercream Simple Cake", price: 80.00 },
    { src: "https://cakecreationsbykate.com.au/cdn/shop/products/25.png?v=1652849392", title: "Green Machine Buttercream Simple Cake", price: 80.00 },
    { src: "https://cakecreationsbykate.com.au/cdn/shop/products/73.png?v=1652849370", title: "White, Silver And Gold Buttercream Simple Cake", price: 80.00 },
    // Add more cake images here...
];
