// Select form elements
const orderForm = document.getElementById('orderForm');
const createButton = document.getElementById('createButton');
const updateButton = document.getElementById('updateButton');
const deleteButton = document.getElementById('deleteButton');

// Simulated Data
const data = {
    users: [
        { id: 1, username: "john_doe", password: "hashed_password1" },
        { id: 2, username: "jane_smith", password: "hashed_password2" }
    ],
    orders: []
};

// Create Order
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('customerName').value;
    const coffeeType = document.getElementById('coffeeTypes').value;
    const quantity = parseInt(document.getElementById('coffeeQuantity').value);

    const pricePer100ml = 10;
    const totalPrice = quantity * pricePer100ml;

    const newOrder = {
        orderId: data.orders.length + 1,
        customerName: name,
        coffeeType: coffeeType,
        quantity,
        totalPrice
    };

    data.orders.push(newOrder);
    alert(`Order for ${name} created!`);
    orderForm.reset();
});

// Update Order
updateButton.addEventListener('click', () => {
    const name = document.getElementById('customerName').value;
    const coffeeType = document.getElementById('coffeeTypes').value;

    if (name && coffeeType) {
        alert(`Order updated for ${name}.`);
    } else {
        alert('Please fill out all fields before updating.');
    }
});

// Delete Order
deleteButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this order?')) {
        orderForm.reset();
        alert('Order deleted!');
    }
});

// Log data to verify
console.log("Loaded users:", data.users);
console.log("Current orders:", data.orders);






document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("orderForm");

    // Handle form submission
    orderForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        const name = document.getElementById("customerName").value;
        const table = document.getElementById("coffeeTable").value;
        const coffee = document.getElementById("coffeeTypes").value;
        const quantity = document.getElementById("coffeeQuantity").value;

        alert(`Order Created!\nName: ${name}\nTable: ${table}\nCoffee: ${coffee}\nQuantity: ${quantity} ml`);
    });

    // Update Button Functionality
    document.getElementById("updateButton").addEventListener("click", () => {
        alert("Order Updated!");
    });

 

});

