import { useState } from "react";

export default function Todo(params) {
    const [text, setText] = useState([])
    const [filter, setFilter] = useState()

  const handleText = (e)=>{
    setFilter(e.target.value);
  
    }

     const handleFilter = (e)=>{
        //  setFilter(e.target.value);
      
        }

    const Submit = () => {
        let newList = [filter,...text]
        setText(newList)
        setFilter('')

        console.log(newList);
      }
    
    return(
        <div>



            <form>


             <h1>Task List</h1>

             <div>

             <input onChange={handleText} placeholder="add task" type="text"></input>

             <button type="button" onClick= {Submit} >ADD</button>

             <input placeholder="filter task"  onChange={handleFilter}  type="text"></input>
             </div>

            <div>
                {text.map(item => {
                    return (
                        <h4 style={{background:'blueviolet'}}> {item} </h4>

                    )
                })}
            </div>


            
</form>


        </div>
    )

}