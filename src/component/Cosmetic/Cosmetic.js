import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {product, price, name, id} = props.cosmetic;

    const addToCart = (id)=>{
        console.log("item added", id);
    }
    return (
        <div className='product-area'>
            <div className='product'>
                <h4>Product name: {product}</h4>
                <h4>Buy this: {name}</h4>
                <h5>Only for: ${price}</h5>
                <button onClick={()=>addToCart(id)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Cosmetic;