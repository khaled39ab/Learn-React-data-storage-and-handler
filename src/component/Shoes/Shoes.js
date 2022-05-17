import React from 'react';
import { add } from '../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 26;
    const total = add(first, second)
    return (
        <div>
            <h4>Total: {total}</h4>
        </div>
    );
};

export default Shoes;