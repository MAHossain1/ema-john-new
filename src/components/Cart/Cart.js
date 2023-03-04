import React from "react";
import "./Cart.css";

const Cart = props => {
  const { cart, clearCart, children } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    total = product.price * product.quantity + total;
    shipping = product.shipping * product.quantity + shipping;
    quantity = quantity + product.quantity;
  }
  const taxString = (total * 0.1).toFixed(2);
  const tax = parseFloat(taxString);

  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Item Selected: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax:${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      {/* <button onClick={clearCart}>Clear Cart</button> */}
      {children}
    </div>
  );
};

export default Cart;
