import Card from "../Card/Card";
import "../List/List.scss";
import useFetch from "../../Hooks/useFetch";
const List = ({subCats,maxPrice,sort,catId}) => {
const subCategoriesParam = subCats
  .map((item) => `[filters][sub_categories][id][$eq]=${item}`)
  .join("&");

const apiUrl = `/products?populate=*&[filters][categories][id][$eq]=${catId}&${subCategoriesParam}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;

const { data, loading, error } = useFetch(apiUrl);

  return (
    <div className="List">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;




