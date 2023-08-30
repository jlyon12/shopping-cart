import { useState } from "react";
import propTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import styles from "./_ProductDetail.module.scss";

const ProductDetail = ({ product, variants }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const matchingVariant =
		variants.find(
			(variant) => variant.variantId === searchParams.get("variant")
		) || variants[0];

	const { cart, setCart } = useCart();

	const [quantityToAdd, setQuantityToAdd] = useState(1);
	const [colorSelection, setColorSelection] = useState(matchingVariant.color);
	const [sizeSelection, setSizeSelection] = useState(matchingVariant.size);
	const [variant, setVariant] = useState(matchingVariant);

	const sizeOptions = Array.from(
		new Set(variants.map((variant) => variant.size))
	);
	const colorOptions = Array.from(
		new Set(variants.map((variant) => variant.color))
	);

	const newCartEntry = {
		...variant,
		productHandle: product.handle,
		title: product.title,
		quantity: quantityToAdd,
	};
	const handleColorSelection = (e) => {
		const color = e.target.value;
		setColorSelection(color);
		const updatedVariant = variants.filter(
			(v) => v.color === color && v.size === sizeSelection
		)[0];
		setVariant(updatedVariant);
		setSearchParams({ variant: updatedVariant.variantId });
	};
	const handleSizeSelection = (e) => {
		const size = e.target.value;
		setSizeSelection(size);
		const updatedVariant = variants.filter(
			(v) => v.color === colorSelection && v.size === size
		)[0];
		setVariant(updatedVariant);
		setSearchParams({ variant: updatedVariant.variantId });
	};
	const handleIncrement = () => {
		if (quantityToAdd >= 250) return;
		setQuantityToAdd((prev) => prev + 1);
	};
	const handleDecrement = () => {
		if (quantityToAdd <= 1) return;
		setQuantityToAdd((prev) => prev - 1);
	};
	const handleChange = (e) => {
		const { value, min, max } = e.target;
		const validatedValue = Math.max(
			Number(min),
			Math.min(Number(max), Number(value))
		);
		setQuantityToAdd(Number(validatedValue));
	};
	const addToCart = () => {
		const cartContainsProduct = cart.some(
			(cartItem) => cartItem.variantId === variant.variantId
		);
		const updatedCartQuantities = cart.map((cartItem) => {
			if (cartItem.variantId === variant.variantId)
				return {
					...cartItem,
					quantity: cartItem.quantity + quantityToAdd,
				};
			else return cartItem;
		});

		cartContainsProduct
			? setCart(updatedCartQuantities)
			: setCart((prevCart) => [...prevCart, newCartEntry]);
	};

	return (
		<div className={styles.productContainer}>
			<div className={styles.zoomWrapper}>
				<img src={variant.imgUrl} alt={`${product.title} product image`} />
			</div>
			<div className={styles.productDetails}>
				<h1 className={styles.title}>{product.title}</h1>
				<div className={styles.price}>
					<p>
						${variant.price}
						<span> {variant.currencyCode}</span>
					</p>
					<p>
						<span>Shipping calculated at checkout</span>
					</p>
				</div>
				<div className={styles.colorSelection}>
					<p>Color:</p>
					{colorOptions.map((colorOption) => {
						return (
							<button
								key={colorOption}
								value={colorOption}
								onClick={handleColorSelection}
								className={
									colorSelection === colorOption ? styles.activeColor : null
								}
							></button>
						);
					})}
				</div>
				<div className={styles.sizeSelection}>
					<p>Size:</p>
					{sizeOptions.map((sizeOption) => {
						return (
							<button
								className={
									sizeSelection === sizeOption ? styles.activeSize : null
								}
								key={sizeOption}
								value={sizeOption}
								onClick={handleSizeSelection}
							>
								{sizeOption}
							</button>
						);
					})}
				</div>
				<div className={styles.addToCart}>
					<p>Quantity:</p>
					<QuantityCounter
						controlledState={quantityToAdd}
						handleChange={handleChange}
						handleIncrement={handleIncrement}
						handleDecrement={handleDecrement}
					/>
					<button className={styles.addBtn} onClick={addToCart}>
						Add to cart
					</button>
				</div>
				<p className={styles.description}>{product.description}</p>
			</div>
		</div>
	);
};

const variantShape = propTypes.shape({
	variantId: propTypes.string,
	color: propTypes.string,
	size: propTypes.string,
	imgUrl: propTypes.string,
	price: propTypes.number,
	currencyCode: propTypes.string,
});
const productShape = propTypes.shape({
	handle: propTypes.string,
	id: propTypes.string,
	title: propTypes.string,
	description: propTypes.string,
	featuredImage: propTypes.shape({
		id: propTypes.string,
		url: propTypes.string,
	}),
	variants: propTypes.shape({
		edges: propTypes.arrayOf(variantShape),
	}),
});

ProductDetail.propTypes = {
	product: productShape,
	variants: propTypes.arrayOf(variantShape),
};
export default ProductDetail;
