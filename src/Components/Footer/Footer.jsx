 import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
          <span>Coming soon...</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
          <span>Help Centre</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non eaque, magni nulla porro impedit eum rerum eligendi pariatur reprehenderit quos, voluptas magnam, nostrum id?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            dolorum, omnis quidem doloremque, pariatur laudantium reprehenderit
            doloribus a modi, optio voluptatibus praesentium? Neque natus
            quisquam non eaque cupiditate repellat rerum id ullam nihil quasi!
          </span>
        </div>
      </div>
      <div className="buttom">
        <div className="left">
          <span className="logo">SHOPWAVE</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" height="80px"width="320px"alt="Payment options" />
        </div>
      </div>
    </div>
  );
}
export default Footer