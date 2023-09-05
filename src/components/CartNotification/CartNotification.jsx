import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { GrFormCheckmark, GrClose } from "react-icons/gr";
import { useCart } from "../../context/CartProvider";
import styles from "./_CartNotification.module.scss";

const CartNotification = ({ cartItem, setShowCartNotification }) => {
	const { cart } = useCart();
	const itemsInCart = cart.reduce(
		(total, cartItem) => total + cartItem.quantity,
		0
	);

	return (
		<div className={styles.miniCart}>
			<div className={styles.header}>
				<p className={styles.heading}>
					<GrFormCheckmark />
					Item added to your cart
				</p>
				<button
					className={styles.closeBtn}
					onClick={() => setShowCartNotification(false)}
				>
					<GrClose />
				</button>
			</div>

			<div className={styles.item}>
				<div className={styles.imgWrapper}>
					<img src={cartItem.imgUrl} />
				</div>

				<div className={styles.details}>
					<p>{cartItem.title}</p>
					<p>Size: {cartItem.size}</p>
					{cartItem.color && <p>Color: {cartItem.color}</p>}
				</div>
			</div>
			<Link to="/cart">
				<button className={styles.cartBtn}>View my cart ({itemsInCart})</button>
			</Link>
			<Link className={styles.link} to="/shop/collections">
				Continue Shopping
			</Link>
		</div>
	);
};

const cartItemShape = propTypes.shape({
	variantId: propTypes.string,
	productHandle: propTypes.string,
	title: propTypes.string,
	imgUrl: propTypes.string,
	color: propTypes.string,
	size: propTypes.string,
	price: propTypes.number,
	quantity: propTypes.number,
});

CartNotification.propTypes = {
	cartItem: cartItemShape,
	setShowCartNotification: propTypes.func,
};
export default CartNotification;
