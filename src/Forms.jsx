import {useState} from 'react'

export default function Form() {
  const [name, setName] = useState()
  const [number, setNumber] = useState()
  const [choice, setChoice] = useState()

  const handleName = (e)=>{
  setName(e.target.value);

  }

  const Submit = () => {
    console.log(name, number, choice);
  }
    
  const handleNumber = (e)=>{
    setNumber(e.target.value);
    }

    const handleChoice = (e)=>{
      setChoice(e.target.value);
      }
    
    return(
        <div>
        <form >
        
        <h1>{name}</h1>
        <h2> {number} </h2>
        <h3> {choice} </h3>
      
           
           <input onChange={handleName} type="text"/>
          <input onChange={handleNumber} type="number"/>

          <select onChange={handleChoice}  name="" id="">
          <option value="1">Dog</option>
          <option value="2">Dance</option>
          <option value="3">Sing</option>
          <option value="4">Books</option>
          </select> 

          <button type='button' onClick={Submit} >Submit</button>

        </form>
    </div>
    )
    
}