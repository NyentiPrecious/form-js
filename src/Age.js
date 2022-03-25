// import React from 'react'


export default function Age({age, changeCounter}) {
    
    return (
        <div>
            <h1>My age is {age- 3}</h1>
            <button onClick={()=>changeCounter('decrement')}>Decrement</button>
        </div>
    )
}