document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const reviewsList = document.getElementById('reviews-list');
    const reviewSort = document.getElementById('review-sort');
    let reviews = []; // This will store our reviews

    function openReviewModal() {
        document.getElementById('reviewModal').style.display = 'block';
    }
    
    function closeReviewModal() {
        document.getElementById('reviewModal').style.display = 'none';
    }
    
    // Add event listener to the "Write a Review" button
    const writeReviewBtn = document.querySelector('.write-review-btn');
    if (writeReviewBtn) {
        writeReviewBtn.addEventListener('click', openReviewModal);
    }

    // Add event listener to the close button in the modal
    const closeModalBtn = document.querySelector('.close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeReviewModal);
    }
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('reviewModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Function to fetch reviews from the server
    async function fetchReviews() {
        // In a real application, this would be an API call
        // For this example, we'll use dummy data
        reviews = [
            { id: 1, name: "Kruti C.", rating: 5, date: "2024-07-22", text: "It was my first time for cake as we love cupcakes made by them. But cake was really good and very tasty. Definitely come back again for cake. Amazing design and nice flavour. Very happy." },
            { id: 2, name: "Melis C.", rating: 5, date: "2024-06-30", text: "Best cakes in Australia!! AMAZING AS ALWAYS" },
            { id: 3, name: "Kate L.", rating: 5, date: "2024-05-31", text: "From the first call to delivery I felt comforted that the cake would be perfect! My cake was delivered directly to the party venue. I received updates on the deliver every step of the way which was so reassuring and the cake was ready and waiting when the party started." },
            { id: 4, name: "Lisa O.", rating: 4, date: "2024-05-28", text: "Experience was great loved both cakes! Cakes delivered on time. Cakes looked perfect and identical to their photos. Cakes tasted delicious" },
            { id: 5, name: "John D.", rating: 3, date: "2024-05-15", text: "Cake was good, but delivery was a bit late." }
        ];
        renderReviews();
        updateRatingDistribution();
    }

    // Function to render reviews
    function renderReviews() {
        reviewsList.innerHTML = '';
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review-item';
            reviewElement.innerHTML = `
                <div class="review-header">
                    <span class="reviewer-name">${review.name}</span>
                    <span class="verified-badge">Verified Buyer</span>
                    <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
                    <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p class="review-text">${review.text}</p>
                <div class="review-footer">
                    <span class="review-helpful">Was this helpful?</span>
                    <button class="helpful-btn">Yes (0)</button>
                    <button class="helpful-btn">No (0)</button>
                </div>
            `;
            reviewsList.appendChild(reviewElement);
        });

        // Reinitialize GSAP animation
        initGSAPAnimation();
    }

    // Function to update rating distribution
    function updateRatingDistribution() {
        const distribution = [0, 0, 0, 0, 0];
        reviews.forEach(review => distribution[5 - review.rating]++);
        
        const total = reviews.length;
        const bars = document.querySelectorAll('.rating-bar .bar');
        const counts = document.querySelectorAll('.rating-bar .count');
        
        bars.forEach((bar, index) => {
            const percentage = (distribution[index] / total) * 100;
            bar.style.width = `${percentage}%`;
            counts[index].textContent = `(${distribution[index]})`;
        });

        // Update overall rating
        const overallRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / total).toFixed(1);
        document.querySelector('.rating-number').textContent = overallRating;
        document.querySelector('.review-count').textContent = total;
    }

    // Function to sort reviews
    function sortReviews(sortBy) {
        switch(sortBy) {
            case 'recent':
                reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'highest':
                reviews.sort((a, b) => b.rating - a.rating);
                break;
            case 'lowest':
                reviews.sort((a, b) => a.rating - b.rating);
                break;
        }
        renderReviews();
    }

    // Event listener for sort select
    reviewSort.addEventListener('change', (e) => sortReviews(e.target.value));

    // Function to initialize GSAP animation
    
    // Function to submit a new review
    function submitReview(event) {
        event.preventDefault();
        const form = event.target;
        const newReview = {
            id: reviews.length + 1,
            name: form.name.value,
            rating: parseInt(form.rating.value),
            date: new Date().toISOString().split('T')[0],
            text: form.review.value
        };
        reviews.unshift(newReview);
        renderReviews();
        updateRatingDistribution();
        closeReviewModal();
        form.reset();
    
        // Show thank you message
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.style.display = 'block';
        setTimeout(() => {
            thankYouMessage.classList.add('show');
        }, 10);
    
        // Hide thank you message after 3 seconds
        setTimeout(() => {
            thankYouMessage.style.animation = 'fadeOut 0.5s ease-in-out forwards';
            setTimeout(() => {
                thankYouMessage.style.display = 'none';
                thankYouMessage.classList.remove('show');
                thankYouMessage.style.animation = '';
            }, 500);
        }, 3000);
    }

    // Initial fetch of reviews
    fetchReviews();
});