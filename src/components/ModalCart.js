import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';


const ModalCart = () => {
   
    const showCart = useSelector(state => state.cart.cartShow);
    const quantity = useSelector(state => state.cart.totalQuantity);
    const items = useSelector(state => state.cart.items);
    console.log(items)
    const dispatch =useDispatch()

    const handleClose = () =>{
        dispatch(cartActions.showCart())
    } 
    
    return (
        <div>
             <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <p>Total Items : {quantity}</p>
            <div className="container">
              {/* {items.map(item=>{
                return(
                  <div key={item.id}>
                    <div className="title">{item.title}</div>
                  </div>
                )
              })} */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary' variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button className='btn btn-primary'  variant="primary" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ModalCart
