import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartButton = () => {
    const quantity = useSelector(state => state.cart.totalQuantity);
    const showCart = useSelector(state => state.cart.cartShow);
     console.log(showCart)
    const dispatch = useDispatch();

 
  const handleShow = () => {
      dispatch(cartActions.showCart())
  }
    return (
        <div>
             <button className='btn btn-outline-info' onClick={handleShow}>
      <span style={{padding:'16px'}}>My Cart</span>
      <span className='badge badge-info'>{quantity}</span>
    </button>

  
        </div>
    )
}

export default CartButton
