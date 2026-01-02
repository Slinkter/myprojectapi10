import PropTypes from "prop-types";
import { formatPrice } from "@/shared/lib/priceFormatter";

/**
 * @description A component that displays a single product.
 * @param {{product: object, action: React.ReactNode}} props - The props for the component.
 * @param {object} props.product - The product object to display.
 * @param {React.ReactNode} props.action - The action component (e.g. Add to Cart).
 * @returns {JSX.Element} The JSX for the product tile.
 */
const ProductTile = ({ product, action }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Header: Image */}
      <div className="relative h-64 w-full bg-white p-6 flex items-center justify-center overflow-hidden border-b border-gray-50">
        <img
          loading="lazy"
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
          src={product?.image}
          alt={product?.title}
        />
      </div>

      {/* Body: Content */}
      <div className="flex flex-col flex-grow p-5 space-y-3">
        <div className="flex flex-col">
          <span className="text-xs font-semibold tracking-wider text-indigo-500 uppercase">
            {product?.category}
          </span>
          <h2
            className="text-base font-bold text-gray-800 leading-snug line-clamp-2 mt-1 min-h-[2.5rem]"
            title={product?.title}
          >
            {product?.title}
          </h2>
        </div>

        {/* Footer: Price & Action */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Price</span>
            <p className="text-xl font-extrabold text-gray-900">
              {formatPrice(product?.price)}
            </p>
          </div>
          {action}
        </div>
      </div>
    </div>
  );
};

ProductTile.propTypes = {
  /**
   * The product object to display.
   */
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  /**
   * The slot for an action button.
   */
  action: PropTypes.node,
};

export default ProductTile;
