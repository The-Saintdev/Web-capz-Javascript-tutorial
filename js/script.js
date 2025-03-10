//this is used to alert message to user when my website loads
// window.alert("i really love pizza")

//this is a single line comment
// Comment in JAVASCRIPT

/*
  This
  is
  a
  multiline
  comment
*/  

/*..............VARIABLES IN JAVASCRIPT...........*/ 

/*
  A variable is a container used for storing single data.

  Two steps in naming a variable in Javascript:

  1.Declaration (var, let, const);
  2.Assignment (= assignment operator)

  strings, Numbers, Boolean, Null, Undefined

*/

let myname = 'miracle';
const firstname = "chidozie"; //strings Datatype
var age = 21; //integer datatype
var count =22.1; //float datatype
let ages = "21"; //string datatype '21' + 1 = 211
let student = false; //Boolean datatype
let k = null; //Null datatype
let country; //undefined datatype

console.log(myname)
console.log(firstname)
console.log(age)

age = age + 12;
ages = ages + 31;

console.log(age)
console.log(ages)


/*.............ARITHMETICS IN JAVASCRIPT...........*/

/*
  it is a combination of...
  operands (values, variables, etc)
  operators (+, -, *, /, %)
  that can be evaluated to a value
  ex. y = x + 5;

*/

let students = 30;

let math1 = students + 1;
let math2 = students - 1;
let math3 = students * 2;
let math4 = students / 3;
let extrastudents = students % 4;

console.log(math1)
console.log(math2)
console.log(math3)
console.log(math4)
console.log(extrastudents);

students += 1;  //means "students = students + 1"
students -= 1;  //means "students = students - 1"
students *= 2;  //means "students = students * 2"
students *= 3;  //means "students = students / 3"

/*..........CONCENTRATION IN JAVASCRIPT..........*/
/*
  concentration is a way or method of adding or joining two or
  more variables together inJavascript.
*/

const firstnamez = 'Raymond';
const agez = 40;
const paragraph = 'My name is' + firstnamez + 'and i am' + 'years old';

//Template String
console.log(`My name is ${firstnamez} and i am ${agez} years old`);

const hello = `My name ${firstnamez} and i am ${agez} years old`;

console.log(hello);

/*................STRING FUNCTIONS IN JAVASCRIPT..........*/

let stringletter = 'Hello world'

console.log(stringletter)

console.log(stringletter.length)

console.log(stringletter.toUpperCase())

console.log(stringletter.toLowerCase())

console.log(stringletter.substring(0,7).toUpperCase())



/*..............ARRAYS............*/
/*
Arrays are varables that hold multiple values

*/

new Array();
[]

const numbers = new Array(1,2,3,4,5,6);

const multipleDatatype = ['hello','banana', 2, false]

console.log(numbers);

const fruits = ['apple', 'orange', 'grape', 'banana']

fruits[4] = 'pear'; //const fruits = ['apple', 'orange', 'grape', 'banana', 'pear'];

//How TO ADD ITEMS INSIDE YOUR ARRAY
//push() adds items at the end of your array while unshift() adds at
//the begining of your array

fruits.push('mangoes'); // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear', 'mangoes']

fruits.unshift('strawberry'); // const fruits = ['strawberry', 'apple', 'orange', 'grape', 'banana']

//How to REMOVE ITEMS INSIDE YOUR ARRAY
//pop() removes item at the last item in your array while
//shift() removes the first item in your array

fruits.pop(); // const fruits = ['strawberry', 'apple', 'orange', 'grape', 'banana', 'pear'];
fruits.shift(); // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear']

console.log(fruits);

//Arrays are zero based
console.log(fruits[1])
console.log(fruits[0])
console.log(fruits[3])

// CLASSWORK

const animals = ['kangaroo','Antelop', 'Mongoose', 'Ostrich', 'Gorilla'];
/*
    Questions
    
    1.Output the second item of the array on your console
    2.Add 'Lion' to the begining of the array.
    3.Add 'Zebra' to the ending of the array.
    4.Output the values of animals array on your console.
*/

