import React,  { useContext, useState,useEffect } from "react";
import { ProductsContext } from "../../context/Proucts/ProductContext";
import {FilterTextBox} from "./FilterProducts.styles";

export const FilterProducts = (props) => {
  const { handleFilter,setTextToFilter } = useContext(ProductsContext);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
     handleFilter(filterText);
     setTextToFilter(filterText);
  }, [filterText]);


  return (
    <FilterTextBox placeholder="Text to filter" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
  );
};
