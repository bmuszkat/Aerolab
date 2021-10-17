import React from "react";
import { ProductsProvider } from "./Proucts/ProductContext";
import { UserProvider } from "./UserContext/UserContext";

const AppContext = ({ children }) => {
  return (
    <UserProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </UserProvider>
  );
};

export default AppContext;
