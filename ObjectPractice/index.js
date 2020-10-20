// Instructions: Run this file and compare/understand what you see in the node output with the code I wrote below:


const lewisObject = {
  name: 'Lewis',
  age: 27,
  gender: 'male',
  isStudent: false
}

console.log(`The lewisObject object has name property value of: ${lewisObject.name}`);
console.log(`The lewisObject object has age property value of: ${lewisObject.age}`);
console.log(`The lewisObject object has gender property value of: ${lewisObject.gender}`);
console.log(`The lewisObject object has isStudent property value of: ${lewisObject.isStudent}`);
console.log('---------------------------------------------------------------------------------------------------------')

function checkStudentStatus(obj) {
  const name = obj.name;
  if (obj.isStudent === true) {
    return `Yes, ${name} is a student`
  } else {
    return `No, ${name} is NOT a student`
  }
}

const lewisStudentStatus = checkStudentStatus(lewisObject);

console.log(`Is ${lewisObject.name} a student? ${lewisStudentStatus}`);

// Exercise. Create a function that takes an object
// If age is greater than 27, return "Getting older!"
// If age is equal to 27, return "The right age to learn web dev!"
// If age is less than 27, return "Still learning..."

// make objects before making a function that takes an object. Otherwise it gets overridden or overrides. 
const lcObject = {
  age: 5,
  colour: 'green'
}

const helloObject = {
  age: 324,
  colour: 'yellow'
}

const anythingHere = {
  age: 47,
  colour: 'red'
}

function getAgeFromObject(obj) {
  const age = obj.age;
  if (obj.age > 27) {
    return 'Getting older!'
  } else if (obj.age === 27) {
    return 'The right to learn web dev!'
  } else {
    return 'Still learning...'
  }
}

function getColourFromObject(obj) {
  const colour = obj.colour;
  if (colour === 'green') {
    return 'alive'
  } else if (colour === 'yellow') {
    return 'wounded'
  } else {
    return 'dead'
  }
}


console.log(getAgeFromObject(lewisObject))
console.log(getAgeFromObject(lcObject))
console.log(getAgeFromObject(helloObject))
console.log('---------------------------------------------------------------------------------------------------------')

console.log(getColourFromObject(lcObject))
console.log(getColourFromObject(helloObject))
console.log(getColourFromObject(anythingHere))