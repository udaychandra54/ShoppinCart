import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Image } from "react-bootstrap";

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div className="container pt-5">
      <div className="container pt-5 text-center">
        <h2>Shopping List</h2>
      </div>
      {list.length === 0 && (
        <div className="text-center">
          <div className="spinner-border mt-3 " role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}

      <div className="row mt-5">
        {list.length !== 0 &&
          list.map((item) => {
            return (
              <div className="col-md-4 mt-3" key={item.id}>
                <div className="card shadow border-0">
                  <Image
                    className="card-img-top"
                    src={item.image}
                    style={{ width: "100%" }}
                    fluid
                  />

                  <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <p
                      className="font-weight-bold"
                      style={{ color: "chocolate" }}
                    >
                      Price : ${item.price}
                    </p>
                    <p className="card-text cart-text">{item.description}</p>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-outline-info "
                        onClick={() =>
                          dispatch(
                            cartActions.addItemToCart({
                              id: item.id,
                              price: item.price,
                              title: item.title,
                              imageSrc:item.image
                            })
                          )
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShoppingList;
