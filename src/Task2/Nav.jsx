import React from 'react'
 import cherries from './img/cherries.jpg'

export default function Nav() {
    
    return(

        <>
            <div className='Begin' >

               <div className='Top' >
                   <div className='bold' ><h2>Welcome back</h2></div>
                    <h5>Join the world's largest community</h5>
                </div>

               <div className='Side'>
                   <div >0</div>
                   <div>1</div>
                   {/* <img src={cherries} alt="" className="img" /> */}
                   {/* <img src={cherries} alt="" className="img" />  */}
                </div>

            </div>

            <div className='n' >
                Recent logins
            </div>

        </>
    )
}