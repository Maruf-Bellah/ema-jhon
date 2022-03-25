import { Toast } from 'bootstrap';
import React from 'react';
import'./Cart.css';

const Cart = (props) => {
   const {cart} = props;
    console.log(cart);

     let total = 0;
     let shipping = 0;
     for(const count of  cart){
          total = total + count.price;
          shipping = shipping + count.price;
     }
     let tax = parseFloat((total * 0.1).toFixed(2));
     let grand = total + shipping + tax;

     return (
          <div className='cart'>
              <h4>Order Summary</h4>
              <p>Selected Item : {cart.length}</p>
              <p>Total Price: {total}</p>
              <p>Total Shipping {shipping}</p>
              <p>Tax {tax}</p>
              <h4>Grand Total {grand}</h4>
          </div>
     );
};

export default Cart;