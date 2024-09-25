import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
};
