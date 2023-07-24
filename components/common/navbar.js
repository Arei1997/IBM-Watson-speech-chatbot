import { Box, Button } from "@mui/material";
import React from "react";
import { BaseContainer, NavBox, NavbarInner } from "./elements";
import Image from "next/image";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from "./cart";
const Navbar = () => {
  return (
    <NavBox>
      <BaseContainer>
        <NavbarInner>
          <Image
            src="/shop.svg"
            alt="Shop Logo"
            width={45}
            height={45}
            priority
          />
          <ShoppingCart/>
        </NavbarInner>
      </BaseContainer>
    </NavBox>
  );
};

export default Navbar;
