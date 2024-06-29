// alert("Hello, World!");

// let num = 5;
// console.log(num++); //Outputs: 5
// console.log(num); //Outputs: 6

// let num2 = 5;
// console.log(++num2); //Outputs: 6

// let num3 = 5;
// console.log(num3--); //Outputs: 5
// console.log(num3); //Outputs: 4

// let num4 = 5;
// console.log(--num4); //Outputs: 4

//? for loop ==> Number of iterations or iterating through an array
//* while loop ==> loop continues until the specified condition is false
//! do while loop ==> always executes its block of code at least once before checking the condition
//TODO for in loop ==> designed for iterating over iterable objects like arrays or strings

/* /* /* /* /* /* /* /* /* /* /* /* /* /* /* 
? for (initialization; Condition; Increment) {
?  Code here
? }
*/

for (let i = 0; i < 5; i++) {
	console.log("Iteration", i);
}

let my_arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < my_arr.length; i++) {
	console.log("Iteration", i, my_arr[i]);
}

/* /* /* /* /* /* /* /* /* /* /* /* /* /* /*
 * while (Condition) {
 *  Code here
 * }
 */

let count = 0;
while (count < 5) {
	console.log("Count:", count);
	count++;
}

/* /* /* /* /* /* /* /* /* /* /* /* /* /* /*
! do {
!  Code here
! } while (Condition);
*/

let num = 1;
do {
	console.log("Number:", num);
	num++;
} while (num <= 5);

/* /* /* /* /* /* /* /* /* /* /* /* /* /* /* 
TODO for (item in array) {
TODO  Code here
TODO }
*/

const fruits = ["apple", "banana", "cherry"];
for (const fruit in fruits) {
	console.log("Fruit:", fruits[fruit]);
}

//! Functions

function greet(name) {
	return "Hello, " + name + "!";
}
console.log(greet("John Doe"));

//? Arrow Functions --> more concise syntax for writing functions
//? useful for straight-forward operations or that return single values

//? Benefits:

//? No Binding of Arguments: Arrow functions do not have their own arguments object. Instead, they inherit the arguments from the enclosing scope.

//? Lexical this binding: Inherit the this value from the surrounding code when they are defined.

//? Implicit return: implicitly return the result of the expression without needing the return keyword for single expressions
