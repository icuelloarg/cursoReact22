import React from 'react';
import cart from './cart.png'

const cartWidget = () => {
    return(
        <div className="cartWidget">
            <img src={cart} alt="cartLogo" />
        </div>
    )
}

export default cartWidget