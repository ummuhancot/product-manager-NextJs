import React from "react";
import menuItems from "@/helpers/data/main-menu.json";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { Linker } from "./Linker";

export const MainMenu = (props) => {
  return (
    <Nav className="mx-auto " {...props}>
      {menuItems.map((item) => (
        <Linker
          key={item.id}
          href={item.url}
          as={Link}
          prefetch={item.prefetch}
        >
          {item.title}
        </Linker>
      ))}
    </Nav>
  );
};
