import styled from "styled-components";

export const PointsContainer = styled.span`
  display: flex;
  align-items: center;

  background-color: #ededed;
  border-radius: 24px;

  font-size: 24px;

  padding: 14px;
  margin-left: 20px;

  transition: background-color 0.3s;

  cursor: pointer;

  &:hover {
    background: #e5e5e5;
  }
`;

export const Coin = styled.img`
  display: flex;
  align-items: center;
  margin-left: 11px;
`;

export const PointsNumber = styled.span`
  font-size: 24px;
  color: #616161;
  letter-spacing: -0.15px;
`;

export const AddPoints = styled.span`
  font-size: 31px;
  font-weight: 600;
  color: #616161;
 
`;


