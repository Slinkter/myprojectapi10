import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import ProductTile from "../components/ProductTile";

const Home = () => {
    const [loading, setloading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchListOfProducts() {
            setloading(true);
            try {
                const url_api = "https://fakestoreapi.com/products";
                const res = await fetch(url_api);
                const data = await res.json();
                if (data) {
                    setProducts(data);
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setloading(false);
            }
        }

        fetchListOfProducts();
    }, []);

    return (
        <>
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
        </>
    );
};

export default Home;
