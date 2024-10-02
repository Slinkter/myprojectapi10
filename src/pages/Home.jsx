import React, { useEffect, useState } from "react";
import { Circles, TailSpin } from "react-loader-spinner";
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
                <div className=" loadingcontainer">
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
                <div className="listcontainer  ">
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
