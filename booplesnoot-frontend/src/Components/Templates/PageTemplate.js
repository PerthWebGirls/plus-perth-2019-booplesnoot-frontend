import React from "react";
import Header from "../Molecules/Header";
import Footer from "../Organisms/Footer";
import NavBar from "../Molecules/NavBar";

const PageTemplate = ({ ...props }) => {
  return (
    <div>
      <Header />
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default PageTemplate;
