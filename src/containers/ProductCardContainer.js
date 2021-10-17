import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { ProductCard } from "../components/ProductCard/ProductCard";
export const ProductCardContainer = (props) => {
  const { product, index } = props;
  const { user, handleRedeem, page } = useContext(UserContext);
  const [costRemaining, setCostRemaining] = useState(false);
 

  const handleCostRemaining = () => {
    setCostRemaining(product.cost - user.points);
  };

  useEffect(() => {
    handleCostRemaining();
  }, [page, product, user]);

  return (
    <ProductCard
      index={index} 
      product={product}
      handleRedeem={handleRedeem}
      costRemaining={costRemaining}
      userPoints={user.points}
    />
  );
};
