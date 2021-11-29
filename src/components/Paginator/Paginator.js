import React from "react";
import {PaginatorContainer,PrevButton,NextButton} from "./Paginator.styles";

export const Paginator = (props) => {
  const { prevPage, nextPage } = props;
  return (
    <PaginatorContainer>
      {prevPage ? <PrevButton onClick={prevPage} /> : null}
      {nextPage ? <NextButton onClick={nextPage} /> : null}
    </PaginatorContainer>
  );
};
