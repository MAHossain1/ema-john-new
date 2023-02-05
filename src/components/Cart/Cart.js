import React from "react";

const Cart = props => {
  return (
    <div>
      <p>Order Length: {props.cart.length}</p>
    </div>
  );
};

export default Cart;
