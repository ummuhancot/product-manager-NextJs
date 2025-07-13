"use client";

import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { MainMenu } from "./MainMenu";
import Image from "next/image";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand href="/" as={Link}>
          <Image
            src="/images/logo.png"
            width={250}
            height={40}
            alt="Cosmo Shop"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <MainMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
