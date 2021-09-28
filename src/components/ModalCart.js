import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import CartItem from './CartItem';
import { useHistory } from 'react-router-dom';


const ModalCart = () => {
   
    const showCart = useSelector(state => state.cart.cartShow);
    const quantity = useSelector(state => state.cart.totalQuantity);
    let cartTotalPrice=0;
    const items = useSelector(state => state.cart.items);
   const history= useHistory();
   
    const dispatch =useDispatch()

    const handleClose = () =>{
        dispatch(cartActions.showCart())
    } 

    const cartData=()=>{
      dispatch(cartActions.showCart())
      history.push('/cart-data')
    }
    
    
    return (
        <div>
             <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container px-0">
            <p>Total Items : {quantity}</p>
           
            <div className="container px-0">
              {items.map(item=>{
                cartTotalPrice=cartTotalPrice+item.totalPrice;
                console.log(cartTotalPrice)
               return <CartItem item={item} key={item.id} cartTotalPrice={cartTotalPrice}/>
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p className='font-weight-bold mr-5'>TotalPrice : {cartTotalPrice}</p>
          <button className='btn btn-primary' variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button className='btn btn-primary'  variant="primary" onClick={cartData}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ModalCart
