import React, { useEffect, useState, useCallback } from "react";
import { TailSpin } from "react-loader-spinner";
import ProductTile from "../components/ProductTile";

const Home = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchListOfProducts = useCallback(async () => {
        console.group("FetchListOfProducts");
        setLoading(true);
        try {
            const url_api = "https://fakestoreapi.com/products";
            const res = await fetch(url_api);
            console.log(res, res);
            if (!res.ok) {
                throw new Error("error de api " + res.status);
            }
            const data = await res.json();
            console.log(data, data);
            if (!data) {
                throw new Error("error de data " + " verificar");
            }
            setProducts(data);
            console.log(data);
        } catch (error) {
            setError(error.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
        console.groupEnd();
    }, []); // Dependencias vacías para que se memorice la función

    useEffect(() => {
        fetchListOfProducts();
    }, [fetchListOfProducts]); // Añadir fetchListOfProducts como dependencia

    return (
        <>
            {!loading && error ? (
                <ErrorComponent title="Error:" message={error} />
            ) : null}

            {loading ? (
                <div className="container-loading">
                    <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="red"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : (
                <div className="container-products">
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

export default React.memo(Home);

const ErrorComponent = ({ title, message }) => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
                role="alert"
            >
                <h1 className="font-bold">{title}</h1>
                <span className="block sm:inline">{message}</span>
            </div>
        </div>
    );
};
