import React from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/GGD/December20/SBC/Xbox_Series_S_Fortnite-1500X300_E_1.jpg"
          alt="adofferImage"
        ></img>
        <div>
          <h3> Hello , {user?.email}</h3>
        </div>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {/* CheckoutProduct */}
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
