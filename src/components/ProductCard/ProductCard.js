import {React, useState, useEffect} from "react";
import * as S from "./ProductCard.styles";

export const ProductCard = (props) => {
  const { product, handleRedeem, costRemaining, userPoints } = props;
  const [available, setAvailable] = useState(false);
  const [totalRemaining, setTotalRemaining] = useState(costRemaining); 

  const handleAvailabilityByTotal = (total) => {
    setAvailable(total > userPoints);
  };

  const handleTotalRemaining = (total) => {
    setTotalRemaining(total - userPoints);
  };

  const AddToCart = () => {
    product.quantity++;
    product.total = product.cost * product.quantity;
  }

  const RemoveToCart = () => {
    product.quantity--;
    product.total = product.cost * product.quantity;
  }

  useEffect(() => {
    handleAvailabilityByTotal(product.total);
    handleTotalRemaining(product.total);
  }, [product.total]);

  return (
    <S.ProductCardWrapper>
      <S.ProductCardInner>
        <S.ItemImageWrapper>
          <S.ItemImage src={product.img.url} />
        </S.ItemImageWrapper>
        <S.ItemSeparator />
        <S.ProductCardDetail>
          <S.ItemCategory>{product.category}</S.ItemCategory>
          <S.ItemName>{product.name}</S.ItemName>
          <S.Quantity>Quanity: {product.quantity}</S.Quantity>
        </S.ProductCardDetail>
        {!available ? (
          <> 
            <S.ItemOverlay>
            {product.quantity > 1 ? (
             <>
                 <S.removeUnit onClick={() => RemoveToCart()}>-</S.removeUnit>
             </>
            ) : null
            }
            <S.addUnit onClick={() =>  AddToCart()}>+</S.addUnit>
              <S.ItemPoints>{product.total} ({product.quantity} units)</S.ItemPoints>
              <S.RedeemNowButton
                onClick={() => handleRedeem(product._id, product.cost, product.quantity)}>
                Redeem now
              </S.RedeemNowButton>
            </S.ItemOverlay>
          </>
        ) : (
          <>
            <S.ItemOverlay className="disabled">
            {product.quantity > 1 ? (
             <>
                 <S.removeUnit onClick={() => RemoveToCart()}>-</S.removeUnit>
             </>
            ) : null
            }
            <S.addUnit onClick={() =>  AddToCart()}>+</S.addUnit>
              <S.ItemPoints>{product.total}</S.ItemPoints>
            </S.ItemOverlay>
            <S.CostBadge>You need {totalRemaining}</S.CostBadge>
          </>
        )}
      </S.ProductCardInner>
    </S.ProductCardWrapper>
  );
};
