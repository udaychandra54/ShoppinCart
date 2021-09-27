import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartItem = () => {
    useDispatch(cartActions.addItemToCart())
    return (
        <div>
            
        </div>
    )
}

export default CartItem
