import React from 'react';
import add from '../../utilities/calculate';

const Shoes = () => {
    const first = 45;
    const second = 65;
    const result = add(first, second)
    return (
        <div>
            <h3>Price: {result}</h3>
        </div>
    );
};

export default Shoes;