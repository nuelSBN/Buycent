import React from "react";
import Products from "./Products";
import "./trending.css";

const TrendingProducts = () => {
  return (
    <div className="trend">
      <h3>Trending Deals for You</h3>
      <div className="trendingRows">
        <Products
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/Z/185650_1616156796.jpg"
          title="A school bag"
          oldPrice="6000"
          newPrice="3000"
          percentOff="50%"
        />
        <Products
          image="https://cdn.shopify.com/s/files/1/0011/0162/7439/products/12progld_3ef79e99-e395-41c5-a9e0-8b7f0a00ce84_5000x.png?v=1611145058"
          title="iPhone 12 Pro 256GB"
          oldPrice="685,000.00"
          newPrice="171,250"
          percentOff="75%"
        />
        <Products
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/F/108581_1608225372.jpg"
          title="Samsung Galaxy Note 20 Ultra "
          oldPrice="527,000"
          newPrice="263,500"
          percentOff="50%"
        />
        <Products
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/P/87573_1602338103.jpg"
          title="Eurosonic Double Plate Electric Cooker With Protective Cover"
          oldPrice="11.500"
          newPrice="9000"
          percentOff="40%"
        />
      </div>
    </div>
  );
};

export default TrendingProducts;
