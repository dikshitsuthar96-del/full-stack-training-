// // function App(){
// //   const firstname = 'test'
// //   return (
// //     <div>
// //       <Button title="Register" color="gray"/>
// //       <Button title="login" color="blue"/>
// //       <Button title="Add to cart" color="green"/>
// //     </div>
// //   )
// // }
// // function Button({title,color}){
// //   console.log(title,color)
// //   return <button style={{backgroundColor:color}}>{title}</button>
// // }
// // export default App;

// function App(){
//   const handletLoginClick =()=>{
//     alert('login click')
//   } 
//   const handlePrintName =(name)=>{
//     alert('hi $(name)')
//   }
//   return(
//     <div>
//       <button onClick={()=> console.log('hi')}>click</button>
//       <button onClick={handletLoginClick}>login</button>
//       <button onClick={()=>{handlePrintName('test')}}>Print Name</button>
//     </div>
//   )
// }
// export default App


// // function Button(){
// //   return(
// //     <div>
// //       <button>LOGIN</button>
// //     </div>
// //   )
// // }
// // import "./App.css"

// // const version = 19;

// // function App(){
// //   return(
// //     <div>
// //       <h1 style={{color: 'black',}} className="heading">
// //         REACT : {version}
// //       </h1>
// //       <input type="text" maxLength={10}/>
// //     </div>
// //   )
// // }
// // export default App 


// // function Button(){
// //   return (
// //     <button>click me </button>
// //   )
// // }
// // function Header(){
// //   return(
// //     <input type = "search" placeholder="search here" />
// //   )
// // }


//create any js variable then show it on the ui then update the variable on a button click
// import { useState } from 'react';
// function App() {
//   // Event handler function that triggers when the button is clicked.
//   // Conventionally, event handler names start with "handle".
//   const handleLoginClick = () => {
//     alert('login click');
//   };
//   console.log(useState('REACT'));
//   let [newTechnology, setNewTechnology] = useState('ANGULAR');
//   console.log(newTechnology);

//   // Event handler function that accepts an argument.
//   const handlePrintName = (name) => {
//     alert(`hi ${name}`);
//   const handleClick = () => {
//     setNewTechnology('REACT');
//   };
// }
//   return (
//     <div>
//       {/* Directly passing an inline function as the event handler */}
//       <button onClick={() => console.log('hi')}>Click</button>

//       {/* Passing a predefined handler function without arguments */}
//       <button onClick={handleLoginClick}>Login</button>

//       {/* If the handler requires arguments, use an arrow function to pass them */}
//       <button
//         onClick={() => {
//           handlePrintName('test');
//         }}
//       >
//         Print Name
//       </button>
//       <h1>{newTechnology}</h1>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }

// export default App;

//hooks  => js function


//create three state variables like name , email , password ;

// update all this at once when user click on a button 

// import { useState } from 'react';   
// function App() {
//   console.log(useState('REACT'));
//   let [newTechnology, setNewTechnology] = useState('ANGULAR');
//   console.log(newTechnology);
//  const [name , setName] = useState('TEST')
//  const [email,setEmail] = useState('test@gmail.com')
//  const [password ,setPassword] = useState('2421@123') ;

//   const handleClick = () => {
//     setNewTechnology('REACT');
//   };
//   const handleUpdateClick = () => {
//     setName('NEW-TEST')
//     setPassword('12345')
//     setEmail('newtest@gmail.com')
//   }
//   return (
//     <div>
//       <h1>{newTechnology}</h1>
//       <h1>{`${name} ${email} ${password}`}</h1>
//       <button onClick={handleUpdateClick}>Click to update</button>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }
// export default App

import { useState } from "react";

function App(){
  const [email ,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) =>{
console.log(event.target.value)
setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
console.log(event.target.value)
setPassword(event.target.value)    
  }
  return (
    <div>
      <h1>FORM HANDLING</h1>
      <h1>GETTING VALUES OUT OF THE FORM INPUT FIELDS AND SUBMIT THE VALUES AS AN OBJECT</h1>
      <form>
        <label>Email</label>
        <input onChange={handleEmailChange} type="email" name="email"  />
        <label>Password</label>
        <input onChange={handlePasswordChange} type="password" name="password" />
        <button>Submit</button>
      </form>
      <p>Email : {email}</p>
      <p>Password : {password}</p>
    </div>
  )
}
export default App;