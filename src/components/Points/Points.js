import React from "react";
import CoinIcon from "../../assets/icons/coin.svg";
import { giftPoints } from "../../utils/constants";
import { PointsNumber, PointsContainer,Coin} from "./Points.styles";

export const Points = (props) => {
  const { points,handleAddPoints } = props;
  return (
     <PointsContainer onClick={() => handleAddPoints(giftPoints)}>
       <PointsNumber>{points}</PointsNumber> <Coin src={CoinIcon} />  
     </PointsContainer>
     
  );
};
