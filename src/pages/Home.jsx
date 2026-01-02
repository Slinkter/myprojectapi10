import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductTile from "@/entities/product/ui/ProductTile";
import ErrorComponent from "@/shared/ui/ErrorComponent";
import SkeletonTile from "@/shared/ui/SkeletonTile";
import { fetchProducts } from "@/entities/product/model/productSlice";

import { AddToCartButton } from "@/features/cart/ui/AddToCartButton";

/**
 * @description The home page component, which displays the list of products.
 * @returns {JSX.Element} The JSX for the home page.
 */
const Home = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    status,
    error,
  } = useSelector((state) => state.products);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 align-stretch">
          {products.map((productItem) => (
            <ProductTile
              key={productItem.id}
              product={productItem}
              action={<AddToCartButton product={productItem} />}
            />
          ))}
        </div>
      ) : (
        <span>No products found</span>
      )}
    </div>
  );
};

export default Home;
