import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductTile from "../components/ProductTile";
import ErrorComponent from "../components/ErrorComponent";
import SkeletonTile from "../components/SkeletonTile";
import { fetchProducts } from "../store/slices/product-slice";

/**
 * @description The home page component, which displays the list of products.
 * @returns {JSX.Element} The JSX for the home page.
 */
const Home = () => {
    const dispatch = useDispatch();
    const { data: products, status, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === "loading") {
        return (
            <div className="grid-container">
                {Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonTile key={index} />
                ))}
            </div>
        );
    }

    if (status === "failed") {
        return <ErrorComponent title="Error:" message={error} />;
    }

    return (
        <div className="grid-container">
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
    );
};

export default Home;
