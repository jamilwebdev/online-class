import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        total = total + item.price;
    }
    let shipping = 0;
    if(  total > 20 )
    {
        shipping = 5;
    }
    else if ( total > 10){
        shipping = 7;
    }
    return (
        <div>
             <h3>Order Summary</h3>
            <p>Item Order:{cart.length}</p>
            <p>Shipping:${shipping}</p>
            <p>Total Price:${total + shipping}</p>
        </div>
    );
};

export default Cart;