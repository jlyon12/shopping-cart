import { useLoaderData } from "react-router";

import { getProductVariants } from "../../api/api";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import styles from "./_ShopLayout.module.scss";

const loader = ({ params }) => {
	const { productHandle } = params;
	return getProductVariants(productHandle);
};
const ProductPage = () => {
	const data = useLoaderData();

	return (
		<section className={styles.productDetail}>
			{<ProductDetail product={data} />}
		</section>
	);
};

export default ProductPage;
export { loader };
