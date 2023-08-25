import { useLoaderData } from "react-router";

import { getProductsInCollection } from "../../api/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./_ShopLayout.module.scss";

const loader = ({ params }) => {
	const { collectionHandle } = params;
	return getProductsInCollection(collectionHandle);
};
const Products = () => {
	const data = useLoaderData();
	const renderCards = data.map(({ node }) => (
		<ProductCard key={node.id} product={node} />
	));
	return <section className={styles.collectionGrid}>{renderCards}</section>;
};

export default Products;
export { loader };
