import { useEffect, useState, useCallback } from "react";
import { TailSpin } from "react-loader-spinner";
import ProductTile from "../components/ProductTile";
import ErrorComponent from "../components/ErrorComponent";
import SkeletonTile from "../components/SkeletonTile";

const Home = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [showContent, setShowContent] = useState(false);

    const fetchListOfProducts = useCallback(async () => {
        setLoading(true);
        setShowContent(false); // Reset showContent when loading starts
        try {
            const url_api = "https://fakestoreapi.com/products";
            const res = await fetch(url_api);
            if (!res.ok) {
                throw new Error("Error fetching from API: " + res.status);
            }
            const data = await res.json();
            if (!data) {
                throw new Error("Data from API is not valid.");
            }
            setProducts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchListOfProducts();
    }, [fetchListOfProducts]);

    useEffect(() => {
        if (!loading && products.length > 0) {
            const timer = setTimeout(() => setShowContent(true), 50); // Small delay to ensure render
            return () => clearTimeout(timer);
        } else if (loading) {
            setShowContent(false); // Hide content immediately when loading starts
        }
    }, [loading, products]);

    return (
        <>
            {error && <ErrorComponent title="Error:" message={error} />}

            {loading ? (
                <div className="min-h-[80vh] w-full mx-auto max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pt-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonTile key={index} />
                    ))}
                </div>
            ) : (
                <div className={`min-h-screen w-full mx-auto max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pt-6 transition-all duration-700 ease-in-out ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {products.length > 0 ? (
                        products.map((productItem) => (
                            <ProductTile
                                key={productItem.id}
                                product={productItem}
                            />
                        ))
                    ) : (
                        <span>No products found</span>
                    )}
                </div>
            )}
        </>
    );
};

export default Home;
