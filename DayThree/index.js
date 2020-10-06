// Day three will be all about types of variables
const stringName = 'lewis';
console.log(`Variable name: stringName.    Variable value: ${stringName}.    Variable type: ${typeof stringName}`);
console.log('------------------------------------------------------------------------------------------------------------------------');
const numberAge = 26
console.log(`Variable name: numberAge.    Variable value: ${numberAge}.    Variable type: ${typeof numberAge}`);
console.log('------------------------------------------------------------------------------------------------------------------------');

const booleanTrue = true
console.log(`Variable name: booleanTrue.    Variable value: ${booleanTrue}.    Variable type: ${typeof booleanTrue}`);
console.log('------------------------------------------------------------------------------------------------------------------------');

const someUndefined = undefined
console.log(`Variable name: someUndefined.    Variable value: ${someUndefined}.    Variable type: ${typeof someUndefined}`);
console.log('------------------------------------------------------------------------------------------------------------------------');

const someNull = null
console.log(`Variable name: someNull.    Variable value: ${someNull}.    Variable type: null`);
console.log('------------------------------------------------------------------------------------------------------------------------');

const someArray = ['Hello', 'Goodbye', 'LOL', 'BRB', 'whatsup', 'no way!'];
console.log(`Variable name: someArray.    Variable value: [${someArray}].    Variable type: Array`);
console.log('------------------------------------------------------------------------------------------------------------------------');

const someObject = {
  firstName: 'Lewis',
  lastName: 'Cho',
  birthday: 'July 1, 1993',
  age: '27',
  gender: 'Male'
}
console.log(`Variable name: someObject.    Variable value: ${JSON.stringify(someObject)}.    Variable type: ${typeof someObject}`);
console.log('------------------------------------------------------------------------------------------------------------------------');


// INSTRUCTIONS.
// Create 7 variables.
// 1. Create a string variable with the value, 'Hello world!'.
// 2. Create a number variable with the value, 123456
// 3. Create a boolean variable with the value, false
// 4. Create a null variable with the value, null
// 5. Create an undefined variable with the value, undefined
// 6. Create an array variable with the values: 23, 'hello', undefined, null
// 7. Create an object variable with the key/value pairs of make/Honda, model/Civic, year/2020, isManual/false