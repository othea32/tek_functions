console.log('Hello World');

console.log(add(2,3));
// declatarion
function add(x,y) {
  return x + y;
}

// expression
const add2 = function(x,y) {
  return x + y;
}

// arrow function
const add3 = (x,y) => {
  return x + y;
  
}

// function areBothEven(n1, n2) {
//  return !(n1 % 2) && !(n2 % 2);
// }
// console.log(areBothEven(1, 1));

// Write a function named computeArea using the function declaration approach.

// It will have two parameters: width & height.
// It will compute the area of a rectangle (width multiplied by height) and return a string in the following form:

// "The area of a rectangle with a width of ___ and a height of ___ is ___ square units."

function computeArea(width, height) {
  return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + width * height + " square units.";
}

console.log(computeArea(5, 4));

// Write a function named planetHasWater using the function expression syntax.

// It will have one parameter: planet.
// Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).

// const planetHasWater = function(planet) {
//   if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(planetHasWater("Earth"));

// function getDevObject(name) {
//  let skills = [];
//  for (let i = 1; i < arguments.length; i++) {
//    skills.push(arguments[i]);
//  }
//  return {
//    devName: name,
//    jobSkills: skills
//  };
// }

// let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');

// console.log(maria);

// function getDevObject2(name, ...skills) {
//  return {
//    devName: name,
//    jobSkills: skills
//  };
// }

// let maria2 = getDevObject2('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');

// console.log(maria2);

// function setColor(bicycle, color) {
// 	// set color to 'purple' if not provided
// 	bicycle.color = color || 'purple';
// }

// function setColor(bicycle, color = 'purple') {
// 	bicycle.color = color;
// }

// const bike = new Bicycle();
// setColor(bike, 'blue');  // sets color to blue
// setColor(bike);  // sets color to purple by default


// let a = ['red', 'green', 'blue'];

// a.forEach(function(color) {
//   console.log(color);
// });

// let myVar = 20;

// function passBy(myVar) {
//     myVar = myVar * 10;
//     return myVar;
// }

// let myVar = 20;

// function passBy(x) {
//     x = x * 10;
// }

// console.log(myVar);           // 20
// console.log(passBy(myVar));   // 200
// console.log(myVar);           // 20

// let myVar = { value: 20, type: 'Number' }

// function passBy(x) {
//     x.value = x.value * 20;
// }

// console.log(myVar);           // 20
// passBy(myVar);                // 200
// console.log(myVar);           // 20

// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     for (let i in array) {
//         if (array[i] % 2 !== 0) {
//             array.splice(i, 1);
//         }
//     }

//     return array;
// }

// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
// console.log(numArray); 

// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     let newArray = [];

//     array.forEach((element) => {
//         if (element % 2 == 0) {
//             newArray.push(element);
//         }
//     });

//     return newArray;
// }

// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]

// let numArray = [
//  { value: 10 },
//  { value: 20 },
//  { value: 0 },
//  { value: -10 }, 
//  { value: 15 }, 
//  { value: 28 }, 
//  { value: -1000 },
//  { value: 42 },
//  { value: 7 }
// ];

// function returnEven(array) {
//  let newArray = [];

//  array.forEach((element) => {
//      if (element.value % 2 == 0) {
//          newArray.push(element);
//      }
//  });

//  return newArray;
// }

// let newArray = returnEven(numArray);

// newArray[0].value += 10;


// numArray[3].value = 67;



// let myEvenValue = newArray[1].value;
// myEvenValue /= 2;

// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]

const person = {
 name: "John",
 age: 34,
 email: "john@example.com",
};

person.age = 20;
const personDeep = structuredClone(person);
const personShallow = { ...person };

personDeep.age = 50;

console.log(person);
console.log(personDeep);
console.log(personShallow);