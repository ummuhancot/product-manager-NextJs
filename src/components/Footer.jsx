"use client";
import React from "react";
import { MainMenu } from "./MainMenu";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white p-5">
      &copy; {new Date().getFullYear()} copyright by Cosmo Shop
      <MainMenu className="d-flex justfiy-content-center" />
    </footer>
  );
};

export default Footer;
