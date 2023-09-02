import { useLoaderData } from "react-router";

import { getProductVariants } from "../../api/api";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import styles from "./_ShopLayout.module.scss";

const loader = ({ params }) => {
	const { productHandle } = params;
	return getProductVariants(productHandle);
};
const ProductPage = () => {
	const { product, edges } = useLoaderData();
	const variantOptions = edges.map(({ node }) => {
		return {
			variantId: node.id.split("gid://shopify/ProductVariant/")[1],
			color: node.title.split(" ")[2],
			size: node.title.split(" ")[0],
			imgUrl: node.image.url,
			price: Number(node.price.amount),
			currencyCode: node.price.currencyCode,
		};
	});

	return (
		<section className={styles.productDetail}>
			{<ProductDetail product={product} variants={variantOptions} />}
		</section>
	);
};

export default ProductPage;
export { loader };
