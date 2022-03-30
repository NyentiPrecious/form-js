import React from "react";
import cherries from './img/cherries.jpg'
    
export default function Buttom(params) {
    return(
        <div>
     
     <div className="input">
         <input className="input1" type='text' placeholder="phone number, username or email"></input>
         <input className="input2" type='text' placeholder="password" ></input>

        </div>

       <div className="line" style={{display:'flex'}} >
          <div className="end">
        <input type="text" className="sml"></input> <h2 className="sml1" >Remember for 30days</h2>
        </div>

          <h2 style={{margin:'0%',marginLeft:'10rem',fontSize:'smaller'}} >Forgot password</h2>

        </div>

        <div className="sur">

        <button className="fst" type="button">sign in</button>
        <button type="button" > Choose New Account </button>

        <div style={{display:'flex', paddingRight:'4rem'}} > <hr/>or continue with<hr/></div>

        </div>


        <div className="last">

        <img src={cherries} alt="" className="imges" style={{marginLeft:'520px'}} /> 
        <img src={cherries} alt="" className="imges" style={{marginLeft:'3rem'}} /> 
        <img src={cherries} alt="" className="imges" style={{marginLeft:'50px'}} /> 
        </div>

        <p style={{fontSize:'xx-small', marginLeft:'28rem', marginTop:'1rem' }} >By clicking button above, you agree to our <a href="https://" > terms of use </a> and
        <a href="https://" > privacy policies </a> </p>

        </div>
    )
}