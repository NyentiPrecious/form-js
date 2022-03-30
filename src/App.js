import Form from './Forms'
import Todo from './TodoList'
import Task from './Task';
import Task1 from './task1/index'
import Task2 from './Task2/index2';


// // import Name from './components/Name.jsx';
// import File from './components/File.jsx';
// // import style from './App.module.css';
// // import age from './Module';

// import age,{ name, value , rad} from './Module';

// // import Name from './Module';


// function App() {

// console.log(age, name, value , rad);

// // console.log('Default =' + Name);

//   return <h1>
    
//     yaya
   
//   </h1>
// }

// export default App;

// import Age from './Age'
// import {useEffect, useState} from 'react'

// function App(params) {
  
//   const [counter, setCounter] = useState(30)
//   const [first, setFirst] = useState(50)

  // const state = useState()

  // const counter = state[0]
  // const setState = state[1]

    // const [counter, setCounter] = useState(6)

  // const changeCounter = (option) => {

    // setCounter( counter + 1 )
    // console.log('I have been clicked on');
    
    // option == 'increment' && setCounter(counter + 1)
    // option == 'decrement' && setCounter(counter - 1)

// useEffect(() => {
//   console.log('first time to mount');
// },[])

//   useEffect (() => {
//     counter > 0 && setFirst(first + 1)
//   },[counter]);
  

//   return (
//      <div>

      {/* <Age></Age> 
      <h3> {counter} </h3>  
      <button onClick={()=>changeCounter('increment')}>Increment</button>
       <button onClick={()=>changeCounter('decrement')}>Decrement</button> 
       <Age age = {counter} changeCounter = {changeCounter}/>  */}

            {/* <div>Counter = {counter} </div>
            <div>first = {first} </div>
            <button onClick={()=>setCounter(counter + 1)}> Increment </button>
    </div>

  );
  

} */}





function App() {
  return(
    <div>
      {/* <Form></Form> */}


     {/* <Todo></Todo> */}

     {/* <Task></Task> */}

     {/* <Task1></Task1> */}

     <Task2></Task2>

    </div>
  )
}





















export default App;