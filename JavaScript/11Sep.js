//

//Note input field for password 

//Note select in the js

//Note value fetch on input event

//Note check the length of value then show ui according to the condition


//task
// create a drop down using js dropdown should be open i enter the mouse on it
//create a modal using js
//create a dark and light thame card ui.

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('form is submitted');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  console.log(email.value, password.value);
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
});

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    btn.textContent = 'Light';
  } else {
    btn.textContent = 'Dark';
  }
});

//async code

console.log('1');
setTimeout(()=>{
    console.log('suttimeout is runing')
},4000)              
console.log(window)

const Interval = setInterval(()=>{
    console.log('this will run after each 2 sec')
},2000); 


// const promise = new Promise((resolve,reject)=>{
//     resolve('promise resolve')
// })
// console.log(promise);

const promise = new Promise((resolve, reject) => {
  let success;
  if (success) {
    resolve('data');
  } else {
    reject('not found');
  }
});

promise
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('this will run for both fulfilled and rejected'));

//NOTE function which return directly a promise we donot have to create it , and used for api call ;

//   fetch() => always return a promise you have to handle its states

const result = fetch('https://jsonplaceholder.typicode.com/todos');

result.then((response) => response.json()).then((data) => console.log(data));

