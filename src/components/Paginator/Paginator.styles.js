import styled from "styled-components";
import prevButtonIcon from "../../assets/icons/arrow-left.svg";
import nextButtonIcon from "../../assets/icons/arrow-right.svg";

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  
  margin-left: auto;
  
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    padding-top: 20px;
  }
`;

export const PrevButton = styled.button`
  width: 2.5vw;
  height: 2.5vw;

  margin: 0 1rem 0 0;

  border-width: 0;

  background-image: url(${prevButtonIcon});
  background-color: transparent;
  background-size: cover;

  cursor: pointer;

  transition: opacity 0.3s;

  &.single {
    margin: 0;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

export const NextButton = styled.button`
  width: 2.5vw;
  height: 2.5vw;

  border-width: 0;

  background-image: url(${nextButtonIcon});
  background-color: transparent;
  background-size: cover;

  cursor: pointer;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;
