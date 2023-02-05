import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = product.price + total;
    shipping = product.shipping + shipping;
  }
  const taxString = (total * 0.1).toFixed(2);
  const tax = parseFloat(taxString);

  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Item Selected: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax:${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal}</h5>
    </div>
  );
};

export default Cart;