//OBJECTS IN JNAVASCRIPT
const person = {
  firstname: 'John',
  lastname: 'Doe',
  Age: 30,

  hobbies: ['music', 'movies', 'sports'],

  address: {
    street: '50 main strt',
    city: 'Boston',
    state: 'Los angeles',
  }
}

//DESTRUCTURING, is the pulling of variables or values from an object. example

const { firstName, LastName, address: {state, city }} = person;

console.log(LastName);

// OR

//How to acces or get variables in an object in Javascript
console.log(person.firstName, person.LastName);

//How to acces or get value of array in an object in Javascript
console.log(person.hobbies[1]);

//How to access or get value of object in ana object in Javascript
console.log(person.address.city);

person.email = 'boyray470@gmail.com'

console.log(person);

//Arrays of an object
const NavBarList = [
  {
    id: '1',
    Name: 'Home'
  },
  {
    id: '2',
    Name: 'About us'
  },
  {
    id: '3',
    Name: 'Service'
  },
  {
    id: '4',
    Name: 'Conatct us'
  }
]
//LOOPS IN JAVASCRIPT

//TYPES OF LOOPS
// FOR LOOP
/*
  For loop it takes 3 parameters: first is the initializer, second is the condition to be met, third is the
  increment
*/
const basket = ['mango', 'apple', 'orange', 'grape'];

for (let m= 0; m < basket.length; m++) {
  const element = basket[m];
  
}

//CLASSWORK

//use for loop to output the values of array i.e wildanimals in your console

let wildanimals = ['lion', 'tiger', 'python', 'wolf', 'leopard'];

//2. While loop (old school)
let i = 0;
while (i < wildanimals.length) {
  console.log(wildanimals[i]);
  i++;
}

const todos = [
  {
    id: 1,
    text: 'Take out Trash',
    iscompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    iscompleted: true
  },
  {
    id: 3,
    text: 'Dentist Appointment',
    iscompleted: true
  }
]

// 3. For of loop in JAVASCRIPT

for (let ray of todos) {
  console.log(ray.id);
  console.log(ray.text);
}

// 4. ForEach

todos.forEach(ray => {
  console.log(ray.text)
});

todos.forEach(ray => {
  console.log(ray.id)
});

// 5. Map
todos.map(function(todo){
  console.log(todo.text);
})

// FILTER
const todocompleted = todos.filter(function(todo){
  return todo.iscompleted === true;
}).map(function(todo){

  return todo.text

})

console.log(todocompleted);

// == & ===

// if statement in JAVASCRIPT

const ipaddress_Nigeria = 112324;
const ipaddress_USA = 223445;

if (ipaddress_Nigeria = 112324) {
  console.log('welcome to our website');
}else{
  console.log('does not support your country');
}

let x = 20;

if (x=== 10) {
  console.log('x is 10');

}else if (x > 10) {
  console.log('x is  greater than 10');

}else{
  console.log('x is less than 10');
}
const y = 4;
const z = 10;

if (y > 5 || z > 9) {
  console.log('y is more than 5 or z is more than 10');
}

if (y > 5 && z > 9) {
  console.log('y is more tahn 5 or z is more than 10');
}

//tenary operators, is like a shorthand IF statement, it is used to assign variable based on condition
const agesgrade = 17;

const output = agesgrade >=18 ? 'red' : 'blue';
console.log(output);

//SWITCH STATEMENT
let carcolor = 'purple';

switch (carcolor) {
  case 'red':
    console.log('color is red');
    break;
  
  case 'blue':
    console.log('color is blue');
    break;

  default:
    console.log('color is NOT red or blue')
    break;
}

// FUNCTIONS

// Normal Function

function goodmorning() {
  console.log('Good Morning Dear')
}
goodmorning();

function lesi() {
  console.log('Lesi is a software developer')
}
lesi();

function Eben() {
  console.log('Eben is a software developer')
}
Eben();

Racheal();