import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Image } from "react-bootstrap";

const CartItem = (props) => {
  console.log(props);
  const { id, price, name, quantity, totalPrice, imageSrc } = props.item;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title: name,
        price,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <Fragment>
      <div key={id}>
        <div className="cart-item">
          <div className="row">
            <div className="col-md-6">
              <Image src={imageSrc} fluid />
            </div>
            <div className="col-md-6">
              <div className="item-name">
                <p className="font-weight-bold">{name}</p>
              </div>
              <div className="item-price">
                <p>Price : ${totalPrice.toFixed(2)}</p>
              </div>
              <div className="item-quantity">
                <p>Quantity : {quantity}</p>
              </div>
              <div className="item-button">
                  <div className="buttons">
                  <button
                  className="btn btn-secondary mr-2"
                  onClick={addItemHandler}
                >
                  +
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={removeItemHandler}
                >
                  -
                </button>
                  </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </Fragment>
  );
};

export default CartItem;
