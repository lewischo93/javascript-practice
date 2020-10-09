// 1. Write a function that adds two numbers below. Function name is already declared for you
function addTwo(numOne, numTwo) {
  const sum = numOne+numTwo
    return sum
}
  // Code here
console.log('----------------------------------------------------------------')
console.log('Question 1 passed? ' + addTwo(3, 5) === 8)


// 2. Write a function that processes two numbers and does the below:
// If process is "add", return added sum
// If process is "subtract", return subtracted result
// If process is not "add" or "subtract", return "Bad process"
function processTwo(valOne, valTwo, process) {
  if (process === 'add'){
      return valOne+valTwo 
  } else if (process ==='subtract') {
      return valOne=valueTwo
  } else {
      return 'BAD PROCESS'
  }
  // Code here
}

console.log('----------------------------------------------------------------')
console.log('Question 2 passed? ' + processTwo(1, 3, "add") === 4 && processTwo(5, 2, "subtract") === 3 && processTwo(5, 0, "asdf") ==="Bad process")
console.log('----------------------------------------------------------------')

// 3. Write a function that takes one number parameter.
// If the parameter is greater than 50, return "Big number!"
// If it equals to 50, return the parameter.
// If it is less than 50, return "Small number..."
function isBigNumber(num) {
    let numberToUpdate = num
      if (num > 50) {
        numberToUpdate = 'BIG NUMBER!'
      } else if (num = 50) {
        numberToUpdate = num 
      } else {
        numberToUpdate = 'Small number...'
      }
      return num
  // Code here
}

console.log('----------------------------------------------------------------')
console.log('Question 3 passed?' + isBigNumber(55) === 'Big number!' && isBigNumber(50) === 50 && isBigNumber(23) === 'Small number...');
console.log('----------------------------------------------------------------')

// 4. Create an array that has the following (in order!):
// Any number variable
// Any string variable
// undefined variable
// null variable
// boolean variable
// Code below...
const yourArray = [40, 'Canucks', undefined, null, true]

console.log('----------------------------------------------------------------')
console.log('Question 4 passed?' + typeof yourArray[0] === 'number' && typeof yourArray[1] === 'string' && typeof yourArray[2] === 'undefined' && typeof yourArray[3] === 'null' && typeof yourArray[4] === 'boolean');
console.log('----------------------------------------------------------------')

// 5. Create a function that takes one parameter.
// The parameter variable type is an array
// Have the function return the FIRST element of the parameter
function getFirstElement() {
  

}

console.log('----------------------------------------------------------------')
console.log('Question 5 passed?' + getFirstElement(['test', 'wow', 'hi']) === 'test')
console.log('----------------------------------------------------------------')

// 6. Create a function that takes one parameter.
// The parameter variable type is an array
// Have the function return the LAST element of the parameter.
// Tip: If the parameter is const arr = ['hello', 'goodbye', 'whatsup'], you can't just go arr[2].
// What if the array parameter hs 15 elements? 50? 1000?
function getLastElement() {



}

console.log('----------------------------------------------------------------')
console.log('Question 5 passed?' + getFirstElement(['test', 'wow', 'lol', 'goodbye', 'wooo', 'testing!!', 'hi']) === 'hi')
console.log('----------------------------------------------------------------')