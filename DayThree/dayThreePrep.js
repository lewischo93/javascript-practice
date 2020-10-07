// Review code writing!
// Create a function that takes 2 parameters.
// Conditions:
// 1. If the sum of the 2 params is an even number, return string 'EVEN SUM'
// 2. If the sum of the 2 params is an odd number, return string 'ODD SUM'

function twoVariables (numberOne, numberTwo){
    const sum = numberOne+numberTwo
    if (sum = evenNumber) {
    return 'EVEN SUM'
    } else if (sum = oddNumber) {
        return 'ODD SUM'
    }
    }
    
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
