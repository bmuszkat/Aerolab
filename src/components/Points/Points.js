import React, {useState} from "react";
import CoinIcon from "../../assets/icons/coin.svg";
import { giftPoints } from "../../utils/constants";
import { PointsNumber, PointsContainer,Coin, AddPoints,StyledMenu, Plus} from "./Points.styles";

export const Points = (props) => {
  const { points,handleAddPoints } = props;
  return (
     <PointsContainer onClick={() => handleAddPoints(giftPoints)}>
       <PointsNumber>{points}</PointsNumber> <Coin src={CoinIcon} />  <AddPoints>+</AddPoints>  
     </PointsContainer>
     
  );
};
