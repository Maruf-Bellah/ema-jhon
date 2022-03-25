import React, { useEffect, useState } from 'react';
import Shoe from './Shoe/Shoe';
import'./Container.css';
import Cart from '../../Cart/Cart';

const Container = () => {
     const [products, setProduct] = useState([]);
     const [cart, setCart] = useState([])
  
  
     useEffect(()=>{
          fetch('products.json')
          .then(res=> res.json())
          .then(data => setProduct(data))
     },[]);

     
     const handleAddToCart = (product) =>{
          const newCart =[...cart,product];
          setCart(newCart)
          // console.log('click me');
     }

  
     return (
          <div className='containers'>
            <div className="cartInfo-container">
            
                 {
                    products.map(product => <Shoe 
                         key={product.id}
                         product = {product}
                         handleAddToCart = {handleAddToCart}
                         ></Shoe>)
                 }

            </div>
            <div className="cart-container">
                 <Cart  cart ={cart}></Cart>
            </div>
               
          </div>
     );
};

export default Container;