import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/Proucts/ProductContext";
import {SortWrapper,Text, SortingBar, SortingOption, ButtonGroup, ButtonToggle} from "./SortingOptions.styles";

export const SortingOptions = () => {
  const [activeOption, setActiveOption] = useState(0);
  const { handleSortOption } = useContext(ProductsContext);

  return (
    <SortWrapper>
      <Text>Sort By:</Text>
      <SortingBar>
        {/* <SortingOption
          onClick={() => {
            handleSortOption("default");
            setActiveOption(0);
          }}
          className={activeOption === 0 ? "selected" : null}
        >
          Most Recent
        </SortingOption>
        <SortingOption
          onClick={() => {
            handleSortOption("descending");
            setActiveOption(1);
          }}
          className={activeOption === 1 ? "selected" : null}
        >
          Lowest Price
        </SortingOption>
        <SortingOption
          onClick={() => {
            handleSortOption("ascending");
            setActiveOption(2);
          }}
          className={activeOption === 2 ? "selected" : null}
        >
          Highest Price
        </SortingOption> */}
        <ButtonGroup>
          <ButtonToggle onClick={() => {
                            handleSortOption("default");
                            setActiveOption(0);
                        }}
                        className={activeOption === 0 ? "selected" : null}>Most Recent
          </ButtonToggle>
          <ButtonToggle onClick={() => {
                                          handleSortOption("descending");
                                          setActiveOption(1);
                                        }}
                        className={activeOption === 1 ? "selected" : null}>Lowest Price
          </ButtonToggle>

          <ButtonToggle onClick={() => {
                                  handleSortOption("ascending");
                                  setActiveOption(2);
                                }}
                        className={activeOption === 2 ? "selected" : null}>Highest Price
          </ButtonToggle>
        </ButtonGroup>
      </SortingBar>
    </SortWrapper>
  );
};
