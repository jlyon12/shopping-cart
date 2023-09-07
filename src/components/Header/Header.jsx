import { NavLink } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { useCart } from "../../context/CartProvider";
import Search from "../Search/Search";
import styles from "./_header.module.scss";
const Header = () => {
	const { cart } = useCart();
	const itemsInCart = cart.reduce(
		(total, cartItem) => total + cartItem.quantity,
		0
	);
	return (
		<header className={styles.header}>
			<NavLink className={styles.title} to="/">
				_standard
			</NavLink>
			<Search />
			<nav className={styles.nav} aria-label="primary">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? styles.active : null)}
				>
					Home
				</NavLink>
				<NavLink
					to="/shop/collections"
					className={({ isActive }) => (isActive ? styles.active : null)}
				>
					Shop
				</NavLink>
				<NavLink
					to="/cart"
					className={({ isActive }) =>
						isActive ? styles.cartLinkActive : styles.cartLink
					}
				>
					<BiShoppingBag size={24} />
					{itemsInCart > 0 && <p className={styles.counter}>{itemsInCart}</p>}
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
