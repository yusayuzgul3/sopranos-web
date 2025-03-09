// Toggle mobile navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fade-in animation for navigation bar
window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
});

// Show/Hide Menu Sections (New Version)
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // Get the target section ID

        // Hide all menu sections
        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected menu section
        document.getElementById(target).style.display = 'block';

        // Update active button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

// Shopping Cart Logic
let cart = []; // Array to store cart items

// Function to add item to cart
function addToCart(name, price, quantity) {
    const item = {
        name: name,
        price: parseFloat(price), // Convert price to a number
        quantity: parseInt(quantity), // Convert quantity to a number
    };
    cart.push(item); // Add the item to the cart
    updateCart(); // Update the cart display
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items'); // Cart items list
    const cartTotal = document.getElementById('cart-total'); // Cart total

    // Clear the cart items list
    cartItems.innerHTML = '';

    // Add items to the cart
    let total = 0; // Initialize total cost
    cart.forEach(item => {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}; // Display item details
        cartItems.appendChild(li); // Add the item to the cart list
        total += item.price * item.quantity; // Update the total cost
    });

    // Update the total cost display
    cartTotal.textContent = Total: $${total.toFixed(2)};
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name'); // Get the item name
        const price = button.getAttribute('data-price'); // Get the item price
        const quantity = button.parentElement.querySelector('input').value; // Get the selected quantity
        addToCart(name, price, quantity); // Add the item to the cart
    });
});

// Show/Hide Cart Modal
const viewCartBtn = document.getElementById('view-cart-btn'); // View Cart button
const cartModal = document.getElementById('cart-modal'); // Cart modal
const closeModal = document.querySelector('.close'); // Close modal button

// Show the cart modal when the View Cart button is clicked
viewCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Hide the cart modal when the close button is clicked
closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Hide the cart modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});