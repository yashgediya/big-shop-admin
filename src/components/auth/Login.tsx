import React from "react";
import ShopLogo from "../../assets/images/shop-logo.png";

const Login = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}></div>
      <div style={{ height: "100vh", width: "50%" }}>
        <img src={ShopLogo} height="100%" width="100%" />
      </div>
    </div>
  );
};

export default Login;
