import React, { useState } from "react";
import styled from "styled-components";
import myImage from "../assets/images/text-1695735020913.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {
  NavbarContainer,
  Wrapper,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";


function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={myImage}></Logo>
        </LeftContainer>
        <MiddleContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Store</NavbarLink>
            <NavbarLink to="/products"> Orders</NavbarLink>
            <NavbarLink to="/contact"> Analytics</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </MiddleContainer>
        <RightContainer>
          <NavbarLink>
            <div class="cart">
              <span class="count">{cartItems.length}</span>
              <i class="material-icons">shopping_cart</i>
            </div>
          </NavbarLink>
          <NavbarLink>
            Hi, James
            {/* <div> */}
            <Button
              id="basic-button"
              sx={{ color: "white" }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              // disableRipple
            >
              <IoIosArrowDown sx={{  }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            {/* </div> */}
          </NavbarLink>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Store</NavbarLinkExtended>
          <NavbarLinkExtended to="/products"> Orders</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Analytics</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </Wrapper>
  );
}
export default Navbar;
