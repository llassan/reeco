import styled from "styled-components";
import myImage from "../assets/images/text-1695735020913.png";
import { Link } from "react-router-dom";

export const Wrapper = styled.nav`
  width: 100%;
  /* height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; */
  background-color: #41644a;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 50px;
  }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  /* height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; */
  background-color: black;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  /* flex: 70%; */
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const MiddleContainer = styled.div`
  /* flex: 30%; */
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;
export const RightContainer = styled.div`
  /* flex: 30%; */
  display: flex;
  justify-content: flex-end;
  margin-left: 260px;
  /* border: 1px solid red; */
  /* padding-right: 50px; */
  /* position: absolute; */
  /* right: 100px; */
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  /* margin: 10px; */
  padding: 10px 40px;
  align-self: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

// export const Logo = styled.img`
//   margin: 10px;
//   max-width: 180px;
//   height: auto;
// `;

export const Logo = styled.img`
  width: 60px;
  height: auto;
  /* margin-right: 50px; */
  padding: 10px 40px;
  max-Height: 40px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
