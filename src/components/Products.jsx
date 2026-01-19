import ProductCard from "./ProductCard";
import useProductFetch from "../hooks/useProductFetch";
import { PRODUCTS_API } from "../utils/constants";
import { useEffect, useState } from "react";

const Products = () => {
  const { products, loading, error } = useProductFetch(PRODUCTS_API);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  const handleSearchClick = () => {

    const filteredItems = products.filter((item) =>{
      return item.title.toLowerCase().includes(userInput.toLowerCase())
    });
    setFilteredData(filteredItems);
  };

  const handleTopRated = () => {
    const topRatedFiltered = products.filter((item) => { return item.rating >= 4}  );
    setFilteredData(topRatedFiltered);
  };

  if (loading) {
    return <h2 className="text-center text-white mt-2">Loading products...</h2>;
  }
  if (error) {
    return <h2 className="text-center text-red-500">Error: {error}</h2>;
  }

  return (
    <div className="mx-2">
      <div className="flex gap-2 justify-end mt-6">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Search"
          className="input"
        />
        <button onClick={handleSearchClick} className="btn">
          Search
        </button>
        <button onClick={handleTopRated} className="btn">
          Top Rated
        </button>
      </div>
     { (filteredData.length === 0 ) ? <h2 className="text-center text-white mt-2">No Results Found</h2> : <div className="flex flex-wrap justify-items-start gap-6 mt-6 m-auto">
        {filteredData.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            description={item.description}
            tags={item.tags}
            rating={item.rating}
          ></ProductCard>
        ))}
      </div>}
    </div>
  );
};

export default Products;
