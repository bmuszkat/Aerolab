import styled from "styled-components";

import CoinIcon from "../../assets/icons/coin.svg";

export const ProductCardWrapper = styled.li`
  display: flex;
`;

export const ProductCardInner = styled.div`
  position: relative;
  bottom: 0;

  width: 276px;
  height: 300px;

  background: #ffffff;

  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);

  transition: bottom 0.3s, box-shadow 0.3s;



  &:hover {
    bottom: 5px;
    box-shadow: 13px 14px 20px 2px rgba(0, 0, 0, 0.18);
  }
`;

export const BuyBadge = styled.button`
  display: flex;
  align-items: center;

  width: 42px;
  height: 42px;

  position: absolute;
  top: 12px;
  right: 12px;

  background-image: radial-gradient(50% 130%, #0ad4fa 51%, #25bbf1 100%);
  border-radius: 100%;

  transition: background-image 0.3s;

  font-size: 30px;
  color: #ffffff;
  text-align: center;
  font-weight: 400;
  padding-left: 10px;
 
  &::after {
    content: "";

    position: relative;

    height: 22px;
    width: 22px;

    margin: 0 auto;
    display: block:
    font-size: 30px;
    color: black;
    text-align: center;
    font-weight: 400;
    padding-left: 10px;
  }

  ${ProductCardInner}:hover & {
    background-image: radial-gradient(50% 130%, #fff 51%, #fff 100%);
  }
`;

export const addUnit = styled.button`
    display: flex;
    align-items: center;
    width: 42px;
    height: 42px;
    position: absolute;
    top: 12px;
    left: 62px;
    border-radius: 100%;    
    display: block:
    color: black;
    text-align: center;
    font-weight: 300;
    padding-left: 10px;
    font-size:33px !important;
    cursor: pointer;    
    border: 2px solid #ededed;
  }
`;

export const removeUnit = styled.button`
    display: flex;
    align-items: center;
    width: 42px;
    height: 42px;
    position: absolute;
    top: 12px;
    left: 12px;
    border-radius: 100%; 
    display: block:
    font-size: 35px;
    color: black;
    text-align: center;
    font-weight: 300;
    padding-left: 14px;
    font-size:33px !important;
    cursor: pointer;    
    border: 2px solid #ededed;
  }
`;

export const CostBadge = styled.span`
  display: flex;
  align-items: center;

  padding: 11px 15px;

  position: absolute;
  top: 12px;
  right: 12px;

  background-color: #616161cc;

  border-radius: 100px;

  font-size: 14px;
  color: #fff;

  transition: background-color 0.3s, color 0.3s;

  &::after {
    content: "";

    position: relative;
    display: block;

    height: 20px;
    width: 20px;

    margin: 0 0 0 6px;

    background-image: url(${CoinIcon});
    background-size: cover;
  }

  ${ProductCardInner}:hover & {
    background-color: #fff;
    color: #333;
  }
`;

export const ItemImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 182px;

  padding: 12px 12px 0 12px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ItemSeparator = styled.hr`
  width: 228px;
  margin-bottom: 19px;

  border-top: 1px solid #d9d9d9;
`;

export const ProductCardDetail = styled.div`
  padding: 0 24px;
`;

export const ItemCategory = styled.h4`
  margin: 0;

  font-size: 16px;
  color: #a3a3a3;
  letter-spacing: -0.04px;
  text-align: left;
  font-weight: 400;
`;

export const ItemName = styled.h3`
  margin: 0;
  padding: 2px 0;

  font-size: 18px;
  color: #616161;
  letter-spacing: -0.04px;
  text-align: left;
  font-weight: 400;
`;

export const ItemOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background-image: linear-gradient(-180deg, #0ad4fa8c 0%, #25bbf1db 100%);
  opacity: 0;

  transition: opacity 0.5s, background-image 0.3s;

  ${ProductCardInner}:hover & {
    opacity: 1;
  }

  &.disabled {
    transition: opacity 0.5s, background-image 0.3s;
    background-image: linear-gradient(-180deg, #5d5d5de0 0%, #131313d1 100%);
  }
`;

export const ItemPoints = styled.span`
  font-size: 36px;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: -0.08px;

  &::after {
    content: "";

    display: inline-flex;
    position: relative;

    width: 26px;
    height: 26px;

    background-image: url(${CoinIcon});
    background-size: cover;

    margin: 0 0 0 10px;
  }
`;

export const Quantity = styled.text`
  font-size: 18px;
  color: #616161;
  letter-spacing: -0.04px;
  text-align: left;
  font-weight: 400;
  `;

export const RedeemNowButton = styled.button`
  font-size: 18px;
  font-weight: 400;
  color: #616161;
  letter-spacing: -0.04px;
  text-align: center;

  margin: 12px 0;
  padding: 8px 64px 11px 66px;

  background-color: #fff;

  border-radius: 100px;
  border-width: 0;

  cursor: pointer;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fec900;
    color: #fff;
  }

  &:active {
    background-color: #faba0d;
  }
`;
