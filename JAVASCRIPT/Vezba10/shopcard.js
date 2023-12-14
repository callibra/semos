document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const rewardPointsElement = document.getElementById('reward-points');
    let total = 0;
    let rewardPoints = 0;

    // Sample products
    const products = [
        { name: 'Laptop', price: 999.99, description: 'Powerful laptop for work and entertainment.', rewards: 20, image: './img/laptop.jpg' },
        { name: 'T-Shirt', price: 19.99, description: 'Comfortable cotton T-shirt for everyday wear.', rewards: 5, image: './img/tshirt.jpg' },
        { name: 'Headphones', price: 49.99, description: 'High-quality headphones for an immersive audio experience.', rewards: 10, image: './img/headphones.jpg' },
        { name: 'Tv', price: 889.99, description: 'Powerful tv for home entertainment.', rewards: 25, image: './img/tv.jpg' },
        { name: 'Mobile Phones', price: 599.99, description: 'Top Mobile Phones for You.', rewards: 15, image: './img/mobile.jpg' },
        { name: 'Speaker', price: 299.99, description: 'Powerful speaker for everyday.', rewards: 15, image: './img/speaker.jpg' },
       
    ];

    // Display products
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price}, ${product.rewards})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });

    // Add to cart function
    window.addToCart = function (productName, productPrice, productRewards) {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${products.find(p => p.name === productName).image}" alt="${productName}">
            <span>${productName}</span>
            <span>$${productPrice.toFixed(2)}</span>
            <button onclick="removeFromCart(this, ${productPrice}, ${productRewards})">Remove</button>
        `;
        cartItems.appendChild(cartItem);

        // Update total
        total += productPrice;
        totalElement.textContent = total.toFixed(2);

        // Update rewards
        rewardPoints += productRewards;
        rewardPointsElement.textContent = rewardPoints;

        // Provide a reward message
        updateRewardMessage(rewardPoints);
    };

// Remove from cart function
window.removeFromCart = function (button, productPrice, productRewards) {
    const cartItem = button.closest('.cart-item');

    if (cartItem) {
        // Remove the item from the cart
        cartItems.removeChild(cartItem);

        // Update total
        total -= productPrice;
        totalElement.textContent = total.toFixed(2);

        // Update rewards
        rewardPoints -= productRewards;
        rewardPointsElement.textContent = rewardPoints;

        // Provide a reward message
        updateRewardMessage(rewardPoints);
    } else {
        console.error("Error: Cart item not found.");
        console.log("Button:", button);
    }
};

    // Function to update reward message based on total rewards
    function updateRewardMessage(points) {
        const rewardsMessage = document.getElementById('rewards');
        if (points >= 30) {
            rewardsMessage.textContent = 'Congratulations! You\'ve earned a special discount!';
            rewardsMessage.style.color = '#e67e22'; // Orange color for special reward
        } else {
            rewardsMessage.textContent = `You've earned ${points} reward points!`;
            rewardsMessage.style.color = '#27ae60'; // Green color for regular rewards
        }
    }
});
