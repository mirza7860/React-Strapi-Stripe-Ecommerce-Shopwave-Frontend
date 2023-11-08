import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../Hooks/useFetch";

// eslint-disable-next-line react/prop-types
const FeatureProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  console.log(data);
  return (
    <div className="featureproducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore
          numquam totam, quas, beatae quia, deserunt facere soluta possimus
          molestiae quod vitae vel temporibus! Dicta eveniet voluptatibus odit
          dolor quo illo? Veritatis!
        </p>
      </div>
      <div className="buttom">
        {error?"something went wrong":(loading
          ? "loading"
          : data.map((item) => <Card item={item} key={item.id} />))}
      </div>
    </div>
  );
};

export default FeatureProducts;
