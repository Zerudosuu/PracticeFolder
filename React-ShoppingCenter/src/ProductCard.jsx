import "./style/ProductCard.scss";

const ProductCard = (props) => {
  const product = props.data;

  console.log(product);
  const description =
    "iconic designs of Nike with the luxury and high-fashion aesthetic of Dior.";
  return (
    <div className="productCardContainer">
      <img src={product.images[0]} />
      <h1>{product.title}</h1>
      <h4>{product.description}</h4>
      <h5>Price</h5>
      <h6>Rating</h6>
    </div>
  );
};

export default ProductCard;
