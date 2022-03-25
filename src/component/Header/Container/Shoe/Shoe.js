import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import'./Shoe.css';

const Shoe = (props) => {
     // console.log(props);

     const {name, img, price, seller ,ratings} = props.product;
     

    
    
     return (
          <div className='shoeCart'>
               <div>
                    <img src={img} alt="" srcSet="" />
                    <p className='name-info'>{name}</p>
                  <div className="shoe-info">
                
                    <p>Price: ${price}</p>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating : {ratings} Stars</small></p>
                  </div>
                  <button  onClick={() => props.handleAddToCart(props.product)} className='cart-info'>
                       <p>Add to Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                      
                  </button>
               </div>
          </div>
     );
};

export default Shoe;