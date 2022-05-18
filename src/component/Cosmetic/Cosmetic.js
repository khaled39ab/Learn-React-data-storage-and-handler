import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {product, price, name} = props.cosmetic;
    return (
        <div className='compo'>
            <h4>Product name: {product}</h4>
            <h4>Buy this: {name}</h4>
            <h5>Only for: ${price}</h5>
        </div>
    );
};

export default Cosmetic;