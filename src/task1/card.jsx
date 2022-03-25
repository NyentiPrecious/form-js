import React from 'react'
import cherries from './img/cherries.jpg'

export default function Card({item}) {
    console.log(item);
    return(
        
                 
                 <div className="card">
                     <img src={item.img} alt="" className='img-section'/>
                 
              <div>
                 <div>{item.firstText}</div>
                 <div> {item.secondText} </div>

              </div>
           <span className='carret'> > </span>

        </div>


    )
}