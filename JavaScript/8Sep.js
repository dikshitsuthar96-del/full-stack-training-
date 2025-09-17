const detail = {
    firstName  : "test",
    age : 34 ,
    address : {
        city : "jaipur",
        pincode : 302033 
    }
}
// const {age , firstName} = detail ;
//default values ;
// const {age : agee , firstName : fname , city ='jaipur '} = detail

// console.log(agee , fname, city)

//NOTE NESTED OBJECT :
const {address : {city}} = detail ;
console.log(city)
const numbers = {
    a : 5 ,
    b  : 8 ,
}
//function paramter destructuring if argument is an object;
const sum = ({a,b}) => a + b ;
console.log(sum(numbers));

//NOTE function destructuring in the case the function argument is an array 
const getRoles = ([role1,role2]) => console.log(role1, role2) ;
getRoles(['admin','user'])

//Note : SPREAD OPERATOR(....):
const number = [1,2,3,4,5];
console.log(...number);  

//Note: USES CASES
const evenNumber = [2,4,6,8];
const evNumber = evenNumber;
console.log(evNumber,evenNumber)
evNumber[0] = 10;
console.log(evNumber,evenNumber)

const oddNumber = [1,3,5,7];
const odNO =[...oddNumber];
console.log(odNO,oddNumber);
odNO[0] = 19;
console.log(odNO,oddNumber);

//concat;
const frontend = ['HTML','CSS'];
const backend =['NODE','express']
const mernStack = [...frontend,...backend]
console.log(mernStack);
const updatedFrontend = ['FIGMA',...frontend,'Reactjs'];
console.log(updatedFrontend);

const product =['AC','TV','FRIDGE','MOBILE'];
const [a,...rest] = product;
console.log(a,rest)

const obj ={
    age:24
}
const obj2={
    age:29
}
console.log(obj,obj2)

const car ={
    brand :"Hyundai",
    color :"white"
}
console.log({...car, color : "black"})

//Note: Rest pramtar *****
// function test(a,...rest){
//     console.log(a,rest);
//     rest.forEach{(el)=>console.log(el)};
// }

//Note: OBJECT METHODE
const course={
    name : 'javaScript',
    price : 100
}
//OBJECT.keys();
const keyOutput = Object.keys(course);
keyOutput.forEach((key)=>{

})
//OBJECT.values ;
Object.values(course).forEach(value=>console.log(value));

//OBJECT.entries
const entriesOutput = Object.entries(course);
console.log(entriesOutput);
entriesOutput.forEach(([key,value])=>{
    console.log(`${key} : ${value}`)
})

//Object.freeze ;
const userDetails   = {
    email : 'user@gmail.com' ,
    password : 'user@123'
}
Object.freeze(userDetails); //completely freeze the object neither add new proptery nor update existing one 
userDetails.age = '34';
userDetails.email = 'user2@gmail.com'
console.log(userDetails);

//NOTE OBJECT.ASSIGN OOPS :
//check if any property exist on the object or not
console.log(userDetails.hasOwnProperty('email'))

//NOTE MATH OBJECT ;
//round up to the nearest integeer
console.log(Math.round(3.5));
//remove only decimal
console.log(Math.trunc(8.6));
console.log(Math.floor(4.8)); //lower integer
console.log(Math.ceil(4.8)); //upper integer
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))
//note generate the random number between 1 to 10;
console.log(Math.floor((Math.random()*10)+1));


//NOTE DATE METHODS :
const date = new Date();
console.log(date);

const getMonth = date.getMonth() 
// (0-11) ;
console.log(getMonth + 1)
console.log(date.getDate());
console.log(date.getMinutes());
console.log(date.getFullYear());
console.log(date.getSeconds());

//manually generate data and time ;
const newDate = new Date(2027,8,8,5,30,20) ;
console.log(newDate) ;
//formatting 
console.log(newDate.toDateString());
console.log(newDate.toTimeString());

//NOTE TIMESTAMP 
const timeStamp = Date.now() ;
console.log(timeStamp) ; //epoch timestamp
//conversion of the epoch timestamp to the normal date and time string ;
const timeAndDate = new Date(timeStamp);
console.log(timeAndDate);
console.log(timeAndDate.setMonth(4));
//try set function for all the minutes , year , sec , day 
console.log(timeAndDate)


//SCOPES : GLOBAL , BLOCK , FUNCTION SCOPE :

const lastName = 'test';
if (true) {
  console.log(lastName);
}
function test2() {
  console.log(lastName);
}
test2();

//block check behaviour of the variable define by let ,const ,var
if (true) {
  const aa = 'hello'; //no access reference error
  let b = 'hi'; // no access reference error
  var c = 'bye'; //can be accessed
}
// console.log(aa)

function greet() {
  const firstNamee = 'test';
  let lastNamee = 'test2';
  var agee = 34;
}
greet();
console.log(agee);
