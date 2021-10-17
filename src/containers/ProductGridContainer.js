import React, { useContext, useEffect } from "react";
import { Grid } from "../components/Grid/Grid";
import { ProductsContext } from "../context/Proucts/ProductContext";
import { gridProductsPerPage } from "../utils/constants";

export const ProductGridContainer = () => {
  const productsPerPage = gridProductsPerPage;

  const { getProducts, productsSort, handleSortOption, handleFilter, page, setPage } =
    useContext(ProductsContext);

  const beginIndex = (page - 1) * productsPerPage;
  const endIndex = beginIndex + productsPerPage;

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!productsSort) return null;

  return (
        <Grid
          products={productsSort.slice(beginIndex, endIndex)}
          page={page}
          firstProductsSegment={endIndex}
          lastProductsSegment={productsSort.length}
          prevPage={page > 1 && prevPage}
          nextPage={endIndex < productsSort.length && nextPage}
          handleSortOption={handleSortOption}
          handleFilter={handleFilter}
        />
  );
};
