import { NavLink } from "react-router-dom";
import styles from "./_ShopLayout.module.scss";
const ShopLayout = () => {
	return (
		<main>
			<nav className={styles.nav} aria-label="secondary">
				<NavLink
					to="men"
					className={({ isActive }) => (isActive ? styles.active : null)}
				>
					Men
				</NavLink>
				<NavLink
					to="women"
					className={({ isActive }) => (isActive ? styles.active : null)}
				>
					Women
				</NavLink>
				<NavLink
					to="unisex"
					className={({ isActive }) => (isActive ? styles.active : null)}
				>
					Unisex
				</NavLink>
				<NavLink
					to="collections"
					className={({ isActive }) => (isActive ? styles.active : null)}
				>
					Collections
				</NavLink>
			</nav>
		</main>
	);
};

export default ShopLayout;
