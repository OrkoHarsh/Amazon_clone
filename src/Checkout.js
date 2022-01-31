import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function checkout() {
  return(
   <div className='checkout'>
    <div className='checkout_left'>
     
     <img  className="checkout_ad"
      src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JAN-ART-22/Bank/New/bank_stripe_elongated_pc_EN.jpg'
      
      alt=''/>
     {/* <img className='checkout_ad' 
     src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21/T2/Bank-Stripe/FST/FST_1500x100_English.jpg"
     alt=""/>*/}
        <div className='title'>
            <h2>Your Shopping Basket</h2>


            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
        </div>
    </div>

    <div className='checkout_right'>
        <Subtotal/>


    </div>
    

  </div>
  );
}

export default checkout;
