import React from 'react';

const Cosmetic = (props) => {
    const {product, price, name} = props.cosmetic;
    console.log(props);
    return (
        <div>
            <h4>Product name: {product}</h4>
            <h4>Buy this: {name}</h4>
            <h5>Only for: ${price}</h5>
        </div>
    );
};

export default Cosmetic;