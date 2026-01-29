import { useParams } from "react-router-dom";
import ProductsDetailsCard from "./ProductsDetailsCard";
import { useSelector } from "react-redux";
import useProductFetch from "../hooks/useProductFetch";
import { PRODUCTS_API } from "../utils/constants";
import { useEffect, useState } from "react";

const ProductsDetails = () => {
  // 1. Get data from Redux (or empty array)
  const getReduxData = useSelector(
    (store) => store.products?.allProductsData || [],
  );

  const shouldFetch = getReduxData.length === 0;

  const { products, loading, error } = useProductFetch(
    shouldFetch ? PRODUCTS_API : null,
  );
  const [filteredData, setFilteredData] = useState();

  // 2. Choose which data to display
  const displayProducts = getReduxData.length > 0 ? getReduxData : products;

  const { productId } = useParams();

    useEffect(() => {
      setFilteredData(displayProducts);
    }, [displayProducts]);

  if (loading) {
    return <h2 className="text-center text-white mt-2">Loading product...</h2>;
  }

  const getProductById = filteredData.find(
    (item) => item.id === Number(productId),
  );

  if (!getProductById) {
    return <h2 className="text-center text-white mt-2">Product not found</h2>;
  }
  
  if (shouldFetch && error) {
    return <h2 className="text-center text-red-500">Error: {error}</h2>;
  }

  return (
    <div className="">
      {
        <ProductsDetailsCard
          key={getProductById.id}
          id={getProductById.id}
          availabilityStatus={getProductById.availabilityStatus}
          brand={getProductById.brand}
          category={getProductById.category}
          description={getProductById.description}
          dimensions={getProductById.dimensions}
          discountPercentage={getProductById.discountPercentage}
          images={getProductById.images}
          minimumOrderQuantity={getProductById.minimumOrderQuantity}
          price={getProductById.price}
          rating={getProductById.rating}
          returnPolicy={getProductById.returnPolicy}
          reviews={getProductById.reviews}
          shippingInformation={getProductById.shippingInformation}
          stock={getProductById.stock}
          tags={getProductById.tags}
          thumbnail={getProductById.thumbnail}
          title={getProductById.title}
          warrantyInformation={getProductById.warrantyInformation}
          weight={getProductById.weight}
        ></ProductsDetailsCard>
        
      }
    </div>
  );
};

export default ProductsDetails;
