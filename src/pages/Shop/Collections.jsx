import { useLoaderData } from "react-router";
import { getCollections } from "../../api/api";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import styles from "./_ShopLayout.module.scss";

const loader = () => {
	return getCollections();
};
const Collections = () => {
	const data = useLoaderData();
	const renderCards = data.map(({ node }) => (
		<CollectionCard key={node.id} collection={node} />
	));
	return <section className={styles.collectionGrid}>{renderCards}</section>;
};

export default Collections;
export { loader };
