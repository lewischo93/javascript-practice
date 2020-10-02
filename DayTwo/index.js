// In Day Two, we are going to learn about variable types.

// By now, you know what a variable is:
const test = 'this is a test'
// You know that the variable named `test` holds the value 'this is a test'. So if you console log test...
console.log(test) // logs out 'this is a test'
console.log('-------------------------------------------------------------------------------')

// But what does "const" mean? It is short for "constant", meaning the value that the variables holds cannot change. So you can't go 
// test = 'new value here!' // this throws an error in the console. Try uncommenting this line out and run `node index.js`

// This way you can be sure that const variables do not change throughout your application. This is known as to be "immutable".
// On the other hand, there are variables that are "mutable" - in other words, the values it holds CAN change like below:
let thisCanChange = 'the original value'
console.log('Result of the original value of thisCanChange: ' + thisCanChange)

// Now you can do this
thisCanChange = 'the changed thing!'
console.log('Result of the updated value of thisCanChange: ' + thisCanChange)


console.log('-------------------------------------------------------------------------------')
// Why is this important? Read the function line-by-line carefully:
function testingChanges(someNumber) {
  let numberToUpdate = someNumber
  if (someNumber > 10) {
    numberToUpdate = 20
  } else if (someNumber < 10) {
    numberToUpdate = 2
  } else {
    numberToUpdate = 0
  }
  return numberToUpdate
}

// Hopefully the function written above makes sense to you. Let's try running this:
console.log(testingChanges(30)) // Should log out 20
console.log(testingChanges(3)) // Should log out 2
console.log(testingChanges(10)) // Should log out 0
console.log('-------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------')
// console.log(testValue) // What does this log out?
// // Let's call the changeTestValue function now
// changeTestValue('A new value hahaha!')
// console.log(testValue) // What does this log out?

// At this point, you should understand mutable variable changes
// When to use const - when you know the value of the variable should NEVER change
// When to use let - when you know the value should be updated/changed sometime in the future

// EXERCISE
// Step 1. Define a mutable variable named "testNumber" and assign it with a value of 10.
// Step 2. Re-assign the "testNumber" with a new value 300
// Step 3. console log out "testNumber". What do you see?
// Write code below...I leave it up to you to figure out how to console log out the result (see previous examples). Hint: Nothing about this says you have to write a function

console.log('exercise below!!!!!!!!!!')
let testNumber = 10
testNumber = 300

console.log(testNumber)
testNumber = 10000
testNumber = 123131
console.log(testNumber)
testNumber = 47000
console.log(testNumber)

const lessonReview = 'finished'
console.log(lessonReview)

console.log("Lewis' first ever independently written function below!!! Congrats")
// Write a function that takes ONE parameter, and do the following:
// 1. If the parameter is equal to 'wow', return 'WOW!'
// 2. If the parameter is greater than 50, return 'BIG NUMBER!'
// 3. If it doesn't meet any of the conditions above, return 'Enter a better value please'

function oneParameter(aNumber) {
  let newNumber = aNumber
  if (aNumber === 'wow!') {
    newNumber = 'WOW!'
  } else if (aNumber > 50) {
    newNumber = 'BIG NUMBER!'
  } else {
    newNumber = 'Enter a better value please'
  }
  return newNumber
}

console.log(oneParameter('wow!'))
console.log(oneParameter(87))
console.log(oneParameter(43))