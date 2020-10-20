// create a function that takes three parameters
// First two parameters will be arrays.
// third parameter will accept a string.
// If third parameter is 'add', then you add the last elements from each array.
// if third parameter is 'subtract', then subtract the first elements from each array.
// If third parameter is 'multiply', multiply the first element from first array with last element from second array.
// If third parameter is 'divide', divide the last element of first array with first element of second array.
function review (firstArray, secondArray, process) {
    const lengthFirstArray = firstArray.length                          // It is important to add these variables right away so all the if/else statements have access to them
    const lastItemFirstArray = firstArray[lengthFirstArray-1];
    const lengthSecondArray = secondArray.length
    const lastItemSecondArray = secondArray[lengthSecondArray-1];
    if (process === 'add') {
        const sum = lastItemFirstArray+lastItemSecondArray
        return sum
    } else if (process === 'subtract') {
        const diff = firstArray[0]-secondArray[0];
        return diff
    } else if (process === 'multiply'){
        const product = firstArray[0]*lastItemSecondArray;
        return product
    } else if (process === 'divide'){
        const division = lastItemFirstArray/secondArray[0];
        return division
    } else {
        return 'Process is Invalid!!'
    }
}

review([1,2,3,4,5], [2,4,6,8,10], 'add')
review([1,2,3,4,5], [2,4,6,8,10], 'subtract')
review([1,2,3,4,5], [2,4,6,8,10], 'blah')
