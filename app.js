// Available pizzas
const pizzas = [
    { name: "Margherita", price: 199 },
    { name: "Farmhouse", price: 299 },
    { name: "Paneer Tikka", price: 349 }
];

// Display pizza list
const pizzaVarieties = document.getElementById("pizzaVarieties");
pizzas.forEach(pizza => {
    const div = document.createElement("div");
    div.innerHTML = `${pizza.name} - ₹${pizza.price}`;
    pizzaVarieties.appendChild(div);
});

// Dropdown elements
const pizzaBase = document.getElementById("pizzaBase");
const sauce = document.getElementById("sauce");
const cheese = document.getElementById("cheese");
const veggies = document.getElementById("veggies");
const totalPriceText = document.getElementById("totalPrice");

// Price data
const basePrice = {
    "Thin Crust": 100,
    "Cheese Burst": 150,
    "Whole Wheat": 120
};

const saucePrice = {
    "Tomato": 40,
    "BBQ": 60,
    "Pesto": 70
};

const cheesePrice = {
    "Mozzarella": 80,
    "Cheddar": 90,
    "Vegan": 100
};

const veggiePrice = {
    "Onion": 30,
    "Capsicum": 35,
    "Olives": 50,
    "Corn": 40
};

// Populate dropdowns
Object.keys(basePrice).forEach(item => pizzaBase.innerHTML += `<option>${item}</option>`);
Object.keys(saucePrice).forEach(item => sauce.innerHTML += `<option>${item}</option>`);
Object.keys(cheesePrice).forEach(item => cheese.innerHTML += `<option>${item}</option>`);
Object.keys(veggiePrice).forEach(item => veggies.innerHTML += `<option>${item}</option>`);

// Auto-select demo values
window.onload = () => {
    pizzaBase.value = "Cheese Burst";
    sauce.value = "BBQ";
    cheese.value = "Mozzarella";
    veggies.value = "Olives";
    calculateTotal();
};

// Calculate total price
function calculateTotal() {
    let total = 0;
    total += basePrice[pizzaBase.value] || 0;
    total += saucePrice[sauce.value] || 0;
    total += cheesePrice[cheese.value] || 0;
    total += veggiePrice[veggies.value] || 0;

    totalPriceText.innerText = `Total Price: ₹${total}`;
    return total;
}

// Update price on change
[pizzaBase, sauce, cheese, veggies].forEach(select =>
    select.addEventListener("change", calculateTotal)
);

// Form handlers
document.getElementById("userLoginForm").onsubmit = e => {
    e.preventDefault();
    alert("User Logged In Successfully!");
};

document.getElementById("adminLoginForm").onsubmit = e => {
    e.preventDefault();
    alert("Admin Logged In Successfully!");
};

document.getElementById("registrationForm").onsubmit = e => {
    e.preventDefault();
    alert("User Registered Successfully!");
};

document.getElementById("customPizzaForm").onsubmit = e => {
    e.preventDefault();
    alert(`Custom Pizza Added!\nTotal Amount: ₹${calculateTotal()}`);
};

document.getElementById("payButton").onclick = () => {
    alert(`Payment of ₹${calculateTotal()} Successful (Razorpay Demo)`);
};
