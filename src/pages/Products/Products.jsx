import "./Products.scss";
import List from "../../Components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setmaxPrice] = useState(1000);
  const [sort, setsortid] = useState("asc");

  
  const [selectedsubcats, setselectedsubcats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${catId}`
  );
  console.log(data);
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setselectedsubcats(
      isChecked
        ? [...selectedsubcats, value]
        : selectedsubcats.filter((item) => item !== value)
    );
  };
  console.log(selectedsubcats);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id} onChange={handleChange}>
              <input type="checkbox" id={item.id} value={item.id} />
              <label htmlFor={item.id}>{item?.attributes.Title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setmaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="fiterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setsortid("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setsortid("desc")}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/6130003/pexels-photo-6130003.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="catImg"
          className="catImg"
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedsubcats}
        />
      </div>
    </div>
  );
};
export default Products;
