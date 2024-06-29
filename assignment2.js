//! TASK 1: You are tasked with creating a JavaScript program that simulates a simple online shopping experience.The program should allow users to browse products, add them to a cart, and calculate the total cost of their purchase.
// TODO 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.
let loggedIn = false;

if (loggedIn == false) {
	console.log("Please log into your account.");
} else {
	console.log("Add item to cart?");
}

// TODO 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.
let products = {
	phone: 100,
	tablet: 125,
	headphones: 85,
	phoneCover: 40,
	laptop: 155,
};

let cart = [];
let total = 0;

let addProduct = true;

for (const product in products) {
	let price = products[product];
	console.log(`${product}: $${price}`);
	if ((addProduct = true)) {
		cart.push(price);
	}
}

// TODO 3: Calculate the total cost of the items in the cart and display it to the user.

for (let i = 0; i < cart.length; i++) {
	total += cart[i];
}

console.log("Total: $", total);

//! TASK 2: Your task is to develop a JavaScript program that simulates a simple banking system. The program should include functions to perform basic banking operations such as deposit, withdrawal, and balance inquiry.
// TODO 1: Create a function to handle deposits into a bank account.

function deposit(amount) {
	account = 0;
	account += amount;
	return account;
}
// TODO 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

function withdrawal(amount) {
	if (account > amount) {
		account -= amount;
	}
	return account;
}

// TODO 3: Develop a function to check the current balance of the account.
function checkBalance() {
	return account;
}

console.log(deposit(150));
console.log(withdrawal(50));
console.log("Balance: $", checkBalance());
