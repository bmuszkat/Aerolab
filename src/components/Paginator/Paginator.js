import React from "react";
import {PaginatorContainer,PrevButton,NextButton} from "./Paginator.styles";

export const Paginator = (props) => {
  const { prevPage, nextPage } = props;
  return (
    <PaginatorContainer>
      {prevPage && nextPage ? (
        <>
          <PrevButton onClick={prevPage} />
          <NextButton onClick={nextPage} />
        </>
      ) : prevPage ? (
        <PrevButton onClick={prevPage} className="single" />
      ) : (
        <NextButton onClick={nextPage} className="single" />
      )}
  
    </PaginatorContainer>
  );
};
