import ProductCard from "./ProductCard";
import useProductFetch from "../hooks/useProductFetch";
import { PRODUCTS_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
  // 1. Get data from Redux (or empty array)
  const getReduxData = useSelector(
    (store) => store.products?.allProductsData || [],
  );
  const shouldFetch = getReduxData.length === 0;

  const { products, loading, error } = useProductFetch(
    shouldFetch ? PRODUCTS_API : null,
  );
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState();
  const [searchButtonName, setSearchButtonName] = useState("Search");

  // 2. Choose which data to display
  const displayProducts = getReduxData.length > 0 ? getReduxData : products;

  // 3. useEffect sets filteredData to displayProducts

  useEffect(() => {
    setFilteredData(displayProducts);
  }, [displayProducts]);

  // 4. filteredData is now ready to use

  const handleSearchClick = () => {
    const filteredItems = displayProducts.filter((item) => {
      return item.title.toLowerCase().includes(userInput.toLowerCase());
    });
    setFilteredData(filteredItems);
    setSearchButtonName("Search");
  };

  const handleTopRated = () => {
    const topRatedFiltered = displayProducts.filter((item) => {
      return item.rating >= 4;
    });
    setFilteredData(topRatedFiltered);
    setSearchButtonName("All");
  };

  if (shouldFetch && error) {
    return <h2 className="text-center text-red-500">Error: {error}</h2>;
  }

  return (
    <div className="mx-2 mb-6">
      <div className="flex gap-2 justify-end mt-6">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Search"
          className="input"
        />
        <button onClick={handleSearchClick} className="btn">
          {searchButtonName}
        </button>
        <button onClick={handleTopRated} className="btn">
          Top Rated
        </button>
      </div>
      {loading ? (
        <h2 className="text-center text-white mt-2">Loading products...</h2>
      ) : filteredData.length === 0 ? (
        <h2 className="text-center text-white mt-2">No Results Found</h2>
      ) : (
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 m-auto">
          {filteredData.map((item) => (
            <Link to={"/productsdetails/" + item.id} key={item.id}>
              <ProductCard
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                description={item.description}
                tags={item.tags}
                rating={item.rating}
              ></ProductCard>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
