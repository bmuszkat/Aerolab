import { createContext, useState } from "react";
import { api } from "../../api/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsSort, setProductsSort] = useState([]);
  const [sortOption, setSortOption] = useState([]);
  const [textToFilter, setTextToFilter] = useState([]);
  const [page, setPage] = useState(1);

  const getProducts = async () => {
    const { data } = await api.get("/products");

    data.forEach(element => {
        element.quantity = 1
        element.total = element.cost;
    });
    
    setProducts(data);
    setProductsSort(data);
  };

  const Sort = (a, b) => {
    return (a.cost < b.cost) ? 1 : -1;
  };   

  const handleSortOption = (option) => {
    if(productsSort)
    {
      setProdSort(option,productsSort);
    }else if (products) {
      setProdSort(option,products);
    }
 
  };

  const setProdSort = (option, prd) => 
  {
    setProductsSort(
      option !== "default"
        ? prd.slice().sort((a, b) => {
          if (option === "ascending") {
            return Sort(a, b);
          }else {
            return Sort(a, b) * -1;
          }
          })
        : 
          (textToFilter !== ""? filter(products, textToFilter) : products)
    );
  }

  const handleFilter = (text) => {
      if(text !== ""){
        var prod = products;
        prod = filter(products, text);
        setProductsSort(prod);        
    }else
        setProductsSort(products);  
  };

  const filter = (products, text) =>
  {
    return products.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()) || product.category.toLowerCase().includes(text.toLowerCase()));  
  } 

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        setProducts,
        setProductsSort,
        handleSortOption,
        handleFilter,
        productsSort,
        sortOption,
        setSortOption,
        setTextToFilter,
        page,
        setPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
