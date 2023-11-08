import DeletedIcon from "@mui/icons-material/DeleteOutlined";
import "../Cart/Cart.scss";
import { makeRequest } from "../../makeRequest";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const TotalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    "pk_test_51O0QmsSEkX6jei2WdxMaHhAmFZqzgleZ4t9Kbi1SLQXJzI4ZFS92RJCsAMqcs4uOhC1bsp3oPOJBNR0CHem8Tb2X00eT7ZQRuD"
  );
  const handlePayments = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart">
        <h1>Products in your cart</h1>
        {products?.map((item) => (
          <div className="item" key={item.id}>
            <img
              src={
                "https://strapi-stripe-ecommerce-app-yqw6o.ondigitalocean.app" +
                item.img
              }
              alt="add to cart product images"
            />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 65)}</p>
              <div className="price">
                {item.quantity} x ₹{item.price}
              </div>
            </div>
            <DeletedIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        ))}
        <div className="total">
          <span>SUBTOTAL</span>
          <span>₹{TotalPrice()}</span>
        </div>
        <button onClick={handlePayments}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>
          Reset Cart
        </span>
      </div>
    </>
  );
};
export default Cart;