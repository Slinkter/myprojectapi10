import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/ProductTile";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false);

    async function fetchListOfProducts() {
        setloading(true);
        try {
            const url_api = "https://fakestoreapi.com/products";
            const res = await fetch(url_api);
            const data = await res.json();

            if (data) {
                console.log(data);
                setloading(false);
                setProducts(data);
            }
        } catch (error) {
            console.log(error);
            setloading(false);
        }
    }

    useEffect(() => {
        fetchListOfProducts();
    }, []);

    return (
        <div>
            {loading ? (
                <div className=" min-h-screen w-full flex justify-center items-center">
                    <Circles />
                </div>
            ) : (
                <div className=" min-h-screen w-full mx-auto  max-w-6xl  grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   ">
                    {products && products.length
                        ? products.map((productItem) => (
                              <ProductTile
                                  key={productItem.id}
                                  product={productItem}
                              />
                          ))
                        : null}
                </div>
            )}
        </div>
    );
};

export default Home;
