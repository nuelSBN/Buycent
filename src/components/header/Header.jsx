import React from "react";
import "./header.css";
import SecondHead from "./SecondHead";

import TopHead from "./TopHead";

const Header = () => {
  return (
    <div className="header">
      <TopHead />
      <SecondHead />
    </div>
  );
};

export default Header;
