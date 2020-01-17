// Comment
console.log('Hello World')

let name = "Mosh";//variables we use let instead of var now
console.log(name);

let firstName = 'Mosh', lastName  = ' Hamadi'

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)
const rate = .2;

// types that can be assigned to variables: string, numbers, booleans, undefined, null, and symbol
name = 'Mosh'
let age  =30;
let isApproved = false;
firstName = undefined;
lastName = null;

//Javascript is dynamic which mean you can change types of variables
firstName = null;
firstName = 35;
console.log(firstName)
//reference types objects, arrays, functions
//objcet example
let person = {
    name: 'Mosh',
    age: 30
}
console.log(person)
// Dot Notation
console.log(person.name)

// Bracket Notation
person['name'] = 'Mary'
console.log(person.name)

// Array example
let selectedColors = ['red', 'blue',];
selectedColors[2] = 'green'
console.log(selectedColors.length)
console.log(selectedColors[0])

//Functions
// Performing a task type of function
function greet(name, lastName) {
    
    console.log('Hello ' + name + ' ' + lastName);
}

greet(person.name, lastName);

// Calculate a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);

