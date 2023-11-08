import { Link } from "react-router-dom";
import "../Card/Card.scss";

// eslint-disable-next-line react/prop-types
const Card = ({ item }) => {
  return (
    // eslint-disable-next-line react/prop-types
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="images">
          {/*  eslint-disable-next-line react/prop-types */}
          {item?.attributes.isNew && <span>New Season</span>}
          {/* eslint-disable-next-line react/prop-types */}
          <img
            src={
              "https://strapi-stripe-ecommerce-app-yqw6o.ondigitalocean.app" +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt="item images"
            className="mainimg"
          />
          {/*  eslint-disable-next-line react/prop-types */}
          <img
            src={
              "https://strapi-stripe-ecommerce-app-yqw6o.ondigitalocean.app" +
              item?.attributes?.img2?.data.attributes.url
            }
            alt="item images"
            className="secondimg"
          />
        </div>
        {/*  eslint-disable-next-line react/prop-types */}
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          {/* eslint-disable-next-line react/prop-types */}
          <h3>₹{item?.attributes.oldPrice || item?.attributes.price + 256}</h3>
          {/* eslint-disable-next-line react/prop-types */}
          <h3>₹{item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};
export default Card;
