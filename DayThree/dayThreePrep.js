// Review code writing!
// Create a function that takes 2 parameters.
// Conditions:
// 1. If the sum of the 2 params is an even number, return string 'EVEN SUM'
// 2. If the sum of the 2 params is an odd number, return string 'ODD SUM'

function twoVariables (numberOne, numberTwo){
    const sum = numberOne+numberTwo
    const result = sum % 2
    const isOdd = result === 1
    if (isOdd) {
        return 'ODD SUM'
    } else {
        return 'EVEN SUM'
    }
}
console.log(twoVariables(4, 3))

// Simon's code below...
function getOddOrEven (valOne, valTwo) {
    const sum = valOne + valTwo;
    const isEven = sum % 2 === 0
    if (isEven) {
        return 'EVEN SUM'
    } else {
        return 'ODD SUM'
    }
}
