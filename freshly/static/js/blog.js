// Sample data for blog posts
const blogPosts = [
    {
        title: "The Importance of Sustainable Agriculture",
        content: "Sustainable agriculture is vital for preserving the environment and ensuring food security for future generations. In this blog post, we explore the importance of sustainable agricultural practices and their impact on the planet.",
        link: "https://example.com/blog-post-1"
    },
    {
        title: "10 Tips for Growing Your Own Organic Vegetables",
        content: "Interested in growing your own organic vegetables? Check out these 10 tips for successful organic gardening, including soil preparation, pest management, and crop rotation.",
        link: "https://example.com/blog-post-2"
    },
    {
        title: "The Future of Urban Farming",
        content: "Urban farming is on the rise as more people recognize the benefits of locally grown produce. Discover how urban farming initiatives are transforming cities and promoting sustainability.",
        link: "https://example.com/blog-post-3"
    }
];

// Function to create blog cards
function createBlogCards() {
    const blogCardsContainer = document.getElementById('blogCards');
    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="${post.link}" target="_blank">Read more</a>
        `;
        blogCardsContainer.appendChild(card);
    });
}

// Call the function to create blog cards when the page loads
document.addEventListener('DOMContentLoaded', createBlogCards);
