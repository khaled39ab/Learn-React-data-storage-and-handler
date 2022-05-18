import React from 'react';
import { addToDb } from '../utilities/fakeDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {product, price, name, id} = props.cosmetic;

    const addToCart = (id)=>{
        addToDb(id);
    }
    return (
        <div className='product'>
            <h4>Product name: {product}</h4>
            <h4>Buy this: {name}</h4>
            <h5>Only for: ${price}</h5>
            <button onClick={()=>addToCart(id)}>Add to cart</button>
        </div>
        
    );
};

export default Cosmetic;