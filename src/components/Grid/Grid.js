import React from "react";
import { ProductCardContainer } from "../../containers/ProductCardContainer";
import { EmptyProducts } from "../EmptyProducts/EmptyProducts";
import { FilterProducts } from "../FilterProducts/FilterProducts";
import { Paginator } from "../Paginator/Paginator";
import { ResultsCount } from "../ResultsCount/ResultsCount.js";
import { SortingOptions } from "../SortingOptions/SortingOptions";
import { GridContainer, FiltersContainer, GridSeparator, ItemList, FiltersSeparator}  from "./Grid.styles";

export const Grid = (props) => {
  const {
    products,
    sortOption,
    firstProductsSegment,
    lastProductsSegment,
    prevPage,
    nextPage,
    descendingSort,
    ascendingSort,
  } = props;

  const filters = {
    ascending: ascendingSort,
    descending: descendingSort,
  };

  return (
    <GridContainer>
      <FiltersContainer>     
        <ResultsCount
          firstProductsSegment={products.length > 0 ? firstProductsSegment : 0}
          lastProductsSegment={lastProductsSegment}
        />      
        <FiltersSeparator />
        <SortingOptions />
        <FilterProducts />
        <Paginator prevPage={prevPage} nextPage={nextPage} />
      </FiltersContainer>
      <GridSeparator />    
      <>
      {products.length > 0 ? (
      <ItemList>
        {sortOption === "default"
          ? products.map((product, index) => (
              <ProductCardContainer key={index} product={product} />
            ))
          : products
              .slice()
              .sort(filters[`${sortOption}]`])
              .map((product, index) => (
                <ProductCardContainer key={index} product={product} />
              ))}
      </ItemList>)
      : <EmptyProducts></EmptyProducts>}
      </>
      
      <Paginator prevPage={prevPage} nextPage={nextPage} />
    </GridContainer>
  );
};
