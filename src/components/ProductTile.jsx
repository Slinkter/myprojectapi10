import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";
import PropTypes from "prop-types";
import { formatPrice } from "../utils/format";

/**
 * @description A component that displays a single product.
 * @param {{product: object}} props - The props for the component.
 * @param {object} props.product - The product object to display.
 * @returns {JSX.Element} The JSX for the product tile.
 */
const ProductTile = ({ product }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const isProductInCart = cart.some((item) => item.id === product?.id);

    function handleToggleCart() {
        if (isProductInCart) {
            dispatch(removeFromCart(product?.id));
        } else {
            dispatch(addToCart(product));
        }
    }

    return (
        <div className="card">
            <div className="card-image-container">
                <img
                    loading="lazy"
                    className="card-image"
                    src={product?.image}
                    alt={product?.title}
                />
            </div>
            <div className="card-content">
                <p className="text-sm text-text-secondary truncate w-full">
                    {product?.category}
                </p>
                <h2 className="text-base text-text-primary font-bold truncate w-full mt-1">
                    {product?.title}
                </h2>
                <div className="flex items-center justify-between w-full mt-auto pt-4">
                    <p className="text-lg font-bold text-primary">
                        {formatPrice(product?.price)}
                    </p>
                    <button
                        onClick={handleToggleCart}
                        className={`btn text-sm ${isProductInCart ? "btn-destructive" : "btn-primary"}`}>
                        {isProductInCart ? "Remove" : "Add to Cart"}
                    </button>
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
};

export default ProductTile;

