import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCart } from "../../../context/CartProvider";
import QuantityCounter from "../../../components/QuantityCounter/QuantityCounter";
import styles from "./_CartItem.module.scss";

const CartItem = ({ cartItem }) => {
	const { cart, setCart } = useCart();

	const handleRemoval = () => {
		setCart((prevCart) =>
			prevCart.filter((c) => c.productId !== cartItem.productId)
		);
	};
	const handleIncrement = () => {
		if (cartItem.quantity >= 250) return;
		const updatedCartQuantities = cart.map((product) => {
			if (product.productId === cartItem.productId)
				return {
					...cartItem,
					quantity: cartItem.quantity + 1,
				};
			else return product;
		});

		setCart(updatedCartQuantities);
	};
	const handleDecrement = () => {
		if (cartItem.quantity <= 1) return;
		const updatedCartQuantities = cart.map((product) => {
			if (product.productId === cartItem.productId)
				return {
					...cartItem,
					quantity: cartItem.quantity - 1,
				};
			else return product;
		});

		setCart(updatedCartQuantities);
	};
	const handleChange = (e) => {
		const { value, min, max } = e.target;
		const validatedValue = Math.max(
			Number(min),
			Math.min(Number(max), Number(value))
		);
		const updatedCartQuantities = cart.map((product) => {
			if (product.productId === cartItem.productId)
				return {
					...cartItem,
					quantity: validatedValue,
				};
			else return product;
		});

		setCart(updatedCartQuantities);
	};

	return (
		<tr key={cartItem.name} className={styles.cartItem}>
			<td className={styles.img}>
				<div className={styles.imgWrapper}>
					<Link
						to={`/shop/products/${cartItem.productHandle}`}
						className={styles.itemLink}
					>
						<img src={cartItem.imgUrl} alt={`${cartItem.name} icon`} />
					</Link>
				</div>
			</td>
			<td className={styles.details}>
				<Link
					to={`/shop/products/${cartItem.productHandle}`}
					className={styles.itemLink}
				>
					{cartItem.title}
				</Link>
				<p>${cartItem.price}</p>
			</td>
			<td className={styles.quantity}>
				<div className={styles.quantityWrapper}>
					<QuantityCounter
						controlledState={cartItem.quantity}
						handleChange={handleChange}
						handleIncrement={handleIncrement}
						handleDecrement={handleDecrement}
					/>
					<button onClick={handleRemoval} className={styles.removeItemBtn}>
						<RiDeleteBinLine size={24} />
					</button>
				</div>
			</td>
			<td className={styles.total}>
				<p>{`$${cartItem.price * cartItem.quantity} `} </p>
			</td>
		</tr>
	);
};
export default CartItem;

const cartItemShape = propTypes.shape({
	productId: propTypes.string,
	productHandle: propTypes.string,
	title: propTypes.string,
	imgUrl: propTypes.string,
	price: propTypes.number,
	quantity: propTypes.number,
});

CartItem.propTypes = {
	cartItem: cartItemShape,
};
