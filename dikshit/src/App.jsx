// import Profile from './components/Profile';
// import Header from './components/Header';
// import React from 'react'

// import { useState } from 'react';
// function App() {
//     const [username , setUsername] = useState("test@123")
//     console.log('app is running')
//   return (
//     <div>
//     <h1 className='text-center text-2xl font-bold m-4'>PROPS DRILLING</h1>

//     <Profile username={username}/>
//     <Header username={username}/>

//       <button className='px-10 py-4 bg-sky-500 rounded-xl text-white font-medium' onClick={()=>setUsername('newtest@123')}>Click</button>
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import { useReducer } from 'react';
// function App() {
//   //first step create a initialState object
//   const initialState = {
//     count: 0,
//   };
//   //define a reducer function ,
//   //Reducer function takes  the state and action based on the action it updates the state variable
//   const reducer = (state, action) => {
//     console.log(state, action);
//     if (action.type === 'increment') {
//       return { count: state.count + 1 };
//     } else {
//       return state;
//     }
//   };
//   //step 3 pass both reducer and initial state as an argument in the usereducer hook
//   const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state, dispatch);

//   const handleIncrement = () => {
//     dispatch({ type: 'increment' });
//   };
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// }


// export default App;

// import React, { useEffect } from 'react';
// import { useReducer } from 'react';

// function App() {
//   const initialState = {
//     data: null,
//     loading: false,
//     error: null,
//   };

//   const reducer = (state, action) => {
//     if (action.type === 'FETCH_PENDING') {
//       return { ...state, loading: true };
//     } else if (action.type === 'FETCH_SUCCESS') {
//       console.log(action.payload);
//       return { ...state, loading: false, data: action.payload };
//     } else if (action.type === 'FETCH_FAILED') {
//       return { ...state, error: action.payload, loading: false };
//     } else {
//       return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state);
//   //NOTE Handling api calls,using useReducer hook
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         dispatch({ type: 'FETCH_PENDING' });
//         const response = await fetch(
//           'https://jsonplaceholder.typicode.com/todos'
//         );
//         const data = await response.json();

//         dispatch({ type: 'FETCH_SUCCESS', payload: data });
//       } catch (error) {
//         dispatch({ type: 'FETCH_FAILED', payload: error.message });
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       {state.loading && <div>Loading...</div>}
//       {state.error && <div>{state.error}</div>}
//       {state.data && !state.loading && <div>{JSON.stringify(state.data)}</div>}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { increment } from './redux/slices/CounterSlice';
import { pending, success } from './redux/slices/TodoSlice';
function App() {

  const { count } = useSelector((state) => state.count);
  const {loading , todos} = useSelector((state)=>state.todos)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(pending());
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await response.json();
dispatch(success(data))
      
      } catch (error) {
      
      }
    };
    fetchData();
  }, []);
  return (
    <div className="font-bold text-3xl flex h-screen items-center justify-center flex-col">
      <h1>{count}</h1>
      {/* //replace this with count state variable */}
      <button
        onClick={handleIncrement}
        className="px-10 py-4 bg-blue-300 text-white font-bold"
      >
        Increment
      </button>
      {loading && <div className='text-3xl'>Loading....</div>}

      {todos && !loading && <div>{JSON.stringify(todos)}</div>}
    </div>
  );
}

export default App;