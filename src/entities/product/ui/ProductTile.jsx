import PropTypes from "prop-types";
import { formatPrice } from "@/shared/lib/formatters";
import { cn } from "@/shared/lib/cn";

/**
 * @component ProductTile
 * @description A component that displays a single product.
 * @param {object} props - The props for the component.
 * @param {import('../model/productSlice').Product} props.product - The product object to display.
 * @param {React.ReactNode} [props.action] - The action component (e.g. Add to Cart).
 * @returns {JSX.Element} The JSX for the product tile.
 */
export function ProductTile({ product, action }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      )}
    >
      {/* Header: Image */}
      <div
        className={cn(
          "relative flex h-64 w-full items-center justify-center overflow-hidden border-b border-gray-50 bg-white p-6"
        )}
      >
        <img
          loading="lazy"
          className={cn(
            "h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          )}
          src={product?.image}
          alt={product?.title}
        />
      </div>

      {/* Body: Content */}
      <div className={cn("flex flex-grow flex-col space-y-3 p-5")}>
        <div className={cn("flex flex-col")}>
          <span className={cn("text-xs font-semibold uppercase tracking-wider text-indigo-500")}>
            {product?.category}
          </span>
          <h2
            className={cn(
              "mt-1 line-clamp-2 min-h-[2.5rem] text-base font-bold leading-snug text-gray-800"
            )}
            title={product?.title}
          >
            {product?.title}
          </h2>
        </div>

        {/* Footer: Price & Action */}
        <div
          className={cn("mt-auto flex items-center justify-between border-t border-gray-50 pt-4")}
        >
          <div className={cn("flex flex-col")}>
            <span className={cn("text-xs font-medium text-gray-400")}>Price</span>
            <p className={cn("text-xl font-extrabold text-gray-900")}>
              {formatPrice(product?.price)}
            </p>
          </div>
          {action}
        </div>
      </div>
    </article>
  );
}

ProductTile.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  action: PropTypes.node,
};

export default ProductTile;
