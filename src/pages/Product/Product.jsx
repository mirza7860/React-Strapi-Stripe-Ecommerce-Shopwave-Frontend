import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addToCart, removeItem, resetCart } from "../../redux/cartSlice"
import useFetch from "../../Hooks/useFetch";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const id = useParams().id;
  const [selectedImage, setselectedImage] = useState(0);
  const [quantity, setquantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
 
  const dispatch = useDispatch();
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  "https://strapi-stripe-ecommerce-app-yqw6o.ondigitalocean.app" +
                  data?.attributes?.img?.data.attributes?.url
                }
                alt="product image1"
                onClick={(e) => setselectedImage("img")}
              />
              <img
                src={
                  "https://strapi-stripe-ecommerce-app-yqw6o.ondigitalocean.app" +
                  data?.attributes?.img2?.data.attributes.url
                }
                alt="producty image2"
                onClick={(e) => setselectedImage("img2")}
              />
            </div>
            <div className="mainImages">
              <img
                src={
                  selectedImage === "img"
                    ? "https://strapi-stripe-ecommerce-app-yqw6o.ondigitalocean.app" +
                      data?.attributes?.img?.data.attributes?.url
                    : "https://strapi-stripe-ecommerce-app-yqw6o.ondigitalocean.app" +
                      data?.attributes?.img2?.data.attributes.url
                }
                alt="selected images from group of images"
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.Title}</h1>
            <span className="price">₹{data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setquantity((quantity) => (quantity === 1 ? 1 : quantity - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setquantity((quantity) => quantity + 1)}>
                +
              </button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.Title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data?.attributes?.img?.data?.attributes?.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> Add To Cart
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon />
                Add To Wish List
              </div>
              <div className="item">
                <BalanceIcon />
                Add To Compare
              </div>
            </div>
            <div className="info">
              <span>Vendor: Robot</span>
              <span>Product Type: Coat</span>
              <span>Tag: T-shirt , Women , Top</span>
            </div>
            <hr />
            <div className="info">
              <span>Description</span>
              <hr />
              <span>Additional Information</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Product;
