import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { name, price, quantity, shipping, img, _id } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>Name: {name}</p>
          <p>
            <small>
              Price: <span className="price-color">${price}</span>
            </small>
          </p>
          <p>
            <small>
              Shipping: <span className="price-color">${shipping}</span>
            </small>
          </p>
          <p>
            Order Quantity: {quantity}
            <small>pcs</small>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(_id)} className="btn-delete">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
