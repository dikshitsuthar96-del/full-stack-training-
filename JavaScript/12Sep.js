const form = document.getElementById('form');
const searchInput = document.getElementById('search');

const btn = document.getElementById('btn');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value;
  console.log(searchQuery);
  btn.textContent = 'Searching....';
  fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=b0eec689`)
     .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => {
      btn.textContent = 'Search';
    });
});


   fetch('https://randomuser.me/api/')
  .then((res) => res.json())
  .then((data) => console.log(data));

//you have to use await keyword in front of the fucntions which are returning a promise , await will wait  until  the promise is resolved and after that save the result into the variable
async function fetchData() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  console.log(data);
}
fetchData();

//in arrow function
//   const test = async() => {}

console.log('1');
Promise.resolve('hello').then((data) => {
  console.log(data);
});
setTimeout(() => {
  console.log('timer');
}, 0);
console.log('2');

//NOTE event loop , callback queue , microstask queue , callstack ;

//NOTE OOP object oriented promgrammming  ;

const side = 4;

function generateSquare(side) {
  console.log(`square has ${side}`);
}

generateSquare(side);

//side value =>

const obj = {
  side: 4,
  generateSquare: function () {
    console.log(`square has ${this.side}`);
  },
};

//factory function 
function genrateNewsquare(side){
return {
    side : side ,
    generateSquare: function () {
        console.log(`square has ${this.side}`);
      },
}
}
console.log(genrateNewsquare(1))
console.log(genrateNewsquare(2))

//Note: CONSTRUCTOR FUNCTION;
function person(firstName){
    this.firstName = firstName
}
const test = new person('test');
console.log(test)

//Note: task create a student constructor function task(name, roll no. and deparment create a method intro to console.log('') )
function Student(name, rollNo, department) {
  this.name = name;
  this.rollNo = rollNo;
  this.department = department;
  this.intro = function () {
    console.log('my name is ${this.name} roll no ${this.rollNo} departement ${this.department}');
  };
}
const Aman = new Student('Aman', '3424', 'CSE');
const Rahul = new Student('Rahul', '4323', 'CSE');
console.log('rahul', Rahul);
console.log(Aman);
console.log(Aman.intro());

Student.prototype.test = function () {
  console.log('this is test set on prototype which going to share for each student instance');
};
Aman.test();
Rahul.test();
// const newarr = new Array(1,2,3);
// console.log(newarr)

//adding a new method on the array prototype
Array.prototype.hi = function(){
    console.log('this is random method hi');

}
console.log([1,2,3].hi())

const obj2 ={
    age:'20'
}
const obj1 ={
    firstName:'test',
    __proto__:obj2
}
console.log(obj1);
console.log(obj1.age);


class person1{
    constructor(name,age){
        this.name=name,
        this.age = age
    }
}
const Ram = new person('Ram','34');
console.log(Ram);

//new updated object literal
const firstname = 'Dikshit';

const obj3 = {
  firstname, //if key and value have same name we can use directly
  intro: function () {
    console.log(this.firstname);
  },
  intro1() {
    console.log(this.firstname);
  }, //new way of writing method in the object
};

console.log(obj3);