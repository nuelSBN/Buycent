import React from "react";
import "./home.css";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <div className="home">
      <div className="homeRow">
        <TrendingProducts/>
      </div>
    </div>
  );
};

export default Home;
