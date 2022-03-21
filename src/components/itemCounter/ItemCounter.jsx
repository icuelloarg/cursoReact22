import React, { useState } from "react";
    
const itemCounter = () => {
  const [counter, setCounter] = useState(1);
  const stock = 10;

  const click1 = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }
  
  const click2 = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  
  return (
    <div className="contador">
      Stock 10
      <div className="certDiv">
        {counter}
      </div>
      <div className="buttons">
        <button className="plus"
          onClick={click1}>+</button>
        <button className="minus"
          onClick={click2}>-</button>
      </div>
    </div>
  )
}
  
export default itemCounter


