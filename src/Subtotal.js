import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
     <div className='Subtotal'>
      <CurrencyFormat
        renderText={(value) =>(
          <>
            <p>
                <bold>Subtotal (0 items):</bold>
                <strong>0</strong>
            </p>
            <small className='subtotal_gift'>
                <input type="checkbox" />This order contains a gift
          </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix="₹"
       />
       <button>Proceed to chechout</button>
    </div>
    
  );    


}

export default Subtotal;
