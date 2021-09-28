import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartData = () => {
  const dispatch = useDispatch();
  let total=0;
  const items = useSelector((state) => state.cart.items);

  console.log(items);
  return (
    <div className="pt-5 pb-5">
      <center>
        <h4 className="pt-5">Cart Data</h4>
      </center>
      <div className="container">
        {items.map((item) => {
            total =total+item.totalPrice;
            
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className="container" style={{display:'flex',justifyContent:'space-between'}}>
          <p>Total Price : ${total}</p>
          <button className='btn btn-success'>Order Item</button>
      </div>
    </div>
  );
};

export default CartData;
