import { useEffect, useState, useRef } from "react";

const useProductFetch = (PRODUCTS_API) => {
    const hasFetched = useRef(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(PRODUCTS_API);

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [PRODUCTS_API]);

    return { products, loading, error };
}

export default useProductFetch