import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //send item to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{props.title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="product__rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={props.image} alt="productImage"></img>
        <button onClick={addToBasket} className="product__button">
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;