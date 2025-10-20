import { useEffect, useState, useCallback } from "react";
import { TailSpin } from "react-loader-spinner";
import ProductTile from "../components/ProductTile";
import ErrorComponent from "../components/ErrorComponent";

const Home = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchListOfProducts = useCallback(async () => {
        setLoading(true);
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

    return (
        <>
            {error && <ErrorComponent title="Error:" message={error} />}

            {loading ? (
                <div className="min-h-[80vh] w-full flex justify-center items-center">
                    <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="#e53e3e" // Corresponds to theme.colors.destructive.DEFAULT
                        ariaLabel="tail-spin-loading"
                        radius="1"
                    />
                </div>
            ) : (
                <div className="min-h-screen w-full mx-auto max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pt-6">
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
