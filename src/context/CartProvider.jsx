import propTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();
CartContext.displayName = "CartContext";

const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within CartProvider");
	}
	return context;
};

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(null);

	const cartObject = useMemo(() => {
		return { cart, setCart };
	}, [cart, setCart]);

	return (
		<CartContext.Provider value={cartObject}>{children}</CartContext.Provider>
	);
};

CartProvider.propTypes = {
	children: propTypes.element,
};
export default CartProvider;
export { useCart };
