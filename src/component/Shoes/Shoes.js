import React from 'react';
import { deleteCosmeticCart } from '../utilities/fakeDb';

const Shoes = () => {
    const removeAllDb = () =>{
        deleteCosmeticCart();
    }
    return (
        <div>
            <button onClick={removeAllDb}>All Remove from cart</button>
        </div>
    );
};

export default Shoes;