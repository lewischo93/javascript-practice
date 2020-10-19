
// Return second item of array passed in
function getSecondItem(arr) {
  const secondItem = arr[1];
  return secondItem
}

// Return second to last item of array passed in
function getSecondToLastItem(arr) {
  // code here...  
  const length = arr.length
  const secondLastItem = arr[length-2];
  return secondLastItem

}

// Lewis note: I think I got it. Tried it in console and it seemed to work. Seems way too lengthy or is it okay?
// Return sum of the last element of both arrays passed in
// Eg. If first parameter is [1, 2, 3] and second parameter is [5, 6, 7]
// the function should return 10, because it's 3 +7
// Another eg. [2, 4, 5] and [1, 5, 10] passed in should return 15 (because it's 5 + 10)
function getSumOfBothLastElements(arrOne, arrTwo) {
   const lengthofArrOne = arrOne.length
  const lastItemofArrOne = arrOne[lengthofArrOne-1];

  const lengthofArrTwo = arrTwo.length
  const lastItemofArrTwo = arrTwo[lengthofArrTwo-1];

  const sumOfLastElements =  lastItemofArrOne+lastItemofArrTwo
  return sumOfLastElements
  // code here...

}
// no need to define arrOne or arrTwo. It overrides everything else. Think bazooka metaphor.
// getSumofBothLastElements([1,2 3], [4, 5, 6])

// Review...create a function that takes one parameter
// If bigger than 20, return "BIG NUMBER!"
// If smaller than 20, return "SMALL..."
// If parameter is equal to 20, return the passed in parameter
function getValue(num){
    let updatedNum = num
    if (num > 20) {
      updatedNum = 'BIG NUMBER!'
    } else if (num < 20){
      updatedNum = 'SMALL....'
    } else {
      updatedNum = num
    }
    return updatedNum
}