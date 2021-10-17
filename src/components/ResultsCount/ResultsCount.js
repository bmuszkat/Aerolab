import React from "react";
import { CountText } from "./ResultsCount.styles";

export const ResultsCount = (props) => {
  const { firstProductsSegment, lastProductsSegment } = props;
  return (
    <CountText>
      {firstProductsSegment} of {lastProductsSegment}
    </CountText>
  );
};
