import { Link } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import CartItem from "./CartItem/CartItem";
import styles from "./_Cart.module.scss";
const Cart = () => {
	const { cart } = useCart();
	const cartSubtotal = cart.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0
	);
	const renderCartItems = cart.map((product) => (
		<CartItem key={product.productId} cartItem={product} />
	));

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
							<tbody>{renderCartItems}</tbody>
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
