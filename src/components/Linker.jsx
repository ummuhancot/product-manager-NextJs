"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { NavLink } from "react-bootstrap";

export const Linker = ({ children, ...props }) => {
  const pathname = usePathname();

  return (
    <NavLink {...props} className={pathname === props.href ? "active" : ""}>
      {children}
    </NavLink>
  );
};
