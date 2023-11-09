import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "../../../src/App.scss";
import"./Navbar.scss"
import { useState } from "react";
import Cart from "../Cart/Cart"
import { useSelector} from "react-redux";
import India from "../../../public/img/India.png"

function Navbar() {
  const products = useSelector((state) => state.cart.products);
  const [Open,setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={India} height="30px" width="30px" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div> 
          <div className="item">
            <Link className="link" to="#">Children</Link>
          </div>
        </div>
        <div className="centre">
          <Link className="link" to="/">SHOPWAVE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="carticon"onClick={()=>setOpen(!Open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {Open&&<Cart />}
    </div>
  );
}
export default Navbar;
