import React from 'react';
import './TShirt.css';

const TShirt = ({handleAddToCart, tShirt}) => {
    const {name, picture, price} = tShirt;

    console.log();

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button className='cart-button' onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;