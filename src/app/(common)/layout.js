import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="flex-grow-1 my-3">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
