// INSTRUCTIONS - Text Simon to setup node command. Once the setup is done, in this directory, run `node index.js`.

// First exercise - Write a function that takes a string parameter and returns that parameter (already done as example code)
function getString(someString) {
  return someString
}

const testFirstExpected = 'Hello world!'
const testFirstActual = getString(testFirstExpected)

// Second Exercise - Write a function below that takes TWO number parameters, adds them, and returns the added value
function addTwoNumbers(x,y) {
  // Your code here...feel free to add parameters in the paranthesis
    return x+y
}

const testSecondExpected = 15
const testSecondActual = addTwoNumbers(2, 7)
function subtractThreeNumbers(x,y,z) {
    return x-y-z
}
console.log(subtractThreeNumbers(10,2,4))

// if (hour < 18) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }

// Third Exercise - Write a function below that takes TWO number parameters, and ONLY returns the value if the added value is greater than 20
function addTwoNumbersGreaterThanTwenty(numberone,numbertwo) {
  // Your code here...feel free to add parameters in the paranthesis
    const sum = numberone+numbertwo
        if (sum > 20) {
         return sum
        } else {
            return 0
        }

}
console.log('NEWANSWERBELOW')
console.log(addTwoNumbersGreaterThanTwenty(5, 10))
const testThirdExpected = 25
const testThirdActual = addTwoNumbersGreaterThanTwenty(15, 10)

// console.log('Tests for practice.')
// console.group()
// console.log('------------------------------------------------------------------------------------------------------------')
// console.log(`First Test::Expect getString to return ${testFirstExpected}`)
// console.log(`Test passed: ${testFirstActual === testFirstExpected}`)
// console.log('------------------------------------------------------------------------------------------------------------')
// console.groupEnd()
// console.group()
// console.log('------------------------------------------------------------------------------------------------------------')
// console.log(`Second Test::Expect addTwoNumbers to return ${testSecondExpected}`)
// console.log(`Test passed: ${testSecondActual} --- ${testSecondExpected}`)
// console.log('------------------------------------------------------------------------------------------------------------')
// console.groupEnd()
// console.group()
// console.log('------------------------------------------------------------------------------------------------------------')
// console.log(`Third Test::Expect addTwoNumbersGreaterThanTwenty to return ${testThirdExpected}`)
// console.log(`Test passed: ${testThirdActual} --- ${testThirdExpected}`)
// console.log('------------------------------------------------------------------------------------------------------------')
// console.groupEnd()
// console.group()
// console.log('------------------------------------------------------------------------------------------------------------')
// console.log(`Third Test::Expect addTwoNumbers to return ${testSecondExpected}`)
// console.log(`Test passed: ${testSecondActual} --- ${testSecondExpected}`)
// console.log('------------------------------------------------------------------------------------------------------------')
// console.groupEnd()
