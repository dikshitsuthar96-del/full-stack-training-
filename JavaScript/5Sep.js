const cart = [{name : 'SHIRT',quantity :'3',price :'100'},
    {name : 'jeans',quantity :'2',price :'100'}];
    
    const filterOutput = cart.filter(el=>el.price === '100')
    console.log(filterOutput)

    const findOutput = cart.find(el=>el.price ==='100')
    console.log(findOutput);


 //Note: SOME;
 const evenNumber = [2,4,6,8];
 const someOutput = evenNumber.some((ele)=>{
    return ele >2;
 })
 console.log(someOutput);

 //Note: sort;
 const rendomarray = [1,2,3,40,5,6];
 console.log(rendomarray.sort((a,b)=>{
    return a-b
 }))

 //Note: STRING METHODS;
 const language ='javascript';

 console.log(language[0]);
 language[0]='z';
//  console.log(language)
 console.log(language.length)

 //Note: charAt;
 console.log(language.charAt(7));
 //Note: toUpperCase and toLowerCase
 console.log(language.toUpperCase());
 console.log(language.toLowerCase());
 //Note: slice;
 console.log(language.slice(1.6));

 //Note: split : TO CONVERT STRING INTO ARRAY
 const str = 'my name is Dikshit'
 console.log(str.split(''));


//  const string = 'hello this is a string'
//  console.log(string.split(''));
//  console.log()

//  const s = 'js is a string threaded' 
//  console.log(language[0]);
//  language[0]='z';
//  console.log(language)

//Note: startWith:
const course = 'MERNSTACK';
console.log(course.startsWith('MEK'))
//Note: endWith
console.log(course.endsWith('ACK'))

//Note: trimStart , trimEnd , trim
const stack = 'MERNSTACK';
console.log(stack.trimEnd());
console.log(stack.trimStart());

//Note: replace and replace all;
const frondend = 'REACTJS ARE ARE A LIBRARY';
console.log(frondend.replace('ARE'));

//Note: PADSTART AND PADEND
const ccNumber = '1234';
console.log(ccNumber.padStart(16,"*"))

//Note: SEARCH , MATCH , MATCHALL
const newStr = 'hello,this is js';
console.log(newStr.search('hello'))

//Note: DESTRUCTURING*****(IMP);
const numbers = [1,2,3,4,5];
const a=numbers[0];
const b=numbers[1];
console.log(a,b);
const userInfo = ['test@123','test123'];
const [userName,password]= userInfo;
console.log(userName,password);

const evenNumbers = [2,4,6,8];
const [x, ,y] = evenNumbers;
console.log(x,y);

const nestedArray = [1,2,[3,4,[5,6]]];
const [k,m,[n,o,[p,q]]] =nestedArray;
console.log(k,n,o,p,q);

const courses = ['js','React','Django'];
const [languages,library,framwork='angular'] = courses;
console.log(framwork);

const gadget = {
    name : "PSS",
    price : "400000",
}
const {price,name}=gadget;
console.log(price,name)

const user =[{name : "test",email : "test@gmail.com", role : ['admin','user']},
{name: "test2",email : "test2@gmail.com", role : ['Superadmin','admin']},]
user.forEach((el)=>{
    const {email,role} = el;
    console.log(email);
    const [firstRole , secondRole] = role;
    console.log(firstRole,secondRole);
});