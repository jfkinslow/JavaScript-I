// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:



// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M

// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F
// Write your intern objects here:

var interns = {
  // 1,mmelloy0@psu.edu,Mitzi,F
  "Mitzi": {
    "id": 0,
    "name": "Mitzi",
    "gender": "F",
    "email": "mmeloy@psu.edu"
  },
  //2,kdiben@tinypic.com,Kennan,M
  "Kennan": {
    "id": 1,
    "name": "Kennan",
    "gender": "M",
    "email": "kdiben@tinypic.com",
    "speak": () => 'Hello my name is Kennan!'
  },
  //3,kmummery2@wikimedia.org,Keven,M
  "Keven": {
    "id": 2,
    "name": "Keven",
    "gender": "M",
    "email": "kmummery2@wikimedia.org"
  },
  //4,gmartinson3@illinois.edu,Gannie,M
  "Gannie": {
    "id": 0,
    "name": "Gannie",
    "gender": "M",
    "email": "gmartinson3@illinois.edu"
  },
  //5,adaine5@samsung.com,Antonietta,F
  "Antonietta": {
    "id": 0,
    "name": "Antonietta",
    "gender": "F",
    "email": "adaine5@samsung.com",
    "multiplyNums": (num1, num2) => num1*num2
  }
}


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(interns.Mitzi.name);
// Kennan's ID
console.log(interns.Kennan.id);
// Keven's email
console.log(interns.Keven.email);
// Gannie's name
console.log(interns.Gannie.name);
// Antonietta's Gender
console.log(interns.Antonietta.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
console.log(interns.Kennan.speak());
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(interns.Antonietta.multiplyNums(7,2));
// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age: 70,
  speak() {
    console.log("Hello, my name is %s!", this.name);
  },
  child: {
    name: "George",
    age: 50,
    speak() {
      console.log("Hello, my name is %s!", this.name);
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speak() {
        console.log("Hello, my name is %s!", this.name);
      },
    }
  }
}


// Log the parent object's name
console.log("parent.name = %s", parent.name);
// Log the child's age
console.log("parent.child.age = %d", parent.child.age);
// Log the name and age of the grandchild
console.log("parent.child.grandchild.name = %s, parent.child.grandchild.age = %d", parent.child.grandchild.name, parent.child.grandchild.age);
// Have the parent speak
parent.speak();
// Have the child speak
parent.child.speak()
// Have the grandchild speak
parent.child.grandchild.speak();