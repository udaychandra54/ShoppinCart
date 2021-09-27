import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setList(data));
    setIsLoading(false);
  }, []);

  return (
    <div className="container">
      <center>
        <h2>Shopping List</h2>
      </center>
      {isLoading && (
        <center>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </center>
      )}
      
      <div className="row mt-5">
        {!isLoading  && list.map((item) => {
          return (
            <div className="col-md-4 mt-3" key={item.id}>
              <div className="card shadow border-0">
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="image"
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <p
                    className="font-weight-bold"
                    style={{ color: "chocolate" }}
                  >
                    Price : ${item.price}
                  </p>
                  <p className="card-text">{item.description}</p>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-info "
                      onClick={() =>
                        dispatch(
                          cartActions.addItemToCart({
                            id: item.id,
                            price:item.price,
                            title:item.title
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
