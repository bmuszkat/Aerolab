import styled from "styled-components";

export const SortWrapper = styled.div`
  display: inline-flex;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.4vw;
  color: #a3a3a3;
  letter-spacing: -0.15px;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SortingBar = styled.ul`
  display: inline-flex;
  padding: 0;
  margin: 0 0.75rem;

  list-style: none;

  @media (max-width: 768px) {
    padding: 20px 0 0 0;
    font-size: 1.2rem;
    margin: 0;
  }
`;

export const SortingOption = styled.li`
  padding: 0.9rem 1.5rem;
  margin: 0 0.75rem;

  background-color: #ededed;

  font-size: 1.67vw;
  color: #a3a3a3;
  letter-spacing: -0.15px;
  text-align: left;

  border-radius: 100px;

  transition: background-color 0.3s;

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  &:hover {
    background: #e5e5e5;
  }

  &.selected {
    background: #0ad4fa;
    color: #fff;
  }
`;


export const Button = styled.button`
 
  background-color: #ededed;
  color: #a3a3a3;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }

  &:hover {
    background: #e5e5e5;
  }

  &.selected {
    background: #0ad4fa;
    color: #fff;
  }
  
`;

export const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    background-color: #0ad4fa;
    opacity: 1;
  `}
`;

export const ButtonGroup = styled.div`
display: flex;
`;

