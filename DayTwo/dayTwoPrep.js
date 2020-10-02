// First, some review/practice.

// 1. Create a function called "calculateTwoNumbers" (Already done for you)
// 2. This function should accept two parameters that are number
// 3. This function should accept a third parameter that accepts a string

// When calling the function calculateTwoNumbers(8, 2, 'add'), the result should be 10
// When calling the function calculateTwoNumbers(8, 2, 'subtract), the result should be 6
// When calling the function calculateTwoNumbers(8, 2, 'multiply'), the result should be 16
// When calling the function calculateTwoNumbers(8, 2, 'divide'), the result should be 4
// When the string value is none of the 4 values shown above, return string value "Please enter a proper calculation method"

// Hint: Use if else statements. Think about all 5 conditions (add, subtract, multiply, divide, bad method)

/*
When you run `node dayTwo.js` in your git bash, you should have a result that looks like this:

Adding two numbers resulted in 10: true
------------------------------------------------------------------------------
Subtracting two numbers resulted in 6: true
------------------------------------------------------------------------------
Multiplying two numbers resulted in 16: true
------------------------------------------------------------------------------
Dividing two numbers resulted in 4: true
------------------------------------------------------------------------------
Entering in bad method resulted in the response Please enter a proper calculation method: true
------------------------------------------------------------------------------ 
*/

// Add your code below...
function calculatesWithProcess(numberOne, numberTwo, process) { // 5, 3, 'blah blah'
    console.log('value of numberOne is: ' + numberOne)
    console.log('value of numberTwo is: ' + numberTwo)
    console.log('value of process is: ' + process)
    if (process === 'add') {
        console.log('Is adding!')
        return numberOne + numberTwo
    } else if (process === 'subtract') {
        console.log('Is Subtracting!')
        return numberOne - numberTwo
    } else if (process === 'multiply') {
        console.log('Is multiplying!')
        return numberOne * numberTwo
    } else if (process === 'divide'){
        console.log('Is dividing!')
        return numberOne / numberTwo
    } else {
        console.log('Is all other cases!')
        return "Please enter a proper calculation method"
    }
}

// calculatesWithProcess(2,5,'add')



// calculateTwoNumbers(5, 3, 'divide');
// calculateTwoNumbers(5, 3, 'add');
// calculateTwoNumbers(5, 3, 'multiply');
// calculateTwoNumbers(5, 3, 'addd');
// calculateTwoNumbers(5, 3, 'Add');



// // Do not touch code below...
// const actualAdd = calculateTwoNumbers(8, 2, 'add')
// const expectedAdd = 10
// const addAnswer = actualAdd === expectedAdd
// console.log(`Adding two numbers resulted in ${expectedAdd}: ${addAnswer}`)
// console.log('------------------------------------------------------------------------------')

// const actualSubtract = calculateTwoNumbers(8, 2, 'subtract')
// const expectedSubtract = 6
// const subtractAnswer = actualSubtract === expectedSubtract
// console.log(`Subtracting two numbers resulted in ${expectedSubtract}: ${subtractAnswer}`)
// console.log('------------------------------------------------------------------------------')

// const actualMultiply = calculateTwoNumbers(8, 2, 'multiply')
// const expectedMultiply = 16
// const multiplyAnswer = actualMultiply === expectedMultiply
// console.log(`Multiplying two numbers resulted in ${expectedMultiply}: ${multiplyAnswer}`)
// console.log('------------------------------------------------------------------------------')

// const actualDivide = calculateTwoNumbers(8, 2, 'divide')
// const expectedDivide = 4
// const divideAnswer = actualDivide === expectedDivide
// console.log(`Dividing two numbers resulted in ${expectedDivide}: ${divideAnswer}`)
// console.log('------------------------------------------------------------------------------')

// const actualBadMethod = calculateTwoNumbers(8, 2, 'randomMethod')
// const expectedBadMethod = 'Please enter a proper calculation method'
// const badMethodAnswer = actualBadMethod === expectedBadMethod
// console.log(`Entering in bad method resulted in the response ${expectedBadMethod}: ${badMethodAnswer}`)
// console.log('------------------------------------------------------------------------------')


// const testValue = 'LeWIs'
// console.log(testValue.toLowerCase())
// console.log(testValue.toLowerCase() === 'lewis')
