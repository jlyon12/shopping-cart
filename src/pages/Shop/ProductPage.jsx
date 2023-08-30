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

	return (
		<section className={styles.productDetail}>
			{<ProductDetail product={product} variants={edges} />}
		</section>
	);
};

export default ProductPage;
export { loader };
