import { useParams } from "react-router-dom";
import useProductFetch from "../hooks/useProductFetch";
import { PRODUCTS_API } from "../utils/constants";
import { useEffect, useState } from "react";
import ProductsDetailsCard from "./ProductsDetailsCard";

const ProductsDetails = () => {
  const id = useParams();
  const { products, loading, error } = useProductFetch(PRODUCTS_API);
  const [idData, setIdData] = useState();

  useEffect(() => {
    setIdData(products);
  }, [products]);

  if (loading) {
    return <h2 className="text-center text-white mt-2">Loading product...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500">Error: {error}</h2>;
  }

  const fetchedDataById = idData.filter(
    (item) => item.id === Number(id.productId)
  );

  return (
    <div className="">
      {
      
      fetchedDataById.map((item) => {
       return <ProductsDetailsCard key={item.id}
          availabilityStatus={item.availabilityStatus}
          brand={item.brand}
          category={item.category}
          description={item.description}
          dimensions={item.dimensions}
          discountPercentage={item.discountPercentage}
          images={item.images}
          minimumOrderQuantity={item.minimumOrderQuantity}
          price={item.price}
          rating={item.rating}
          returnPolicy={item.returnPolicy}
          reviews={item.reviews}
          shippingInformation={item.shippingInformation}
          stock={item.stock}
          tags={item.tags}
          thumbnail={item.thumbnail}
          title={item.title}
          warrantyInformation={item.warrantyInformation}
          weight={item.weight}
        ></ProductsDetailsCard>;
      })
      
      }
    </div>
  );
};

export default ProductsDetails;
