import React from 'react';
import { multiply } from '../utilities/calculate';

const Cosmetic = () => {
    const first = 98;
    const second = 52;
    const total = multiply(first, second)
    return (
        <div>
            <h4>Cosmetic budget: {total}</h4>
        </div>
    );
};

export default Cosmetic;