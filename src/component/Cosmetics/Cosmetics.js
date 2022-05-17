import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import Shoes from '../Shoes/Shoes';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setCosmetics(data))
    },[])
    return (
        <div>
            <h2>Cosmetics store</h2>
            {
                cosmetics.map(cosmetic=>
                    <Cosmetic key={cosmetic.id}></Cosmetic>
                )
            }
            <Shoes></Shoes>
        </div>
    );
};

export default Cosmetics;