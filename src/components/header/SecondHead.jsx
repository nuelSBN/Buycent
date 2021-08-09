import React from "react";

const SecondHead = () => {
  return (
    <div className="nav">
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/image/logo.png"}
        alt="logo"
      />
      <div className="headerSearch">
        <input className="searchInput" type="text" />
        <i className="searchIcon fas fa-search"></i>
      </div>
      <div className="headerNav">
        <div className="cart">
          <i className="sideIcon fas fa-cart-plus"></i>
          <span className="cartNumber">0</span>
        </div>
        <i className="sideIcon fas fa-bell"></i>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default SecondHead;
