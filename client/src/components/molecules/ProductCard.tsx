import ProductFrame from "../../assets/images/frame.svg";

const ProductCard = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <img src={ProductFrame} alt="product frame" />
        </div>
        <div>
          <img src="/products/water-container.svg" alt="water container" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductCard;
