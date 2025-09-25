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

// import { useState } from "react";

// function App(){
//   const [email ,setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (event) =>{
// console.log(event.target.value)
// setEmail(event.target.value)
//   }

//   const handlePasswordChange = (event) => {
// console.log(event.target.value)
// setPassword(event.target.value)    
//   }
//   return (
//     <div>
//       <h1>FORM HANDLING</h1>
//       <h1>GETTING VALUES OUT OF THE FORM INPUT FIELDS AND SUBMIT THE VALUES AS AN OBJECT</h1>
//       <form>
//         <label>Email</label>
//         <input onChange={handleEmailChange} type="email" name="email"  />
//         <label>Password</label>
//         <input onChange={handlePasswordChange} type="password" name="password" />
//         <button>Submit</button>
//       </form>                               
//       <p>Email : {email}</p>
//       <p>Password : {password}</p>
//     </div>
//   )
// }
// export default App;


//rfcs  , rfce

// import React from 'react'

// function App() {
//   const NumberList = [1,2,3,4,5,6];
//   return (
//     <div>
//     {NumberList.map((num)=>(
//       <div key={num}>
//         <h1>{num}</h1>
//       </div>
//     ))}
//     </div>
//   )
// }
// export default App

//list of 10 product array of object :
//show all this product on ui


// import {useState} from 'react'

// function App() {
//   const [list,stelist] = useState(['Mobile','Ac','Tv'])
//   const [Input,setInput] = useState('');
//   console.log()



//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     setList([...list, input]);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type='text'/>
//         <button>Add Product</button>
//       </form>
//       {list.map((product))}
//     </div>
//   )
// }

// export default App


// function App(){
//   const [isError , setIsError] = useState(false)
//   const [data , setData] = useState([1,2])
//   const handIsError =()=>{
//     setIsError(!isError)
//   }
//   return(
//     <div>
//       {isError ? <h1 >Error</h1>: <h1>No Error Found</h1>}
//       <button onClick={handIsError}>
//         {isError ? "Remove error" : "Show error"}
//       </button>

//       {isError && (
//         <h1>this is showing using logical shortcircuiting operator</h1>
//       )}
//       {!isError && <h1>There is no error to show</h1>}

//       {data.length === 0 ? (
//         <h1>
//           You have no data <button>Refresh</button>
//         </h1>
//       ):(
//         <h1>{data.length}</h1>
//       )}
//     </div>
//   );
// }

// import React from 'react';
// import { useEffect , useState} from 'react';
// import { Routes } from 'react-router-dom';

// function App(){
//   const [products,setProduct] = useState([])
//   const [selectedId , setSelectedId] = useState(null);
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data)
//       });
//   }, []);
//   const handleSelectChange = (e) => {
//     setSelectedId(e.target.value)
//   }}
//   useEffect(()=>{
//      fetch(`https://fakestoreapi.com/products/${selectedId}`)
//     .then((res) => res.json())
//     .then((data) => {
//      console.log(data)
//     });
//   },[selectedId])
  
//   return 
//     <div>
//     <select onChange={handleSelectChange} >
//       {products.map((product)=>(
//         <option value={product.id}>{product.title}</option>
//       ))}
//     </select>
//     <h1>{selectedId}</h1>
//   </div>;
 
// export default App

// function App(){
//   <div>
//     <Routes>
//       <Route path="/" element={<Homepage />}/>
//       {/* <Route path="/about-us" element={}/> */}
//     </Routes>
//   </div>
// }

// import Homepage from './pages/Homepage';
// import { Routes, Route } from 'react-router-dom';
// import Aboutuspage from './pages/Aboutuspage';
// import Servicepage from './pages/Servicepage';
// import Navbar from './components/Navbar';
// import Login from './pages/Login';
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about-us" element={<Aboutuspage />} />
//         <Route path="/services" element={<Servicepage />} />
//         <Route path='/login' element={<Login/>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React from 'react';

import Homepage from './page/Homepage';
import { Routes, Route } from 'react-router-dom';
import Aboutuspage from './page/Aboutuspage';
import Servicepage from './page/Servicepage';
import Navbar from './component/Navbar';
import Login from './page/Login';
import Productpage from './page/Productpage';
import ProductDetails from './page/ProductDetails';
import Dashboardpage from './page/Dashboardpage';
import Overviewpage from './page/Overviewpage';
import Customerspage from './page/Customerspage';
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        {/* this is a open route */}
      <Route path="/login" element={<Login />} />

{/* this all going to  be protected routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<Aboutuspage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboardpage />}>
          <Route index element={<Overviewpage />} />
          <Route path="overview" element={<Overviewpage />} />
          <Route path="customers" element={<Customerspage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;