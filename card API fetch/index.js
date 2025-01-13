
// Fetch data from a URL
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Display data on the webpage
const displayData = (posts) => {
    const container = document.getElementById('data-container');
    posts.slice(0,15).forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <h3>User ID: ${post.userId}</h3>
            <h4>ID: ${post.id}</h4>
            <p><strong>Title:</strong> ${post.title}</p>
            <p1>${post.body}</p1>
        `;
        container.appendChild(postElement);
    });
};

// Call the fetchData function when the page loads
document.addEventListener('DOMContentLoaded', fetchData);
