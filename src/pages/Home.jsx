import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductTile } from "@/entities/product/ui/ProductTile";
import {
  fetchProducts,
  selectProductList,
  selectFetchStatus,
  selectErrorMessage,
} from "@/entities/product/model/productSlice";
import { AddToCartButton } from "@/features/cart/ui/AddToCartButton";
import { StateBoundary } from "@/shared/ui/StateBoundary";
import { FETCH_STATUS } from "@/shared/constants/queryKeys";
import { cn } from "@/shared/lib/cn";

/**
 * @page Home
 * @description The home page component, which displays the list of products.
 * @returns {JSX.Element} The JSX for the home page.
 */
export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectProductList);
  const status = useSelector(selectFetchStatus);
  const error = useSelector(selectErrorMessage);

  useEffect(() => {
    if (status === FETCH_STATUS.IDLE) {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className={cn("mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8")}>
      <StateBoundary
        isLoading={status === FETCH_STATUS.LOADING}
        hasError={status === FETCH_STATUS.FAILED}
        errorMessage={error}
        isEmpty={status === FETCH_STATUS.SUCCEEDED && products.length === 0}
        emptyMessage="No se encontraron productos"
      >
        <div
          className={cn(
            "align-stretch grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {products.map((productItem, index) => (
            <div
              key={productItem.id}
              className={cn("animate-fade-in-up")}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductTile
                product={productItem}
                action={<AddToCartButton product={productItem} />}
              />
            </div>
          ))}
        </div>
      </StateBoundary>
    </div>
  );
}
