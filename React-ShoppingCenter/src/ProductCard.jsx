import "./style/ProductCard.scss";

const ProductCard = (props) => {
  const description =
    "iconic designs of Nike with the luxury and high-fashion aesthetic of Dior.";
  return (
    <div className="productCardContainer">
      <img src="../public/download.jpg" />
      <h1></h1>
      <h4>
        {description.length > 10
          ? description.substring(0, 30).concat("..")
          : description}
      </h4>
      <h5>Price</h5>
      <h6>Rating</h6>
    </div>
  );
};

export default ProductCard;
