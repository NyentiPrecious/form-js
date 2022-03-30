import React from 'react'
import cherries from './img/cherries.jpg'

export default function Card({item}) {
    console.log(item);
    return(
        
         
            <div className="card">
             0
            <div className="l">
            <div> <img src={item.img} alt="" className='img-section'/> </div>
                
                 <div>{item.firstText}</div>
                 </div> 
                 :
            </div>
        
    )
}