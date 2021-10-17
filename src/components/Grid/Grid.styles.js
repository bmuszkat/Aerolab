import styled from "styled-components";

export const GridContainer = styled.div``;

export const FiltersContainer = styled.div`
  display: flex;

  align-items: center;

  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FiltersSeparator = styled.div`
  display: flex;

  width: 1px;
  height: 3.41vw;
  margin: 0 24px;

  border-left: 1px solid #d9d9d9;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const GridSeparator = styled.div`
  width: 100%;
  height: 1px;
  margin: 24px 0;

  border-top: 1px solid #d9d9d9;
`;

export const ItemList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 276px);
  grid-gap: 24px;

  padding: 0;

  list-style: none;
`;
