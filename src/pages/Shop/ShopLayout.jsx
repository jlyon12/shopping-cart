import { NavLink, Outlet } from "react-router-dom";
import styles from "./_ShopLayout.module.scss";
const ShopLayout = () => {
	return (
		<main>
			<nav className={styles.nav} aria-label="secondary">
				<NavLink
					to="collections/men"
					className={({ isActive }) => (isActive ? styles.active : null)}
				>
					Men
				</NavLink>
				<NavLink
					to="collections/women"
					className={({ isActive }) => (isActive ? styles.active : null)}
				>
					Women
				</NavLink>
				<NavLink
					to="collections/unisex"
					className={({ isActive }) => (isActive ? styles.active : null)}
				>
					Unisex
				</NavLink>
				<NavLink
					to="collections"
					className={({ isActive }) => (isActive ? styles.active : null)}
					end
				>
					Collections
				</NavLink>
			</nav>
			<Outlet />
		</main>
	);
};

export default ShopLayout;
