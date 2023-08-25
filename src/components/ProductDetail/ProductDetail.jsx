import propTypes from "prop-types";
import styles from "./_ProductDetail.module.scss";

const ProductDetail = ({ product }) => {
	const {
		variants: {
			edges: [
				{
					node: {
						price: { amount, currencyCode },
					},
				},
			],
		},
	} = product;
	const price = Number(amount);

	return (
		<div className={styles.productContainer}>
			<div className={styles.zoomWrapper}>
				<img
					src={product.featuredImage.url}
					alt={`${product.title} product image`}
				/>
			</div>
			<div className={styles.productDetails}>
				<h1 className={styles.title}>{product.title}</h1>
				<div className={styles.price}>
					<p>
						${price}
						<span> {currencyCode}</span>
					</p>
					<p>
						<span>Shipping calculated at checkout</span>
					</p>
				</div>
				<div className={styles.addToCart}>
					<p>
						Quantity: <span></span>
					</p>
					<button className={styles.addBtn}>Add to cart</button>
				</div>
				<p className={styles.description}>{product.description}</p>
			</div>
		</div>
	);
};

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
		edges: propTypes.arrayOf(
			propTypes.shape({
				node: propTypes.shape({
					price: propTypes.shape({
						amount: propTypes.string,
						currencyCode: propTypes.string,
					}),
				}),
			})
		),
	}),
});

ProductDetail.propTypes = {
	product: productShape,
};
export default ProductDetail;