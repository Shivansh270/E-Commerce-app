import "./Cart.css";
import React from "react";
import { MdClose } from "react-icons/md";

const Cart = ({setShowCart}) => {
    return(
        <div className="cart-pannel">
            <div className="opac-layer"></div>
            <div className="cat-content">
              <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                  <span
                    className="close-btn"
                    onClick={() => setShowCart(false)}
                  >
                  <MdClose className="close-btn" />
                  <span className="text">close</span>
                </span>
              </div>
            </div>
        </div>
    );
};

export default Cart;
