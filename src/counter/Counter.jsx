import React, {useState} from "react";
import './Counter.css'

export default function Counter(params) {
          const [count, setCount] = useState(0)

    return <div className="container  " >
              <div className="card ">
                  <div className="card-body">
                          <h1>Simple Counter</h1>

                          <div className="but" >
                              <h2> {count} </h2>

                              <button onClick={() => setCount(count + 1) }  >Increase</button>
                              <button onClick={() => setCount(0) }  >Reset</button>
                              <button onClick={() => setCount(count - 1) } disabled = {(count === 0)} >Decrease</button>
                              

                          </div>
                  </div>
                  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
     </div>                                                                                                                                                                                                                                                                                                                              
}

