import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./_ProductCard.module.scss";

const ProductCard = ({ product }) => {
	const {
		variants: {
			edges: [
				{
					node: {
						price: { amount },
					},
				},
			],
		},
	} = product;
	const price = Number(amount);
	return (
		<div className={styles.productCard}>
			<div className={styles.zoomWrapper}>
				<img
					src={product.featuredImage.url}
					alt={`${product.title} product image`}
				/>
			</div>
			<Link to={product.handle} className={styles.linkWrapper}>
				{product.title} <span>${price}</span>
			</Link>
		</div>
	);
};

const productShape = propTypes.shape({
	handle: propTypes.string,
	id: propTypes.string,
	title: propTypes.string,
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

ProductCard.propTypes = {
	product: productShape,
};
export default ProductCard;
