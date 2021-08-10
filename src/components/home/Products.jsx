import React from "react";
import "./products.css";

const Products = ({image, title, oldPrice, newPrice, percentOff}) => {
  return (
    <div className="products">
      <img src={image} />
      <div className="productInfo">
        <p className="productName">{title}</p>
        <p className="productPrice">
          <strike className="strike">
            <small className="oldPrice">₦</small>
            <span className="oldPrice">{oldPrice}</span>
          </strike>
          <strong className="newPrice">₦</strong>
          <strong className="newPrice">{newPrice}</strong>
          <span className="percentOff"> {percentOff}</span>
        </p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Products;
