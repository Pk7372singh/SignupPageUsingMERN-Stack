import React from "react";
import Home from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Header></Header>
      <main style={{ height: "80vh" }}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
