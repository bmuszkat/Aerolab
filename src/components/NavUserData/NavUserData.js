import React from "react";
import { Points } from "../Points/Points";
import {NavUserDataContainer,UserNameContainer} from "./NavUserData.styles";


export const NavUserData = (props) => {
  const { user,handleAddPoints } = props;
  return (
    <NavUserDataContainer>
        <UserNameContainer>Welcome, {user.name}</UserNameContainer>
        <Points points={user.points} handleAddPoints={handleAddPoints} />      
    </NavUserDataContainer>
  );
};
