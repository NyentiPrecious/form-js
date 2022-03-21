 import react from 'react'
import './file.css'

function file(){
let people = [
    { name: 'carine', age: '23', color:'dark'},
    { name: 'erika', age: '21', color:'fair'},
]
return(
  <div className="container">
      <div className="nav">
       <p>click me</p>
       </div>

       <div>Name.........</div>
       <div>Age.......</div>
       <div>color.....</div>
   </div>
)

return(
 
 <div>
     {
         people.map(function(person){
             console.log(person);
             return `Name: ${person.name} age: ${person.age} color: ${person.color}`

             const listpeople = people.map(function (eople) {
    return (
       <div>
        <span style = {{color:'red'}}>
          name: {person.name}
           </span> color:{person.color}
            <span style = {{color:'orange'}}> </span>
                        </div>             
         )
})
return (
    <div>
        {listpeople}
    </div>
         )
})
}
 </div>
         )
}

export default file;
