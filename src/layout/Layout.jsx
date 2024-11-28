import React from "react";
import { Outlet } from "react-router-dom";
import Background from "./Background";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      {/* 공통 Header */}
      <Header></Header>

      {/* 공통 Background 및 콘텐츠 */}
      <Background>
        <Outlet />
      </Background>
    </div>
  );
};

export default Layout;
