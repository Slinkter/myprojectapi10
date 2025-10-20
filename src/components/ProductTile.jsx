import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";
import PropTypes from "prop-types";
import { formatPrice } from "../utils/format";

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
        <div className="group flex flex-col rounded-xl overflow-hidden bg-surface-primary shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
            <div className="h-40 w-full flex justify-center p-4 bg-surface-secondary">
                <img
                    loading="lazy"
                    className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
                    src={product?.image}
                    alt={product?.title}
                />
            </div>
            <div className="p-4 w-full flex flex-col flex-grow">
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
                        className={`text-sm font-semibold py-2 px-4 rounded-lg text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            isProductInCart
                                ? "bg-destructive hover:opacity-90 focus:ring-destructive"
                                : "bg-primary hover:opacity-90 focus:ring-primary"
                        }`}
                    >
                        {isProductInCart ? "Remove" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

ProductTile.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        title: PropTypes.string,
        category: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
};

export default ProductTile;
