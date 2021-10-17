
import React from "react";
//import { Logo } from '';
import { NavUserData } from "../NavUserData/NavUserData";
import { NavbarContainer } from "./Navbar.styles";
import logoSrc from "../../assets/aerolab-logo.svg";

export const Navbar = (props) => {
  const { sticky, user, handleAddPoints } = props;

  return (
    <NavbarContainer className={sticky}>
      <img src={logoSrc} alt="logo" />
      <NavUserData user={user} handleAddPoints={handleAddPoints} />
    </NavbarContainer>
  );
};
