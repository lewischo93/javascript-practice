// All about Arrays and Objects

// An array is a variable that holds a list of elements, as you may have seen before
// Below is an example:
const firstArr = ['civic', 'corolla', 'impreza', 'rondo', 'lancer'];
const otherArray = ['Lewis', 'Cho', 27, 'male'];

// To access a specific element, you reference the array variable and then the order that the element is located at:
const secondItem = firstArr[1];
console.log(secondItem);
// To get a specific element, just reference it to with a number starting with 0 always: 0, 1, 2, 3, etc.

// Why does this console out 'corolla' instead of 'civic'? Learning to be done below...








// Object
// An object is a structural variable type that holds key/value pairs to store data
const someObject = {
  firstName: 'Lewis',
  lastName: 'Cho',
  birthday: 'July 1, 1993',
  age: '27',
  gender: 'Male'
};

// To access one of the values:
const lewisFirstName = someObject.firstName
const lewisFirstNameDifferentWay = someObject['firstName'];
console.log('lewisFirstName variable is: ' + lewisFirstName);
console.log('lewisFirstNameDifferentWay variable is: ' + lewisFirstNameDifferentWay);

// How would you console out the birthday? Write the console log code below...