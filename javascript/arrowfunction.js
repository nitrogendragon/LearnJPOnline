// Normal js functions

// two param function
function sum(a,b) {
    return a + b
}

// one param function
function isPositive(number) {
    return number >= 0
}

// no parameters function
function randomNumber() {
    return Math.random
}

// anonymous function
document.addEventListener('click', function() {
    console.log('Click')
})


// Arrow function versions

// with arrow functions there is no function keyword because it is assumed
// instead you assign the function to a variable
// normal functions create a keyword varibale (function <function-name>) but since we dont have function
// anymore we need to make a keyword so we use (let <keyword-variable>)
// after defining our keyword we type (=) and then add our params like a normal function so ((a, b))
// Then after this we add the arrow part of the function so (=>)
// lastly we add our brackets and the actual content of the function({<content>})
// Thus a full example would be (let sum2 = (a,b) => {return a+b})
// There is also a shorthand for this where we remove the return and curly braces
// It would then look like this (let sum2 = (a,b) => a+b)

//two param arrow function
let sum2 = (a,b) => {
    return a + b
}

// bracketless auto assuming return two param arrow function
let sum2 = (a,b) => a+b

//one param arrow function
let isPositive2 = (number) => { return number > 0}

//one param arrow function shortened
let isPositive2 = number => number >= 0

// parameter-less arrow function... use empty parenthesis to mark no params
let randomNumber2 = () => {return Math.random}

// parameter-less arrow function shortened
let randomNumber2 = () => Math.random

// anonymous (no-name) arrow function 
document.addEventListener('click', () => {
    console.log('Click')
}) 

// anonymous (no-name) arrow function shortened
document.addEventListener('click', () => console.log('Click') ) 

// Full Example
//Arrow functions treat the <this.x> differently than normal functions
// Normal functions redefine <this.x> based on where it's called
// so in this case it's called in global space so it defines / looks for a global this object and 
// doesn't find it so instead of getting our name like we might expect, we get nothing.
// On the other hand Arrow functions are not redefined so it grabs this from its person class object
// and we can see it being printed out.
class Person{
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout( () => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()



