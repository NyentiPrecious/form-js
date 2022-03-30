 import Nav from "./Nav"
 import './Task2Style.css'
 import Section1 from "./Bar"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
import Buttom from "./but"


 export default function Task2(params) {
     return(

     <div>
          <Nav></Nav>

          <Section1 columns={5}></Section1>

          <div style={{display:'flex'}} > <hr/> or <hr/> </div>

   <Buttom></Buttom>

        </div>
    )
 }