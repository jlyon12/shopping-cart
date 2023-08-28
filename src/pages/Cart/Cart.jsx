import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCart } from "../../context/CartProvider";
import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";
import styles from "./_Cart.module.scss";
const Cart = () => {
	const { cart, setCart } = useCart();
	const cartSubtotal = cart.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0
	);

	const cartItems = cart.map((cartItem) => {
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
	});
	return (
		<main className={styles.cartPage}>
			<section className={styles.cart}>
				<div className={styles.header}>
					<h1 className={styles.title}>Your cart</h1>
					<Link to="/shop" className={styles.link}>
						Continue Shopping
					</Link>
				</div>
				{!cart.length ? (
					<h2>You have no items in your cart</h2>
				) : (
					<>
						<table className={styles.cartItems}>
							<thead>
								<tr>
									<th colSpan="2" scope="col">
										Product
									</th>
									<th colSpan="1" scope="col">
										Quantity
									</th>
									<th colSpan="1" scope="col">
										Total
									</th>
								</tr>
							</thead>
							<tbody>{cartItems}</tbody>
						</table>
						<div className={styles.footer}>
							<p className={styles.total}>
								<span className={styles.bold}>Subtotal</span> ${cartSubtotal}
							</p>
							<p className={styles.shipping}>
								Taxes and
								<span className={styles.underline}> shipping </span>
								calculated at checkout
							</p>
							<button className={styles.checkoutBtn}>Check out</button>
						</div>
					</>
				)}
			</section>
		</main>
	);
};

export default Cart;
