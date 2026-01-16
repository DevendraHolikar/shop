import ProductCard from "./ProductCard";
import useProductFetch from "../hooks/useProductFetch";

const Products = () => {
  
  const { products, loading, error } = useProductFetch();

  if (loading) {
    return <h2 className="text-center text-white mt-2">Loading products...</h2>;
  }
  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }

  if (products === "") {
    return <h2 className="text-center text-white mt-2">No data</h2>;
  }

  return (
    <div className="flex flex-wrap justify-items-start gap-6 mt-6 m-auto">
      {products.map((item) => (
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
    </div>
  );
};

export default Products;
