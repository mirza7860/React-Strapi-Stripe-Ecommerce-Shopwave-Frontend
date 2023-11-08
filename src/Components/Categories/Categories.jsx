import "../Categories/Categories.scss";
import {Link} from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg&ga=GA1.2.2087555089.1694867847&semt=ais"
            alt="Sale"
          />
          <button>
            <Link className="link" to="/products/3">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/pretty-blond-smiling-woman-walking-city-street-stylish-printed-skirt-denim-oversize-jacket-wearing-pink-sunglasses_285396-9611.jpg?size=626&ext=jpg&ga=GA1.1.2087555089.1694867847&semt=ais"
            alt="Women"
          />
          <button>
            <Link className="link" to="/products/3">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/handsome-young-man-denim-jacket-looking-away_23-2147936778.jpg?size=626&ext=jpg&ga=GA1.2.2087555089.1694867847&semt=ais"
            alt="New Season"
          />
          <button>
            <Link className="link" to="/products/2">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://img.freepik.com/free-photo/brutal-man-model_1303-9211.jpg?size=626&ext=jpg&ga=GA1.1.2087555089.1694867847&semt=ais"
                alt="Men"
              />
              <button>
                <Link className="link" to="/products/2">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://img.freepik.com/free-photo/fashion-objects-yellow_155003-5160.jpg?size=626&ext=jpg&ga=GA1.1.2087555089.1694867847&semt=sph"
                alt="Accesories"
              />
              <button>
                <Link className="link" to="/products/na">
                  Accesories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/white-sneakers-woman-model_53876-97149.jpg?size=626&ext=jpg&ga=GA1.1.2087555089.1694867847&semt=ais"
            alt="Shoes"
          />
          <button>
            <Link className="link" to="/products/na">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Categories;