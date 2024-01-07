// ProductCard component
import "../style/ProductCard.scss";
import { useState } from "react";

const ProductCard = (props) => {
  const product = props.data;

  const handleBuyClick = () => {
    props.onBuyClick(product);
  };

  return (
    <div className="productCardContainer">
      <img src={product.images[0]} alt={product.title} />
      <h1>{product.title}</h1>
      <h4>{product.description}</h4>
      <h5>Price</h5>
      <h6>Rating</h6>
      <button className="Buymebtn" onClick={handleBuyClick}>
        Buy me
      </button>
    </div>
  );
};

export default ProductCard;
